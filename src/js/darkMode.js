import { AppName} from './data.js'
import { dom } from './dom.js';
import { getObjectLs, setObjectLs , updateItemLs } from './utils.js';


// Init Theme
export function initTheme() {
  const theme = getCurrentTheme();
  loadTheme(theme);
}


// Toggle Theme
export function toggleTheme() {

  let theme = getCurrentTheme();
  
  theme = theme === 'light' ? 'dark' : 'light';
  
  updateItemLs(AppName,'theme',theme)

  loadTheme(theme)
}


// Get Theme
function getCurrentTheme() {

  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  theme = theme ? 'dark' : 'light';

  if (getObjectLs(AppName)?.theme) {
    theme = getObjectLs(AppName).theme
  }

  return theme;
}


// Load Theme
function loadTheme(theme) {
  dom.root.dataset.theme = theme
}


