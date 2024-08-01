import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'
import Link from 'next/link'

const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://blogify-lake.vercel.app';

const getData = async () => {
  const response = await fetch(`${baseUrl}/api/mostPopular?take=${1}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed")
  }

  return response.json()

}

const Featured = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
          <b>Hey, Blogify here!</b> Discover new stories and creative ideas.
        </h1>
        <div className={styles.post}>
          {data[0].img &&
            (<div className={styles.imgContainer}>
              <Image src={data[0].img} alt='' fill className={styles.image} />
            </div>)
          }
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>{data[0].title}</h1>
            <div className={styles.postDesc} dangerouslySetInnerHTML={{ __html: data[0]?.desc }} />
            <Link href={`/posts/${data[0].slug}`}>
              <button className={styles.button}>Read More</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Featured