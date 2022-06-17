import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { CATEGORY_NAME_LIST, FOOTER_CONTENTS_COLOR } from "./constants";
import markdownToHtml from "zenn-markdown-html";
import { jsx } from "@emotion/react";

const postsDir = path.join(process.cwd(), "posts");

// path -> [array of data of each file in the path]
function getPostDataFromPaths(filePaths: string[], searchDir: string): any[] {
  // 各投稿のデータをもつオブジェクトを取得する
  const categoryPostsData = filePaths.map((fileName) => {
    const postId = fileName.replace(/\.md$/, "");
    const fullPath = path.join(searchDir, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    console.assert(matterResult.data !== undefined, "Post Date not set");

    return {
      id: postId,
      ...matterResult.data,
    };
  });

  // 日付順にソートして返す
  return categoryPostsData.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else if (a.date > b.date) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getCategoryPostsData(category: string) {
  const searchDir = path.join(process.cwd(), `posts/${category}`);

  // カテゴリーに対応する投稿の一覧を取得する
  const tmpFileNames: string[] = fs.readdirSync(searchDir);
  const filePaths: string[] = [];
  tmpFileNames.forEach((fileName) => {
    if (fileName.length > 3 && fileName.slice(-3) === ".md") {
      filePaths.push(fileName);
    }
  });

  return getPostDataFromPaths(filePaths, searchDir);
}

export const getTagPostData = (tag: string) => {
  const searchDir = postsDir;
  const tmpFileNames: string[] = fs.readdirSync(searchDir);
  const filePaths: string[] = [];
  tmpFileNames.forEach((fileName) => {
    if (fileName.length > 3 && fileName.slice(-3) === ".md") {
      filePaths.push(fileName);
    }
  });

  CATEGORY_NAME_LIST.forEach((categoryName) => {
    const categoryDir = path.join(process.cwd(), `posts/${categoryName}`);
    const tmpFileNames: string[] = fs.readdirSync(categoryDir);
    tmpFileNames.forEach((fileName) => {
      if (fileName.length > 3 && fileName.slice(-3) === ".md") {
        const filePath: string = categoryName.concat("/", fileName);
        filePaths.push(filePath);
      }
    });
  });
  return getPostDataFromPaths(filePaths, searchDir);
};

export function getAllPostsData() {
  const searchDir = postsDir;
  const tmpFileNames: string[] = fs.readdirSync(searchDir);
  const filePaths: string[] = [];
  tmpFileNames.forEach((fileName) => {
    if (fileName.length > 3 && fileName.slice(-3) === ".md") {
      filePaths.push(fileName);
    }
  });

  CATEGORY_NAME_LIST.forEach((categoryName) => {
    const categoryDir = path.join(process.cwd(), `posts/${categoryName}`);
    const tmpFileNames: string[] = fs.readdirSync(categoryDir);
    tmpFileNames.forEach((fileName) => {
      if (fileName.length > 3 && fileName.slice(-3) === ".md") {
        const filePath: string = categoryName.concat("/", fileName);
        filePaths.push(filePath);
      }
    });
  });
  return getPostDataFromPaths(filePaths, searchDir);
}

export function getAllPostsIds() {
  const tmpFileNames = fs.readdirSync(postsDir);
  const fileNames: string[] = [];
  for (let i = 0; i < tmpFileNames.length; i++) {
    if (tmpFileNames[i].length > 3 && tmpFileNames[i].slice(-3) === ".md") {
      fileNames.push(tmpFileNames[i]);
    }
  }

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostContent(id: string) {
  const fullPath = path.join(postsDir, `${id}.md`);
  const postContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(postContents);

  const contentHtml = markdownToHtml(matterResult.content);
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
