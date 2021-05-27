import fs from 'fs';
import matter from 'gray-matter';
import path, { join } from 'path';

type Items = {
  [key: string]: string;
};

type Post = {
  data: {
    [key: string]: string;
  };
  content: string;
};

const POSTS_PATH = path.join(process.cwd(), 'markdown/posts');

function getPostFilePaths(): string[] {
  return (
    fs
      .readdirSync(POSTS_PATH)
      // Only include md(x) files
      .filter((postPath) => /\.mdx?$/.test(postPath))
  );
}

export function getPost(slug: string): Post {
  const fullPath = join(POSTS_PATH, `${slug}.mdx`);
  let fileContents;
  if (fs.existsSync(fullPath)) {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } else {
    fileContents = fs.readFileSync(join(POSTS_PATH, `${slug}.md`), 'utf8');
  }
  const { data, content } = matter(fileContents);

  return { data, content };
}

export function getPostItems(filePath: string, fields: string[] = []): Items {
  const slug = filePath.replace(/\.mdx?$/, '');
  const { data, content } = getPost(slug);

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

export function getAllPosts(fields: string[] = []): Items[] {
  const filePaths = getPostFilePaths();
  const posts = filePaths
    .map((filePath) => getPostItems(filePath, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
