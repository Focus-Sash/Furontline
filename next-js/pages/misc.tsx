import Head from "next/head";
import NextLink from "next/link";
import { getCategoryPostsData } from "../lib/posts";
import PostCard from "../components/post-card";
import Footer from "../components/footer";
import HubPage from "../components/hub-template";

const categoryName: string = "misc";

export async function getStaticProps() {
  const allPostsData = getCategoryPostsData(categoryName);
  return {
    props: {
      allPostsData,
    },
  };
}

const Misc = ({ allPostsData }: any) => {
  return (
    <>
      <Head>
        <title>{`雑記 - ふろんてぃあ*`}</title>
      </Head>
      <HubPage
        allPostsData={allPostsData}
        head="雑記"
        summary="とりとめのないこと"
        pageContent={PageContent(allPostsData)}
      />
    </>
  );
};

const PageContent = (allPostsData: any): JSX.Element => {
  return (
    <>
      {allPostsData.map((postData: any) => {
        console.log("map", postData);
        return <PostCard postData={postData} key={postData.id} />;
      })}
    </>
  );
};

export default Misc;
