import Head from "next/head";
import { getPostMetaDataArrayInDirPath, toFullPath } from "../lib/posts";
import PostCard from "../components/post-card";
import HubPage from "../components/hub-template";

const categoryName: string = "posts/misc";

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
        return <PostCard postData={postData} key={postData.id} />;
      })}
    </>
  );
};

export default Misc;
