import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import rehypeSlug from "rehype-slug";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify/lib";
import { cookieStorageManager } from "@chakra-ui/react";

const postsDirectory = path.join(process.cwd(), "posts/diaries");

export function getSortedDiariesData() {
  const tmpFileNames: string[] = fs.readdirSync(postsDirectory);
  const fileNames: string[] = [];
  for (let i = 0; i < tmpFileNames.length; i++) {
    if (tmpFileNames[i].length > 3 && tmpFileNames[i].slice(-3) === ".md") {
      fileNames.push(tmpFileNames[i]);
    }
  }
  const allPostsData = fileNames.map((fileName) => {
    const month = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      month,
      ...matterResult.data,
    };
  });

  console.log(allPostsData);

  return allPostsData.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else if (a.date > b.date) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllDiariesIds() {
  const tmpFileNames = fs.readdirSync(postsDirectory);
  const fileNames: string[] = [];
  for (let i = 0; i < tmpFileNames.length; i++) {
    if (tmpFileNames[i].length > 3 && tmpFileNames[i].slice(-3) === ".md") {
      fileNames.push(tmpFileNames[i]);
    }
  }
  return fileNames.map((fileName) => {
    return {
      params: {
        month: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getDiaryData(month: string) {
  const fullPath = path.join(postsDirectory, `${month}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();
  return {
    month,
    contentHtml,
    ...matterResult.data,
  };
}