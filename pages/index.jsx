import {
  BuyMeCoffee,
  Cover,
  PostGrid,
  Section,
  SocialNetworks,
  Title,
  Post,
  Button,
} from "@/components";
import Head from "next/head";
// import Image from 'next/image'
import { loadPosts } from "./api/posts";
import React, { useState } from "react";
const LOAD_MORE_STEP = 2;

export default function Home({ initialPosts, total }) {
  const [posts, setPosts] = useState(initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  const isLoadButton = total > loadedAmount;

  const getMorePosts = async () => {
    setLoading = true;

    try {
      const data = await fetch(
        `/api/posts?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`
      ).then((response) => response.json());
      setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
      setPosts([...posts, ...data.posts]);

      setLoading = false;
    } catch (error) {
      console.log(error);
      setLoading = false;
    }
  };

  return (
    <>
      <Head>
        <title>SoJoon cat blog</title>
        <meta name="description" content="About so cute cat and his life" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          data-n-head="ssr"
          rel="icon"
          data-hid="favicon-32"
          type="image/png"
          size="32"
          href="https://img.icons8.com/material-outlined/384w/cat-footprint.png"
        ></link>
      </Head>
      <main>
        <Section>
          <Cover title="SoJoon <br/> cat" />
          <SocialNetworks />
          <BuyMeCoffee />
        </Section>
        <Section>
          <Title>New Post</Title>
          <PostGrid>
            {posts.map((post) => (
              <Post key={post.slug.current} {...post} />
            ))}
          </PostGrid>
          {isLoadButton && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button onClick={getMorePosts} disabled={loading}>
                Load more posts
              </Button>
            </div>
          )}
        </Section>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEP);

  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
};
