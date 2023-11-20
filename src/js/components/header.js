const menu = document?.querySelector('[data-menu]');
const menuToggle = document?.querySelector('[data-burger]');

menuToggle.addEventListener('change', function() {
    if (!this.checked) {
        menu?.classList.remove('menu--active');
    }
  });

menu?.addEventListener('click', () => {
    menu?.classList.toggle('menu--active');
})
