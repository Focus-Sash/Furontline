import {
  Box,
  Flex,
  Text,
  Link,
  Stack,
  Collapse,
  Icon,
  useColorModeValue,
  useDisclosure,
  Heading,
  SpaceProps,
  BoxProps,
  Container,
  Tag,
  FlexProps,
  HStack,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FiHome, FiTrendingUp, FiCompass, FiSettings } from "react-icons/fi";
import { AiOutlineTag } from "react-icons/ai";
import Head from "next/head";
import NextLink from "next/link";
import { IconType } from "react-icons";
import { getSortedPostsData } from "../lib/posts";
import { TopBar } from "../components/topbar";

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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: any) {
  const { onClose } = useDisclosure();
  return (
    <>
      <Head>
        <title>トップ - ふろんてぃあ。</title>
      </Head>

      <TopBar />
      <Flex paddingTop="calc(33px + 1rem)" w="100vw">
        <Container maxW="container.sm">
          <Main allPostsData={allPostsData} />
        </Container>
      </Flex>
    </>
  );
}

type PostData = {
  id: string;
  date: string;
  title: string;
};

type MultiplePostsData = {
  a: PostData[];
};

const Main = ({
  allPostsData,
}: {
  allPostsData: { id: string; date: string; title: string }[];
}) => {
  return (
    <Flex mt="1em" align="left" display={"block"}>
      <Heading as="h2">About this Blog</Heading>
      <Text
        lineHeight={1.9}
        fontFamily={`Meiryo","Yu Gothic"," "Hiragino Sans",  "sans-serif"`}
        fontSize="16px"
      >
        ふろん (@Focus_Sash)
        の個人ブログ（制作中）です。下の「ブログ作ってみた」の記事以外なにも実装してないです。
      </Text>
      <Heading as="h2">Sample Posts</Heading>
      {allPostsData.map((postData, index, array) => {
        return (
          <NextLink href={`posts/${postData.id}`} passHref key={postData.id}>
            <Link display="block" fontSize={"20px"}>{postData.title}</Link>
          </NextLink>
        );
      })}
      <Heading>
        Todo
      </Heading>
      <UnorderedList>
        <ListItem>トップページを作る</ListItem>
        <ListItem>カテゴリーページ（上のメニューのリンク先）を作る</ListItem>
        <ListItem>タグ機能を作る</ListItem>
        <ListItem>記事検索機能を作る</ListItem>
        <ListItem>記事を増やす</ListItem>
        <ListItem>ツイートするときにサムネイルが出るようにする</ListItem>
      </UnorderedList>
    </Flex>
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
      borderBottom="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: sideBarWidth }}
      h="100vh"
      pos="relative"
      opacity={0.33}
      margin={"0"}
    ></Box>
  );
};

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
