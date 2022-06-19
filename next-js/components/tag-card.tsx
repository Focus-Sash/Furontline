import { Box, Text, Icon, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { AiOutlineTag } from "react-icons/ai";
import { FONT_FAMILY } from "../lib/constants";

const TagCard = ({ tagName }: any) => {
  return (
    <>
      <Box
        display={"inline-block"}
        fontWeight={400}
        boxShadow="0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 12%)"
        backgroundColor={"#F8F8F8"}
        borderRadius={".3rem"}
        m={"1rem"}
        p={".5rem"}
      >
        <Icon
          as={AiOutlineTag}
          display={"inline-block"}
          verticalAlign={"middle"}
          m=".1rem"
        />
        <NextLink href={`/tags/${tagName}`}>
          <Link>
            <Text
              fontSize={"20px"}
              fontFamily={FONT_FAMILY}
              textColor={"#333333"}
              display={"inline-block"}
              verticalAlign={"middle"}
              m={0}
            >
              {tagName}
            </Text>
          </Link>
        </NextLink>
      </Box>
    </>
  );
};

export default TagCard;
