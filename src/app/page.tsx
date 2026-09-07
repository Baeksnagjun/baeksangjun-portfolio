import Archive from '../components/sections/Archive';
import About from '../components/sections/About';
import Career from '../components/sections/Career';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';


export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Career />
      <Archive />
    </>
  );
}
