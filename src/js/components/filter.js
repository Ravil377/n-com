const columns = document?.querySelector('[data-columns]');
const goods = document?.querySelector('[data-goods]');

columns?.addEventListener('click', (e) => {
    e.preventDefault();
    const currentBtn = e.target;
    const id = currentBtn?.dataset.id;
    id == 1 && !goods.classList.contains('_one') ? goods?.classList.add('_one') : goods.classList.remove('_one');
    const active = columns?.querySelector('._active');
    active.classList.remove('_active');
    currentBtn.classList.add('_active');

})