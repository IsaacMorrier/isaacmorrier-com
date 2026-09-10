import { createImageUrlBuilder } from '@sanity/image-url';
import { projectId, dataset } from './sanity';
import type { SanityImage } from './types';

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlForImage(source: SanityImage) {
  return builder.image(source);
}

/**
 * Sanity's CDN allows an arbitrary filename to be appended after the asset
 * URL as long as the asset id/extension still match, so image URLs can carry
 * the original, human-readable filename instead of just the asset hash.
 */
export function imageSrc(image: SanityImage, width?: number): string {
  let base = urlForImage(image);
  if (width) base = base.width(width);

  const bareUrl = base.url();
  const formattedUrl = base.auto('format').url();
  const params = formattedUrl.replace(bareUrl, '');
  const filename = image.filename?.current;

  return filename ? `${bareUrl}/${filename}${params}` : formattedUrl;
}
