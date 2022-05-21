import NextLink from "next/link";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  useColorModeValue,
  Center,
  InputGroup,
  Input,
  InputRightAddon,
  Image,
  Link,
  Icon,
} from "@chakra-ui/react";

import { AiFillHome } from "react-icons/ai";

interface NavItemProps {
  id: string;
  link: string;
  children?: React.ReactNode;
}

const navItems: NavItemProps[] = [
  { id: "Diary", link: "/" },
  { id: "Reviews", link: "/" },
  { id: "Learning", link: "/" },
  { id: "Posts", link: "/" },
  { id: "Tags", link: "/" },
  { id: "About", link: "/" },
];

const NavItem = ({ id, link }: NavItemProps): JSX.Element => {
  return (
    <NextLink href={link} passHref>
      <Link
        ml="14px"
        mr="14px"
        fontSize={"20px"}
        _hover={{ textDecorationThickness: "2px", textUnderlineOffset: "5px" }}
      >
        {id}
      </Link>
    </NextLink>
  );
};

const TOPBAR_HEIGHT: string = "42px";

export const TopBar = (): JSX.Element => {
  return (
    <Flex
      bg={"#0990D0"}
      color={useColorModeValue("#FFFFFF", "#FFFFFF")}
      position="fixed"
      width={"100%"}
      height={TOPBAR_HEIGHT}
      zIndex={200}
      pl="10px"
      alignItems={"center"}
      fontFamily={`"Century Gothic", "Helvetica Neue","Helvetica","Arial", sans-serif`}
      justifyContent="space-between"
    >
      <Flex>
        <NextLink href={"/"} passHref>
          <Link w={"26px"} h={"26px"} ml={"10px"} mr={"10px"} pt="1px">
            <Icon as={AiFillHome} w={"26px"} h={"26px"} />
          </Link>
        </NextLink>

        {navItems.map((navItem) => {
          return (
            <NavItem id={navItem.id} link={navItem.link} key={navItem.id}>
              {navItem.id}
            </NavItem>
          );
        })}
      </Flex>
      <DeskTopSearchField />
    </Flex>
  );
};

export const TopBuffer = (): JSX.Element => {
  return (
    <Flex
      bg={"#F5F5F5"}
      color={useColorModeValue("gray.600", "white")}
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
