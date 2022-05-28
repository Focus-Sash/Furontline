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
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { POST_SIDE_COLOR, TOPBAR_HEIGHT } from "../lib/constants";

interface NavItemProps {
  id: string;
  link: string;
  isPulldown: boolean;
  children?: React.ReactNode;
}

const navItems: NavItemProps[] = [
  { id: "トップ", link: "/", isPulldown: false },
  { id: "投稿", link: "/reviews", isPulldown: true },
  { id: "タグ一覧（未実装）", link: "/tags", isPulldown: false },
  { id: "このブログについて", link: "/about", isPulldown: false },
];

const NavItem = ({ id, link, isPulldown }: NavItemProps): JSX.Element => {
  return isPulldown ? (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        fontSize={"14px"}
        fontFamily={"Yu Gothic"}
        fontWeight={"500"}
        boxShadow={"none"}
        border={"none"}
        iconSpacing={"4px"}
        bgColor={"white"}
        color={"#777777"}
        autoSelect={false}
        _focus={{ boxShadow: "none", background: "white" }}
        _hover={{ textDecorationThickness: "1px", textUnderlineOffset: "5px" }}
      >
        {id}
      </MenuButton>
      <MenuList>
        <MenuItem boxShadow={"none"} border={"none"} bg={"#FFFFFF"}>Download</MenuItem>
        <MenuItem boxShadow={"none"} border={"none"} bg={"#FFFFFF"}>Execute</MenuItem>
      </MenuList>
    </Menu>
  ) : (
    <NextLink href={link} passHref>
      <Link
        ml="14px"
        mr="14px"
        fontSize={"14px"}
        fontFamily={"Yu Gothic"}
        fontWeight={"500"}
        _hover={{ textDecorationThickness: "1px", textUnderlineOffset: "5px" }}
        _focus={{ boxShadow: "none" }}
        mt={"8px"}
      >
        <Text margin={0}>{id}</Text>
      </Link>
    </NextLink>
  );
};

export const TopBar = (): JSX.Element => {
  return (
    <Flex
      bg={"white"}
      color={"#777777"}
      opacity={"10%"}
      position="fixed"
      width={"100%"}
      height={TOPBAR_HEIGHT}
      zIndex={200}
      alignItems={"center"}
      fontFamily={`"Helvetica Neue", "Helvetica", "Arial", sans-serif`}
      justifyContent="space-between"
    >
      <Flex _focus={{ boxShadow: "none" }}>
        {[
          <NextLink href={"/"} passHref key={"top"}>
            <Link
              ml={"20px"}
              mr={"14px"}
              fontSize={"22px"}
              fontFamily={`"Trebuchet MS", "Helvetica Neue", "Helvetica", "Arial", sans-serif`}
              fontWeight={"600"}
              _hover={{
                textDecoration: "none",
                textUnderlineOffset: "5px",
                textDecorationColor: "#777777",
              }}
              _focus={{ boxShadow: "none" }}
            >
              <Text margin={0}>FURONtier*</Text>
            </Link>
          </NextLink>,
        ].concat(
          navItems.map((navItem) => {
            return (
              <NavItem
                id={navItem.id}
                link={navItem.link}
                isPulldown={navItem.isPulldown}
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
    <InputGroup size="sm" width="auto" pr="20px">
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
