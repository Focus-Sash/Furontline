import { getAllPostsIds, getPostData } from "../../lib/posts";
import {Container} from "@chakra-ui/react";

export default function Post({postData}: any) {
  return (
    <Container 
      color={"#333333"} 
      maxW="container.sm" 
      lineHeight={1.9}
      fontFamily={`"Yu Gothic","Meiryo", "Hiragino Sans",  "sans-serif"`}
      fontSize="16px"
    >
      <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
    </Container>
  )
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
