import { useEffect, useRef } from 'react';
import characterAsset from '../../assets/character.png';

const COUNT = 64;
export function CharacterCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)');
    let cancelled = false;
    let raf = 0;
    let angle = 0;
    let target = 0;
    let neutral = true;
    let current = -1;
    const images: (HTMLImageElement | undefined)[] = new Array(COUNT);
    const center = new Image();
    center.src = '/frames/center.webp';
    const draw = (image: HTMLImageElement) => {
      if (!image.complete || !image.naturalWidth) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round(canvas.clientWidth * dpr), h = Math.round(canvas.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(image, 0, 0, w, h);
    };
    center.onload = () => draw(center);
    const move = (e: PointerEvent) => {
      if (media.matches) return;
      const rect = canvas.getBoundingClientRect();
      // Face is located near the horizontal center and upper half of the video composition.
      const dx = e.clientX - (rect.left + rect.width * .5);
      const dy = e.clientY - (rect.top + rect.height * .39);
      neutral = Math.hypot(dx, dy) < 115;
      target = (Math.atan2(dy, dx) + Math.PI / 2 + Math.PI * 2) % (Math.PI * 2);
    };
    window.addEventListener('pointermove', move, { passive: true });
    const animate = () => {
      if (cancelled) return;
      if (media.matches || neutral) {
        if (current !== -1) { draw(center); current = -1; }
      } else {
        let diff = ((target - angle + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
        angle = (angle + diff * .24 + Math.PI * 2) % (Math.PI * 2);
        const index = Math.round(angle / (Math.PI * 2) * COUNT) % COUNT;
        if (index !== current && images[index]?.complete) { draw(images[index]); current = index; }
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    // Start loading after the neutral frame has had an opportunity to paint.
    const timer = window.setTimeout(() => {
      for (let i = 0; i < COUNT; i++) {
        const image = new Image();
        image.src = `/frames/look-${String(i + 1).padStart(2, '0')}.webp`;
        images[i] = image;
      }
    }, 350);
    return () => { cancelled = true; cancelAnimationFrame(raf); clearTimeout(timer); window.removeEventListener('pointermove', move); };
  }, []);
  return <div className="character-stage" aria-label="Animated portrait of Amana following the pointer" role="img"><img className="character-fallback" src={characterAsset} alt="" aria-hidden="true" /><canvas ref={canvasRef} aria-hidden="true" /></div>;
}
