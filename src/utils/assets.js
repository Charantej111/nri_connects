/**
 * Dynamic Asset Resolver for React + Vite.
 * Resolves images placed in `src/assets/` during both development and production builds.
 */
export const getAssetUrl = (filename) => {
  if (!filename) return '';
  // Strip any leading slashes or legacy path prefixes
  const cleanName = filename.replace(/^\/?(Public\/assets\/|assets\/|public\/assets\/|Public\/|public\/)/i, '');
  return new URL(`../assets/${cleanName}`, import.meta.url).href;
};
