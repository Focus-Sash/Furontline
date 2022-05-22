import { getAllDiariesIds, getDiaryData } from "../../lib/diary";
import { Container, Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { TopBar, TopBuffer } from "../../components/topbar";
import extractToc from "../../lib/get-toc";
import ScrollToc from "../../components/scroll-toc";

const TOPBAR_CONTENTS_OFFSET = 50;

export default function Diary({ postData: diaryData }: any) {
  const toc = extractToc(diaryData.contentHtml);
  return (
    <>
      <Box backgroundColor={"#F5F5F5"}>
        <Head>
          <title> {diaryData.title} - ふろんてぃあ*</title>
        </Head>
        <TopBar />
        <Flex direction="column">
          <TopBuffer />
          <Flex flexDirection={"row"} justifyContent="center">
            <Container
              color={"#333333"}
              maxW="750px" // container.sm + 20px * 2
              p="30px"
              lineHeight={1.9}
              fontFamily={`Meiryo","Yu Gothic"," "Hiragino Sans",  "sans-serif"`}
              fontSize="16px"
              backgroundColor={"#FFFFFF"}
              // overflow={"hidden"}
              mt={`${TOPBAR_CONTENTS_OFFSET}px`}
              mb="20px"
              ml="0"
              mr="0"
              // overflow: hiddenとしないと、最後の行の下の行間が溢れる。
              // 内部的には<p>になってるはずで、そのマージンがcontainerを経由して溢れる
            >
              <div dangerouslySetInnerHTML={{ __html: diaryData.contentHtml }} />
            </Container>
            <Flex
              position="sticky"
              top="10px"
              pt={`${TOPBAR_CONTENTS_OFFSET * 1 + 2}px`}
              ml={`${TOPBAR_CONTENTS_OFFSET}px`}
              maxHeight="calc(100vh - 20px)"
            >
              <ScrollToc toc={toc} />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllDiariesIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postData = await getDiaryData(params.month);
  return {
    props: {
      postData,
    },
  };
}
