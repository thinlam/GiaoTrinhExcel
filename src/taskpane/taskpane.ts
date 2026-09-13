import "./taskpane.css";

import {
  lessons
} from "../lessons/lessons";

import type {
  Lesson,
  LessonLevel,
  LessonSection
} from "../types/lesson.types";


// =========================================================
// CONFIG
// =========================================================

interface LevelConfig {
  description: string;
  className: string;
}


const LEVELS: Record<LessonLevel, LevelConfig> = {

  "CƠ BẢN": {
    description: "Kiến thức nền tảng",
    className: "level-basic"
  },

  "TRUNG CẤP": {
    description: "Kỹ năng xử lý bảng tính",
    className: "level-intermediate"
  },

  "NÂNG CAO": {
    description: "Kỹ năng Excel chuyên nghiệp",
    className: "level-advanced"
  },

  "TRA CỨU": {
    description: "Mẹo, lỗi và kỹ thuật cần nhớ",
    className: "level-reference"
  },

  "THỰC HÀNH": {
    description: "Bài tập và kiểm tra kỹ năng",
    className: "level-practice"
  }

};


const LEVEL_ORDER: LessonLevel[] = [
  "CƠ BẢN",
  "TRUNG CẤP",
  "NÂNG CAO",
  "TRA CỨU",
  "THỰC HÀNH"
];


// =========================================================
// DOM
// =========================================================

let appBody: HTMLElement;

let sideloadMessage: HTMLElement;

let homeView: HTMLElement;

let lessonView: HTMLElement;

let lessonGroups: HTMLElement;

let searchResultInfo: HTMLElement;

let lessonContent: HTMLElement;

let searchInput: HTMLInputElement;

let clearSearchButton: HTMLButtonElement;


let searchSection: HTMLElement | null = null;


let currentKeyword = "";

let appStarted = false;


// =========================================================
// START APPLICATION
// Không phụ thuộc Office.onReady để tránh giữ màn hình loading
// nếu Office.js chậm khởi tạo — DOM sẵn sàng là render được.
// =========================================================

function startApplication(): void {

  if (appStarted) {
    return;
  }

  appStarted = true;


  try {

    // 1. Lấy DOM bắt buộc của Giáo Trình.
    initializeDOM();

    // 2. Gắn event.
    bindEvents();

    // 3. Hiện ứng dụng.
    showApplication();

    // 4. Render danh sách bài học.
    renderHome();


    console.log(
      "✅ Giao Trình Excel started successfully."
    );

  } catch (error) {

    console.error(
      "❌ Giao Trình Excel startup error:",
      error
    );

    showStartupError(
      error
    );

  }

}


// =========================================================
// DOM READY
// =========================================================

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    startApplication,
    {
      once: true
    }
  );

} else {

  startApplication();

}


// =========================================================
// STARTUP ERROR
// =========================================================

function showStartupError(
  error: unknown
): void {

  const message =
    error instanceof Error
      ? error.message
      : String(error);


  const loadingElement =
    document.getElementById(
      "sideload-msg"
    );


  const bodyElement =
    document.getElementById(
      "app-body"
    );


  if (bodyElement) {

    bodyElement.style.display =
      "none";

  }


  if (!loadingElement) {

    return;

  }


  loadingElement.style.display =
    "block";


  loadingElement.innerHTML = `

    <div
      style="
        max-width: 420px;
        margin: 48px auto;
        padding: 24px;
        text-align: center;
        font-family: Segoe UI, Arial, sans-serif;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
      "
    >

      <div
        style="
          font-size: 34px;
          line-height: 1;
          margin-bottom: 14px;
        "
        aria-hidden="true"
      >
        ⚠️
      </div>


      <h3
        style="
          margin: 0 0 8px;
          color: #111827;
          font-size: 17px;
        "
      >
        Không thể tải Giáo Trình Excel
      </h3>


      <p
        style="
          margin: 0;
          color: #667085;
          font-size: 13px;
          line-height: 1.6;
          word-break: break-word;
        "
      >
        ${escapeHtml(message)}
      </p>

    </div>

  `;

}


// =========================================================
// INIT DOM
// =========================================================

function initializeDOM(): void {

  appBody =
    getElement(
      "app-body"
    );


  sideloadMessage =
    getElement(
      "sideload-msg"
    );


  homeView =
    getElement(
      "home-view"
    );


  lessonView =
    getElement(
      "lesson-view"
    );


  lessonGroups =
    getElement(
      "lesson-groups"
    );


  searchResultInfo =
    getElement(
      "search-result-info"
    );


  lessonContent =
    getElement(
      "lesson-content"
    );


  searchInput =
    getElement<HTMLInputElement>(
      "search"
    );


  clearSearchButton =
    getElement<HTMLButtonElement>(
      "clear-search"
    );


  searchSection =
    document.querySelector<HTMLElement>(
      ".search-section"
    );

}


function getElement<T extends HTMLElement = HTMLElement>(id: string): T {

  const element =
    document.getElementById(
      id
    ) as T | null;


  if (!element) {

    throw new Error(
      `Không tìm thấy phần tử #${id} trong taskpane.html`
    );

  }


  return element;

}


// =========================================================
// SHOW APPLICATION
// =========================================================

function showApplication(): void {

  sideloadMessage.style.display =
    "none";


  appBody.style.display =
    "flex";

}


// =========================================================
// EVENTS
// =========================================================

function bindEvents(): void {

  searchInput.addEventListener(
    "input",
    handleSearch
  );


  clearSearchButton.addEventListener(
    "click",
    clearSearch
  );

}


// =========================================================
// NORMALIZE TEXT (bỏ dấu tiếng Việt để search không phân biệt dấu)
// =========================================================

function normalizeText(
  value: string
): string {

  return value

    .normalize(
      "NFD"
    )

    .replace(
      /[\u0300-\u036f]/g,
      ""
    )

    .replace(
      /đ/g,
      "d"
    )

    .replace(
      /Đ/g,
      "D"
    )

    .toLowerCase()

    .trim();

}


// =========================================================
// SEARCH
// =========================================================

function handleSearch(): void {

  currentKeyword =
    searchInput.value.trim();


  renderHome();

}


// =========================================================
// CLEAR SEARCH
// =========================================================

function clearSearch(): void {

  currentKeyword =
    "";


  searchInput.value =
    "";


  renderHome();


  searchInput.focus();

}


// =========================================================
// FILTER
// Tìm theo: title, description, level, keywords,
// và cả title/nội dung từng section (bao gồm shortcut,
// tên hàm Excel đã được nhúng trong section content).
// =========================================================

function getFilteredLessons():
Lesson[] {

  if (!currentKeyword) {

    return lessons;

  }


  const keyword =
    normalizeText(
      currentKeyword
    );


  return lessons.filter(
    (
      lesson: Lesson
    ) => {

      const lessonText =
        normalizeText(
          [
            lesson.title,
            lesson.description,
            lesson.level,
            ...lesson.keywords
          ].join(
            " "
          )
        );


      if (
        lessonText.includes(
          keyword
        )
      ) {

        return true;

      }


      const sectionText =
        normalizeText(
          lesson.sections
            .map(
              (section: LessonSection) =>
                `${section.title} ${section.content}`
            )
            .join(
              " "
            )
        );


      return sectionText.includes(
        keyword
      );

    }
  );

}


// =========================================================
// HOME
// =========================================================

function renderHome(): void {

  const filtered =
    getFilteredLessons();


  renderSearchInfo(
    filtered.length
  );


  renderLessonGroups(
    filtered
  );

}


function renderSearchInfo(
  count: number
): void {

  if (!currentKeyword) {

    searchResultInfo.innerHTML =
      "";

    return;

  }


  searchResultInfo.innerHTML = `

    <div class="search-result-message">
      Tìm thấy <strong>${count}</strong> bài học cho
      "<strong>${escapeHtml(currentKeyword)}</strong>"
    </div>

  `;

}


function renderLessonGroups(
  filteredLessons: Lesson[]
): void {

  if (filteredLessons.length === 0) {

    lessonGroups.innerHTML =
      renderEmptyState();

    return;

  }


  lessonGroups.innerHTML =
    LEVEL_ORDER
      .map(
        (level) =>
          renderLevel(
            level,
            filteredLessons.filter(
              (lesson) =>
                lesson.level === level
            )
          )
      )
      .join(
        ""
      );


  bindLessonCardEvents();

}


function renderLevel(
  level: LessonLevel,
  levelLessons: Lesson[]
): string {

  if (levelLessons.length === 0) {

    return "";

  }


  const config =
    LEVELS[level];


  return `

    <section class="level-group ${config.className}">

      <div class="level-group-header">

        <span class="level-badge">
          ${level}
        </span>

        <span class="level-description">
          ${config.description}
        </span>

      </div>

      <div class="lesson-card-list">

        ${levelLessons
          .map(
            (lesson) =>
              renderLessonCard(
                lesson
              )
          )
          .join(
            ""
          )}

      </div>

    </section>

  `;

}


function renderLessonCard(
  lesson: Lesson
): string {

  return `

    <button
      type="button"
      class="lesson-card"
      data-lesson-id="${lesson.id}"
    >

      <span class="lesson-card-index">
        ${String(lesson.part).padStart(2, "0")}
      </span>

      <span class="lesson-card-body">

        <span class="lesson-card-title">
          ${escapeHtml(lesson.title)}
        </span>

        <span class="lesson-card-description">
          ${escapeHtml(lesson.description)}
        </span>

      </span>

      <span class="lesson-card-arrow" aria-hidden="true">
        →
      </span>

    </button>

  `;

}


function renderEmptyState():
string {

  return `

    <div class="empty-state">

      <div class="empty-state-icon">
        🔍
      </div>

      <p class="empty-state-title">
        Không tìm thấy bài học phù hợp
      </p>

      <p class="empty-state-description">
        Thử tìm với từ khoá khác, ví dụ: Workbook, SUM, Ctrl + S, Format Cells...
      </p>

      <button
        type="button"
        id="empty-clear-search"
        class="empty-state-button"
      >
        Xoá tìm kiếm
      </button>

    </div>

  `;

}


// =========================================================
// LESSON CARD EVENTS
// =========================================================

function bindLessonCardEvents(): void {

  lessonGroups
    .querySelectorAll<HTMLButtonElement>(
      ".lesson-card"
    )
    .forEach(
      (card) => {

        card.addEventListener(
          "click",
          () =>
            handleLessonClick(
              card.dataset.lessonId
            )
        );

      }
    );


  const emptyClearButton =
    lessonGroups.querySelector<HTMLButtonElement>(
      "#empty-clear-search"
    );


  emptyClearButton?.addEventListener(
    "click",
    clearSearch
  );

}


function handleLessonClick(
  lessonId?: string
): void {

  if (!lessonId) {

    return;

  }


  const lesson =
    lessons.find(
      (item) =>
        item.id === lessonId
    );


  if (!lesson) {

    return;

  }


  showLesson(
    lesson
  );

}


// =========================================================
// LESSON DETAIL
// =========================================================

function showLesson(
  lesson: Lesson
): void {

  renderLessonHeader(
    lesson
  );


  renderLessonSections(
    lesson.sections
  );


  if (
    searchSection
  ) {

    searchSection.style.display =
      "none";

  }


  homeView.style.display =
    "none";


  lessonView.style.display =
    "flex";


  lessonView.scrollTop =
    0;

}


function renderLessonHeader(
  lesson: Lesson
): void {

  const partElement =
    document.getElementById(
      "lesson-part"
    );


  const levelElement =
    document.getElementById(
      "lesson-level"
    );


  const titleElement =
    document.getElementById(
      "lesson-title"
    );


  const descriptionElement =
    document.getElementById(
      "lesson-description"
    );


  if (partElement) {

    partElement.textContent =
      `PHẦN ${lesson.part}`;

  }


  if (levelElement) {

    levelElement.textContent =
      lesson.level;


    levelElement.className =
      `lesson-level-badge ${getLevelBadgeClass(lesson.level)}`;

  }


  if (titleElement) {

    titleElement.textContent =
      lesson.title;

  }


  if (descriptionElement) {

    descriptionElement.textContent =
      lesson.description;

  }

}


function getLevelBadgeClass(
  level: LessonLevel
): string {

  return (
    LEVELS[level]?.className ||
    "level-basic"
  );

}


function renderLessonSections(
  sections: LessonSection[]
): void {

  lessonContent.innerHTML =
    sections
      .map(
        (section) => `

          <article class="lesson-section">

            <h3 class="lesson-section-title">
              ${escapeHtml(section.title)}
            </h3>

            <div class="lesson-section-content">
              ${section.content}
            </div>

          </article>

        `
      )
      .join(
        ""
      );

}


// =========================================================
// BACK TO HOME
// =========================================================

function showHomeView(): void {

  lessonView.style.display =
    "none";


  homeView.style.display =
    "flex";


  if (
    searchSection
  ) {

    searchSection.style.display =
      "flex";

  }

}


document
  .addEventListener(
    "click",
    (event) => {

      const target =
        event.target as HTMLElement;


      if (
        target.closest(
          "#back-button, #back-button-bottom"
        )
      ) {

        showHomeView();

      }

    }
  );


// =========================================================
// ESCAPE HTML
// =========================================================

function escapeHtml(
  value: string
): string {

  const div =
    document.createElement(
      "div"
    );


  div.textContent =
    value;


  return div.innerHTML;

}