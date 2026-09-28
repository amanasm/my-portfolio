import { useEffect, useRef, useState, createContext, useContext, type ReactNode } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { ActionButton } from './Button';

const SoundContext = createContext({ play: () => {}, enabled: false, toggle: () => {} });
export const useSound = () => useContext(SoundContext);
export function Interactions({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const audio = useRef<AudioContext | null>(null);
  const play = () => {
    if (!enabled) return;
    try {
      const context = audio.current ?? new AudioContext(); audio.current = context;
      if (context.state === 'suspended') void context.resume();
      const oscillator = context.createOscillator(); const gain = context.createGain();
      oscillator.type = 'sine'; oscillator.frequency.setValueAtTime(620, context.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(920, context.currentTime + .09);
      gain.gain.setValueAtTime(.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(.035, context.currentTime + .015);
      gain.gain.exponentialRampToValueAtTime(.0001, context.currentTime + .13);
      oscillator.connect(gain); gain.connect(context.destination);
      oscillator.start(); oscillator.stop(context.currentTime + .14);
    } catch { /* Audio is optional when the browser blocks it. */ }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const dot = document.querySelector<HTMLElement>('.cursor-dot');
    const ring = document.querySelector<HTMLElement>('.cursor-ring');
    if (!dot || !ring) return;
    let x = -100, y = -100, tx = -100, ty = -100, frame = 0;
    const move = (e: PointerEvent) => { tx = e.clientX; ty = e.clientY; dot.style.transform = `translate3d(${tx}px,${ty}px,0)`; };
    const hover = (e: PointerEvent) => { ring.classList.toggle('is-hovering', !!(e.target as HTMLElement).closest('a, button')); };
    const tick = () => { x += (tx - x) * .16; y += (ty - y) * .16; ring.style.transform = `translate3d(${x}px,${y}px,0)`; frame = requestAnimationFrame(tick); };
    window.addEventListener('pointermove', move); window.addEventListener('pointerover', hover); tick();
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerover', hover); cancelAnimationFrame(frame); };
  }, []);
  return <SoundContext.Provider value={{ play, enabled, toggle: () => setEnabled(v => !v) }}>
    {children}
    <ActionButton className="sound-toggle" variant="quiet" onClick={() => setEnabled(v => !v)} aria-label={enabled ? 'Mute interface sounds' : 'Enable interface sounds'} title={enabled ? 'Mute sounds' : 'Enable sounds'}>{enabled ? <Volume2 size={18} /> : <VolumeX size={18} />}</ActionButton>
    <span className="cursor-dot" aria-hidden="true" /><span className="cursor-ring" aria-hidden="true" />
  </SoundContext.Provider>;
}
export function RevealTitle({ children, className = '' }: { children: string; className?: string }) {
  return <h2 className={`section-title reveal reveal-words ${className}`}>{children.split(/(\s+)/).map((word, i) => <span className={word.includes("\n") ? "word word-break" : "word"} key={i}><span>{word.trim() ? word : "\u00a0"}</span></span>)}</h2>;
}
