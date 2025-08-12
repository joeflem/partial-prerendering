import Image from "next/image";
import styles from "./page.module.css";
import { Suspense } from "react";
import GhostPosts from "./components/ghostPosts";

async function BlogPosts() {
  let res = await fetch("https://api.vercel.app/blog");
  let posts = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 2000));

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
      <h1>Welcome</h1>
      <Image
        src="https://melvinnicholsonphotography.co.uk/wp-content/uploads/2019/04/0C5A4247-1-scaled.jpg"
        alt="Lake District"
        width={500}
        height={300}
      />
      <p>This is a sample application to demonstrate Next.js features.</p>
      <p>Check out the blog posts below:</p>
      <h1>Posts</h1>
      <p></p>
      <Suspense fallback={<GhostPosts />}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}
