import Head from "next/head";
import NextLink from "next/link";
import { getAllPostsData } from "../lib/posts";
import PostCard from "../components/post-card";
import Footer from "../components/footer";
import HubPage from "../components/hub-template";

export async function getStaticProps() {
  const allPostsData = getAllPostsData();
  return {
    props: {
      allPostsData,
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
        pageContent={PageContent}
      />
    </>
  );
};

const PageContent: JSX.Element = (
  <>
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
  </>
);

export default Home;
