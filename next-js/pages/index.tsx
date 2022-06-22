import Head from "next/head";
import { getAllPostsMetaData } from "../lib/posts";
import { PageContent } from "../lib/hubpage-content";
import HubPage from "../components/hub-template";

export async function getStaticProps() {
  const postMetaData = getAllPostsMetaData();
  return {
    props: {
      allPostsData: postMetaData.sort((a: any, b: any) => {
        if (a.date < b.date) {
          return 1;
        } else if (a.date > b.date) {
          return -1;
        } else {
          return 0;
        }
      }),
    },
  };
}

const Home = ({ allPostsData }: any) => {
  return (
    <>
      <Head>
        <title>{`トップ - ふろんてぃあ*`}</title>
      </Head>
      <HubPage
        allPostsData={allPostsData}
        head="ふろんてぃあ*"
        summary="ふろんの個人ブログ"
        pageContent={PageContent(allPostsData)}
      />
    </>
  );
};

export default Home;
