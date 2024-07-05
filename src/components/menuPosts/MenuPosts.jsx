import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./menuPosts.module.css"

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/mostPopular", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed")
  }

  return response.json()

}

export const MenuPosts = async ({ withImage }) => {

  const data = await getData();

  return (
    <div className={styles.items}>
      {data?.map(item => (
        <Link key={item.slug} href={`/posts/${item.slug}`} className={styles.item}>
          {withImage && item.img &&
            (<div className={styles.imageContainer}>
              <Image src={item.img} alt='' fill className={styles.image} />
            </div>)
          }
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>{item.catSlug}</span>
            <h3 className={styles.postTitle}>{item.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{item.user.name}</span>
              <span className={styles.date}> - {item.createdAt.substr(0, 10)}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
