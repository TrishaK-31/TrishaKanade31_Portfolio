import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Experience } from '../components/Experience';
import { Workshops } from '../components/Workshops';
import { Education } from '../components/Education';
import { Certifications } from '../components/Certifications';
import { Contact } from '../components/Contact';

export default function Home({ onOpenResume }) {
  return (
    <main className="flex-1">
      <Hero onOpenResume={onOpenResume} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Workshops />
      <Education />
      <Certifications />
      <Contact />
    </main>
  );
}
