const app = document.querySelector(".app");
const sheets = [...document.querySelectorAll(".weekly-sheet")];
const pageImages = [...document.querySelectorAll(".weekly-page")];
const noteLayers = [...document.querySelectorAll(".note-layer")];
const stickerLayers = [...document.querySelectorAll(".sticker-layer")];
const turnPageEl = document.querySelector(".turn-page");
const turnPageImage = document.querySelector(".turn-page-image");
const openCover = document.querySelector(".open-cover");
const closeButton = document.querySelector("[data-action='close']");
const writeButton = document.querySelector("[data-action='write']");
const bgmAudio = document.querySelector(".bgm-audio");
const musicToggle = document.querySelector(".music-toggle");
const dots = document.querySelector(".page-dots");
const pageLabel = document.querySelector(".page-label");
const stickerToggle = document.querySelector(".sticker-toggle");
const stickerPanel = document.querySelector(".sticker-panel");
const stickerClose = document.querySelector(".sticker-close");
const stickerGrid = document.querySelector(".sticker-grid");
const leftEdge = document.querySelector(".edge-left");
const rightEdge = document.querySelector(".edge-right");
const entryModal = document.querySelector(".entry-modal");
const entryClose = document.querySelector(".entry-close");
const photoBoard = document.querySelector(".photo-board");
const entryPhoto = document.querySelector(".entry-photo");
const photoEmpty = document.querySelector(".photo-empty");
const pinLayer = document.querySelector(".pin-layer");
const entryPhotoInput = document.querySelector(".entry-photo-input");
const removePhotoButton = document.querySelector(".remove-photo");
const emotionButtons = [...document.querySelectorAll(".emotion-pin")];
const pinNote = document.querySelector(".pin-note");
const deletePinButton = document.querySelector(".delete-pin");
const controls = document.querySelector(".controls");
const entryTitle = document.querySelector(".entry-title");
const entryOwner = document.createElement("p");
const exchangeStatus = document.createElement("div");
const exchangeLabel = document.createElement("span");
const exchangeCurrent = document.createElement("strong");
const exchangeNext = document.createElement("span");
const rosterToggle = document.createElement("button");
const rosterPanel = document.createElement("section");
const rosterHead = document.createElement("div");
const rosterTitle = document.createElement("strong");
const rosterClose = document.createElement("button");
const rosterList = document.createElement("ol");
const rosterAdd = document.createElement("form");
const rosterInput = document.createElement("input");
const rosterAddButton = document.createElement("button");
const memoryDetailModal = document.createElement("section");
const memoryDetailPanel = document.createElement("div");
const memoryDetailHeader = document.createElement("div");
const memoryDetailTitleWrap = document.createElement("div");
const memoryDetailKicker = document.createElement("p");
const memoryDetailTitle = document.createElement("h2");
const memoryDetailClose = document.createElement("button");
const memoryDetailList = document.createElement("div");

entryOwner.className = "entry-owner";
exchangeStatus.className = "exchange-status";
exchangeStatus.setAttribute("aria-live", "polite");
exchangeLabel.className = "exchange-label";
exchangeLabel.textContent = "작성 차례";
exchangeCurrent.className = "exchange-current";
exchangeNext.className = "exchange-next";
exchangeStatus.append(exchangeLabel, exchangeCurrent, exchangeNext);
controls?.insertBefore(exchangeStatus, closeButton);
entryTitle?.insertAdjacentElement("afterend", entryOwner);
rosterToggle.className = "roster-toggle";
rosterToggle.type = "button";
rosterToggle.setAttribute("aria-expanded", "false");
rosterToggle.textContent = "참여자";
rosterPanel.className = "roster-panel";
rosterPanel.setAttribute("aria-hidden", "true");
rosterHead.className = "roster-head";
rosterTitle.textContent = "교환일기 참여자";
rosterClose.className = "roster-close";
rosterClose.type = "button";
rosterClose.setAttribute("aria-label", "참여자 명단 닫기");
rosterClose.textContent = "×";
rosterList.className = "roster-list";
rosterAdd.className = "roster-add";
rosterInput.type = "text";
rosterInput.maxLength = 12;
rosterInput.placeholder = "이름 입력";
rosterInput.setAttribute("aria-label", "추가할 참여자 이름");
rosterAddButton.type = "submit";
rosterAddButton.textContent = "추가";
rosterAdd.append(rosterInput, rosterAddButton);
rosterHead.append(rosterTitle, rosterClose);
rosterPanel.append(rosterHead, rosterList, rosterAdd);
controls?.insertBefore(rosterToggle, closeButton);
app?.appendChild(rosterPanel);
memoryDetailModal.className = "memory-detail-modal";
memoryDetailModal.setAttribute("aria-hidden", "true");
memoryDetailPanel.className = "memory-detail-panel";
memoryDetailPanel.setAttribute("role", "dialog");
memoryDetailPanel.setAttribute("aria-modal", "true");
memoryDetailHeader.className = "memory-detail-header";
memoryDetailKicker.className = "memory-detail-kicker";
memoryDetailKicker.textContent = "장소별 추억";
memoryDetailTitle.className = "memory-detail-title";
memoryDetailTitle.textContent = "장소 기록";
memoryDetailClose.className = "memory-detail-close";
memoryDetailClose.type = "button";
memoryDetailClose.setAttribute("aria-label", "장소별 추억 닫기");
memoryDetailClose.textContent = "×";
memoryDetailList.className = "memory-detail-list";
memoryDetailTitleWrap.append(memoryDetailKicker, memoryDetailTitle);
memoryDetailHeader.append(memoryDetailTitleWrap, memoryDetailClose);
memoryDetailPanel.append(memoryDetailHeader, memoryDetailList);
memoryDetailModal.appendChild(memoryDetailPanel);
app?.appendChild(memoryDetailModal);

const pages = [
  { id: "jun-01", src: "weekly-pages-real/page-01.png", label: "6월 1주차" },
  { id: "jun-02", src: "weekly-pages-real/page-02.png", label: "6월 2주차" },
  { id: "jun-03", src: "weekly-pages-real/page-03.png", label: "6월 핑크 1" },
  { id: "jun-04", src: "weekly-pages-real/page-04.png", label: "6월 핑크 2" },
  { id: "jun-05", src: "weekly-pages-real/page-05.png", label: "6월 퍼플 1" },
  { id: "jun-06", src: "weekly-pages-real/page-06.png", label: "6월 퍼플 2" },
  { id: "jun-07", src: "weekly-pages-real/page-07.png", label: "6월 옐로 1" },
  { id: "jun-08", src: "weekly-pages-real/page-08.png", label: "6월 옐로 2" },
  { id: "jun-09", src: "weekly-pages-real/page-09.png", label: "6월 블루" },
  { id: "jun-09-blank", src: "weekly-pages-real/page-09-blank.png", label: "6월 블루 메모" },
  { id: "memory-map-left", src: "weekly-pages-real/page-10-map.png", label: "AI 추억지도" },
  { id: "memory-map-right", src: "weekly-pages-real/page-11-memory-summary.png", label: "자주 언급된 장소" },
];

const noteStoreKey = "minglee-diary-page-notes";
const stickerStoreKey = "minglee-diary-stickers";
const exchangeTurnStoreKey = "minglee-diary-exchange-turn";
const exchangeMemberStoreKey = "minglee-diary-exchange-members";
const blankImage = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
const spreadCount = Math.ceil(pages.length / 2);
const memoTextAreas = new Set(["jun-02:3", "jun-04:3", "jun-06:3", "jun-08:3"]);
const hiddenNoteAreas = new Set(["jun-09:2", "jun-09:3"]);
const stickerAssets = Array.from({ length: 77 }, (_, index) => `sticker-assets/sticker-${String(index + 1).padStart(2, "0")}.png`);
const placeSuffixes = [
  "카페",
  "학교",
  "공원",
  "바다",
  "해변",
  "운동장",
  "교실",
  "도서관",
  "영화관",
  "식당",
  "맛집",
  "분식집",
  "집",
  "역",
  "정류장",
  "거리",
  "길",
  "골목",
  "시장",
  "마트",
  "편의점",
  "노래방",
  "PC방",
  "피시방",
  "벤치",
  "창가",
  "옥상",
  "산",
  "강",
  "호수",
  "한강",
  "놀이공원",
  "미술관",
  "박물관",
];
const knownPlaceWords = [
  "학교 앞 카페",
  "하늘길",
  "운동장 벤치",
  "교실 창가",
  "바다 사진",
  "한강공원",
  "집 앞",
  "버스 정류장",
  "지하철역",
  "편의점",
  "도서관",
  "카페",
  "학교",
  "공원",
  "바다",
  "운동장",
  "교실",
  "집",
];
const placeLeadingWords = /^(오늘|어제|내일|이번|우리|내가|친구랑|친구들과|다같이|같이|정말|너무)\s+/;
const placeFalsePositives = new Set(["집중", "집게", "시장하다", "공부", "학교생활"]);
const exchangeMembers = [
  { id: "writer-jieun", name: "지은" },
  { id: "writer-minseo", name: "민서" },
  { id: "writer-hayun", name: "하윤" },
  { id: "writer-yuna", name: "유나" },
  { id: "writer-seoah", name: "서아" },
  { id: "writer-dain", name: "다인" },
  { id: "writer-soyeon", name: "소연" },
  { id: "writer-chaeun", name: "채은" },
  { id: "writer-narin", name: "나린" },
  { id: "writer-harin", name: "하린" },
  { id: "writer-arin", name: "아린" },
  { id: "writer-yeji", name: "예지" },
  { id: "writer-sua", name: "수아" },
  { id: "writer-doyeon", name: "도연" },
  { id: "writer-rina", name: "리나" },
  ...loadExtraExchangeMembers(),
];

let isOpen = false;
let isTurning = false;
let isWriting = false;
let musicManuallyPaused = false;
let spreadIndex = 0;
let turnTimer = 0;
let renderTimer = 0;
let noteRenderTimer = 0;
let activeEntry = null;
let selectedColor = "red";
let selectedPinId = null;
let activePinDrag = null;
let selectedStickerId = null;
let activeStickerGesture = null;
let paletteDrag = null;
let pendingStickerSrc = "";
let currentWriterIndex = exchangeMembers.findIndex((member) => member.name === "서아");
if (currentWriterIndex < 0) currentWriterIndex = loadExchangeTurn();
let wroteThisTurn = false;

function loadNoteStore() {
  try {
    return JSON.parse(localStorage.getItem(noteStoreKey)) || {};
  } catch {
    return {};
  }
}

function saveNoteStore(store) {
  localStorage.setItem(noteStoreKey, JSON.stringify(store));
}

function loadStickerStore() {
  try {
    return JSON.parse(localStorage.getItem(stickerStoreKey)) || {};
  } catch {
    return {};
  }
}

function saveStickerStore(store) {
  localStorage.setItem(stickerStoreKey, JSON.stringify(store));
}

function loadExtraExchangeMembers() {
  try {
    const saved = JSON.parse(localStorage.getItem(exchangeMemberStoreKey)) || [];
    return Array.isArray(saved)
      ? saved
          .map((member) => ({
            id: member.id || `writer-extra-${crypto.randomUUID()}`,
            name: String(member.name || "").trim(),
          }))
          .filter((member) => member.name)
      : [];
  } catch {
    return [];
  }
}

function saveExtraExchangeMembers() {
  const extraMembers = exchangeMembers.filter((member) => member.id.startsWith("writer-extra-"));
  localStorage.setItem(exchangeMemberStoreKey, JSON.stringify(extraMembers));
}

function addExchangeMember(name) {
  const cleanName = String(name || "").trim();
  if (!cleanName) return;
  const exists = exchangeMembers.some((member) => member.name === cleanName);
  if (exists) {
    rosterInput.value = "";
    return;
  }
  exchangeMembers.push({
    id: `writer-extra-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: cleanName,
  });
  saveExtraExchangeMembers();
  rosterInput.value = "";
  updateExchangeStatus();
}

function loadExchangeTurn() {
  const value = Number(localStorage.getItem(exchangeTurnStoreKey));
  return Number.isInteger(value) && value >= 0 && value < exchangeMembers.length ? value : 0;
}

function saveExchangeTurn() {
  localStorage.setItem(exchangeTurnStoreKey, String(currentWriterIndex));
}

function currentWriter() {
  return exchangeMembers[currentWriterIndex] || exchangeMembers[0];
}

function nextWriter() {
  return exchangeMembers[(currentWriterIndex + 1) % exchangeMembers.length] || exchangeMembers[0];
}

function advanceWriter() {
  currentWriterIndex = (currentWriterIndex + 1) % exchangeMembers.length;
  saveExchangeTurn();
  wroteThisTurn = false;
  updateExchangeStatus();
}

function updateExchangeStatus() {
  const writer = currentWriter();
  const next = nextWriter();
  exchangeCurrent.textContent = writer.name;
  exchangeNext.textContent = `다음: ${next.name}`;
  writeButton.title = `${writer.name} 차례입니다.`;
  renderRoster();
}

function toggleRoster(force) {
  const next = typeof force === "boolean" ? force : !rosterPanel.classList.contains("is-open");
  rosterPanel.classList.toggle("is-open", next);
  rosterPanel.setAttribute("aria-hidden", String(!next));
  rosterToggle.classList.toggle("is-active", next);
  rosterToggle.setAttribute("aria-expanded", String(next));
}

function renderRoster() {
  const writer = currentWriter();
  rosterList.innerHTML = "";
  exchangeMembers.forEach((member, index) => {
    const item = document.createElement("li");
    item.className = "roster-item";
    item.classList.toggle("is-current", member.id === writer.id);

    const order = document.createElement("span");
    order.className = "roster-order";
    order.textContent = String(index + 1).padStart(2, "0");

    const name = document.createElement("strong");
    name.textContent = member.name;

    const badge = document.createElement("span");
    badge.className = "roster-badge";
    badge.textContent = member.id === writer.id ? "지금 차례" : index === (currentWriterIndex + 1) % exchangeMembers.length ? "다음" : "";

    item.append(order, name, badge);
    rosterList.appendChild(item);
  });
}

function entryHasContent(entry) {
  return Boolean(entry.photo || entry.memo || entry.pins?.length);
}

function entryOwnerName(entry) {
  if (!entryHasContent(entry)) return "";
  return entry.authorName || exchangeMembers.find((member) => member.id === entry.authorId)?.name || "이전 작성자";
}

function isEntryLocked(entry) {
  return entryHasContent(entry) && entry.authorId && entry.authorId !== currentWriter().id;
}

function splitDiarySentences(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .split(/[.!?。！？\n]/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function cleanPlaceCandidate(candidate) {
  let text = String(candidate || "")
    .replace(/[()[\]{}"'“”‘’.,!?。！？]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  text = text.replace(placeLeadingWords, "").trim();
  text = text.replace(/(에서|으로|로|에|을|를|은|는|이|가|도|만|까지|부터|근처|앞에서|뒤에서)$/u, "").trim();
  if (!text || text.length < 1 || text.length > 18) return "";
  if (placeFalsePositives.has(text)) return "";
  if (/^[0-9]+$/.test(text)) return "";
  return text;
}

function addPlaceHit(map, rawPlace, sentence) {
  const place = cleanPlaceCandidate(rawPlace);
  if (!place) return;
  const existing = map.get(place) || { place, count: 0, memories: [] };
  existing.count += 1;
  const memory = sentence.trim();
  if (memory && !existing.memories.includes(memory)) existing.memories.push(memory);
  map.set(place, existing);
}

function extractPlacesFromText(text, placeMap) {
  const sentences = splitDiarySentences(text);
  const suffixPattern = placeSuffixes
    .map((suffix) => suffix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const hangul = "\\uAC00-\\uD7A3";
  const placePattern = new RegExp(`([${hangul}A-Za-z0-9]+(?:\\\\s+[${hangul}A-Za-z0-9]+){0,2}\\\\s*(?:${suffixPattern}))`, "g");

  sentences.forEach((sentence) => {
    knownPlaceWords.forEach((place) => {
      if (sentence.includes(place)) addPlaceHit(placeMap, place, sentence);
    });

    [...sentence.matchAll(placePattern)].forEach((match) => {
      addPlaceHit(placeMap, match[1], sentence);
    });

    // Avoid treating words like "\uc9d1\uc911" as "\uc9d1"; count it only when it is used as a place.
    if (new RegExp(`(^|[^${hangul}])\\\\uC9D1(\\\\uC5D0|\\\\uC5D0\\\\uC11C|\\\\uC73C\\\\uB85C|\\\\uC55E|\\\\uADFC\\\\uCC98|$)`).test(sentence)) {
      addPlaceHit(placeMap, "\uC9D1", sentence);
    }
  });
}

function analyzeDiaryPlaces() {
  const store = loadNoteStore();
  const placeMap = new Map();
  pages
    .filter((page) => !page.id.startsWith("memory-map") && page.id !== "jun-09-blank")
    .forEach((page) => {
      getPageEntries(store, page.id).forEach((entry) => {
        extractPlacesFromText(entry.memo, placeMap);
        entry.pins.forEach((pin) => extractPlacesFromText(pin.note, placeMap));
      });
    });

  return [...placeMap.values()]
    .map((item) => ({
      ...item,
      score: item.count * 10 + Math.min(item.place.length, 8),
      memory: item.memories[0] || `${item.place}에서 남긴 기록이 모였어요.`,
    }))
    .sort((a, b) => b.score - a.score || b.count - a.count || a.place.localeCompare(b.place, "ko"))
    .slice(0, 5);
}

const memoryMapPinPositions = [
  { x: 31, y: 31 },
  { x: 72, y: 32 },
  { x: 31, y: 66 },
  { x: 70, y: 65 },
  { x: 50, y: 49 },
];

function textMentionsPlace(text, place) {
  return String(text || "").toLocaleLowerCase("ko").includes(String(place || "").toLocaleLowerCase("ko"));
}

function collectMemoriesForPlace(place) {
  const store = loadNoteStore();
  const records = [];

  pages
    .filter((page) => !page.id.startsWith("memory-map") && page.id !== "jun-09-blank")
    .forEach((page) => {
      getPageEntries(store, page.id).forEach((entry, area) => {
        const snippets = [];
        if (textMentionsPlace(entry.memo, place)) snippets.push(entry.memo);
        entry.pins.forEach((pin) => {
          if (textMentionsPlace(pin.note, place)) snippets.push(pin.note);
        });

        const uniqueSnippets = [...new Set(snippets.map((text) => text.trim()).filter(Boolean))];
        if (!uniqueSnippets.length) return;

        records.push({
          page,
          area,
          photo: entry.photo,
          author: entryOwnerName(entry),
          snippets: uniqueSnippets,
        });
      });
    });

  return records;
}

function closeMemoryDetail() {
  memoryDetailModal.classList.remove("is-open");
  memoryDetailModal.setAttribute("aria-hidden", "true");
}

function openMemoryDetail(place, number) {
  const records = collectMemoriesForPlace(place);
  memoryDetailTitle.textContent = number ? `${number}. ${place}` : place;
  memoryDetailList.innerHTML = "";

  if (!records.length) {
    const empty = document.createElement("p");
    empty.className = "memory-detail-empty";
    empty.textContent = "이 장소와 연결된 사진이나 글이 아직 없어요.";
    memoryDetailList.appendChild(empty);
  }

  records.forEach((record) => {
    const card = document.createElement("article");
    card.className = "memory-detail-card";

    if (record.photo) {
      const image = document.createElement("img");
      image.src = record.photo;
      image.alt = `${place} 기록 사진`;
      card.appendChild(image);
    }

    const body = document.createElement("div");
    body.className = "memory-detail-card-body";

    const meta = document.createElement("span");
    meta.className = "memory-detail-meta";
    meta.textContent = `${record.page.label} · ${record.area + 1}번 칸${record.author ? ` · ${record.author}` : ""}`;
    body.appendChild(meta);

    record.snippets.forEach((snippet) => {
      const text = document.createElement("p");
      text.textContent = snippet;
      body.appendChild(text);
    });

    card.appendChild(body);
    memoryDetailList.appendChild(card);
  });

  memoryDetailModal.classList.add("is-open");
  memoryDetailModal.setAttribute("aria-hidden", "false");
}

function renderMemoryMapPins(sheet, page) {
  sheet.querySelector(".memory-map-pins")?.remove();
  if (page?.id !== "memory-map-left") return;

  const places = analyzeDiaryPlaces();
  const overlay = document.createElement("div");
  overlay.className = "memory-map-pins";
  overlay.setAttribute("aria-label", "AI memory map numbered place pins");

  places.forEach((item, index) => {
    const position = memoryMapPinPositions[index % memoryMapPinPositions.length];
    const pin = document.createElement("span");
    pin.className = "memory-map-pin";
    pin.style.left = `${position.x}%`;
    pin.style.top = `${position.y}%`;
    pin.dataset.place = item.place;
    pin.title = `${index + 1}. ${item.place}`;
    const number = document.createElement("span");
    number.textContent = index + 1;
    pin.appendChild(number);
    overlay.appendChild(pin);
  });

  sheet.appendChild(overlay);
}

function renderMemorySummaryOverlay(sheet, page) {
  sheet.querySelector(".memory-summary-live")?.remove();
  if (page?.id !== "memory-map-right") return;

  const places = analyzeDiaryPlaces();
  const overlay = document.createElement("div");
  overlay.className = "memory-summary-live";

  const title = document.createElement("strong");
  title.textContent = "실시간 장소 요약";
  overlay.appendChild(title);

  const list = document.createElement("ol");
  const summaryItems = places.length
    ? places
    : [{ place: "아직 장소 기록 없음", count: 0, memory: "핀 글이나 메모에 장소를 적으면 여기에 자동으로 모여요." }];

  summaryItems.forEach((item, index) => {
    const row = document.createElement("li");
    const number = document.createElement("em");
    const name = document.createElement("b");
    const count = document.createElement("span");
    const memory = document.createElement("p");

    number.textContent = places.length ? index + 1 : "";
    name.textContent = item.place;
    count.textContent = item.count ? `${item.count}회` : "";
    memory.textContent = item.memory.length > 58 ? `${item.memory.slice(0, 58)}...` : item.memory;
    if (places.length) {
      row.className = "is-clickable";
      row.tabIndex = 0;
      row.setAttribute("role", "button");
      row.setAttribute("aria-label", `${item.place} 장소 기록 보기`);
      row.addEventListener("click", () => openMemoryDetail(item.place, index + 1));
      row.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openMemoryDetail(item.place, index + 1);
        }
      });
    }
    row.append(number, name, count, memory);
    list.appendChild(row);
  });

  overlay.appendChild(list);
  sheet.appendChild(overlay);
}
function getPageStickers(store, pageId) {
  return Array.isArray(store[pageId])
    ? store[pageId].map((sticker) => ({
        id: sticker.id || crypto.randomUUID(),
        src: sticker.src,
        x: Number(sticker.x) || 50,
        y: Number(sticker.y) || 50,
        w: Number(sticker.w) || 22,
        r: Number(sticker.r) || 0,
      })).filter((sticker) => sticker.src)
    : [];
}

function setPageStickers(store, pageId, stickers) {
  store[pageId] = stickers;
  saveStickerStore(store);
}

function emptyEntry() {
  return { photo: "", pins: [], memo: "", authorId: "", authorName: "" };
}

function normalizeEntry(value) {
  if (!value) return emptyEntry();
  if (typeof value === "string") return { ...emptyEntry(), memo: value };
  if (Array.isArray(value)) return emptyEntry();
  return {
    photo: value.photo || "",
    memo: value.memo || "",
    authorId: value.authorId || "",
    authorName: value.authorName || "",
    pins: Array.isArray(value.pins)
      ? value.pins.map((pin) => ({
          id: pin.id || crypto.randomUUID(),
          x: Number(pin.x) || 50,
          y: Number(pin.y) || 50,
          color: pin.color || "red",
          note: pin.note || "",
        }))
      : [],
  };
}

function isMemoTextArea(pageId, area) {
  return memoTextAreas.has(`${pageId}:${area}`);
}

function isHiddenNoteArea(pageId, area) {
  return hiddenNoteAreas.has(`${pageId}:${area}`);
}

function getPageEntries(store, pageId) {
  const existing = store[pageId];
  if (Array.isArray(existing) && existing.some((item) => typeof item === "string" || item?.text)) {
    return Array.from({ length: 4 }, (_, index) => {
      const item = existing[index];
      return normalizeEntry({
        photo: item?.photo || "",
        pins: item?.text ? [{ id: crypto.randomUUID(), x: 50, y: 50, color: "green", note: item.text }] : [],
      });
    });
  }

  return Array.from({ length: 4 }, (_, index) => normalizeEntry(existing?.[index]));
}

function setPageEntries(store, pageId, entries) {
  store[pageId] = entries.map(normalizeEntry);
}

function currentEntryData() {
  if (!activeEntry) return null;
  const store = loadNoteStore();
  const entries = getPageEntries(store, activeEntry.pageId);
  return { store, entries, entry: entries[activeEntry.area] };
}

function saveActiveEntry(entry, options = {}) {
  if (!activeEntry) return;
  const shouldRender = options.render !== false;
  const store = loadNoteStore();
  const entries = getPageEntries(store, activeEntry.pageId);
  const existing = entries[activeEntry.area];
  const normalized = normalizeEntry(entry);

  if (isEntryLocked(existing)) return;
  if (entryHasContent(normalized) && !normalized.authorId) {
    const writer = currentWriter();
    normalized.authorId = writer.id;
    normalized.authorName = writer.name;
  }
  if (entryHasContent(normalized)) wroteThisTurn = true;

  entries[activeEntry.area] = normalized;
  setPageEntries(store, activeEntry.pageId, entries);
  saveNoteStore(store);
  if (shouldRender) renderSpread();
}

function scheduleNoteRender() {
  window.clearTimeout(noteRenderTimer);
  noteRenderTimer = window.setTimeout(renderSpread, 280);
}

function createNoteAreas() {
  noteLayers.forEach((layer, slot) => {
    layer.innerHTML = "";
    for (let area = 0; area < 4; area += 1) {
      const cell = document.createElement("button");
      cell.className = "note-cell";
      cell.type = "button";
      cell.dataset.slot = String(slot);
      cell.dataset.area = String(area);
      cell.setAttribute("aria-label", `일기 작성칸 ${area + 1}`);
      cell.addEventListener("click", openEntryFromCell);

      const visual = document.createElement("span");
      visual.className = "cell-entry-visual";
      cell.appendChild(visual);

      const preview = document.createElement("span");
      preview.className = "cell-preview";
      preview.textContent = "기록하기";
      cell.appendChild(preview);

      const author = document.createElement("span");
      author.className = "cell-author";
      cell.appendChild(author);
      layer.appendChild(cell);
    }
  });
}

function buildStickerPalette() {
  stickerGrid.innerHTML = "";
  stickerAssets.forEach((src, index) => {
    const button = document.createElement("button");
    button.className = "sticker-choice";
    button.type = "button";
    button.dataset.src = src;
    button.setAttribute("aria-label", `스티커 ${index + 1}`);
    button.addEventListener("pointerdown", (event) => startPaletteDrag(event, src));

    const image = document.createElement("img");
    image.src = src;
    image.alt = "";
    image.draggable = false;
    button.appendChild(image);
    stickerGrid.appendChild(button);
  });
}

function setPendingSticker(src) {
  pendingStickerSrc = src;
  selectedStickerId = null;
  stickerGrid.querySelectorAll(".sticker-choice").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.src === src);
  });
}

function toggleStickerPanel(force) {
  const next = typeof force === "boolean" ? force : !stickerPanel.classList.contains("is-open");
  stickerPanel.classList.toggle("is-open", next);
  stickerPanel.setAttribute("aria-hidden", String(!next));
  stickerToggle.classList.toggle("is-active", next);
  stickerToggle.setAttribute("aria-expanded", String(next));
}

function getStickerTargetFromPoint(x, y) {
  const element = document.elementFromPoint(x, y);
  const sheet = element?.closest?.(".weekly-sheet");
  return sheet?.dataset.pageId ? sheet : null;
}

function addStickerToSheetAt(sheet, src, clientX, clientY) {
  const pageId = sheet.dataset.pageId;
  if (!pageId) return;
  const rect = sheet.getBoundingClientRect();
  const sticker = {
    id: crypto.randomUUID(),
    src,
    x: Math.max(6, Math.min(94, ((clientX - rect.left) / rect.width) * 100)),
    y: Math.max(6, Math.min(94, ((clientY - rect.top) / rect.height) * 100)),
    w: 22,
    r: 0,
  };
  const store = loadStickerStore();
  const stickers = getPageStickers(store, pageId);
  stickers.push(sticker);
  setPageStickers(store, pageId, stickers);
  selectedStickerId = sticker.id;
  pendingStickerSrc = "";
  stickerGrid.querySelectorAll(".sticker-choice.is-selected").forEach((button) => {
    button.classList.remove("is-selected");
  });
  renderSpread();
}

function addStickerToDefaultPage(src) {
  const sheet = sheets.find((item) => item.dataset.pageId);
  if (!sheet) return;
  const rect = sheet.getBoundingClientRect();
  addStickerToSheetAt(sheet, src, rect.left + rect.width / 2, rect.top + rect.height / 2);
}

function startPaletteDrag(event, src) {
  event.preventDefault();
  const preview = document.createElement("img");
  preview.className = "sticker-drag-preview";
  preview.src = src;
  preview.alt = "";
  document.body.appendChild(preview);
  paletteDrag = {
    src,
    preview,
    startX: event.clientX,
    startY: event.clientY,
    x: event.clientX,
    y: event.clientY,
    didMove: false,
  };
  movePalettePreview(event.clientX, event.clientY);
  event.currentTarget.setPointerCapture?.(event.pointerId);
}

function movePalettePreview(x, y) {
  if (!paletteDrag) return;
  paletteDrag.preview.style.left = `${x}px`;
  paletteDrag.preview.style.top = `${y}px`;
}

function dragPaletteSticker(event) {
  if (!paletteDrag) return;
  const distance = Math.hypot(event.clientX - paletteDrag.startX, event.clientY - paletteDrag.startY);
  if (distance > 5) paletteDrag.didMove = true;
  paletteDrag.x = event.clientX;
  paletteDrag.y = event.clientY;
  movePalettePreview(event.clientX, event.clientY);
}

function finishPaletteSticker() {
  if (!paletteDrag) return;
  const drag = paletteDrag;
  paletteDrag = null;
  drag.preview.remove();

  const sheet = drag.didMove ? getStickerTargetFromPoint(drag.x, drag.y) : null;
  if (sheet) {
    addStickerToSheetAt(sheet, drag.src, drag.x, drag.y);
  } else {
    setPendingSticker(drag.src);
  }
}

function findSticker(pageId, stickerId) {
  const store = loadStickerStore();
  const stickers = getPageStickers(store, pageId);
  const sticker = stickers.find((item) => item.id === stickerId);
  return { store, stickers, sticker };
}

function startStickerGesture(event, stickerId, pageId) {
  if (event.target.closest(".sticker-resize") || event.target.closest(".sticker-rotate") || event.target.closest(".sticker-delete")) return;
  event.preventDefault();
  event.stopPropagation();

  if (activeStickerGesture?.id === stickerId) {
    activeStickerGesture.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (activeStickerGesture.pointers.size >= 2) {
      const points = [...activeStickerGesture.pointers.values()];
      activeStickerGesture.mode = "pinch";
      activeStickerGesture.initialDistance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
      activeStickerGesture.initialW = activeStickerGesture.sticker.w;
    }
    return;
  }

  const { sticker } = findSticker(pageId, stickerId);
  if (!sticker) return;
  selectedStickerId = stickerId;
  activeStickerGesture = {
    mode: "move",
    id: stickerId,
    pageId,
    pointers: new Map([[event.pointerId, { x: event.clientX, y: event.clientY }]]),
    startX: event.clientX,
    startY: event.clientY,
    sticker: { ...sticker },
    initial: { ...sticker },
  };
  event.currentTarget.setPointerCapture?.(event.pointerId);
  renderSpread();
}

function startStickerResize(event, stickerId, pageId) {
  event.preventDefault();
  event.stopPropagation();
  const { sticker } = findSticker(pageId, stickerId);
  if (!sticker) return;
  selectedStickerId = stickerId;
  activeStickerGesture = {
    mode: "resize",
    id: stickerId,
    pageId,
    pointers: new Map([[event.pointerId, { x: event.clientX, y: event.clientY }]]),
    startX: event.clientX,
    startY: event.clientY,
    sticker: { ...sticker },
    initial: { ...sticker },
  };
  event.currentTarget.setPointerCapture?.(event.pointerId);
}

function startStickerRotate(event, stickerId, pageId) {
  event.preventDefault();
  event.stopPropagation();
  const { sticker } = findSticker(pageId, stickerId);
  const sheet = sheets.find((item) => item.dataset.pageId === pageId);
  const item = document.querySelector(`.placed-sticker[data-id="${stickerId}"]`);
  const rect = item?.getBoundingClientRect();
  if (!sticker || !sheet || !rect) return;
  selectedStickerId = stickerId;
  activeStickerGesture = {
    mode: "rotate",
    id: stickerId,
    pageId,
    pointers: new Map([[event.pointerId, { x: event.clientX, y: event.clientY }]]),
    startX: event.clientX,
    startY: event.clientY,
    center: {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    },
    startAngle: Math.atan2(event.clientY - (rect.top + rect.height / 2), event.clientX - (rect.left + rect.width / 2)),
    sticker: { ...sticker },
    initial: { ...sticker },
  };
  event.currentTarget.setPointerCapture?.(event.pointerId);
}

function syncActiveSticker() {
  if (!activeStickerGesture) return;
  const item = document.querySelector(`.placed-sticker[data-id="${activeStickerGesture.id}"]`);
  if (!item) return;
  item.style.left = `${activeStickerGesture.sticker.x}%`;
  item.style.top = `${activeStickerGesture.sticker.y}%`;
  item.style.setProperty("--sticker-width", `${activeStickerGesture.sticker.w}%`);
  item.style.setProperty("--sticker-rotation", `${activeStickerGesture.sticker.r}deg`);
}

function moveActiveSticker(event) {
  if (!activeStickerGesture || !activeStickerGesture.pointers.has(event.pointerId)) return;
  activeStickerGesture.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  const sheet = sheets.find((item) => item.dataset.pageId === activeStickerGesture.pageId);
  const rect = sheet?.getBoundingClientRect();
  if (!rect) return;

  if (activeStickerGesture.mode === "pinch" && activeStickerGesture.pointers.size >= 2) {
    const points = [...activeStickerGesture.pointers.values()];
    const distance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
    const scale = activeStickerGesture.initialDistance ? distance / activeStickerGesture.initialDistance : 1;
    activeStickerGesture.sticker.w = Math.max(8, Math.min(68, activeStickerGesture.initialW * scale));
  } else if (activeStickerGesture.mode === "resize") {
    const dx = event.clientX - activeStickerGesture.startX;
    activeStickerGesture.sticker.w = Math.max(8, Math.min(68, activeStickerGesture.initial.w + (dx / rect.width) * 100));
  } else if (activeStickerGesture.mode === "rotate") {
    const angle = Math.atan2(event.clientY - activeStickerGesture.center.y, event.clientX - activeStickerGesture.center.x);
    activeStickerGesture.sticker.r = activeStickerGesture.initial.r + ((angle - activeStickerGesture.startAngle) * 180) / Math.PI;
  } else {
    const dx = event.clientX - activeStickerGesture.startX;
    const dy = event.clientY - activeStickerGesture.startY;
    activeStickerGesture.sticker.x = Math.max(4, Math.min(96, activeStickerGesture.initial.x + (dx / rect.width) * 100));
    activeStickerGesture.sticker.y = Math.max(4, Math.min(96, activeStickerGesture.initial.y + (dy / rect.height) * 100));
  }
  syncActiveSticker();
}

function finishStickerGesture(event) {
  if (!activeStickerGesture) return;
  activeStickerGesture.pointers.delete(event.pointerId);
  if (activeStickerGesture.pointers.size > 0) return;

  const { store, stickers } = findSticker(activeStickerGesture.pageId, activeStickerGesture.id);
  const index = stickers.findIndex((item) => item.id === activeStickerGesture.id);
  if (index >= 0) {
    stickers[index] = { ...activeStickerGesture.sticker };
    setPageStickers(store, activeStickerGesture.pageId, stickers);
  }
  activeStickerGesture = null;
  renderSpread();
}

function deleteSelectedSticker() {
  if (!selectedStickerId) return false;
  const store = loadStickerStore();
  let removed = false;
  Object.keys(store).forEach((pageId) => {
    const before = getPageStickers(store, pageId);
    const after = before.filter((sticker) => sticker.id !== selectedStickerId);
    if (after.length !== before.length) {
      store[pageId] = after;
      removed = true;
    }
  });
  if (removed) {
    selectedStickerId = null;
    saveStickerStore(store);
    renderSpread();
  }
  return removed;
}

function deleteStickerById(pageId, stickerId) {
  const store = loadStickerStore();
  const before = getPageStickers(store, pageId);
  const after = before.filter((sticker) => sticker.id !== stickerId);
  if (after.length === before.length) return;
  setPageStickers(store, pageId, after);
  if (selectedStickerId === stickerId) selectedStickerId = null;
  renderSpread();
}

function createPinIcon() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("pin-svg");
  svg.setAttribute("viewBox", "0 0 48 64");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M24 2C12.4 2 3 11.4 3 23c0 16.5 21 39 21 39s21-22.5 21-39C45 11.4 35.6 2 24 2Z",
  );
  path.setAttribute("class", "pin-shape");
  svg.appendChild(path);

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", "24");
  circle.setAttribute("cy", "23");
  circle.setAttribute("r", "8.5");
  circle.setAttribute("class", "pin-hole");
  svg.appendChild(circle);

  return svg;
}

function renderCellEntryPreview(cell, entry, isMemoryMap, isMemoArea, isHiddenArea) {
  const visual = cell.querySelector(".cell-entry-visual");
  const preview = cell.querySelector(".cell-preview");
  const author = cell.querySelector(".cell-author");
  const ownerName = entryOwnerName(entry);
  visual.innerHTML = "";
  cell.classList.toggle("is-memo-area", Boolean(isMemoArea));
  cell.classList.toggle("is-hidden-area", Boolean(isHiddenArea));
  cell.classList.toggle("is-locked-entry", isEntryLocked(entry));
  if (author) author.textContent = ownerName ? `${ownerName} 작성` : "";

  if (isMemoryMap || isHiddenArea) {
    preview.textContent = "";
    if (author) author.textContent = "";
    return;
  }

  if (isMemoArea) {
    preview.textContent = entry.memo ? entry.memo : "메모하기";
    return;
  }

  if (!entry.photo) {
    preview.textContent = "기록하기";
    return;
  }

  preview.textContent = "수정하기";

  const photo = document.createElement("img");
  photo.className = "cell-entry-photo";
  photo.src = entry.photo;
  photo.alt = "";
  photo.draggable = false;
  visual.appendChild(photo);

  entry.pins.forEach((pin) => {
    const marker = document.createElement("span");
    marker.className = "sheet-pin";
    marker.dataset.color = pin.color;
    marker.style.left = `${pin.x}%`;
    marker.style.top = `${pin.y}%`;
    marker.setAttribute("aria-hidden", "true");
    marker.appendChild(createPinIcon());
    visual.appendChild(marker);
  });
}

function renderStickers(slot, page) {
  const layer = stickerLayers[slot];
  layer.innerHTML = "";
  layer.dataset.pageId = page?.id || "";
  if (!page) return;

  const stickers = getPageStickers(loadStickerStore(), page.id);
  stickers.forEach((sticker) => {
    const item = document.createElement("button");
    item.className = "placed-sticker";
    item.type = "button";
    item.dataset.id = sticker.id;
    item.dataset.pageId = page.id;
    item.style.left = `${sticker.x}%`;
    item.style.top = `${sticker.y}%`;
    item.style.setProperty("--sticker-width", `${sticker.w}%`);
    item.style.setProperty("--sticker-rotation", `${sticker.r}deg`);
    item.classList.toggle("is-selected", sticker.id === selectedStickerId);
    item.setAttribute("aria-label", "배치한 스티커");
    item.addEventListener("pointerdown", (event) => startStickerGesture(event, sticker.id, page.id));
    item.addEventListener("click", (event) => {
      event.stopPropagation();
      selectedStickerId = sticker.id;
      renderSpread();
    });

    const image = document.createElement("img");
    image.src = sticker.src;
    image.alt = "";
    image.draggable = false;
    item.appendChild(image);

    const resize = document.createElement("span");
    resize.className = "sticker-resize";
    resize.addEventListener("pointerdown", (event) => startStickerResize(event, sticker.id, page.id));
    item.appendChild(resize);

    const rotate = document.createElement("span");
    rotate.className = "sticker-rotate";
    rotate.addEventListener("pointerdown", (event) => startStickerRotate(event, sticker.id, page.id));
    item.appendChild(rotate);

    const remove = document.createElement("span");
    remove.className = "sticker-delete";
    remove.setAttribute("aria-label", "스티커 삭제");
    remove.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
    remove.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      deleteStickerById(page.id, sticker.id);
    });
    item.appendChild(remove);
    layer.appendChild(item);
  });
}

function setSheet(slot, page) {
  const sheet = sheets[slot];
  const image = pageImages[slot];
  const cells = [...noteLayers[slot].querySelectorAll(".note-cell")];
  sheet.dataset.pageId = page?.id || "";

  if (!page) {
    sheet.classList.add("is-empty");
    sheet.classList.remove("is-memory-map");
    renderMemoryMapPins(sheet, null);
    renderMemorySummaryOverlay(sheet, null);
    renderStickers(slot, null);
    image.removeAttribute("src");
    image.style.visibility = "hidden";
    cells.forEach((cell) => {
      cell.disabled = true;
      cell.dataset.pageId = "";
      cell.classList.remove("has-entry");
      cell.classList.remove("is-memo-area");
      cell.classList.remove("is-hidden-area");
      cell.querySelector(".cell-entry-visual").innerHTML = "";
      cell.querySelector(".cell-preview").textContent = "";
    });
    return;
  }

  const store = loadNoteStore();
  const entries = getPageEntries(store, page.id);
  const isMemoryMap = page.id.startsWith("memory-map") || page.id === "jun-09-blank";

  sheet.classList.remove("is-empty");
  sheet.classList.toggle("is-memory-map", isMemoryMap);
  image.src = page.src;
  image.style.visibility = "visible";
  renderMemoryMapPins(sheet, page);
  renderMemorySummaryOverlay(sheet, page);
  renderStickers(slot, page);
  cells.forEach((cell, index) => {
    const entry = entries[index];
    const pinCount = entry.pins.length;
    const isMemoArea = isMemoTextArea(page.id, index);
    const isHiddenArea = isHiddenNoteArea(page.id, index);
    cell.disabled = isMemoryMap || isHiddenArea;
    cell.dataset.pageId = isMemoryMap || isHiddenArea ? "" : page.id;
    cell.classList.toggle(
      "has-entry",
      !isMemoryMap && !isHiddenArea && Boolean(entry.photo || pinCount || (isMemoArea && entry.memo)),
    );
    renderCellEntryPreview(cell, entry, isMemoryMap, isMemoArea, isHiddenArea);
  });
}

function renderSpread() {
  const spreadStart = spreadIndex * 2;
  const left = pages[spreadStart];
  const right = pages[spreadStart + 1];

  setSheet(0, left);
  setSheet(1, right);

  [...dots.children].forEach((dot, index) => {
    dot.classList.toggle("is-current", index === spreadIndex);
  });

  pageLabel.textContent = isOpen
    ? right
      ? `${left.label} · ${right.label}`
      : left.label
    : "표지";
}

function buildDots() {
  dots.innerHTML = "";
  Array.from({ length: spreadCount }).forEach(() => {
    dots.appendChild(document.createElement("span"));
  });
}

function openDiary() {
  isOpen = true;
  app.classList.add("is-open");
  renderSpread();
  if (!musicManuallyPaused) startMusic();
}

function closeDiary() {
  const shouldAdvanceWriter = wroteThisTurn;
  isOpen = false;
  isWriting = false;
  isTurning = false;
  window.clearTimeout(turnTimer);
  window.clearTimeout(renderTimer);
  window.clearTimeout(noteRenderTimer);
  turnPageEl.className = "turn-page";
  app.classList.remove("is-open", "is-writing");
  writeButton.textContent = "일기를 작성하시오";
  pageLabel.textContent = "표지";
  toggleRoster(false);
  toggleStickerPanel(false);
  closeEntryModal();
  if (shouldAdvanceWriter) {
    advanceWriter();
    pageLabel.textContent = `다음 차례: ${currentWriter().name}`;
  }
}

function finishTurn() {
  isTurning = false;
  turnPageEl.className = "turn-page";
}

function turnSpread(direction) {
  if (!isOpen) {
    openDiary();
    return;
  }

  if (isTurning || entryModal.classList.contains("is-open")) return;
  if (direction < 0 && spreadIndex === 0) return;
  if (direction > 0 && spreadIndex === spreadCount - 1) return;

  const currentStart = spreadIndex * 2;
  const turningPage = direction > 0 ? pages[currentStart + 1] : pages[currentStart];

  spreadIndex = spreadIndex + direction;
  isTurning = true;

  if (turningPage) {
    turnPageImage.src = turningPage.src;
    turnPageImage.style.visibility = "visible";
  } else {
    turnPageImage.removeAttribute("src");
    turnPageImage.style.visibility = "hidden";
  }

  turnPageEl.className = `turn-page ${direction > 0 ? "is-next" : "is-prev"}`;
  window.clearTimeout(turnTimer);
  window.clearTimeout(renderTimer);

  requestAnimationFrame(() => {
    turnPageEl.classList.add("is-active");
    renderTimer = window.setTimeout(renderSpread, 300);
    turnTimer = window.setTimeout(finishTurn, 780);
  });
}

function toggleWriting() {
  if (!isOpen) openDiary();
  isWriting = !isWriting;
  app.classList.toggle("is-writing", isWriting);
  writeButton.textContent = isWriting ? "작성 종료" : "일기를 작성하시오";
}

function openEntryFromCell(event) {
  const cell = event.currentTarget;
  const pageId = cell.dataset.pageId;
  if (!pageId) return;
  const area = Number(cell.dataset.area);
  const store = loadNoteStore();
  const entry = getPageEntries(store, pageId)[area];

  activeEntry = {
    pageId,
    area,
    isMemo: isMemoTextArea(pageId, area),
    readOnly: isEntryLocked(entry),
  };
  selectedPinId = null;
  pinNote.value = "";
  entryModal.classList.add("is-open");
  entryModal.setAttribute("aria-hidden", "false");
  renderEntryModal();
}

function closeEntryModal() {
  entryModal.classList.remove("is-open");
  entryModal.classList.remove("is-memo-mode");
  entryModal.classList.remove("is-read-only");
  entryModal.setAttribute("aria-hidden", "true");
  activeEntry = null;
  selectedPinId = null;
}

function renderEntryModal() {
  const data = currentEntryData();
  if (!data) return;

  const entry = data.entry;
  const readOnly = Boolean(activeEntry?.readOnly);
  const ownerName = entryOwnerName(entry);
  const writer = currentWriter();
  entryModal.classList.toggle("is-memo-mode", Boolean(activeEntry?.isMemo));
  entryModal.classList.toggle("is-read-only", readOnly);
  entryOwner.textContent = readOnly
    ? `${ownerName}이 쓴 기록입니다. 지금 차례는 ${writer.name}이라 수정할 수 없어요.`
    : ownerName
      ? `${ownerName}의 기록입니다.`
      : `지금 차례: ${writer.name}`;
  entryPhotoInput.disabled = readOnly;
  removePhotoButton.disabled = readOnly;
  pinNote.disabled = readOnly;
  deletePinButton.disabled = readOnly;
  emotionButtons.forEach((button) => {
    button.disabled = readOnly;
  });
  photoBoard.classList.toggle("is-read-only", readOnly);
  document.querySelector(".entry-title").textContent = activeEntry?.isMemo ? "메모 작성" : "일상 사진 기록";

  if (activeEntry?.isMemo) {
    photoBoard.classList.remove("has-photo");
    entryPhoto.src = blankImage;
    pinLayer.innerHTML = "";
    selectedPinId = null;
    pinNote.value = entry.memo || "";
    pinNote.placeholder = "메모칸에 들어갈 내용을 적어주세요.";
    return;
  }

  pinNote.placeholder = "그 순간의 감정을 짧게 적어주세요.";
  photoBoard.classList.toggle("has-photo", Boolean(entry.photo));
  entryPhoto.src = entry.photo || blankImage;
  pinLayer.innerHTML = "";

  entry.pins.forEach((pin) => {
    const pinButton = document.createElement("button");
    pinButton.type = "button";
    pinButton.className = "memory-pin";
    pinButton.disabled = readOnly;
    pinButton.dataset.color = pin.color;
    pinButton.dataset.id = pin.id;
    pinButton.style.left = `${pin.x}%`;
    pinButton.style.top = `${pin.y}%`;
    pinButton.setAttribute("aria-label", `${pin.color} 감정 핀`);
    pinButton.classList.toggle("is-selected", pin.id === selectedPinId);
    pinButton.appendChild(createPinIcon());
    pinButton.addEventListener("pointerdown", (event) => startPinDrag(event, pin.id));
    pinButton.addEventListener("click", (event) => {
      event.stopPropagation();
      if (activePinDrag?.didMove) return;
      selectedPinId = pin.id;
      pinNote.value = pin.note || "";
      renderEntryModal();
    });
    pinLayer.appendChild(pinButton);

    if (pin.note) {
      const bubble = document.createElement("p");
      bubble.className = "pin-bubble";
      bubble.textContent = pin.note;
      bubble.dataset.id = pin.id;
      bubble.style.left = `${pin.x}%`;
      bubble.style.top = `${pin.y}%`;
      pinLayer.appendChild(bubble);
    }
  });

  const selected = entry.pins.find((pin) => pin.id === selectedPinId);
  pinNote.value = selected?.note || "";
}

function movePinToPoint(pin, clientX, clientY) {
  const rect = photoBoard.getBoundingClientRect();
  const x = ((clientX - rect.left) / rect.width) * 100;
  const y = ((clientY - rect.top) / rect.height) * 100;
  pin.x = Math.max(4, Math.min(96, x));
  pin.y = Math.max(8, Math.min(96, y));
}

function syncDraggedPinPosition(pin) {
  const pinButton = pinLayer.querySelector(`.memory-pin[data-id="${pin.id}"]`);
  const bubble = pinLayer.querySelector(`.pin-bubble[data-id="${pin.id}"]`);
  if (pinButton) {
    pinButton.style.left = `${pin.x}%`;
    pinButton.style.top = `${pin.y}%`;
  }
  if (bubble) {
    bubble.style.left = `${pin.x}%`;
    bubble.style.top = `${pin.y}%`;
  }
}

function updateSelectedPinBubble(pin) {
  if (!pin) return;
  let bubble = pinLayer.querySelector(`.pin-bubble[data-id="${pin.id}"]`);
  if (!pin.note) {
    bubble?.remove();
    return;
  }

  if (!bubble) {
    bubble = document.createElement("p");
    bubble.className = "pin-bubble";
    bubble.dataset.id = pin.id;
    pinLayer.appendChild(bubble);
  }

  bubble.textContent = pin.note;
  bubble.style.left = `${pin.x}%`;
  bubble.style.top = `${pin.y}%`;
}

function startPinDrag(event, pinId) {
  if (activeEntry?.readOnly) return;
  const data = currentEntryData();
  const pin = data?.entry.pins.find((item) => item.id === pinId);
  if (!data || !pin) return;

  event.preventDefault();
  event.stopPropagation();
  selectedPinId = pinId;
  pinNote.value = pin.note || "";
  activePinDrag = {
    entry: data.entry,
    pin,
    startX: event.clientX,
    startY: event.clientY,
    didMove: false,
  };
  event.currentTarget.setPointerCapture?.(event.pointerId);
  pinLayer.querySelectorAll(".memory-pin").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.id === pinId);
  });
}

function dragSelectedPin(event) {
  if (!activePinDrag) return;

  const distance = Math.hypot(event.clientX - activePinDrag.startX, event.clientY - activePinDrag.startY);
  if (distance > 3) activePinDrag.didMove = true;

  movePinToPoint(activePinDrag.pin, event.clientX, event.clientY);
  syncDraggedPinPosition(activePinDrag.pin);
}

function finishPinDrag() {
  if (!activePinDrag) return;

  saveActiveEntry(activePinDrag.entry);
  renderEntryModal();
  window.setTimeout(() => {
    activePinDrag = null;
  }, 0);
}

function saveUploadedPhoto(event) {
  if (activeEntry?.readOnly) return;
  const file = event.currentTarget.files?.[0];
  const data = currentEntryData();
  if (!file || !data || activeEntry?.isMemo) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    data.entry.photo = String(reader.result);
    saveActiveEntry(data.entry);
    renderEntryModal();
  });
  reader.readAsDataURL(file);
  event.currentTarget.value = "";
}

function removeUploadedPhoto() {
  if (activeEntry?.readOnly) return;
  const data = currentEntryData();
  if (!data || activeEntry?.isMemo || !data.entry.photo) return;

  data.entry.photo = "";
  data.entry.pins = [];
  selectedPinId = null;
  pinNote.value = "";
  saveActiveEntry(data.entry);
  renderEntryModal();
}

function addPin(event) {
  if (activeEntry?.readOnly) return;
  const data = currentEntryData();
  if (!data || activeEntry?.isMemo || !data.entry.photo) return;
  if (event.target.closest(".memory-pin")) return;

  const rect = photoBoard.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  const pin = {
    id: crypto.randomUUID(),
    x: Math.max(4, Math.min(96, x)),
    y: Math.max(6, Math.min(96, y)),
    color: selectedColor,
    note: "",
  };

  data.entry.pins.push(pin);
  selectedPinId = pin.id;
  saveActiveEntry(data.entry);
  renderEntryModal();
  pinNote.focus();
}

function selectEmotion(event) {
  selectedColor = event.currentTarget.dataset.color;
  emotionButtons.forEach((button) => {
    button.classList.toggle("is-selected", button === event.currentTarget);
  });
}

function savePinNote() {
  if (activeEntry?.readOnly) return;
  const data = currentEntryData();
  if (data && activeEntry?.isMemo) {
    data.entry.memo = pinNote.value;
    saveActiveEntry(data.entry, { render: false });
    scheduleNoteRender();
    return;
  }
  if (!data || !selectedPinId) return;
  const pin = data.entry.pins.find((item) => item.id === selectedPinId);
  if (!pin) return;
  pin.note = pinNote.value;
  saveActiveEntry(data.entry, { render: false });
  updateSelectedPinBubble(pin);
  scheduleNoteRender();
}

function deleteSelectedPin() {
  if (activeEntry?.readOnly) return;
  const data = currentEntryData();
  if (!data || !selectedPinId) return;
  activePinDrag = null;
  data.entry.pins = data.entry.pins.filter((pin) => pin.id !== selectedPinId);
  selectedPinId = null;
  pinNote.value = "";
  saveActiveEntry(data.entry);
  renderEntryModal();
}

function setMusicButton(isPlaying) {
  musicToggle.classList.toggle("is-playing", isPlaying);
  musicToggle.setAttribute("aria-label", isPlaying ? "BGM 정지" : "BGM 재생");
  musicToggle.setAttribute("aria-pressed", String(isPlaying));
  musicToggle.querySelector(".music-text").textContent = isPlaying ? "재생중" : "BGM 켜기";
}

async function startMusic() {
  try {
    bgmAudio.volume = 1;
    await bgmAudio.play();
    setMusicButton(true);
  } catch {
    setMusicButton(false);
  }
}

async function toggleMusic() {
  if (bgmAudio.paused) {
    musicManuallyPaused = false;
    await startMusic();
    return;
  }

  musicManuallyPaused = true;
  bgmAudio.pause();
  setMusicButton(false);
}

createNoteAreas();
buildStickerPalette();
buildDots();
updateExchangeStatus();
renderSpread();

openCover.addEventListener("click", openDiary);
closeButton.addEventListener("click", closeDiary);
writeButton.addEventListener("click", toggleWriting);
rosterToggle.addEventListener("click", () => toggleRoster());
rosterClose.addEventListener("click", () => toggleRoster(false));
rosterAdd.addEventListener("submit", (event) => {
  event.preventDefault();
  addExchangeMember(rosterInput.value);
  rosterInput.focus();
});
stickerToggle.addEventListener("click", () => toggleStickerPanel());
stickerClose.addEventListener("click", () => toggleStickerPanel(false));
musicToggle.addEventListener("click", toggleMusic);
leftEdge.addEventListener("click", () => turnSpread(-1));
rightEdge.addEventListener("click", () => turnSpread(1));
sheets.forEach((sheet) => {
  sheet.addEventListener("click", (event) => {
    if (pendingStickerSrc && sheet.dataset.pageId && !event.target.closest(".placed-sticker")) {
      addStickerToSheetAt(sheet, pendingStickerSrc, event.clientX, event.clientY);
      return;
    }
    if (!event.target.closest(".placed-sticker")) selectedStickerId = null;
  });
});
entryClose.addEventListener("click", closeEntryModal);
entryModal.addEventListener("click", (event) => {
  if (event.target === entryModal) closeEntryModal();
});
memoryDetailClose.addEventListener("click", closeMemoryDetail);
memoryDetailModal.addEventListener("click", (event) => {
  if (event.target === memoryDetailModal) closeMemoryDetail();
});
entryPhotoInput.addEventListener("change", saveUploadedPhoto);
removePhotoButton.addEventListener("click", removeUploadedPhoto);
photoBoard.addEventListener("click", addPin);
emotionButtons.forEach((button) => button.addEventListener("click", selectEmotion));
pinNote.addEventListener("input", savePinNote);
deletePinButton.addEventListener("click", deleteSelectedPin);
window.addEventListener("pointermove", dragSelectedPin);
window.addEventListener("pointermove", dragPaletteSticker);
window.addEventListener("pointermove", moveActiveSticker);
window.addEventListener("pointerup", finishPinDrag);
window.addEventListener("pointerup", finishPaletteSticker);
window.addEventListener("pointerup", finishStickerGesture);
window.addEventListener("pointercancel", finishPinDrag);
window.addEventListener("pointercancel", finishPaletteSticker);
window.addEventListener("pointercancel", finishStickerGesture);
window.addEventListener("resize", renderSpread);

document.addEventListener("keydown", (event) => {
  const tag = document.activeElement?.tagName;
  if ((event.key === "Delete" || event.key === "Backspace") && deleteSelectedSticker()) {
    event.preventDefault();
    return;
  }
  if (event.key === "Escape" && entryModal.classList.contains("is-open")) {
    closeEntryModal();
    return;
  }
  if (event.key === "Escape" && memoryDetailModal.classList.contains("is-open")) {
    closeMemoryDetail();
    return;
  }
  if (tag === "TEXTAREA" || tag === "INPUT") return;
  if (event.key === "ArrowLeft") turnSpread(-1);
  if (event.key === "ArrowRight") turnSpread(1);
  if (event.key === "Escape") closeDiary();
});
