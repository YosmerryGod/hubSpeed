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
    { label: "Website", url: "https://speedshell.fun" },
    { label: "Whitepaper", url: "https://pdf.speedshell.fun" },
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

    const span = document.createElement("span");
    span.className = "btn-text";
    span.dataset.label = label;
    span.textContent = label;

    btn.appendChild(span);
    buttonContainer.appendChild(btn);

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
          setTimeout(type, 25);
        }
      }
      type();
      btn.classList.add("hover");
    };

    const resetEffect = () => {
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
  profileBtn.textContent = "Profile";
  profileBtn.className = "menu-btn active";

  const roomBtn = document.createElement("button");
  roomBtn.textContent = "Room";
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
nameInput.required = true;

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


 form.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = messageInput.value.trim();
  const randomNum = Math.floor(Math.random() * 1000);
  const name = `anon-${randomNum}`;
  if (msg) {
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
    commentList.insertBefore(item, commentList.firstChild);
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