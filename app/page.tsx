import Image from "next/image";
import styles from "./page.module.css";
import { Suspense } from "react";

async function BlogPosts() {
  let res = await fetch("https://api.vercel.app/blog");
  let posts = await res.json();

  return (
    <ul className={styles.posts}>
      {posts.map((post: any) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default async function Home() {
  return (
    <div className={styles.page}>
      <h1>Posts</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}
