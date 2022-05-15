import {
  Box,
  Flex,
  Text,
  IconButton,
  Link,
  Image,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
  extendTheme,
  CloseButton,
  Center,
  styled,
  Spacer,
  Divider,
  SpaceProps,
  WrapItem,
  Wrap,
  UnorderedList,
  BoxProps,
  ListItem,
  Container,
  Tag,
  FlexProps,
  HStack,
  VStack,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { AiOutlineTag } from "react-icons/ai";
import NextLink from "next/link";
import Head from "next/head";
import { IconType } from "react-icons";

const logoRatio: number = 2.5;
const logoWidth: number = 73.41026 * logoRatio;
const logoHeight: number = 10.93536 * logoRatio;

const sideBarWidth: string = "200px";

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export default function Home() {
  const { onClose } = useDisclosure();
  const wid: string = `calc(100vw - ${sideBarWidth})`;
  return (
    <>
      <Head>
        <title>トップ - ふろんとらいん</title>
      </Head>

      <Flex>
        <TopBuffer />
        <TopBar />
        <Flex>
          <SideBuffer />
          <SidebarContent paddingTop="calc(33px + 1rem)" />
          <Flex paddingTop="calc(33px + 1rem)" w={wid}>
            <Container maxW="container.sm">
              <Text
                fontSize={"14pt"}
                fontWeight={600}
                color={useColorModeValue("gray.600", "gray.200")}
              >
                ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
              </Text>
            </Container>
          </Flex>
        </Flex>
      </Flex>

      {/* <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "inline" }}
      /> */}
      {/* <Main /> */}
    </>
  );
}

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
    <InputGroup size="sm" height={"60%"} width="auto">
      <Input placeholder="サイト内検索（未実装）" width={"200px"} />
      <InputRightAddon>
        <SearchIcon w={3} h={3} />
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

const TopBar = (): JSX.Element => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      {/* このFlexでメニューバーの設定*/}
      <Flex
        bg={useColorModeValue("green.100", "gray.900")}
        color={useColorModeValue("gray.600", "white")}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottomWidth={"1px"}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        // メニューバー全体の設定なので、alignを変えても配置は変わらない
        align="center"
        position="fixed"
        margin={"0"}
        width={"100%"}
        height="auto"
        display="block"
        zIndex={200}
      >
        {/* スマホ用 */}

        <Flex
          display={{ base: "flex", md: "none" }}
          justifyContent="space-between"
          //左中右に寄せる
        >
          <NextLink href="/">
            <Flex>
              <a>
                <Image
                  src="/images/furon-test.svg"
                  alt="ふろんとらいん"
                  width={logoWidth}
                  height={logoHeight}
                  mt="7px"
                ></Image>
              </a>
            </Flex>
          </NextLink>

          <Flex>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <SearchIcon w={5} h={5} />
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />

            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
              colorScheme="white"
            />
          </Flex>
        </Flex>

        {/* タブレット・PC用 */}

        <DeskTopTopBar />
      </Flex>

      {/* <Collapse in={isOpen} animateOpacity>
    <MobileNav />
  </Collapse> */}
    </>
  );
};

const Main = (): JSX.Element => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">トップページ</Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          {/* <BlogTags tags={["Engineering", "Product"]} /> */}
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              サンプル記事
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            現在存在する唯一の記事です。このブログについて書いてあります。
          </Text>
        </Box>
      </Box>
      <VStack paddingTop="40px" spacing="3" alignItems="flex-start">
        <Heading as="h2" size="xl" mb="6px">
          このブログについて
        </Heading>
        <Text as="p" fontSize="lg">
          ふろん (@Focus-Sash)
          の個人ブログです。まだなにも実装してません。いろいろなことについて書く予定です。
        </Text>
        <Heading as="h3" size="md" mt="6px">
          実装予定の機能
        </Heading>
      </VStack>
    </Container>
  );
};

interface LinkItemProps {
  name: string;
  icon: IconType;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "雑記", icon: FiHome },
  { name: "制作", icon: FiTrendingUp },
  { name: "感想", icon: FiCompass },
  { name: "最近の記事", icon: AiOutlineTag },
  { name: "タグ一覧", icon: AiOutlineTag },
  { name: "作者", icon: FiSettings },
];

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: string | number;
}

const NavItem = ({ icon, children, ...rest }: NavItemProps): JSX.Element => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("blue.100", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: sideBarWidth }}
      pos="fixed"
      h="full"
      {...rest}
      zIndex={199}
    >
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const TopBuffer = () => {
  return (
    <Box
      bg={useColorModeValue("red.100", "gray.900")}
      borderBttom="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: sideBarWidth }}
      h="100vh"
      pos="relative"
      opacity={0.33}
      margin={"0"}>
    </Box>
  );
}

const SideBuffer = () => {
  return (
    <Box
      bg={useColorModeValue("green.100", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: sideBarWidth }}
      h="100vh"
      pos="relative"
      opacity={0.33}
      margin={"0"}
    ></Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "雑多な記事",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "感想とか",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "作ったもの",
    href: "#",
  },
  {
    label: "勉強したこと",
    href: "#",
  },
  {
    label: "最近の記事",
    href: "#",
  },
  {
    label: "タグ一覧",
    href: "#",
  },
];
