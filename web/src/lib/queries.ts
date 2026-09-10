const mainImageProjection = /* groq */ `{
  ...,
  asset->
}`;

const portableTextProjection = /* groq */ `[]{
  ...,
  _type == "mainImage" => ${mainImageProjection}
}`;

export const siteSettingsQuery = /* groq */ `*[_type == "siteSettings"][0]{
  title,
  subtitle,
  description,
  "author": author->{
    name,
    image${mainImageProjection},
    bio${portableTextProjection}
  }
}`;

export const projectsQuery = /* groq */ `*[_type == "project"] | order(publishedAt desc){
  _id,
  title,
  subtitle,
  years,
  "slug": slug.current,
  mainImage${mainImageProjection},
  body${portableTextProjection}
}`;
