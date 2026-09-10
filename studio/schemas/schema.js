// document schemas
import author from './documents/author'
import category from './documents/category'
import project from './documents/project'
import post from './documents/post'
import siteSettings from './documents/siteSettings'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'

export default [
  siteSettings,
  project,
  post,
  category,
  author,
  mainImage,
  authorReference,
  bodyPortableText,
  bioPortableText,
  excerptPortableText
]
