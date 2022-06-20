import Head from "next/head";
import { getPostMetaDataArrayInDirPath, toFullPath } from "../lib/posts";
import PostCard from "../components/post-card";
import HubPage from "../components/hub-template";

const categoryName: string = "posts/learning";

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

const Learning = ({ allPostsData }: any) => {
  return (
    <>
      <Head>
        <title>{`勉強 - ふろんてぃあ*`}</title>
      </Head>
      <HubPage
        allPostsData={allPostsData}
        head="勉強"
        summary="勉強したことについて"
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

export default Learning;
