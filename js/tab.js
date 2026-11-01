/* Tab boleh guna papan kekunci; tab terakhir diingat melalui #hash */
(function () {
  var senarai = document.querySelector('[role="tablist"]');
  if (!senarai) return;
  var tabs = Array.prototype.slice.call(senarai.querySelectorAll('[role="tab"]'));

  function pilih(tab, fokus) {
    tabs.forEach(function (t) {
      var aktif = t === tab;
      t.setAttribute("aria-selected", aktif ? "true" : "false");
      t.tabIndex = aktif ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !aktif;
    });
    if (fokus) tab.focus();
    try { history.replaceState(null, "", "#" + tab.getAttribute("aria-controls").replace(/^p-/, "")); } catch (x) {}
  }

  senarai.addEventListener("click", function (e) {
    var t = e.target.closest('[role="tab"]'); if (t) pilih(t, false);
  });
  senarai.addEventListener("keydown", function (e) {
    var i = tabs.indexOf(document.activeElement); if (i < 0) return;
    var j = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : e.key === "Home" ? 0 : e.key === "End" ? tabs.length - 1 : null;
    if (j === null) return;
    e.preventDefault();
    pilih(tabs[(j + tabs.length) % tabs.length], true);
  });

  var h = location.hash.replace("#", "");
  var awal = tabs.find(function (t) { return t.getAttribute("aria-controls") === "p-" + h; });
  if (awal) pilih(awal, false);
})();
