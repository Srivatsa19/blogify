import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'

const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://blogify-lake.vercel.app';

const getData = async () => {
  const response = await fetch(`${baseUrl}/api/categories`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed")
  }

  return response.json()

}

const CategoryList = async () => {

  const data = await getData();

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Popular Categories</h1>
        <div className={styles.categories}>
          {data?.map(item => (<Link href={`/blog?cat=${item.slug}`} className={`${styles.category} ${styles[item.slug]}`} key={item._id}>
            {item.img && <Image src={item.img} alt='' width={32} height={32} className={styles.image} />}
            {item.title}
          </Link>))}
        </div>
    </div>
  )
}

export default CategoryList