import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm {""}
          <TypeAnimation
            sequence={[
              "Hemani.",
              2000, // pause for 2 seconds
              "a Student.",
              2000,
              "a Full Stack Developer.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className={styles.rolesAnimation}
          />
        </h1>
        <p className={styles.description}>
          Rising sophomore @ Allegheny College. Double majoring in Computer Science & Economics.
        </p>
        <a href="mailto:hemanialaparthi@gmail.com" className={styles.contactBtn}>Contact Me!</a>
      </div>
      <img src={getImageUrl("hero/pfp.png")} alt="profile picture" className={styles.heroImg}/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
};

export default Hero;
