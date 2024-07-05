"use client";
import React from 'react'
import styles from "./pagination.module.css"
import { useRouter } from 'next/navigation';

const Pagination = ({page, hasPrevPage, hasNextPage}) => {

  const router = useRouter();

  return (
    <div className={styles.container}>
        <button disabled={!hasPrevPage} className={styles.button} onClick={() => router.push(`?page=${page - 1}`)}>Previous</button>
        <button disabled={!hasNextPage} className={styles.button} onClick={() => router.push(`?page=${page + 1}`)}>Next</button>
    </div>
  )
}

export default Pagination