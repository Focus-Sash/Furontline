import NextLink from "next/link";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Center,
  InputGroup,
  Input,
  InputRightAddon,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";

import {
  FONT_FAMILY,
  POST_SIDE_COLOR,
  TOPBAR_BG_COLOR,
  TOPBAR_CONTENTS_COLOR,
  TOPBAR_HEIGHT,
} from "../../lib/constants";
import LogoToHome from "./home-logo";
import PostMenu from "./topbar-post-menu";

interface NavItemProps {
  id: string;
  link: string;
  children?: React.ReactNode;
}

const navItems: NavItemProps[] = [
  { id: "タグ一覧", link: "/tags/tag-list" },
  { id: "このブログについて", link: "/posts/about-this-blog" },
];

const NavItem = ({ id, link }: NavItemProps): JSX.Element => {
  return (
    <NextLink href={link} passHref>
      <Link
        pl="14px"
        pr="14px"
        pt="14px"
        pb="14px"
        maxH="49px"
        fontSize={"14px"}
        fontFamily={FONT_FAMILY}
        _hover={{ backgroundColor: "#333333", textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Text margin={0}>{id}</Text>
      </Link>
    </NextLink>
  );
};

export const TopBar = (): JSX.Element => {
  return (
    <Flex
      color={TOPBAR_CONTENTS_COLOR}
      bg={TOPBAR_BG_COLOR}
      position="fixed"
      width={"100%"}
      height={TOPBAR_HEIGHT}
      zIndex={200}
      fontFamily={FONT_FAMILY}
      justifyContent="space-between"
    >
      <Flex _focus={{ boxShadow: "none" }}>
        {[<LogoToHome key={"home"} />, <PostMenu key={"top"} />].concat(
          navItems.map((navItem) => {
            return (
              <NavItem id={navItem.id} link={navItem.link} key={navItem.id}>
                {navItem.id}
              </NavItem>
            );
          })
        )}
      </Flex>
      <DeskTopSearchField />
    </Flex>
  );
};

export const TopBuffer = (): JSX.Element => {
  return (
    <Flex
      bg={POST_SIDE_COLOR}
      color={POST_SIDE_COLOR}
      position="relative"
      width={"100%"}
      height={TOPBAR_HEIGHT}
      display="block"
      zIndex={0}
    />
  );
};

const TopLink = (): JSX.Element => {
  return (
    <Flex height="32px">
      <Center height="32px">
        <NextLink href="/">
          <a id="top-link">
            <Image
              src="/images/furon-test.svg"
              alt="ふろんとらいん"
              objectFit="contain"
              maxH="32px"
            ></Image>
          </a>
        </NextLink>
      </Center>
    </Flex>
  );
};

const DeskTopSearchField = (): JSX.Element => {
  return (
    <InputGroup size="sm" width="auto" pr="20px" mt="8px">
      <Input
        placeholder="サイト内検索（未実装）"
        width={"200px"}
        bgColor="#FFFFFF"
      />
      <InputRightAddon>
        <SearchIcon w={3} h={3} color="#777777" />
      </InputRightAddon>
    </InputGroup>
  );
};

const DeskTopTopBar = (): JSX.Element => {
  return (
    <Flex display={{ base: "none", md: "flex" }} justifyContent="space-between">
      <TopLink />
      <DeskTopSearchField />
    </Flex>
  );
};
