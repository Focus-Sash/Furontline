import { getAllTags, getPostMetaDataArrayWithTag } from "../../lib/tags";
import Head from "next/head";
import HubPage from "../../components/hub-template";
import "zenn-content-css";
import { PostCard } from "../../components/post-card";
import { changeTagstoParams } from "../../lib/posts";
import { PageContent } from "../../lib/hubpage-content";

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
