import { Flex, Text, Icon } from "@chakra-ui/react";
import {
  FOOTER_BG_COLOR,
  FOOTER_CONTENTS_COLOR,
  TOPBAR_HEIGHT,
  TOPBAR_HEIGHT_MOBILE,
} from "../lib/constants";
import { BsTwitter, BsGithub } from "react-icons/bs";

const Footer = (): JSX.Element => {
  return (
    <Flex
      w={"100%"}
      bgColor={FOOTER_BG_COLOR}
      color={FOOTER_CONTENTS_COLOR}
      h={TOPBAR_HEIGHT_MOBILE}
      justifyContent="space-between"
      verticalAlign={"middle"}
    >
      <Text
        display={"inline"}
        fontSize={"22px"}
        fontFamily={`"Trebuchet MS", "Helvetica Neue", "Helvetica", "Arial", sans-serif`}
        fontWeight={"600"}
        m=".1rem"
        ml=".7rem"
        pt={".1rem"}
      >
        FURONtier*
      </Text>
      <Flex
        mr={".3rem"}
        display={"inline"}
        verticalAlign={"middle"}
        h={TOPBAR_HEIGHT_MOBILE}
        pt={".2rem"}
      >
        <Icon
          as={BsTwitter}
          w={"22px"}
          h={"22px"}
          m={".3rem"}
          display={"inline"}
        />
        <Icon
          as={BsGithub}
          w={"22px"}
          h={"22px"}
          m={".3rem"}
          display={"inline"}
        />
      </Flex>
    </Flex>
  );
};

export default Footer;
