/* Navigazione deck + accessibilita'
   - Frecce / PageUp-Down / Spazio / Home / End, click sinistra-destra
   - N = note di regia, F = schermo intero (anche col bottone #fs)
   - A ogni cambio slide: sposta focus sul titolo (h2/h1) e annuncia in aria-live
*/
(function () {
  var slides = [], i = 0;

  function announce(n) {
    var live = document.getElementById('live');
    var s = slides[n];
    var title = s ? (s.querySelector('h1, h2, .eyebrow') || {}).textContent : '';
    if (live) live.textContent = 'Slide ' + (n + 1) + ' di ' + slides.length + (title ? ' — ' + title.trim() : '');
  }

  function focusTitle(n) {
    var s = slides[n];
    if (!s) return;
    var h = s.querySelector('h1, h2');
    if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
  }

  function render(moveFocus) {
    slides.forEach(function (s, n) { s.classList.toggle('is-active', n === i); });
    var c = document.getElementById('count');
    if (c) c.textContent = (i + 1) + ' / ' + slides.length;
    var p = document.getElementById('progress');
    if (p) p.style.width = ((i + 1) / slides.length * 100) + '%';
    try { location.hash = 's' + (i + 1); } catch (e) {}
    announce(i);
    if (moveFocus) focusTitle(i);
  }
  function go(n, moveFocus) { i = Math.max(0, Math.min(slides.length - 1, n)); render(moveFocus); }

  function toggleFs() {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
  }

  document.addEventListener('DOMContentLoaded', function () {
    slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
    if (!slides.length) return;

    slides.forEach(function (s, n) {
      var f = s.querySelector('.foot .pg');
      if (f) f.textContent = (n + 1) + ' / ' + slides.length;
    });

    var m = (location.hash || '').match(/^#s(\d+)$/);
    if (m) i = parseInt(m[1], 10) - 1;
    render(false);

    document.addEventListener('keydown', function (e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      var k = e.key;
      if (k === 'ArrowRight' || k === 'PageDown' || k === ' ') { e.preventDefault(); go(i + 1, true); }
      else if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); go(i - 1, true); }
      else if (k === 'Home') { go(0, true); }
      else if (k === 'End') { go(slides.length - 1, true); }
      else if (k === 'n' || k === 'N') { document.body.classList.toggle('show-notes'); }
      else if (k === 'f' || k === 'F') { toggleFs(); }
    });

    document.addEventListener('click', function (e) {
      if (e.target.closest('.deck-bar, a, button, .notes, .qr')) return;
      go(i + (e.clientX > window.innerWidth * 0.35 ? 1 : -1), false);
    });

    window.addEventListener('hashchange', function () {
      var h = (location.hash || '').match(/^#s(\d+)$/);
      if (h && parseInt(h[1], 10) - 1 !== i) go(parseInt(h[1], 10) - 1, false);
    });

    var prev = document.getElementById('prev'); if (prev) prev.onclick = function () { go(i - 1, true); };
    var next = document.getElementById('next'); if (next) next.onclick = function () { go(i + 1, true); };
    var nt = document.getElementById('notes'); if (nt) nt.onclick = function () { document.body.classList.toggle('show-notes'); };
    var fs = document.getElementById('fs'); if (fs) fs.onclick = toggleFs;
  });
})();
