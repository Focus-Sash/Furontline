import {
  getAllPostsIds,
  getPostContent,
  changeIdstoParams,
} from "../../lib/posts";
import {
  Container,
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  Link,
} from "@chakra-ui/react";
import { AiOutlineTag } from "react-icons/ai";
import Head from "next/head";
import NextLink from "next/link";
import { TopBar, TopBuffer } from "../../components/topbar/topbar";
import Footer from "../../components/footer";
import {
  FONT_FAMILY,
  HEADER_CONTENT_COLOR,
  MAIN_COLOR_RGB,
} from "../../lib/constants";
import "zenn-content-css";

const PostHeader = ({ postData }: any): JSX.Element => {
  return (
    <Box display="inilne-block" mt={10} ml={2} color={HEADER_CONTENT_COLOR}>
      <Text ml={1} mt={0}>
        {postData.date}
      </Text>
      <Heading as="h1" zIndex="100" fontWeight="600" fontFamily={FONT_FAMILY}>
        {postData.title}
      </Heading>
      {postData.tags === null
        ? undefined
        : postData.tags.map((tagName: any) => {
            return <Tag tagName={tagName} key={tagName} />;
          })}
    </Box>
  );
};

const HeaderBackground = (): JSX.Element => {
  return (
    <Box
      position="absolute"
      backgroundColor={MAIN_COLOR_RGB}
      h="20rem"
      w="100%"
      zIndex="0"
    />
  );
};

const Tag = ({ tagName }: any): JSX.Element => {
  return (
    <Box
      display="inline-block"
      color="#FFFFFF"
      borderRadius="8px"
      p="2px"
      mt={2}
    >
      <Icon
        as={AiOutlineTag}
        ml={1}
        w={4}
        h={4}
        display="inline-block"
        verticalAlign="middle"
      />
      <NextLink href={`/tags/${tagName}`} passHref>
        <Link maxH="49px" fontSize={"14px"} fontFamily={FONT_FAMILY}>
          <Text
            display="inline-block"
            m=".2rem"
            fontWeight="500"
            fontSize="14px"
            verticalAlign="middle"
            as="u"
          >
            {tagName}
          </Text>
        </Link>
      </NextLink>
    </Box>
  );
};

export default function Post({ postData }: any) {
  return (
    <>
      <Box backgroundColor="#EAE9D9">
        <Head>
          <title> {postData.title} - ふろんてぃあ*</title>
        </Head>
        <TopBar />
        <Flex direction="column" alignItems="center">
          <TopBuffer />
          <HeaderBackground />
          <Flex
            flexDirection={"column"}
            justifyContent="center"
            minH="100%"
            maxW="900px"
            zIndex="100"
          >
            <PostHeader postData={postData} />
            <Container
              color={"#333333"}
              maxW="900px"
              minW="600px"
              minH="100vh"
              p="30px"
              lineHeight={1.9}
              fontFamily={FONT_FAMILY}
              fontSize="16px"
              backgroundColor={"#FFFFFF"}
              mt={10}
              mb="20px"
              ml="0"
              boxShadow="0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)"
              mr="0"
            >
              <article className="znc">
                <div
                  dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
              </article>
            </Container>
          </Flex>
        </Flex>
        <Footer />
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const ids = getAllPostsIds();
  return {
    paths: changeIdstoParams(ids),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostContent(params.id);
  return {
    props: {
      postData,
    },
  };
}
