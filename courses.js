/* =========================================================
   ELOMCODE SCHOOL
   CINEMATIC COURSES EXPERIENCE ENGINE

   Founder: Elijah Opomulero
   Motto: Learn. Code. Build. Become.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    createStars();
    createParticles();

    setupCursor();
    setupRevealAnimations();
    setupCourseFilters();
    setupCourseButtons();
    setupSidebar();
    setupMobileMenu();
    setupCoreInteraction();
    setupNavigation();
    setupExperiencePanels();
    setupFooterYear();

    console.log(
        "%c ELOMCODE SCHOOL ",
        "background:#071326;color:#21e3ff;font-size:18px;font-weight:bold;padding:8px 14px;border-radius:8px;"
    );

    console.log(
        "%c Learn. Code. Build. Become. ",
        "color:#a27aff;font-size:13px;font-weight:bold;"
    );

    console.log("Founded by Elijah Opomulero.");

});


/* =========================================================
   GENERAL HELPERS
   ========================================================= */

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

function selectAll(selector, parent = document) {
    return Array.from(parent.querySelectorAll(selector));
}

function selectOne(selector, parent = document) {
    return parent.querySelector(selector);
}


/* =========================================================
   STARS
   ========================================================= */

function createStars() {

    const container = document.getElementById("stars");

    if (!container || container.children.length > 0) {
        return;
    }

    const isSmall = window.innerWidth < 700;
    const amount = prefersReducedMotion
        ? 35
        : (isSmall ? 45 : 110);

    for (let i = 0; i < amount; i++) {

        const star = document.createElement("span");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        const size = Math.random() * 2 + 0.7;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.animationDelay =
            Math.random() * 5 + "s";

        star.style.animationDuration =
            2 + Math.random() * 5 + "s";

        container.appendChild(star);

    }

}


/* =========================================================
   FLOATING PARTICLES
   ========================================================= */

function createParticles() {

    const container = document.getElementById("particles");

    if (!container || container.children.length > 0) {
        return;
    }

    const isSmall = window.innerWidth < 700;

    const amount = prefersReducedMotion
        ? 8
        : (isSmall ? 15 : 30);

    const colors = [
        "#21e3ff",
        "#3685ff",
        "#a27aff",
        "#ff69d4",
        "#ffce78",
        "#46e7a1"
    ];

    for (let i = 0; i < amount; i++) {

        const particle = document.createElement("span");

        particle.className = "particle";

        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";

        const color = colors[
            Math.floor(Math.random() * colors.length)
        ];

        particle.style.background = color;
        particle.style.boxShadow = `0 0 12px ${color}`;

        particle.style.animationDelay =
            Math.random() * 12 + "s";

        particle.style.animationDuration =
            7 + Math.random() * 12 + "s";

        const size = Math.random() * 3 + 2;

        particle.style.width = size + "px";
        particle.style.height = size + "px";

        container.appendChild(particle);

    }

}


/* =========================================================
   CURSOR GLOW
   ========================================================= */

function setupCursor() {

    const cursor = document.querySelector(".cursor-glow");

    if (!cursor) {
        return;
    }

    if (
        window.matchMedia("(pointer: coarse)").matches ||
        prefersReducedMotion
    ) {
        cursor.style.display = "none";
        return;
    }

    let scheduled = false;

    window.addEventListener("mousemove", event => {

        if (scheduled) {
            return;
        }

        scheduled = true;

        requestAnimationFrame(() => {

            cursor.style.left = event.clientX + "px";
            cursor.style.top = event.clientY + "px";
            cursor.style.opacity = "1";

            scheduled = false;

        });

    }, { passive: true });

    document.addEventListener("mouseleave", () => {
        cursor.style.opacity = "0";
    });

}


/* =========================================================
   REVEAL ANIMATIONS
   ========================================================= */

function setupRevealAnimations() {

    const items = selectAll(
        ".course-card, .feature-card, .founder-section, .about-school, .code-universe-section"
    );

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {

        items.forEach(item => {
            item.classList.add("visible");
        });

        return;

    }

    items.forEach(item => {
        item.classList.add("reveal");
    });

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        });

    }, {
        threshold: 0.08,
        rootMargin: "0px 0px -25px 0px"
    });

    items.forEach(item => observer.observe(item));

}


/* =========================================================
   COURSE FILTERS
   ========================================================= */

function setupCourseFilters() {

    const filters = selectAll(".course-filter");
    const cards = selectAll(".course-card");

    if (!filters.length || !cards.length) {
        return;
    }

    filters.forEach(filterButton => {

        filterButton.addEventListener("click", () => {

            filters.forEach(button => {
                button.classList.remove("active");
            });

            filterButton.classList.add("active");

            const filter = filterButton.dataset.filter;

            cards.forEach(card => {

                const status = card.dataset.status;

                let shouldShow = true;

                if (filter === "available") {
                    shouldShow = status === "available";
                }

                if (filter === "coming") {
                    shouldShow = status === "coming";
                }

                card.classList.toggle("hidden", !shouldShow);

            });

            updateVisibleCourseCount();

        });

    });

    updateVisibleCourseCount();

}


function updateVisibleCourseCount() {

    const visibleCards = selectAll(
        ".course-card:not(.hidden)"
    );

    const countElement = document.querySelector(
        ".course-count-number"
    );

    if (countElement) {
        countElement.textContent = visibleCards.length;
    }

}


/* =========================================================
   COURSE BUTTONS
   ========================================================= */

function setupCourseButtons() {

    const cards = selectAll(".course-card");

    cards.forEach(card => {

        const openButton = selectOne(
            ".course-open-button, .coming-course-button",
            card
        );

        if (!openButton) {
            return;
        }

        openButton.addEventListener("click", event => {

            event.preventDefault();

            const courseName = card.dataset.course || "Course";
            const coursePath = card.dataset.href;
            const courseStatus = card.dataset.status;

            if (courseStatus === "coming") {

                openExperiencePanel("comingCourse", {
                    courseName,
                    coursePath
                });

                return;

            }

            if (!coursePath) {

                showToast(
                    "The course page has not been connected yet."
                );

                return;

            }

            window.location.href = coursePath;

        });

        /* Gentle 3D movement on desktop. */

        if (
            !prefersReducedMotion &&
            !window.matchMedia("(pointer: coarse)").matches
        ) {

            card.addEventListener("mousemove", event => {

                if (card.classList.contains("hidden")) {
                    return;
                }

                const rect = card.getBoundingClientRect();

                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                const rotateX =
                    ((y / rect.height) - 0.5) * -3;

                const rotateY =
                    ((x / rect.width) - 0.5) * 3;

                card.style.transform =
                    `translateY(-4px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            });

            card.addEventListener("mouseleave", () => {
                card.style.transform = "";
            });

        }

    });

}


/* =========================================================
   SIDEBAR
   ========================================================= */

function setupSidebar() {

    const sidebarLinks = selectAll(
        ".side-item[href^='#']"
    );

    const allLinks = selectAll(
        ".side-item[href^='#'], .top-link[href^='#']"
    );

    sidebarLinks.forEach(link => {

        link.addEventListener("click", () => {

            const target = link.getAttribute("href");

            if (!target || target === "#") {
                return;
            }

            selectAll(".side-item").forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

            closeMobileMenu();

        });

    });

    if (!("IntersectionObserver" in window)) {
        return;
    }

    const sections = selectAll(
        "#home, #code-universe, #courses, #features, #founder, #about-school"
    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                return;
            }

            const id = entry.target.id;

            selectAll(".side-item").forEach(item => {

                const href = item.getAttribute("href");

                item.classList.toggle(
                    "active",
                    href === "#" + id
                );

            });

            allLinks.forEach(link => {

                const href = link.getAttribute("href");

                link.classList.toggle(
                    "nav-active",
                    href === "#" + id
                );

            });

        });

    }, {
        threshold: 0.25,
        rootMargin: "-90px 0px -35% 0px"
    });

    sections.forEach(section => observer.observe(section));

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

    const toggle = document.getElementById(
        "mobileMenuToggle"
    );

    const navigation = document.querySelector(
        ".top-navigation"
    );

    if (!toggle || !navigation) {
        return;
    }

    toggle.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("open");

        toggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });

    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            closeMobileMenu();
        });

    });

}


function closeMobileMenu() {

    const toggle = document.getElementById(
        "mobileMenuToggle"
    );

    const navigation = document.querySelector(
        ".top-navigation"
    );

    if (navigation) {
        navigation.classList.remove("open");
    }

    if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
    }

}


/* =========================================================
   E-CORE INTERACTION
   ========================================================= */

function setupCoreInteraction() {

    const stage = document.querySelector(".e-core-stage");
    const core = document.querySelector(".e-core");

    if (!stage || !core) {
        return;
    }

    if (
        prefersReducedMotion ||
        window.matchMedia("(pointer: coarse)").matches
    ) {
        return;
    }

    stage.addEventListener("mousemove", event => {

        const rect = stage.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -5;

        const rotateY =
            ((x - centerX) / centerX) * 5;

        core.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    stage.addEventListener("mouseleave", () => {
        core.style.transform = "";
    });

}


/* =========================================================
   SMOOTH NAVIGATION
   ========================================================= */

function setupNavigation() {

    selectAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: prefersReducedMotion ? "auto" : "smooth",
                block: "start"
            });

            closeMobileMenu();

        });

    });

}


/* =========================================================
   EXPERIENCE PANELS
   ========================================================= */

function setupExperiencePanels() {

    const overlay = document.getElementById(
        "experienceOverlay"
    );

    const closeButton = document.getElementById(
        "modalClose"
    );

    if (!overlay || !closeButton) {
        return;
    }

    selectAll("[data-panel]").forEach(button => {

        button.addEventListener("click", () => {

            const panel = button.dataset.panel;

            openExperiencePanel(panel);

            closeMobileMenu();

        });

    });

    closeButton.addEventListener("click", closeExperiencePanel);

    overlay.addEventListener("click", event => {

        if (event.target === overlay) {
            closeExperiencePanel();
        }

    });

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            overlay.classList.contains("open")
        ) {
            closeExperiencePanel();
        }

    });

}


/* =========================================================
   OPEN A PANEL
   ========================================================= */

function openExperiencePanel(panelName, options = {}) {

    const overlay = document.getElementById(
        "experienceOverlay"
    );

    if (!overlay) {
        return;
    }

    const title = document.getElementById("modalTitle");
    const eyebrow = document.getElementById("modalEyebrow");
    const icon = document.getElementById("modalIcon");
    const description = document.getElementById("modalDescription");
    const content = document.getElementById("modalContent");
    const mainButton = document.getElementById("modalMainButton");

    content.innerHTML = "";

    mainButton.onclick = null;
    mainButton.style.display = "inline-flex";

    switch (panelName) {

        case "certificates":

            eyebrow.textContent = "YOUR ACHIEVEMENTS";
            icon.textContent = "✧";
            title.textContent = "Certificate Corner";

            description.textContent =
                "Your progress is worth celebrating. This is where your learning achievements will be brought together.";

            content.innerHTML = `
                <div class="modal-list">

                    <div class="modal-list-item">
                        <div class="modal-list-icon">01</div>
                        <div>
                            <strong>Complete a course</strong>
                            <p>Finish every required lesson in a supported course.</p>
                        </div>
                    </div>

                    <div class="modal-list-item">
                        <div class="modal-list-icon">02</div>
                        <div>
                            <strong>Earn your certificate</strong>
                            <p>Eligible course pages can provide a certificate after all required lessons are completed.</p>
                        </div>
                    </div>

                    <div class="modal-list-item">
                        <div class="modal-list-icon">03</div>
                        <div>
                            <strong>Keep your achievements</strong>
                            <p>This corner can become the central place for viewing and printing your earned certificates.</p>
                        </div>
                    </div>

                </div>

                <div class="modal-notice" style="margin-top:12px;">
                    Certificate collection and verification still need to be connected to the course progress and certificate systems.
                </div>
            `;

            mainButton.innerHTML =
                'Explore Courses <span class="button-arrow">→</span>';

            mainButton.onclick = () => {

                closeExperiencePanel();

                document.getElementById("courses")
                    ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

            };

            break;


        case "challenges":

            eyebrow.textContent = "THINK. SOLVE. GROW.";
            icon.textContent = "⚡";
            title.textContent = "Challenge Zone";

            description.textContent =
                "Test your coding knowledge with a quick question. Choose your answer and see how you do.";

            content.innerHTML = `
                <div class="modal-quiz-question">

                    <strong>
                        Challenge 01: Which HTML tag is used to create a hyperlink?
                    </strong>

                    <button class="quiz-option" type="button" data-answer="wrong">
                        A. &lt;link&gt;
                    </button>

                    <button class="quiz-option" type="button" data-answer="correct">
                        B. &lt;a&gt;
                    </button>

                    <button class="quiz-option" type="button" data-answer="wrong">
                        C. &lt;href&gt;
                    </button>

                    <button class="quiz-option" type="button" data-answer="wrong">
                        D. &lt;url&gt;
                    </button>

                    <div class="quiz-feedback" id="quizFeedback">
                        Select an answer to check your understanding.
                    </div>

                </div>

                <div class="modal-notice" style="margin-top:12px;">
                    This is a starter challenge. The full Challenge Zone can later include difficulty levels, topic-based questions, scores, and saved results.
                </div>
            `;

            mainButton.innerHTML =
                'Try Again <span class="button-arrow">↻</span>';

            mainButton.onclick = () => {

                const options = selectAll(".quiz-option", content);
                const feedback = document.getElementById("quizFeedback");

                options.forEach(option => {
                    option.classList.remove("correct", "incorrect");
                    option.disabled = false;
                });

                if (feedback) {
                    feedback.textContent =
                        "Select an answer to check your understanding.";
                }

            };

            setupChallengeQuestion(content);

            break;


        case "games":

            eyebrow.textContent = "PLAY. LEARN. REPEAT.";
            icon.textContent = "◈";
            title.textContent = "Code Games";

            description.textContent =
                "Try this small interactive game. Click the E-core as many times as you can.";

            content.innerHTML = `
                <div class="modal-notice">
                    Mini Game: E-Core Clicker. Click the glowing E as many times as you can. Your score will increase with every click.
                </div>

                <div class="mini-game-target">
                    <button id="miniGameTarget" type="button" aria-label="Click the E-core">
                        E
                    </button>
                </div>

                <div class="game-score">
                    Your score: <strong id="miniGameScore">0</strong>
                </div>

                <div class="modal-notice" style="margin-top:12px;">
                    This is a small starter game. More games can be added here, such as code puzzles, debugging challenges, and logic games.
                </div>
            `;

            mainButton.innerHTML =
                'Reset Game <span class="button-arrow">↻</span>';

            let score = 0;

            const scoreElement = document.getElementById(
                "miniGameScore"
            );

            const gameTarget = document.getElementById(
                "miniGameTarget"
            );

            if (gameTarget && scoreElement) {

                gameTarget.addEventListener("click", () => {

                    score++;

                    scoreElement.textContent = score;

                    gameTarget.style.transform =
                        `scale(${score % 2 === 0 ? 1.08 : 0.94}) rotate(${score % 2 === 0 ? 5 : -5}deg)`;

                });

            }

            mainButton.onclick = () => {

                score = 0;

                if (scoreElement) {
                    scoreElement.textContent = "0";
                }

                if (gameTarget) {
                    gameTarget.style.transform = "";
                }

            };

            break;


        case "comingCourse": {

            const courseName = options.courseName || "This course";
            const coursePath = options.coursePath || "";

            eyebrow.textContent = "A NEW LEARNING PATH";
            icon.textContent = "</>";
            title.textContent = courseName;

            description.textContent =
                `${courseName} is listed as a planned learning path for ELOMCODE School.`;

            content.innerHTML = `
                <div class="modal-list">

                    <div class="modal-list-item">
                        <div class="modal-list-icon">✦</div>
                        <div>
                            <strong>Course preparation</strong>
                            <p>The course is marked Coming Soon on this page.</p>
                        </div>
                    </div>

                    <div class="modal-list-item">
                        <div class="modal-list-icon">⌘</div>
                        <div>
                            <strong>Practical learning</strong>
                            <p>The planned experience can include explanations, examples, practice, and challenges.</p>
                        </div>
                    </div>

                </div>
            `;

            mainButton.innerHTML =
                'Back to Courses <span class="button-arrow">→</span>';

            mainButton.onclick = () => {
                closeExperiencePanel();

                document.getElementById("courses")
                    ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
            };

            break;

        }


        default:

            eyebrow.textContent = "ELOMCODE EXPERIENCE";
            icon.textContent = "E";
            title.textContent = "Keep Exploring";

            description.textContent =
                "Choose a learning path and continue your journey.";

            content.innerHTML = `
                <div class="modal-notice">
                    More learning experiences are being prepared for ELOMCODE School.
                </div>
            `;

            mainButton.innerHTML =
                'Explore Courses <span class="button-arrow">→</span>';

            mainButton.onclick = () => {

                closeExperiencePanel();

                document.getElementById("courses")
                    ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

            };

    }

    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    const closeButton = document.getElementById("modalClose");

    if (closeButton) {
        closeButton.focus();
    }

}


/* =========================================================
   CHALLENGE QUESTION
   ========================================================= */

function setupChallengeQuestion(container) {

    const options = selectAll(".quiz-option", container);

    const feedback = document.getElementById(
        "quizFeedback"
    );

    options.forEach(option => {

        option.addEventListener("click", () => {

            options.forEach(item => {
                item.classList.remove("correct", "incorrect");
                item.disabled = true;
            });

            const isCorrect =
                option.dataset.answer === "correct";

            if (isCorrect) {

                option.classList.add("correct");

                if (feedback) {
                    feedback.textContent =
                        "Correct! The <a> element creates a hyperlink in HTML.";
                    feedback.style.color = "#82edb8";
                }

                showToast("Correct answer! Great work.");

            } else {

                option.classList.add("incorrect");

                const correctOption = options.find(item => {
                    return item.dataset.answer === "correct";
                });

                if (correctOption) {
                    correctOption.classList.add("correct");
                }

                if (feedback) {
                    feedback.textContent =
                        "Not quite. The correct answer is B: <a>.";
                    feedback.style.color = "#ffcb91";
                }

            }

        });

    });

}


/* =========================================================
   CLOSE PANEL
   ========================================================= */

function closeExperiencePanel() {

    const overlay = document.getElementById(
        "experienceOverlay"
    );

    if (!overlay) {
        return;
    }

    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

}


/* =========================================================
   TOAST MESSAGE
   ========================================================= */

let toastTimer = null;

function showToast(message) {

    const toast = document.getElementById(
        "toastMessage"
    );

    if (!toast) {
        return;
    }

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2800);

}


/* =========================================================
   FOOTER YEAR
   ========================================================= */

function setupFooterYear() {

    const yearElement = document.getElementById(
        "currentYear"
    );

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

}


/* =========================================================
   ELOMCODE SCHOOL EXPERIENCE ENGINE
   ========================================================= */
   
/* =========================================================
   ELOMCODE SCHOOL — FULL PAGE AMBIENT THEME ENGINE
========================================================= */

function setupAmbientLight() {

    const control = document.getElementById("ambientLightControl");
    const toggle = document.getElementById("ambientToggle");
    const menu = document.getElementById("ambientLightOptions");

    if (!control || !toggle || !menu) return;

    const buttons = Array.from(
        menu.querySelectorAll("[data-ambient]")
    );

    const themes = {
        blue: {
            accent: "#3685ff",
            rgb: "54, 133, 255",
            bg: "#071326",
            panel: "#0b1c35",
            card: "#102440",
            header: "#09172b",
            sidebar: "#08152a"
        },

        purple: {
            accent: "#a27aff",
            rgb: "162, 122, 255",
            bg: "#170d2b",
            panel: "#21123d",
            card: "#2b194b",
            header: "#140b26",
            sidebar: "#120921"
        },

        cyan: {
            accent: "#21e3ff",
            rgb: "33, 227, 255",
            bg: "#061c27",
            panel: "#0a2937",
            card: "#103747",
            header: "#061923",
            sidebar: "#051720"
        },

        green: {
            accent: "#46e7a1",
            rgb: "70, 231, 161",
            bg: "#071f1b",
            panel: "#0d3028",
            card: "#124035",
            header: "#071a16",
            sidebar: "#061713"
        },

        pink: {
            accent: "#ff69d4",
            rgb: "255, 105, 212",
            bg: "#260d21",
            panel: "#38132f",
            card: "#471a3c",
            header: "#200b1c",
            sidebar: "#1a0817"
        },

        gold: {
    accent: "#ffce78",
    rgb: "255, 206, 120",
    bg: "#21190c",
    panel: "#332611",
    card: "#423117",
    header: "#1c1509",
    sidebar: "#171107"
},

red: {
    accent: "#ff5268",
    rgb: "255, 82, 104",
    bg: "#260c16",
    panel: "#381321",
    card: "#481a2b",
    header: "#200a12",
    sidebar: "#19070e"
},

orange: {
    accent: "#ff9b54",
    rgb: "255, 155, 84",
    bg: "#261309",
    panel: "#3b1e10",
    card: "#4a2917",
    header: "#201007",
    sidebar: "#190c05"
},

ice: {
    accent: "#b8e7ff",
    rgb: "184, 231, 255",
    bg: "#101d2b",
    panel: "#1b3042",
    card: "#263e52",
    header: "#0d1824",
    sidebar: "#0a1420"
},

teal: {
    accent: "#36d6c4",
    rgb: "54, 214, 196",
    bg: "#071f20",
    panel: "#0c3030",
    card: "#12403f",
    header: "#061919",
    sidebar: "#051514"
},

lavender: {
    accent: "#c4a5ff",
    rgb: "196, 165, 255",
    bg: "#1a1129",
    panel: "#291b40",
    card: "#382650",
    header: "#150d21",
    sidebar: "#10091a"
}
    };

    const storageKey = "elomcode_ambient_theme";

    function applyTheme(name) {

        const theme = themes[name];

        if (!theme) return;

        const root = document.documentElement;
        const body = document.body;

        body.dataset.ambientTheme = name;

        /* Set the theme variables used by courses.css. */

        root.style.setProperty("--ambient-colour", theme.accent);
        root.style.setProperty("--ambient-rgb", theme.rgb);

        root.style.setProperty("--ambient-bg", theme.bg);
        root.style.setProperty("--ambient-panel", theme.panel);
        root.style.setProperty("--ambient-card", theme.card);
        root.style.setProperty("--ambient-header", theme.header);
        root.style.setProperty("--ambient-sidebar", theme.sidebar);

        /*
         * Also update the original CSS variables.
         * This lets existing page elements that use these
         * variables respond to the selected theme.
         */

        root.style.setProperty("--bg", theme.bg);
        root.style.setProperty("--bg-deep", theme.header);
        root.style.setProperty(
            "--panel",
            `rgba(${theme.rgb}, 0.09)`
        );
        root.style.setProperty(
            "--panel-strong",
            theme.panel
        );
        root.style.setProperty("--blue", theme.accent);
        root.style.setProperty("--blue-light", theme.accent);
        root.style.setProperty("--cyan", theme.accent);
        root.style.setProperty("--purple", theme.accent);
        root.style.setProperty("--pink", theme.accent);
        root.style.setProperty("--gold", theme.accent);
        root.style.setProperty(
            "--border",
            `rgba(${theme.rgb}, 0.22)`
        );
        root.style.setProperty(
            "--border-bright",
            `rgba(${theme.rgb}, 0.5)`
        );

        /* Keep the page-wide background in sync. */

        body.style.backgroundColor = theme.bg;

        /* Update the active colour button. */

        buttons.forEach(button => {

            const selected = button.dataset.ambient === name;

            button.classList.toggle("active", selected);

            button.setAttribute(
                "aria-pressed",
                String(selected)
            );

        });

        /* Save the selected theme. */

        try {
            localStorage.setItem(storageKey, name);
        } catch (error) {
            console.warn("Theme preference could not be saved.");
        }
    }

    /* Open and close the menu. */

    toggle.addEventListener("click", event => {

        event.stopPropagation();

        const opening = menu.hidden;

        menu.hidden = !opening;

        toggle.setAttribute(
            "aria-expanded",
            String(opening)
        );

    });

    /* Apply a selected theme. */

    buttons.forEach(button => {

        button.addEventListener("click", event => {

            event.stopPropagation();

            applyTheme(button.dataset.ambient);

            menu.hidden = true;

            toggle.setAttribute("aria-expanded", "false");

        });

    });

    /* Close the menu when clicking outside it. */

    document.addEventListener("click", event => {

        if (!control.contains(event.target)) {

            menu.hidden = true;

            toggle.setAttribute("aria-expanded", "false");

        }

    });

    /* Close the menu using Escape. */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape" && !menu.hidden) {

            menu.hidden = true;

            toggle.setAttribute("aria-expanded", "false");

            toggle.focus();

        }

    });

    /* Restore the saved theme. */

    let savedTheme = "blue";

    try {

        const saved = localStorage.getItem(storageKey);

        if (themes[saved]) {
            savedTheme = saved;
        }

    } catch (error) {
        console.warn("Unable to restore theme preference.");
    }

    applyTheme(savedTheme);
}

/*
 * courses.js already uses a DOMContentLoaded listener
 * near the top of the file. Registering this function
 * here is safe because this listener runs after parsing.
 */

document.addEventListener("DOMContentLoaded", setupAmbientLight);