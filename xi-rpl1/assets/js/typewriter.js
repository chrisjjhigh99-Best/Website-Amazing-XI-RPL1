const Typewriter = (function () {
  let audioCtx = null;
  let soundOn = false;

  function getAudio() {
    if (!audioCtx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) {
        return null;
      }
      audioCtx = new Ctx();
    }
    return audioCtx;
  }

  function setSound(value) {
    soundOn = value;
    if (value) {
      const ac = getAudio();
      if (ac && ac.state === "suspended") {
        ac.resume();
      }
    }
  }

  function isSoundOn() {
    return soundOn;
  }

  function click(strength) {
    if (!soundOn) {
      return;
    }
    const ac = getAudio();
    if (!ac) {
      return;
    }
    const length = 0.03;
    const buffer = ac.createBuffer(1, Math.floor(ac.sampleRate * length), ac.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 6);
    }
    const source = ac.createBufferSource();
    const filter = ac.createBiquadFilter();
    const gain = ac.createGain();
    source.buffer = buffer;
    filter.type = "bandpass";
    filter.frequency.value = 1800 + Math.random() * 1400;
    gain.gain.value = (strength || 0.25) * 0.6;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(ac.destination);
    source.start();
  }

  function ding() {
    if (!soundOn) {
      return;
    }
    const ac = getAudio();
    if (!ac) {
      return;
    }
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = "sine";
    osc.frequency.value = 2100;
    gain.gain.setValueAtTime(0.12, ac.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.6);
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.start();
    osc.stop(ac.currentTime + 0.6);
  }

  function wait(ms) {
    return new Promise(function (resolve) {
      window.setTimeout(resolve, ms);
    });
  }

  function charDelay(ch, base) {
    let delay = base + Math.random() * base * 1.4;
    if (ch === " ") {
      delay *= 1.3;
    }
    if (ch === "." || ch === "," || ch === "!" || ch === "?") {
      delay += base * 8;
    }
    if (ch === "\n") {
      delay += base * 12;
    }
    if (Math.random() < 0.03) {
      delay += base * 10;
    }
    return delay;
  }

  async function typeInto(el, text, options) {
    const opts = Object.assign({ speed: 45, sound: true, token: null }, options || {});
    for (let i = 0; i < text.length; i++) {
      if (opts.token && opts.token.cancelled) {
        return false;
      }
      const ch = text[i];
      el.textContent += ch;
      if (opts.sound && ch !== " ") {
        click(0.3);
      }
      if (ch === "\n" && opts.onLine) {
        opts.onLine();
      }
      await wait(charDelay(ch, opts.speed));
    }
    return true;
  }

  async function erase(el, options) {
    const opts = Object.assign({ speed: 22, token: null }, options || {});
    while (el.textContent.length > 0) {
      if (opts.token && opts.token.cancelled) {
        return false;
      }
      el.textContent = el.textContent.slice(0, -1);
      await wait(opts.speed);
    }
    return true;
  }

  function loopPhrases(el, phrases) {
    let index = 0;
    async function run() {
      const phrase = phrases[index % phrases.length];
      await typeInto(el, phrase, { speed: 42, sound: false });
      await wait(2200);
      await erase(el, { speed: 18 });
      await wait(400);
      index++;
      run();
    }
    run();
  }

  function newspaper(config) {
    const headline = config.headline;
    const body = config.body;
    const list = config.list;
    const stories = config.stories;
    const caret = document.createElement("span");
    caret.className = "caret";
    let index = 0;

    async function run() {
      const story = stories[index % stories.length];
      headline.textContent = "";
      body.textContent = "";
      list.innerHTML = "";

      const headSpan = document.createElement("span");
      headline.appendChild(headSpan);
      headline.appendChild(caret);
      await typeInto(headSpan, story.title, { speed: 32 });
      ding();
      await wait(500);

      const bodySpan = document.createElement("span");
      body.appendChild(bodySpan);
      body.appendChild(caret);
      await typeInto(bodySpan, story.text, {
        speed: 13,
        onLine: function () {
          ding();
          body.classList.remove("is-ding");
          void body.offsetWidth;
          body.classList.add("is-ding");
        }
      });
      ding();

      for (let i = 0; i < story.notes.length; i++) {
        await wait(450);
        const li = document.createElement("li");
        list.appendChild(li);
        li.appendChild(caret);
        const span = document.createElement("span");
        li.insertBefore(span, caret);
        await typeInto(span, story.notes[i], { speed: 16 });
      }

      await wait(6000);
      index++;
      run();
    }

    run();
  }

  return {
    typeInto: typeInto,
    erase: erase,
    loopPhrases: loopPhrases,
    newspaper: newspaper,
    click: click,
    ding: ding,
    setSound: setSound,
    isSoundOn: isSoundOn,
    wait: wait
  };
})();
