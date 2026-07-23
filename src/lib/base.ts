// Prefix an app-absolute path with the configured base (e.g. '/res').
// Handles the base's trailing slash and the path's leading slash so callers
// can keep writing readable paths like withBase('/img/bg.jpeg').
const BASE = import.meta.env.BASE_URL; // '/res/' in this project

export function withBase(path = '/'): string {
  const root = BASE.replace(/\/$/, '');
  const rest = path.replace(/^\//, '');
  return rest ? `${root}/${rest}` : `${root}/`;
}
