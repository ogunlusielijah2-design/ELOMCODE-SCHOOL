/* =========================================================
   ELOMCODE SCHOOL — CHALLENGE ZONE
   Built by Elijah Opomulero
   Learn. Code. Build. Become.
========================================================= */

"use strict";

const ELOMCODE_CHALLENGES = [
    {
        topic: "HTML",
        difficulty: "Beginner",
        question: "Which HTML tag creates the largest heading?",
        options: ["<heading>", "<h6>", "<h1>", "<head>"],
        answer: 2,
        hint: "It begins with the letter h and uses the number 1.",
        explanation: "The <h1> element represents the highest-level heading in HTML."
    },
    {
        topic: "HTML",
        difficulty: "Beginner",
        question: "Which HTML element creates a hyperlink?",
        options: ["<linkto>", "<a>", "<href>", "<url>"],
        answer: 1,
        hint: "Its name is short, and it commonly uses an href attribute.",
        explanation: "The <a> element creates a hyperlink. Example: <a href='page.html'>Open page</a>."
    },
    {
        topic: "HTML",
        difficulty: "Beginner",
        question: "Which tag displays an image?",
        options: ["<picturefile>", "<image>", "<img>", "<src>"],
        answer: 2,
        hint: "The tag has three letters.",
        explanation: "The <img> element displays an image. Its src attribute identifies the image file."
    },
    {
        topic: "CSS",
        difficulty: "Beginner",
        question: "Which CSS property changes text colour?",
        options: ["font-style", "text-colour", "color", "background"],
        answer: 2,
        hint: "The property is simply called 'color' in CSS.",
        explanation: "The color property sets the foreground colour of text."
    },
    {
        topic: "CSS",
        difficulty: "Beginner",
        question: "Which symbol selects a class in CSS?",
        options: ["#", ".", "*", "&"],
        answer: 1,
        hint: "A class selector starts with a small dot.",
        explanation: "A CSS class selector begins with a period. Example: .card { padding: 20px; }."
    },
    {
        topic: "CSS",
        difficulty: "Intermediate",
        question: "Which CSS property adds space inside an element's border?",
        options: ["margin", "padding", "gap", "outline"],
        answer: 1,
        hint: "It creates inner spacing.",
        explanation: "Padding is the space between an element's content and its border."
    },
    {
        topic: "JavaScript",
        difficulty: "Beginner",
        question: "Which keyword declares a block-scoped variable that can be reassigned?",
        options: ["fixed", "let", "define", "const"],
        answer: 1,
        hint: "It has three letters.",
        explanation: "The let keyword declares a block-scoped variable that can be reassigned."
    },
    {
        topic: "JavaScript",
        difficulty: "Beginner",
        question: "What does 2 + 3 return in JavaScript?",
        options: ["23", "6", "5", "undefined"],
        answer: 2,
        hint: "Both values are numbers, so JavaScript adds them.",
        explanation: "The + operator adds two numeric values, so 2 + 3 equals 5."
    },
    {
        topic: "JavaScript",
        difficulty: "Intermediate",
        question: "Which method selects an element by its ID?",
        options: [
            "document.findId()",
            "document.getElementById()",
            "document.selectClass()",
            "window.getId()"
        ],
        answer: 1,
        hint: "It starts with document.getElement...",
        explanation: "document.getElementById('example') selects the element whose id is example."
    },
    {
        topic: "Python",
        difficulty: "Beginner",
        question: "Which function displays output in Python?",
        options: ["echo()", "show()", "print()", "displayText()"],
        answer: 2,
        hint: "It is a five-letter built-in function.",
        explanation: "Python's print() function displays text and other values."
    },
    {
        topic: "Python",
        difficulty: "Beginner",
        question: "Which symbol starts a single-line comment in Python?",
        options: ["//", "<!--", "#", "/*"],
        answer: 2,
        hint: "It is also called a hash symbol.",
        explanation: "Python uses # to begin a single-line comment."
    },
    {
        topic: "Python",
        difficulty: "Intermediate",
        question: "What is the result of len('CODE')?",
        options: ["3", "4", "5", "CODE"],
        answer: 1,
        hint: "Count the letters in CODE.",
        explanation: "The len() function returns the length of a sequence. CODE contains four characters."
    },
    {
        topic: "SQL",
        difficulty: "Beginner",
        question: "Which SQL command retrieves data from a table?",
        options: ["GET", "OPEN", "SELECT", "EXTRACT"],
        answer: 2,
        hint: "A basic query often begins with this word.",
        explanation: "SELECT retrieves data from one or more database tables."
    },
    {
        topic: "Java",
        difficulty: "Beginner",
        question: "Which keyword is commonly used to declare a class in Java?",
        options: ["object", "class", "create", "struct"],
        answer: 1,
        hint: "A Java class declaration starts with this keyword.",
        explanation: "The class keyword declares a class in Java."
    },
    {
        topic: "Programming Logic",
        difficulty: "Beginner",
        question: "What is the result of 10 % 3 in many programming languages?",
        options: ["3", "1", "0", "10"],
        answer: 1,
        hint: "The percent operator commonly gives the remainder.",
        explanation: "10 divided by 3 leaves a remainder of 1."
    },
    {
        topic: "Programming Logic",
        difficulty: "Intermediate",
        question: "Which structure repeats instructions while a condition remains true?",
        options: ["A loop", "A comment", "A variable", "A string"],
        answer: 0,
        hint: "Examples include while loops and for loops.",
        explanation: "Loops repeat a block of instructions according to their rules and conditions."
    }
];

(() => {
    const root = document.querySelector("#challengeApp");

    // If this script is loaded on a different page, do nothing.
    if (!root) return;

    let currentIndex = 0;
    let score = 0;
    let answered = false;
    let hintShown = false;
    let questionOrder = [...ELOMCODE_CHALLENGES.keys()];

    const savedBest = Number(
        localStorage.getItem("elomcode_challenge_best") || 0
    );

    root.innerHTML = `
        <section class="challenge-dashboard">
            <div class="challenge-topline">
                <span class="challenge-badge">ELOMCODE SCHOOL</span>
                <span class="challenge-badge">CHALLENGE ZONE</span>
            </div>

            <div class="challenge-stats">
                <div class="challenge-stat">
                    <span>YOUR SCORE</span>
                    <strong id="challengeScore">0</strong>
                </div>

                <div class="challenge-stat">
                    <span>QUESTIONS ANSWERED</span>
                    <strong id="challengeAnswered">0 / ${questionOrder.length}</strong>
                </div>

                <div class="challenge-stat">
                    <span>PERSONAL BEST</span>
                    <strong id="challengeBest">${savedBest}</strong>
                </div>
            </div>

            <div class="challenge-progress-track">
                <div id="challengeProgress" class="challenge-progress-fill"></div>
            </div>

            <article class="challenge-question-card">
                <div class="challenge-question-meta">
                    <span id="challengeTopic">HTML</span>
                    <span id="challengeDifficulty">BEGINNER</span>
                    <span id="challengeNumber">QUESTION 1</span>
                </div>

                <h2 id="challengeQuestion">Loading challenge...</h2>

                <div id="challengeAnswers" class="challenge-answer-list"></div>

                <div id="challengeFeedback" class="challenge-feedback"
                     role="status" aria-live="polite"></div>

                <div class="challenge-actions">
                    <button type="button" id="challengeHint" class="challenge-secondary">
                        💡 Show Hint
                    </button>

                    <button type="button" id="challengeNext" class="challenge-primary" disabled>
                        Next Challenge →
                    </button>
                </div>

                <div id="challengeHintText" class="challenge-hint-text" hidden></div>
            </article>

            <div class="challenge-bottom-note">
                <span>LEARN. CODE. BUILD. BECOME.</span>
                <span>Created by Elijah Opomulero</span>
            </div>
        </section>
    `;

    const $ = (selector) => root.querySelector(selector);

    function renderQuestion() {
        answered = false;
        hintShown = false;

        const question = ELOMCODE_CHALLENGES[questionOrder[currentIndex]];

        $("#challengeTopic").textContent = question.topic;
        $("#challengeDifficulty").textContent = question.difficulty.toUpperCase();
        $("#challengeNumber").textContent =
            `QUESTION ${currentIndex + 1} OF ${questionOrder.length}`;

        $("#challengeQuestion").textContent = question.question;
        $("#challengeFeedback").textContent = "";
        $("#challengeFeedback").className = "challenge-feedback";
        $("#challengeHintText").hidden = true;
        $("#challengeHintText").textContent = "";
        $("#challengeNext").disabled = true;
        $("#challengeNext").textContent =
            currentIndex === questionOrder.length - 1
                ? "View Results →"
                : "Next Challenge →";

        const answers = $("#challengeAnswers");
        answers.replaceChildren();

        question.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "challenge-answer";
            button.dataset.answerIndex = String(index);
            button.textContent = option;

            // Keep answer buttons interactive above decorative elements.
            button.style.pointerEvents = "auto";
            button.style.position = "relative";
            button.style.zIndex = "2";

            answers.appendChild(button);
        });

        updateStats();
    }

    function updateStats() {
        $("#challengeScore").textContent = String(score);
        $("#challengeAnswered").textContent =
            `${currentIndex + (answered ? 1 : 0)} / ${questionOrder.length}`;

        const progress = ((currentIndex + (answered ? 1 : 0)) / questionOrder.length) * 100;
        $("#challengeProgress").style.width = `${progress}%`;
    }

    function chooseAnswer(index) {
        if (answered) return;

        answered = true;

        const question = ELOMCODE_CHALLENGES[questionOrder[currentIndex]];
        const buttons = root.querySelectorAll(".challenge-answer");
        const feedback = $("#challengeFeedback");

        buttons.forEach((button) => {
            button.disabled = true;

            const optionIndex = Number(button.dataset.answerIndex);

            if (optionIndex === question.answer) {
                button.classList.add("correct");
            } else if (optionIndex === index) {
                button.classList.add("incorrect");
            }
        });

        if (index === question.answer) {
            score += 10;
            feedback.classList.add("success");
            feedback.textContent = "✓ Correct! +10 points. " + question.explanation;
        } else {
            feedback.classList.add("error");
            feedback.textContent =
                "Not quite! The correct answer is: " +
                question.options[question.answer] +
                ". " +
                question.explanation;
        }

        const previousBest = Number(
            localStorage.getItem("elomcode_challenge_best") || 0
        );

        if (score > previousBest) {
            localStorage.setItem("elomcode_challenge_best", String(score));
            $("#challengeBest").textContent = String(score);
        }

        $("#challengeNext").disabled = false;
        updateStats();
    }

    // Event delegation: works even when answer buttons are recreated.
    $("#challengeAnswers").addEventListener("click", (event) => {
        const button = event.target.closest("button[data-answer-index]");

        if (!button || !$("#challengeAnswers").contains(button)) return;

        chooseAnswer(Number(button.dataset.answerIndex));
    });

    $("#challengeHint").addEventListener("click", () => {
        if (hintShown) return;

        const question = ELOMCODE_CHALLENGES[questionOrder[currentIndex]];

        $("#challengeHintText").textContent = "💡 " + question.hint;
        $("#challengeHintText").hidden = false;

        hintShown = true;
    });

    $("#challengeNext").addEventListener("click", () => {
        if (!answered) return;

        if (currentIndex < questionOrder.length - 1) {
            currentIndex++;
            renderQuestion();
        } else {
            showResults();
        }
    });

    function showResults() {
        const percentage = Math.round((score / (questionOrder.length * 10)) * 100);

        root.innerHTML = `
            <section class="challenge-dashboard challenge-results">
                <div class="challenge-badge">CHALLENGE COMPLETE</div>
                <h1>Well done, Coder! 🚀</h1>
                <p>You have completed this set of ELOMCODE School challenges.</p>

                <div class="challenge-result-score">${score} points</div>
                <p>You scored ${percentage}% in this challenge set.</p>

                <button type="button" id="challengeRestart" class="challenge-primary">
                    ↻ Try Again
                </button>

                <a class="challenge-secondary challenge-home-link" href="courses.html">
                    ← Back to Courses
                </a>

                <p class="challenge-bottom-note">Created by Elijah Opomulero</p>
            </section>
        `;

        $("#challengeRestart").addEventListener("click", () => {
            currentIndex = 0;
            score = 0;
            questionOrder = [...ELOMCODE_CHALLENGES.keys()];

            // Shuffle the question order for a fresh attempt.
            for (let i = questionOrder.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [questionOrder[i], questionOrder[j]] = [questionOrder[j], questionOrder[i]];
            }

            renderQuestion();
        });
    }

    // Shuffle the first round so the questions do not always appear in the same order.
    for (let i = questionOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionOrder[i], questionOrder[j]] = [questionOrder[j], questionOrder[i]];
    }

    renderQuestion();
})();