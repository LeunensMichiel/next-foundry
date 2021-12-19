import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

type MarkdownData = {
  [key: string]: string;
};

type MarkdownFile = {
  data?: {
    [key: string]: string;
  };
  content?: string;
};

type MARKDOWN_SUBFOLDER_TYPE = 'posts' | 'test';

function getMarkdownFolderPathByTypeAndLocale(
  locale: string,
  type?: MARKDOWN_SUBFOLDER_TYPE
): string {
  return type
    ? path.join(process.cwd(), `markdown/${locale}/${type}`)
    : path.join(process.cwd(), `markdown/${locale}`);
}

function getMarkdownPathsByTypeAndLocale(
  locale: string,
  type?: MARKDOWN_SUBFOLDER_TYPE
): string[] {
  const markdownFolderPath = getMarkdownFolderPathByTypeAndLocale(locale, type);
  return (
    fs
      .readdirSync(markdownFolderPath)
      // Only include md(x) files
      .filter((markdownFolderPath) => /\.mdx?$/.test(markdownFolderPath))
  );
}

export function readMarkdownFile(
  slug: string,
  locale: string,
  type?: MARKDOWN_SUBFOLDER_TYPE
): MarkdownFile {
  const markdownFolderPath = getMarkdownFolderPathByTypeAndLocale(locale, type);
  const markdownFilePathForSlug = fs
    .readdirSync(markdownFolderPath)
    .filter((path) => /\.mdx?$/.test(path))
    .find((file) => file.startsWith(slug));

  if (!markdownFilePathForSlug)
    throw new Error(`No markdown files found for given slug ${slug}`);

  const fullPath = path.join(markdownFolderPath, markdownFilePathForSlug);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Markdown file not found for path ${path}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { data, content };
}

export function getMarkdownFrontmatterAndContent(
  filePath: string,
  fields: string[] = [],
  locale: string,
  type?: MARKDOWN_SUBFOLDER_TYPE
): MarkdownData {
  const slug = filePath.replace(/\.mdx?$/, '');
  const { data, content } = readMarkdownFile(slug, locale, type);

  const markdownData: MarkdownData = {};
  // Ensure only the minimal needed data is exposed
  for (const field of fields) {
    if (field === 'slug') {
      markdownData[field] = slug;
    }
    if (field === 'content' && content) {
      markdownData[field] = content;
    }
    if (data && data[field]) {
      markdownData[field] = data[field];
    }
  }

  return markdownData;
}

export function getAllMarkdownByDate(
  fields: string[] = [],
  locale: string,
  type?: MARKDOWN_SUBFOLDER_TYPE
): MarkdownData[] {
  const markdownPaths = getMarkdownPathsByTypeAndLocale(locale, type);
  const data = markdownPaths
    .map((filePath) =>
      getMarkdownFrontmatterAndContent(filePath, fields, locale, type)
    )
    .sort((item1, item2) => (item1.date > item2.date ? -1 : 1));
  return data;
}

export function getAllMarkdownSlugsForType(
  locales: string[],
  type: MARKDOWN_SUBFOLDER_TYPE
): {
  locale: string;
  uniqueSlugs: string[];
}[] {
  const slugsByLocale = [];
  for (const locale of locales) {
    const markdownFolderPath = path.join(
      process.cwd(),
      `markdown/${locale}/${type}`
    );
    const markdownFiles = fs
      .readdirSync(markdownFolderPath)
      // Only include md(x) files
      ?.filter((path) => /\.mdx?$/.test(path))
      ?.map((slug) => slug.replace(/\.mdx?$/, ''));
    const uniqueSlugs = [...new Set(markdownFiles)];
    slugsByLocale.push({ locale, uniqueSlugs });
  }

  return slugsByLocale;
}
