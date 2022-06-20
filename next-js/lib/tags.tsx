import fs from "fs";
import matter from "gray-matter";
import { getPostIdFromPostPath, getAllPostPaths } from "./posts";

const getTagsFromPostPath = (postPath: string): string[] => {
  const fileContents = fs.readFileSync(postPath, "utf8");
  const matterResult = matter(fileContents);
  return matterResult.data.tags;
};

const hasTag = (postPath: string, tag: string): boolean => {
  const tags = getTagsFromPostPath(postPath);
  return tags && tags.includes(tag);
};

export async function getPostMetaDataArrayWithTag(tag: string) {
  const postPaths = getAllPostPaths();
  const postPathsWithTag = postPaths.filter((postPath) =>
    hasTag(postPath, tag)
  );

  let res: any[] = [];

  postPathsWithTag.map((postPath) => {
    const postData = matter(fs.readFileSync(postPath, "utf8"));
    res.push({
      id: getPostIdFromPostPath(postPath),
      ...postData.data,
    });
  });

  return res;
}

export const getAllTags = (): string[] => {
  const tags: string[] = [];
  const paths: string[] = getAllPostPaths();
  paths.forEach((path) => {
    const tmp = getTagsFromPostPath(path);
    if (tmp != null) tags.push(...tmp);
  });

  return Array.from(new Set(tags));
};
