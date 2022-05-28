import NextLink from "next/link"
import { Link, Text } from "@chakra-ui/react";

const LogoToHome = (): JSX.Element => {
  return (
    <NextLink href={"/"} passHref key={"top"}>
      <Link
        ml={"20px"}
        mr={"14px"}
        mt="8px"
        fontSize={"22px"}
        fontFamily={`"Trebuchet MS", "Helvetica Neue", "Helvetica", "Arial", sans-serif`}
        fontWeight={"600"}
        _hover={{
          textDecoration: "none",
        }}
        _focus={{ boxShadow: "none" }}
      >
        <Text margin={0}>FURONtier*</Text>
      </Link>
    </NextLink>
  );
};

export default LogoToHome;