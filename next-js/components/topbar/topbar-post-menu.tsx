import { Box, Text, Icon, Link, Flex, textDecoration } from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { TOPBAR_BG_COLOR, TOPBAR_HEIGHT } from "../../lib/constants";

interface NavItemProps {
  id: string;
  link: string;
  children?: React.ReactNode;
}

const postItems: NavItemProps[] = [
  { id: "日記", link: "/diaries" },

  { id: "勉強", link: "/learning" },
  { id: "作品感想", link: "/reviews" },
  { id: "雑記", link: "/misc" },
];

const PostMenu = (): JSX.Element => {
  return (
    <Flex flexDir={"column"} role="group">
      <Flex
        fontSize={"14px"}
        pl="14px"
        pr="14px"
        fontFamily={`"Yu Gothic", "Helvetica Neue", "Helvetica", "Arial", sans-serif`}
        fontWeight={"500"}
        _hover={{ backgroundColor: "#333333", textDecoration: "none" }}
        _groupHover={{ backgroundColor: "#333333" }}
      >
        <Text>投稿</Text>
        <ChevronDownIcon color={"777777"} mt="17px" ml="2px" />
      </Flex>
      <Flex
        position={"absolute"}
        top={TOPBAR_HEIGHT}
        display="none"
        className="post-menu"
        _groupHover={{ display: "block" }}
      >
        <PostDropDownList />
      </Flex>
    </Flex>
  );
};

const PostDropDownList = (): JSX.Element => {
  return (
    <Flex flexDir={"column"} bg={TOPBAR_BG_COLOR}>
      {postItems.map((postItem) => {
        return (
          <PostDropDownElement
            id={postItem.id}
            link={postItem.link}
            key={postItem.id}
          />
        );
      })}
    </Flex>
  );
};

const PostDropDownElement = ({ id, link }: NavItemProps): JSX.Element => {
  return (
    <NextLink href={link} passHref>
      <Link
        pl="13px"
        pr="20px"
        pt="10px"
        pb="10px"
        fontSize="14px"
        fontFamily={`"Yu Gothic", "Helvetica Neue", "Helvetica", "Arial", sans-serif`}
        fontWeight={"500"}
        _hover={{ backgroundColor: "#333333", textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex p={"2px"} pl={"0px"}>
          {id}
        </Flex>
      </Link>
    </NextLink>
  );
};

export default PostMenu;
