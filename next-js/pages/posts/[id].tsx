import { getAllPostsIds, getPostData } from "../../lib/posts";
import { Container, Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { TopBar, TopBuffer } from "../../components/topbar";
import extractToc from "../../lib/get-toc";
import ScrollToc from "../../components/scroll-toc";

const OFFSET_BETWEEN_TOPBAR_BETWEEN_CONTENTS = 30;

export default function Post({ postData }: any) {
  console.log(extractToc(postData.contentHtml));
  const toc = extractToc(postData.contentHtml);
  return (
    <>
      <Box backgroundColor={"#F5F5F5"}>
        <Head>
          <title> {postData.title} - ふろんとらいん</title>
        </Head>
        <TopBar />
        <Flex direction="column">
          <TopBuffer />
          <Flex flexDirection={"row"} justifyContent="center" >
            
            <Container
              color={"#333333"}
              maxW="750px" // container.sm + 20px * 2
              p="30px"
              lineHeight={1.9}
              fontFamily={`Meiryo","Yu Gothic"," "Hiragino Sans",  "sans-serif"`}
              fontSize="16px"
              backgroundColor={"#FFFFFF"}
              // overflow={"hidden"}
              mt={`${OFFSET_BETWEEN_TOPBAR_BETWEEN_CONTENTS}px`}
              mb="20px"
              ml="0"
              mr="0"
              // overflow: hiddenとしないと、最後の行の下の行間が溢れる。
              // 内部的には<p>になってるはずで、そのマージンがcontainerを経由して溢れる
            >
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
              
            </Container>
            <Flex 
              position="sticky"
              top="100px"
              mt={`${OFFSET_BETWEEN_TOPBAR_BETWEEN_CONTENTS * 2}px`}
              pt={`${OFFSET_BETWEEN_TOPBAR_BETWEEN_CONTENTS * 1 + 12}px`}
              ml={`${OFFSET_BETWEEN_TOPBAR_BETWEEN_CONTENTS}px`}
              maxHeight="100vh"
            ><ScrollToc toc={toc}/></Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
