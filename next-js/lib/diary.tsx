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


const Diary = ({allPostsData}: any) => {
  return (
    <>
    
    <Head>
        <title>{`日記 - ふろんてぃあ*`}</title>
      </Head>
      <Page
      allPostsData={allPostsData}
      head="日記"
      summary="** 内容の薄い日記 **"
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

export default Diary;
