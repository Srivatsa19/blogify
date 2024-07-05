import React from 'react'
import styles from "./cardList.module.css"
import Pagination from '../pagination/Pagination'
import Image from 'next/image'
import { Card } from '../card/Card'

const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://blogify-lake.vercel.app';

const getData = async (page, cat) => {
  const response = await fetch(`${baseUrl}/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed")
  }

  return response.json()

}

const CardList = async ({page, cat}) => {

  const {posts, count} = await getData(page, cat)

  const POSTS_PER_PAGE = 2;

  const hasPrevPage = POSTS_PER_PAGE * (page - 1) > 0;
  const hasNextPage = POSTS_PER_PAGE * (page - 1) + POSTS_PER_PAGE < count;

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Recent Posts</h1>
        <div className={styles.posts}>
          {posts?.map((item) => (
            <Card item={item} key={item._id}/>
          ))}
        </div>
        <Pagination page={page} hasPrevPage={hasPrevPage} hasNextPage={hasNextPage}/>
    </div>
  )
}

export default CardList