import { Container } from "@chakra-ui/react";
import { FONT_FAMILY } from "../lib/constants";
import { getAllPostPaths, getPostMetaDataFromPath } from "../lib/posts";

interface PostLinkData {
  path: string;
  title: string;
}

const getRandomPosts = (num: number): PostLinkData[] => {
  // This function will not work correctly when num is too large due to an overflow, but practically it works fine.
  // we are currently using it with num = 3.

  const allPostPaths = getAllPostPaths();
  const numberOfPosts = allPostPaths.length;

  // Currently it allows dupulicate elements
  // TODO: Fix this

  const res: string[] = [];
  for (let i = 0; i < numberOfPosts; ++i) {
    const idx: number = Math.floor(Math.random() * numberOfPosts);
    res.push(allPostPaths[idx]);
  }
  return res.map((path) => {
    return {
      path: path,
      title: getPostMetaDataFromPath(path).title,
    };
  });
};

export const OtherPostsDeskTop = ({ postData }: any): JSX.Element => {
  const PostLinks = getRandomPosts(3);
  return (
    <Container
      display={{ base: "none", md: "flex" }}
      maxW="900px"
      minW="600px"
      p="2rem"
      mt="2rem"
      mb="1rem"
      backgroundColor={"#FFFFFF"}
      lineHeight={1.9}
      fontFamily={FONT_FAMILY}
      fontSize="16px"
      boxShadow="0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)"
      boxSizing="border-box"
    >
      {PostLinks.map((postLink) => postLink.title)}
    </Container>
  );
};

const PostAreaMobile = ({ postData }: any): JSX.Element => {
  return (
    <Container
      display={{ base: "block", md: "none" }}
      color={"#333333"}
      w="100vw"
      maxW="100vw"
      minH="100vh"
      m={0}
      fontFamily={FONT_FAMILY}
      fontSize="14px"
      backgroundColor={"#FFFFFF"}
    >
      <article>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Container>
  );
};
