import { Box, Text } from "@chakra-ui/react";
import { FONT_FAMILY } from "../lib/constants";

const DiaryCard = ({ postData }: any) => {
  return (
    <>
      <Box
        borderStyle="solid"
        borderWidth="1px"
        borderColor="#BBBBBB"
        pl="30px"
        mt={"20px"}
        mb={"20px"}
        bgColor={"rgba(255, 255, 255, 1)"}
      >
        <Text
          fontSize={"20px"}
          fontFamily={FONT_FAMILY}
          fontWeight={"bold"}
          textColor={"#333333"}
        >
          {postData.title}
        </Text>

        <Text
          color={"gray.500"}
          overflow={"hidden"}
          noOfLines={1}
          fontFamily={FONT_FAMILY}
          pr="30px"
        >
          {postData.summary}
        </Text>
      </Box>
    </>
  );
};

export default DiaryCard;
