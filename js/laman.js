/* Kepala, kaki dan navigasi yang dikongsi oleh semua halaman. */
(function () {
  var K = window.KURSUS;
  var fail = location.pathname.split("/").pop() || "index.html";
  var indeks = K.halaman.findIndex(function (h) { return h.fail === fail; });
  if (indeks < 0) indeks = 0;

  var lencana =
    '<svg class="lencana" viewBox="0 0 40 40" aria-hidden="true">' +
    '<rect x="1" y="1" width="38" height="38" rx="6" fill="none" stroke="#C59A2A" stroke-width="2"/>' +
    '<path d="M8 30 L14 12 L20 30 L26 12 L32 30" fill="none" stroke="#C59A2A" stroke-width="2.4" stroke-linejoin="round"/>' +
    '<path d="M8 33 H32" stroke="#C59A2A" stroke-width="2"/></svg>';

  var navHtml = K.halaman.map(function (h, i) {
    return '<a href="' + h.fail + '"' + (i === indeks ? ' aria-current="page"' : "") + ">" +
      h.ms + "<small>" + h.th + "</small></a>";
  }).join("");

  var kepala = document.getElementById("kepala");
  if (kepala) {
    kepala.innerHTML =
      '<a class="lompat" href="#isi">Langkau ke kandungan · ข้ามไปยังเนื้อหา</a>' +
      '<header class="kepala"><div class="kepala-dalam">' +
      '<a class="jenama" href="index.html">' + lencana +
      '<span><span class="jenama-kod">' + K.kod + " · " + K.semester + "</span>" +
      '<span class="jenama-nama">' + K.namaMs + "</span></span></a>" +
      '<button class="togol-nav" type="button" aria-expanded="false" aria-controls="nav-utama">Menu · เมนู</button>' +
      '<nav class="nav" id="nav-utama" aria-label="Navigasi utama">' + navHtml + "</nav>" +
      "</div></header><div class=\"rebung\" aria-hidden=\"true\"></div>";
    var togol = kepala.querySelector(".togol-nav");
    var nav = kepala.querySelector(".nav");
    togol.addEventListener("click", function () {
      var buka = nav.classList.toggle("buka");
      togol.setAttribute("aria-expanded", buka ? "true" : "false");
    });
  }

  /* Butang sebelum / seterusnya di hujung setiap halaman */
  var navHal = document.getElementById("nav-halaman");
  if (navHal) {
    var sebelum = K.halaman[indeks - 1], seterus = K.halaman[indeks + 1];
    var html = "";
    if (sebelum) html += '<a href="' + sebelum.fail + '"><small>‹ Sebelum · ก่อนหน้า</small><span class="ms">' + sebelum.ms + '</span><span class="th">' + sebelum.th + "</span></a>";
    if (seterus) html += '<a class="seterus" href="' + seterus.fail + '"><small>Seterusnya · ถัดไป ›</small><span class="ms">' + seterus.ms + '</span><span class="th">' + seterus.th + "</span></a>";
    navHal.innerHTML = html;
  }

  var kaki = document.getElementById("kaki");
  if (kaki) {
    var p = K.pensyarah.map(function (x) {
      return "<p>" + x.namaTh + ' · <a href="mailto:' + x.emel + '">' + x.emel + "</a></p>";
    }).join("");
    kaki.innerHTML = '<footer class="kaki"><div class="kaki-dalam">' +
      "<div><p class=\"ms\">" + K.kod + " " + K.namaMs + "</p><p>" + K.namaTh + " · " + K.semesterTh + "</p>" +
      "<p>Program Bahasa Melayu, Fakulti Kemanusiaan dan Sains Sosial, Universiti Thaksin</p></div>" +
      "<div><p class=\"ms\">Pensyarah · อาจารย์ผู้สอน</p>" + p + "</div>" +
      "<div><p class=\"ms\">Waktu konsultasi · เวลาให้คำปรึกษา</p><p>Rabu 13.00–16.00, bilik 1316</p><p>วันพุธ 13.00–16.00 น. ห้อง 1316</p></div>" +
      "</div></footer>";
  }

  /* Toast kecil untuk maklum balas tindakan */
  window.tunjukToast = function (teks) {
    var t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = teks;
    t.classList.add("nampak");
    clearTimeout(t._m);
    t._m = setTimeout(function () { t.classList.remove("nampak"); }, 1800);
  };

  /* Butang salin teks */
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".salin");
    if (!b) return;
    var sasaran = document.getElementById(b.getAttribute("data-salin"));
    if (!sasaran) return;
    var teks = sasaran.innerText.trim();
    var siap = function () { tunjukToast("Disalin · คัดลอกแล้ว"); };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(teks).then(siap, function () { salinLama(teks); siap(); });
    } else { salinLama(teks); siap(); }
  });
  function salinLama(teks) {
    var ta = document.createElement("textarea");
    ta.value = teks; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (x) {}
    document.body.removeChild(ta);
  }

  /* Storan setempat yang selamat */
  window.simpan = {
    baca: function (k, lalai) { try { var v = localStorage.getItem(k); return v === null ? lalai : JSON.parse(v); } catch (x) { return lalai; } },
    tulis: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (x) {} }
  };
})();
