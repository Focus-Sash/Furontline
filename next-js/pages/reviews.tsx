import {
  Flex,
  Text,
  Link,
  Image,
  Box,
  useDisclosure,
  Heading,
  Container,
  ListItem,
  UnorderedList,
  Divider,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { getSortedPostsData } from "../lib/posts";
import { TopBar } from "../components/topbar";
import Post from "../components/post-card";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: any) {
  const { onClose } = useDisclosure();
  return (
    <>
      <Head>
        <title>感想 - ふろんてぃあ*</title>
      </Head>
      <TopBar />
      <Flex
        paddingTop="calc(33px + 1rem)"
        w="100%"
        backgroundImage={"/library-background.png"}
        minH={"100vh"}
        backgroundAttachment={"fixed"}
        backgroundPosition={"bottom"}
        backgroundSize={"cover"}
      >
        <Container maxW="1080px" bgColor={"white"} opacity={"95%"}>
        <Container maxW="640px" bgColor={"white"}>
          <Main allPostsData={allPostsData} />
        </Container>
        </Container>
        <Box color={"white"}></Box>
      </Flex>
    </>
  );
}

type PostData = {
  id: string;
  date: string;
  title: string;
};

type MultiplePostsData = {
  a: PostData[];
};

const Main = ({
  allPostsData,
}: {
  allPostsData: { id: string; date: string; title: string }[];
}) => {
  return (
    <Flex mt="1em" align="left" display={"block"}>
      <Heading
        as="h1"
        textAlign={"center"}
        fontFamily={`"Yu Gothic", "Century Gothic", "Helvetica Neue", "Helvetica", "Arial", sans-serif`}
        fontWeight={500}
        mt={"30px"}
      >
        作品感想
      </Heading>
      <Text
        lineHeight={1.9}
        fontFamily={`"Yu Gothic", "Meiryo", "Century Gothic", "Helvetica Neue", "Helvetica", "Arial", sans-serif`}
        fontSize="16px"
        color={"#555555"}
        textAlign={"center"}
        mb={"40px"}
      >
        ** 読んだ本や見た作品の感想 **
      </Text>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Flex>
  );
};
