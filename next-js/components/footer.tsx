import {Flex, Text} from '@chakra-ui/react'

const Footer = (): JSX.Element => {
  return (
    <Flex w={"100%"} h={"100px"} bgColor={"#777777"} pl={"10px"}>
      <Text 
      fontSize={"22px"}
      fontFamily={`"Trebuchet MS", "Helvetica Neue", "Helvetica", "Arial", sans-serif`}
      fontWeight={"600"}
      >FURONtier*</Text>
    </Flex>
  );
}

export default Footer;