(function () {
  'use strict';

  var ETNIK = window.ETNIK;
  var PERAYAAN = window.PERAYAAN;
  var STATISTIK = window.STATISTIK;

  var byId = {};
  ETNIK.forEach(function (e) { byId[e.id] = e; });

  var WILAYAH = { semenanjung: 'Semenanjung', sabah: 'Sabah', sarawak: 'Sarawak' };
  var BULAN = ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'];
  var BULAN_PENDEK = ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogo', 'Sep', 'Okt', 'Nov', 'Dis'];
  var TAB = ['teroka', 'perayaan', 'kuiz', 'nota'];
  var JUMLAH_SOALAN = 10;

  // Storan peranti. Boleh gagal (mod peribadi), jadi aplikasi mesti tetap berfungsi tanpanya.
  var KUNCI = { nota: 'jalinan.nota', simpan: 'jalinan.simpan', kuiz: 'jalinan.kuizTerbaik' };
  var store = {
    get: function (k, lalai) {
      try {
        var v = window.localStorage.getItem(k);
        return v ? JSON.parse(v) : lalai;
      } catch (err) { return lalai; }
    },
    set: function (k, v) {
      try { window.localStorage.setItem(k, JSON.stringify(v)); } catch (err) { /* abaikan */ }
    }
  };

  var state = {
    wilayah: 'semua',
    cari: '',
    tapisPesta: 'semua',
    kuiz: null,
    scrollTeroka: 0,
    navDalamApp: false
  };

  var view = document.getElementById('view');
  var btnKembali = document.getElementById('btn-kembali');
  var tajukAtas = document.getElementById('topbar-tajuk');
  var navLinks = document.querySelectorAll('.tabbar a');

  // ---------- Bantuan ----------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function kain(e, kelas) {
    var w = e.warna;
    var gaya = '--c1:' + w[0] + ';--c2:' + w[1] + (w[2] ? ';--c3:' + w[2] : '');
    return '<div class="kain kain--' + e.corak + (kelas ? ' ' + kelas : '') + '" style="' + gaya + '" aria-hidden="true"></div>';
  }

  function tagWilayah(e) {
    return e.wilayah.map(function (w) {
      return '<span class="tag tag--' + w + '">' + WILAYAH[w] + '</span>';
    }).join('');
  }

  function pendek(s) { return s.split(' (')[0]; }

  function hurufBesar(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  function acak(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function pilihSatu(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function senaraiSimpan() { return store.get(KUNCI.simpan, []); }
  function semuaNota() { return store.get(KUNCI.nota, {}); }

  var IKON_SIMPAN = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6.5 3.5h11v17l-5.5-4-5.5 4z" fill="currentColor"/></svg>';
  var IKON_SIMPAN_KOSONG = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6.5 3.5h11v17l-5.5-4-5.5 4z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';
  var IKON_CARI = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M16 16l4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';

  // ---------- Penghala ----------
  function laluan() {
    var h = decodeURIComponent(location.hash.slice(1));
    if (h.indexOf('etnik-') === 0 && byId[h.slice(6)]) return { jenis: 'etnik', etnik: byId[h.slice(6)] };
    return { jenis: TAB.indexOf(h) >= 0 ? h : 'teroka' };
  }

  var laluanSebelum = null;

  function render() {
    var r = laluan();
    if (laluanSebelum === 'teroka') state.scrollTeroka = window.scrollY;

    var tabAktif = r.jenis === 'etnik' ? 'teroka' : r.jenis;
    navLinks.forEach(function (a) {
      if (a.getAttribute('data-tab') === tabAktif) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    btnKembali.hidden = r.jenis !== 'etnik';
    tajukAtas.textContent = '';

    if (r.jenis === 'etnik') renderEtnik(r.etnik);
    else if (r.jenis === 'perayaan') renderPerayaan();
    else if (r.jenis === 'kuiz') renderKuiz();
    else if (r.jenis === 'nota') renderNota();
    else renderTeroka();

    var y = (r.jenis === 'teroka' && laluanSebelum && laluanSebelum.indexOf('etnik') === 0) ? state.scrollTeroka : 0;
    window.scrollTo(0, y);
    laluanSebelum = r.jenis === 'etnik' ? 'etnik-' + r.etnik.id : r.jenis;
  }

  btnKembali.addEventListener('click', function () {
    if (state.navDalamApp) history.back();
    else location.hash = 'teroka';
  });

  // ---------- Teroka ----------
  function tapisEtnik() {
    var q = state.cari.trim().toLowerCase();
    return ETNIK.filter(function (e) {
      if (state.wilayah !== 'semua' && e.wilayah.indexOf(state.wilayah) < 0) return false;
      if (!q) return true;
      var teks = [e.nama, e.alias, e.lokasi, e.bahasa, e.agama]
        .concat(e.makanan || [], e.seni || [], e.ikon || [])
        .join(' ').toLowerCase();
      return teks.indexOf(q) >= 0;
    });
  }

  function htmlKad(e, disimpan) {
    return '<a class="kad" href="#etnik-' + e.id + '">' +
      kain(e) +
      (disimpan ? '<span class="kad__simpan" aria-label="Disimpan">' + IKON_SIMPAN + '</span>' : '') +
      '<div class="kad__body">' +
        '<h3 class="kad__nama">' + esc(e.nama) + '</h3>' +
        '<p class="kad__alias">' + esc(e.alias) + '</p>' +
        '<div class="kad__wilayah">' + tagWilayah(e) + '</div>' +
      '</div>' +
    '</a>';
  }

  function kemasGrid() {
    var senarai = tapisEtnik();
    var simpan = senaraiSimpan();
    var grid = document.getElementById('grid');
    var kira = document.getElementById('kiraan');
    if (!grid) return;
    kira.textContent = senarai.length + ' daripada ' + ETNIK.length + ' etnik';
    grid.innerHTML = senarai.length
      ? senarai.map(function (e) { return htmlKad(e, simpan.indexOf(e.id) >= 0); }).join('')
      : '<p class="empty" style="grid-column:1/-1">Tiada etnik sepadan dengan "' + esc(state.cari) + '". Cuba nama makanan, perayaan atau negeri.</p>';
  }

  function htmlStatistik() {
    var warna = ['var(--s1)', 'var(--s2)', 'var(--s3)', 'var(--s4)'];
    var bar = STATISTIK.komposisi.map(function (k, i) {
      return '<span style="width:' + k.peratus + '%;background:' + warna[i] + '" title="' + esc(k.nama) + ' ' + k.peratus + '%"></span>';
    }).join('');
    var legend = STATISTIK.komposisi.map(function (k, i) {
      return '<li><span class="swatch" style="background:' + warna[i] + '"></span>' +
        '<span>' + esc(k.nama) + (k.ket ? '<small>' + esc(k.ket) + '</small>' : '') + '</span>' +
        '<span class="nilai">' + k.peratus.toFixed(1) + '%</span></li>';
    }).join('');
    return '<section class="stat" aria-labelledby="stat-tajuk">' +
      '<div class="stat__head"><h2 id="stat-tajuk">Komposisi warganegara</h2>' +
      '<span class="stat__jumlah">Jumlah penduduk ' + esc(STATISTIK.jumlahPenduduk) + '</span></div>' +
      '<div class="stat__bar" role="img" aria-label="Bumiputera 69.4%, Cina 23.2%, India 6.7%, Lain-lain 0.7%">' + bar + '</div>' +
      '<ul class="stat__legend">' + legend + '</ul>' +
      '<p class="sumber">Sumber: ' + esc(STATISTIK.sumber) + '.</p>' +
    '</section>';
  }

  function renderTeroka() {
    var chips = [['semua', 'Semua']].concat(Object.keys(WILAYAH).map(function (k) { return [k, WILAYAH[k]]; }));
    view.innerHTML =
      '<header class="page-head">' +
        '<p class="eyebrow">Etnik Malaysia</p>' +
        '<h1 class="display">Teroka</h1>' +
        '<p class="lead">Bahasa, perayaan, pakaian dan makanan ' + ETNIK.length + ' etnik di Malaysia.</p>' +
      '</header>' +
      '<div class="section">' +
        '<label class="search">' + IKON_CARI +
          '<input id="cari" type="search" aria-label="Cari etnik" placeholder="Cari etnik, makanan atau tempat" autocomplete="off" value="' + esc(state.cari) + '">' +
        '</label>' +
        '<div class="chips" role="group" aria-label="Tapis mengikut wilayah">' +
          chips.map(function (c) {
            return '<button type="button" class="chip" data-wilayah="' + c[0] + '" aria-pressed="' + (state.wilayah === c[0]) + '">' + c[1] + '</button>';
          }).join('') +
        '</div>' +
        '<p class="count" id="kiraan" aria-live="polite"></p>' +
        '<div class="grid" id="grid"></div>' +
      '</div>' +
      htmlStatistik();

    kemasGrid();

    document.getElementById('cari').addEventListener('input', function (ev) {
      state.cari = ev.target.value;
      kemasGrid();
    });
    view.querySelectorAll('.chip').forEach(function (b) {
      b.addEventListener('click', function () {
        state.wilayah = b.getAttribute('data-wilayah');
        view.querySelectorAll('.chip').forEach(function (x) {
          x.setAttribute('aria-pressed', String(x === b));
        });
        kemasGrid();
      });
    });
  }

  // ---------- Halaman etnik ----------
  function renderEtnik(e) {
    tajukAtas.textContent = e.nama;
    var simpan = senaraiSimpan();
    var disimpan = simpan.indexOf(e.id) >= 0;
    var nota = semuaNota()[e.id] || '';
    var pesta = PERAYAAN.filter(function (p) { return p.etnik.indexOf(e.id) >= 0; });

    var fakta = [['Bahasa', e.bahasa], ['Agama', e.agama], ['Lokasi', e.lokasi]]
      .map(function (f) { return '<div><dt>' + f[0] + '</dt><dd>' + esc(f[1]) + '</dd></div>'; }).join('');

    function bahagian(tajuk, isi) {
      return isi ? '<section class="section"><h2 class="section__title">' + tajuk + '</h2>' + isi + '</section>' : '';
    }
    function chipList(arr) {
      return arr && arr.length ? '<ul class="senarai">' + arr.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : '';
    }

    view.innerHTML =
      '<article class="etnik">' +
        kain(e, 'etnik__band') +
        '<header class="etnik__head">' +
          '<p class="eyebrow">' + e.wilayah.map(function (w) { return WILAYAH[w]; }).join(' · ') + '</p>' +
          '<h1 class="display">' + esc(e.nama) + '</h1>' +
          '<p class="etnik__alias">' + esc(e.alias) + '</p>' +
          '<p class="etnik__ringkasan">' + esc(e.ringkasan) + '</p>' +
          '<div class="etnik__actions">' +
            '<button type="button" class="btn" id="btn-simpan" aria-pressed="' + disimpan + '">' +
              (disimpan ? IKON_SIMPAN + 'Disimpan' : IKON_SIMPAN_KOSONG + 'Simpan') +
            '</button>' +
          '</div>' +
        '</header>' +
        '<dl class="fakta-list">' + fakta + '</dl>' +
        (e.salam ? '<div class="salam"><p class="eyebrow">Ucapan salam</p><p class="salam__frasa">' + esc(e.salam.frasa) + '</p><p class="salam__maksud">' + esc(e.salam.maksud) + '</p></div>' : '') +
        bahagian('Perayaan', pesta.length ? '<div class="perayaan-mini">' + pesta.map(function (p) {
          return '<a href="#perayaan"><strong>' + esc(p.nama) + '</strong><span>' + esc(p.tarikh) + '</span></a>';
        }).join('') + '</div>' : '') +
        bahagian('Pakaian tradisional', e.pakaian ? '<p class="prose">' + esc(e.pakaian) + '</p>' : '') +
        bahagian('Makanan', chipList(e.makanan)) +
        bahagian('Seni dan budaya', chipList(e.seni)) +
        bahagian('Rumah dan seni bina', e.rumah ? '<p class="prose">' + esc(e.rumah) + '</p>' : '') +
        bahagian('Fakta menarik', '<ul class="fakta-menarik">' + e.fakta.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>') +
        '<section class="section nota-box">' +
          '<label class="section__title" for="nota-teks">Nota saya</label>' +
          '<textarea id="nota-teks" placeholder="Tulis nota tentang etnik ' + esc(e.nama) + '. Contoh: perkara yang dipelajari di kelas.">' + esc(nota) + '</textarea>' +
          '<p class="nota-status" id="nota-status" aria-live="polite">' + (nota ? 'Disimpan dalam peranti ini.' : '') + '</p>' +
        '</section>' +
      '</article>';

    document.getElementById('btn-simpan').addEventListener('click', function (ev) {
      var b = ev.currentTarget;
      var s = senaraiSimpan();
      var i = s.indexOf(e.id);
      if (i >= 0) s.splice(i, 1); else s.push(e.id);
      store.set(KUNCI.simpan, s);
      var aktif = i < 0;
      b.setAttribute('aria-pressed', String(aktif));
      b.innerHTML = aktif ? IKON_SIMPAN + 'Disimpan' : IKON_SIMPAN_KOSONG + 'Simpan';
    });

    var pemasa = null;
    var status = document.getElementById('nota-status');
    document.getElementById('nota-teks').addEventListener('input', function (ev) {
      var teks = ev.target.value;
      status.textContent = 'Menyimpan…';
      clearTimeout(pemasa);
      pemasa = setTimeout(function () {
        var semua = semuaNota();
        if (teks.trim()) semua[e.id] = teks; else delete semua[e.id];
        store.set(KUNCI.nota, semua);
        status.textContent = teks.trim() ? 'Disimpan dalam peranti ini.' : 'Nota dipadam.';
      }, 400);
    });
  }

  // ---------- Perayaan ----------
  function renderPerayaan() {
    var bulanKini = new Date().getMonth() + 1;
    var tapis = state.tapisPesta;
    var senarai = PERAYAAN.filter(function (p) { return tapis === 'semua' || p.etnik.indexOf(tapis) >= 0; });

    var kumpulan = {};
    senarai.forEach(function (p) {
      var k = p.bulan.length ? p.bulan[0] : 0;
      (kumpulan[k] = kumpulan[k] || []).push(p);
    });

    function htmlPesta(p) {
      var julat = p.bulan.length > 1 ? BULAN_PENDEK[p.bulan[0] - 1] + ' – ' + BULAN_PENDEK[p.bulan[p.bulan.length - 1] - 1] + ' · ' : '';
      return '<article class="pesta">' +
        '<h3>' + esc(p.nama) + '</h3>' +
        '<p class="pesta__tarikh">' + julat + esc(p.tarikh) + '</p>' +
        '<p class="pesta__ket">' + esc(p.ket) + '</p>' +
        '<div class="pesta__etnik">' + p.etnik.map(function (id) {
          var e = byId[id];
          return '<a href="#etnik-' + id + '">' + kain(e) + esc(e.nama) + '</a>';
        }).join('') + '</div>' +
      '</article>';
    }

    var bulanHtml = Object.keys(kumpulan).map(Number).sort(function (a, b) {
      return (a || 13) - (b || 13);
    }).map(function (k) {
      var kini = k === bulanKini;
      var label = k
        ? '<b>' + BULAN_PENDEK[k - 1] + '</b><small>' + BULAN[k - 1] + '</small>'
        : '<b><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M15 3a9 9 0 1 0 6 15.5A7.5 7.5 0 0 1 15 3z" fill="currentColor"/></svg></b><small>Hijrah</small>';
      return '<section class="bulan' + (kini ? ' bulan--kini' : '') + '" aria-label="' + (k ? BULAN[k - 1] : 'Kalendar Hijrah') + '">' +
        '<div class="bulan__label">' + label + (kini ? '<span class="kini-badge">Kini</span>' : '') + '</div>' +
        '<div class="bulan__items">' + kumpulan[k].map(htmlPesta).join('') + '</div>' +
      '</section>';
    }).join('');

    view.innerHTML =
      '<header class="page-head">' +
        '<p class="eyebrow">Kalendar budaya</p>' +
        '<h1 class="display">Perayaan</h1>' +
        '<p class="lead">Perayaan utama mengikut bulan. Tarikh perayaan kalendar lunar, Tamil dan Hijrah berubah setiap tahun.</p>' +
      '</header>' +
      '<label class="section">' +
        '<span class="section__title">Tapis mengikut etnik</span>' +
        '<select id="tapis-etnik" class="select">' +
          '<option value="semua">Semua etnik</option>' +
          ETNIK.map(function (e) {
            return '<option value="' + e.id + '"' + (tapis === e.id ? ' selected' : '') + '>' + esc(e.nama) + '</option>';
          }).join('') +
        '</select>' +
      '</label>' +
      (bulanHtml || '<p class="empty">Belum ada perayaan direkodkan untuk etnik ini.</p>');

    document.getElementById('tapis-etnik').addEventListener('change', function (ev) {
      state.tapisPesta = ev.target.value;
      renderPerayaan();
    });
  }

  // ---------- Kuiz ----------
  function binaSoalan() {
    var bank = [];
    var wilayahTunggal = ETNIK.filter(function (e) { return e.wilayah.length === 1; });

    function pilihanEtnik(betul, dikecualikan) {
      var lain = acak(ETNIK.filter(function (x) { return dikecualikan.indexOf(x.id) < 0; })).slice(0, 3);
      return acak([{ label: betul.nama, betul: true }].concat(lain.map(function (x) { return { label: x.nama, betul: false }; })));
    }

    ETNIK.forEach(function (e) {
      var kecuali = [e.id].concat(e.serumpun || []);
      (e.ikon || []).forEach(function (ikon) {
        bank.push({
          teks: 'Etnik manakah yang terkenal dengan ' + pendek(ikon) + '?',
          pilihan: pilihanEtnik(e, kecuali),
          terang: hurufBesar(ikon) + ' ialah warisan masyarakat ' + e.nama + '.',
          etnik: e.id
        });
      });
      if (e.salam && e.salam.kuiz !== false) {
        bank.push({
          teks: 'Ucapan “' + e.salam.frasa + '” digunakan oleh masyarakat…',
          pilihan: pilihanEtnik(e, kecuali),
          terang: '“' + e.salam.frasa + '” bermaksud ' + e.salam.maksud.charAt(0).toLowerCase() + e.salam.maksud.slice(1) + '.',
          etnik: e.id
        });
      }
    });

    PERAYAAN.forEach(function (p) {
      if (p.kuiz === false) return;
      var betul = byId[pilihSatu(p.etnik)];
      bank.push({
        teks: p.nama + ' disambut oleh masyarakat…',
        pilihan: pilihanEtnik(betul, p.etnik),
        terang: p.ket,
        etnik: betul.id
      });
    });

    wilayahTunggal.forEach(function (e) {
      bank.push({
        teks: 'Kebanyakan masyarakat ' + e.nama + ' tinggal di…',
        pilihan: acak(Object.keys(WILAYAH).map(function (w) { return { label: WILAYAH[w], betul: w === e.wilayah[0] }; })),
        terang: e.lokasi + '.',
        etnik: e.id
      });
    });

    // Satu soalan bagi setiap etnik supaya kuiz lebih pelbagai.
    var dipilih = [];
    var pakai = {};
    acak(bank).forEach(function (s) {
      if (dipilih.length >= JUMLAH_SOALAN || pakai[s.etnik]) return;
      pakai[s.etnik] = true;
      dipilih.push(s);
    });
    return dipilih;
  }

  function renderKuiz() {
    var k = state.kuiz;
    if (!k) return renderKuizIntro();
    if (k.i >= k.soalan.length) return renderKuizKeputusan();

    var s = k.soalan[k.i];
    var huruf = ['A', 'B', 'C', 'D'];
    var sudah = k.jawapan !== null;

    view.innerHTML =
      '<div class="progress">' +
        '<div class="progress__meta"><span>Soalan ' + (k.i + 1) + ' / ' + k.soalan.length + '</span><span>Markah ' + k.skor + '</span></div>' +
        '<div class="progress__bar"><span style="width:' + ((k.i + (sudah ? 1 : 0)) / k.soalan.length * 100) + '%"></span></div>' +
      '</div>' +
      '<h1 class="soalan">' + esc(s.teks) + '</h1>' +
      '<div class="pilihan">' + s.pilihan.map(function (p, i) {
        var kelas = '';
        if (sudah) {
          if (p.betul) kelas = 'betul';
          else if (i === k.jawapan) kelas = 'salah';
        }
        return '<button type="button" data-i="' + i + '" class="' + kelas + '"' + (sudah ? ' disabled' : '') + '>' +
          '<span class="huruf">' + huruf[i] + '</span>' + esc(p.label) + '</button>';
      }).join('') + '</div>' +
      (sudah ? (function () {
        var betul = s.pilihan[k.jawapan].betul;
        return '<div class="maklum maklum--' + (betul ? 'betul' : 'salah') + '" aria-live="polite">' +
          '<b>' + (betul ? 'Betul!' : 'Belum tepat.') + '</b>' +
          '<span>' + esc(s.terang) + '</span>' +
          '<a href="#etnik-' + s.etnik + '">Baca tentang ' + esc(byId[s.etnik].nama) + '</a>' +
        '</div>' +
        '<button type="button" class="btn btn--primary btn--block" id="btn-seterusnya">' +
          (k.i + 1 < k.soalan.length ? 'Soalan seterusnya' : 'Lihat keputusan') +
        '</button>';
      })() : '');

    view.querySelectorAll('.pilihan button').forEach(function (b) {
      b.addEventListener('click', function () {
        var i = Number(b.getAttribute('data-i'));
        k.jawapan = i;
        if (s.pilihan[i].betul) k.skor++;
        renderKuiz();
        var next = document.getElementById('btn-seterusnya');
        if (next) next.focus({ preventScroll: true });
      });
    });
    var next = document.getElementById('btn-seterusnya');
    if (next) next.addEventListener('click', function () {
      k.i++;
      k.jawapan = null;
      renderKuiz();
      window.scrollTo(0, 0);
    });
  }

  function mulaKuiz() {
    state.kuiz = { soalan: binaSoalan(), i: 0, skor: 0, jawapan: null };
    renderKuiz();
  }

  function renderKuizIntro() {
    var terbaik = store.get(KUNCI.kuiz, null);
    view.innerHTML =
      '<header class="page-head">' +
        '<p class="eyebrow">Uji kefahaman</p>' +
        '<h1 class="display">Kuiz Etnik</h1>' +
        '<p class="lead">' + JUMLAH_SOALAN + ' soalan rawak tentang perayaan, makanan, ucapan dan tempat tinggal etnik di Malaysia.</p>' +
      '</header>' +
      '<div class="kuiz-intro">' +
        kain(byId.iban) +
        '<ul><li>Setiap soalan ada satu jawapan betul.</li><li>Penerangan ringkas dipaparkan selepas setiap jawapan.</li><li>Soalan bertukar setiap kali anda bermain.</li></ul>' +
        (terbaik !== null ? '<p class="skor-terbaik">Markah terbaik anda: <b>' + terbaik + ' / ' + JUMLAH_SOALAN + '</b></p>' : '') +
        '<button type="button" class="btn btn--primary btn--block" id="btn-mula">Mula kuiz</button>' +
      '</div>';
    document.getElementById('btn-mula').addEventListener('click', mulaKuiz);
  }

  function renderKuizKeputusan() {
    var k = state.kuiz;
    var terbaik = store.get(KUNCI.kuiz, 0);
    var rekodBaharu = k.skor > terbaik;
    if (rekodBaharu) store.set(KUNCI.kuiz, k.skor);
    var nisbah = k.skor / k.soalan.length;
    var pesan = nisbah >= 0.9 ? 'Hebat! Anda memang kenal budaya Malaysia.'
      : nisbah >= 0.6 ? 'Bagus. Teroka beberapa etnik lagi untuk markah penuh.'
      : 'Permulaan yang baik. Baca halaman etnik dan cuba sekali lagi.';

    view.innerHTML =
      '<header class="page-head"><p class="eyebrow">Keputusan</p><h1 class="display">Kuiz selesai</h1></header>' +
      '<div class="keputusan">' +
        '<p class="keputusan__skor">' + k.skor + '<small> / ' + k.soalan.length + '</small></p>' +
        '<p>' + pesan + '</p>' +
        (rekodBaharu ? '<p class="skor-terbaik"><b>Rekod baharu!</b> Markah terbaik anda telah dikemas kini.</p>' : '') +
      '</div>' +
      '<button type="button" class="btn btn--primary btn--block" id="btn-ulang">Main lagi</button>' +
      '<a class="btn btn--block" href="#teroka">Teroka etnik</a>';
    document.getElementById('btn-ulang').addEventListener('click', mulaKuiz);
  }

  // ---------- Nota ----------
  function renderNota() {
    var simpan = senaraiSimpan().filter(function (id) { return byId[id]; });
    var nota = semuaNota();
    var adaNota = Object.keys(nota).filter(function (id) { return byId[id]; });

    view.innerHTML =
      '<header class="page-head">' +
        '<p class="eyebrow">Ruang peribadi</p>' +
        '<h1 class="display">Nota</h1>' +
        '<p class="lead">Etnik yang anda simpan dan nota yang anda tulis.</p>' +
      '</header>' +
      '<section class="section">' +
        '<h2 class="section__title">Disimpan (' + simpan.length + ')</h2>' +
        (simpan.length
          ? '<div class="baris-list">' + simpan.map(function (id) {
              var e = byId[id];
              return '<a class="baris" href="#etnik-' + id + '">' + kain(e) +
                '<div style="min-width:0"><strong>' + esc(e.nama) + '</strong><span>' + esc(e.alias) + ' · ' +
                e.wilayah.map(function (w) { return WILAYAH[w]; }).join(', ') + '</span></div></a>';
            }).join('') + '</div>'
          : '<p class="empty">Belum ada etnik disimpan. Buka mana-mana etnik dan tekan <b>Simpan</b>.</p>') +
      '</section>' +
      '<section class="section">' +
        '<h2 class="section__title">Nota saya (' + adaNota.length + ')</h2>' +
        (adaNota.length
          ? '<div class="baris-list">' + adaNota.map(function (id) {
              var e = byId[id];
              return '<a class="baris" href="#etnik-' + id + '">' + kain(e) +
                '<div style="min-width:0"><strong>' + esc(e.nama) + '</strong><span>' + esc(nota[id]) + '</span></div></a>';
            }).join('') + '</div>'
          : '<p class="empty">Belum ada nota. Tulis nota di bahagian bawah halaman setiap etnik.</p>') +
      '</section>' +
      '<p class="privasi">Nota dan senarai simpanan hanya disimpan dalam pelayar peranti ini.</p>';
  }

  // ---------- Mula ----------
  window.addEventListener('hashchange', function () {
    state.navDalamApp = true;
    render();
  });
  render();

  // Pekerja servis untuk mod luar talian (hanya apabila dipasang sebagai PWA).
  try {
    if (document.querySelector('link[rel="manifest"]') && 'serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').catch(function () { /* abaikan */ });
      });
    }
  } catch (err) { /* persekitaran tanpa sokongan pekerja servis */ }
})();
