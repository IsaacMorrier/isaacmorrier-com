export interface SanityImage {
  alt?: string;
  caption?: string;
  layout?: string;
  filename?: { current: string };
  asset?: { _id: string; url: string };
}

export interface Project {
  _id: string;
  title: string;
  subtitle?: string;
  years?: string;
  slug: string;
  mainImage: SanityImage;
  body?: unknown[];
}

export interface Author {
  name: string;
  image?: SanityImage;
  bio?: unknown[];
}

export interface SiteSettings {
  title: string;
  subtitle?: string;
  description?: string;
  author?: Author;
}
