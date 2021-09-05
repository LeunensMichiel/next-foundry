import fs from 'fs';
import matter from 'gray-matter';
import path, { join } from 'path';

type Items = {
  [key: string]: string;
};

type Item = {
  data: {
    [key: string]: string;
  };
  content: string;
};

export const ITEM_PATH_TYPE = {
  Post: path.join(process.cwd(), 'markdown/posts'),
};

function getItemPaths(
  type: typeof ITEM_PATH_TYPE[keyof typeof ITEM_PATH_TYPE]
): string[] {
  return (
    fs
      .readdirSync(type)
      // Only include md(x) files
      .filter((itemPath) => /\.mdx?$/.test(itemPath))
  );
}

export function getItem(
  type: typeof ITEM_PATH_TYPE[keyof typeof ITEM_PATH_TYPE],
  slug: string
): Item {
  const fullPath = join(type, `${slug}.mdx`);
  let fileContents;
  if (fs.existsSync(fullPath)) {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } else {
    fileContents = fs.readFileSync(join(type, `${slug}.md`), 'utf8');
  }
  const { data, content } = matter(fileContents);

  return { data, content };
}

export function getItems(
  type: typeof ITEM_PATH_TYPE[keyof typeof ITEM_PATH_TYPE],
  filePath: string,
  fields: string[] = []
): Items {
  const slug = filePath.replace(/\.mdx?$/, '');
  const { data, content } = getItem(type, slug);

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllItemsByDate(
  type: typeof ITEM_PATH_TYPE[keyof typeof ITEM_PATH_TYPE],
  fields: string[] = []
): Items[] {
  const filePaths = getItemPaths(type);
  const posts = filePaths
    .map((filePath) => getItems(type, filePath, fields))
    .sort((item1, item2) => (item1.date > item2.date ? -1 : 1));
  return posts;
}
