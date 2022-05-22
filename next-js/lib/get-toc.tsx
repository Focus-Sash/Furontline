import { TocContentId } from "../components/toc";

// <h3 id="hoge">みたいな形のものを本文に書くとバグります

const extractToc = (html: string) => {
  const res: TocContentId[] = [];
  for (let i = 0; i < html.length; ++i) {
    if (i >= html.length - 7 || html.slice(i - 6, i) === "<code>") {
      continue;
    }
    for (let t = 1; t < 7; ++t) {
      if (html.slice(i, i + 8) === `<h${t} id=\"`) {
        let j = i + 8;
        while (html[j] !== '"') {
          ++j;
        }
        const id = html.slice(i + 8, j);
        console.assert(html[j + 1] === ">");
        i = j + 2;
        let k = i;
        while (k < html.length && html.slice(k, k + 5) !== `</h${t}>`) {
          k++;
        }
        const name = html.slice(i, k);
        i = k + 4;
        res.push({ id: id, content: name, type: t, offsetTop: 0 });
      }
    }
  }
  return res;
};

export default extractToc;
