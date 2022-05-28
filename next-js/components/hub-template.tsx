import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { TopBar } from "./topbar";

interface PageHeadProps {
  head: string;
  summary: string;
}

const PageHead = ({ head, summary }: PageHeadProps): JSX.Element => {
  return (
    <>
      <Heading
        as="h1"
        textAlign={"center"}
        fontFamily={`"Yu Gothic", "Century Gothic", "Helvetica Neue", "Helvetica", "Arial", sans-serif`}
        fontWeight={500}
        mt={"30px"}
      >
        {head}
      </Heading>
      <Text
        lineHeight={1.9}
        fontFamily={`"Yu Gothic", "Meiryo", "Century Gothic", "Helvetica Neue", "Helvetica", "Arial", sans-serif`}
        fontSize="16px"
        fontWeight={500}
        color={"#555555"}
        textAlign={"center"}
        mb={"40px"}
      >
        {summary}
      </Text>
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
          <Container maxW="640px" bgColor={"rgba(255, 255, 255, 0)"}>
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

type PostData = {
  id: string;
  date: string;
  title: string;
};

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
