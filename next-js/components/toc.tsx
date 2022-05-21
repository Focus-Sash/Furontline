import React from "react";
import { Flex } from "@chakra-ui/react";

import AnchorLink from "react-anchor-link-smooth-scroll";

export interface TocContentId {
  id: string;
  content: string;
  type: number;
  offsetTop: number;
}

export interface TocContent {
  h2: string;
  h3: string[];
}

export interface TocProps {
  toc: TocContentId[];
  activeItemId: string | null;
}

const NEST_MARGIN = 12;
const BASE_MARGIN = 17;
const BORDER_WIDTH = 4;

function calcPadding(type: number): number {
  return type === 1 ? BASE_MARGIN : NEST_MARGIN * (type - 2) + BASE_MARGIN;
}

const Toc = ({ toc, activeItemId }: TocProps): JSX.Element => {
  if (toc.length === 0) return <></>;
  return (
      <Flex flexDirection={"column"} overflow={"auto"} maxH="400px">
        {toc.map(({ id, content, type, offsetTop }, index) => {
          return (
              
                <Flex
                  key={id}
                  pl={
                    id === activeItemId || (null === activeItemId && index === 0)
                      ? `${calcPadding(type) - BORDER_WIDTH}px`
                      : `${calcPadding(type)}px`
                  }
                  fontSize="16px"
                  pb={"2px"}
                  pt={"2px"}
                  bg={id === activeItemId || (null === activeItemId && index === 0) ? "#D3F3FA" : "FFFFFF"}
                  borderStyle="solid"
                  borderTopWidth="0px"
                  borderBottomWidth={"0px"}
                  borderRightWidth="0px"
                  borderLeftWidth={
                    id === activeItemId || (null === activeItemId && index === 0) ? `${BORDER_WIDTH}px` : "0px"
                  }
                  borderLeftColor={id === activeItemId || (null === activeItemId && index === 0) ? "#0990D0" : "#F5F5F5"}
                  mb={type === 1 ? "10px" : "0px"}
                  pr="15px"
                  width="200px"
                  
                >
                  <AnchorLink href={`#${id}`} offset="120" key={id} color="#333333">
                    <Flex color={id === activeItemId || (null === activeItemId && index === 0)? "rgba(0, 0, 0, 0.87)": "rgba(0, 0, 0, 0.6)"}>
                      {type === 1 ? "記事トップ" : content}
                    </Flex>
                  </AnchorLink>
                
                </Flex>
              
          );
        })}
      </Flex>
  );
};

export default Toc;
