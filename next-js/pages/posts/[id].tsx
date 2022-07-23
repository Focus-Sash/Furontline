import {
  getAllPostsIds,
  getPostContent,
  convertIdstoParams,
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

import { OtherPostsDeskTop } from "../../components/other-posts";

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
        className="post-header-text"
        as="h1"
        fontWeight="600"
        fontFamily={FONT_FAMILY}
        zIndex="100"
      >
        {postData.title}
      </Heading>
      <Box className="post-header-tag">
        {postData.tags == null
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
        fontWeight="600"
        fontFamily={FONT_FAMILY}
        fontSize="26px"
        zIndex="100"
      >
        {postData.title}
      </Heading>
      {postData.tags == null
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
    <Box display="inline-block" color="#FFFFFF" p=".1rem" mt="1rem">
      <Icon
        as={AiOutlineTag}
        display="inline-block"
        verticalAlign="middle"
        h="1.1rem"
        ml=".2rem"
        w="1.1rem"
      />
      <NextLink href={`/tags/${tagName}`} passHref>
        <Link maxH="49px" fontSize={"14px"} fontFamily={FONT_FAMILY}>
          <Text
            display="inline-block"
            as="u"
            verticalAlign="middle"
            m=".2rem"
            fontWeight="500"
            fontSize="14px"
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
              postData.keywords == null
                ? ""
                : postData.keywords.map((word: string) => {
                    `${word}, `;
                  })
            }`}
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content={`${postData.title} - ふろんてぃあ*`}
          />
          <meta
            property="og:description"
            content={`${postData.summary == null ? "" : postData.summary}`}
          />
          <meta
            property="og:image"
            content="https://furon-blog.vercel.app/card.png"
          />
          <meta
            property="og:url"
            content={`https://furon-blog.vercel.app/posts/${postData.id}`}
          />
          <meta property="og:site_name" content="ふろんてぃあ*" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@Focus_Sash" />
          <meta name="twitter:domain" content="furon-blog.vercel.app" />
          <meta
            name="twitter:title"
            content={`${postData.title} - ふろんてぃあ*`}
          />
          <meta name="twitter:description" content={postData.summary} />
          <meta
            name="twitter:image"
            content="https://furon-blog.vercel.app/card.png"
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
            <PostAreaDeskTop postData={postData} />
            <PostAreaMobile postData={postData} />
          </Flex>
        </Flex>
        {/* <OtherPostsDeskTop /> */}
        <Footer />
      </Box>
    </>
  );
}

const PostAreaDeskTop = ({ postData }: any): JSX.Element => {
  return (
    <Container
      display={{ base: "none", md: "flex" }}
      maxW="900px"
      minW="600px"
      minH="100vh"
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
      <article>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
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

export async function getStaticPaths() {
  const ids = getAllPostsIds();
  return {
    paths: convertIdstoParams(ids),
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
