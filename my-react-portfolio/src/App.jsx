
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
    <div>
      <Presentation />
      <Tech />
      <Projects />
      <Articles articles={[
    {
        imageUrl: "path_to_image1.jpg",
        title: "Article 1",
        preview: "This is a short preview of Article 1...",
        link: "#"
    },
    {
        imageUrl: "path_to_image2.jpg",
        title: "Article 2",
        preview: "This is a short preview of Article 2...",
        link: "#"
    },
]} />

      <Skills />
      <Contact />
      <Footer />
    </div>
  )
};
