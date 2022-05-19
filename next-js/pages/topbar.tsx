import NextLink from "next/link";
import { CloseIcon, SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure, Flex, useColorModeValue, IconButton, Center, InputGroup, Input, InputRightAddon, Image} from "@chakra-ui/react";

const logoRatio: number = 2.5;
const logoWidth: number = 73.41026 * logoRatio;
const logoHeight: number = 10.93536 * logoRatio;

const TopBar = (): JSX.Element => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      {/* このFlexでメニューバーの設定*/}
      <Flex
        bg={useColorModeValue("white", "gray.900")}
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

export default TopBar;


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