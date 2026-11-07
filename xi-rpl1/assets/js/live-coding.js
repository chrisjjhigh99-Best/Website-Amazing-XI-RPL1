const LiveCoding = (function () {
  const files = [
    {
      name: "laporan.html",
      code: [
        "<!DOCTYPE html>",
        "<html lang=\"id\">",
        "<head>",
        "  <style>",
        "    body {",
        "      margin: 0;",
        "      min-height: 100vh;",
        "      display: grid;",
        "      place-items: center;",
        "      background: #05060a;",
        "      font-family: monospace;",
        "      color: #d9e4ff;",
        "    }",
        "    .kartu {",
        "      width: 80%;",
        "      padding: 24px;",
        "      border: 2px solid #00f0ff;",
        "      box-shadow: 0 0 30px #00f0ff55;",
        "      background: #0b0f1f;",
        "    }",
        "    .judul {",
        "      margin: 0 0 12px;",
        "      color: #ff2bd6;",
        "      letter-spacing: 4px;",
        "    }",
        "    .baris {",
        "      display: flex;",
        "      justify-content: space-between;",
        "      padding: 6px 0;",
        "      border-bottom: 1px dashed #00f0ff44;",
        "    }",
        "    .status {",
        "      margin-top: 16px;",
        "      color: #39ff88;",
        "    }",
        "  </style>",
        "</head>",
        "<body>",
        "  <div class=\"kartu\">",
        "    <h1 class=\"judul\">LAPORAN UNIT</h1>",
        "    <div class=\"baris\">",
        "      <span>Kelas</span>",
        "      <b>XI RPL 1</b>",
        "    </div>",
        "    <div class=\"baris\">",
        "      <span>Sekolah</span>",
        "      <b>SMKN 1 Sampit</b>",
        "    </div>",
        "    <div class=\"baris\">",
        "      <span>Agen</span>",
        "      <b>33 Orang</b>",
        "    </div>",
        "    <div class=\"baris\">",
        "      <span>Wali Kelas</span>",
        "      <b>Arif Rahmadhani</b>",
        "    </div>",
        "    <p class=\"status\">&gt; STATUS: SIAP BERTUGAS</p>",
        "  </div>",
        "</body>",
        "</html>"
      ].join("\n")
    },
    {
      name: "sirene.html",
      code: [
        "<!DOCTYPE html>",
        "<html lang=\"id\">",
        "<head>",
        "  <style>",
        "    body {",
        "      margin: 0;",
        "      height: 100vh;",
        "      display: flex;",
        "      flex-direction: column;",
        "      align-items: center;",
        "      justify-content: center;",
        "      gap: 24px;",
        "      background: #020308;",
        "      font-family: sans-serif;",
        "    }",
        "    .sirene {",
        "      display: flex;",
        "      gap: 6px;",
        "      padding: 8px;",
        "      background: #111;",
        "      border-radius: 40px;",
        "    }",
        "    .lampu {",
        "      width: 90px;",
        "      height: 28px;",
        "      border-radius: 20px;",
        "    }",
        "    .merah {",
        "      background: #ff2a3d;",
        "      animation: kedip 0.8s infinite;",
        "    }",
        "    .biru {",
        "      background: #2f6bff;",
        "      animation: kedip 0.8s infinite 0.4s;",
        "    }",
        "    .teks {",
        "      color: #fff;",
        "      letter-spacing: 6px;",
        "      font-weight: bold;",
        "    }",
        "    @keyframes kedip {",
        "      0%, 49% {",
        "        opacity: 1;",
        "        box-shadow: 0 0 60px 10px currentColor;",
        "      }",
        "      50%, 100% {",
        "        opacity: 0.15;",
        "        box-shadow: none;",
        "      }",
        "    }",
        "  </style>",
        "</head>",
        "<body>",
        "  <div class=\"sirene\">",
        "    <div class=\"lampu merah\" style=\"color: #ff2a3d\"></div>",
        "    <div class=\"lampu biru\" style=\"color: #2f6bff\"></div>",
        "  </div>",
        "  <p class=\"teks\">NSPD // XI RPL 1</p>",
        "</body>",
        "</html>"
      ].join("\n")
    },
    {
      name: "kasus.html",
      code: [
        "<!DOCTYPE html>",
        "<html lang=\"id\">",
        "<head>",
        "  <style>",
        "    body {",
        "      margin: 0;",
        "      padding: 24px;",
        "      background: #07040f;",
        "      font-family: monospace;",
        "      color: #fff;",
        "    }",
        "    h2 {",
        "      color: #ffe14d;",
        "      letter-spacing: 3px;",
        "    }",
        "    .daftar {",
        "      display: grid;",
        "      grid-template-columns: 1fr 1fr;",
        "      gap: 12px;",
        "    }",
        "    .buron {",
        "      padding: 14px;",
        "      border: 1px solid #ff2a3d;",
        "      background: #1a0610;",
        "    }",
        "    .buron b {",
        "      display: block;",
        "      color: #ff2a3d;",
        "    }",
        "    .tangkap {",
        "      border-color: #39ff88;",
        "      background: #061a10;",
        "    }",
        "    .tangkap b {",
        "      color: #39ff88;",
        "    }",
        "  </style>",
        "</head>",
        "<body>",
        "  <h2>DAFTAR BUG BURONAN</h2>",
        "  <div class=\"daftar\">",
        "    <div class=\"buron tangkap\">",
        "      <b>TERTANGKAP</b>",
        "      Missing semicolon",
        "    </div>",
        "    <div class=\"buron tangkap\">",
        "      <b>TERTANGKAP</b>",
        "      Undefined variable",
        "    </div>",
        "    <div class=\"buron\">",
        "      <b>DICARI</b>",
        "      Infinite loop",
        "    </div>",
        "    <div class=\"buron\">",
        "      <b>DICARI</b>",
        "      CSS tidak mau center",
        "    </div>",
        "  </div>",
        "</body>",
        "</html>"
      ].join("\n")
    }
  ];

  function escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function wrap(cls, text) {
    if (!text) {
      return "";
    }
    return "<span class=\"" + cls + "\">" + escapeHtml(text) + "</span>";
  }

  function highlightCss(text) {
    let out = "";
    let buffer = "";
    let mode = "sel";
    let depth = 0;

    function flush(cls) {
      out += wrap(cls, buffer);
      buffer = "";
    }

    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (ch === "{") {
        flush(depth === 0 || mode === "sel" ? "tok-sel" : "tok-val");
        out += wrap("tok-punc", ch);
        depth++;
        mode = "prop";
      } else if (ch === "}") {
        flush(mode === "val" ? "tok-val" : "tok-prop");
        out += wrap("tok-punc", ch);
        depth = Math.max(depth - 1, 0);
        mode = "sel";
        if (depth > 0) {
          mode = "nested";
        }
      } else if (ch === ":" && mode === "prop") {
        flush("tok-prop");
        out += wrap("tok-punc", ch);
        mode = "val";
      } else if (ch === ";" && mode === "val") {
        flush("tok-val");
        out += wrap("tok-punc", ch);
        mode = "prop";
      } else if (ch === "\n" && mode === "nested") {
        buffer += ch;
      } else {
        if (mode === "nested" && ch !== " " && ch !== "\n") {
          mode = "sel";
        }
        buffer += ch;
      }
    }

    if (mode === "sel") {
      flush(buffer.trim().startsWith("@") ? "tok-key" : "tok-sel");
    } else if (mode === "val") {
      flush("tok-val");
    } else {
      flush("tok-prop");
    }

    return out;
  }

  function highlightHtml(text) {
    let out = "";
    let i = 0;

    while (i < text.length) {
      if (text[i] === "<") {
        let end = text.indexOf(">", i);
        const closed = end !== -1;
        if (!closed) {
          end = text.length - 1;
        }
        const tag = text.slice(i, end + 1);
        out += highlightTag(tag, closed);
        i = end + 1;
      } else {
        let next = text.indexOf("<", i);
        if (next === -1) {
          next = text.length;
        }
        out += wrap("tok-text", text.slice(i, next));
        i = next;
      }
    }

    return out;
  }

  function highlightTag(tag, closed) {
    const match = tag.match(/^(<\/?!?)([\w-]*)([\s\S]*?)(\/?>)?$/);
    if (!match) {
      return wrap("tok-tag", tag);
    }
    let out = wrap("tok-punc", match[1]);
    out += wrap("tok-tag", match[2]);
    const attrs = match[3] || "";
    const parts = attrs.split(/("[^"]*"?)/);
    for (let p = 0; p < parts.length; p++) {
      const part = parts[p];
      if (part.startsWith("\"")) {
        out += wrap("tok-str", part);
      } else {
        out += part.replace(/[^=]+|=/g, function (piece) {
          if (piece === "=") {
            return wrap("tok-punc", piece);
          }
          return wrap("tok-attr", piece);
        });
      }
    }
    if (closed && match[4]) {
      out += wrap("tok-punc", match[4]);
    }
    return out;
  }

  function highlight(text) {
    let out = "";
    let rest = text;

    while (rest.length) {
      const open = rest.indexOf("<style>");
      if (open === -1) {
        out += highlightHtml(rest);
        break;
      }
      out += highlightHtml(rest.slice(0, open + 7));
      rest = rest.slice(open + 7);
      const close = rest.indexOf("</style>");
      if (close === -1) {
        out += highlightCss(rest);
        break;
      }
      out += highlightCss(rest.slice(0, close));
      rest = rest.slice(close);
      const after = rest.indexOf(">") + 1;
      out += highlightHtml(rest.slice(0, after));
      rest = rest.slice(after);
    }

    return out;
  }

  function init() {
    const root = document.querySelector(".ide");
    const codeEl = document.getElementById("ideCode");
    const gutter = document.getElementById("ideGutter");
    const frame = document.getElementById("ideFrame");
    const editor = document.querySelector(".ide__editor");
    const tabs = document.querySelectorAll(".ide__tab");
    const urlEl = document.getElementById("ideUrl");
    const modeEl = document.getElementById("ideMode");
    const posEl = document.getElementById("idePos");
    const charsEl = document.getElementById("ideChars");
    const btnPause = document.getElementById("idePause");
    const btnRestart = document.getElementById("ideRestart");
    const btnSpeed = document.getElementById("ideSpeed");
    const btnSound = document.getElementById("ideSound");

    if (!root || !codeEl) {
      return;
    }

    const speeds = [1, 2, 4, 0.5];
    let speedIndex = 0;
    let current = 0;
    let typed = "";
    let position = 0;
    let paused = false;
    let timer = null;
    let started = false;
    let lastPreview = 0;

    function setMode(text, cls) {
      modeEl.textContent = text;
      modeEl.classList.remove("is-paused", "is-done");
      if (cls) {
        modeEl.classList.add(cls);
      }
    }

    function render() {
      codeEl.innerHTML = highlight(typed);
      const lines = typed.split("\n");
      let numbers = "";
      for (let i = 1; i <= lines.length; i++) {
        numbers += i + (i < lines.length ? "\n" : "");
      }
      gutter.textContent = numbers;
      posEl.textContent = "Ln " + lines.length + ", Col " + (lines[lines.length - 1].length + 1);
      charsEl.textContent = typed.length + " karakter";
      editor.scrollTop = editor.scrollHeight;
    }

    function preview(force) {
      const now = Date.now();
      if (!force && now - lastPreview < 120) {
        return;
      }
      lastPreview = now;
      let doc = typed;
      const opens = (doc.match(/<style>/g) || []).length;
      const closes = (doc.match(/<\/style>/g) || []).length;
      if (opens > closes) {
        doc += "\n}</style>";
      }
      frame.srcdoc = doc;
    }

    function step() {
      if (paused) {
        return;
      }
      const source = files[current].code;

      if (position >= source.length) {
        render();
        preview(true);
        setMode("SELESAI", "is-done");
        timer = window.setTimeout(function () {
          load((current + 1) % files.length);
        }, 4500);
        return;
      }

      let ch = source[position];
      typed += ch;
      position++;

      if (ch === "\n") {
        while (source[position] === " ") {
          typed += " ";
          position++;
        }
      }

      render();

      if (ch !== " ") {
        Typewriter.click(0.22);
        root.classList.remove("is-key");
        void root.offsetWidth;
        root.classList.add("is-key");
      }

      if (ch === "\n" || ch === ">" || ch === ";") {
        preview(false);
      }

      let delay = 8 + Math.random() * 22;
      if (ch === "\n") {
        delay += 60;
      }
      if (ch === ">" || ch === ";" || ch === "{" || ch === "}") {
        delay += 35;
      }
      if (Math.random() < 0.015) {
        delay += 220;
      }

      timer = window.setTimeout(step, delay / speeds[speedIndex]);
    }

    function load(index) {
      window.clearTimeout(timer);
      current = index;
      typed = "";
      position = 0;
      paused = false;
      btnPause.textContent = "Jeda";
      urlEl.textContent = files[index].name;
      tabs.forEach(function (tab, i) {
        tab.classList.toggle("is-active", i === index);
      });
      setMode("MENGETIK");
      render();
      frame.srcdoc = "<body style=\"margin:0;background:#05060a\"></body>";
      timer = window.setTimeout(step, 400);
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        load(Number(tab.dataset.file));
      });
    });

    btnPause.addEventListener("click", function () {
      if (modeEl.classList.contains("is-done")) {
        return;
      }
      paused = !paused;
      btnPause.textContent = paused ? "Lanjut" : "Jeda";
      if (paused) {
        window.clearTimeout(timer);
        setMode("JEDA", "is-paused");
      } else {
        setMode("MENGETIK");
        step();
      }
    });

    btnRestart.addEventListener("click", function () {
      load(current);
    });

    btnSpeed.addEventListener("click", function () {
      speedIndex = (speedIndex + 1) % speeds.length;
      btnSpeed.textContent = "Kecepatan: " + speeds[speedIndex] + "x";
    });

    btnSound.addEventListener("click", function () {
      const next = !Typewriter.isSoundOn();
      Typewriter.setSound(next);
      btnSound.textContent = next ? "Suara: ON" : "Suara: OFF";
      btnSound.setAttribute("aria-pressed", String(next));
    });

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !started) {
          started = true;
          load(0);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(root);
  }

  return {
    init: init,
    highlight: highlight
  };
})();
