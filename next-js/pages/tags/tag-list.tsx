import Head from "next/head";
import { getAllPostsMetaData } from "../../lib/posts";
import HubPage from "../../components/hub-template";
import PostCard from "../../components/post-card";
import { getAllTags } from "../../lib/tags";
import { forEach } from "lodash";
import TagCard from "../../components/tag-card";

export async function getStaticProps() {
  const allPostsData = getAllPostsMetaData();
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
        <title>{`タグ一覧 - ふろんてぃあ*`}</title>
      </Head>
      <HubPage
        allPostsData={allPostsData}
        head="タグ一覧"
        summary="タグの一覧（辞書順）です"
        pageContent={PageContent(allPostsData)}
      />
    </>
  );
};

const PageContent = (allPostsData: any): JSX.Element => {
  let tagList: any[] = [];
  allPostsData.forEach((postData: any) => {
    if (postData.tags) {
      tagList = tagList.concat(postData.tags);
    }
  });

  const tagListUniq = Array.from(new Set(tagList));
  tagListUniq.sort();

  return (
    <>
      {tagListUniq.map((tagName: string) => {
        return <TagCard tagName={tagName} key={tagName} />;
      })}
    </>
  );
};

export default Home;
