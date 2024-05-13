 /**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/IMG.jpeg";


const imageAltText = "A man standing on the road puting on black shirt";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Back-End Developer | Microsoft Learn Student Ambassador - Bugema University | AI & ML Enthusiast";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Front-End Skills: HTML, CSS, and JavaScript, which are fundamental for building the visual and interactive elements of a website.",
  "Back-End Skills: Python (Django), a popular web framework that simplifies the process of creating complex web applications",
  "Design Skills: Web Design, User Experience (UX), Inclusive Design, Mobile User Interfaces, and Graphic Design, which encompass the aesthetic and usability aspects of web development",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I'm a driven back-end developer with a knack for tackling complex challenges with innovative solutions. My expertise lies in crafting robust and scalable web applications using Python (Django). I thrive on leveraging my back-end knowledge to create the hidden engines that power seamless user experiences.";
  "I'm constantly seeking to push boundaries and explore new horizons. Machine Learning (ML) and Artificial Intelligence (AI) represent the future of tech, and I'm eager to integrate their capabilities into my development process.  Envisioning back-end systems that can learn and adapt, I'm excited to contribute to the evolution of intelligent web applications"


const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
