(() => {
  const search = document.querySelector('#search');
  const filters = [...document.querySelectorAll('[data-filter]')];
  const categories = [...document.querySelectorAll('.category')];
  let currentFilter = 'all';

  function update() {
    const query = search.value.trim().toLocaleLowerCase('ko');
    let count = 0;
    categories.forEach(category => {
      const matches = (currentFilter === 'all' || category.dataset.status === currentFilter)
        && category.dataset.search.toLocaleLowerCase('ko').includes(query);
      category.hidden = !matches;
      if (matches) count++;
    });
    document.querySelector('#empty').hidden = count > 0;
    document.querySelector('#result-count').textContent = `${count}개 카테고리가 표시됩니다.`;
  }

  filters.forEach(button => button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    filters.forEach(filter => {
      const active = filter === button;
      filter.classList.toggle('active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    update();
  }));
  search.addEventListener('input', update);
  update();
})();
