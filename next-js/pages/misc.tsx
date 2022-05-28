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


const Misc = ({allPostsData}: any) => {
  return (
    <>
    
    <Head>
        <title>{`雑記 - ふろんてぃあ*`}</title>
      </Head>
      <Page
      allPostsData={allPostsData}
      head="雑記"
      summary="** とりとめのないこと **"
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

export default Misc;
