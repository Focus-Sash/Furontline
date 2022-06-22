import NextLink from "next/link";
import { SearchIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Flex,
  InputGroup,
  Input,
  InputRightAddon,
  Text,
  Link,
  IconButton,
  Box,
  Stack,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";

import { useState } from "react";

import {
  FONT_FAMILY,
  MAIN_COLOR_RGB,
  POST_SIDE_COLOR,
  TOPBAR_BG_COLOR,
  TOPBAR_CONTENTS_COLOR,
  TOPBAR_HEIGHT,
  TOPBAR_HEIGHT_MOBILE,
} from "../../lib/constants";
import { LogoToHome, LogoToHomeMobile } from "./home-logo";
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

const mobileNavItems: NavItemProps[] = [
  { id: "日記", link: "/diaries" },
  { id: "勉強", link: "/learning" },
  { id: "作品感想", link: "/reviews" },
  { id: "雑記", link: "/misc" },
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
      display={{ base: "none", md: "flex" }}
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
      <SearchField />
    </Flex>
  );
};

export const TopBarMobile = (): JSX.Element => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const changeMenuDisplay = () => setMenuDisplay(!menuDisplay);
  return (
    <Box display={{ md: "none" }}>
      <Flex
        color={TOPBAR_CONTENTS_COLOR}
        bg={TOPBAR_BG_COLOR}
        position="fixed"
        width={"100%"}
        height={TOPBAR_HEIGHT_MOBILE}
        zIndex={200}
        fontFamily={FONT_FAMILY}
        justifyContent="space-between"
      >
        <LogoToHomeMobile key={"home"} />
        <IconButton
          mr={".1rem"}
          _focus={{ boxShadow: "none" }}
          onClick={changeMenuDisplay}
          icon={
            menuDisplay ? (
              <CloseIcon w={3} h={3} />
            ) : (
              <HamburgerIcon w={5} h={5} />
            )
          }
          variant={"ghost"}
          color={TOPBAR_CONTENTS_COLOR}
          backgroundColor={TOPBAR_BG_COLOR}
          aria-label={"Toggle Navigation"}
          border="none"
        />
      </Flex>

      <Flex
        position="fixed"
        zIndex={200}
        justifyContent={"center"}
        display={menuDisplay ? "flex" : "none"}
        top={TOPBAR_HEIGHT_MOBILE}
      >
        <MobileNav />
      </Flex>
    </Box>
  );
};

export const TopBuffer = (): JSX.Element => {
  return (
    <Flex
      bg={POST_SIDE_COLOR}
      color={POST_SIDE_COLOR}
      position="relative"
      width={"100%"}
      height={{ base: TOPBAR_HEIGHT_MOBILE, md: TOPBAR_HEIGHT }}
      display="block"
      zIndex={0}
    />
  );
};

export const TopBufferMobile = (): JSX.Element => {
  return (
    <Flex
      position="relative"
      width={"100%"}
      height={TOPBAR_HEIGHT_MOBILE}
      display="block"
      zIndex={0}
    />
  );
};

const SearchField = (): JSX.Element => {
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

const NavItemMobile = ({ id, link }: NavItemProps): JSX.Element => {
  return (
    <NextLink href={link} passHref>
      <Link fontSize={"16px"} fontFamily={FONT_FAMILY}>
        <Text pl={".2rem"}>{id}</Text>
      </Link>
    </NextLink>
  );
};
const MobileNav = () => {
  return (
    <Stack
      bgColor={"rgba(255, 255, 255, 0.95)"}
      p={4}
      pt={0}
      display={{ md: "none" }}
      w={"100vw"}
      h={"100vh"}
    >
      {mobileNavItems.map((navItem) => {
        return (
          <>
            <NavItemMobile
              id={navItem.id}
              link={navItem.link}
              key={navItem.id}
            />
            <Divider borderColor={MAIN_COLOR_RGB} />
          </>
        );
      })}
    </Stack>
  );
};
