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
        <meta
          name="google-site-verification"
          content="nYQMvNuRZtxBYvRx4v_ORKLC8jhHAthr9115NM0C_-k"
        />
        <meta name="title" content={`トップ - ふろんてぃあ*`} />
        <meta name="description" content={`ふろんの個人ブログ`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`トップ - ふろんてぃあ*`} />
        <meta property="og:description" content={`ふろんの個人ブログ`} />
        <meta
          property="og:image"
          content="https://focus-sash-blog.vercel.app/card.png"
        />
        <meta
          property="og:url"
          content={`https://focus-sash-blog.vercel.app`}
        />
        <meta property="og:site_name" content="ふろんてぃあ*" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Focus_Sash" />
        <meta name="twitter:domain" content="focus-sash-blog.vercel.app" />
        <meta name="twitter:title" content={`ふろんてぃあ*`} />
        <meta name="twitter:description" content={`ふろんの個人ブログです`} />
        <meta
          name="twitter:image"
          content="https://focus-sash-blog.vercel.app/card.png"
        />
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
