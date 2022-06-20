import Head from "next/head";
import { getPostMetaDataArrayInDirPath, toFullPath } from "../lib/posts";
import PostCard from "../components/post-card";
import HubPage from "../components/hub-template";

const categoryName = "posts/reviews";

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

const Reviews = ({ allPostsData }: any) => {
  return (
    <>
      <Head>
        <title>{`作品感想 - ふろんてぃあ*`}</title>
      </Head>
      <HubPage
        allPostsData={allPostsData}
        head="作品感想"
        summary="作品の感想"
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

export default Reviews;
