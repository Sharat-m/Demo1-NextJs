import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";


// Fetch the data from the API
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const BlogPage = async () => {
  // console.log(params);
  // console.log(searchParams);
  const posts = await getData();
  console.log(posts);
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </div>
  );
};
export default BlogPage;
