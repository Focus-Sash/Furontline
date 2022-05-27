import {
  Flex,
  Text,
  Link,
  Heading,
  Container,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { getSortedDiariesData } from "../lib/diary";
import { TopBar } from "../components/topbar";
import DiaryCard from "../components/diary-card";

export async function getStaticProps() {
  const allDiariesData = getSortedDiariesData();
  return {
    props: {
      allDiariesData: allDiariesData,
    },
  };
}

export default function Diary({ allDiariesData }: any) {
  return (
    <>
      <Head>
        <title>日記 - ふろんてぃあ*</title>
      </Head>

      <TopBar />
      <Flex paddingTop="calc(33px + 1rem)" w="100%">
        <Container maxW="container.sm">
          <Main allDiariesData={allDiariesData} />
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

type MultiplePostsData = {
  a: PostData[];
};

const Main = ({
  allDiariesData,
}: {
  allDiariesData: { id: string; date: string; title: string }[];
}) => {
  return (
    <Flex mt="1em" align="left" display={"block"}>
      <Heading as="h2">About this Page</Heading>
      <Text
        lineHeight={1.9}
        fontFamily={`"游ゴシック", "YuGothic", "Meiryo", "Helvetica Neue", "Helvetica", "Arial", sans-serif`}
        fontSize="16px"
        fontWeight={"500"}
      >
        ふろん (@Focus_Sash)
        の日記一覧です。月ごとに1つのページがあります。現在2022年5月の日記だけがあります。
      </Text>
      <Heading as="h2" borderWidth={"0px"} _after={{display:"none"}}
      fontFamily={`"Helvetica Neue", "Helvetica", "Arial", sans-serif`}
      fontSize={"40px"}
      >2022</Heading>
      <DiaryCard />
      <Heading>Todo</Heading>
      <UnorderedList>
        <ListItem>日記記事用のカードを作る</ListItem>
        <ListItem>このページのレイアウトを整える</ListItem>
      </UnorderedList>
    </Flex>
  );
};
