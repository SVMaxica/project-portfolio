import './Articles.css';
import { Buttons } from '../Buttons/Buttons';
import waveLine from '../../assets/divider.png';

const exampleArticles = [
  {
      imageUrl: "images/img.png",
      title: "The Joy of Programming",
      preview: "Explore the world of programming and understand the joy it brings to many...",
      link: "https://www.google.se",
      publishDate: "October 1, 2023"
  },
  {
      imageUrl: "images/img-2.png",
      title: "Journey through React",
      preview: "Dive into React's ecosystem and its paradigms to build robust web applications...",
      link: "https://www.google.se",
      publishDate: "October 1, 2023"
  },
  {
      imageUrl: "images/img-3.png",
      title: "The Future of Web",
      preview: "A look into the future trends and technologies that are shaping the web...",
      link: "https://www.google.se",
      publishDate: "October 1, 2023"
  },
  {
      imageUrl: "images/img-4.png",
      title: "CSS Secrets and Tips",
      preview: "Unravel the secrets of CSS to build beautiful and responsive designs...",

      link: "https://www.google.se",
      publishDate: "October 1, 2023"
  }
];

const ArticleCard = ({ imageUrl, title, preview, link, publishDate }) => {
  return (
      <div className="article-card">
          <img src={imageUrl} alt={title} className="article-image" />
          <span className="publish-date">{publishDate}</span>
              <h3>{title}</h3>
              <p>{preview}</p>
              <Buttons type="read-more" text="Read More" href={link} />
      </div>
  );
};

export const Articles = () => {


  return (
<>
      {/* <div className='divider-wrapper'>
        <img src={waveLine} alt='dividing line between slides'></img>
      </div> */}
      <div className='articles-wrapper'>
              <h1>My Words</h1>
              <div className="articles-grid">
                  {exampleArticles.map(article => <ArticleCard
                      key={article.title}
                      imageUrl={article.imageUrl}
                      publishDate={article.publishDate}
                      title={article.title}
                      preview={article.preview}
                      link={article.link} />
                  )}

              </div>
          </div>
          </>  
  ); 
};
