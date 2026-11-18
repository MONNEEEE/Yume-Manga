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
				synopsis: "เพราะแมวเป็นสิ่งมีชีวิตที่ประเสริฐกว่ามนุษย์ไงล่ะ (ว่าแต่เมื่อไหร่มันจะเลิกใช้กรูอัพงานแทนมัน...)",
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
										"https://cdn.rapidfile.cc/fn59eCLsG6/%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B8%94...%E0%B8%88%E0%B8%B0%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%A3%E0%B8%B6%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B9%88%E0%B8%B2.png",
										
                ]
            },
            {
                title: "ตอนที่ 2",
                pages: [
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
// STORAGE
// =================================

function readStorage(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
    } catch (error) {
        return fallback;
    }
}

let favorites = readStorage("yumeFavorites", []);

if (!Array.isArray(favorites)) {
    favorites = [];
}

let savedTheme = readStorage("yumeTheme", "light");


// =================================
// SAVE FAVORITES
// =================================

function saveFavorites() {
    localStorage.setItem(
        "yumeFavorites",
        JSON.stringify(favorites)
    );
}


// =================================
// TOAST
// =================================

let toastTimer;

function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}


// =================================
// CARD STAGGER EFFECT
// =================================

function animateCards(container) {

    if (!container) return;

    const cards = container.querySelectorAll(".manga-card");

    cards.forEach((card, index) => {

        card.style.animationDelay = `${Math.min(index * 65, 390)}ms`;

    });

}


// =================================
// CREATE MANGA CARD
// =================================

function createMangaCard(manga) {

    const isFavorite = favorites.includes(manga.id);
    const isImage = /^https?:\/\//i.test(manga.cover);

    const coverContent = isImage
        ? `
            <img
                class="cover-image"
                src="${manga.cover}"
                alt="${manga.title}"
                loading="lazy"
                onerror="this.style.display='none'"
            >
        `
        : `
            <span class="cover-art">
                ${manga.cover}
            </span>
        `;

    return `
        <article class="manga-card"
            data-manga="${manga.id}"
            style="cursor:pointer;">

            <div class="manga-cover ${manga.coverClass}">

                ${coverContent}

                <span class="manga-status">
                    ${manga.status}
                </span>

                <button
                    class="favorite-button ${isFavorite ? "selected" : ""}"
                    data-favorite="${manga.id}"
                    aria-label="เพิ่มหรือลบรายการโปรด"
                    aria-pressed="${isFavorite}"
                    type="button"
                >
                    ${isFavorite ? "♥" : "♡"}
                </button>

            </div>

            <div class="manga-info">

                <h3>${manga.title}</h3>

                <p>${manga.author}</p>

                <div class="manga-meta">
                    <span class="genre">${manga.genre}</span>
                    <span class="rating">${manga.rating}</span>
                </div>

            </div>

        </article>
    `;
}


// =================================
// PAGE TRANSITION
// =================================

function navigateWithFade(url) {

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        location.href = url;
        return;
    }

    document.body.classList.add("page-leaving");

    setTimeout(() => {
        location.href = url;
    }, 450);
}


// =================================
// OPEN DETAIL PAGE
// =================================

document.addEventListener("click", event => {

    if (event.target.closest("[data-favorite]")) return;

    const card = event.target.closest("[data-manga]");

    if (!card) return;

    const id = card.dataset.manga;

    navigateWithFade(
        `detail.html?id=${encodeURIComponent(id)}`
    );

});


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
        emptyMessage.hidden = list.length !== 0;
    }
}


// =================================
// RENDER FAVORITES
// =================================

function renderFavorites() {

    if (!favoritesGrid) return;

    const favoriteManga = mangaData.filter(manga =>
        favorites.includes(manga.id)
    );

    favoritesGrid.innerHTML = favoriteManga
        .map(createMangaCard)
        .join("");

    animateCards(favoritesGrid);

    if (favoritesEmpty) {
        favoritesEmpty.hidden = favoriteManga.length !== 0;
    }
}


// =================================
// GET RATING NUMBER
// =================================

function getRatingNumber(manga) {

    const match = String(manga.rating || "").match(/\d+(\.\d+)?/);

    return match ? Number(match[0]) : 0;
}


// =================================
// ADVANCED SEARCH
// =================================

function searchManga() {

    if (!searchInput) return;

    const keyword = searchInput.value
        .trim()
        .toLowerCase();

    const selectedGenre = genreFilter?.value || "";
    const selectedStatus = statusFilter?.value || "";
    const selectedSort = sortFilter?.value || "default";


    // FILTER

    let results = mangaData.filter(manga => {

        const title = String(manga.title || "").toLowerCase();
        const author = String(manga.author || "").toLowerCase();
        const genre = String(manga.genre || "").toLowerCase();

        const matchesKeyword =
            title.includes(keyword) ||
            author.includes(keyword) ||
            genre.includes(keyword);

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

        results.sort((a, b) => {
            return getRatingNumber(b) - getRatingNumber(a);
        });

    }

    else if (selectedSort === "name") {

        results.sort((a, b) => {
            return String(a.title).localeCompare(
                String(b.title),
                "en"
            );
        });

    }


    // RENDER

    renderManga(results);


    // FILTER SUMMARY

    if (filterSummary) {

        if (!keyword && !selectedGenre && !selectedStatus) {
            filterSummary.textContent =
                `กำลังแสดงมังงะ ${results.length} เรื่อง`;
        } else {
            filterSummary.textContent =
                `พบมังงะ ${results.length} เรื่องจากการค้นหา`;
        }

    }

}


// =================================
// CLEAR FILTERS
// =================================

function clearFilters() {

    if (searchInput) searchInput.value = "";

    if (genreFilter) genreFilter.value = "";

    if (statusFilter) statusFilter.value = "";

    if (sortFilter) sortFilter.value = "default";

    searchManga();

    showToast("ล้างตัวกรองแล้ว 🌸");

}


// =================================
// FAVORITES
// =================================

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites = favorites.filter(item => item !== id);

        showToast("นำออกจากรายการโปรดแล้ว ♡");

    } else {

        favorites.push(id);

        showToast("เพิ่มลงรายการโปรดแล้ว ♥");

    }

    saveFavorites();

    searchManga();
    renderFavorites();
}


// =================================
// FAVORITE BUTTON
// =================================

document.addEventListener("click", event => {

    const button = event.target.closest("[data-favorite]");

    if (!button) return;

    event.preventDefault();
    event.stopPropagation();

    toggleFavorite(Number(button.dataset.favorite));

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
    searchButton.addEventListener("click", searchManga);
}


// =================================
// FILTER EVENTS
// =================================

if (genreFilter) {
    genreFilter.addEventListener("change", searchManga);
}

if (statusFilter) {
    statusFilter.addEventListener("change", searchManga);
}

if (sortFilter) {
    sortFilter.addEventListener("change", searchManga);
}

if (clearFiltersButton) {
    clearFiltersButton.addEventListener("click", clearFilters);
}


// =================================
// DARK MODE
// =================================

function applyTheme(theme) {

    document.body.classList.toggle(
        "dark",
        theme === "dark"
    );

    if (themeButton) {
        themeButton.textContent =
            theme === "dark" ? "☀️" : "🌙";
    }

    localStorage.setItem(
        "yumeTheme",
        JSON.stringify(theme)
    );

}

applyTheme(savedTheme);

if (themeButton) {

    themeButton.addEventListener("click", () => {

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

}


// =================================
// MOBILE MENU
// =================================

if (menuButton && navbar) {

    menuButton.addEventListener("click", () => {

        navbar.classList.toggle("open");

        menuButton.textContent =
            navbar.classList.contains("open") ? "✕" : "☰";

    });

}


// =================================
// CLOSE MENU
// =================================

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        if (navbar) navbar.classList.remove("open");

        if (menuButton) menuButton.textContent = "☰";

    });

});


// =================================
// INITIAL RENDER
// =================================

searchManga();
renderFavorites();

console.log("🌸 Yume Manga Pink Dream is ready!");
