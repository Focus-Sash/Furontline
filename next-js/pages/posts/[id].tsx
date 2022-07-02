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
import {
  TopBar,
  TopBarMobile,
  TopBuffer,
} from "../../components/topbar/topbar";
import Footer from "../../components/footer";
import {
  FONT_FAMILY,
  HEADER_CONTENT_COLOR,
  MAIN_COLOR_RGB,
} from "../../lib/constants";

const PostHeader = ({ postData }: any): JSX.Element => {
  return (
    <Box
      display={{ base: "none", md: "inline-block" }}
      mt={10}
      ml={2}
      color={HEADER_CONTENT_COLOR}
    >
      <Text
        mt={0}
        className="post-header-text"
      >{`最終更新日：${postData.date}`}</Text>
      <Heading
        as="h1"
        zIndex="100"
        fontWeight="600"
        fontFamily={FONT_FAMILY}
        className="post-header-text"
      >
        {postData.title}
      </Heading>
      <Box className="post-header-tag">
        {postData.tags === null
          ? undefined
          : postData.tags.map((tagName: any) => {
              return <Tag tagName={tagName} key={tagName} />;
            })}
      </Box>
    </Box>
  );
};

const PostHeaderMobile = ({ postData }: any): JSX.Element => {
  return (
    <Box
      display={{ base: "inline-block", md: "none" }}
      color={HEADER_CONTENT_COLOR}
      backgroundColor={MAIN_COLOR_RGB}
      w={"100vw"}
      p={"1rem"}
    >
      <Heading
        as="h1"
        zIndex="100"
        fontWeight="600"
        fontFamily={FONT_FAMILY}
        fontSize={"26px"}
      >
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
      display={{ base: "none", md: "flex" }}
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
          <meta name="title" content={`${postData.title} - ふろんてぃあ*`} />
          <meta name="description" content={`${postData.summary}`} />
          <meta
            name="keywords"
            content={`${
              postData.keywords === undefined || postData.keywords == null
                ? ""
                : postData.keywords.map((word: string) => {
                    `${word}, `;
                  })
            }`}
          />
          {/* <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content={`${postData.title} - ふろんてぃあ*`}
          />
          <meta
            property="og:description"
            content={`${
              postData.summary === undefined || postData.summary === null
                ? ""
                : postData.summary
            }`}
          />
          <meta
            property="og:image"
            content="https://focus-sash-blog.vercel.app/card.png"
          />
          <meta
            property="og:url"
            content={`https://focus-sash-blog.vercel.app/posts/${postData.id}`}
          />
          <meta property="og:site_name" content="ふろんてぃあ*" /> */}
          {/* <meta name="twitter:card" content="summary_large_image" /> */}
          <meta name="twitter:site" content="@Focus_Sash" />
          <meta name="twitter:domain" content="focus-sash-blog.vercel.app" />
          <meta
            name="twitter:title"
            content={`${postData.title} - ふろんてぃあ*`}
          />
          <meta name="twitter:description" content={postData.summary} />
          <meta
            name="twitter:image"
            content="https://focus-sash-blog.vercel.app/card.png"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"
            integrity="sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"
            crossOrigin="anonymous"
          />
        </Head>
        <TopBar />
        <TopBarMobile />
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
            <PostHeaderMobile postData={postData} />
            <PostArea postData={postData} />
            <PostAreaMobile postData={postData} />
          </Flex>
        </Flex>
        <Footer />
      </Box>
    </>
  );
}

const PostArea = ({ postData }: any): JSX.Element => {
  console.log(postData.contentHtml);
  return (
    <Container
      color={"#333333"}
      maxW="900px"
      minW="600px"
      minH="100vh"
      p="2rem"
      lineHeight={1.9}
      fontFamily={FONT_FAMILY}
      fontSize="16px"
      backgroundColor={"#FFFFFF"}
      mt={10}
      mb="20px"
      ml="0"
      boxShadow="0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)"
      mr="0"
      display={{ base: "none", md: "flex" }}
      boxSizing="border-box"
    >
      <article>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Container>
  );
};

const PostAreaMobile = ({ postData }: any): JSX.Element => {
  return (
    <Container
      color={"#333333"}
      w="100vw"
      maxW="100vw"
      minH="100vh"
      m={0}
      fontFamily={FONT_FAMILY}
      fontSize="14px"
      backgroundColor={"#FFFFFF"}
      display={{ base: "block", md: "none" }}
    >
      <article>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Container>
  );
};

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
