import { Box, Text, Link, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { AiOutlineCalendar } from "react-icons/ai";
import { FONT_FAMILY } from "../lib/constants";

const PostCard = ({ postData }: any) => {
  return (
    <>
      <Box
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
          mt="rem"
          verticalAlign={"middle"}
        />
        <Text
          textColor={"gray.500"}
          display="inline-block"
          verticalAlign={"middle"}
        >
          {postData.date}
        </Text>
        <NextLink href={`posts/${postData.id}`}>
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

export default PostCard;
