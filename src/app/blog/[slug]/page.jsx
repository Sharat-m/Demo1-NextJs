import Image from "next/image";
import styles from "./siglePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async (slug) => {
//   // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"});
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  // FETCH DATA WITH AN API
  // const post = await getData(slug);
  // FETCH DATA WITHOUT AN API
  const post = await getPost(slug);
  console.log(post);
  return (
    <div className={styles.container}>
      {post.img && <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={post.img}
          alt=""
          fill
        />
      </div>}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
         
          {/* This commented div author is created seperate component(postUser) to increase page speed  */}
          {/* <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Sharat</span>
          </div> */}
          {/* Suspense is used from react it is used for showing the loading text */}
        {post &&  <Suspense fallback={<div>Loading.....</div>}>
            <PostUser userId={post.userId} />
          </Suspense>}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            {/* updating the date from the database  */}
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
          </div>
        </div>
        <div className={styles.content}> {post.desc}</div>
      </div>
    </div>
  );
};
export default SinglePostPage;
