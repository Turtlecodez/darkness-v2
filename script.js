// about:blank cloaking
function cloak() {
    var currentHost = window.location.hostname;
    var isFramed = window.top !== window.self;

    if (!isFramed) {
        var balls = window.open();
        if (balls) {
            balls.document.write(`<style>body{margin:0;height:100vh}iframe{border:none;width:100%;height:100%;margin:0}</style><iframe src="${currentHost}"></iframe>`);
            balls.document.close();
            window.location.href = "https://google.com";
        } else if (!balls) {
            alert('Opening window for about:blank cloak failed. Please enable popups on this site by clicking the "Pop-ups blocked" button and enabling popups.')
        }
    }
}

function light() {
    document.body.classList.add("light-mode");
    document.querySelector("#logo").src = "./assets/lightness-logo.png"
    document.querySelector("#home-title").innerHTML = 'lightness <span style="font-size: 20px; position: absolute; transform: translateY(30px);">v2</span>'
}

var abbutton = document.querySelector("#aboutblankbutton")
abbutton.addEventListener("click", function() {
    if (abbutton.innerHTML === "Enable") {
        localStorage.setItem("cloak", "true")
        window.location.reload();
    }
    if (abbutton.innerHTML === "Disable") {
        localStorage.setItem("cloak", "false")
        abbutton.innerHTML = "Enable";
    }
})

var lightbutton = document.querySelector("#lightbutton")
lightbutton.addEventListener("click", function() {
    if (lightbutton.innerHTML === "Enable") {
        localStorage.setItem("light", "true")
        window.location.reload();
    }
    if (lightbutton.innerHTML === "Disable") {
        localStorage.setItem("light", "false")
        lightbutton.innerHTML = "Enable";
        window.location.reload();
    }
})

var edubutton = document.querySelector("#edubutton")
edubutton.addEventListener("click", function() {
    if (edubutton.innerHTML === "Enable") {
        localStorage.setItem("edu", "true")
        window.location.reload();
    }
    if (edubutton.innerHTML === "Disable") {
        localStorage.setItem("edu", "false")
        edubutton.innerHTML = "Enable";
        window.location.reload();
    }
})

var homepage = document.querySelector("#home-page");
var gamespage = document.querySelector("#games-page");
var proxiespage = document.querySelector("#proxies-page")
var contactpage = document.querySelector("#contact-page")
var applicationspage = document.querySelector("#applications-page")

document.querySelector("#games-page-link").addEventListener("click", () => {
    homepage.hidden = true;
    proxiespage.hidden = true;
    contactpage.hidden = true;
    applicationspage.hidden = true;
    gamespage.removeAttribute('hidden');
    sessionStorage.setItem("page", "games");
});

document.querySelector("#proxies-page-link").addEventListener("click", () => {
    homepage.hidden = true;
    proxiespage.removeAttribute('hidden');
    gamespage.hidden = true;
    applicationspage.hidden = true;
    contactpage.hidden = true;
    sessionStorage.setItem("page", "proxies");
});

document.querySelector("#contact-page-link").addEventListener("click", () => {
    homepage.hidden = true;
    proxiespage.hidden = true;
    applicationspage.hidden = true;
    gamespage.hidden = true;
    contactpage.removeAttribute('hidden')
    sessionStorage.setItem("page", "contact");
});


document.querySelector(".home-page-link").addEventListener("click", () => {
    homepage.removeAttribute('hidden');
    proxiespage.hidden = true;
    applicationspage.hidden = true;
    contactpage.hidden = true;
    gamespage.hidden = true
    sessionStorage.setItem("page", "home");
});

document.querySelector("#home-page-link").addEventListener("click", () => {
    homepage.removeAttribute('hidden');
    proxiespage.hidden = true;
    applicationspage.hidden = true;
    contactpage.hidden = true;
    gamespage.hidden = true
    sessionStorage.setItem("page", "home");
});

document.querySelector("#applications-page-link").addEventListener("click", () => {
    homepage.hidden = true;
    proxiespage.hidden = true;
    contactpage.hidden = true;
    gamespage.hidden = true;
    applicationspage.removeAttribute('hidden');
    sessionStorage.setItem("page", "applications");
})

function loadHomePage() {
    homepage.removeAttribute('hidden');
    proxiespage.hidden = true;
    applicationspage.hidden = true;
    contactpage.hidden = true;
    gamespage.hidden = true
    sessionStorage.setItem("page", "home");
}

function loadProxiesPage() {
    homepage.hidden = true;
    proxiespage.removeAttribute('hidden');
    gamespage.hidden = true;
    contactpage.hidden = true;
    applicationspage.hidden = true;
    sessionStorage.setItem("page", "proxies");
}

function loadContactPage() {
    homepage.hidden = true;
    proxiespage.hidden = true;
    gamespage.hidden = true;
    applicationspage.hidden = true;
    contactpage.removeAttribute('hidden')
    sessionStorage.setItem("page", "contact");
}

function loadGamesPage() {
    homepage.hidden = true;
    proxiespage.hidden = true;
    contactpage.hidden = true;
    applicationspage.hidden = true;
    gamespage.removeAttribute('hidden');
    sessionStorage.setItem("page", "games");
}

function loadApplicationsPage() {
    homepage.hidden = true;
    proxiespage.hidden = true;
    contactpage.hidden = true;
    gamespage.hidden = true;
    applicationspage.removeAttribute('hidden');
    sessionStorage.setItem("page", "applications");
}


document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("cloak")) {
        localStorage.setItem("cloak", "false");
    };
    if (localStorage.getItem("cloak") === "true") {
        abbutton.innerHTML = "Disable";
        cloak();
    };
    if (!localStorage.getItem("light")) {
        localStorage.setItem("light", "false");
    };
    if (localStorage.getItem("light") === "true") {
        lightbutton.innerHTML = "Disable";
        light();
    };
    if (!localStorage.getItem("edu")) {
        localStorage.setItem("edu", "false");
    };
    if (localStorage.getItem("edu") === "true") {
        edubutton.innerHTML = "Disable";
        education();
    };
    if (!sessionStorage.getItem("page")) {
        sessionStorage.setItem("page", "home");
    };
    let page = sessionStorage.getItem("page");
    if (page === "home") {
        loadHomePage();
    } else if (page === "games") {
        loadGamesPage();
    } else if (page === "contact") {
        loadContactPage();
    } else if (page === "applications") {
        loadApplicationsPage();
    } else if (page === "proxies") {
        loadProxiesPage();
        restoreStoredProxies({
            storageKey: "rammerhead-links",
            linkPrefix: "rammerhead-link",
            detectId: "detect-rammerhead",
            progressId: "rammerhead-progress"
        });

        restoreStoredProxies({
            storageKey: "overcloaked-links",
            linkPrefix: "overcloaked-link",
            detectId: "detect-overcloaked",
            progressId: "overcloaked-progress"
        });

        restoreStoredProxies({
            storageKey: "fern-links",
            linkPrefix: "fern-link",
            detectId: "detect-fern",
            progressId: "fern-progress"
        });
    };
    document.querySelector("#error-message").hidden = true;
    document.querySelector("#error-message-2").hidden = true;
    document.querySelector("#page-footer").removeAttribute('hidden')
});

// this is for the proxy detection scripts and stuff
// everything below here is not my code
document.addEventListener("DOMContentLoaded", () => {

    function buildTestURL(baseUrl) {
        return baseUrl.endsWith("/")
            ? baseUrl + "robots.txt"
            : baseUrl + "/robots.txt";
    }

    async function checkSingleLink(baseUrl) {
        try {
            await fetch(buildTestURL(baseUrl), { mode: "no-cors" });
            return true;
        } catch {
            return false;
        }
    }

    function setupProxyDetector(config) {
        const detectButton = document.getElementById(config.detectId);
        const progressText = document.getElementById(config.progressId);

        if (!detectButton) return;

        detectButton.addEventListener("click", async () => {

            detectButton.hidden = true;
            progressText.hidden = false;

            let urls = [];
            let checked = 0;
            let workingLinks = [];
            let stopped = false;

            try {
                const response = await fetch(config.jsonPath);
                urls = await response.json();
            } catch {
                progressText.textContent = "Failed to load proxy list.";
                return;
            }

            const total = urls.length;
            progressText.textContent = `0/${total} links checked`;

            const concurrency = 25;
            let index = 0;

            async function worker() {
                while (index < total && !stopped) {

                    const currentIndex = index++;
                    const baseUrl = urls[currentIndex];

                    const isValid = await checkSingleLink(baseUrl);

                    if (isValid && !stopped) {
                        workingLinks.push(baseUrl);

                        const linkElement = document.getElementById(
                            `${config.linkPrefix}-${workingLinks.length}`
                        );

                        linkElement.textContent = baseUrl;
                        linkElement.href = baseUrl;
                        linkElement.hidden = false;

                        if (workingLinks.length === 3) {
                            stopped = true;

                            // Save to localStorage
                            localStorage.setItem(
                                config.storageKey,
                                JSON.stringify(workingLinks)
                            );

                            progressText.hidden = true;
                            return;
                        }
                    }

                    checked++;
                    progressText.textContent = `${checked}/${total} links checked`;
                }
            }

            await Promise.all(
                Array.from({ length: concurrency }, worker)
            );

            if (workingLinks.length < 3) {
                progressText.textContent = "Less than 3 working links found.";
            }
        });
    }

    // RAMMERHEAD
    setupProxyDetector({
        detectId: "detect-rammerhead",
        progressId: "rammerhead-progress",
        linkPrefix: "rammerhead-link",
        jsonPath: "./assets/proxy-links/rammerhead.json",
        storageKey: "rammerhead-links"
    });

    // OVERCLOAKED
    setupProxyDetector({
        detectId: "detect-overcloaked",
        progressId: "overcloaked-progress",
        linkPrefix: "overcloaked-link",
        jsonPath: "./assets/proxy-links/overcloaked.json",
        storageKey: "overcloaked-links"
    });

    // FERN
    setupProxyDetector({
        detectId: "detect-fern",
        progressId: "fern-progress",
        linkPrefix: "fern-link",
        jsonPath: "./assets/proxy-links/fern.json",
        storageKey: "fern-links"
    });

});

async function restoreStoredProxies(config) {

    const stored = localStorage.getItem(config.storageKey);
    if (!stored) return;

    const links = JSON.parse(stored);
    if (!Array.isArray(links) || links.length !== 3) return;

    function buildTestURL(baseUrl) {
        return baseUrl.endsWith("/")
            ? baseUrl + "robots.txt"
            : baseUrl + "/robots.txt";
    }

    async function check(baseUrl) {
        try {
            await fetch(buildTestURL(baseUrl), { mode: "no-cors" });
            return true;
        } catch {
            return false;
        }
    }

    const results = await Promise.all(links.map(check));
    const allValid = results.every(Boolean);

    if (!allValid) return;

    const detectButton = document.getElementById(config.detectId);
    if (detectButton) detectButton.hidden = true;

    const progressText = document.getElementById(config.progressId);
    if (progressText) progressText.hidden = true;

    links.forEach((url, i) => {
        const linkElement = document.getElementById(
            `${config.linkPrefix}-${i + 1}`
        );

        if (linkElement) {
            linkElement.textContent = url;
            linkElement.href = url;
            linkElement.hidden = false;
        }
    });
}

// database shit that ngl i do not understand at all
const SUPABASE_URL = "https://orednxqxmpmibmfrkqnk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yZWRueHF4bXBtaWJtZnJrcW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4NDQzNzgsImV4cCI6MjA4NjQyMDM3OH0.T7qg9Wd8_z80zxGwh4SGCrSMZ3m5agIGxBYb2n2TW3U";

const TABLE_NAME = "submissions";
const RESPONSES_TABLE = "responses";

const COLUMN_CONTENT = "content";
const COLUMN_TYPE = "type";
const COLUMN_DEVICE = "device_id";

async function loadMessage() {
    console.log("Fetching site message...");

    const { data, error } = await supabase
        .from("messages")
        .select("message, date")
        .limit(1)
        .single();

    if (error) {
        console.error("Message fetch error:", error);
        return;
    }

    console.log("Message loaded:", data);

    document.getElementById("message-text").textContent = data.date + " - " + data.message;;
}

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function generateDeviceID() {
    console.log("Generating new deviceID...");
    const array = new Uint8Array(9);
    crypto.getRandomValues(array);
    let b64 = btoa(String.fromCharCode(...array));
    const id = b64.replace(/\+/g, "-").replace(/\//g, "_");
    console.log("Generated deviceID:", id);
    return id;
}

function getDeviceID() {
    let id = localStorage.getItem("deviceID");
    if (!id) {
        console.log("No existing deviceID found.");
        id = generateDeviceID();
        localStorage.setItem("deviceID", id);
        console.log("Stored deviceID in localStorage.");
    } else {
        console.log("Existing deviceID found:", id);
    }
    return id;
}

const deviceID = getDeviceID();

async function send(type, value, button) {
    console.log("Sending submission:", { type, value });

    value = value.trim().substring(0, 500);

    if (!value) {
        button.innerHTML = "Cannot be empty";
        setTimeout(() => button.innerHTML = "Submit", 2000);
        return;
    }

    const { error, status } = await supabase
        .from(TABLE_NAME)
        .insert([{
            [COLUMN_CONTENT]: value,
            [COLUMN_TYPE]: type,
            [COLUMN_DEVICE]: deviceID
        }]);

    console.log("Insert status:", status);

    button.removeAttribute("hidden");

    if (error) {
        console.error("Submission error:", error);
        button.innerHTML = "Request failed.";
    } else {
        console.log("Submission successful.");
        button.innerHTML = "Success! Text sent.";
    }

    setTimeout(() => button.hidden = true, 3000);
}

async function checkResponsesOnce() {
    console.log("Using deviceID:", deviceID);

    const { data, error, status } = await supabase
        .from(RESPONSES_TABLE)
        .select("id, message, seen, device_id")
        .eq("device_id", deviceID)
        .eq("seen", false)
        .order("created_at", { ascending: true });

    console.log("Fetch status:", status);

    if (error) {
        console.error("FETCH ERROR:", error);
        console.log("checking response table failed");
        return;
    }

    console.log("Fetched rows:", data);

    if (!data || data.length === 0) {
        console.log("No unseen responses found.");
        return;
    }

    console.log(`Found ${data.length} unseen response(s).`);

    data.forEach(r => {
        console.log("displaying popup for ID:", r.id);
        showPopup(r.message);
    });

    const ids = data.map(r => r.id);
    console.log("marking IDs as seen:", ids);

    const { error: updateError, status: updateStatus } = await supabase
        .from(RESPONSES_TABLE)
        .update({ seen: true })
        .in("id", ids);

    console.log("update status:", updateStatus);

    if (updateError) {
        console.error("error:", updateError);
    } else {
        console.log("response(s) successfully marked as seen.");
    }

}

function showPopup(message) {

    const popup = document.createElement("div");
    popup.innerText = "from the darkness admins: " + message;

    Object.assign(popup.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#333",
        color: "white",
        padding: "12px 18px",
        borderRadius: "6px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        zIndex: 9999,
        maxWidth: "300px",
        fontFamily: "sans-serif"
    });

    document.body.appendChild(popup);
    console.log("popup added to DOM.");

    setTimeout(() => {
        popup.remove();
        console.log("popup removed from DOM.");
    }, 5000);
}

document.getElementById("proxy-button").onclick = () => {
    const value = document.getElementById("proxy-box").value;
    send("proxy", value, document.getElementById("button-feedback-p"));
    document.getElementById("proxy-box").value = "";
};

document.getElementById("game-req-button").onclick = () => {
    const value = document.getElementById("game-req").value;
    send("game", value, document.getElementById("button-feedback-p"));
    document.getElementById("game-req").value = "";
};

document.getElementById("report-button").onclick = () => {
    const value = document.getElementById("report-bug").value;
    send("bug", value, document.getElementById("button-feedback-p"));
    document.getElementById("report-bug").value = "";
};

document.getElementById("contact-button").onclick = () => {
    const value = document.getElementById("contact-box").value;
    send("contact", value, document.getElementById("button-feedback-p"));
    document.getElementById("contact-box").value = "";
};

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded.");
    getDeviceID();
    checkResponsesOnce();
    loadMessage();
});

function education() {
    const replacements = {
        "games": "resources",
        "proxy": "tool",
        "proxies": "tools",
        "game": "resource",
    };

    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    let node;

    while ((node = walker.nextNode())) {
        let text = node.nodeValue;

        for (const [bad, good] of Object.entries(replacements)) {
            const regex = new RegExp(`\\b${bad}\\b`, "g");
            text = text.replace(regex, good);
        }

        node.nodeValue = text;
    }
    document.querySelector("#footer-text").innerHTML = ("this educational site created by turtle boi")
}