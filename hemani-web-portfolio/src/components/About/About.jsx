import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me!</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/img2.png")}
          alt="Me!"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/backend.png")} alt="backend icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I'm a backend developer with experience in building back-end systems and using APIs. I am mostly proficient in Python & Java.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontend.png")} alt="frontend icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I have experiences building responsive sites with the use of many different languages and frameworks.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/hobby.png")} alt="hobby icon" />
            <div className={styles.aboutItemText}>
              <h3>Hobbies</h3>
              <p>
                When I am not coding, you can usually find me taking naps or hanging out with my friends. I love to play badminton and would never say no to a friendly match!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About