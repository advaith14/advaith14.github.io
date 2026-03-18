// Highlight active nav link based on current page
(function () {
  const links = document.querySelectorAll('header nav a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === current) {
      link.setAttribute('aria-current', 'page');
    }
  });
})();
