import { Flex, Text, Icon } from "@chakra-ui/react";
import {
  FOOTER_BG_COLOR,
  FOOTER_CONTENTS_COLOR,
  TOPBAR_HEIGHT,
} from "../lib/constants";
import { BsTwitter, BsGithub } from "react-icons/bs";

const Footer = (): JSX.Element => {
  return (
    <Flex
      w={"100%"}
      bgColor={FOOTER_BG_COLOR}
      h={TOPBAR_HEIGHT}
      pl={"10px"}
      color={FOOTER_CONTENTS_COLOR}
      justifyContent="space-between"
    >
      <Text
        fontSize={"22px"}
        fontFamily={`"Trebuchet MS", "Helvetica Neue", "Helvetica", "Arial", sans-serif`}
        fontWeight={"600"}
        margin={".5rem"}
        lineHeight={1.5}
      >
        FURONtier*
      </Text>
      <Flex margin={".3rem"}>
        <Icon as={BsTwitter} w={"22px"} h={"22px"} m={".5rem"} />
        <Icon as={BsGithub} w={"22px"} h={"22px"} m={".5rem"} />
      </Flex>
    </Flex>
  );
};

export default Footer;
