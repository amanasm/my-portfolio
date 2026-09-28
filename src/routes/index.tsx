import { createFileRoute } from '@tanstack/react-router';
import { Interactions } from '../components/portfolio/Interactions';
import { Navigation, Hero, About, Skills, Projects, Experience, Contact } from '../components/portfolio/Sections';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Amana S M — Developer & CSE Student' },
    { name: 'description', content: 'Portfolio of Amana S M, a Computer Science & Engineering student building practical digital experiences through full-stack development and creative problem-solving.' },
    { property: 'og:title', content: 'Amana S M — Developer & CSE Student' },
    { property: 'og:description', content: 'Explore Amana’s projects, skills, experience and creative approach to building useful digital products.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});
function Index() { return <Interactions><header className="site-header"><Navigation /></header><main><Hero /><About /><Skills /><Projects /><Experience /><Contact /></main></Interactions>; }
