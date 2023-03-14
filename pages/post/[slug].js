import React from 'react';
import { format } from 'date-fns';
import { client } from '../../lib/client';
import styles from './styles.module.scss';
import { Article, Content, Title } from '../../components';

const Post = ({ post }) => {
  console.log(post);

  const date = format(new Date(post._createdAt
  ), 'dd MMM yyyy');
  return (
    <Article backUrl='/' className={styles.post}>
      <Title className={styles.postTitle}>
        {post.title}
      </Title>
      <p className={styles.postDate}>{date}</p>
      <Content body={post.body} />
    </Article>
  )
}

export default Post;

export async function getStaticPaths() {
  const query = `*[type=='post']{
slug{
  current
}
  }`;
  const posts = await client.fetch(query);
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current
    }
  }));
  return {
    paths, fallback: 'blocking'
  }
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type=='post' && slug.current == '${slug}'][0]`;

  const post = await client.fetch(query);

  return {
    props: {
      post
    }
  }
}