import './Articles.css';
import { Buttons } from '../Buttons/Buttons';
import ReadMoreSVG from '../../assets/note-rounded-square-interface-symbol-svgrepo-com.svg';
import waveLine from '../../assets/dividerDesktop.svg';
import { forwardRef } from 'react';

const exampleArticles = [
  {
    imageUrl: 'images/roller-coaster.jpg',
    title: 'Emotions during a bootcamp!',
    preview:
      "Attending a web developer bootcamp is an emotional rollercoaster. It's a constant....",
    link: 'https://www.linkedin.com/posts/sandra-gustafsson-3665061a5_frontend-developer-bootcamp-activity-7130534507249606656-mJbW/?utm_source=share&utm_medium=member_desktop',
    publishDate: 'November 24, 2023',
  },
  {
    imageUrl: 'images/code.jpg',
    title: 'Exited to share our final project',
    preview:
      'After weeks of hard work and collaboration, our team  consisting of myself, Frida, Caro, and Emmy is thrilled to present our.... ',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7152998899408871425/',
    publishDate: 'January 16, 2024',
  },
  // {
  //   imageUrl: 'images/javascript.jpg',
  //   title: 'The Future of Web',
  //   preview:
  //     'A look into the future trends and technologies that are shaping the web...',
  //   link: 'https://www.google.se',
  //   publishDate: 'October 1, 2023',
  // },
  // {
  //   imageUrl: 'images/python.jpg',
  //   title: 'CSS Secrets and Tips',
  //   preview:
  //     'Unravel the secrets of CSS to build beautiful and responsive designs...',

  //   link: 'https://www.google.se',
  //   publishDate: 'October 1, 2023',
  // },
];

const ArticleCard = ({ imageUrl, title, preview, link, publishDate }) => {
  return (
    <div className="article-card">
      <img src={imageUrl} alt={title} className="article-image" />
      <span className="publish-date">{publishDate}</span>
      <h3>{title}</h3>
      <p>{preview}</p>
      <Buttons
        type="read-more"
        text="Read More"
        icon={<img src={ReadMoreSVG} alt="Icon" />}
        href={link}
      />
    </div>
  );
};

export const Articles = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="divider-wrapper">
        <img src={waveLine} alt="dividing line between slides"></img>
      </div>
      <div className="articles-wrapper">
        <h1>My Words</h1>
        <div className="articles-grid">
          {exampleArticles.map((article) => (
            <ArticleCard
              key={article.title}
              imageUrl={article.imageUrl}
              publishDate={article.publishDate}
              title={article.title}
              preview={article.preview}
              link={article.link}
            />
          ))}
        </div>
      </div>
    </>
  );
});
