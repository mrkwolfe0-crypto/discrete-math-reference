const app = document.getElementById('app');
const backBtn = document.getElementById('backBtn');
const homeBtn = document.getElementById('homeBtn');
const pageTitle = document.getElementById('pageTitle');
const pageSubtitle = document.getElementById('pageSubtitle');
const navButtons = [...document.querySelectorAll('.nav-btn')];

const historyStack = [];
let current = { route:'home' };

function esc(str='') {
  return String(str).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
}

function setHeader(title, subtitle='Offline reference', canBack=false) {
  pageTitle.textContent = title;
  pageSubtitle.textContent = subtitle;
  backBtn.classList.toggle('hidden', !canBack);
}

function setActiveNav(route) {
  navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.route === route));
}

function navigate(next, push=true) {
  if (push && current) historyStack.push(current);
  current = next;
  render();
  window.scrollTo({top:0, behavior:'instant'});
}

function goBack() {
  const prev = historyStack.pop();
  if (prev) { current = prev; render(); window.scrollTo({top:0, behavior:'instant'}); }
  else navigate({route:'home'}, false);
}

function renderHome() {
  setHeader('Discrete Math', 'Offline reference', false);
  setActiveNav('home');
  app.innerHTML = `
    <section class="hero">
      <h2>What do you need?</h2>
      <p>Tap a chapter, then narrow down to the topic you want. Everything in this reference works locally after it has been cached.</p>
    </section>
    <input id="homeSearch" class="search-box" type="search" placeholder="Search a topic…" aria-label="Search topics" />
    <div class="card-grid two-col">
      ${chapters.map(ch => chapterButton(ch)).join('')}
    </div>`;
  document.getElementById('homeSearch').addEventListener('input', e => {
    if (e.target.value.trim()) navigate({route:'search', query:e.target.value.trim()});
  });
  bindChapterButtons();
}

function chapterButton(ch) {
  return `<button class="topic-card" data-chapter="${esc(ch.id)}">
    <div class="card-row"><span class="badge">${esc(ch.number)}</span><span class="card-copy"><h3>${esc(ch.title)}</h3><p>${esc(ch.summary)}</p></span><span class="chevron">›</span></div>
  </button>`;
}

function sectionButton(sec) {
  return `<button class="section-card" data-section="${esc(sec.id)}">
    <div class="card-row"><span class="badge">${esc(sec.id)}</span><span class="card-copy"><h3>${esc(sec.title)}</h3><p>${esc(sec.summary)}</p></span><span class="chevron">›</span></div>
  </button>`;
}

function bindChapterButtons() {
  document.querySelectorAll('[data-chapter]').forEach(btn => btn.addEventListener('click', () => navigate({route:'chapter', id:btn.dataset.chapter})));
}
function bindSectionButtons() {
  document.querySelectorAll('[data-section]').forEach(btn => btn.addEventListener('click', () => navigate({route:'section', id:btn.dataset.section})));
}

function renderChapter(id) {
  const ch = chapters.find(c => c.id === id);
  if (!ch) return renderHome();
  setHeader(`Chapter ${ch.number}`, ch.title, true);
  setActiveNav('home');
  app.innerHTML = `<section class="hero"><h2>${esc(ch.title)}</h2><p>${esc(ch.summary)}</p></section>
    <h2 class="section-heading">Sections</h2>
    <div class="card-grid">${ch.sections.map(sectionButton).join('')}</div>`;
  bindSectionButtons();
}

function findSection(id) {
  for (const ch of chapters) {
    const sec = ch.sections.find(s => s.id === id);
    if (sec) return {ch, sec};
  }
}

function relatedQuick(sec) {
  const terms = [sec.title, sec.summary, ...(sec.keywords||[])].join(' ').toLowerCase();
  return quickReference.filter(q => q.tags.some(t => terms.includes(t.toLowerCase()))).slice(0,4);
}

function renderSection(id) {
  const found = findSection(id);
  if (!found) return renderHome();
  const {ch, sec} = found;
  const quick = relatedQuick(sec);
  setHeader(sec.id, sec.title, true);
  setActiveNav('home');
  app.innerHTML = `
    <section class="detail-card">
      <h2>${esc(sec.title)}</h2>
      <p>${esc(sec.summary)}</p>
      <div class="pill-row"><span class="pill">Chapter ${esc(ch.number)}</span><span class="pill">Book page ${esc(sec.page)}</span></div>
    </section>
    ${quick.length ? `<h2 class="section-heading">Quick reference</h2>${quick.map(quickCard).join('')}` : ''}
    <section class="detail-card">
      <h3>Find it in the book</h3>
      <p>This companion points you to <strong>Section ${esc(sec.id)}</strong>, beginning on book page <strong>${esc(sec.page)}</strong>.</p>
      <p class="license">The app is a compact navigation/reference companion, not a replacement for the full text.</p>
    </section>`;
}

function quickCard(q) {
  return `<article class="quick-card">
    <div class="card-copy"><h3>${esc(q.title)}</h3><p>${esc(q.group)}</p></div>
    <div class="math">${esc(q.formula).replace(/\n/g,'<br>')}</div>
    <p>${esc(q.note)}</p>
  </article>`;
}

function allSearchItems() {
  const sectionItems = chapters.flatMap(ch => ch.sections.map(sec => ({type:'section', id:sec.id, title:`${sec.id} ${sec.title}`, subtitle:`Chapter ${ch.number} · page ${sec.page}`, text:[sec.title,sec.summary,...(sec.keywords||[])].join(' ')})));
  const quickItems = quickReference.map((q,i) => ({type:'quick', id:i, title:q.title, subtitle:q.group, text:[q.title,q.group,q.formula,q.note,...q.tags].join(' ')}));
  return [...sectionItems, ...quickItems];
}

function renderSearch(initial='') {
  setHeader('Search', 'Find a concept', historyStack.length > 0);
  setActiveNav('search');
  app.innerHTML = `<input id="searchInput" class="search-box" type="search" placeholder="Try: contrapositive, graph, combination…" value="${esc(initial)}" aria-label="Search reference" autofocus />
    <div id="searchResults" class="card-grid"></div>`;
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  const draw = () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.innerHTML = `<div class="empty">Type a word or phrase to search chapters, sections, and quick-reference cards.</div>`; return; }
    const matches = allSearchItems().filter(item => item.text.toLowerCase().includes(q));
    results.innerHTML = matches.length ? matches.map(item => `<button class="section-card" data-result-type="${item.type}" data-result-id="${item.id}"><div class="card-row"><span class="card-copy"><h3>${esc(item.title)}</h3><p>${esc(item.subtitle)}</p></span><span class="chevron">›</span></div></button>`).join('') : `<div class="empty">No matches for “${esc(q)}”. Try a shorter term.</div>`;
    results.querySelectorAll('[data-result-type]').forEach(btn => btn.addEventListener('click', () => {
      if (btn.dataset.resultType === 'section') navigate({route:'section',id:btn.dataset.resultId});
      else navigate({route:'quick-detail',id:Number(btn.dataset.resultId)});
    }));
  };
  input.addEventListener('input', draw); draw(); input.focus();
}

function renderQuick() {
  setHeader('Quick Reference', 'Formulas & reminders', historyStack.length > 0);
  setActiveNav('quick');
  const groups = [...new Set(quickReference.map(q => q.group))];
  app.innerHTML = groups.map(g => `<h2 class="section-heading">${esc(g)}</h2>${quickReference.filter(q=>q.group===g).map(quickCard).join('')}`).join('');
}

function renderQuickDetail(id) {
  const q = quickReference[id]; if (!q) return renderQuick();
  setHeader(q.title, q.group, true); setActiveNav('quick');
  app.innerHTML = quickCard(q) + `<section class="detail-card"><h3>Related search terms</h3><div class="pill-row">${q.tags.map(t=>`<span class="pill">${esc(t)}</span>`).join('')}</div></section>`;
}

function renderAbout() {
  setHeader('About', 'Source & license', historyStack.length > 0);
  setActiveNav('about');
  app.innerHTML = `
    <section class="detail-card">
      <h2>${esc(BOOK.title)}</h2>
      <p>This offline companion follows the organization of ${esc(BOOK.author)}'s ${esc(BOOK.edition)} text and provides a compact navigation layer plus short reference reminders.</p>
    </section>
    <section class="detail-card">
      <h3>License</h3>
      <p>Source text: © 2013–2025 Oscar Levin. Licensed under <strong>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International</strong>.</p>
      <p class="license">This companion is an adaptation/reference aid and is also shared under CC BY-NC-SA 4.0. Attribution: Oscar Levin, <em>Discrete Mathematics: An Open Introduction, 4th Edition</em>.</p>
      <p class="license"><a href="${BOOK.sourceUrl}">Original book website</a> · <a href="${BOOK.licenseUrl}">License terms</a></p>
    </section>
    <section class="detail-card">
      <h3>Offline use</h3>
      <p>After the site has loaded once, the service worker caches the app files for offline use. On a phone, you can add the GitHub Pages site to your home screen for an app-like shortcut.</p>
    </section>`;
}

function render() {
  switch (current.route) {
    case 'chapter': return renderChapter(current.id);
    case 'section': return renderSection(current.id);
    case 'search': return renderSearch(current.query || '');
    case 'quick': return renderQuick();
    case 'quick-detail': return renderQuickDetail(current.id);
    case 'about': return renderAbout();
    default: return renderHome();
  }
}

backBtn.addEventListener('click', goBack);
homeBtn.addEventListener('click', () => navigate({route:'home'}));
navButtons.forEach(btn => btn.addEventListener('click', () => navigate({route:btn.dataset.route})));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {}));
}

render();
