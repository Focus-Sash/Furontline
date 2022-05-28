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
  Box,
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { POST_SIDE_COLOR, TOPBAR_HEIGHT } from "../lib/constants";
import LogoToHome from "./topbar/home-logo";
import PostMenu from "./topbar/post-menu";
import Post from "../pages/posts/[id]";

interface NavItemProps {
  id: string;
  link: string;
  children?: React.ReactNode;
}

const navItems: NavItemProps[] = [
  { id: "タグ一覧（未実装）", link: "/tags" },
  { id: "このブログについて", link: "/about" },
];

const NavItem = ({ id, link }: NavItemProps): JSX.Element => {
  return (
    <NextLink href={link} passHref>
      <Link
        pl="14px"
        pr="10px"
        pt="14px"
        pb="14px"
        maxH="49px"
        fontSize={"14px"}
        fontFamily={`"Yu Gothic", "Helvetica Neue", "Helvetica", "Arial", sans-serif`}
        fontWeight={"500"}
        _hover={{ backgroundColor: "#CCCCCC", textDecoration: "none" }}
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
      color={"#777777"}
      bg={"#F5F5F5"}
      position="fixed"
      width={"100%"}
      height={TOPBAR_HEIGHT}
      zIndex={200}
      fontFamily={`"Helvetica Neue", "Helvetica", "Arial", sans-serif`}
      justifyContent="space-between"
    >
      <Flex _focus={{ boxShadow: "none" }}>
        {[<LogoToHome key={"home"} />, <PostMenu key={"top"}/>].concat(
          navItems.map((navItem) => {
            return (
              <NavItem
                id={navItem.id}
                link={navItem.link}
                key={navItem.id}
              >
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

// const TopBar = (): JSX.Element => {
//   const { isOpen, onToggle } = useDisclosure();
//   return (
//     <>
//       {/* このFlexでメニューバーの設定*/}
//       <Flex
//         bg={useColorModeValue("white", "gray.900")}
//         color={useColorModeValue("gray.600", "white")}
//         py={{ base: 2 }}
//         px={{ base: 4 }}
//         borderBottomWidth={"1px"}
//         borderStyle={"solid"}
//         borderColor={useColorModeValue("gray.200", "gray.900")}
//         // メニューバー全体の設定なので、alignを変えても配置は変わらない
//         align="center"
//         position="fixed"
//         margin={"0"}
//         width={"100%"}
//         height="auto"
//         display="block"
//         zIndex={200}
//       >
//         {/* スマホ用 */}

//         <Flex
//           display={{ base: "flex", md: "none" }}
//           justifyContent="space-between"
//           //左中右に寄せる
//         >
//           <NextLink href="/">
//             <Flex>
//               <a>
//                 <Image
//                   src="/images/furon-test.svg"
//                   alt="ふろんとらいん"
//                   width={logoWidth}
//                   height={logoHeight}
//                   mt="7px"
//                 ></Image>
//               </a>
//             </Flex>
//           </NextLink>

//           <Flex>
//             <IconButton
//               onClick={onToggle}
//               icon={
//                 isOpen ? <CloseIcon w={3} h={3} /> : <SearchIcon w={5} h={5} />
//               }
//               variant={"ghost"}
//               aria-label={"Toggle Navigation"}
//             />

//             <IconButton
//               onClick={onToggle}
//               icon={
//                 isOpen ? (
//                   <CloseIcon w={3} h={3} />
//                 ) : (
//                   <HamburgerIcon w={5} h={5} />
//                 )
//               }
//               variant={"ghost"}
//               aria-label={"Toggle Navigation"}
//               colorScheme="white"
//             />
//           </Flex>
//         </Flex>

//         {/* タブレット・PC用 */}

//         <DeskTopTopBar />
//       </Flex>

//       {/* <Collapse in={isOpen} animateOpacity>
//     <MobileNav />
//   </Collapse> */}
//     </>
//   );
// };

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
