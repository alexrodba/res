// Prefix an app-absolute path with the configured base (e.g. '/').
// Handles the base's trailing slash and the path's leading slash so callers
// can keep writing readable paths like withBase('/img/bg2.jpeg').
const BASE = import.meta.env.BASE_URL; // '/' in this project (served from the custom domain root)

// Page routes get a trailing slash to match `trailingSlash: 'always'` — GitHub
// Pages 301s '/music' to '/music/', so linking without it costs a redirect on
// every click. Asset paths (anything with a file extension) are left alone.
const isAsset = (path: string) => /\.[a-z0-9]+$/i.test(path);

export function withBase(path = '/'): string {
  const root = BASE.replace(/\/$/, '');
  const rest = path.replace(/^\//, '');
  if (!rest) return `${root}/`;
  const href = `${root}/${rest}`;
  return isAsset(href) || href.endsWith('/') ? href : `${href}/`;
}
