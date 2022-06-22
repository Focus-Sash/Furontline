import Head from "next/head";
import { getPostMetaDataArrayInDirPath, toFullPath } from "../lib/posts";
import { PageContent } from "../lib/hubpage-content";

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

export default Misc;
