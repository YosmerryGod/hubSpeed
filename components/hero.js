import { handleMSG1 } from '../func/handleExample.js';

function renderSVGIcon(label) {
  switch (label.toLowerCase()) {
    case "website":
      return `<svg class="icon-svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#00FF99" stroke-width="2.2" />
        <path d="M2 12h20" stroke="#00FF99" stroke-width="2"/>
        <path d="M12 2c2.8 3.5 2.8 16.5 0 20" stroke="#00FF99" stroke-width="2"/>
        <path d="M12 2c-2.8 3.5-2.8 16.5 0 20" stroke="#00FF99" stroke-width="2"/>
      </svg>`;
    case "whitepaper":
      return `<svg class="icon-svg" width="1.18em" height="1.18em" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="3" width="14" height="18" rx="2.2" stroke="#00FF99" stroke-width="2.2" fill="none"/>
        <path d="M9 7h6M9 11h6M9 15h4" stroke="#00FF99" stroke-width="2"/>
      </svg>`;
    case "telegram group":
      return `<svg class="icon-svg" width="1.13em" height="1.13em" viewBox="0 0 24 24" fill="none">
        <path d="M21.8 5.2 12.1 20.3a1.1 1.1 0 0 1-2-.2l-2-5.4-5.4-2a1.1 1.1 0 0 1-.2-2l15.1-9.7a1.1 1.1 0 0 1 1.6 1.2z" stroke="#00FF99" stroke-width="2" fill="none"/>
      </svg>`;
    case "twitter":
      return `<svg class="icon-svg" width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none">
        <path d="M23 3a10.9 10.9 0 0 1-3.1 1.1A4.48 4.48 0 0 0 22.4.4a9 9 0 0 1-2.9 1.1C17.3.6 16.3 0 15 0c-2.3 0-4.1 1.8-4.1 4.1 0 .3 0 .6.1.8C7.2 4.7 3.8 2.9 1.6.1a4 4 0 0 0-.6 2.1c0 1.4.7 2.7 1.8 3.5A4.15 4.15 0 0 1 .8 5v.1c0 2 1.4 3.6 3.2 4A4.42 4.42 0 0 1 1 8.6a4.47 4.47 0 0 0 4.1 3A9 9 0 0 1 0 20.4a12.73 12.73 0 0 0 6.9 2c8.3 0 12.8-6.9 12.8-12.8 0-.2 0-.3 0-.5A9.19 9.19 0 0 0 24 4.6c-.9.4-1.8.7-2.7.8z" stroke="#00FF99" stroke-width="1.5" fill="none"/>
      </svg>`;
    case "tiktok":
      return `<svg class="icon-svg" width="1.13em" height="1.13em" viewBox="0 0 24 24" fill="none">
        <path d="M9 22a5 5 0 1 1 0-10h1v2.5a2.5 2.5 0 1 0 2.5-2.5H15V7h2.5A5.5 5.5 0 1 1 22 12.5" stroke="#00FF99" stroke-width="2" fill="none"/>
      </svg>`;
    case "instagram":
      return `<svg class="icon-svg" width="1.13em" height="1.13em" viewBox="0 0 24 24" fill="none">
        <rect x="3.3" y="3.3" width="17.4" height="17.4" rx="4" stroke="#00FF99" stroke-width="2.1" fill="none"/>
        <circle cx="12" cy="12" r="4" stroke="#00FF99" stroke-width="2"/>
        <circle cx="17.2" cy="6.8" r="1.3" fill="#00FF99"/>
      </svg>`;
    case "youtube":
      return `<svg class="icon-svg" width="1.18em" height="1.18em" viewBox="0 0 24 24" fill="none">
        <rect x="2.5" y="6.5" width="19" height="11" rx="5" stroke="#00FF99" stroke-width="2"/>
        <polygon points="10,9 16,12 10,15" fill="#00FF99"/>
      </svg>`;
    default:
      return '';
  }
}


function getResponsiveWidth() {
  return window.innerWidth < 700 ? "50dvw" : "35dvw";
}

function isMobile() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export async function renderHero() {
  document.body.innerHTML = "";

  const section = document.createElement("section");
  section.className = "hero-section";

  const title = document.createElement("h1");
  title.className = "hero-title";
  title.textContent = "SPEED SHELL";

  const sloganText = "Where Memes Move at Machine Speed";
  const slogan = document.createElement("p");
  slogan.innerHTML = `<span class="slogan-text"></span><span class="cursor">▍</span>`;
  slogan.className = "hero-slogan";

  const links = [
    { label: "Website", url: "https://speedshell.xyz" },
    { label: "Whitepaper", url: "https://pdf.speedshell.xyz" },
    { label: "Telegram Group", url: "https://t.me/speedshell" },
    { label: "Twitter", url: "https://twitter.com/speed_BSC" },
    { label: "TikTok", url: "https://tiktok.com/@speedBSC" },
    { label: "Instagram", url: "https://instagram.com/speedBSC" },
    { label: "YouTube", url: "https://youtube.com/@speed_bsc" }
  ];

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";
  buttonContainer.style.width = getResponsiveWidth();

  links.forEach(({ label, url }) => {
    const btn = document.createElement("a");
    btn.href = url;
    btn.target = "_blank";
    btn.className = "link-button";

     btn.innerHTML = renderSVGIcon(label);

    const span = document.createElement("span");
    span.className = "btn-text";
    span.dataset.label = label;
    span.textContent = label;

    btn.appendChild(span);
    buttonContainer.appendChild(btn);

    let typingTimeout; // untuk simpan ID setTimeout

    const activateEffect = () => {
      if (btn.classList.contains("hover")) return;
      const fullText = `>> ${span.dataset.label}`;
      let i = 0;

      const cursor = document.createElement("span");
      cursor.className = "cursor";
      cursor.textContent = "▍";
      btn.appendChild(cursor);

      function type() {
        if (i <= fullText.length) {
          span.textContent = fullText.substring(0, i);
          i++;
          typingTimeout = setTimeout(type, 25);
        }
      }

      type();
      btn.classList.add("hover");
    };

    const resetEffect = () => {
      clearTimeout(typingTimeout); // hentikan typing
      span.textContent = span.dataset.label;
      const cursor = btn.querySelector(".cursor");
      if (cursor) cursor.remove();
      btn.classList.remove("hover");
    };

    btn.addEventListener("pointerenter", activateEffect);
    btn.addEventListener("pointerleave", resetEffect);
    btn.addEventListener("touchstart", activateEffect);
    btn.addEventListener("touchend", resetEffect);
  });

  const switcher = document.createElement("div");
  switcher.className = "menu-switcher";

  const profileBtn = document.createElement("button");
  profileBtn.textContent = "> ./Profile";
  profileBtn.className = "menu-btn active";

  const roomBtn = document.createElement("button");
  roomBtn.textContent = "> ./Mini-Speed-Bro";
  roomBtn.className = "menu-btn";

  switcher.appendChild(profileBtn);
  switcher.appendChild(roomBtn);

  const roomContainer = document.createElement("div");
  roomContainer.className = "room-container";
  roomContainer.style.display = "none";

  const commentList = document.createElement("div");
  commentList.className = "comment-list";

  const form = document.createElement("form");
  form.className = "comment-form";

  const bubble = document.createElement("div");
  bubble.className = "comment-form-bubble";

  const nameInput = document.createElement("input");
  nameInput.placeholder = "Your name";
  nameInput.required = false;

  const messageInput = document.createElement("textarea");
  messageInput.placeholder = "Leave a message...";
  messageInput.rows = 1;
  messageInput.required = true;

  const sendBtn = document.createElement("button");
  sendBtn.title = "Send";
  sendBtn.textContent = "➤";

  bubble.appendChild(messageInput);
  bubble.appendChild(sendBtn);
  form.appendChild(bubble);

  // ============ HANDLE COMMENT ================
  form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const msg = messageInput.value.trim();
  const randomNum = Math.floor(Math.random() * 1000);
  const name = nameInput.value.trim() || `anon-${randomNum}`;
  if (msg) {
    // 1. Pesan user masuk PALING BAWAH
    const item = document.createElement("div");
    item.className = "comment-item fade-in";
    const time = new Date().toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'UTC'
    });
    item.innerHTML = `<span class="comment-name">$ ${name}:</span> ${msg} <span class="comment-time">[${time}]</span>`;
    commentList.appendChild(item); // GANTI dari insertBefore ke appendChild

    // 2. Pesan bot "typing..." PALING BAWAH
    const botItem = document.createElement("div");
    botItem.className = "comment-item fade-in bot-reply";
    botItem.innerHTML = `<span class="comment-name bot-name">🤖 speedbot:</span> <span class="bot-msg">Typing...</span>`;
    commentList.appendChild(botItem); // GANTI dari insertBefore ke appendChild

    // 3. Panggil handleMSG1 untuk reply
    try {
      const botReply = await handleMSG1(msg);
      botItem.querySelector(".bot-msg").innerHTML = botReply.replace(/\n/g, "<br>");
    } catch (err) {
      botItem.querySelector(".bot-msg").textContent = "Sorry, I couldn't process that.";
    }

    // 4. Reset form & auto-scroll ke bawah
    form.reset();
    commentList.scrollTop = commentList.scrollHeight;
  }
});


  roomContainer.appendChild(commentList);
  roomContainer.appendChild(form);

  profileBtn.addEventListener("click", () => {
    profileBtn.classList.add("active");
    roomBtn.classList.remove("active");
    buttonContainer.style.display = "flex";
    roomContainer.style.display = "none";
  });

  roomBtn.addEventListener("click", () => {
    roomBtn.classList.add("active");
    profileBtn.classList.remove("active");
    buttonContainer.style.display = "none";
    roomContainer.style.display = "flex";
  });

  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `<span class="footer-text">$ Speed Shell © 2025 | All rights reserved</span><span class="footer-cursor">▍</span>`;

  section.appendChild(title);
  section.appendChild(slogan);
  section.appendChild(switcher);
  section.appendChild(buttonContainer);
  section.appendChild(roomContainer);
  section.appendChild(footer);
  document.body.appendChild(section);

  const style = document.createElement("style");
  style.textContent = `
    .cursor {
      display: inline-block;
      width: 1ch;
      animation: blink-cursor 0.7s steps(1) infinite;
    }
    @keyframes blink-cursor {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
    .menu-btn {
      border-bottom-left-radius: 1dvw;
      border-bottom-right-radius: 1dvw;
      background-color: transparent;
      color:#00FF99;
      box-shadow: 0 0 8px #00FF99, 0 0 20px #00FF9930;
    }
    .fade-in {
      animation: fadeIn 0.4s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    .comment-time {
      color: #888;
      font-size: 0.85em;
      margin-left: 0.5ch;
    }
    .bot-reply .bot-name {
      color: #00ff99;
      font-weight: bold;
    }
    .bot-reply {
      background: #101d1a;
      border-left: 2.5px solid #00ff99;
    }
  `;
  document.head.appendChild(style);

  typeWriterToSpan(slogan, sloganText, 38);
}

function typeWriterToSpan(element, text, speed = 38) {
  let i = 0;
  function typing() {
    if (i <= text.length) {
      element.querySelector(".slogan-text").textContent = text.substring(0, i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}
