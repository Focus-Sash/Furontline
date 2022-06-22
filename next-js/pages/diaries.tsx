import Head from "next/head";
import { getPostMetaDataArrayInDirPath, toFullPath } from "../lib/posts";
import HubPage from "../components/hub-template";
import { PageContent } from "../lib/hubpage-content";

const categoryName: string = "posts/diaries";

export async function getStaticProps() {
  const categoryPostsData = getPostMetaDataArrayInDirPath(
    toFullPath(categoryName)
  );
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

export default Diary;
