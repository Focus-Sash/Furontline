import Head from "next/head";
import { getPostMetaDataArrayInDirPath, toFullPath } from "../lib/posts";
import { PageContent } from "../lib/hubpage-content";

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

export default Reviews;
