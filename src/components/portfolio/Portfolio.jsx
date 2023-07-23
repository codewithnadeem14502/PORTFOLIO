import React from "react";
import "./portfolio.css";
import IMG1 from "../../assests/portfolio1.png";
import IMG2 from "../../assests/portfolio2.png";
import IMG3 from "../../assests/portfolio3.png";
import IMG4 from "../../assests/portfolio4.png";
import IMG5 from "../../assests/portfolio5.png";
import IMG6 from "../../assests/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "TutorialHub 📺",
    github: "https://github.com/codewithnadeem14502/-TutorialHub",
    demo: " https://tutorialhub-v1.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "NewsExpress📰",
    github: "https://github.com/codewithnadeem14502/NewsExpress",
    demo: "https://newsexpresss.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "MovieNation 🍿",
    github: "https://github.com/codewithnadeem14502/MovieNation",
    demo: "https://movieenation.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "TripPlanner 🌴",
    github: "https://github.com/codewithnadeem14502/TripPlanner",
    demo: " https://triipplanner.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Eat-Slip 🍴",
    github: "https://github.com/codewithnadeem14502/Eat-Slip",
    demo: " https://eatandslip.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "ShopperLand 🛒",
    github: "https://github.com/codewithnadeem14502/ShoperLand",
    demo: "https://shoperland.netlify.app/",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>

      <div className="container protfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="protfolio_item">
              <div className="protfolio_item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="protfolio_item_cta">
                <a href={github} className="btn" target="_blank">
                  {" "}
                  GitHub
                </a>

                <a href={demo} className="btn btn-primary" target="_blank">
                  {" "}
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Portfolio;
