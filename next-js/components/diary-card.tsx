import { MAIN_COLOR_RGB } from "../lib/constants";
import { Flex } from "@chakra-ui/react";

const DiaryCard = (): JSX.Element => {
  return (
    <Flex
      bgColor={"#CCCCCC"}
      borderRadius="50%"
      width="200px"
      height="200px"
      borderTopStyle={"solid"}
      borderTopColor={MAIN_COLOR_RGB}
      borderTopWidth={"2px"}
    >
      2022年5月の日記
    </Flex>
  );
};

export default DiaryCard;
