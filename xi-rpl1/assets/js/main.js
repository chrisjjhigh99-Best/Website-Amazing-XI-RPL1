(function () {
  document.documentElement.classList.remove("no-js");

  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".navbar__link");
  const clock = document.getElementById("clock");
  const root = document.documentElement;

  function onScroll() {
    const y = window.scrollY;
    navbar.classList.toggle("is-scrolled", y > 30);
    root.style.setProperty("--p-far", y * 0.05 + "px");
    root.style.setProperty("--p-mid", y * 0.1 + "px");
    root.style.setProperty("--p-near", y * 0.18 + "px");
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  navToggle.addEventListener("click", function () {
    const open = navMenu.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("is-open");
      navToggle.classList.remove("is-open");
    });
  });

  const sections = document.querySelectorAll("main section[id]");
  const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
        });
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  function tick() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString("id-ID", { hour12: false }).replace(/\./g, ":");
  }

  tick();
  window.setInterval(tick, 1000);

  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(function (el) {
    revealObserver.observe(el);
  });

  function countUp() {
    document.querySelectorAll("[data-count]").forEach(function (el) {
      const target = Number(el.dataset.count);
      const start = performance.now();
      const duration = 1400;
      function frame(time) {
        const progress = Math.min((time - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = String(Math.round(target * eased)).padStart(2, "0");
        if (progress < 1) {
          requestAnimationFrame(frame);
        }
      }
      requestAnimationFrame(frame);
    });
  }

  const search = document.getElementById("memberSearch");
  const filterButtons = document.querySelectorAll(".filter__btn");
  const agents = document.querySelectorAll(".agent");
  const counter = document.getElementById("memberCount");
  const empty = document.getElementById("memberEmpty");
  let activeFilter = "all";

  function applyFilter() {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    agents.forEach(function (agent) {
      const matchText = agent.dataset.name.includes(query) || agent.dataset.nis.includes(query);
      const matchGender = activeFilter === "all" || agent.dataset.gender === activeFilter;
      const show = matchText && matchGender;
      agent.classList.toggle("is-hidden", !show);
      if (show) {
        visible++;
        agent.classList.add("is-visible");
      }
    });
    counter.textContent = visible;
    empty.classList.toggle("is-shown", visible === 0);
  }

  search.addEventListener("input", applyFilter);

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      activeFilter = button.dataset.filter;
      filterButtons.forEach(function (b) {
        b.classList.toggle("is-active", b === button);
      });
      applyFilter();
    });
  });

  const paperDate = document.getElementById("paperDate");
  paperDate.textContent = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).toUpperCase();

  const stories = [
    {
      title: "Unit XI RPL 1 Bongkar Sindikat Bug di Distrik Sampit",
      text: "NEO SAMPIT - Di bawah guyuran hujan neon malam ini, 33 agen dari unit XI RPL 1 SMK Negeri 1 Sampit berhasil membongkar sindikat bug yang selama ini meresahkan server kota.\nDipimpin oleh komandan Arif Rahmadhani, operasi berlangsung senyap. Satu per satu error ditangkap, dicatat, lalu diperbaiki tanpa sisa.\n\"Tidak ada kode yang terlalu rumit untuk kami,\" ujar salah satu agen sambil menyeruput kopi dingin.",
      notes: [
        "> 4 bug buronan diamankan.",
        "> Sirene berbunyi hingga pukul 02.00.",
        "> Warga diminta selalu menyimpan file."
      ]
    },
    {
      title: "Hujan Tak Henti, Agen RPL Tetap Live Coding Sampai Pagi",
      text: "NEO SAMPIT - Cuaca ekstrem tidak menyurutkan semangat para agen muda. Di tengah kilat yang menyambar menara kota, mereka terus mengetik baris demi baris kode.\nHTML disusun rapi, CSS ditata presisi. Hasilnya, sebuah antarmuka baru menyala di layar publik dan membuat warga terpukau.\nPihak kepolisian kota menyebut aksi ini sebagai patroli digital terbaik tahun ini.",
      notes: [
        "> 2.400 baris kode ditulis semalam.",
        "> 0 error pada pengujian akhir.",
        "> Lampu kota menyala biru-merah."
      ]
    },
    {
      title: "Misteri CSS Yang Tak Mau Center Akhirnya Terpecahkan",
      text: "NEO SAMPIT - Setelah bertahun-tahun menjadi kasus dingin, misteri elemen yang tidak mau berada di tengah akhirnya terungkap oleh tim investigasi XI RPL 1.\nPelakunya ternyata margin liar yang bersembunyi di balik properti display. Dengan satu baris place-items: center, kasus resmi ditutup.\nBerkas perkara kini disimpan di arsip kota sebagai bahan pelajaran generasi berikutnya.",
      notes: [
        "> Tersangka: margin: auto palsu.",
        "> Barang bukti: 1 file style.css.",
        "> Status kasus: DITUTUP."
      ]
    }
  ];

  let paperStarted = false;
  const paper = document.getElementById("paper");
  const paperObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !paperStarted) {
        paperStarted = true;
        Typewriter.newspaper({
          headline: document.getElementById("paperHeadline"),
          body: document.getElementById("paperText"),
          list: document.getElementById("paperList"),
          stories: stories
        });
      }
    });
  }, { threshold: 0.25 });

  paperObserver.observe(paper);

  function start() {
    countUp();
    Typewriter.loopPhrases(document.getElementById("heroTyped"), [
      "inisialisasi patroli kota...",
      "33 agen siap bertugas.",
      "melacak bug di sektor main.js",
      "kode bersih, kota aman.",
      "welcome to XI RPL 1 // SMKN 1 Sampit"
    ]);
    LiveCoding.init();
  }

  let started = false;

  function startOnce() {
    if (started) {
      return;
    }
    started = true;
    start();
  }

  document.addEventListener("boot:done", startOnce);

  if (!document.getElementById("boot")) {
    startOnce();
  }
})();
