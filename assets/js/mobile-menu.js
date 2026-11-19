/* Mobile slide-in sidebar behaviour for the main navigation (<992px). */
(function () {
  var nav = document.getElementById('navbarSupportedContent');
  if (!nav) return;

  var overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  document.body.appendChild(overlay);

  var closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'menu-close';
  closeBtn.setAttribute('aria-label', 'Close menu');
  closeBtn.innerHTML = '&times;';
  nav.insertBefore(closeBtn, nav.firstChild);

  var foot = document.createElement('div');
  foot.className = 'menu-foot';
  foot.innerHTML =
    '<a class="primary_btn text-decoration-none" href="contact.html">Request a Quote</a>' +
    '<div class="menu-social">' +
    '<a href="https://x.com/RyanChrostowski" target="_blank" rel="noopener me" aria-label="Ironstone Masonry on X"><i class="fa-brands fa-x-twitter"></i></a>' +
    '<a href="https://www.pinterest.com/ctironstonemasonry/" target="_blank" rel="noopener me" aria-label="Ironstone Masonry on Pinterest"><i class="fa-brands fa-pinterest-p"></i></a>' +
    '<a href="https://www.instagram.com/ironstonemasonry/" target="_blank" rel="noopener me" aria-label="Ironstone Masonry on Instagram"><i class="fa-brands fa-instagram"></i></a>' +
    '</div>';
  nav.appendChild(foot);

  function sync() {
    var open = nav.classList.contains('show');
    document.body.classList.toggle('menu-open', open);
    overlay.classList.toggle('show', open);
  }
  new MutationObserver(sync).observe(nav, { attributes: true, attributeFilter: ['class'] });

  function close() {
    if (window.jQuery && jQuery.fn.collapse) { jQuery(nav).collapse('hide'); }
    else { nav.classList.remove('show'); sync(); }
  }

  overlay.addEventListener('click', close);
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  nav.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a') : null;
    if (a && !a.classList.contains('dropdown-toggle')) close();
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 991 && nav.classList.contains('show')) close();
  });
})();
