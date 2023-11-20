const menu = document?.querySelector('[data-menu]');
const menuToggle = document?.querySelector('[data-burger]');
const catalogBtn = document?.querySelector('[data-catalogbtn]');
const catalogMenu = document?.querySelector('[data-catalogmenu]');
let isCatalogMenuOpen = false;

menuToggle.addEventListener('change', function() {
    if (!this.checked) {
        menu?.classList.remove('menu--active');
    }
});

menu?.addEventListener('click', (e) => {
    e.preventDefault();
    menu?.classList.toggle('menu--active');
})

catalogBtn?.addEventListener('click', (event) => {
    event.stopPropagation();
    isCatalogMenuOpen = !isCatalogMenuOpen;
    if (isCatalogMenuOpen) {
        document.addEventListener('click', closeCatalogMenuHandler);
    } else {
        document.removeEventListener('click', closeCatalogMenuHandler);
    }
    catalogMenu?.classList.toggle('_active', isCatalogMenuOpen);
});

function closeCatalogMenuHandler(event) {
    const isClickInsideCatalogMenu = catalogMenu?.contains(event.target);
    const isClickOnCatalogBtn = catalogBtn?.contains(event.target);

    if (!isClickInsideCatalogMenu && !isClickOnCatalogBtn) {
        isCatalogMenuOpen = false;
        catalogMenu?.classList.remove('_active');
        document.removeEventListener('click', closeCatalogMenuHandler);
    }
}
