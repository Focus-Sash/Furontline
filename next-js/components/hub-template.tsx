import { Container, Flex, Heading, Text, Box } from "@chakra-ui/react";
import {
  FONT_FAMILY,
  HEADER_CONTENT_COLOR,
  MAIN_COLOR_RGB,
  POST_BG_COLOR,
} from "../lib/constants";
import { TopBar, TopBarMobile, TopBuffer } from "./topbar/topbar";
import Footer from "./footer";
import Head from "next/head";

interface HubPageTitleProps {
  head: string;
  summary: string;
}

interface HubPageData {
  allPostsData: any;
  head: string;
  summary: string;
  pageContent: JSX.Element;
}

const HubHeader = ({ head, summary }: HubPageTitleProps): JSX.Element => {
  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      h="17rem"
      w="100%"
      bgColor={MAIN_COLOR_RGB}
      color={HEADER_CONTENT_COLOR}
      fontFamily={FONT_FAMILY}
      flexDirection="column"
      alignItems="center"
    >
      <Text display="inline-block" w="auto" fontSize={50} fontWeight={600}>
        {head}
      </Text>
      <Text display="inline-block" w="auto" fontSize={20}>
        {summary}
      </Text>
    </Flex>
  );
};

const HubHeaderMobile = ({ head, summary }: HubPageTitleProps): JSX.Element => {
  return (
    <Flex
      display={{ base: "flex", md: "none" }}
      h="5xrem"
      w="100%"
      bgColor={MAIN_COLOR_RGB}
      color={HEADER_CONTENT_COLOR}
      fontFamily={FONT_FAMILY}
      flexDirection="column"
      alignItems="center"
    >
      <Text display="inline-block" w="auto" fontSize="26px" fontWeight={600}>
        {head}
      </Text>
    </Flex>
  );
};

function HubPage({ allPostsData, head, summary, pageContent }: HubPageData) {
  return (
    <>
      <Box backgroundColor={POST_BG_COLOR}>
        <TopBar />
        <TopBarMobile />
        <Flex direction="column" alignItems="center" minH={"100vh"}>
          <TopBuffer />
          <HubHeader head={head} summary={summary} />
          <HubHeaderMobile head={head} summary={summary} />
          <Container maxW="960px" zIndex={100}>
            <HubPageBody
              allPostsData={allPostsData}
              head={head}
              summary={summary}
              pageContent={pageContent}
            />
          </Container>
        </Flex>
        <Footer />
      </Box>
    </>
  );
}

interface mainData {
  allPostsData: any;
  head: string;
  summary: string;
  pageContent: JSX.Element;
}

const HubPageBody = ({ pageContent }: mainData) => {
  return (
    <Flex mt="1em" align="left" display={"block"}>
      {pageContent}
    </Flex>
  );
};

export default HubPage;
