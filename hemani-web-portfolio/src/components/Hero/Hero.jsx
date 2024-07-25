import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi I am Hemani</h1>
        <p className={styles.description}> I am a sophmore who is a double major in compsci & Econ and I am aspiring full stack developer </p>
        <a href="mailto:hemanialaparthi@gmail.com" className={styles.contactBtn}>Contact Me!</a>
    </div>
    <img src={getImageUrl("hero/pfp.png")} alt="profile picure" className={styles.heroImg}/>
        {/* highlight 2 of the pages */}
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
  </section>
}

export default Hero