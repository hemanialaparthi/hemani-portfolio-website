import React from 'react'
import skills from '../../data/skills.json'
import { getImageUrl } from "../../utils"
import education from "../../data/education.json"
import styles from "./Skills.module.css"

export const Skills = () => {
    return <section className={styles.container} id="Skills">
        <h2 className={styles.title}>Education</h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skill, id) => {
                    return <div key={id} className={styles.skills}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title}></img>
                        </div>
                        <p>{skill.title}</p>
                    </div>
                })
                }</div>
            <ul className={styles.education}>
                {
                    education.map((educationItem, id) => {
                        return <li key={id} className={styles.educationItem}>
                            <img src={getImageUrl(educationItem.imageSrc)} alt={`${educationItem.school} Logo`}/>
                            <div className={styles.educationItemDetails}>
                                <h3>
                                    {`${educationItem.school}, ${educationItem.major}`}
                                </h3>
                                <p>{`${educationItem.startDate} - ${educationItem.endDate}`}</p>
                                <ul>{educationItem.extracurs.map((extracur, id) => {
                                    return <li key={id}>{extracur}</li>
                                })}</ul>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </section>;
}
