import Head from "next/head";
import { getCategoryPostsData } from "../lib/posts";
import HubPage from "../components/hub-template";
import { Text } from "@chakra-ui/react";
import DiaryCard from "../components/diary-card";
import PostCard from "../components/post-card";

const categoryName: string = "diaries";

export async function getStaticProps() {
  const categoryPostsData = getCategoryPostsData(categoryName);
  return {
    props: {
      allPostsData: categoryPostsData,
    },
  };
}

const Diary = ({ allPostsData }: any) => {
  return (
    <>
      <Head>
        <title>{`日記 - ふろんてぃあ*`}</title>
      </Head>
      <HubPage
        allPostsData={allPostsData}
        head="日記"
        summary="内容の薄い日記"
        pageContent={PageContent(allPostsData)}
      />
    </>
  );
};

const PageContent = (allPostsData: any): JSX.Element => {
  return (
    <>
      {allPostsData.map((postData: any) => (
        <PostCard postData={postData} key={postData.id} />
      ))}
    </>
  );
};

export default Diary;
