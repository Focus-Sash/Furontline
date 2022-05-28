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


const Reviews = ({allPostsData}: any) => {
  return (
    <>
    
    <Head>
        <title>{`作品感想 - ふろんてぃあ*`}</title>
      </Head>
      <Page
      allPostsData={allPostsData}
      head="作品感想"
      summary="** 読んだ本や見た作品の感想 **"
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

export default Reviews;
