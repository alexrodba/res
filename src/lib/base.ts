// Prefix an app-absolute path with the configured base (e.g. '/').
// Handles the base's trailing slash and the path's leading slash so callers
// can keep writing readable paths like withBase('/img/bg.jpeg').
const BASE = import.meta.env.BASE_URL; // '/' in this project (served from the custom domain root)

export function withBase(path = '/'): string {
  const root = BASE.replace(/\/$/, '');
  const rest = path.replace(/^\//, '');
  return rest ? `${root}/${rest}` : `${root}/`;
}
