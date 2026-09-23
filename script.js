const icons = {
  email: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
      <path d="m3 7 9 6 9-6"></path>
    </svg>`,
  cv: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <path d="M14 2v6h6"></path>
      <path d="M8 13h8M8 17h6"></path>
    </svg>`,
  github: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.94a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.8c0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.23C22 6.58 17.52 2 12 2z"></path>
    </svg>`,
  scholar: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2 9.3 12 3l10 6.3L12 15 2 9.3z"></path>
      <path d="M6.5 12.2V17c2.9 2.1 8.1 2.1 11 0v-4.8"></path>
    </svg>`
};

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function inlineMarkup(text) {
  let html = escapeHtml(text);
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  return html;
}

function externalAttrs(url) {
  return url.startsWith("mailto:") ? "" : ' target="_blank" rel="noopener"';
}

function renderSite() {
  const data = window.siteData;
  if (!data) return;

  document.title = data.profile.name;

  const hero = document.getElementById("hero-content");
  hero.innerHTML = `
    <div class="hero-accent"></div>
    <div class="avatar-wrap">
      <img class="avatar" src="${escapeHtml(data.profile.photo)}" alt="${escapeHtml(data.profile.name)}"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
      <div class="avatar-fallback">${escapeHtml(data.profile.photoFallback)}</div>
    </div>
    <div class="hero-copy">
      <h1>${escapeHtml(data.profile.name)}</h1>
      <p class="tagline">${escapeHtml(data.profile.tagline)}</p>
      <div class="links">
        ${data.profile.socialLinks.map(link => `
          <a class="pill" href="${escapeHtml(link.url)}"${externalAttrs(link.url)}>
            ${icons[link.icon] || ""}
            ${escapeHtml(link.label)}
          </a>
        `).join("")}
      </div>
    </div>`;

  document.getElementById("about-content").innerHTML = data.profile.bio
    .map(paragraph => `<p>${inlineMarkup(paragraph)}</p>`)
    .join("");

  const header = data.publicationsHeader;
  document.getElementById("publications-header").innerHTML = `
    <div>
      <h2>${escapeHtml(header.title)}</h2>
      ${header.note ? `<span class="section-note">${escapeHtml(header.note)}</span>` : ""}
    </div>
    ${header.fullListUrl ? `
      <a class="all-pubs" href="${escapeHtml(header.fullListUrl)}" target="_blank" rel="noopener">
        ${escapeHtml(header.fullListLabel)}
      </a>` : ""}`;

  document.getElementById("papers-list").innerHTML = data.publications.map(paper => `
    <article class="paper card">
      <div class="paper-thumb">
        <img src="${escapeHtml(paper.image)}" alt="${escapeHtml(paper.imageAlt || paper.title)}"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
        <div class="paper-fallback">
          <span>${escapeHtml(paper.fallbackTitle || "Paper")}</span>
          <small>${escapeHtml(paper.fallbackSubtitle || "")}</small>
        </div>
      </div>
      <div class="paper-body">
        <h3>${escapeHtml(paper.title)}</h3>
        <p class="authors">${inlineMarkup(paper.authors)}</p>
        <div class="venue-row"><span class="venue">${escapeHtml(paper.venue)}</span></div>
        ${paper.description ? `<p class="paper-desc">${escapeHtml(paper.description)}</p>` : ""}
        ${paper.links && paper.links.length ? `
          <div class="paper-links">
            ${paper.links.map(link => `
              <a class="paper-link" href="${escapeHtml(link.url)}" target="_blank" rel="noopener">
                ${escapeHtml(link.label)}
              </a>`).join("")}
          </div>` : ""}
      </div>
    </article>
  `).join("");

  document.getElementById("footer-content").innerHTML = `
    <span>${escapeHtml(data.footer.left)}</span>
    <span>${escapeHtml(data.footer.right)}</span>`;
}

renderSite();
