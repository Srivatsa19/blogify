import Menu from "@/components/menu/Menu"
import styles from "./singlePage.module.css"
import Image from "next/image"
import Comments from "@/components/comments/Comments"

const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://blogify-lake.vercel.app';

const getData = async (slug) => {
  const response = await fetch(`${baseUrl}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed")
  }

  return response.json()

}

export const SinglePage = async ({params}) => {

  const {slug} = params;

  const data = await getData(slug);
  console.log(data)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (<div className={styles.userImageContainer}>
              <Image src={data.user.image} alt="" fill className={styles.avatar} />
            </div>)}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>{data?.createdAt.substring(0, 10)}</span>
            </div>
          </div>
        </div>
        {data?.img && <div className={styles.imageContainer}>
          <Image src={data?.img} alt="" fill className={styles.image} />
        </div>}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description} dangerouslySetInnerHTML={{ __html: data?.desc }} />
          <div className={styles.comment}>
            <Comments postSlug={slug}/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
