import React from 'react'
import style from './Content.module.css'
import Image from "../assets/Image.png";

const Content = () => {
  return (
    <div className={style.container}>
        <div className={style.firstDiv}>
            <div className={style.firstDivFirstChild}>
                <p className={style.firstContent}>Landing Page</p><br />
                <p className={style.firstContent}>template for</p><br />
                <p className={style.firstContent}>developers &</p><br />
                <p className={style.firstContent}>startups</p><br />
            </div>
            <div>
                <p className={style.secondContent}>Beatifully designed templates using React.js, and</p>
                <p className={style.secondContent}>design and style-components! Save weeks of time</p>
                <p className={style.secondContent}>and build your landing page in minutes</p>
            </div>
        </div>
        <div className={style.image} >
            <img width={600} src={Image} alt="" />
        </div>
    </div>
  )
}

export default Content