import {
  Flex,
  Text,
  Link,
  useDisclosure,
  Heading,
  Container,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { getSortedDiariesData } from "../lib/diary";
import { TopBar } from "../components/topbar";


const sideBarWidth: string = "200px";


export async function getStaticProps() {
  const allDiariesData = getSortedDiariesData();
  return {
    props: {
      allDiariesData: allDiariesData,
    },
  };
}

export default function Diary({ allDiariesData }: any) {
  const { onClose } = useDisclosure();
  return (
    <>
      <Head>
        <title>日記 - ふろんてぃあ*</title>
      </Head>

      <TopBar />
      <Flex paddingTop="calc(33px + 1rem)" w="100vw">
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
        fontFamily={`Meiryo","Yu Gothic"," "Hiragino Sans",  "sans-serif"`}
        fontSize="16px"
      >
        ふろん (@Focus_Sash)
        の日記一覧です。月ごとに１つのページがあります。現在2022年5月の日記だけがあります。
      </Text>
      <Heading as="h2">Diaries</Heading>
      {allDiariesData.map((postData, index, array) => {
        return (
          <NextLink href={`diaries/${postData.id}`} passHref key={postData.id}>
            <Link display="block" fontSize={"20px"} _focus={{ boxShadow: "none" }}>{postData.title}</Link>
          </NextLink>
        );
      })}
      <Heading>
        Todo
      </Heading>
      <UnorderedList>
        <ListItem>日記記事用のカードを作る</ListItem>
        <ListItem>このページのレイアウトを整える</ListItem>
      </UnorderedList>
    </Flex>
  );
};