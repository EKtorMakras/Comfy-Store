import { dom } from './dom.js'


export function toggleNavListeners() {

  dom.toggleNavBtn.addEventListener('click', () => {
    showSidebar();
  })

  dom.closeNavBtn.addEventListener('click', () => {
    hideSidebar();
  })

  dom.sidebarOverlay.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('sidebar')) {
      hideSidebar();
    }
  })
}


function showSidebar() {
  dom.sidebarOverlay.classList.add('show');
}

function hideSidebar() {
  dom.sidebarOverlay.classList.remove('show');
}