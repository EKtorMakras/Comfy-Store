import { AppName , navLinks} from './data.js'
import { dom } from './dom.js';

export function initStartingData() {
  fillBasicData();
  fillNavLinksData();
  fillSidebarLinksData();
}


function fillBasicData() {
  document.title = AppName;
}


function fillNavLinksData() { 
  const list = navLinks.map(link => {
    return `
      <li>
        <a href="${link.url}" class="nav-link">
          ${link.value}
        </a>
      </li>
    `
  }).join('')

  dom.navLinks.innerHTML = list;
}


function fillSidebarLinksData() {
  const list = navLinks.map(link => {
    return `
      <li>
        <a href="${link.url}" class="sidebar-link">
          <i class="${link.icon}"></i>
          <span>${link.value}</span>
        </a>
      </li>
    `
  }).join('')

  dom.sidebarLinks.innerHTML = list;
}