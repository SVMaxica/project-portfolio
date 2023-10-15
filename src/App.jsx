
import { Projects } from './components/projects/Projects';
import { Presentation } from './components/presentation/Presentation';
import { Tech } from './components/tech/Tech';
import { Articles } from './components/articles/Articles';
import { Skills } from './components/skills/Skills';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import './App.css';

export const App = () => {
  return (
    <div className='app-wrapper'>
      <Presentation />
      <Tech />
      <Projects />
      <Articles />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
};
