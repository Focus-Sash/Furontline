import { PostCard, PostCardMobile } from "../components/post-card";

export const PageContent = (allPostsData: any): JSX.Element => {
  return (
    <>
      {allPostsData.map((postData: any) => {
        return (
          <>
            <PostCard postData={postData} key={postData.id} />
            <PostCardMobile postData={postData} key={postData.id} />
          </>
        );
      })}
    </>
  );
};
