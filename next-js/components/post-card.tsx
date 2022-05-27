import {
  Center,
  Box,
  useColorModeValue,
  Stack,
  Heading,
  Avatar,
  Image,
  Text,
  HStack,
} from "@chakra-ui/react";
import { MAIN_COLOR_RGB } from "../lib/constants";

const Post = ({ postData }: any) => {
  return (
    <>
      <Box
        borderWidth={"1px 1px 1px 1px"}
        borderStyle={"solid"}
        borderRadius={"10px"}
        p={"2px 2px 30px 30px"}
        mt={"20px"}
        mb={"20px"}
      >
        <Text textColor={"gray.500"}>2022-05-27</Text>
        <Text
          fontSize={"20px"}
          fontFamily={
            "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', '游ゴシック Medium', meiryo, sans-serif"
          }
          fontWeight={"bold"}
          mt={"-10px"}
          mb={"30px"}
          textColor={"#333333"}
        >
          これはサンプル記事です
        </Text>

        <HStack>
          <Image
            src={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            w={"80px"}
            h={"80px"}
            borderRadius={"10px"}
          />
          <Text
            color={"gray.500"}
            overflow={"hidden"}
            noOfLines={3}
            pl={"10px"}
            pr={"15px"}
            fontFamily={
              "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', '游ゴシック Medium', meiryo, sans-serif"
            }
          >
            滲み出す混濁の紋章、不遜なる狂気の器、湧き上がり・否定し・痺れ・瞬き・眠りを妨げる
            爬行する鉄の王女　絶えず自壊する泥の人形　
            結合せよ　反発せよ　地に満ち己の無力を知れ　破道の九十・黒棺
          </Text>
        </HStack>
      </Box>
    </>
  );
};

export default Post;
