/* ======================================================
   ELOMCODE PLAYGROUND ENGINE
   Founder: Elijah Opomulero
   ====================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    Playground.init();
});


const Playground = (() => {

    const STORAGE_KEY = "elomcode_playground_projects_v1";
    const AUTOSAVE_KEY = "elomcode_playground_autosave_v1";

    const $ = selector => document.querySelector(selector);
    const $$ = selector => Array.from(document.querySelectorAll(selector));

    const state = {
        activeEditor: "html",
        projects: {},
        currentProjectId: null,
        debounceTimer: null,
        runTimer: null,
        hasRun: false,
        wrapEnabled: false,
        previewRunId: 0
    };


    const starterTemplates = {

        blank: {
            name: "Untitled Project",

            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Project</title>
</head>
<body>

    <h1>Hello, world!</h1>
    <p>Start building something amazing.</p>

</body>
</html>`,

            css: `body {
    font-family: Arial, sans-serif;
    padding: 30px;
    line-height: 1.6;
}

h1 {
    color: #1769ff;
}`,

            js: `console.log("Welcome to my project!");`
        },


        website: {
            name: "My Personal Website",

            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Website</title>
</head>
<body>

    <header class="site-header">
        <a class="logo" href="#">MY SPACE</a>

        <nav>
            <a href="#about">About</a>
            <a href="#work">My Work</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <main>
        <section class="hero">
            <span class="eyebrow">WELCOME TO MY SPACE</span>
            <h1>Ideas become <span>reality.</span></h1>

            <p>
                I am learning to build meaningful things
                with code, creativity, and curiosity.
            </p>

            <a class="button" href="#work">Explore My Work</a>
        </section>

        <section id="about" class="content-section">
            <h2>A little about me</h2>
            <p>
                This is where your story, interests,
                and ambitions can live.
            </p>
        </section>

        <section id="work" class="content-section">
            <h2>Things I am building</h2>

            <div class="cards">
                <article>
                    <h3>First Project</h3>
                    <p>A new idea brought to life.</p>
                </article>

                <article>
                    <h3>Next Project</h3>
                    <p>Another idea waiting to happen.</p>
                </article>
            </div>
        </section>

        <section id="contact" class="content-section">
            <h2>Let's connect</h2>
            <p>Replace this text with your contact information.</p>
        </section>
    </main>

    <footer>Made with curiosity and code.</footer>

</body>
</html>`,

            css: `* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    color: #17223b;
    background: #f5f8ff;
    line-height: 1.7;
}

.site-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 20px 7%;
    background: white;
    border-bottom: 1px solid #e3e9f3;
}

.logo {
    color: #1769ff;
    font-weight: 900;
    text-decoration: none;
    letter-spacing: 1px;
}

nav {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

nav a {
    color: #51617b;
    text-decoration: none;
    font-size: 14px;
}

.hero {
    padding: 100px 8%;
    background:
        radial-gradient(circle at 85% 20%, #d8e7ff, transparent 35%),
        linear-gradient(120deg, #fff, #edf4ff);
}

.eyebrow {
    color: #1769ff;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 2px;
}

.hero h1 {
    max-width: 800px;
    margin: 18px 0;
    font-size: clamp(40px, 7vw, 75px);
    line-height: 1.05;
}

.hero h1 span {
    color: #1769ff;
}

.hero p {
    max-width: 540px;
    color: #66748b;
}

.button {
    display: inline-block;
    margin-top: 18px;
    padding: 12px 20px;
    border-radius: 8px;
    background: #1769ff;
    color: white;
    text-decoration: none;
}

.content-section {
    padding: 55px 8%;
}

.content-section h2 {
    font-size: 28px;
}

.content-section p {
    color: #66748b;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
}

.cards article {
    padding: 20px;
    border: 1px solid #e1e8f2;
    border-radius: 12px;
    background: white;
}

footer {
    padding: 25px;
    text-align: center;
    background: #101d35;
    color: white;
}

@media (max-width: 600px) {
    .site-header {
        align-items: flex-start;
        flex-direction: column;
    }

    nav {
        gap: 13px;
    }

    .hero {
        padding: 70px 7%;
    }
}`,

            js: `console.log("My personal website is running!");

const heading = document.querySelector(".hero h1");

if (heading) {
    heading.addEventListener("click", () => {
        console.log("You clicked the main heading!");
    });
}`
        },


        portfolio: {
            name: "My Developer Portfolio",

            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
</head>
<body>

    <header>
        <a class="brand" href="#">MY PORTFOLIO</a>
        <span class="availability">● Available for projects</span>
    </header>

    <main>
        <section class="intro">
            <p class="eyebrow">DESIGNER · DEVELOPER · CREATOR</p>

            <h1>Building digital<br><span>experiences.</span></h1>

            <p class="description">
                I turn ideas into useful, beautiful digital products.
                This portfolio is where my journey comes to life.
            </p>

            <a class="contact-button" href="#projects">Explore my work ↓</a>
        </section>

        <section id="projects" class="projects">
            <p class="eyebrow">SELECTED WORK</p>
            <h2>Things I have created.</h2>

            <div class="project-grid">
                <article class="project">
                    <span>01 / WEB</span>
                    <h3>Project One</h3>
                    <p>A website built to solve a problem.</p>
                </article>

                <article class="project">
                    <span>02 / DESIGN</span>
                    <h3>Project Two</h3>
                    <p>A creative idea made useful.</p>
                </article>

                <article class="project">
                    <span>03 / EXPERIMENT</span>
                    <h3>Project Three</h3>
                    <p>An experiment that taught me something new.</p>
                </article>
            </div>
        </section>
    </main>

    <footer>Made with purpose. © <span id="year"></span></footer>

</body>
</html>`,

            css: `* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background: #08111f;
    color: #f2f6ff;
    font-family: Arial, sans-serif;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    padding: 25px 7%;
    border-bottom: 1px solid #1d2d43;
}

.brand {
    color: #7bdcff;
    font-weight: 900;
    letter-spacing: 1px;
    text-decoration: none;
}

.availability {
    color: #6fe2a8;
    font-size: 12px;
}

.intro {
    padding: 90px 8%;
    background:
        radial-gradient(circle at 85% 25%, #192b53, transparent 40%);
}

.eyebrow {
    color: #7bdcff;
    font-size: 10px;
    letter-spacing: 2px;
    font-weight: bold;
}

h1 {
    font-size: clamp(42px, 7vw, 76px);
    line-height: 1.04;
    margin: 20px 0;
}

h1 span {
    color: #7bdcff;
}

.description {
    max-width: 500px;
    color: #9aabc3;
    line-height: 1.8;
}

.contact-button {
    display: inline-block;
    margin-top: 18px;
    padding: 12px 17px;
    border: 1px solid #4bbce7;
    border-radius: 8px;
    color: #9beaff;
    text-decoration: none;
    font-size: 13px;
}

.projects {
    padding: 50px 8%;
}

.projects h2 {
    font-size: 28px;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    gap: 16px;
    margin-top: 25px;
}

.project {
    padding: 22px;
    border: 1px solid #233650;
    border-radius: 14px;
    background: linear-gradient(140deg, #112139, #0a1423);
    transition: transform 0.2s;
}

.project:hover {
    transform: translateY(-5px);
}

.project span {
    color: #7bdcff;
    font-size: 10px;
    letter-spacing: 1px;
}

.project p {
    color: #9aabc3;
    font-size: 13px;
    line-height: 1.7;
}

footer {
    padding: 25px;
    border-top: 1px solid #1d2d43;
    text-align: center;
    color: #9aabc3;
    font-size: 12px;
}

@media (max-width: 600px) {
    header {
        align-items: flex-start;
        flex-direction: column;
    }
}`,

            js: `const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}

console.log("Portfolio loaded successfully.");`
        },


        interactive: {
            name: "Interactive JavaScript App",

            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive App</title>
</head>
<body>

    <main class="app">
        <p class="eyebrow">MY FIRST JAVASCRIPT APP</p>

        <h1>Little things add up.</h1>

        <p class="description">
            Use the buttons to interact with this app.
        </p>

        <div class="counter" id="counter">0</div>

        <div class="actions">
            <button id="decreaseBtn" type="button">− Decrease</button>
            <button id="resetBtn" type="button">Reset</button>
            <button id="increaseBtn" type="button">+ Increase</button>
        </div>

        <p class="message" id="message">Your journey starts at zero.</p>
    </main>

</body>
</html>`,

            css: `* {
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    margin: 0;
    display: grid;
    place-items: center;
    padding: 20px;
    background:
        radial-gradient(circle at top, #e0ecff, transparent 50%),
        #f5f7fc;
    color: #17223b;
    font-family: Arial, sans-serif;
}

.app {
    width: min(550px, 100%);
    padding: 35px 22px;
    border: 1px solid #e0e7f2;
    border-radius: 22px;
    background: white;
    text-align: center;
    box-shadow: 0 20px 65px rgba(35, 65, 110, 0.12);
}

.eyebrow {
    color: #1769ff;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 2px;
}

h1 {
    font-size: clamp(25px, 5vw, 38px);
}

.description,
.message {
    color: #738096;
    font-size: 13px;
    line-height: 1.7;
}

.counter {
    margin: 28px 0;
    color: #1769ff;
    font-size: 75px;
    font-weight: 900;
}

.actions {
    display: flex;
    justify-content: center;
    gap: 9px;
    flex-wrap: wrap;
}

button {
    padding: 12px 15px;
    border: 1px solid #dce5f3;
    border-radius: 9px;
    background: white;
    color: #263956;
    font-weight: bold;
    cursor: pointer;
}

button:hover {
    border-color: #1769ff;
    color: #1769ff;
}

#increaseBtn {
    background: #1769ff;
    border-color: #1769ff;
    color: white;
}

.message {
    margin-top: 25px;
}`,

            js: `let count = 0;

const counter = document.querySelector("#counter");
const message = document.querySelector("#message");

function updateCounter() {
    counter.textContent = count;

    if (count > 0) {
        message.textContent = "Great! You are moving forward.";
    } else if (count < 0) {
        message.textContent = "Negative numbers are useful too!";
    } else {
        message.textContent = "Your journey starts at zero.";
    }
}

document.querySelector("#increaseBtn").addEventListener("click", () => {
    count++;
    updateCounter();
});

document.querySelector("#decreaseBtn").addEventListener("click", () => {
    count--;
    updateCounter();
});

document.querySelector("#resetBtn").addEventListener("click", () => {
    count = 0;
    updateCounter();
});

console.log("Interactive counter ready.");`
        }

    };


    /* INITIALIZATION */

    function init() {

        createParticles();
        bindEditorTabs();
        bindEditorInput();
        bindEditorControls();
        bindProjectControls();
        bindTemplateButtons();
        bindDialogControls();
        bindKeyboardShortcuts();

        restoreWorkspace();

        updateEditor();
        updateLineNumbers();
        updateCounts();

        runCode({ silent: true });

        window.addEventListener("message", handlePreviewMessage);

        window.addEventListener("beforeunload", saveAutosave);

    }


    /* PARTICLES */

    function createParticles() {

        const container = $("#particles");

        if (!container) return;

        const count = window.innerWidth < 650 ? 12 : 27;

        for (let i = 0; i < count; i++) {

            const particle = document.createElement("span");

            particle.className = "particle";
            particle.style.left = Math.random() * 100 + "%";
            particle.style.top = Math.random() * 100 + "%";
            particle.style.animationDelay = Math.random() * 10 + "s";
            particle.style.animationDuration = (8 + Math.random() * 12) + "s";

            container.appendChild(particle);

        }

    }


    /* CURRENT PROJECT */

    function makeProject(templateKey = "blank") {

        const template = starterTemplates[templateKey] || starterTemplates.blank;

        return {
            id: createId(),
            name: template.name,
            html: template.html,
            css: template.css,
            js: template.js,
            updatedAt: new Date().toISOString()
        };

    }


    function createId() {

        return "project_" +
            Date.now().toString(36) +
            "_" +
            Math.random().toString(36).slice(2, 8);

    }


    function currentProject() {

        if (!state.currentProjectId) {
            state.currentProjectId = createId();
        }

        if (!state.projects[state.currentProjectId]) {

            state.projects[state.currentProjectId] = {
                id: state.currentProjectId,
                name: $("#projectName").value.trim() || "My Project",
                html: "",
                css: "",
                js: "",
                updatedAt: new Date().toISOString()
            };

        }

        return state.projects[state.currentProjectId];

    }


    function readEditorValues() {

        const project = currentProject();

        project.html = state.activeEditor === "html"
            ? $("#codeEditor").value
            : project.html;

        return project;

    }


    function syncCurrentEditor() {

        const project = currentProject();

        project[state.activeEditor] = $("#codeEditor").value;
        project.name = $("#projectName").value.trim() || "My Project";
        project.updatedAt = new Date().toISOString();

    }


    function syncAllEditors() {

        syncCurrentEditor();

        const project = currentProject();

        if (typeof project.html !== "string") project.html = "";
        if (typeof project.css !== "string") project.css = "";
        if (typeof project.js !== "string") project.js = "";

        return project;

    }


    /* EDITOR TABS */

    function bindEditorTabs() {

        $$(".editor-tab").forEach(button => {

            button.addEventListener("click", () => {

                syncCurrentEditor();

                state.activeEditor = button.dataset.editor;

                $$(".editor-tab").forEach(tab => {

                    const active = tab === button;

                    tab.classList.toggle("active", active);
                    tab.setAttribute("aria-selected", String(active));

                });

                updateEditor();

            });

        });

    }


    function updateEditor() {

        const project = currentProject();

        const labels = {
            html: {
                title: "HTML Editor",
                badge: "HTML5",
                filename: "index.html"
            },

            css: {
                title: "CSS Editor",
                badge: "CSS3",
                filename: "style.css"
            },

            js: {
                title: "JavaScript Editor",
                badge: "JS",
                filename: "script.js"
            }
        };

        const info = labels[state.activeEditor];

        $("#editorTitle").textContent = info.title;
        $("#languageBadge").textContent = info.badge;
        $("#currentLanguage").textContent = info.badge;

        $("#codeEditor").value = project[state.activeEditor] || "";
        $("#codeEditor").wrap = state.wrapEnabled ? "soft" : "off";
        $("#codeEditor").classList.toggle("wrap-enabled", state.wrapEnabled);

        updateLineNumbers();
        updateCounts();

    }


    function bindEditorInput() {

        const editor = $("#codeEditor");

        editor.addEventListener("input", () => {

            syncCurrentEditor();
            updateLineNumbers();
            updateCounts();
            markUnsaved();

            clearTimeout(state.debounceTimer);

            state.debounceTimer = setTimeout(() => {

                saveAutosave();
                runCode({ silent: true });

            }, 900);

        });


        editor.addEventListener("scroll", () => {

            $("#lineNumbers").scrollTop = editor.scrollTop;

        });


        editor.addEventListener("keydown", event => {

            if (event.key === "Tab") {

                event.preventDefault();

                const start = editor.selectionStart;
                const end = editor.selectionEnd;

                editor.setRangeText("    ", start, end, "end");

                editor.dispatchEvent(new Event("input"));

            }

        });

    }


    function updateLineNumbers() {

        const editor = $("#codeEditor");

        const count = Math.max(
            1,
            editor.value.split("\n").length
        );

        $("#lineNumbers").textContent = Array
            .from({ length: count }, (_, index) => index + 1)
            .join("\n");

        $("#lineNumbers").scrollTop = editor.scrollTop;

    }


    function updateCounts() {

        const editor = $("#codeEditor");
        const value = editor.value;

        const lines = value.length
            ? value.split("\n").length
            : 1;

        $("#lineCount").textContent =
            lines + (lines === 1 ? " line" : " lines");

        $("#characterCount").textContent =
            value.length + (value.length === 1 ? " character" : " characters");

    }


    /* EDITOR CONTROLS */

    function bindEditorControls() {

        $("#wordWrapToggle").addEventListener("change", event => {

            state.wrapEnabled = event.target.checked;

            $("#codeEditor").classList.toggle(
                "wrap-enabled",
                state.wrapEnabled
            );

            $("#codeEditor").wrap = state.wrapEnabled ? "soft" : "off";

        });


        $("#copyCodeBtn").addEventListener("click", async () => {

            try {

                await copyText($("#codeEditor").value);

                showToast("Current code copied to your clipboard.");

            } catch (error) {

                showToast(
                    "Clipboard access was blocked. Select the code and copy it manually.",
                    true
                );

            }

        });


        $("#resetEditorBtn").addEventListener("click", () => {

            const labels = {
                html: "HTML",
                css: "CSS",
                js: "JavaScript"
            };

            const confirmed = window.confirm(
                "Reset the current " + labels[state.activeEditor] +
                " editor to its starter code?"
            );

            if (!confirmed) return;

            const template = starterTemplates.blank;

            currentProject()[state.activeEditor] =
                template[state.activeEditor];

            updateEditor();
            markUnsaved();
            runCode();

            showToast("Current editor reset.");

        });


        $("#refreshPreviewBtn").addEventListener("click", () => {

            runCode();

        });


        $("#runCodeBtn").addEventListener("click", () => {

            runCode();

        });


        $("#clearConsoleBtn").addEventListener("click", () => {

            $("#consoleOutput").replaceChildren();

            addConsoleMessage(
                "log",
                "Console cleared. Run your code to see new output."
            );

        });


        $("#fullscreenBtn").addEventListener("click", () => {

            const panel = $(".preview-panel");

            const active = panel.classList.toggle("fullscreen-preview");

            $("#fullscreenBtn").textContent = active ? "✕" : "⛶";

            $("#fullscreenBtn").title = active
                ? "Close expanded preview"
                : "Expand preview";

        });

    }


    /* PROJECT MANAGEMENT */

    function bindProjectControls() {

        $("#saveProjectBtn").addEventListener("click", () => {

            syncAllEditors();

            const project = currentProject();

            project.name = $("#projectName").value.trim() || "My Project";
            project.updatedAt = new Date().toISOString();

            state.projects[project.id] = project;

            if (!persistProjects()) return;

            saveAutosave();

            setSaveStatus("Project saved locally.");

            showToast("Your project has been saved in this browser.");

        });


        $("#openProjectBtn").addEventListener("click", openProjectsDialog);


        $("#closeProjectDialog").addEventListener("click", () => {

            $("#projectDialog").close();

        });


        $("#newProjectBtn").addEventListener("click", () => {

            if (!confirmDiscardChanges()) return;

            const project = makeProject("blank");

            state.projects[project.id] = project;
            state.currentProjectId = project.id;
            state.activeEditor = "html";

            $("#projectName").value = project.name;

            updateActiveTab();
            updateEditor();
            clearConsole();
            runCode();

            showToast("A new blank project is ready.");

        });


        $("#downloadBtn").addEventListener("click", exportProject);


        $("#importProjectInput").addEventListener("change", importProject);


        $("#projectName").addEventListener("input", () => {

            syncCurrentEditor();
            markUnsaved();

        });

    }


    function confirmDiscardChanges() {

        const status = $("#saveStatus").textContent;

        if (!status.includes("Unsaved")) return true;

        return window.confirm(
            "You have unsaved changes. Continue? Your automatic browser recovery may still preserve them."
        );

    }


    function updateActiveTab() {

        $$(".editor-tab").forEach(tab => {

            const active = tab.dataset.editor === state.activeEditor;

            tab.classList.toggle("active", active);
            tab.setAttribute("aria-selected", String(active));

        });

    }


    function persistProjects() {

        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(state.projects)
            );

            return true;

        } catch (error) {

            showToast(
                "Browser storage is full or unavailable. Export your project to keep a copy.",
                true
            );

            return false;

        }

    }


    function saveAutosave() {

        try {

            const project = syncAllEditors();

            localStorage.setItem(
                AUTOSAVE_KEY,
                JSON.stringify({
                    currentProjectId: state.currentProjectId,
                    activeEditor: state.activeEditor,
                    project
                })
            );

        } catch (error) {

            console.warn("Autosave could not be completed.", error);

        }

    }


    function restoreWorkspace() {

        try {

            const storedProjects = localStorage.getItem(STORAGE_KEY);

            if (storedProjects) {

                const parsed = JSON.parse(storedProjects);

                if (
                    parsed &&
                    typeof parsed === "object" &&
                    !Array.isArray(parsed)
                ) {

                    state.projects = parsed;

                }

            }

        } catch (error) {

            state.projects = {};

        }


        let recovered = null;

        try {

            const raw = localStorage.getItem(AUTOSAVE_KEY);

            if (raw) {

                const data = JSON.parse(raw);

                if (
                    data &&
                    data.project &&
                    typeof data.project.html === "string" &&
                    typeof data.project.css === "string" &&
                    typeof data.project.js === "string"
                ) {

                    recovered = data;

                }

            }

        } catch (error) {

            recovered = null;

        }


        if (recovered) {

            const p = recovered.project;

            state.currentProjectId = p.id || createId();

            state.projects[state.currentProjectId] = {
                id: state.currentProjectId,
                name: p.name || "Recovered Project",
                html: p.html,
                css: p.css,
                js: p.js,
                updatedAt: p.updatedAt || new Date().toISOString()
            };

            state.activeEditor = ["html", "css", "js"].includes(
                recovered.activeEditor
            ) ? recovered.activeEditor : "html";

            $("#projectName").value =
                state.projects[state.currentProjectId].name;

            setSaveStatus("Workspace recovered.");

            return;

        }


        const project = makeProject("website");

        state.currentProjectId = project.id;
        state.projects[project.id] = project;

        $("#projectName").value = project.name;

        saveAutosave();

    }


    function openProjectsDialog() {

        syncAllEditors();

        if (!persistProjects()) return;

        const container = $("#savedProjectList");

        container.replaceChildren();

        const projects = Object.values(state.projects)
            .filter(project =>
                project &&
                typeof project.html === "string" &&
                typeof project.css === "string" &&
                typeof project.js === "string"
            )
            .sort((a, b) =>
                new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0)
            );

        if (!projects.length) {

            const empty = document.createElement("div");

            empty.className = "empty-projects";
            empty.textContent = "No saved projects yet. Save a project first.";

            container.appendChild(empty);

        }


        projects.forEach(project => {

            const row = document.createElement("div");
            row.className = "saved-project-item";

            const details = document.createElement("div");

            const name = document.createElement("strong");
            name.textContent = project.name || "Untitled Project";

            const date = document.createElement("small");

            date.textContent = project.updatedAt
                ? "Updated " + new Date(project.updatedAt).toLocaleString()
                : "Saved project";

            details.append(name, date);


            const actions = document.createElement("div");
            actions.className = "saved-project-buttons";

            const openButton = document.createElement("button");
            openButton.type = "button";
            openButton.textContent = "Open";

            openButton.addEventListener("click", () => {

                loadProject(project.id);
                $("#projectDialog").close();

            });


            const deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.textContent = "Delete";

            deleteButton.addEventListener("click", () => {

                const confirmed = window.confirm(
                    'Delete "' + (project.name || "Untitled Project") + '"?'
                );

                if (!confirmed) return;

                delete state.projects[project.id];

                if (project.id === state.currentProjectId) {

                    const replacement = makeProject("blank");

                    state.currentProjectId = replacement.id;
                    state.projects[replacement.id] = replacement;

                    $("#projectName").value = replacement.name;

                    updateEditor();
                    saveAutosave();

                }

                persistProjects();
                openProjectsDialog();

            });


            actions.append(openButton, deleteButton);
            row.append(details, actions);
            container.appendChild(row);

        });


        if (typeof $("#projectDialog").showModal === "function") {

            $("#projectDialog").showModal();

        } else {

            showToast("Your browser does not support the project dialog.");

        }

    }


    function loadProject(projectId) {

        const project = state.projects[projectId];

        if (!project) {

            showToast("That project could not be found.", true);
            return;

        }

        state.currentProjectId = project.id;
        state.activeEditor = "html";

        $("#projectName").value = project.name || "My Project";

        updateActiveTab();
        updateEditor();

        clearConsole();
        runCode();

        saveAutosave();

        setSaveStatus("Project opened.");

        showToast("Project opened successfully.");

    }


    function exportProject() {

        const project = syncAllEditors();

        project.name = $("#projectName").value.trim() || "My Project";

        const data = {
            format: "ELOMCODE-PLAYGROUND",
            version: 1,
            exportedAt: new Date().toISOString(),
            project
        };

        const blob = new Blob(
            [JSON.stringify(data, null, 2)],
            { type: "application/json" }
        );

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = safeFilename(project.name) + ".elomcode.json";

        document.body.appendChild(link);
        link.click();
        link.remove();

        setTimeout(() => URL.revokeObjectURL(url), 1000);

        showToast("Project exported. Keep the downloaded file as a backup.");

    }


    function importProject(event) {

        const file = event.target.files && event.target.files[0];

        if (!file) return;

        if (file.size > 2 * 1024 * 1024) {

            showToast("That project file is too large to import.", true);

            event.target.value = "";
            return;

        }


        const reader = new FileReader();

        reader.onload = () => {

            try {

                const data = JSON.parse(reader.result);

                const p = data.project || data;

                if (
                    !p ||
                    typeof p.html !== "string" ||
                    typeof p.css !== "string" ||
                    typeof p.js !== "string"
                ) {

                    throw new Error("Invalid project structure.");

                }

                const project = {
                    id: createId(),
                    name: String(p.name || "Imported Project").slice(0, 60),
                    html: p.html,
                    css: p.css,
                    js: p.js,
                    updatedAt: new Date().toISOString()
                };

                state.projects[project.id] = project;
                state.currentProjectId = project.id;
                state.activeEditor = "html";

                $("#projectName").value = project.name;

                updateActiveTab();
                updateEditor();

                persistProjects();
                saveAutosave();

                clearConsole();
                runCode();

                showToast("Project imported successfully.");

            } catch (error) {

                showToast(
                    "Import failed. Please select a valid ELOMCODE project JSON file.",
                    true
                );

            }

            event.target.value = "";

        };


        reader.onerror = () => {

            showToast("The selected file could not be read.", true);
            event.target.value = "";

        };


        reader.readAsText(file);

    }


    function safeFilename(name) {

        return String(name || "project")
            .trim()
            .replace(/[<>:"/\\|?*\x00-\x1F]/g, "_")
            .replace(/\s+/g, "_")
            .slice(0, 60) || "project";

    }


    /* TEMPLATES */

    function bindTemplateButtons() {

        $$(".template-card").forEach(button => {

            button.addEventListener("click", () => {

                if (!confirmDiscardChanges()) return;

                const key = button.dataset.template;

                const project = makeProject(key);

                state.projects[project.id] = project;
                state.currentProjectId = project.id;
                state.activeEditor = "html";

                $("#projectName").value = project.name;

                updateActiveTab();
                updateEditor();

                clearConsole();
                runCode();

                saveAutosave();

                showToast(project.name + " is ready to edit.");

                $(".workspace").scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });

    }


    /* RUN CODE */

    function buildDocument(project, runId) {

        let html = project.html || "";

        const css = project.css || "";
        const js = project.js || "";

        const baseTag = `<base target="_blank">`;

        const cssTag = `
<style>
${css}
</style>`;

        const bridgeScript = `
<script>
(function () {
    const RUN_ID = ${JSON.stringify(runId)};

    function safeString(value) {
        try {
            if (typeof value === "string") return value;
            if (value instanceof Error) return value.stack || value.message;

            return JSON.stringify(value, function (key, item) {
                if (typeof item === "function") return "[Function]";
                if (item instanceof Node) return "[DOM Node]";
                return item;
            });
        } catch (error) {
            return String(value);
        }
    }

    function send(kind, args) {
        try {
            parent.postMessage({
                source: "elomcode-playground",
                runId: RUN_ID,
                kind: kind,
                message: Array.from(args).map(safeString).join(" ")
            }, "*");
        } catch (error) {}
    }

    ["log", "info", "warn", "error"].forEach(function (kind) {
        const original = console[kind].bind(console);

        console[kind] = function () {
            send(kind, arguments);
            original.apply(console, arguments);
        };
    });

    window.addEventListener("error", function (event) {
        send("error", [event.message || "Unknown JavaScript error"]);
    });

    window.addEventListener("unhandledrejection", function (event) {
        send("error", ["Unhandled promise rejection:", event.reason]);
    });

    window.addEventListener("DOMContentLoaded", function () {
        send("log", ["Preview started successfully."]);
    });
})();
<\/script>`;

        const jsTag = `
<script>
${js}
<\/script>`;


        /*
         * If the user's HTML contains an explicit closing body tag,
         * insert CSS and JavaScript before it. Otherwise, build a
         * complete document around the provided HTML.
         */

        if (/<html[\s>]/i.test(html)) {

            if (/<head[\s>]/i.test(html)) {

                html = html.replace(
                    /<head([^>]*)>/i,
                    match => match + "\n" + baseTag + "\n" + bridgeScript + "\n" + cssTag
                );

            } else {

                html = html.replace(
                    /<html([^>]*)>/i,
                    match => match + "\n<head>" + baseTag + bridgeScript + cssTag + "</head>"
                );

            }

            if (/<\/body\s*>/i.test(html)) {

                html = html.replace(
                    /<\/body\s*>/i,
                    jsTag + "\n</body>"
                );

            } else {

                html += "\n" + jsTag;

            }

            return html;

        }


        return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
${baseTag}
${bridgeScript}
${cssTag}
<title>ELOMCODE Preview</title>
</head>
<body>
${html}
${jsTag}
</body>
</html>`;

    }


    function runCode(options = {}) {

        syncAllEditors();

        const project = currentProject();

        const runId = ++state.previewRunId;

        clearTimeout(state.runTimer);

        $("#previewStatus").textContent = "Running...";
        $("#saveStatus").textContent = "Preview updated";

        if (!options.silent) {
            addConsoleMessage("log", "Running project preview...");
        }

        $("#previewFrame").srcdoc = buildDocument(project, runId);

        state.runTimer = setTimeout(() => {

            if (runId === state.previewRunId) {

                $("#previewStatus").textContent = "Preview ready";

            }

        }, 400);

        state.hasRun = true;

        saveAutosave();

    }


    function handlePreviewMessage(event) {

        /*
         * The iframe is sandboxed without allow-same-origin.
         * Its origin is therefore opaque ("null").
         * Accept only messages with our private source marker and
         * the current run identifier. The message is only displayed,
         * never executed by the parent page.
         */

        const data = event.data;

        if (
            !data ||
            data.source !== "elomcode-playground" ||
            data.runId !== state.previewRunId
        ) {
            return;
        }

        if (!["log", "info", "warn", "error"].includes(data.kind)) {
            return;
        }

        if (data.kind === "log" && data.message === "Preview started successfully.") {
            $("#previewStatus").textContent = "Preview ready";
            return;
        }

        addConsoleMessage(data.kind, data.message);

    }


    /* CONSOLE */

    function addConsoleMessage(kind, message) {

        const output = $("#consoleOutput");

        const welcome = output.querySelector(".console-welcome");

        if (welcome) welcome.remove();

        const entry = document.createElement("div");

        entry.className = "console-entry" +
            (kind === "error" ? " error" : "") +
            (kind === "warn" ? " warn" : "");

        const badge = document.createElement("span");

        badge.className = "console-kind";
        badge.textContent = kind.toUpperCase();

        const text = document.createElement("span");

        text.textContent = String(message).slice(0, 5000);

        entry.append(badge, text);
        output.appendChild(entry);

        while (output.children.length > 150) {
            output.firstElementChild.remove();
        }

        output.scrollTop = output.scrollHeight;

    }


    function clearConsole() {

        $("#consoleOutput").replaceChildren();

        addConsoleMessage("log", "Console cleared.");

    }


    /* SAVE STATUS */

    function setSaveStatus(message) {

        $("#saveStatus").textContent = message;

    }


    function markUnsaved() {

        setSaveStatus("Unsaved changes");

    }


    /* DIALOG */

    function bindDialogControls() {

        $("#projectDialog").addEventListener("click", event => {

            if (event.target === $("#projectDialog")) {
                $("#projectDialog").close();
            }

        });

    }


    /* KEYBOARD SHORTCUTS */

    function bindKeyboardShortcuts() {

        document.addEventListener("keydown", event => {

            const isMac = navigator.platform
                .toUpperCase()
                .includes("MAC");

            const modifier = isMac ? event.metaKey : event.ctrlKey;

            if (!modifier) return;

            if (event.key === "Enter") {

                event.preventDefault();
                runCode();

            }

            if (event.key.toLowerCase() === "s") {

                event.preventDefault();

                syncAllEditors();

                if (persistProjects()) {

                    saveAutosave();
                    setSaveStatus("Project saved locally.");
                    showToast("Project saved.");

                }

            }

        });

    }


    /* UTILITIES */

    async function copyText(text) {

        if (navigator.clipboard && window.isSecureContext) {

            await navigator.clipboard.writeText(text);
            return;

        }

        const temporary = document.createElement("textarea");

        temporary.value = text;
        temporary.style.position = "fixed";
        temporary.style.opacity = "0";

        document.body.appendChild(temporary);

        temporary.select();

        const successful = document.execCommand("copy");

        temporary.remove();

        if (!successful) {
            throw new Error("Copy command failed.");
        }

    }


    function showToast(message, isError = false) {

        const container = $("#toastContainer");

        const toast = document.createElement("div");

        toast.className = "toast" + (isError ? " error" : "");
        toast.textContent = message;

        container.appendChild(toast);

        setTimeout(() => {

            toast.style.opacity = "0";
            toast.style.transform = "translateY(8px)";
            toast.style.transition = "0.2s ease";

            setTimeout(() => toast.remove(), 220);

        }, 3500);

    }


    return {
        init
    };

})();