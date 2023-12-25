import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

const menus = document?.querySelectorAll('[data-menu]');
const menuToggle = document?.querySelector('[data-burger]');
const catalogBtns = document?.querySelectorAll('[data-catalogbtn]');
const searchBtns = document?.querySelectorAll('[data-searchbtn]');
const searchMenu = document?.querySelector('[data-search]');
const closeBtn = document?.querySelector('[data-closebtn]');
const catalogMenu = document?.querySelector('[data-catalogmenu]');
const menuContainer = document?.querySelector('[data-menucontainer]');

let isCatalogMenuOpen = false;
let currentBtnId = null;

searchBtns?.forEach(searchBtn => {
    searchBtn.addEventListener('click', function() {
        searchMenu.classList.add('_open');
    });

});

closeBtn?.addEventListener('click', () => searchMenu.classList.remove('_open'));

menuToggle?.addEventListener('change', function() {
    if (!this.checked) {
        enableScroll();
        menu?.classList.remove('menu--active');
    } else {
        disableScroll();
    }
});

menus?.forEach(menu => {
    menu?.addEventListener('click', (e) => {
        e.preventDefault();

        const isActive = menu.classList.contains('menu--active');
        const active = menuContainer?.querySelector('.menu--active');

        if (isActive) {
            menu.classList.remove('menu--active');
        } else {
            active?.classList.remove('menu--active');
            menu.classList.add('menu--active');
        }
    });
});

catalogBtns?.forEach(catalogBtn => {
    catalogBtn?.addEventListener('click', (event) => {
        event.stopPropagation();
        const id = event.target.id;

        if (isCatalogMenuOpen && currentBtnId === id) {
            isCatalogMenuOpen = false;
            enableScroll();
        } else {
            isCatalogMenuOpen = true;
            currentBtnId = id;
            disableScroll();
            document.addEventListener('click', closeCatalogMenuHandler);
        }

        catalogMenu.dataset.id = currentBtnId;
        catalogMenu?.classList.toggle('_active', isCatalogMenuOpen);
    });
});

function closeCatalogMenuHandler(event) {
    const isClickInsideCatalogMenu = catalogMenu?.contains(event.target);
    const isClickOnCatalogBtn = Array.from(catalogBtns).some(btn => btn.contains(event.target));

    if (!isClickInsideCatalogMenu && !isClickOnCatalogBtn) {
        isCatalogMenuOpen = false;
        enableScroll();
        catalogMenu?.classList.remove('_active');
        document.removeEventListener('click', closeCatalogMenuHandler);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var headerBottom = document.querySelector(".header-bottom-js");
    var headerTop = document.querySelector(".header-top-js");
    var header = document.querySelector(".header-js");

    window.addEventListener("scroll", function () {
        var screenWidth = window.innerWidth;

        if (screenWidth >= 1240) {
            
            if (window.scrollY >= 200) {
                headerBottom.classList.add("_fixed");
                header.classList.add('_pb');
            } else {
                headerBottom.classList.remove("_fixed");
                header.classList.remove('_pb');
            }
            if (window.scrollY >= 230) {
                headerBottom.classList.add("_transform");
            } else {
                headerBottom.classList.remove("_transform");
            }
        } else {
            if (window.scrollY >= 200) {
                headerTop.classList.add("_fixed");
                header.classList.add('_pb');
            } else {
                headerTop.classList.remove("_fixed");
                header.classList.remove('_pb');
            }
        }
    });
});
