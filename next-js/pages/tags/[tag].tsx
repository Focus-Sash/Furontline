import { getAllTags, getTagPostData } from "../../lib/posts";
import Head from "next/head";
import HubPage from "../../components/hub-template";
import "zenn-content-css";
import PostCard from "../../components/post-card";

const TagPage = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>{`${data.tag} - ふろんてぃあ*`}</title>
      </Head>
      <HubPage
        allPostsData={data.postData}
        head="雑記"
        summary=""
        pageContent={PageContent(data.postData)}
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

export default TagPage;

export async function getStaticPaths() {
  const paths = getAllTags();
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  console.log(params.tag);
  const postData = await getTagPostData(params.tag);
  console.log(postData);
  return {
    props: {
      data: {
        postData: postData,
        tag: params.tag,
      },
    },
  };
}
