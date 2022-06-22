import Head from "next/head";
import { getPostMetaDataArrayInDirPath, toFullPath } from "../lib/posts";
import HubPage from "../components/hub-template";
import { PageContent } from "../lib/hubpage-content";

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

export default Learning;
