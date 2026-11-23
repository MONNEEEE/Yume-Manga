/* =================================
   YUME MANGA - JAVASCRIPT
   Pink Dream Effects Edition
================================= */

// ข้อมูลมังงะ

const mangaData = [
    {
        id: 1,
        title: "Tonari No Neko To Koi Shirazu",
        author: "Akinoko",
        genre: "Romantic Comedy / Romance",
        status: "แนะนำ",
        rating: "★ 7.91",
        synopsis: "ชีวิตมัธยมปลายของ มินาโตะ เซโน่ เพิ่งจะเริ่มต้นขึ้น ครูประจำชั้นก็ขอให้เขาช่วยดูแล เนะโกะเซเนะ สาวน้อยที่ดูเหมือนแมว ชอบหลับตลอดเวลา ซึ่งนั่งอยู่แถวถัดไปในห้องเรียนมินาโตะเป็นเด็กขี้อายและไม่กล้าสู้คน เขาไม่เคยคุยกับเธอเลย แถมแทบไม่เคยเห็นหน้าเธอชัดๆ ด้วยซ้ำ แต่เมื่อเขาสะดุ้งกล้าพอที่จะไปปลุกเนะโกะเซเนะ เธอกลับกอดเขาไว้ทันทีโดยที่เขาไม่ได้ตั้งตัว!",
        cover: "https://i.ibb.co/wNn40xKn/IMG-0654.jpg",
        coverClass: "cover-1",

        chapters: [
            {
                title: "ตอนที่ 1",
                pages: [
                    "https://cdn.rapidfile.cc/mLy06hOYK1/IMG_0654.jpeg",
                    "https://cdn.rapidfile.cc/yS0TsQdx1n/IMG_0656.jpeg",
                    "https://cdn.rapidfile.cc/ohxqbGyFfb/IMG_0657.jpeg",
                    "https://cdn.rapidfile.cc/3MzPB7iiVK/IMG_0658.jpeg",
                    "https://cdn.rapidfile.cc/xI4EBJ5DFv/IMG_0659.jpeg",
                    "https://cdn.rapidfile.cc/hsLfxq50Wr/IMG_0660.jpeg",
                    "https://cdn.rapidfile.cc/s4HtSXJ60N/IMG_0692.jpeg",
                    "https://cdn.rapidfile.cc/YdxpkOSrNz/IMG_0693.jpeg",
                    "https://cdn.rapidfile.cc/99pBcD1lBZ/IMG_0694.jpeg",
                    "https://cdn.rapidfile.cc/0XoDh57NKx/IMG_0696.jpeg",
                    "https://cdn.rapidfile.cc/k7EdoXAvVU/IMG_0697.jpeg",
                    "https://cdn.rapidfile.cc/VJq6FcyUWR/IMG_0698.jpeg",
                    "https://cdn.rapidfile.cc/UtzGFmLYmY/IMG_0699.jpeg",
                    "https://cdn.rapidfile.cc/AF6mXaEmyT/IMG_0700.jpeg",
                    "https://cdn.rapidfile.cc/UvXrc3q27A/IMG_0701.jpeg",
                    "https://cdn.rapidfile.cc/q01TeXDHQ6/IMG_0702.jpeg",
                    "https://cdn.rapidfile.cc/qQVhAWU6gG/IMG_0703.jpeg",
                    "https://cdn.rapidfile.cc/FhuF9JRvkw/IMG_0704.jpeg",
                    "https://cdn.rapidfile.cc/sQ7JiNUowK/IMG_0705.jpeg",
                    "https://cdn.rapidfile.cc/tp8iwVl5Ip/IMG_0706.jpeg",
                    "https://cdn.rapidfile.cc/YZu2BgIi9u/IMG_0707.jpeg",
                    "https://cdn.rapidfile.cc/1wlc2I1fgO/IMG_0708.jpeg",
                    "https://cdn.rapidfile.cc/JNfympHIq8/IMG_0709.jpeg",
                    "https://cdn.rapidfile.cc/fJXoqwmuVn/IMG_0710.jpeg",
                    "https://cdn.rapidfile.cc/EYvstRmcHF/IMG_0711.jpeg",
                    "https://cdn.rapidfile.cc/elcqvfMPjE/IMG_0712.jpeg",
                    "https://cdn.rapidfile.cc/Bp7emPtGi1/IMG_0713.jpeg",
                    "https://cdn.rapidfile.cc/tXdE7HLc7p/IMG_0714.jpeg",
                    "https://cdn.rapidfile.cc/ZsJVE5KE7d/IMG_0715.jpeg",
                    "https://cdn.rapidfile.cc/jizfyOfMZK/IMG_0716.jpeg",
                    "https://cdn.rapidfile.cc/6rytmWsIuG/IMG_0717.jpeg",
                    "https://cdn.rapidfile.cc/c37yvxj8tY/IMG_0718.jpeg",
                    "https://cdn.rapidfile.cc/ZTKkE5yKsL/IMG_0719.jpeg",
                    "https://cdn.rapidfile.cc/FK17bsSFHm/IMG_0720.jpeg",
                    "https://cdn.rapidfile.cc/rWD7Trtz2N/IMG_0721.jpeg",
                    "https://cdn.rapidfile.cc/coCqAZUDQC/IMG_0722.jpeg",
                    "https://cdn.rapidfile.cc/FnFB00McWm/IMG_0723.jpeg",
                    "https://cdn.rapidfile.cc/JcyqZ95vvd/IMG_0724.jpeg",
                    "https://cdn.rapidfile.cc/3w5b6msgXW/IMG_0725.jpeg",
                    "https://cdn.rapidfile.cc/fn59eCLsG6/%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B8%94...%E0%B8%88%E0%B8%B0%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%A3%E0%B8%B6%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B9%88%E0%B8%B2.png"
                ]
            },
            {
                title: "ตอนที่ 2",
                pages: [
                    "https://cdn.rapidfile.cc/bV9v6sKknA/IMG_0812.jpeg",
                    "https://cdn.rapidfile.cc/MnYCdishgO/IMG_0736.jpeg",
                    "https://cdn.rapidfile.cc/VMx8LyIMOv/IMG_0737.jpeg",
                    "https://cdn.rapidfile.cc/mqsC4zIuBh/IMG_0738.jpeg",
                    "https://cdn.rapidfile.cc/V1nfr612tl/IMG_0739.jpeg",
                    "https://cdn.rapidfile.cc/0tIbceCu7S/IMG_0740.jpeg",
                    "https://cdn.rapidfile.cc/7v1tjHRuvl/IMG_0741.jpeg",
                    "https://cdn.rapidfile.cc/M8fiSItVjh/IMG_0742.jpeg",
                    "https://cdn.rapidfile.cc/idTsxRmIEY/IMG_0743.jpeg",
                    "https://cdn.rapidfile.cc/EORIpHQuKw/IMG_0744.jpeg",
                    "https://cdn.rapidfile.cc/zatx3TYx63/IMG_0745.jpeg",
                    "https://cdn.rapidfile.cc/BRHbEHkILm/IMG_0746.jpeg",
                    "https://cdn.rapidfile.cc/HXzmgn2uuh/IMG_0747.jpeg",
                    "https://cdn.rapidfile.cc/pSvZsX2DzW/IMG_0748.jpeg",
                    "https://cdn.rapidfile.cc/LHseLzdZV5/IMG_0749.jpeg",
                    "https://cdn.rapidfile.cc/5m8kuqQX7f/IMG_0750.jpeg",
                    "https://cdn.rapidfile.cc/EHyL5aeBGT/IMG_0751.jpeg",
                    "https://cdn.rapidfile.cc/Sk0PAt5LmW/IMG_0752.jpeg",
                    "https://cdn.rapidfile.cc/EIylQew94b/Untitled%20design.png"
                ]
            },
            {
                title: "ตอนที่ 3",
                pages: [
                    "https://example.com/page-001.jpg",
                    "https://example.com/page-002.jpg"
                ]
            }
        ]
    },

    {
        id: 2,
        title: "Moonlight Story",
        author: "Hana Studio",
        genre: "Romance",
        status: "ใหม่",
        rating: "★ 9.2",
        cover: "🌙",
        coverClass: "cover-2",

        chapters: [
            {
                title: "ตอนที่ 1",
                pages: [
                    "https://example.com/page-001.jpg",
                    "https://example.com/page-002.jpg"
                ]
            }
        ]
    },

    {
        id: 3,
        title: "Sweet Adventure",
        author: "Momo Studio",
        genre: "Adventure",
        status: "แนะนำ",
        rating: "★ 9.0",
        cover: "🍑",
        coverClass: "cover-3",

        chapters: [
            {
                title: "ตอนที่ 1",
                pages: []
            }
        ]
    },

    {
        id: 4,
        title: "Little Garden",
        author: "Sora Studio",
        genre: "Slice of Life",
        status: "ใหม่",
        rating: "★ 9.4",
        cover: "🌷",
        coverClass: "cover-4",

        chapters: [
            {
                title: "ตอนที่ 1",
                pages: []
            }
        ]
    },

    {
        id: 5,
        title: "Little Garden",
        author: "Sora Studio",
        genre: "Slice of Life",
        status: "ใหม่",
        rating: "★ 9.4",
        cover: "🌷",
        coverClass: "cover-4",

        chapters: [
            {
                title: "ตอนที่ 1",
                pages: []
            }
        ]
    }
];


// ทำให้ทุกหน้าเข้าถึงข้อมูลชุดเดียวกันได้

window.mangaData = mangaData;


/* =================================
   YUME MANGA - JAVASCRIPT
   PINK DREAM INTERACTION EDITION
================================= */


// =================================
// ELEMENTS
// =================================

const mangaGrid = document.getElementById("manga-grid");
const favoritesGrid = document.getElementById("favorites-grid");

const searchInput = document.getElementById("manga-search");
const searchButton = document.getElementById("search-button");

const resultCount = document.getElementById("result-count");
const emptyMessage = document.getElementById("empty-message");
const favoritesEmpty = document.getElementById("favorites-empty");

const genreFilter = document.getElementById("genre-filter");
const statusFilter = document.getElementById("status-filter");
const sortFilter = document.getElementById("sort-filter");

const clearFiltersButton = document.getElementById("clear-filters");
const filterSummary = document.getElementById("filter-summary");

const themeButton = document.getElementById("theme-toggle");
const menuButton = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");

const toast = document.getElementById("toast");


// =================================
// SAFE STORAGE
// =================================

function readStorage(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value !== null ? JSON.parse(value) : fallback;
    } catch (error) {
        return fallback;
    }
}

function writeStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn("ไม่สามารถบันทึกข้อมูลได้", error);
    }
}


// =================================
// FAVORITES DATA
// =================================

let favorites = readStorage("yumeFavorites", []);

if (!Array.isArray(favorites)) {
    favorites = [];
}

favorites = favorites
    .map(Number)
    .filter(id => mangaData.some(manga => manga.id === id));

let savedTheme = readStorage("yumeTheme", "light");

if (savedTheme !== "dark" && savedTheme !== "light") {
    savedTheme = "light";
}


// =================================
// MOTION SETTINGS
// =================================

const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

function canAnimate() {
    return !reduceMotion.matches;
}


// =================================
// TOAST NOTIFICATION
// =================================

let toastTimer;

function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.remove("show");

    void toast.offsetWidth;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2600);
}


// =================================
// PAGE TRANSITION
// =================================

function navigateWithFade(url) {

    if (!canAnimate()) {
        location.href = url;
        return;
    }

    document.body.classList.add("page-leaving");

    setTimeout(() => {
        location.href = url;
    }, 350);
}


// =================================
// IMAGE CHECK
// =================================

function isImageURL(value) {
    return typeof value === "string" &&
        /^https?:\/\//i.test(value);
}


// =================================
// ESCAPE HTML
// =================================

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}


// =================================
// CREATE MANGA CARD
// =================================

function createMangaCard(manga) {

    const mangaId = Number(manga.id);
    const isFavorite = favorites.includes(mangaId);
    const hasImage = isImageURL(manga.cover);

    const title = escapeHTML(manga.title || "ไม่มีชื่อเรื่อง");
    const author = escapeHTML(manga.author || "ไม่ระบุผู้แต่ง");
    const genre = escapeHTML(manga.genre || "ไม่ระบุแนว");
    const status = escapeHTML(manga.status || "มังงะ");
    const rating = escapeHTML(manga.rating || "ยังไม่มีคะแนน");
    const coverClass = escapeHTML(manga.coverClass || "");

    const coverContent = hasImage
        ? `
            <img
                class="cover-image"
                src="${escapeHTML(manga.cover)}"
                alt="ปก ${title}"
                loading="lazy"
                decoding="async"
            >
        `
        : `
            <span class="cover-art" aria-hidden="true">
                ${escapeHTML(manga.cover || "🌸")}
            </span>
        `;

    return `
        <article
            class="manga-card"
            data-manga="${escapeHTML(mangaId)}"
            role="link"
            tabindex="0"
            aria-label="เปิดเรื่อง ${title}"
        >
            <div class="manga-cover ${coverClass}">
                ${coverContent}

                <span class="manga-status">${status}</span>

                <button
                    class="favorite-button ${isFavorite ? "selected" : ""}"
                    data-favorite="${escapeHTML(mangaId)}"
                    aria-label="${isFavorite ? "นำออกจากรายการโปรด" : "เพิ่มในรายการโปรด"} ${title}"
                    aria-pressed="${isFavorite}"
                    type="button"
                >
                    <span aria-hidden="true">${isFavorite ? "♥" : "♡"}</span>
                </button>
            </div>

            <div class="manga-info">
                <h3>${title}</h3>
                <p>${author}</p>

                <div class="manga-meta">
                    <span class="genre">${genre}</span>
                    <span class="rating">${rating}</span>
                </div>
            </div>
        </article>
    `;
}


// =================================
// CARD ANIMATION
// =================================

function animateCards(container) {

    if (!container || !canAnimate()) return;

    const cards = container.querySelectorAll(".manga-card");

    cards.forEach((card, index) => {

        if (typeof card.animate !== "function") return;

        card.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(14px) scale(.985)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0) scale(1)"
                }
            ],
            {
                duration: 360,
                delay: Math.min(index * 45, 270),
                easing: "cubic-bezier(.2,.75,.25,1)",
                fill: "both"
            }
        );

    });
}


// =================================
// RENDER MANGA
// =================================

function renderManga(list) {

    if (!mangaGrid) return;

    mangaGrid.innerHTML = list
        .map(createMangaCard)
        .join("");

    animateCards(mangaGrid);

    if (resultCount) {
        resultCount.textContent = `${list.length} เรื่อง`;
    }

    if (emptyMessage) {
        emptyMessage.hidden = list.length > 0;
    }

}


// =================================
// RENDER FAVORITES
// =================================

function renderFavorites() {

    if (!favoritesGrid) return;

    const favoriteManga = mangaData.filter(manga =>
        favorites.includes(Number(manga.id))
    );

    favoritesGrid.innerHTML = favoriteManga
        .map(createMangaCard)
        .join("");

    animateCards(favoritesGrid);

    if (favoritesEmpty) {
        favoritesEmpty.hidden = favoriteManga.length > 0;
    }

}


// =================================
// RATING
// =================================

function getRatingNumber(manga) {

    const match = String(manga.rating || "")
        .match(/\d+(\.\d+)?/);

    return match ? Number(match[0]) : 0;

}


// =================================
// SEARCH AND FILTER
// =================================

function searchManga() {

    if (!mangaGrid) return;

    const keyword = (searchInput?.value || "")
        .trim()
        .toLowerCase();

    const selectedGenre = genreFilter?.value || "";
    const selectedStatus = statusFilter?.value || "";
    const selectedSort = sortFilter?.value || "default";

    let results = mangaData.filter(manga => {

        const title = String(manga.title || "").toLowerCase();
        const author = String(manga.author || "").toLowerCase();
        const genre = String(manga.genre || "").toLowerCase();
        const synopsis = String(manga.synopsis || "").toLowerCase();

        const matchesKeyword =
            !keyword ||
            title.includes(keyword) ||
            author.includes(keyword) ||
            genre.includes(keyword) ||
            synopsis.includes(keyword);

        const matchesGenre =
            !selectedGenre ||
            genre.includes(selectedGenre.toLowerCase());

        const matchesStatus =
            !selectedStatus ||
            manga.status === selectedStatus;

        return (
            matchesKeyword &&
            matchesGenre &&
            matchesStatus
        );

    });


    // SORT

    if (selectedSort === "rating") {

        results.sort((a, b) =>
            getRatingNumber(b) - getRatingNumber(a)
        );

    } else if (selectedSort === "name") {

        results.sort((a, b) =>
            String(a.title || "").localeCompare(
                String(b.title || ""),
                "en"
            )
        );

    }


    // UPDATE DISPLAY

    renderManga(results);


    // UPDATE SUMMARY

    if (filterSummary) {

        const hasFilter =
            keyword ||
            selectedGenre ||
            selectedStatus ||
            selectedSort !== "default";

        filterSummary.textContent = hasFilter
            ? `พบมังงะ ${results.length} เรื่องจากการค้นหา`
            : `กำลังแสดงมังงะทั้งหมด ${results.length} เรื่อง`;

    }

}


// =================================
// CLEAR FILTERS
// =================================

function clearFilters() {

    if (searchInput) searchInput.value = "";
    if (genreFilter) genreFilter.value = "";
    if (statusFilter) statusFilter.value = "";
    if (sortFilter) sortFilter.value = "";

    searchManga();

    showToast("ล้างตัวกรองแล้ว 🌸");

}


// =================================
// FAVORITES
// =================================

function saveFavorites() {
    writeStorage("yumeFavorites", favorites);
}

function toggleFavorite(id) {

    id = Number(id);

    if (!mangaData.some(manga => Number(manga.id) === id)) {
        return;
    }

    const isRemoving = favorites.includes(id);

    if (isRemoving) {

        favorites = favorites.filter(item => item !== id);

        showToast("นำออกจากรายการโปรดแล้ว ♡");

    } else {

        favorites.push(id);

        showToast("เพิ่มลงรายการโปรดแล้ว ♥");

    }

    saveFavorites();

    searchManga();
    renderFavorites();


    // HEART ANIMATION

    if (!isRemoving && canAnimate()) {

        document.querySelectorAll(
            `[data-favorite="${id}"]`
        ).forEach(button => {

            if (typeof button.animate !== "function") return;

            button.animate(
                [
                    { transform: "scale(.75)" },
                    { transform: "scale(1.22)" },
                    { transform: "scale(1)" }
                ],
                {
                    duration: 420,
                    easing: "cubic-bezier(.2,.8,.25,1)"
                }
            );

        });

    }

}


// =================================
// CARD CLICK
// =================================

document.addEventListener("click", event => {

    const target = event.target instanceof Element
        ? event.target
        : null;

    if (!target) return;

    const favoriteButton = target.closest("[data-favorite]");

    if (favoriteButton) {

        event.preventDefault();
        event.stopPropagation();

        toggleFavorite(favoriteButton.dataset.favorite);

        return;
    }

    const card = target.closest("[data-manga]");

    if (!card) return;

    navigateWithFade(
        `detail.html?id=${encodeURIComponent(card.dataset.manga)}`
    );

});


// =================================
// KEYBOARD CARD CONTROL
// =================================

document.addEventListener("keydown", event => {

    const target = event.target instanceof Element
        ? event.target
        : null;

    if (!target) return;

    if (target.closest("button, input, select, textarea, a")) {
        return;
    }

    const card = target.closest("[data-manga]");

    if (!card) return;

    if (event.key === "Enter" || event.key === " ") {

        event.preventDefault();

        navigateWithFade(
            `detail.html?id=${encodeURIComponent(card.dataset.manga)}`
        );

    }

});


// =================================
// SEARCH EVENTS
// =================================

if (searchInput) {

    searchInput.addEventListener("input", searchManga);

    searchInput.addEventListener("keydown", event => {

        if (event.key === "Enter") {
            searchManga();
        }

    });

}

if (searchButton) {

    searchButton.addEventListener("click", () => {

        searchManga();

        if (searchInput && searchInput.value.trim()) {
            showToast("ค้นหามังงะเรียบร้อยแล้ว 🔎");
        }

    });

}

searchInput?.addEventListener("keydown", event => {

    if (event.key === "Escape" && searchInput.value) {

        searchInput.value = "";

        searchManga();

        showToast("ล้างคำค้นหาแล้ว 🌷");

    }

});


// =================================
// FILTER EVENTS
// =================================

genreFilter?.addEventListener("change", searchManga);
statusFilter?.addEventListener("change", searchManga);
sortFilter?.addEventListener("change", searchManga);

clearFiltersButton?.addEventListener("click", clearFilters);


// =================================
// DARK MODE
// =================================

function applyTheme(theme) {

    const isDark = theme === "dark";

    document.body.classList.toggle("dark", isDark);

    if (themeButton) {

        themeButton.textContent = isDark ? "☀️" : "🌙";

        themeButton.setAttribute(
            "aria-label",
            isDark ? "เปลี่ยนเป็นโหมดสว่าง" : "เปลี่ยนเป็นโหมดมืด"
        );

        themeButton.setAttribute(
            "aria-pressed",
            String(isDark)
        );

    }

    writeStorage("yumeTheme", isDark ? "dark" : "light");

}

applyTheme(savedTheme);

themeButton?.addEventListener("click", () => {

    const nextTheme = document.body.classList.contains("dark")
        ? "light"
        : "dark";

    applyTheme(nextTheme);

    showToast(
        nextTheme === "dark"
            ? "เปิด Dark Mode แล้ว 🌙"
            : "กลับสู่โหมดสว่างแล้ว ☀️"
    );

});


// =================================
// MENU CONTROL
// =================================

function closeMenu(restoreFocus = false) {

    if (!navbar || !menuButton) return;

    const wasOpen = navbar.classList.contains("open");

    navbar.classList.remove("open");
    menuButton.classList.remove("active");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "เปิดเมนู");

    if (restoreFocus && wasOpen) {
        menuButton.focus();
    }

}

function toggleMenu() {

    if (!navbar || !menuButton) return;

    const isOpen = !navbar.classList.contains("open");

    navbar.classList.toggle("open", isOpen);
    menuButton.classList.toggle("active", isOpen);

    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "ปิดเมนู" : "เปิดเมนู"
    );

}

menuButton?.addEventListener("click", toggleMenu);


// =================================
// CLOSE MENU ON NAVIGATION
// =================================

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", closeMenu);

});


// =================================
// CLOSE MENU OUTSIDE
// =================================

document.addEventListener("click", event => {

    if (!navbar || !menuButton) return;

    const clickedInside =
        navbar.contains(event.target) ||
        menuButton.contains(event.target);

    if (!clickedInside) {
        closeMenu();
    }

});


// =================================
// CLOSE MENU WITH ESCAPE
// =================================

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeMenu(true);
    }

});


// =================================
// ACTIVE NAVIGATION
// =================================

const navLinks = document.querySelectorAll(".nav-link");

const sections = document.querySelectorAll(
    "#home, #manga-list, #favorites"
);

if ("IntersectionObserver" in window) {

    const navObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            navLinks.forEach(link => {

                const isActive =
                    link.getAttribute("href") === `#${entry.target.id}`;

                link.classList.toggle("active", isActive);

            });

        });

    }, {
        rootMargin: "-25% 0px -60% 0px"
    });

    sections.forEach(section => {
        navObserver.observe(section);
    });

}


// =================================
// IMAGE FALLBACK
// =================================

document.addEventListener("error", event => {

    if (!(event.target instanceof HTMLImageElement)) return;

    if (!event.target.matches(".cover-image")) return;

    event.target.style.display = "none";

}, true);


// =================================
// UPDATE WHEN STORAGE CHANGES
// =================================

window.addEventListener("storage", event => {

    if (event.key === "yumeFavorites") {

        favorites = readStorage("yumeFavorites", []);

        if (!Array.isArray(favorites)) {
            favorites = [];
        }

        favorites = favorites
            .map(Number)
            .filter(id => mangaData.some(manga => manga.id === id));

        searchManga();
        renderFavorites();

    }

    if (event.key === "yumeTheme") {

        savedTheme = readStorage("yumeTheme", "light");

        const isDark = savedTheme === "dark";

        document.body.classList.toggle("dark", isDark);

        if (themeButton) {

            themeButton.textContent = isDark ? "☀️" : "🌙";

            themeButton.setAttribute(
                "aria-label",
                isDark ? "เปลี่ยนเป็นโหมดสว่าง" : "เปลี่ยนเป็นโหมดมืด"
            );

            themeButton.setAttribute(
                "aria-pressed",
                String(isDark)
            );

        }

    }

});


// =================================
// INITIAL RENDER
// =================================

searchManga();
renderFavorites();

console.log("🌸 Yume Manga Pink Dream Interaction Edition Ready!");