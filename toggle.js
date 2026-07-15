(function () {
  var KEY = 'site-theme';
  function current() {
    try { return localStorage.getItem(KEY) || 'classic'; } catch (e) { return 'classic'; }
  }
  function apply(t) {
    document.documentElement.classList.toggle('classic', t === 'classic');
    var a = document.getElementById('theme-toggle');
    if (a) a.textContent = t === 'classic' ? 'medium look' : 'classic look';
  }
  apply(current());
  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('.header-content-nav');
    if (!nav || document.getElementById('theme-toggle')) return;
    var item = document.createElement('div');
    item.className = 'header-content-nav-item';
    var a = document.createElement('a');
    a.id = 'theme-toggle';
    a.href = '#';
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var next = current() === 'classic' ? 'medium' : 'classic';
      try { localStorage.setItem(KEY, next); } catch (err) {}
      apply(next);
    });
    item.appendChild(a);
    nav.appendChild(item);
    apply(current());
  });
})();
