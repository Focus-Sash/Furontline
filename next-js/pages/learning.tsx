import Head from "next/head";
import NextLink from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Post from "../components/post-card";
import Footer from "../components/footer";
import Page from "../components/hub-template";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


const Learning = ({allPostsData}: any) => {
  return (
    <>
    
    <Head>
        <title>{`勉強 - ふろんてぃあ*`}</title>
      </Head>
      <Page
      allPostsData={allPostsData}
      head="勉強"
      summary="** 勉強したことについて **"
      pageContent={PageContent}
    />
      </>
    
  );
};


const PageContent: JSX.Element = (
  <>
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </>
);

export default Learning;
