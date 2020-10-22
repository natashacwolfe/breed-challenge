import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import fetch from "node-fetch";
import Layout from "../components/Layout";

export default function Home({ randomImage }) {
  return (
    <Layout>
      <Head>
        <title>Breeds</title>
      </Head>
      <div className={styles.container}>
        <span>Welcome to the breed challenge!</span>
        <span>Here is a random cute pup,</span>
        <span>go to menu to explore more breeds!</span>
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src={randomImage.message}
            alt="Random cuteness!"
          />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const randomImage = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      randomImage,
    },
  };
}
