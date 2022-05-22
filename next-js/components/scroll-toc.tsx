import React, { useState, useEffect, useCallback } from "react";
import Toc, { TocContentId } from "./toc";
import { useThrottle } from "react-use";
import { throttle } from "lodash";

const OFFSET_ACTIVE = 128;
const SCROLL_INTERVAL = 100;

const ScrollToc = ({ toc }: { toc: TocContentId[] }): JSX.Element => {
  const len: number = toc.length;
  const [activeItemId, setActiveId] = useState<string | null>(null);
  console.log("toc's value is", toc);
  
  // console.log("itemTopOffsets is calculated as", itemTopOffsets);
  const handleScroll = useCallback(() => {
    console.log("handleScroll called");
    const itemTopOffsets = getTopOffsets(toc);
    const scrollAmount: number = window.scrollY + OFFSET_ACTIVE;
    console.log("itemTopOffsets is", itemTopOffsets);
    console.log("scrolled", scrollAmount);
    const item = itemTopOffsets[0].offsetTop > scrollAmount ? itemTopOffsets[0] : itemTopOffsets.find((item, index) => {
      //  「現在見ている」アイテムのidがほしい
      //  iを「見ている」の定義
      //  window.scrollY + OFFSET_ACTIVE >= i.offsetTop
      //  これを満たすiが存在しない場合、nullを見ている
      //  存在する場合、
      //  i = a.length() - 1のとき
      //  iを見ている
      //  そうでない場合window.scrollY + OFFSET_ACTIVE < (i+1).offsetTop
      //  を満たす唯一のiを見ている
      

      return index === len - 1
        ? true
        : scrollAmount < itemTopOffsets[index + 1].offsetTop;
    });
    if (item === undefined) {
      setActiveId(null);
    } else {
      setActiveId(item.id);
    }
    console.log(activeItemId, "after setState");
  }, [toc, len, activeItemId]);

  useEffect(() => {
    window.addEventListener(`scroll`, throttle(handleScroll, SCROLL_INTERVAL));
    console.log("Initialized");
    return () => {
      window.removeEventListener(`scroll`, throttle(handleScroll, SCROLL_INTERVAL));
    };
  }, [handleScroll]);

  if (toc.length === 0) return <></>;
  console.log(activeItemId, "just before return");
  return <Toc toc={toc} activeItemId={activeItemId} />;
};

function getTopOffsets(toc: TocContentId[]): TocContentId[] {
  const res = toc
    .map(({ id, content, type, offsetTop }) => {
      if (typeof window !== undefined) {
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
        };
      }
    })
    .filter((item) => item.offsetTop);
    console.log("getTopOffsets returns", toc);
    return res;
}

export default ScrollToc;
