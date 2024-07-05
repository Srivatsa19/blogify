import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
          <b>Hey, Blogify here!</b> Discover new stories and creative ideas.
        </h1>
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt='' fill/>
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p className={styles.postDesc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui adipisci asperiores molestias esse nostrum, aliquid odit, corporis aperiam modi nobis itaque fuga consectetur. Laborum ipsum accusantium ab laboriosam enim corrupti.   
            </p>
            <button className={styles.button}>Read More</button>
          </div>
        </div>
    </div>
  )
}

export default Featured