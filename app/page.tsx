import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  let res = await fetch("https://api.vercel.app/blog");
  let posts = await res.json();
  return (
    <div className={styles.page}>
      <h1>Blog</h1>
      <ul className={styles.posts}>
        {posts.map((post: any) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
