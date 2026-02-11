document.addEventListener("DOMContentLoaded", () => {
    if (!sessionStorage.getItem("page")) {
        sessionStorage.setItem("page", "home");
    };
    let page = sessionStorage.getItem("page");
    if (page === "home") {
        loadHomePage();
    } else if (page === "games") {
        loadGamesPage();
    };
});

document.querySelector("#games-page-link").addEventListener("click", () => {
    document.querySelector("#home-page").hidden = true;
    document.querySelector("#games-page").removeAttribute('hidden');
    sessionStorage.setItem("page", "games");
});

document.querySelector(".home-page-link").addEventListener("click", () => {
    document.querySelector("#games-page").hidden = true;
    document.querySelector("#home-page").removeAttribute('hidden');
    sessionStorage.setItem("page", "home");
});

function loadHomePage() {
    document.querySelector("#games-page").hidden = true;
    document.querySelector("#home-page").removeAttribute('hidden');
}

function loadGamesPage() {
    document.querySelector("#home-page").hidden = true;
    document.querySelector("#games-page").removeAttribute('hidden');
}