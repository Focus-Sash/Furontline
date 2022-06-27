import { Box, Text, Link, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { AiOutlineCalendar } from "react-icons/ai";
import { FONT_FAMILY } from "../lib/constants";

export const PostCard = ({ postData }: any) => {
  return (
    <>
      <Box
        display={{ base: "none", md: "block" }}
        borderWidth="1px"
        borderColor="#BBBBBB"
        borderRadius={".5rem"}
        pl="2rem"
        pt="1rem"
        pb="1rem"
        mt="2rem"
        mb="2rem"
        bgColor={"#F8F8F8"}
        boxShadow="0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)"
      >
        <Icon
          as={AiOutlineCalendar}
          display="inline-block"
          mr=".2rem"
          color={"gray.500"}
          verticalAlign={"middle"}
        />
        <Text
          textColor={"gray.500"}
          display="inline-block"
          verticalAlign={"middle"}
        >
          {postData.date}
        </Text>
        <NextLink href={`/posts/${postData.id}`}>
          <Link>
            <Text
              fontSize={"20px"}
              fontFamily={FONT_FAMILY}
              fontWeight={"bold"}
              textColor={"#333333"}
              m={0}
            >
              {postData.title}
            </Text>
          </Link>
        </NextLink>

        <Text color={"gray.500"} noOfLines={1} fontFamily={FONT_FAMILY}>
          {postData.summary}
        </Text>
      </Box>
    </>
  );
};

export const PostCardMobile = ({ postData }: any) => {
  return (
    <>
      <Box
        display={{ base: "block", md: "none" }}
        borderWidth="1px"
        borderColor="#BBBBBB"
        borderRadius={".5rem"}
        pl="1.5rem"
        pb="1rem"
        mt="1.4rem"
        mb="1.4rem"
        bgColor={"#F8F8F8"}
        boxShadow="0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%)"
      >
        <Icon
          as={AiOutlineCalendar}
          display="inline-block"
          mr=".2rem"
          color={"gray.500"}
          verticalAlign={"middle"}
        />
        <Text
          textColor={"gray.500"}
          display="inline-block"
          verticalAlign={"middle"}
          fontSize={"14px"}
        >
          {postData.date}
        </Text>
        <NextLink href={`posts/${postData.id}`}>
          <Link>
            <Text
              fontSize={"18px"}
              fontFamily={FONT_FAMILY}
              textColor={"#333333"}
              m={0}
              mt={"-.5rem"}
              ml={".1rem"}
              mr={"1.5rem"}
            >
              {postData.title}
            </Text>
          </Link>
        </NextLink>
      </Box>
    </>
  );
};
