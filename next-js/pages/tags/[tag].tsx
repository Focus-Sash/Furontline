import { getAllTags, getPostMetaDataArrayWithTag } from "../../lib/tags";
import Head from "next/head";
import HubPage from "../../components/hub-template";
import "zenn-content-css";
import PostCard from "../../components/post-card";
import { changeTagstoParams } from "../../lib/posts";

const TagPage = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>{`${data.tag} - ふろんてぃあ*`}</title>
      </Head>
      <HubPage
        allPostsData={data.postData}
        head={`${data.tag}`}
        summary={`タグ「${data.tag}」の記事一覧です`}
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
  const tags = getAllTags();
  return {
    paths: changeTagstoParams(tags),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostMetaDataArrayWithTag(params.tag);
  return {
    props: {
      data: {
        postData: postData,
        tag: params.tag,
      },
    },
  };
}
