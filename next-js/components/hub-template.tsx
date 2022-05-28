import { Container, Flex, Heading, Text, Box } from "@chakra-ui/react";
import { MAIN_COLOR_RGB } from "../lib/constants";
import { TopBar } from "./topbar";

interface PageHeadProps {
  head: string;
  summary: string;
}

const PageHead = ({ head, summary }: PageHeadProps): JSX.Element => {
  return (
    <>
      <Flex alignItems={"center"} flexDir="column">
      <Heading
        as="h1"
        textAlign={"center"}
        fontFamily={`"Yu Gothic", "Century Gothic", "Helvetica Neue", "Helvetica", "Arial", sans-serif`}
        fontWeight={500}
        mt={"30px"}
      >
        {head}
      </Heading>
      <Box bgColor={MAIN_COLOR_RGB} width="20px" height="8px" borderStyle="none" borderRadius="5px" mt="20px" mb="20px" />
      <Text
        lineHeight={1.9}
        fontFamily={`"Yu Gothic", "Meiryo", "Century Gothic", "Helvetica Neue", "Helvetica", "Arial", sans-serif`}
        fontSize="16px"
        fontWeight={500}
        color={"#555555"}
        textAlign={"center"}
        mb={"40px"}
        mt={"0px"}
      >
        {summary}
      </Text>
      </Flex>
    </>
  );
};

interface pageData {
  allPostsData: any;
  head: string;
  summary: string;
  pageContent: JSX.Element;
}

function Page({ allPostsData, head, summary, pageContent }: pageData) {
  return (
    <>
      <TopBar />
      <Flex
        paddingTop="calc(33px + 1rem)"
        w="100%"
        backgroundImage={"/learning-background.png"}
        minH={"100vh"}
        backgroundAttachment={"fixed"}
        backgroundPosition={"bottom"}
        backgroundSize={"cover"}
      >
        <Container
          maxW="960px"
          bgColor={"rgba(255, 255, 255, 1)"}
          mb={"30px"}
        >
          <Container maxW="640px" bgColor={"white"}>
            <Main
              allPostsData={allPostsData}
              head={head}
              summary={summary}
              pageContent={pageContent}
            />
          </Container>
        </Container>
      </Flex>
    </>
  );
}

interface mainData {
  allPostsData: any;
  head: string;
  summary: string;
  pageContent: JSX.Element;
}

const Main = ({ allPostsData, head, summary, pageContent }: mainData) => {
  return (
    <Flex mt="1em" align="left" display={"block"}>
      <PageHead head={head} summary={summary} />
      {pageContent}
    </Flex>
  );
};

export default Page;
