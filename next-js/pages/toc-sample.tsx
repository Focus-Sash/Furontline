import { TocPropsSimple, TocContent, TocIdSimple} from "../components/toc";
import TocSimple from "../components/toc";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { HashLink } from "react-router-hash-link";

const TocSample = (): JSX.Element => {
  const a: TocContent = {
    h2: "heading 1",
    h3: ["sub1", "sub2", "sub3"]
  }
  const b: TocContent = {
    h2: "heading 2",
    h3: ["sub1", "sub2", "sub3"]
  }
  const id: TocIdSimple = {
    id2: 0,
    id3: 1
  }

  return (
    <>
      <Head>
        <title>テスト用 - ふろんとらいん</title>
      </Head>
      <HashLink to="#id">
        Link
      </HashLink>
      </>
  );
};

export default TocSample;
