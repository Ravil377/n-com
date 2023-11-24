const columns = document?.querySelector('[data-columns]');

columns?.addEventListener('click', (e) => {
    e.preventDefault();
    const currentBtn = e.target;
    // const isActive = columns.classList.contains('menu--active');
    const active = columns?.querySelector('._active');
    active.classList.remove('_active');
    currentBtn.classList.add('_active');
})