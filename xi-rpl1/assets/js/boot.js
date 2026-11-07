(function () {
  const boot = document.getElementById("boot");
  const log = document.getElementById("bootLog");
  const fill = document.getElementById("bootFill");
  const skip = document.getElementById("bootSkip");

  if (!boot) {
    return;
  }

  const lines = [
    "> menghubungkan ke jaringan NEO-SAMPIT...",
    "> otentikasi unit: XI RPL 1 ............ OK",
    "> memuat database agen [33/33] ......... OK",
    "> sinkronisasi frekuensi sirene ........ OK",
    "> cuaca kota: HUJAN DERAS // visibilitas 40%",
    "> status: 4 bug buronan terdeteksi",
    "> akses diberikan. selamat bertugas, agen."
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let finished = false;

  document.body.classList.add("is-locked");

  function finish() {
    if (finished) {
      return;
    }
    finished = true;
    fill.style.width = "100%";
    window.setTimeout(function () {
      boot.classList.add("is-done");
      document.body.classList.remove("is-locked");
      document.dispatchEvent(new CustomEvent("boot:done"));
    }, 250);
  }

  function type() {
    if (finished) {
      return;
    }

    if (lineIndex >= lines.length) {
      window.setTimeout(finish, 350);
      return;
    }

    const line = lines[lineIndex];
    charIndex += 3;
    const done = lines.slice(0, lineIndex).join("\n");
    const current = line.slice(0, charIndex);
    log.textContent = (done ? done + "\n" : "") + current;
    fill.style.width = Math.round(((lineIndex + charIndex / line.length) / lines.length) * 100) + "%";

    if (charIndex >= line.length) {
      lineIndex++;
      charIndex = 0;
      window.setTimeout(type, 120);
    } else {
      window.setTimeout(type, 12);
    }
  }

  skip.addEventListener("click", finish);
  type();
})();
