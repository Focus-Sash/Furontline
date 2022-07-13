import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { SEARCH_DIR_PATH_LIST } from "./constants";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify/lib";
import remarkMath from "remark-math";
const remarkCaptions = require("remark-captions");

// postsDir = next-js/posts
export const postsTopDir = path.join(process.cwd(), "posts");

// 基本的にすべてパスで処理して、idが必要なときだけ加工する

export const isPostPath = (path: string): boolean => {
  return path.length > 3 && path.slice(-3) === ".md" && path[0] != ".";
};

export const toFullPath = (dirName: string): string => {
  return path.join(process.cwd(), dirName);
};

export const collectPostPathsInDirPath = (dirPath: string): string[] => {
  const fileNames: string[] = fs
    .readdirSync(dirPath)
    .filter((name) => isPostPath(name));
  return fileNames.map((fileName) => path.join(dirPath, fileName));
};

export const getAllPostsIds = (): string[] => {
  const postPaths: string[] = getAllPostPaths();
  return postPaths.map((postPath) => getPostIdFromPostPath(postPath));
};

export const getPostIdFromPostPath = (postPath: string): string => {
  console.assert(isPostPath(postPath));
  return postPath.substring(postPath.lastIndexOf("/") + 1, postPath.length - 3);
};

export const getAllPostPaths = (): string[] => {
  const paths: string[] = [];
  SEARCH_DIR_PATH_LIST.forEach((dirName) => {
    const dirPath = toFullPath(dirName);
    paths.push(...collectPostPathsInDirPath(dirPath));
  });
  return paths;
};

const getPostMetaDataFromPath = (filePath: string): any => {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);

  return {
    id: getPostIdFromPostPath(filePath),
    ...matterResult.data,
  };
};

export const getPostMetaDataArrayInDirPath = (dirPath: string): any => {
  const postPaths = collectPostPathsInDirPath(dirPath);
  return postPaths.map((postPath) => getPostMetaDataFromPath(postPath));
};

export const getPostIdAsParamsFromPostPaths = (postPaths: string[]): any[] => {
  return postPaths.map((postPath: string) => {
    return { params: { id: getPostIdFromPostPath(postPath) } };
  });
};

export function getAllPostsMetaData() {
  const postMetaData: any[] = [];

  SEARCH_DIR_PATH_LIST.forEach((dirPath) => {
    const dirFullPath = toFullPath(dirPath);
    postMetaData.push(...getPostMetaDataArrayInDirPath(dirFullPath));
  });
  return postMetaData;
}

const searchPostInDirPath = (id: string, dirPath: string): boolean => {
  const fullDirPath = toFullPath(dirPath);
  const postNames = fs.readdirSync(fullDirPath);
  return postNames.includes(`${id}.md`);
};

export async function getPostContent(id: string) {
  const dirPathWithTargetPost = SEARCH_DIR_PATH_LIST.filter((dirPath) => {
    return searchPostInDirPath(id, dirPath);
  })[0];

  const targetPostPath = path.join(dirPathWithTargetPost, `${id}.md`);
  const postContents = fs.readFileSync(targetPostPath, "utf8");
  const matterResult = matter(postContents);
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkCaptions)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export const changeIdstoParams = (ids: any[]): any[] => {
  let res: any[] = [];
  ids.forEach((id) => {
    res.push({ params: { id: id } });
  });
  return res;
};

export const changeTagstoParams = (tags: any[]): any[] => {
  let res: any[] = [];
  tags.forEach((tag) => {
    res.push({ params: { tag: tag } });
  });
  return res;
};
