import React, { useState, useEffect, useCallback } from "react";
import Toc, { TocContentId } from "./toc";
import { useThrottle } from "react-use";
import { throttle } from "lodash";

const OFFSET_ACTIVE = 100;
const SCROLL_INTERVAL = 100;


const ScrollToc = ({toc}: {toc:TocContentId[]}): JSX.Element => {
  const len: number = toc.length;
  const [activeItemId, setActiveId] = useState<string | null>(null);
  const itemTopOffsets = getTopOffsets(toc);
  const handleScroll = useCallback(() => {
    const scrollAmount: number = window.scrollY + OFFSET_ACTIVE;
    const item = itemTopOffsets.find((item, index) => {
      //  「現在見ている」アイテムのidがほしい
      //  iを「見ている」の定義
      //  window.scrollY + OFFSET_ACTIVE >= i.offsetTop
      //  これを満たすiが存在しない場合、nullを見ている
      //  存在する場合、
      //  i = a.length() - 1のとき
      //  iを見ている
      //  そうでない場合window.scrollY + OFFSET_ACTIVE < (i+1).offsetTop
      //  を満たす唯一のiを見ている

      return (index === len - 1) ? index : scrollAmount < itemTopOffsets[index + 1].offsetTop;
    });
    if(item === undefined) return;
    setActiveId(item.id);
  }, [itemTopOffsets, len]);

  useEffect(() => {
    window.addEventListener(`scroll`, throttle(handleScroll, SCROLL_INTERVAL));
    return () => {
      window.removeEventListener(`scroll`, throttle(handleScroll, SCROLL_INTERVAL));
    }
  }, [handleScroll])

  if(toc.length === 0) return <></>;
  return <Toc toc={toc} activeItemId={activeItemId} />;
};

const getTopOffsetsById = (tocContents: TocContentId[]): TocContentId[] => 
  tocContents
    .map(({ id, content, type, offsetTop }) => {
      const element = document.getElementById(id);
      
      return {
        id,
        content,
        type,
        offsetTop: element !== null ? element.offsetTop : 0,
      };
    })
    .filter((item) => item.offsetTop);
;

function getTopOffsets(toc: TocContentId[]): TocContentId[] {
  return (
    toc.map(({ id, content, type, offsetTop }) => {
      if(typeof window === "object"){
        const element = document.getElementById(id);
        return {
          id,
          content,
          type,
          offsetTop: element !== null ? element.offsetTop : 0,
        };
      } else {
        return {
          id,
          content,
          type,
          offsetTop: 0,
        }
      }
    })
  ).filter((item) => item.offsetTop);
};

export default ScrollToc;
