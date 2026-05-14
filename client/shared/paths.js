const STATIC_QUERY = 'static';
const REPO_HINT = '/kelly-coins';

function trimSlash(value) {
  return String(value || '').replace(/\/+$/, '');
}

export function appBase() {
  const configured = document.documentElement?.dataset?.appBase;
  if (configured !== undefined && configured !== null && configured !== '') {
    return trimSlash(configured);
  }

  const path = window.location.pathname || '/';
  for (const marker of ['/child/', '/parent/']) {
    const idx = path.indexOf(marker);
    if (idx >= 0) return trimSlash(path.slice(0, idx));
  }

  if (path === REPO_HINT || path.startsWith(REPO_HINT + '/')) return REPO_HINT;
  return '';
}

export function appPath(path) {
  if (!path) return appBase() || '/';
  if (/^(https?:|data:|blob:|mailto:|tel:)/i.test(path)) return path;
  if (!path.startsWith('/')) return path;
  return `${appBase()}${path}`;
}

export function childPath(path = '') {
  const clean = String(path).replace(/^\/?child\/?/, '').replace(/^\/+/, '');
  return appPath(`/child/${clean}`);
}

export function parentPath(path = '') {
  const clean = String(path).replace(/^\/?parent\/?/, '').replace(/^\/+/, '');
  return appPath(`/parent/${clean}`);
}

export function isStaticMode() {
  const params = new URLSearchParams(window.location.search || '');
  if (params.get(STATIC_QUERY) === '1') return true;
  if (params.get(STATIC_QUERY) === '0') return false;
  return window.location.hostname.endsWith('github.io');
}

if (typeof window !== 'undefined') {
  window.kcAppBase = appBase;
  window.kcPath = appPath;
  window.kcChildPath = childPath;
  window.kcParentPath = parentPath;
  window.kcStaticMode = isStaticMode;
}
