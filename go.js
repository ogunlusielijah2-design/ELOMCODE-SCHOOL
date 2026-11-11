/* =========================================================
   ELOMCODE SCHOOL — GO PROGRAMMING MASTERCLASS
   Complete Learning Engine
   Features:
   - 45 Go programming lessons
   - Examples with expected output
   - Live Go code playground
   - Run Code / Reset Code
   - Coding challenges
   - Quizzes
   - Search and lesson navigation
   - Saved progress and XP
   - Certificate unlocking
   - Theme toggle and responsive sidebar
========================================================= */

"use strict";

/* =========================================================
   1. CONFIGURATION
========================================================= */

const GO_CONFIG = {
    storageKey: "elomcode_go_course_progress",
    xpPerLesson: 20,
    courseName: "Go Programming Masterclass",
    courseAuthor: "Elijah Opomulero",
    compilerURL: "https://go.dev/_/compile",
    compilerVersion: "2"
};

const GO_SELECTORS = {
    lessonNavigation: ["lessonNavigation", "lessonList", "lessonsList"],
    lessonSearch: ["lessonSearch", "searchLessons"],
    moduleLabel: ["moduleLabel", "lessonModule"],
    lessonNumber: ["lessonNumber", "currentLessonNumber"],
    lessonTitle: ["lessonTitle", "currentLessonTitle"],
    lessonSubtitle: ["lessonSubtitle", "lessonDescription"],
    lessonStatus: ["lessonStatus"],
    lessonContent: ["lessonContent", "lessonBody"],
    codeExample: ["codeExample", "exampleCode"],
    copyCode: ["copyCode", "copyExample"],
    explainCode: ["explainCode", "toggleExplanation"],
    codeExplanation: ["codeExplanation"],
    codeExplanationText: ["codeExplanationText"],
    challengeText: ["challengeText"],
    challengeAnswer: ["challengeAnswer", "challengeCode"],
    challengeHint: ["challengeHint"],
    challengeSolution: ["challengeSolution"],
    showHint: ["showHint"],
    showSolution: ["showSolution"],
    quizQuestion: ["quizQuestion"],
    quizOptions: ["quizOptions"],
    quizFeedback: ["quizFeedback"],
    submitQuiz: ["submitQuiz"],
    previousLesson: ["previousLesson", "prevLesson"],
    nextLesson: ["nextLesson"],
    completeLesson: ["completeLesson", "markComplete"],
    completedLessons: ["completedLessons"],
    coursePercent: ["coursePercent", "progressPercent"],
    courseXP: ["courseXP", "totalXP"],
    progressLabel: ["progressLabel"],
    progressBar: ["progressBar", "courseProgressBar"],
    totalLessons: ["totalLessons"],
    themeToggle: ["themeToggle"],
    sidebarToggle: ["sidebarToggle"],
    certificateLocked: ["certificateLocked"],
    certificateUnlocked: ["certificateUnlocked"],
    certificateMessage: ["certificateMessage"],
    certificateLearnerName: ["certificateLearnerName", "learnerName"],
    learnerName: ["learnerName", "certificateLearnerName"],
    certificateDate: ["certificateDate"],
    updateCertificate: ["updateCertificate"],
    printCertificate: ["printCertificate"],
    certificateSection: ["certificateSection"]
};

function goElement(name) {
    const ids = GO_SELECTORS[name] || [name];

    for (const id of ids) {
        const element = document.getElementById(id);

        if (element) {
            return element;
        }
    }

    return null;
}

function goSetText(name, value) {
    const element = goElement(name);

    if (element) {
        element.textContent = value;
    }
}

function goSetHTML(name, value) {
    const element = goElement(name);

    if (element) {
        element.innerHTML = value;
    }
}

function goEscapeHTML(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   2. COURSE LESSONS
========================================================= */

const GO_LESSONS = [

{
    title: "Introduction to Go",
    module: "Module 1: Getting Started",
    subtitle: "Discover Go and understand why developers use it.",
    explanation: `
        <p>Go, also called Golang, is a programming language created at Google.</p>
        <p>It is used to build web services, command-line tools, cloud systems,
        networking software and other applications.</p>
        <p>Go is known for its straightforward syntax, fast compilation and
        built-in support for concurrency.</p>
    `,
    code: `package main

import "fmt"

func main() {
    fmt.Println("Welcome to Go!")
}`,
    output: "Welcome to Go!",
    challenge: "Change the message so the program prints Welcome to ELOMCODE School!",
    challengeStarter: `package main

import "fmt"

func main() {
    // Change the message below.
    fmt.Println("Welcome to Go!")
}`,
    solution: `package main

import "fmt"

func main() {
    fmt.Println("Welcome to ELOMCODE School!")
}`,
    hint: "Change the text inside the quotation marks.",
    question: "Which company originally developed Go?",
    options: ["Microsoft", "Google", "Apple", "Meta"],
    answer: 1,
    explanationSteps: [
        "package main identifies this as an executable program.",
        "import \"fmt\" makes Go's formatting and printing functions available.",
        "func main() is the entry point of this program.",
        "fmt.Println prints the message followed by a new line."
    ]
},

{
    title: "Installing and Running Go",
    module: "Module 1: Getting Started",
    subtitle: "Understand the Go toolchain.",
    explanation: `
        <p>Install Go from the official Go website before compiling Go programs locally.</p>
        <p>After installation, use <code>go version</code> in your terminal to check
        that Go is available.</p>
        <p>Save a program in a file such as <code>main.go</code>, then run
        <code>go run main.go</code>.</p>
    `,
    code: `package main

import "fmt"

func main() {
    fmt.Println("My Go environment is ready!")
}`,
    output: "My Go environment is ready!",
    challenge: "Create a program that prints Go is ready!",
    challengeStarter: `package main

import "fmt"

func main() {
    fmt.Println("My Go environment is ready!")
}`,
    solution: `package main

import "fmt"

func main() {
    fmt.Println("Go is ready!")
}`,
    hint: "Use fmt.Println with your own message.",
    question: "Which command checks your installed Go version?",
    options: ["go check", "go version", "go install-version", "golang test"],
    answer: 1,
    explanationSteps: [
        "The Go toolchain provides commands for building and running programs.",
        "go version reports the installed Go version.",
        "go run main.go compiles and runs the specified source file."
    ]
},

{
    title: "Your First Go Program",
    module: "Module 1: Getting Started",
    subtitle: "Learn the basic structure of a Go program.",
    explanation: `
        <p>A basic executable Go program normally uses <code>package main</code>
        and a <code>main</code> function.</p>
        <p>The main function is where execution begins.</p>
    `,
    code: `package main

import "fmt"

func main() {
    fmt.Println("My first program")
    fmt.Println("I am learning Go")
}`,
    output: "My first program\nI am learning Go",
    challenge: "Print your name on the first line and your school on the second.",
    challengeStarter: `package main

import "fmt"

func main() {
    fmt.Println("My name")
    fmt.Println("My school")
}`,
    solution: `package main

import "fmt"

func main() {
    fmt.Println("Elijah")
    fmt.Println("ELOMCODE School")
}`,
    hint: "Use two fmt.Println statements.",
    question: "Which function is the entry point of a basic Go executable?",
    options: ["start()", "run()", "main()", "begin()"],
    answer: 2,
    explanationSteps: [
        "package main declares the executable program's package.",
        "import \"fmt\" makes printing functions available.",
        "main is the function that starts the program."
    ]
},

{
    title: "Comments in Go",
    module: "Module 1: Getting Started",
    subtitle: "Write notes that explain your code.",
    explanation: `
        <p>Comments are notes for people reading code. The Go compiler ignores them.</p>
        <p>Use <code>//</code> for a single-line comment and
        <code>/* ... */</code> for a block comment.</p>
    `,
    code: `package main

import "fmt"

func main() {
    // Print a greeting.
    fmt.Println("Hello, developer!")

    /*
       This is a block comment.
       It can cover several lines.
    */
}`,
    output: "Hello, developer!",
    challenge: "Add a comment above a statement that prints your favourite subject.",
    challengeStarter: `package main

import "fmt"

func main() {
    fmt.Println("Computer Science")
}`,
    solution: `package main

import "fmt"

func main() {
    // Print my favourite subject.
    fmt.Println("Computer Science")
}`,
    hint: "Put // before your comment.",
    question: "Which symbol begins a single-line Go comment?",
    options: ["##", "//", "<!--", "**"],
    answer: 1,
    explanationSteps: [
        "// begins a single-line comment.",
        "Block comments begin with /* and end with */.",
        "Comments do not execute as program statements."
    ]
},

{
    title: "Variables with var",
    module: "Module 2: Variables and Types",
    subtitle: "Store information in named variables.",
    explanation: `
        <p>A variable is a named storage location for a value.</p>
        <p>Go allows declarations such as <code>var age int = 17</code>.</p>
        <p>Variables declared inside a function generally need to be used,
        otherwise Go reports a compilation error.</p>
    `,
    code: `package main

import "fmt"

func main() {
    var age int = 17
    var name string = "Elijah"

    fmt.Println(name)
    fmt.Println(age)
}`,
    output: "Elijah\n17",
    challenge: "Create a variable named city and print its value.",
    challengeStarter: `package main

import "fmt"

func main() {
    // Create a city variable.
}`,
    solution: `package main

import "fmt"

func main() {
    var city string = "Lagos"
    fmt.Println(city)
}`,
    hint: "Declare a string variable and print it.",
    question: "Which keyword can declare a variable in Go?",
    options: ["var", "makevar", "let", "define"],
    answer: 0,
    explanationSteps: [
        "var declares a variable.",
        "string is used for text.",
        "int is used for integer values.",
        "fmt.Println displays the stored values."
    ]
},

{
    title: "Short Variable Declarations",
    module: "Module 2: Variables and Types",
    subtitle: "Use := to declare and initialise variables.",
    explanation: `
        <p>Inside a function, <code>:=</code> can declare a variable and infer
        its type from the value.</p>
        <p>For example, <code>name := "Elijah"</code> creates a string variable.</p>
    `,
    code: `package main

import "fmt"

func main() {
    name := "Elijah"
    age := 17

    fmt.Println(name)
    fmt.Println(age)
}`,
    output: "Elijah\n17",
    challenge: "Use := to create a variable called language with the value Go.",
    challengeStarter: `package main

import "fmt"

func main() {
    // Declare language here.
}`,
    solution: `package main

import "fmt"

func main() {
    language := "Go"
    fmt.Println(language)
}`,
    hint: "Use language := \"Go\".",
    question: "Where can the short declaration operator := be used?",
    options: [
        "Anywhere, including outside functions",
        "Inside functions",
        "Only in comments",
        "Only in import statements"
    ],
    answer: 1,
    explanationSteps: [
        ":= declares and initialises a variable.",
        "Go infers the variable's type from its initial value.",
        "Short variable declarations are used inside functions."
    ]
},

{
    title: "Constants",
    module: "Module 2: Variables and Types",
    subtitle: "Store values that cannot be reassigned.",
    explanation: `
        <p>Use <code>const</code> to declare a constant.</p>
        <p>A constant represents a value that cannot be reassigned like an ordinary variable.</p>
    `,
    code: `package main

import "fmt"

func main() {
    const school = "ELOMCODE School"
    fmt.Println(school)
}`,
    output: "ELOMCODE School",
    challenge: "Declare a constant called language with the value Go.",
    challengeStarter: `package main

import "fmt"

func main() {
    // Declare your constant.
}`,
    solution: `package main

import "fmt"

func main() {
    const language = "Go"
    fmt.Println(language)
}`,
    hint: "Begin your declaration with const.",
    question: "Which keyword declares a constant?",
    options: ["fixed", "constant", "const", "static"],
    answer: 2,
    explanationSteps: [
        "const declares a constant.",
        "Constants cannot be reassigned.",
        "fmt.Println can print the constant's value."
    ]
},

{
    title: "Basic Data Types",
    module: "Module 2: Variables and Types",
    subtitle: "Explore strings, integers, floats and booleans.",
    explanation: `
        <p>Common Go types include <code>string</code>, <code>int</code>,
        <code>float64</code> and <code>bool</code>.</p>
        <p>Strings hold text, integers hold whole numbers, floating-point types
        hold decimal values, and booleans hold true or false.</p>
    `,
    code: `package main

import "fmt"

func main() {
    var name string = "Elijah"
    var age int = 17
    var score float64 = 89.5
    var learning bool = true

    fmt.Println(name)
    fmt.Println(age)
    fmt.Println(score)
    fmt.Println(learning)
}`,
    output: "Elijah\n17\n89.5\ntrue",
    challenge: "Create and print an integer, a string and a boolean.",
    challengeStarter: `package main

import "fmt"

func main() {
    // Create your variables.
}`,
    solution: `package main

import "fmt"

func main() {
    name := "Elijah"
    age := 17
    learning := true

    fmt.Println(name)
    fmt.Println(age)
    fmt.Println(learning)
}`,
    hint: "Use := to create each variable.",
    question: "Which type represents true or false?",
    options: ["string", "float64", "bool", "int"],
    answer: 2,
    explanationSteps: [
        "string stores text.",
        "int stores whole numbers.",
        "float64 represents floating-point numbers.",
        "bool represents true or false."
    ]
},

{
    title: "Type Conversion",
    module: "Module 2: Variables and Types",
    subtitle: "Convert values from one compatible type to another.",
    explanation: `
        <p>Go does not automatically convert every numeric value between types.</p>
        <p>You can explicitly convert compatible values using expressions such as
        <code>float64(number)</code>.</p>
    `,
    code: `package main

import "fmt"

func main() {
    var number int = 10
    decimal := float64(number)

    fmt.Println(number)
    fmt.Println(decimal)
}`,
    output: "10\n10",
    challenge: "Convert the integer 25 into float64 and print it.",
    challengeStarter: `package main

import "fmt"

func main() {
    number := 25
    // Convert number to float64.
}`,
    solution: `package main

import "fmt"

func main() {
    number := 25
    decimal := float64(number)

    fmt.Println(decimal)
}`,
    hint: "Use float64(number).",
    question: "How can an integer named number be converted to float64?",
    options: [
        "number.float64()",
        "convert(number)",
        "float64(number)",
        "number => float64"
    ],
    answer: 2,
    explanationSteps: [
        "Go supports explicit type conversion.",
        "float64(number) converts a compatible numeric value to float64.",
        "The converted value can be stored in a new variable."
    ]
},

{
    title: "Input and Output",
    module: "Module 3: Operators and Decisions",
    subtitle: "Display information and read user input.",
    explanation: `
        <p><code>fmt.Println</code> prints output.</p>
        <p><code>fmt.Scan</code> can read input into a variable from standard input.</p>
        <p>In this browser playground, programs that require interactive input may
        not work like they do in a local terminal. This example uses a fixed value
        so you can see the output immediately.</p>
    `,
    code: `package main

import "fmt"

func main() {
    name := "Elijah"
    fmt.Println("Hello,", name)
}`,
    output: "Hello, Elijah",
    challenge: "Change the example to greet a person named Ada.",
    challengeStarter: `package main

import "fmt"

func main() {
    name := "Elijah"
    fmt.Println("Hello,", name)
}`,
    solution: `package main

import "fmt"

func main() {
    name := "Ada"
    fmt.Println("Hello,", name)
}`,
    hint: "Change the value stored in name.",
    question: "Which package provides fmt.Println?",
    options: ["math", "fmt", "os", "time"],
    answer: 1,
    explanationSteps: [
        "The fmt package provides formatted input and output.",
        "fmt.Println prints values followed by a newline.",
        "fmt.Scan can read from standard input in supported environments."
    ]
},

{
    title: "Arithmetic Operators",
    module: "Module 3: Operators and Decisions",
    subtitle: "Perform calculations with Go.",
    explanation: `
        <p>Go supports arithmetic operators such as +, -, *, / and %.</p>
        <p>The percent operator returns the remainder of integer division.</p>
    `,
    code: `package main

import "fmt"

func main() {
    a := 10
    b := 3

    fmt.Println(a + b)
    fmt.Println(a - b)
    fmt.Println(a * b)
    fmt.Println(a / b)
    fmt.Println(a % b)
}`,
    output: "13\n7\n30\n3\n1",
    challenge: "Calculate and print the sum of 25 and 15.",
    challengeStarter: `package main

import "fmt"

func main() {
    a := 25
    b := 15

    // Print the sum.
}`,
    solution: `package main

import "fmt"

func main() {
    a := 25
    b := 15

    fmt.Println(a + b)
}`,
    hint: "Use the + operator.",
    question: "What is the result of 10 % 3?",
    options: ["3", "1", "0", "10"],
    answer: 1,
    explanationSteps: [
        "+ adds two values.",
        "- subtracts one value from another.",
        "* multiplies values.",
        "/ performs division.",
        "% returns the remainder of integer division."
    ]
},

{
    title: "Comparison Operators",
    module: "Module 3: Operators and Decisions",
    subtitle: "Compare values and produce boolean results.",
    explanation: `
        <p>Comparison operators include ==, !=, &lt;, &gt;, &lt;= and &gt;=.</p>
        <p>These expressions evaluate to true or false.</p>
    `,
    code: `package main

import "fmt"

func main() {
    a := 10
    b := 5

    fmt.Println(a > b)
    fmt.Println(a == b)
    fmt.Println(a != b)
}`,
    output: "true\nfalse\ntrue",
    challenge: "Check whether 20 is greater than 12.",
    challengeStarter: `package main

import "fmt"

func main() {
    fmt.Println(20 > 12)
}`,
    solution: `package main

import "fmt"

func main() {
    fmt.Println(20 > 12)
}`,
    hint: "Use the greater-than operator >.",
    question: "Which operator checks equality?",
    options: ["=", "==", "!=", "=>"],
    answer: 1,
    explanationSteps: [
        "== checks equality.",
        "!= checks inequality.",
        "> and < compare which value is greater or smaller.",
        "Comparison expressions return boolean values."
    ]
},

{
    title: "Logical Operators",
    module: "Module 3: Operators and Decisions",
    subtitle: "Combine conditions using logical operators.",
    explanation: `
        <p>Go uses <code>&amp;&amp;</code> for logical AND,
        <code>||</code> for logical OR and <code>!</code> for logical NOT.</p>
    `,
    code: `package main

import "fmt"

func main() {
    age := 20
    hasID := true

    fmt.Println(age >= 18 && hasID)
    fmt.Println(age < 18 || hasID)
    fmt.Println(!hasID)
}`,
    output: "true\ntrue\nfalse",
    challenge: "Print true when age is at least 18 and hasID is true.",
    challengeStarter: `package main

import "fmt"

func main() {
    age := 18
    hasID := true

    fmt.Println(age >= 18 && hasID)
}`,
    solution: `package main

import "fmt"

func main() {
    age := 18
    hasID := true

    fmt.Println(age >= 18 && hasID)
}`,
    hint: "Use && to require both conditions to be true.",
    question: "Which operator means logical AND?",
    options: ["||", "!", "&&", "=="],
    answer: 2,
    explanationSteps: [
        "&& is true when both conditions are true.",
        "|| is true when at least one condition is true.",
        "! reverses a boolean value."
    ]
},

{
    title: "If and Else",
    module: "Module 3: Operators and Decisions",
    subtitle: "Make decisions based on conditions.",
    explanation: `
        <p>An if statement runs a block when its condition is true.</p>
        <p>An else block runs when the if condition is false.</p>
    `,
    code: `package main

import "fmt"

func main() {
    score := 75

    if score >= 50 {
        fmt.Println("Pass")
    } else {
        fmt.Println("Try again")
    }
}`,
    output: "Pass",
    challenge: "Print Adult when age is at least 18, otherwise print Minor.",
    challengeStarter: `package main

import "fmt"

func main() {
    age := 17

    // Add an if and else statement.
}`,
    solution: `package main

import "fmt"

func main() {
    age := 17

    if age >= 18 {
        fmt.Println("Adult")
    } else {
        fmt.Println("Minor")
    }
}`,
    hint: "Check whether age >= 18.",
    question: "When does an else block execute?",
    options: [
        "When the if condition is false",
        "Always before if",
        "Only when the program ends",
        "Only inside a loop"
    ],
    answer: 0,
    explanationSteps: [
        "if checks a condition.",
        "The if block runs when the condition is true.",
        "else provides an alternative when the condition is false."
    ]
},

{
    title: "Switch Statements",
    module: "Module 3: Operators and Decisions",
    subtitle: "Choose between multiple possible cases.",
    explanation: `
        <p>A switch statement compares a value against different cases.</p>
        <p>Go automatically exits a matching case by default, so explicit break
        statements are generally unnecessary.</p>
    `,
    code: `package main

import "fmt"

func main() {
    day := 2

    switch day {
    case 1:
        fmt.Println("Monday")
    case 2:
        fmt.Println("Tuesday")
    case 3:
        fmt.Println("Wednesday")
    default:
        fmt.Println("Unknown day")
    }
}`,
    output: "Tuesday",
    challenge: "Use a switch statement to print Red when colour is 1.",
    challengeStarter: `package main

import "fmt"

func main() {
    colour := 1

    // Add your switch statement.
}`,
    solution: `package main

import "fmt"

func main() {
    colour := 1

    switch colour {
    case 1:
        fmt.Println("Red")
    default:
        fmt.Println("Unknown colour")
    }
}`,
    hint: "Create a case 1 block.",
    question: "What is the purpose of default in a switch?",
    options: [
        "It repeats the switch",
        "It handles unmatched cases",
        "It declares a variable",
        "It imports a package"
    ],
    answer: 1,
    explanationSteps: [
        "switch evaluates a value or expression.",
        "case defines a possible match.",
        "default handles cases that did not match another case."
    ]
},

{
    title: "For Loops",
    module: "Module 4: Loops and Collections",
    subtitle: "Repeat instructions using Go's for loop.",
    explanation: `
        <p>Go uses <code>for</code> as its looping construct.</p>
        <p>A loop can include an initial value, a condition and an update statement.</p>
    `,
    code: `package main

import "fmt"

func main() {
    for i := 1; i <= 5; i++ {
        fmt.Println(i)
    }
}`,
    output: "1\n2\n3\n4\n5",
    challenge: "Print the numbers from 1 to 10.",
    challengeStarter: `package main

import "fmt"

func main() {
    for i := 1; i <= 5; i++ {
        fmt.Println(i)
    }
}`,
    solution: `package main

import "fmt"

func main() {
    for i := 1; i <= 10; i++ {
        fmt.Println(i)
    }
}`,
    hint: "Change the loop's upper limit to 10.",
    question: "Which keyword creates a loop in Go?",
    options: ["while", "repeat", "for", "loop"],
    answer: 2,
    explanationSteps: [
        "The loop starts with i := 1.",
        "The condition i <= 5 determines whether another iteration runs.",
        "i++ increases i after each iteration.",
        "fmt.Println prints the current value."
    ]
},

{
    title: "Break and Continue",
    module: "Module 4: Loops and Collections",
    subtitle: "Control the flow of a loop.",
    explanation: `
        <p><code>break</code> exits a loop.</p>
        <p><code>continue</code> skips the rest of the current iteration and moves
        to the next iteration.</p>
    `,
    code: `package main

import "fmt"

func main() {
    for i := 1; i <= 5; i++ {
        if i == 3 {
            continue
        }

        fmt.Println(i)
    }
}`,
    output: "1\n2\n4\n5",
    challenge: "Print 1 to 5 but stop before printing 4.",
    challengeStarter: `package main

import "fmt"

func main() {
    for i := 1; i <= 5; i++ {
        if i == 4 {
            // Stop the loop here.
        }

        fmt.Println(i)
    }
}`,
    solution: `package main

import "fmt"

func main() {
    for i := 1; i <= 5; i++ {
        if i == 4 {
            break
        }

        fmt.Println(i)
    }
}`,
    hint: "Use break when i equals 4.",
    question: "What does continue do?",
    options: [
        "Ends the whole program",
        "Skips to the next loop iteration",
        "Declares a variable",
        "Restarts the computer"
    ],
    answer: 1,
    explanationSteps: [
        "break exits the loop.",
        "continue skips the remaining statements in the current iteration.",
        "Use them to control loop behaviour."
    ]
},

{
    title: "Arrays",
    module: "Module 4: Loops and Collections",
    subtitle: "Store a fixed number of values of the same type.",
    explanation: `
        <p>An array has a fixed length and stores values of one element type.</p>
        <p>Array indexes start at zero.</p>
    `,
    code: `package main

import "fmt"

func main() {
    numbers := [3]int{10, 20, 30}

    fmt.Println(numbers[0])
    fmt.Println(numbers[1])
    fmt.Println(numbers[2])
}`,
    output: "10\n20\n30",
    challenge: "Create an array containing 4, 8 and 12, then print the second value.",
    challengeStarter: `package main

import "fmt"

func main() {
    numbers := [3]int{4, 8, 12}

    // Print the second value.
}`,
    solution: `package main

import "fmt"

func main() {
    numbers := [3]int{4, 8, 12}
    fmt.Println(numbers[1])
}`,
    hint: "The second value has index 1.",
    question: "What is the index of the first array element?",
    options: ["1", "-1", "0", "2"],
    answer: 2,
    explanationSteps: [
        "The array contains three integers.",
        "The first element is at index 0.",
        "The second element is at index 1."
    ]
},

{
    title: "Slices",
    module: "Module 4: Loops and Collections",
    subtitle: "Work with flexible sequences of values.",
    explanation: `
        <p>A slice provides a flexible view into an underlying array.</p>
        <p>Unlike an array's fixed length, a slice can grow when you append values.</p>
    `,
    code: `package main

import "fmt"

func main() {
    fruits := []string{"Apple", "Mango"}

    fruits = append(fruits, "Orange")

    fmt.Println(fruits)
    fmt.Println(len(fruits))
}`,
    output: "[Apple Mango Orange]\n3",
    challenge: "Append Banana to a slice containing Apple and Mango.",
    challengeStarter: `package main

import "fmt"

func main() {
    fruits := []string{"Apple", "Mango"}

    // Append Banana.
    fmt.Println(fruits)
}`,
    solution: `package main

import "fmt"

func main() {
    fruits := []string{"Apple", "Mango"}
    fruits = append(fruits, "Banana")

    fmt.Println(fruits)
}`,
    hint: "Use append(fruits, \"Banana\").",
    question: "Which function can add an element to a slice?",
    options: ["push", "append", "insertOnly", "addSlice"],
    answer: 1,
    explanationSteps: [
        "A slice stores a sequence of values.",
        "append returns a slice with the supplied values added.",
        "len returns the number of elements in a slice."
    ]
},

{
    title: "Maps",
    module: "Module 4: Loops and Collections",
    subtitle: "Store key-value pairs.",
    explanation: `
        <p>A map associates keys with values.</p>
        <p>Maps are useful when you want to look up a value using a key rather
        than a numeric position.</p>
    `,
    code: `package main

import "fmt"

func main() {
    scores := map[string]int{
        "Ada": 90,
        "Elijah": 85,
    }

    fmt.Println(scores["Ada"])
    fmt.Println(scores["Elijah"])
}`,
    output: "90\n85",
    challenge: "Create a map that stores the score 95 for Ada and print it.",
    challengeStarter: `package main

import "fmt"

func main() {
    // Create your map.
}`,
    solution: `package main

import "fmt"

func main() {
    scores := map[string]int{
        "Ada": 95,
    }

    fmt.Println(scores["Ada"])
}`,
    hint: "Use map[string]int.",
    question: "What does a map store?",
    options: [
        "Only comments",
        "Key-value pairs",
        "Only functions",
        "Only arrays"
    ],
    answer: 1,
    explanationSteps: [
        "map[string]int uses string keys and integer values.",
        "The key \"Ada\" maps to the value 90 in the example.",
        "Use a key to retrieve its associated value."
    ]
},

{
    title: "Range",
    module: "Module 4: Loops and Collections",
    subtitle: "Iterate over collections.",
    explanation: `
        <p>The range keyword can iterate over arrays, slices, maps and other
        supported data structures.</p>
        <p>When iterating over a slice, range can provide both the index and value.</p>
    `,
    code: `package main

import "fmt"

func main() {
    names := []string{"Ada", "Elijah", "Musa"}

    for index, name := range names {
        fmt.Println(index, name)
    }
}`,
    output: "0 Ada\n1 Elijah\n2 Musa",
    challenge: "Use range to print each number in a slice.",
    challengeStarter: `package main

import "fmt"

func main() {
    numbers := []int{5, 10, 15}

    // Loop over numbers using range.
}`,
    solution: `package main

import "fmt"

func main() {
    numbers := []int{5, 10, 15}

    for _, number := range numbers {
        fmt.Println(number)
    }
}`,
    hint: "Use for _, number := range numbers.",
    question: "What can range provide when iterating over a slice?",
    options: [
        "Only a new package",
        "An index and a value",
        "A web page",
        "A new Go installation"
    ],
    answer: 1,
    explanationSteps: [
        "range iterates through elements of a collection.",
        "The first value is commonly the index for a slice.",
        "The second value is the element itself.",
        "Use _ to ignore a value you do not need."
    ]
},

{
    title: "Functions",
    module: "Module 5: Functions",
    subtitle: "Organise reusable pieces of code.",
    explanation: `
        <p>A function groups statements into a reusable unit.</p>
        <p>Declare a function with the func keyword.</p>
    `,
    code: `package main

import "fmt"

func greet() {
    fmt.Println("Welcome to Go!")
}

func main() {
    greet()
    greet()
}`,
    output: "Welcome to Go!\nWelcome to Go!",
    challenge: "Create a function named sayHello that prints Hello, Go!",
    challengeStarter: `package main

import "fmt"

func main() {
    // Call sayHello here.
}`,
    solution: `package main

import "fmt"

func sayHello() {
    fmt.Println("Hello, Go!")
}

func main() {
    sayHello()
}`,
    hint: "Declare func sayHello() before main.",
    question: "Which keyword declares a function?",
    options: ["function", "def", "func", "method"],
    answer: 2,
    explanationSteps: [
        "func declares a function.",
        "greet defines reusable printing instructions.",
        "Calling greet() runs those instructions."
    ]
},

{
    title: "Function Parameters",
    module: "Module 5: Functions",
    subtitle: "Pass information into functions.",
    explanation: `
        <p>Parameters allow a function to receive values from the code that calls it.</p>
        <p>Each parameter has a name and type.</p>
    `,
    code: `package main

import "fmt"

func greet(name string) {
    fmt.Println("Hello,", name)
}

func main() {
    greet("Ada")
    greet("Elijah")
}`,
    output: "Hello, Ada\nHello, Elijah",
    challenge: "Create a function that receives a name and greets that person.",
    challengeStarter: `package main

import "fmt"

func greet(name string) {
    // Print a greeting.
}

func main() {
    greet("Musa")
}`,
    solution: `package main

import "fmt"

func greet(name string) {
    fmt.Println("Hello,", name)
}

func main() {
    greet("Musa")
}`,
    hint: "Print the name parameter.",
    question: "What is a parameter used for?",
    options: [
        "To pass information into a function",
        "To install Go",
        "To declare a package",
        "To end a program"
    ],
    answer: 0,
    explanationSteps: [
        "The name parameter receives a string.",
        "The caller supplies an argument such as \"Ada\".",
        "The function can use that value in its statements."
    ]
},

{
    title: "Return Values",
    module: "Module 5: Functions",
    subtitle: "Make functions return results.",
    explanation: `
        <p>A function can return a value to the code that calls it.</p>
        <p>Declare the return type after the parameter list.</p>
    `,
    code: `package main

import "fmt"

func add(a int, b int) int {
    return a + b
}

func main() {
    result := add(5, 7)
    fmt.Println(result)
}`,
    output: "12",
    challenge: "Write a function that multiplies two integers and returns the result.",
    challengeStarter: `package main

import "fmt"

func multiply(a int, b int) int {
    // Return the product.
    return 0
}

func main() {
    fmt.Println(multiply(4, 3))
}`,
    solution: `package main

import "fmt"

func multiply(a int, b int) int {
    return a * b
}

func main() {
    fmt.Println(multiply(4, 3))
}`,
    hint: "Return a * b.",
    question: "Which keyword sends a result back from a function?",
    options: ["give", "send", "return", "yield"],
    answer: 2,
    explanationSteps: [
        "The function accepts two integers.",
        "The final int declares the return type.",
        "return sends the calculated result back to the caller."
    ]
},

{
    title: "Multiple Return Values",
    module: "Module 5: Functions",
    subtitle: "Return more than one value from a function.",
    explanation: `
        <p>Go functions can return multiple values.</p>
        <p>This is often used to return a result alongside an error.</p>
    `,
    code: `package main

import "fmt"

func calculate(a, b int) (int, int) {
    return a + b, a * b
}

func main() {
    sum, product := calculate(4, 3)

    fmt.Println(sum)
    fmt.Println(product)
}`,
    output: "7\n12",
    challenge: "Create a function that returns the sum and difference of two integers.",
    challengeStarter: `package main

import "fmt"

func calculate(a, b int) (int, int) {
    // Return sum and difference.
    return 0, 0
}

func main() {
    sum, difference := calculate(9, 4)
    fmt.Println(sum)
    fmt.Println(difference)
}`,
    solution: `package main

import "fmt"

func calculate(a, b int) (int, int) {
    return a + b, a - b
}

func main() {
    sum, difference := calculate(9, 4)
    fmt.Println(sum)
    fmt.Println(difference)
}`,
    hint: "Return a + b and a - b.",
    question: "Can a Go function return multiple values?",
    options: ["No", "Yes", "Only strings", "Only in tests"],
    answer: 1,
    explanationSteps: [
        "The function declares two return types.",
        "return provides two values.",
        "The caller can receive both values in separate variables."
    ]
},

{
    title: "Variadic Functions",
    module: "Module 5: Functions",
    subtitle: "Accept a variable number of arguments.",
    explanation: `
        <p>A variadic function can accept zero or more arguments of a specified type.</p>
        <p>Use an ellipsis before the parameter type.</p>
    `,
    code: `package main

import "fmt"

func sum(numbers ...int) int {
    total := 0

    for _, number := range numbers {
        total += number
    }

    return total
}

func main() {
    fmt.Println(sum(1, 2, 3))
    fmt.Println(sum(5, 10))
}`,
    output: "6\n15",
    challenge: "Create a variadic function that adds any number of integers.",
    challengeStarter: `package main

import "fmt"

func sum(numbers ...int) int {
    total := 0

    // Add every number to total.

    return total
}

func main() {
    fmt.Println(sum(2, 4, 6))
}`,
    solution: `package main

import "fmt"

func sum(numbers ...int) int {
    total := 0

    for _, number := range numbers {
        total += number
    }

    return total
}

func main() {
    fmt.Println(sum(2, 4, 6))
}`,
    hint: "Loop through numbers using range.",
    question: "What does ...int mean in a parameter declaration?",
    options: [
        "The function accepts a variable number of integers",
        "The function accepts only one integer",
        "The function returns a string",
        "The function cannot be called"
    ],
    answer: 0,
    explanationSteps: [
        "The ellipsis declares a variadic parameter.",
        "Inside the function, the parameter behaves like a slice.",
        "A loop can process each supplied integer."
    ]
},

{
    title: "Anonymous Functions and Closures",
    module: "Module 5: Functions",
    subtitle: "Create functions without naming them.",
    explanation: `
        <p>An anonymous function is a function without a declared name.</p>
        <p>A closure can refer to variables from the surrounding scope.</p>
    `,
    code: `package main

import "fmt"

func main() {
    message := "Hello"

    greet := func() {
        fmt.Println(message)
    }

    greet()
}`,
    output: "Hello",
    challenge: "Create an anonymous function that prints Go is fun!",
    challengeStarter: `package main

import "fmt"

func main() {
    // Create and call an anonymous function.
}`,
    solution: `package main

import "fmt"

func main() {
    greet := func() {
        fmt.Println("Go is fun!")
    }

    greet()
}`,
    hint: "Assign func() { ... } to a variable.",
    question: "What is an anonymous function?",
    options: [
        "A function without a declared name",
        "A function that cannot run",
        "A package",
        "A data type"
    ],
    answer: 0,
    explanationSteps: [
        "An anonymous function is defined without a function name.",
        "It can be assigned to a variable.",
        "The variable can then be called like a function."
    ]
},

{
    title: "Pointers",
    module: "Module 6: Structs and Methods",
    subtitle: "Work with memory addresses and indirect access.",
    explanation: `
        <p>A pointer holds the memory address of a value.</p>
        <p>The &amp; operator obtains an address, while * can access the value
        through a pointer.</p>
    `,
    code: `package main

import "fmt"

func main() {
    number := 10
    pointer := &number

    fmt.Println(number)
    fmt.Println(*pointer)

    *pointer = 25
    fmt.Println(number)
}`,
    output: "10\n10\n25",
    challenge: "Use a pointer to change a variable from 5 to 20.",
    challengeStarter: `package main

import "fmt"

func main() {
    number := 5
    pointer := &number

    // Change the value through the pointer.
    fmt.Println(number)
}`,
    solution: `package main

import "fmt"

func main() {
    number := 5
    pointer := &number

    *pointer = 20
    fmt.Println(number)
}`,
    hint: "Assign 20 to *pointer.",
    question: "Which operator obtains a variable's address?",
    options: ["*", "&", "%", "#"],
    answer: 1,
    explanationSteps: [
        "&number obtains the address of number.",
        "pointer stores that address.",
        "*pointer accesses the value at that address.",
        "Assigning through the pointer changes the original variable."
    ]
},

{
    title: "Structs",
    module: "Module 6: Structs and Methods",
    subtitle: "Group related data into a custom type.",
    explanation: `
        <p>A struct groups fields under one type.</p>
        <p>It is useful for representing objects such as students, products or users.</p>
    `,
    code: `package main

import "fmt"

type Student struct {
    Name string
    Age  int
}

func main() {
    student := Student{
        Name: "Elijah",
        Age:  17,
    }

    fmt.Println(student.Name)
    fmt.Println(student.Age)
}`,
    output: "Elijah\n17",
    challenge: "Create a Product struct with Name and Price fields.",
    challengeStarter: `package main

import "fmt"

// Declare a Product struct here.

func main() {
    // Create a product and print its name.
}`,
    solution: `package main

import "fmt"

type Product struct {
    Name  string
    Price int
}

func main() {
    product := Product{
        Name:  "Laptop",
        Price: 500,
    }

    fmt.Println(product.Name)
}`,
    hint: "Declare type Product struct with fields inside braces.",
    question: "What does a struct group together?",
    options: [
        "Related fields",
        "Only imports",
        "Only comments",
        "Only loops"
    ],
    answer: 0,
    explanationSteps: [
        "type Student struct declares a custom struct type.",
        "Name and Age are fields.",
        "A Student value can store both pieces of information."
    ]
},

{
    title: "Methods",
    module: "Module 6: Structs and Methods",
    subtitle: "Associate behaviour with a type.",
    explanation: `
        <p>A method is a function with a receiver.</p>
        <p>Methods let a type expose behaviour that works with its values.</p>
    `,
    code: `package main

import "fmt"

type Student struct {
    Name string
}

func (s Student) Greet() {
    fmt.Println("Hello,", s.Name)
}

func main() {
    student := Student{Name: "Ada"}
    student.Greet()
}`,
    output: "Hello, Ada",
    challenge: "Add a method called ShowName to a Person struct.",
    challengeStarter: `package main

import "fmt"

type Person struct {
    Name string
}

// Add a method here.

func main() {
    person := Person{Name: "Musa"}
    person.ShowName()
}`,
    solution: `package main

import "fmt"

type Person struct {
    Name string
}

func (p Person) ShowName() {
    fmt.Println(p.Name)
}

func main() {
    person := Person{Name: "Musa"}
    person.ShowName()
}`,
    hint: "Use func (p Person) ShowName().",
    question: "What does a method have that an ordinary function does not?",
    options: [
        "A receiver",
        "A package",
        "A compiler",
        "A loop"
    ],
    answer: 0,
    explanationSteps: [
        "Student is a custom struct type.",
        "The receiver (s Student) connects Greet to Student.",
        "Calling student.Greet() invokes the method."
    ]
},

{
    title: "Interfaces",
    module: "Module 7: Interfaces and Packages",
    subtitle: "Describe behaviour through method sets.",
    explanation: `
        <p>An interface specifies a set of methods.</p>
        <p>A type satisfies an interface by implementing the required methods;
        explicit declarations are not normally required.</p>
    `,
    code: `package main

import "fmt"

type Speaker interface {
    Speak()
}

type Person struct{}

func (Person) Speak() {
    fmt.Println("Hello!")
}

func announce(s Speaker) {
    s.Speak()
}

func main() {
    announce(Person{})
}`,
    output: "Hello!",
    challenge: "Create a Greeter interface with a Greet method and implement it.",
    challengeStarter: `package main

import "fmt"

type Greeter interface {
    Greet()
}

type Person struct{}

// Implement Greet here.

func main() {
    var g Greeter = Person{}
    g.Greet()
}`,
    solution: `package main

import "fmt"

type Greeter interface {
    Greet()
}

type Person struct{}

func (Person) Greet() {
    fmt.Println("Welcome!")
}

func main() {
    var g Greeter = Person{}
    g.Greet()
}`,
    hint: "Add a Greet method to Person.",
    question: "How does a Go type normally satisfy an interface?",
    options: [
        "By implementing its required methods",
        "By importing the interface",
        "By using a special implements keyword",
        "By creating a constant"
    ],
    answer: 0,
    explanationSteps: [
        "Speaker requires a Speak method.",
        "Person implements Speak.",
        "Person therefore satisfies Speaker.",
        "announce can accept any value satisfying Speaker."
    ]
},

{
    title: "Packages and Imports",
    module: "Module 7: Interfaces and Packages",
    subtitle: "Organise code and reuse standard libraries.",
    explanation: `
        <p>A package organises related Go source code.</p>
        <p>Use import declarations to use exported identifiers from other packages.</p>
        <p>In Go, identifiers beginning with an uppercase letter are exported.</p>
    `,
    code: `package main

import (
    "fmt"
    "strings"
)

func main() {
    message := "hello go"

    fmt.Println(strings.ToUpper(message))
}`,
    output: "HELLO GO",
    challenge: "Use strings.ToLower to print GO PROGRAMMING in lowercase.",
    challengeStarter: `package main

import (
    "fmt"
    "strings"
)

func main() {
    message := "GO PROGRAMMING"

    // Print the lowercase version.
}`,
    solution: `package main

import (
    "fmt"
    "strings"
)

func main() {
    message := "GO PROGRAMMING"
    fmt.Println(strings.ToLower(message))
}`,
    hint: "Call strings.ToLower(message).",
    question: "Which package provides strings.ToUpper?",
    options: ["fmt", "math", "strings", "os"],
    answer: 2,
    explanationSteps: [
        "fmt provides formatted input and output.",
        "strings provides functions for working with strings.",
        "strings.ToUpper converts letters to uppercase."
    ]
},

{
    title: "Exported and Unexported Names",
    module: "Module 7: Interfaces and Packages",
    subtitle: "Understand visibility in Go packages.",
    explanation: `
        <p>In Go, a name beginning with an uppercase letter is exported from
        its package.</p>
        <p>A name beginning with a lowercase letter is unexported and can only
        be accessed within its own package.</p>
    `,
    code: `package main

import "fmt"

func Greet() {
    fmt.Println("This function is exported.")
}

func main() {
    Greet()
}`,
    output: "This function is exported.",
    challenge: "Declare an exported function named Welcome.",
    challengeStarter: `package main

import "fmt"

// Declare an exported function named Welcome.

func main() {
    Welcome()
}`,
    solution: `package main

import "fmt"

func Welcome() {
    fmt.Println("Welcome!")
}

func main() {
    Welcome()
}`,
    hint: "Start the function name with an uppercase W.",
    question: "Which function name is exported?",
    options: ["greet", "show", "Welcome", "calculate"],
    answer: 2,
    explanationSteps: [
        "Go uses capitalization to determine whether an identifier is exported.",
        "Welcome begins with an uppercase letter.",
        "A lowercase function name is unexported."
    ]
},

{
    title: "Error Handling",
    module: "Module 8: Errors and Reliability",
    subtitle: "Handle errors explicitly.",
    explanation: `
        <p>Go commonly represents an error using the built-in error interface.</p>
        <p>Functions may return an error alongside a result. Callers normally check
        whether the error is nil.</p>
    `,
    code: `package main

import (
    "errors"
    "fmt"
)

func checkAge(age int) error {
    if age < 18 {
        return errors.New("age is below 18")
    }

    return nil
}

func main() {
    err := checkAge(20)

    if err != nil {
        fmt.Println(err)
    } else {
        fmt.Println("Age accepted")
    }
}`,
    output: "Age accepted",
    challenge: "Modify the program so age 15 displays the error message.",
    challengeStarter: `package main

import (
    "errors"
    "fmt"
)

func checkAge(age int) error {
    if age < 18 {
        return errors.New("age is below 18")
    }

    return nil
}

func main() {
    err := checkAge(15)

    if err != nil {
        fmt.Println(err)
    }
}`,
    solution: `package main

import (
    "errors"
    "fmt"
)

func checkAge(age int) error {
    if age < 18 {
        return errors.New("age is below 18")
    }

    return nil
}

func main() {
    err := checkAge(15)

    if err != nil {
        fmt.Println(err)
    }
}`,
    hint: "The provided challenge already calls checkAge with 15.",
    question: "What does a nil error normally indicate?",
    options: [
        "An error occurred",
        "No error was reported",
        "The program must stop",
        "The function is missing"
    ],
    answer: 1,
    explanationSteps: [
        "errors.New creates an error value.",
        "The function returns an error for ages below 18.",
        "nil indicates that no error was reported.",
        "The caller checks the returned error."
    ]
},

{
    title: "Defer",
    module: "Module 8: Errors and Reliability",
    subtitle: "Schedule a function call for the surrounding function's exit.",
    explanation: `
        <p>The defer keyword schedules a function call to run when the surrounding
        function returns.</p>
        <p>Deferred calls execute in last-in, first-out order.</p>
    `,
    code: `package main

import "fmt"

func main() {
    defer fmt.Println("Third")
    defer fmt.Println("Second")

    fmt.Println("First")
}`,
    output: "First\nSecond\nThird",
    challenge: "Use defer to print Goodbye after printing Hello.",
    challengeStarter: `package main

import "fmt"

func main() {
    // Defer the goodbye message.
    fmt.Println("Hello")
}`,
    solution: `package main

import "fmt"

func main() {
    defer fmt.Println("Goodbye")
    fmt.Println("Hello")
}`,
    hint: "Put defer before fmt.Println(\"Hello\").",
    question: "In what order do deferred calls execute?",
    options: [
        "First-in, first-out",
        "Random order",
        "Last-in, first-out",
        "Alphabetical order"
    ],
    answer: 2,
    explanationSteps: [
        "defer schedules a function call.",
        "The deferred calls execute when the surrounding function returns.",
        "Multiple deferred calls execute in reverse order."
    ]
},

{
    title: "Panic and Recover",
    module: "Module 8: Errors and Reliability",
    subtitle: "Understand exceptional program flow.",
    explanation: `
        <p>panic stops normal execution and begins unwinding the current goroutine.</p>
        <p>recover can regain control from a panic when called directly by a deferred
        function in the same goroutine.</p>
        <p>Ordinary error returns are preferable for many expected failure cases.</p>
    `,
    code: `package main

import "fmt"

func safeFunction() {
    defer func() {
        if value := recover(); value != nil {
            fmt.Println("Recovered from panic")
        }
    }()

    panic("something went wrong")
}

func main() {
    safeFunction()
    fmt.Println("Program continues")
}`,
    output: "Recovered from panic\nProgram continues",
    challenge: "Use defer and recover to handle a panic.",
    challengeStarter: `package main

import "fmt"

func safeFunction() {
    defer func() {
        // Recover from a panic.
    }()

    panic("problem")
}

func main() {
    safeFunction()
    fmt.Println("Program continues")
}`,
    solution: `package main

import "fmt"

func safeFunction() {
    defer func() {
        if recover() != nil {
            fmt.Println("Panic handled")
        }
    }()

    panic("problem")
}

func main() {
    safeFunction()
    fmt.Println("Program continues")
}`,
    hint: "Call recover inside a deferred function.",
    question: "Where must recover be called to handle a panic?",
    options: [
        "Inside a deferred function in the same goroutine",
        "Only inside main",
        "Only in a loop",
        "Inside a comment"
    ],
    answer: 0,
    explanationSteps: [
        "panic interrupts ordinary execution.",
        "A deferred function still runs while the goroutine unwinds.",
        "recover can stop the panic from continuing when used in the proper context."
    ]
},

{
    title: "File Handling",
    module: "Module 9: Files and Data",
    subtitle: "Understand reading and writing files.",
    explanation: `
        <p>The os package provides file-related functions.</p>
        <p>File access depends on the environment. Browser-based Go playgrounds
        generally do not provide ordinary access to your computer's files.</p>
        <p>This example demonstrates a string in memory so it can run in the playground.</p>
    `,
    code: `package main

import (
    "fmt"
    "strings"
)

func main() {
    content := "Welcome to ELOMCODE"
    reader := strings.NewReader(content)

    fmt.Println(reader.Len())
    fmt.Println(content)
}`,
    output: "19\nWelcome to ELOMCODE",
    challenge: "Create a string and print the number of bytes it contains.",
    challengeStarter: `package main

import (
    "fmt"
    "strings"
)

func main() {
    content := "Go programming"
    reader := strings.NewReader(content)

    // Print the number of bytes.
}`,
    solution: `package main

import (
    "fmt"
    "strings"
)

func main() {
    content := "Go programming"
    reader := strings.NewReader(content)

    fmt.Println(reader.Len())
}`,
    hint: "Use reader.Len().",
    question: "Which standard package provides many operating-system file operations?",
    options: ["os", "math", "fmt", "sort"],
    answer: 0,
    explanationSteps: [
        "The os package exposes operating-system functionality.",
        "File access depends on the environment's permissions and restrictions.",
        "strings.NewReader can provide an in-memory reader for text."
    ]
},

{
    title: "JSON Encoding and Decoding",
    module: "Module 9: Files and Data",
    subtitle: "Exchange structured data using JSON.",
    explanation: `
        <p>JSON is a common data format for web APIs and applications.</p>
        <p>The encoding/json package can marshal Go values into JSON and unmarshal
        JSON data into Go values.</p>
    `,
    code: `package main

import (
    "encoding/json"
    "fmt"
)

type Student struct {
    Name string \`json:"name"\`
    Age  int    \`json:"age"\`
}

func main() {
    student := Student{
        Name: "Ada",
        Age:  20,
    }

    data, err := json.Marshal(student)

    if err != nil {
        fmt.Println(err)
        return
    }

    fmt.Println(string(data))
}`,
    output: '{"name":"Ada","age":20}',
    challenge: "Encode a struct containing a product name and price into JSON.",
    challengeStarter: `package main

import (
    "encoding/json"
    "fmt"
)

type Product struct {
    Name  string \`json:"name"\`
    Price int    \`json:"price"\`
}

func main() {
    product := Product{Name: "Laptop", Price: 500}

    data, err := json.Marshal(product)
    if err != nil {
        fmt.Println(err)
        return
    }

    fmt.Println(string(data))
}`,
    solution: `package main

import (
    "encoding/json"
    "fmt"
)

type Product struct {
    Name  string \`json:"name"\`
    Price int    \`json:"price"\`
}

func main() {
    product := Product{Name: "Laptop", Price: 500}

    data, err := json.Marshal(product)
    if err != nil {
        fmt.Println(err)
        return
    }

    fmt.Println(string(data))
}`,
    hint: "Use json.Marshal and print string(data).",
    question: "Which package handles JSON encoding and decoding?",
    options: ["encoding/json", "fmt/json", "jsonify", "net/json"],
    answer: 0,
    explanationSteps: [
        "The Student struct defines fields to encode.",
        "Struct tags define JSON field names.",
        "json.Marshal converts the value into JSON bytes.",
        "string(data) converts those bytes to a printable string."
    ]
},

{
    title: "Strings and Formatting",
    module: "Module 9: Files and Data",
    subtitle: "Manipulate and format text.",
    explanation: `
        <p>The strings package provides common text operations.</p>
        <p>The fmt package supports formatted output, including placeholders such
        as %s for strings and %d for integers.</p>
    `,
    code: `package main

import (
    "fmt"
    "strings"
)

func main() {
    name := "elijah"

    fmt.Println(strings.ToUpper(name))
    fmt.Printf("Length: %d\\n", len(name))
    fmt.Printf("Hello, %s!\\n", name)
}`,
    output: "ELIJAH\nLength: 6\nHello, elijah!",
    challenge: "Print a person's name in uppercase and display its length.",
    challengeStarter: `package main

import (
    "fmt"
    "strings"
)

func main() {
    name := "ada"

    fmt.Println(strings.ToUpper(name))
    fmt.Printf("Length: %d\\n", len(name))
}`,
    solution: `package main

import (
    "fmt"
    "strings"
)

func main() {
    name := "ada"

    fmt.Println(strings.ToUpper(name))
    fmt.Printf("Length: %d\\n", len(name))
}`,
    hint: "Use strings.ToUpper and len.",
    question: "Which format verb commonly represents a string in fmt.Printf?",
    options: ["%d", "%s", "%f", "%t"],
    answer: 1,
    explanationSteps: [
        "strings.ToUpper converts text to uppercase.",
        "len returns the number of bytes in a string.",
        "%d formats an integer.",
        "%s formats a string."
    ]
},

{
    title: "Goroutines",
    module: "Module 10: Concurrency",
    subtitle: "Run functions concurrently.",
    explanation: `
        <p>A goroutine is a lightweight execution unit managed by the Go runtime.</p>
        <p>Use the go keyword to start a function call in a new goroutine.</p>
        <p>Concurrent output order can vary. This example uses a channel to ensure
        that the message is received before the program exits.</p>
    `,
    code: `package main

import "fmt"

func greet(done chan bool) {
    fmt.Println("Hello from a goroutine!")
    done <- true
}

func main() {
    done := make(chan bool)

    go greet(done)

    <-done
    fmt.Println("Main function continues")
}`,
    output: "Hello from a goroutine!\nMain function continues",
    challenge: "Start a goroutine that sends a message through a channel.",
    challengeStarter: `package main

import "fmt"

func main() {
    message := make(chan string)

    go func() {
        message <- "Hello from Go!"
    }()

    fmt.Println(<-message)
}`,
    solution: `package main

import "fmt"

func main() {
    message := make(chan string)

    go func() {
        message <- "Hello from Go!"
    }()

    fmt.Println(<-message)
}`,
    hint: "Send the message with <- and receive it from the channel.",
    question: "Which keyword starts a function call in a new goroutine?",
    options: ["async", "parallel", "go", "thread"],
    answer: 2,
    explanationSteps: [
        "The go keyword starts a goroutine.",
        "The goroutine can execute concurrently with other work.",
        "A channel can coordinate communication between goroutines.",
        "Waiting for the message ensures the program does not exit too early."
    ]
},

{
    title: "Channels",
    module: "Module 10: Concurrency",
    subtitle: "Communicate between goroutines.",
    explanation: `
        <p>Channels provide a way for goroutines to communicate.</p>
        <p>Use the arrow operator to send and receive values.</p>
    `,
    code: `package main

import "fmt"

func main() {
    messages := make(chan string)

    go func() {
        messages <- "Message received"
    }()

    fmt.Println(<-messages)
}`,
    output: "Message received",
    challenge: "Send the number 100 through a channel and print it.",
    challengeStarter: `package main

import "fmt"

func main() {
    numbers := make(chan int)

    go func() {
        numbers <- 100
    }()

    fmt.Println(<-numbers)
}`,
    solution: `package main

import "fmt"

func main() {
    numbers := make(chan int)

    go func() {
        numbers <- 100
    }()

    fmt.Println(<-numbers)
}`,
    hint: "Use <- to send 100 and receive it.",
    question: "What are Go channels primarily used for?",
    options: [
        "Communicating between goroutines",
        "Styling a web page",
        "Installing packages",
        "Declaring constants"
    ],
    answer: 0,
    explanationSteps: [
        "make(chan string) creates a channel for strings.",
        "The goroutine sends a message to the channel.",
        "The receiving expression reads the message.",
        "The received string is printed."
    ]
},

{
    title: "Buffered Channels",
    module: "Module 10: Concurrency",
    subtitle: "Allow channels to hold a limited number of values.",
    explanation: `
        <p>A buffered channel can hold a limited number of values without requiring
        an immediate receiver for every send.</p>
        <p>Sending blocks when the buffer is full.</p>
    `,
    code: `package main

import "fmt"

func main() {
    numbers := make(chan int, 2)

    numbers <- 10
    numbers <- 20

    fmt.Println(<-numbers)
    fmt.Println(<-numbers)
}`,
    output: "10\n20",
    challenge: "Create a buffered channel with capacity 3 and send two values.",
    challengeStarter: `package main

import "fmt"

func main() {
    numbers := make(chan int, 3)

    numbers <- 7
    numbers <- 14

    fmt.Println(<-numbers)
    fmt.Println(<-numbers)
}`,
    solution: `package main

import "fmt"

func main() {
    numbers := make(chan int, 3)

    numbers <- 7
    numbers <- 14

    fmt.Println(<-numbers)
    fmt.Println(<-numbers)
}`,
    hint: "The number after the comma is the buffer capacity.",
    question: "What does the capacity in make(chan int, 2) specify?",
    options: [
        "The number of packages",
        "The channel's buffer capacity",
        "The number of functions",
        "The number of goroutines allowed in Go"
    ],
    answer: 1,
    explanationSteps: [
        "The channel buffer can store two integers.",
        "Values can be sent while buffer space remains.",
        "Receiving removes values from the channel."
    ]
},

{
    title: "Select Statements",
    module: "Module 10: Concurrency",
    subtitle: "Wait on multiple channel operations.",
    explanation: `
        <p>A select statement lets a goroutine wait on multiple channel operations.</p>
        <p>If more than one case is ready, Go chooses one ready case pseudo-randomly.</p>
    `,
    code: `package main

import "fmt"

func main() {
    first := make(chan string, 1)
    second := make(chan string, 1)

    first <- "First channel"

    select {
    case message := <-first:
        fmt.Println(message)
    case message := <-second:
        fmt.Println(message)
    default:
        fmt.Println("No channel ready")
    }
}`,
    output: "First channel",
    challenge: "Use select to receive a value from a ready channel.",
    challengeStarter: `package main

import "fmt"

func main() {
    messages := make(chan string, 1)
    messages <- "Go is powerful"

    select {
    case message := <-messages:
        fmt.Println(message)
    default:
        fmt.Println("Nothing ready")
    }
}`,
    solution: `package main

import "fmt"

func main() {
    messages := make(chan string, 1)
    messages <- "Go is powerful"

    select {
    case message := <-messages:
        fmt.Println(message)
    default:
        fmt.Println("Nothing ready")
    }
}`,
    hint: "Use a case that receives from the channel.",
    question: "What does select help a goroutine do?",
    options: [
        "Wait on multiple channel operations",
        "Declare a package",
        "Convert integers to strings",
        "Install the compiler"
    ],
    answer: 0,
    explanationSteps: [
        "select examines the available communication cases.",
        "A ready receive operation can be selected.",
        "default runs when no other case is ready."
    ]
},

{
    title: "Mutexes and Shared Data",
    module: "Module 10: Concurrency",
    subtitle: "Protect shared data when using multiple goroutines.",
    explanation: `
        <p>When goroutines access shared mutable data, unsynchronised access can
        cause data races.</p>
        <p>A mutex can protect a critical section. Use sync.Mutex with Lock and Unlock.</p>
    `,
    code: `package main

import (
    "fmt"
    "sync"
)

func main() {
    var mutex sync.Mutex
    counter := 0

    mutex.Lock()
    counter++
    mutex.Unlock()

    fmt.Println(counter)
}`,
    output: "1",
    challenge: "Use a mutex to protect an increment of a counter.",
    challengeStarter: `package main

import (
    "fmt"
    "sync"
)

func main() {
    var mutex sync.Mutex
    counter := 0

    mutex.Lock()
    counter = counter + 5
    mutex.Unlock()

    fmt.Println(counter)
}`,
    solution: `package main

import (
    "fmt"
    "sync"
)

func main() {
    var mutex sync.Mutex
    counter := 0

    mutex.Lock()
    counter++
    mutex.Unlock()

    fmt.Println(counter)
}`,
    hint: "Lock before accessing the shared value and unlock afterward.",
    question: "What is a mutex used for?",
    options: [
        "Protecting shared data from unsynchronised access",
        "Printing text",
        "Declaring an array",
        "Importing JSON"
    ],
    answer: 0,
    explanationSteps: [
        "sync.Mutex provides mutual exclusion.",
        "Lock acquires the lock.",
        "Unlock releases the lock.",
        "For more complex code, defer Unlock after successfully locking."
    ]
},

{
    title: "HTTP Servers",
    module: "Module 11: Web Development",
    subtitle: "Build a basic web server with Go.",
    explanation: `
        <p>The net/http package provides tools for HTTP clients and servers.</p>
        <p>A local server example is useful when running Go on your own computer.
        The online playground may restrict opening network ports, so this lesson
        demonstrates the handler logic without starting a server.</p>
    `,
    code: `package main

import (
    "fmt"
    "net/http"
    "net/http/httptest"
)

func hello(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "Hello from Go!")
}

func main() {
    request := httptest.NewRequest("GET", "/", nil)
    response := httptest.NewRecorder()

    hello(response, request)

    fmt.Println(response.Body.String())
}`,
    output: "Hello from Go!",
    challenge: "Create a handler that returns Welcome to ELOMCODE.",
    challengeStarter: `package main

import (
    "fmt"
    "net/http"
    "net/http/httptest"
)

func welcome(w http.ResponseWriter, r *http.Request) {
    // Write a response.
}

func main() {
    request := httptest.NewRequest("GET", "/", nil)
    response := httptest.NewRecorder()

    welcome(response, request)
    fmt.Println(response.Body.String())
}`,
    solution: `package main

import (
    "fmt"
    "net/http"
    "net/http/httptest"
)

func welcome(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "Welcome to ELOMCODE")
}

func main() {
    request := httptest.NewRequest("GET", "/", nil)
    response := httptest.NewRecorder()

    welcome(response, request)
    fmt.Println(response.Body.String())
}`,
    hint: "Use fmt.Fprint(w, \"Welcome to ELOMCODE\").",
    question: "Which standard Go package provides HTTP server functionality?",
    options: ["net/http", "web/server", "httpgo", "fmt/web"],
    answer: 0,
    explanationSteps: [
        "net/http contains HTTP server and client functionality.",
        "A handler receives a ResponseWriter and a Request.",
        "fmt.Fprint can write a string to the response writer.",
        "httptest can test handlers without opening a network port."
    ]
},

{
    title: "HTTP Requests and APIs",
    module: "Module 11: Web Development",
    subtitle: "Understand how Go applications communicate with APIs.",
    explanation: `
        <p>An HTTP client can request data from a web service.</p>
        <p>API calls depend on network access and the service's availability.</p>
        <p>This example uses a local HTTP test server, so it can demonstrate
        request and response handling without depending on an external API.</p>
    `,
    code: `package main

import (
    "fmt"
    "net/http"
    "net/http/httptest"
)

func main() {
    server := httptest.NewServer(
        http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
            fmt.Fprint(w, "API response")
        }),
    )
    defer server.Close()

    response, err := http.Get(server.URL)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer response.Body.Close()

    fmt.Println(response.StatusCode)
}`,
    output: "200",
    challenge: "Create a test server that returns status 200.",
    challengeStarter: `package main

import (
    "fmt"
    "net/http"
    "net/http/httptest"
)

func main() {
    server := httptest.NewServer(
        http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
            fmt.Fprint(w, "Hello API")
        }),
    )
    defer server.Close()

    response, err := http.Get(server.URL)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer response.Body.Close()

    fmt.Println(response.StatusCode)
}`,
    solution: `package main

import (
    "fmt"
    "net/http"
    "net/http/httptest"
)

func main() {
    server := httptest.NewServer(
        http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
            fmt.Fprint(w, "Hello API")
        }),
    )
    defer server.Close()

    response, err := http.Get(server.URL)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer response.Body.Close()

    fmt.Println(response.StatusCode)
}`,
    hint: "Use httptest.NewServer and make a request to server.URL.",
    question: "What does HTTP status code 200 normally mean?",
    options: ["Not found", "Success", "Server crashed", "Unauthorised"],
    answer: 1,
    explanationSteps: [
        "An HTTP request asks a server for a resource or action.",
        "The server responds with a status code.",
        "200 indicates a successful request."
    ]
},

{
    title: "Testing with the testing Package",
    module: "Module 12: Testing and Tooling",
    subtitle: "Check that your functions behave correctly.",
    explanation: `
        <p>Go includes a testing package for automated tests.</p>
        <p>Test functions normally start with Test and accept a *testing.T parameter.</p>
        <p>Save tests in files ending with _test.go and run them locally with go test.</p>
    `,
    code: `package main

import "fmt"

func add(a, b int) int {
    return a + b
}

func main() {
    result := add(2, 3)
    fmt.Println(result == 5)
}`,
    output: "true",
    challenge: "Write a testable add function that returns the sum of two integers.",
    challengeStarter: `package main

import "fmt"

func add(a, b int) int {
    // Return the sum.
    return 0
}

func main() {
    fmt.Println(add(2, 3) == 5)
}`,
    solution: `package main

import "fmt"

func add(a, b int) int {
    return a + b
}

func main() {
    fmt.Println(add(2, 3) == 5)
}`,
    hint: "Return a + b.",
    question: "Which command runs Go tests in a package?",
    options: ["go test", "go check", "go verify", "go inspect"],
    answer: 0,
    explanationSteps: [
        "A test checks whether code behaves as expected.",
        "The testing package provides testing tools.",
        "go test discovers and runs package tests."
    ]
},

{
    title: "Modules and Dependencies",
    module: "Module 12: Testing and Tooling",
    subtitle: "Manage projects and external packages.",
    explanation: `
        <p>Go modules define a project's module path and track dependency versions.</p>
        <p>In a local project, <code>go mod init example.com/myapp</code>
        creates a new go.mod file.</p>
        <p>The browser playground has its own environment, so project-level module
        commands are normally performed on your computer.</p>
    `,
    code: `package main

import "fmt"

func main() {
    projectName := "myapp"
    fmt.Println("Project:", projectName)
}`,
    output: "Project: myapp",
    challenge: "Print the name of a project you want to build.",
    challengeStarter: `package main

import "fmt"

func main() {
    projectName := "my-go-project"
    fmt.Println("Project:", projectName)
}`,
    solution: `package main

import "fmt"

func main() {
    projectName := "elomcode-go-project"
    fmt.Println("Project:", projectName)
}`,
    hint: "Change the string stored in projectName.",
    question: "Which file records Go module information and dependencies?",
    options: ["package.json", "go.mod", "index.html", "go.txt"],
    answer: 1,
    explanationSteps: [
        "A Go module represents a versioned collection of Go packages.",
        "go.mod declares the module path and dependency requirements.",
        "go mod init creates a new module file in a local project."
    ]
},

{
    title: "Sorting and Searching",
    module: "Module 12: Testing and Tooling",
    subtitle: "Sort collections and locate values.",
    explanation: `
        <p>The standard library offers sorting functionality.</p>
        <p>For slices of ordered values, the slices package provides helpers such
        as slices.Sort.</p>
    `,
    code: `package main

import (
    "fmt"
    "slices"
)

func main() {
    numbers := []int{9, 2, 7, 1}

    slices.Sort(numbers)

    fmt.Println(numbers)
}`,
    output: "[1 2 7 9]",
    challenge: "Sort the numbers 8, 3 and 5 in ascending order.",
    challengeStarter: `package main

import (
    "fmt"
    "slices"
)

func main() {
    numbers := []int{8, 3, 5}

    slices.Sort(numbers)
    fmt.Println(numbers)
}`,
    solution: `package main

import (
    "fmt"
    "slices"
)

func main() {
    numbers := []int{8, 3, 5}

    slices.Sort(numbers)
    fmt.Println(numbers)
}`,
    hint: "Call slices.Sort(numbers).",
    question: "What does slices.Sort do?",
    options: [
        "Sorts slice elements",
        "Deletes all elements",
        "Creates a web server",
        "Reads user input"
    ],
    answer: 0,
    explanationSteps: [
        "The slice contains integers.",
        "slices.Sort sorts ordered values in ascending order.",
        "The updated slice is then printed."
    ]
},

{
    title: "Date and Time",
    module: "Module 13: Advanced Go",
    subtitle: "Work with dates, times and durations.",
    explanation: `
        <p>The time package provides time values, durations, clocks and timers.</p>
        <p>Use a fixed date in learning examples when you want predictable output.</p>
    `,
    code: `package main

import (
    "fmt"
    "time"
)

func main() {
    date := time.Date(
        2026, time.January, 1,
        12, 0, 0, 0, time.UTC,
    )

    fmt.Println(date.Format("2006-01-02"))
}`,
    output: "2026-01-01",
    challenge: "Create a fixed date and print it in YYYY-MM-DD format.",
    challengeStarter: `package main

import (
    "fmt"
    "time"
)

func main() {
    date := time.Date(
        2026, time.December, 25,
        0, 0, 0, 0, time.UTC,
    )

    fmt.Println(date.Format("2006-01-02"))
}`,
    solution: `package main

import (
    "fmt"
    "time"
)

func main() {
    date := time.Date(
        2026, time.December, 25,
        0, 0, 0, 0, time.UTC,
    )

    fmt.Println(date.Format("2006-01-02"))
}`,
    hint: "Use the layout 2006-01-02.",
    question: "Which package provides Go's time and duration functionality?",
    options: ["date", "clock", "time", "calendar"],
    answer: 2,
    explanationSteps: [
        "time.Date creates a time value.",
        "time.UTC specifies the UTC location.",
        "Format converts the time into a string.",
        "Go uses a reference date layout to describe formatting."
    ]
},

{
    title: "Regular Expressions",
    module: "Module 13: Advanced Go",
    subtitle: "Find text patterns.",
    explanation: `
        <p>The regexp package supports regular-expression matching.</p>
        <p>Compile a pattern with regexp.MustCompile when it is known to be valid,
        or use regexp.Compile to handle invalid patterns as errors.</p>
    `,
    code: `package main

import (
    "fmt"
    "regexp"
)

func main() {
    pattern := regexp.MustCompile("[0-9]+")

    fmt.Println(pattern.MatchString("Go123"))
    fmt.Println(pattern.MatchString("Go"))
}`,
    output: "true\nfalse",
    challenge: "Check whether a string contains at least one digit.",
    challengeStarter: `package main

import (
    "fmt"
    "regexp"
)

func main() {
    pattern := regexp.MustCompile("[0-9]+")
    fmt.Println(pattern.MatchString("ELOMCODE2026"))
}`,
    solution: `package main

import (
    "fmt"
    "regexp"
)

func main() {
    pattern := regexp.MustCompile("[0-9]+")
    fmt.Println(pattern.MatchString("ELOMCODE2026"))
}`,
    hint: "The pattern [0-9]+ matches one or more digits.",
    question: "Which package supports regular expressions in Go?",
    options: ["regexp", "patterns", "textmatch", "strings/regex"],
    answer: 0,
    explanationSteps: [
        "[0-9] matches a digit.",
        "+ means one or more occurrences.",
        "MatchString reports whether the text matches the pattern."
    ]
},

{
    title: "Reflection",
    module: "Module 13: Advanced Go",
    subtitle: "Inspect types and values at runtime.",
    explanation: `
        <p>Reflection allows a program to inspect types and values at runtime.</p>
        <p>The reflect package provides this functionality.</p>
        <p>Reflection can be powerful, but ordinary typed code is often easier to
        understand and maintain.</p>
    `,
    code: `package main

import (
    "fmt"
    "reflect"
)

func main() {
    name := "Elijah"
    age := 17

    fmt.Println(reflect.TypeOf(name))
    fmt.Println(reflect.TypeOf(age))
}`,
    output: "string\nint",
    challenge: "Use reflection to print the type of a boolean value.",
    challengeStarter: `package main

import (
    "fmt"
    "reflect"
)

func main() {
    active := true
    fmt.Println(reflect.TypeOf(active))
}`,
    solution: `package main

import (
    "fmt"
    "reflect"
)

func main() {
    active := true
    fmt.Println(reflect.TypeOf(active))
}`,
    hint: "Use reflect.TypeOf(active).",
    question: "Which package provides reflection functionality?",
    options: ["reflect", "runtime/type", "inspect", "types"],
    answer: 0,
    explanationSteps: [
        "reflect.TypeOf returns a value describing a value's type.",
        "The type of a string variable is string.",
        "The type of an integer variable is int."
    ]
},

{
    title: "Context and Cancellation",
    module: "Module 13: Advanced Go",
    subtitle: "Manage cancellation and deadlines in concurrent work.",
    explanation: `
        <p>The context package carries cancellation signals, deadlines and
        request-scoped values across API boundaries.</p>
        <p>It is commonly used to stop work when an HTTP request is cancelled
        or a deadline is reached.</p>
    `,
    code: `package main

import (
    "context"
    "fmt"
)

func main() {
    ctx, cancel := context.WithCancel(context.Background())
    defer cancel()

    fmt.Println(ctx.Err())

    cancel()

    fmt.Println(ctx.Err())
}`,
    output: "<nil>\ncontext canceled",
    challenge: "Create a cancellable context and print its error after cancellation.",
    challengeStarter: `package main

import (
    "context"
    "fmt"
)

func main() {
    ctx, cancel := context.WithCancel(context.Background())
    defer cancel()

    cancel()
    fmt.Println(ctx.Err())
}`,
    solution: `package main

import (
    "context"
    "fmt"
)

func main() {
    ctx, cancel := context.WithCancel(context.Background())
    defer cancel()

    cancel()
    fmt.Println(ctx.Err())
}`,
    hint: "Call cancel before printing ctx.Err().",
    question: "What is context commonly used for?",
    options: [
        "Managing cancellation and deadlines",
        "Sorting slices only",
        "Drawing web pages",
        "Declaring variables"
    ],
    answer: 0,
    explanationSteps: [
        "context.Background creates a base context.",
        "WithCancel creates a context that can be cancelled.",
        "cancel signals that the work should stop.",
        "ctx.Err reports the cancellation error."
    ]
},

{
    title: "Building a REST API",
    module: "Module 14: Projects",
    subtitle: "Create a simple API endpoint.",
    explanation: `
        <p>A REST API commonly uses HTTP methods such as GET and POST to work
        with resources.</p>
        <p>Go's net/http package can be used to implement API handlers.</p>
        <p>This example tests a handler in memory so it can run in the playground.</p>
    `,
    code: `package main

import (
    "encoding/json"
    "fmt"
    "net/http"
    "net/http/httptest"
)

func health(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(map[string]string{
        "status": "ok",
    })
}

func main() {
    request := httptest.NewRequest("GET", "/health", nil)
    response := httptest.NewRecorder()

    health(response, request)

    fmt.Print(response.Body.String())
}`,
    output: '{"status":"ok"}',
    challenge: "Build a handler that returns JSON with a status of ready.",
    challengeStarter: `package main

import (
    "encoding/json"
    "fmt"
    "net/http"
    "net/http/httptest"
)

func health(w http.ResponseWriter, r *http.Request) {
    json.NewEncoder(w).Encode(map[string]string{
        "status": "ready",
    })
}

func main() {
    request := httptest.NewRequest("GET", "/health", nil)
    response := httptest.NewRecorder()

    health(response, request)
    fmt.Print(response.Body.String())
}`,
    solution: `package main

import (
    "encoding/json"
    "fmt"
    "net/http"
    "net/http/httptest"
)

func health(w http.ResponseWriter, r *http.Request) {
    json.NewEncoder(w).Encode(map[string]string{
        "status": "ready",
    })
}

func main() {
    request := httptest.NewRequest("GET", "/health", nil)
    response := httptest.NewRecorder()

    health(response, request)
    fmt.Print(response.Body.String())
}`,
    hint: "Use json.NewEncoder(w).Encode with a map.",
    question: "Which HTTP method is commonly used to retrieve a resource?",
    options: ["GET", "DELETE", "PATCH", "CONNECT"],
    answer: 0,
    explanationSteps: [
        "The handler creates a JSON response.",
        "Content-Type identifies the response format.",
        "json.NewEncoder encodes a Go value into JSON.",
        "httptest lets you test the handler without a live server."
    ]
},

{
    title: "Project: Student Records",
    module: "Module 14: Projects",
    subtitle: "Combine structs, slices and functions.",
    explanation: `
        <p>In this project, you combine structs, slices and loops to represent
        and display a collection of students.</p>
        <p>This is a small example of how Go concepts work together in an application.</p>
    `,
    code: `package main

import "fmt"

type Student struct {
    Name  string
    Score int
}

func main() {
    students := []Student{
        {Name: "Ada", Score: 90},
        {Name: "Elijah", Score: 85},
    }

    for _, student := range students {
        fmt.Println(student.Name, student.Score)
    }
}`,
    output: "Ada 90\nElijah 85",
    challenge: "Add another student named Musa with a score of 88.",
    challengeStarter: `package main

import "fmt"

type Student struct {
    Name  string
    Score int
}

func main() {
    students := []Student{
        {Name: "Ada", Score: 90},
        {Name: "Elijah", Score: 85},
    }

    // Add Musa with a score of 88.

    for _, student := range students {
        fmt.Println(student.Name, student.Score)
    }
}`,
    solution: `package main

import "fmt"

type Student struct {
    Name  string
    Score int
}

func main() {
    students := []Student{
        {Name: "Ada", Score: 90},
        {Name: "Elijah", Score: 85},
        {Name: "Musa", Score: 88},
    }

    for _, student := range students {
        fmt.Println(student.Name, student.Score)
    }
}`,
    hint: "Add another Student value to the slice.",
    question: "Which Go data structure can hold multiple Student values?",
    options: ["A slice", "A single int", "A package name", "A comment"],
    answer: 0,
    explanationSteps: [
        "Student defines the data fields.",
        "A slice stores multiple Student values.",
        "range iterates over each student.",
        "fmt.Println displays the name and score."
    ]
},

{
    title: "Project: Command-Line Calculator",
    module: "Module 14: Projects",
    subtitle: "Build a small calculator with functions and conditions.",
    explanation: `
        <p>A command-line calculator combines input, functions and decision-making.</p>
        <p>This version uses fixed example values so the result can be previewed
        directly in the online playground.</p>
    `,
    code: `package main

import "fmt"

func calculate(a, b int, operator string) int {
    switch operator {
    case "+":
        return a + b
    case "-":
        return a - b
    case "*":
        return a * b
    default:
        return 0
    }
}

func main() {
    fmt.Println(calculate(12, 4, "+"))
    fmt.Println(calculate(12, 4, "-"))
    fmt.Println(calculate(12, 4, "*"))
}`,
    output: "16\n8\n48",
    challenge: "Extend the calculator to support division when the divisor is not zero.",
    challengeStarter: `package main

import "fmt"

func calculate(a, b int, operator string) int {
    switch operator {
    case "+":
        return a + b
    case "-":
        return a - b
    case "*":
        return a * b
    case "/":
        if b != 0 {
            return a / b
        }
    }

    return 0
}

func main() {
    fmt.Println(calculate(12, 4, "/"))
}`,
    solution: `package main

import "fmt"

func calculate(a, b int, operator string) int {
    switch operator {
    case "+":
        return a + b
    case "-":
        return a - b
    case "*":
        return a * b
    case "/":
        if b != 0 {
            return a / b
        }
    }

    return 0
}

func main() {
    fmt.Println(calculate(12, 4, "/"))
}`,
    hint: "Add a division case and check that b is not zero.",
    question: "Why should a calculator check for division by zero?",
    options: [
        "To avoid an invalid division operation",
        "To improve the colour scheme",
        "To import fmt",
        "To declare a struct"
    ],
    answer: 0,
    explanationSteps: [
        "The function receives two integers and an operator.",
        "switch chooses the operation.",
        "The division case checks that the divisor is not zero.",
        "The result is returned to the caller."
    ]
},

{
    title: "Project: Simple Task Manager",
    module: "Module 14: Projects",
    subtitle: "Manage a list of tasks.",
    explanation: `
        <p>A task manager can store tasks in a slice and display them using a loop.</p>
        <p>A larger application might add file storage, editing and deletion.</p>
    `,
    code: `package main

import "fmt"

type Task struct {
    Title string
    Done  bool
}

func main() {
    tasks := []Task{
        {Title: "Learn Go", Done: true},
        {Title: "Build a project", Done: false},
    }

    for _, task := range tasks {
        fmt.Println(task.Title, task.Done)
    }
}`,
    output: "Learn Go true\nBuild a project false",
    challenge: "Add a task called Practise coding with Done set to false.",
    challengeStarter: `package main

import "fmt"

type Task struct {
    Title string
    Done  bool
}

func main() {
    tasks := []Task{
        {Title: "Learn Go", Done: true},
        {Title: "Build a project", Done: false},
    }

    // Add a new task.

    for _, task := range tasks {
        fmt.Println(task.Title, task.Done)
    }
}`,
    solution: `package main

import "fmt"

type Task struct {
    Title string
    Done  bool
}

func main() {
    tasks := []Task{
        {Title: "Learn Go", Done: true},
        {Title: "Build a project", Done: false},
        {Title: "Practise coding", Done: false},
    }

    for _, task := range tasks {
        fmt.Println(task.Title, task.Done)
    }
}`,
    hint: "Append another Task value to the slice.",
    question: "Which type represents whether a task is completed?",
    options: ["string", "bool", "float64", "byte"],
    answer: 1,
    explanationSteps: [
        "Task represents one item in the task list.",
        "Title stores text.",
        "Done stores a boolean value.",
        "A loop displays each task."
    ]
},

{
    title: "Project: JSON API Response",
    module: "Module 14: Projects",
    subtitle: "Create a structured JSON response.",
    explanation: `
        <p>APIs commonly return structured JSON data.</p>
        <p>This project combines a struct, JSON encoding and formatted output.</p>
    `,
    code: `package main

import (
    "encoding/json"
    "fmt"
)

type Response struct {
    Message string \`json:"message"\`
    Success bool   \`json:"success"\`
}

func main() {
    result := Response{
        Message: "Welcome",
        Success: true,
    }

    data, err := json.Marshal(result)
    if err != nil {
        fmt.Println(err)
        return
    }

    fmt.Println(string(data))
}`,
    output: '{"message":"Welcome","success":true}',
    challenge: "Create a JSON response with message Go is ready and success true.",
    challengeStarter: `package main

import (
    "encoding/json"
    "fmt"
)

type Response struct {
    Message string \`json:"message"\`
    Success bool   \`json:"success"\`
}

func main() {
    result := Response{
        Message: "Go is ready",
        Success: true,
    }

    data, err := json.Marshal(result)
    if err != nil {
        fmt.Println(err)
        return
    }

    fmt.Println(string(data))
}`,
    solution: `package main

import (
    "encoding/json"
    "fmt"
)

type Response struct {
    Message string \`json:"message"\`
    Success bool   \`json:"success"\`
}

func main() {
    result := Response{
        Message: "Go is ready",
        Success: true,
    }

    data, err := json.Marshal(result)
    if err != nil {
        fmt.Println(err)
        return
    }

    fmt.Println(string(data))
}`,
    hint: "Create a Response value and use json.Marshal.",
    question: "What does json.Marshal return?",
    options: [
        "JSON-encoded bytes and an error",
        "Only a boolean",
        "A new Go package",
        "A web server"
    ],
    answer: 0,
    explanationSteps: [
        "Response defines the JSON data structure.",
        "Struct tags specify the JSON field names.",
        "json.Marshal encodes the value into bytes.",
        "string(data) displays the JSON text."
    ]
},

{
    title: "Go Best Practices and Next Steps",
    module: "Module 14: Projects",
    subtitle: "Prepare to build real-world Go applications.",
    explanation: `
        <p>Good Go code is readable, simple and explicit.</p>
        <p>Use gofmt to format source files, check errors, write tests and organise
        projects into packages.</p>
        <p>After learning these fundamentals, practise by building command-line
        tools, HTTP APIs and concurrent applications.</p>
    `,
    code: `package main

import "fmt"

func greet(name string) string {
    return "Hello, " + name
}

func main() {
    message := greet("Developer")
    fmt.Println(message)
}`,
    output: "Hello, Developer",
    challenge: "Create a function that receives a name and returns a greeting.",
    challengeStarter: `package main

import "fmt"

func greet(name string) string {
    // Return a greeting.
    return ""
}

func main() {
    fmt.Println(greet("Elijah"))
}`,
    solution: `package main

import "fmt"

func greet(name string) string {
    return "Hello, " + name
}

func main() {
    fmt.Println(greet("Elijah"))
}`,
    hint: "Return \"Hello, \" + name.",
    question: "Which command formats Go source code?",
    options: ["gofmt", "goformat-web", "formatgo", "gofixhtml"],
    answer: 0,
    explanationSteps: [
        "Keep functions focused and readable.",
        "Handle returned errors appropriately.",
        "Use gofmt to format source files.",
        "Write tests and practise by building real projects."
    ]
}

];


/* =========================================================
   3. PROGRESS STORAGE
========================================================= */

function goLoadProgress() {
    try {
        const stored = localStorage.getItem(GO_CONFIG.storageKey);

        if (!stored) {
            return {
                completed: [],
                xp: 0,
                currentLesson: 0,
                learnerName: ""
            };
        }

        const data = JSON.parse(stored);

        return {
            completed: Array.isArray(data.completed) ? data.completed : [],
            xp: Number(data.xp) || 0,
            currentLesson: Number(data.currentLesson) || 0,
            learnerName: typeof data.learnerName === "string"
                ? data.learnerName
                : ""
        };
    } catch (error) {
        console.warn("Could not load Go course progress:", error);

        return {
            completed: [],
            xp: 0,
            currentLesson: 0,
            learnerName: ""
        };
    }
}

let goProgress = goLoadProgress();
let goCurrentLesson = Math.min(
    Math.max(goProgress.currentLesson, 0),
    GO_LESSONS.length - 1
);

function goSaveProgress() {
    try {
        goProgress.currentLesson = goCurrentLesson;

        localStorage.setItem(
            GO_CONFIG.storageKey,
            JSON.stringify(goProgress)
        );
    } catch (error) {
        console.warn("Could not save Go course progress:", error);
    }
}

function goIsCompleted(index) {
    return goProgress.completed.includes(index);
}

function goCompleteCurrentLesson() {
    if (goIsCompleted(goCurrentLesson)) {
        goRenderProgress();
        return;
    }

    goProgress.completed.push(goCurrentLesson);
    goProgress.xp += GO_CONFIG.xpPerLesson;

    goSaveProgress();
    goRenderLessonList();
    goRenderProgress();
    goRenderCertificate();

    const button = goElement("completeLesson");

    if (button) {
        button.textContent = "Lesson Completed ✓";
        button.disabled = true;
    }

    goSetText(
        "lessonStatus",
        "Completed ✓"
    );

    goShowToast("Lesson completed! You earned 20 XP.");
}

function goRenderProgress() {
    const completed = goProgress.completed.length;
    const total = GO_LESSONS.length;
    const percentage = Math.round((completed / total) * 100);

    goSetText("completedLessons", completed);
    goSetText("totalLessons", total);
    goSetText("coursePercent", percentage + "%");
    goSetText("courseXP", goProgress.xp);
    goSetText("progressLabel", percentage + "% complete");

    const progressBar = goElement("progressBar");

    if (progressBar) {
        progressBar.style.width = percentage + "%";
        progressBar.setAttribute("aria-valuenow", String(percentage));
        progressBar.setAttribute("aria-valuemax", "100");
        progressBar.setAttribute("role", "progressbar");
    }

    goRenderCertificate();
}


/* =========================================================
   4. LESSON NAVIGATION
========================================================= */

function goRenderLessonList(searchTerm = "") {
    const container = goElement("lessonNavigation");

    if (!container) return;

    const query = searchTerm.toLowerCase().trim();

    container.innerHTML = "";

    let lastModule = "";

    GO_LESSONS.forEach((lesson, index) => {
        const searchable = (
            lesson.title + " " +
            lesson.module + " " +
            lesson.subtitle
        ).toLowerCase();

        if (query && !searchable.includes(query)) {
            return;
        }

        if (lesson.module !== lastModule) {
            const heading = document.createElement("div");

            heading.className = "go-module-heading";
            heading.textContent = lesson.module;

            container.appendChild(heading);
            lastModule = lesson.module;
        }

        const button = document.createElement("button");

        button.type = "button";
        button.className = "go-lesson-link";

        if (index === goCurrentLesson) {
            button.classList.add("active");
        }

        if (goIsCompleted(index)) {
            button.classList.add("completed");
        }

        button.innerHTML = `
            <span class="go-lesson-index">${String(index + 1).padStart(2, "0")}</span>
            <span class="go-lesson-link-title">${goEscapeHTML(lesson.title)}</span>
            <span class="go-lesson-check">${goIsCompleted(index) ? "✓" : ""}</span>
        `;

        button.addEventListener("click", () => {
            goLoadLesson(index);
        });

        container.appendChild(button);
    });

    if (!container.children.length) {
        const empty = document.createElement("p");
        empty.className = "go-no-results";
        empty.textContent = "No lessons found.";
        container.appendChild(empty);
    }
}

function goLoadLesson(index) {
    if (index < 0 || index >= GO_LESSONS.length) {
        return;
    }

    goCurrentLesson = index;

    const lesson = GO_LESSONS[index];

    goSaveProgress();

    goSetText("moduleLabel", lesson.module);
    goSetText("lessonNumber", `LESSON ${index + 1} OF ${GO_LESSONS.length}`);
    goSetText("lessonTitle", lesson.title);
    goSetText("lessonSubtitle", lesson.subtitle);
    goSetText("lessonStatus", goIsCompleted(index) ? "Completed ✓" : "In progress");

    goSetHTML("lessonContent", lesson.explanation);

    const example = goElement("codeExample");

    if (example) {
        example.textContent = lesson.code;
    }

    goSetHTML(
        "codeExplanationText",
        lesson.explanationSteps
            .map((step, i) => `
                <p><strong>${i + 1}.</strong> ${goEscapeHTML(step)}</p>
            `)
            .join("")
    );

    goSetText("challengeText", lesson.challenge);

    const challengeAnswer = goElement("challengeAnswer");

    if (challengeAnswer) {
        challengeAnswer.value = lesson.challengeStarter;
    }

    goSetText("challengeHint", lesson.hint);
    goSetText("challengeSolution", lesson.solution);

    const hint = goElement("challengeHint");
    const solution = goElement("challengeSolution");

    if (hint) hint.hidden = true;
    if (solution) solution.hidden = true;

    goRenderQuiz(lesson);
    goRenderLessonList(
        goElement("lessonSearch")?.value || ""
    );

    const completeButton = goElement("completeLesson");

    if (completeButton) {
        completeButton.disabled = goIsCompleted(index);
        completeButton.textContent = goIsCompleted(index)
            ? "Lesson Completed ✓"
            : "Mark Lesson Complete";
    }

    const previousButton = goElement("previousLesson");
    const nextButton = goElement("nextLesson");

    if (previousButton) {
        previousButton.disabled = index === 0;
    }

    if (nextButton) {
        nextButton.disabled = index === GO_LESSONS.length - 1;
    }

    goUpdatePlayground(lesson.code);

    goRenderProgress();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   5. QUIZZES
========================================================= */

function goRenderQuiz(lesson) {
    goSetText("quizQuestion", lesson.question);

    const optionsContainer = goElement("quizOptions");

    if (optionsContainer) {
        optionsContainer.innerHTML = "";

        lesson.options.forEach((option, index) => {
            const label = document.createElement("label");

            label.className = "go-quiz-option";

            label.innerHTML = `
                <input
                    type="radio"
                    name="goQuizAnswer"
                    value="${index}"
                >
                <span>${goEscapeHTML(option)}</span>
            `;

            optionsContainer.appendChild(label);
        });
    }

    goSetText("quizFeedback", "");

    const submitButton = goElement("submitQuiz");

    if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Check Answer";
    }
}

function goSubmitQuiz() {
    const selected = document.querySelector(
        'input[name="goQuizAnswer"]:checked'
    );

    if (!selected) {
        goSetText("quizFeedback", "Choose an answer first.");
        return;
    }

    const lesson = GO_LESSONS[goCurrentLesson];
    const chosen = Number(selected.value);
    const correct = chosen === lesson.answer;

    if (correct) {
        goSetText("quizFeedback", "Correct! Excellent work.");
        goShowToast("Correct answer!");

        const submitButton = goElement("submitQuiz");

        if (submitButton) {
            submitButton.textContent = "Correct ✓";
            submitButton.disabled = true;
        }
    } else {
        goSetText(
            "quizFeedback",
            "Not quite. Review the lesson and try again."
        );
    }
}


/* =========================================================
   6. LIVE GO PLAYGROUND
========================================================= */

/*
    This creates a working playground interface when one is not
    already present in the HTML.

    Go code is sent to the Go Playground compiler.
    Output is the actual compiler response, not a guessed preview.
*/

function goCreatePlayground() {
    let root = document.getElementById("goLivePlayground");

    if (root) return root;

    root = document.createElement("section");

    root.id = "goLivePlayground";
    root.className = "go-live-playground";

    root.innerHTML = `
        <div class="go-playground-heading">
            <div>
                <span class="go-playground-kicker">INTERACTIVE LAB</span>
                <h2>Live Go Playground</h2>
                <p>Write Go code, run it, and inspect the real output.</p>
            </div>

            <span class="go-live-badge">● LIVE EDITOR</span>
        </div>

        <div class="go-playground-toolbar">
            <label for="goExampleSelector">Load an example</label>

            <select id="goExampleSelector">
                <option value="current">Current lesson example</option>
                <option value="hello">Hello World</option>
                <option value="variables">Variables</option>
                <option value="conditions">If and Else</option>
                <option value="loops">For Loop</option>
                <option value="functions">Functions</option>
                <option value="slices">Slices</option>
                <option value="structs">Structs</option>
                <option value="json">JSON Output</option>
                <option value="challenge">Current Challenge</option>
            </select>

            <button type="button" id="goResetCode">Reset Code</button>
        </div>

        <div class="go-editor-layout">
            <div class="go-editor-panel">
                <div class="go-editor-title">
                    <span>main.go</span>
                    <span>Go source code</span>
                </div>

                <textarea
                    id="goPlaygroundCode"
                    spellcheck="false"
                    autocapitalize="off"
                    autocomplete="off"
                    aria-label="Editable Go code"
                ></textarea>

                <div class="go-run-row">
                    <button type="button" id="goRunCode">
                        ▶ Run Code
                    </button>

                    <span id="goRunStatus">Ready to run</span>
                </div>
            </div>

            <div class="go-output-panel">
                <div class="go-output-title">
                    <span>Program Output</span>
                    <button type="button" id="goClearOutput">Clear</button>
                </div>

                <pre id="goPlaygroundOutput">Your program's output will appear here.</pre>

                <div class="go-output-note">
                    The output comes from the Go Playground compiler.
                </div>
            </div>
        </div>

        <div class="go-playground-footnote">
            <strong>How to use:</strong>
            Edit the code, click Run Code, and inspect the result.
            If you change the code, run it again to see the new output.
        </div>
    `;

    const target =
        document.getElementById("playgroundSection") ||
        document.getElementById("livePlayground") ||
        document.getElementById("lessonContent") ||
        document.querySelector("main") ||
        document.body;

    if (target === document.getElementById("lessonContent")) {
        target.insertAdjacentElement("afterend", root);
    } else {
        target.appendChild(root);
    }

    goInstallPlaygroundStyles();

    return root;
}

function goInstallPlaygroundStyles() {
    if (document.getElementById("goPlaygroundStyles")) return;

    const style = document.createElement("style");

    style.id = "goPlaygroundStyles";

    style.textContent = `
        #goLivePlayground {
            margin: 28px 0;
            padding: 24px;
            border: 1px solid rgba(90, 155, 255, .28);
            border-radius: 20px;
            background: linear-gradient(145deg, #f9fbff, #eef4ff);
            color: #15233d;
            box-shadow: 0 16px 45px rgba(28, 60, 120, .08);
            font-family: inherit;
        }

        #goLivePlayground * {
            box-sizing: border-box;
        }

        .go-playground-heading {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 22px;
        }

        .go-playground-kicker {
            display: block;
            margin-bottom: 7px;
            color: #087be8;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 2px;
        }

        .go-playground-heading h2 {
            margin: 0 0 8px;
            font-size: clamp(22px, 3vw, 30px);
            color: #102548;
        }

        .go-playground-heading p {
            margin: 0;
            color: #5b6980;
            line-height: 1.6;
        }

        .go-live-badge {
            flex-shrink: 0;
            padding: 8px 11px;
            border-radius: 20px;
            color: #087c50;
            background: #d9f9e9;
            font-size: 11px;
            font-weight: 800;
        }

        .go-playground-toolbar {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 10px;
            margin-bottom: 14px;
        }

        .go-playground-toolbar label {
            font-size: 13px;
            font-weight: 700;
        }

        .go-playground-toolbar select,
        .go-playground-toolbar button {
            min-height: 40px;
            padding: 8px 12px;
            border: 1px solid #d6e0ef;
            border-radius: 9px;
            background: white;
            color: #172b4d;
            font: inherit;
        }

        .go-playground-toolbar button {
            cursor: pointer;
            font-weight: 700;
        }

        .go-editor-layout {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: 16px;
        }

        .go-editor-panel,
        .go-output-panel {
            overflow: hidden;
            border: 1px solid #d7e1ef;
            border-radius: 13px;
            background: white;
        }

        .go-editor-title,
        .go-output-title {
            min-height: 45px;
            padding: 12px 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            border-bottom: 1px solid #e5ebf4;
            color: #273955;
            font-size: 12px;
            font-weight: 800;
        }

        .go-editor-title span:last-child {
            color: #748198;
            font-weight: 500;
        }

        #goPlaygroundCode {
            display: block;
            width: 100%;
            min-height: 330px;
            resize: vertical;
            padding: 17px;
            border: 0;
            outline: none;
            border-radius: 0;
            background: #101a2d;
            color: #e5f0ff;
            font-family: Consolas, "Courier New", monospace;
            font-size: 13px;
            line-height: 1.7;
            tab-size: 4;
            white-space: pre;
        }

        .go-run-row {
            min-height: 57px;
            padding: 11px 13px;
            display: flex;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
        }

        #goRunCode {
            border: 0;
            border-radius: 9px;
            padding: 11px 17px;
            background: #087be8;
            color: white;
            font: inherit;
            font-size: 13px;
            font-weight: 800;
            cursor: pointer;
        }

        #goRunCode:disabled {
            opacity: .6;
            cursor: wait;
        }

        #goRunStatus {
            color: #66758b;
            font-size: 12px;
        }

        #goPlaygroundOutput {
            min-height: 330px;
            max-height: 520px;
            overflow: auto;
            margin: 0;
            padding: 18px;
            background: #111c2e;
            color: #c6f6d5;
            font-family: Consolas, "Courier New", monospace;
            font-size: 13px;
            line-height: 1.7;
            white-space: pre-wrap;
            overflow-wrap: anywhere;
        }

        .go-output-title button {
            border: 0;
            background: transparent;
            color: #087be8;
            font: inherit;
            font-size: 12px;
            cursor: pointer;
        }

        .go-output-note {
            padding: 12px 14px;
            color: #6a7890;
            font-size: 11px;
            line-height: 1.5;
        }

        .go-playground-footnote {
            margin-top: 16px;
            padding: 13px 15px;
            border-radius: 10px;
            background: #e7f2ff;
            color: #3c5372;
            font-size: 12px;
            line-height: 1.7;
        }

        .go-playground-footnote strong {
            color: #145ca8;
        }

        .go-module-heading {
            padding: 15px 10px 7px;
            color: #718198;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: .6px;
        }

        .go-lesson-link {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 9px;
            margin: 3px 0;
            padding: 10px;
            border: 1px solid transparent;
            border-radius: 9px;
            background: transparent;
            color: inherit;
            text-align: left;
            font: inherit;
            font-size: 12px;
            cursor: pointer;
        }

        .go-lesson-link:hover {
            background: rgba(70, 130, 230, .08);
        }

        .go-lesson-link.active {
            border-color: rgba(60, 130, 240, .28);
            background: rgba(70, 130, 230, .12);
        }

        .go-lesson-index {
            color: #6482ac;
            font-size: 10px;
            font-weight: 800;
        }

        .go-lesson-link-title {
            flex: 1;
        }

        .go-lesson-check {
            color: #078655;
            font-weight: 900;
        }

        .go-no-results {
            padding: 10px;
            color: #718198;
            font-size: 13px;
        }

        @media (max-width: 760px) {
            #goLivePlayground {
                padding: 15px;
            }

            .go-editor-layout {
                grid-template-columns: 1fr;
            }

            .go-playground-heading {
                flex-direction: column;
            }

            #goPlaygroundCode,
            #goPlaygroundOutput {
                min-height: 260px;
            }
        }
    `;

    document.head.appendChild(style);
}

const GO_PLAYGROUND_EXAMPLES = {
    hello: `package main

import "fmt"

func main() {
    fmt.Println("Hello, ELOMCODE!")
}`,
    variables: `package main

import "fmt"

func main() {
    name := "Elijah"
    age := 17

    fmt.Println("Name:", name)
    fmt.Println("Age:", age)
}`,
    conditions: `package main

import "fmt"

func main() {
    score := 75

    if score >= 50 {
        fmt.Println("Pass")
    } else {
        fmt.Println("Try again")
    }
}`,
    loops: `package main

import "fmt"

func main() {
    for i := 1; i <= 5; i++ {
        fmt.Println(i)
    }
}`,
    functions: `package main

import "fmt"

func add(a, b int) int {
    return a + b
}

func main() {
    fmt.Println(add(10, 20))
}`,
    slices: `package main

import "fmt"

func main() {
    fruits := []string{"Apple", "Mango"}
    fruits = append(fruits, "Orange")

    fmt.Println(fruits)
}`,
    structs: `package main

import "fmt"

type Student struct {
    Name string
    Age int
}

func main() {
    student := Student{
        Name: "Ada",
        Age: 20,
    }

    fmt.Println(student.Name)
    fmt.Println(student.Age)
}`,
    json: `package main

import (
    "encoding/json"
    "fmt"
)

func main() {
    data, err := json.Marshal(map[string]string{
        "status": "success",
    })

    if err != nil {
        fmt.Println(err)
        return
    }

    fmt.Println(string(data))
}`
};

function goUpdatePlayground(code) {
    const editor = document.getElementById("goPlaygroundCode");

    if (editor) {
        editor.value = code;
    }
}

function goLoadPlaygroundExample() {
    const selector = document.getElementById("goExampleSelector");

    if (!selector) return;

    const choice = selector.value;

    if (choice === "current") {
        goUpdatePlayground(GO_LESSONS[goCurrentLesson].code);
    } else if (choice === "challenge") {
        goUpdatePlayground(GO_LESSONS[goCurrentLesson].challengeStarter);
    } else if (GO_PLAYGROUND_EXAMPLES[choice]) {
        goUpdatePlayground(GO_PLAYGROUND_EXAMPLES[choice]);
    }
}

function goSetRunStatus(message) {
    const status = document.getElementById("goRunStatus");

    if (status) {
        status.textContent = message;
    }
}

function goSetOutput(message) {
    const output = document.getElementById("goPlaygroundOutput");

    if (output) {
        output.textContent = message;
    }
}

function goFormatCompilerOutput(data) {
    const sections = [];

    if (data.Errors && data.Errors.trim()) {
        sections.push("COMPILER ERRORS\n" + data.Errors.trim());
    }

    if (Array.isArray(data.Events)) {
        data.Events.forEach(event => {
            const kind = String(event.Kind || "").toLowerCase();
            const message = String(event.Message || "");

            if (kind === "stdout") {
                sections.push(message.replace(/\n$/, ""));
            } else if (kind === "stderr") {
                sections.push("STDERR:\n" + message.trimEnd());
            } else if (kind === "end") {
                // No visible output required for end events.
            }
        });
    }

    if (Array.isArray(data.Events) && data.Events.length === 0 &&
        !data.Errors) {
        return "Program finished successfully with no output.";
    }

    return sections.filter(Boolean).join("\n") ||
        "Program finished. No output was produced.";
}

async function goRunCode() {
    const editor = document.getElementById("goPlaygroundCode");
    const runButton = document.getElementById("goRunCode");

    if (!editor) {
        goShowToast("The Go code editor could not be found.");
        return;
    }

    const code = editor.value.trim();

    if (!code) {
        goSetOutput("Write some Go code before running the program.");
        return;
    }

    if (runButton) runButton.disabled = true;

    goSetRunStatus("Compiling and running...");
    goSetOutput("Connecting to the Go Playground compiler...\nPlease wait.");

    try {
        const response = await fetch(GO_CONFIG.compilerURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                body: code,
                version: GO_CONFIG.compilerVersion
            })
        });

        if (!response.ok) {
            throw new Error(
                "The Go compiler returned HTTP " + response.status
            );
        }

        const data = await response.json();

        const result = goFormatCompilerOutput(data);

        goSetOutput(result);

        if (data.Errors && data.Errors.trim()) {
            goSetRunStatus("Compilation failed. Check the errors.");
        } else {
            goSetRunStatus("Finished running.");
        }
    } catch (error) {
        console.error("Go Playground error:", error);

        goSetOutput(
            "Could not run your Go program.\n\n" +
            "Possible reasons:\n" +
            "1. Your internet connection is unavailable.\n" +
            "2. The Go Playground service is temporarily unavailable.\n" +
            "3. The browser or network blocked the request.\n\n" +
            "Please check your connection and try again.\n\n" +
            "Technical information: " + error.message
        );

        goSetRunStatus("Unable to connect to compiler.");
    } finally {
        if (runButton) runButton.disabled = false;
    }
}

function goResetPlayground() {
    goUpdatePlayground(GO_LESSONS[goCurrentLesson].code);

    goSetOutput("Editor reset to the current lesson example.");

    goSetRunStatus("Ready to run");

    const selector = document.getElementById("goExampleSelector");

    if (selector) {
        selector.value = "current";
    }
}


/* =========================================================
   7. CHALLENGE HINTS AND SOLUTIONS
========================================================= */

function goToggleElement(element) {
    if (!element) return;

    element.hidden = !element.hidden;
}

function goShowChallengeHint() {
    const hint = goElement("challengeHint");

    if (!hint) return;

    hint.hidden = false;
}

function goShowChallengeSolution() {
    const solution = goElement("challengeSolution");

    if (!solution) return;

    solution.hidden = false;
}

function goRunChallenge() {
    const editor = document.getElementById("goPlaygroundCode");
    const challenge = goElement("challengeAnswer");

    if (!challenge || !editor) {
        goShowToast("The challenge editor could not be found.");
        return;
    }

    editor.value = challenge.value;

    const selector = document.getElementById("goExampleSelector");

    if (selector) {
        selector.value = "challenge";
    }

    goSetOutput(
        "Challenge code loaded into the playground.\n" +
        "Click Run Code to compile it and see the actual result."
    );

    goSetRunStatus("Challenge loaded");

    const playground = document.getElementById("goLivePlayground");

    if (playground) {
        playground.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/* =========================================================
   8. COPY EXAMPLE AND EXPLANATION
========================================================= */

async function goCopyExample() {
    const example = goElement("codeExample");

    if (!example) {
        goShowToast("No example code was found.");
        return;
    }

    try {
        await navigator.clipboard.writeText(example.textContent);
        goShowToast("Example code copied.");
    } catch (error) {
        const temporary = document.createElement("textarea");

        temporary.value = example.textContent;
        document.body.appendChild(temporary);

        temporary.select();

        try {
            document.execCommand("copy");
            goShowToast("Example code copied.");
        } catch (copyError) {
            goShowToast("Unable to copy. Please select the code manually.");
        }

        temporary.remove();
    }
}

function goToggleExplanation() {
    const explanation = goElement("codeExplanation");

    if (explanation) {
        goToggleElement(explanation);
    }
}


/* =========================================================
   9. CERTIFICATES
========================================================= */

function goRenderCertificate() {
    const complete = goProgress.completed.length === GO_LESSONS.length;

    const locked = goElement("certificateLocked");
    const unlocked = goElement("certificateUnlocked");
    const message = goElement("certificateMessage");

    if (locked) locked.hidden = complete;
    if (unlocked) unlocked.hidden = !complete;

    if (message) {
        message.textContent = complete
            ? "Congratulations! You have completed all 45 Go lessons."
            : `Complete all ${GO_LESSONS.length} lessons to unlock your certificate.`;
    }

    const learnerInput = goElement("certificateLearnerName");

    if (learnerInput && !learnerInput.value && goProgress.learnerName) {
        learnerInput.value = goProgress.learnerName;
    }

    goUpdateCertificateDetails();
}

function goUpdateCertificateDetails() {
    const learnerInput = goElement("certificateLearnerName");
    const learner = learnerInput
        ? learnerInput.value.trim()
        : goProgress.learnerName;

    goSetText(
        "learnerName",
        learner || "Learner Name"
    );

    goSetText(
        "certificateDate",
        new Date().toLocaleDateString()
    );

    goProgress.learnerName = learner || "";
    goSaveProgress();
}

function goPrintCertificate() {
    if (goProgress.completed.length !== GO_LESSONS.length) {
        goShowToast("Complete every lesson to unlock your certificate.");
        return;
    }

    goUpdateCertificateDetails();

    const learnerInput = goElement("certificateLearnerName");
    const learner = learnerInput
        ? learnerInput.value.trim()
        : "";

    if (!learner) {
        goShowToast("Enter your name before printing the certificate.");
        if (learnerInput) learnerInput.focus();
        return;
    }

    const certificate = goElement("certificateSection");

    if (!certificate) {
        goShowToast("The certificate section could not be found.");
        return;
    }

    const printWindow = window.open("", "_blank");

    if (!printWindow) {
        goShowToast("Allow pop-ups to print your certificate.");
        return;
    }

    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Go Programming Certificate</title>
            <style>
                body {
                    margin: 0;
                    padding: 35px;
                    font-family: Georgia, "Times New Roman", serif;
                    background: #fff;
                    color: #142746;
                }

                .certificate {
                    max-width: 950px;
                    min-height: 560px;
                    margin: auto;
                    padding: 45px;
                    border: 8px double #c69a37;
                    text-align: center;
                    box-sizing: border-box;
                }

                .brand {
                    color: #1a75d2;
                    font-family: Arial, sans-serif;
                    font-weight: 800;
                    letter-spacing: 3px;
                }

                h1 {
                    margin: 35px 0 20px;
                    color: #152a4b;
                    font-size: 38px;
                }

                .learner {
                    margin: 28px 0;
                    color: #a27b20;
                    font-size: 32px;
                    font-weight: bold;
                }

                .course {
                    font-size: 21px;
                    font-weight: bold;
                }

                .details {
                    margin-top: 35px;
                    font-family: Arial, sans-serif;
                    font-size: 14px;
                    line-height: 2;
                }

                @media print {
                    body { padding: 0; }
                    .certificate { page-break-inside: avoid; }
                }
            </style>
        </head>
        <body>
            <div class="certificate">
                <div class="brand">ELOMCODE SCHOOL</div>

                <h1>Certificate of Completion</h1>

                <p>This certificate is presented to</p>

                <div class="learner">${goEscapeHTML(learner)}</div>

                <p>for completing the</p>

                <div class="course">Go Programming Masterclass</div>

                <p>at ELOMCODE School.</p>

                <div class="details">
                    <div>Course Architect: Elijah Opomulero</div>
                    <div>Date: ${goEscapeHTML(new Date().toLocaleDateString())}</div>
                </div>
            </div>

            <script>
                window.onload = function () {
                    window.print();
                };
            <\/script>
        </body>
        </html>
    `);

    printWindow.document.close();
}


/* =========================================================
   10. THEME AND SIDEBAR
========================================================= */

function goToggleTheme() {
    document.body.classList.toggle("go-dark-theme");

    const dark = document.body.classList.contains("go-dark-theme");

    try {
        localStorage.setItem("elomcode_go_theme", dark ? "dark" : "light");
    } catch (error) {
        // Theme can still work for the current session.
    }

    goShowToast(dark ? "Dark theme enabled." : "Light theme enabled.");
}

function goToggleSidebar() {
    document.body.classList.toggle("go-sidebar-open");
    document.body.classList.toggle("sidebar-open");
}

function goRestoreTheme() {
    try {
        const savedTheme = localStorage.getItem("elomcode_go_theme");

        if (savedTheme === "dark") {
            document.body.classList.add("go-dark-theme");
        }
    } catch (error) {
        // Use the default theme.
    }
}


/* =========================================================
   11. TOAST MESSAGES
========================================================= */

let goToastTimer = null;

function goShowToast(message) {
    let toast = document.getElementById("goCourseToast");

    if (!toast) {
        toast = document.createElement("div");

        toast.id = "goCourseToast";

        toast.style.cssText = `
            position: fixed;
            z-index: 99999;
            right: 22px;
            bottom: 22px;
            max-width: min(360px, calc(100vw - 44px));
            padding: 13px 18px;
            border-radius: 12px;
            background: #122642;
            color: white;
            font-family: Arial, sans-serif;
            font-size: 13px;
            line-height: 1.5;
            box-shadow: 0 12px 35px rgba(0,0,0,.2);
            opacity: 0;
            transform: translateY(8px);
            transition: opacity .2s ease, transform .2s ease;
        `;

        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";

    clearTimeout(goToastTimer);

    goToastTimer = setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(8px)";
    }, 2800);
}


/* =========================================================
   12. EVENT LISTENERS
========================================================= */

function goBindEvents() {
    const search = goElement("lessonSearch");

    if (search) {
        search.addEventListener("input", () => {
            goRenderLessonList(search.value);
        });
    }

    const previous = goElement("previousLesson");

    if (previous) {
        previous.addEventListener("click", () => {
            goLoadLesson(goCurrentLesson - 1);
        });
    }

    const next = goElement("nextLesson");

    if (next) {
        next.addEventListener("click", () => {
            goLoadLesson(goCurrentLesson + 1);
        });
    }

    const complete = goElement("completeLesson");

    if (complete) {
        complete.addEventListener("click", goCompleteCurrentLesson);
    }

    const submitQuiz = goElement("submitQuiz");

    if (submitQuiz) {
        submitQuiz.addEventListener("click", goSubmitQuiz);
    }

    const copy = goElement("copyCode");

    if (copy) {
        copy.addEventListener("click", goCopyExample);
    }

    const explain = goElement("explainCode");

    if (explain) {
        explain.addEventListener("click", goToggleExplanation);
    }

    const hint = goElement("showHint");

    if (hint) {
        hint.addEventListener("click", goShowChallengeHint);
    }

    const solution = goElement("showSolution");

    if (solution) {
        solution.addEventListener("click", goShowChallengeSolution);
    }

    const learnerInput = goElement("certificateLearnerName");

    if (learnerInput) {
        learnerInput.addEventListener("input", goUpdateCertificateDetails);
    }

    const updateCertificate = goElement("updateCertificate");

    if (updateCertificate) {
        updateCertificate.addEventListener("click", goUpdateCertificateDetails);
    }

    const printCertificate = goElement("printCertificate");

    if (printCertificate) {
        printCertificate.addEventListener("click", goPrintCertificate);
    }

    const theme = goElement("themeToggle");

    if (theme) {
        theme.addEventListener("click", goToggleTheme);
    }

    const sidebar = goElement("sidebarToggle");

    if (sidebar) {
        sidebar.addEventListener("click", goToggleSidebar);
    }

    const runChallenge = document.getElementById("runChallenge");

    if (runChallenge) {
        runChallenge.addEventListener("click", goRunChallenge);
    }

    const runButton = document.getElementById("goRunCode");

    if (runButton) {
        runButton.addEventListener("click", goRunCode);
    }

    const resetButton = document.getElementById("goResetCode");

    if (resetButton) {
        resetButton.addEventListener("click", goResetPlayground);
    }

    const clearOutput = document.getElementById("goClearOutput");

    if (clearOutput) {
        clearOutput.addEventListener("click", () => {
            goSetOutput("");
            goSetRunStatus("Output cleared");
        });
    }

    const exampleSelector = document.getElementById("goExampleSelector");

    if (exampleSelector) {
        exampleSelector.addEventListener("change", goLoadPlaygroundExample);
    }

    const challengeAnswer = goElement("challengeAnswer");

    if (challengeAnswer) {
        challengeAnswer.addEventListener("keydown", event => {
            if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
                event.preventDefault();
                goRunChallenge();
            }
        });
    }

    const editor = document.getElementById("goPlaygroundCode");

    if (editor) {
        editor.addEventListener("keydown", event => {
            if (event.key === "Tab") {
                event.preventDefault();

                const start = editor.selectionStart;
                const end = editor.selectionEnd;

                editor.setRangeText("    ", start, end, "end");
            }

            if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
                event.preventDefault();
                goRunCode();
            }
        });
    }
}


/* =========================================================
   13. ADDITIONAL PLAYGROUND CONTROLS
========================================================= */

function goAddExtraPlaygroundControls() {
    const challenge = goElement("challengeAnswer");

    if (challenge && !document.getElementById("runChallenge")) {
        const button = document.createElement("button");

        button.id = "runChallenge";
        button.type = "button";
        button.textContent = "Run My Challenge";

        button.style.cssText = `
            margin-top: 10px;
            padding: 10px 16px;
            border: 0;
            border-radius: 8px;
            background: #087be8;
            color: white;
            font-weight: 700;
            cursor: pointer;
        `;

        challenge.insertAdjacentElement("afterend", button);
    }
}


/* =========================================================
   14. INITIALISE COURSE
========================================================= */

function goInitialiseCourse() {
    if (!Array.isArray(GO_LESSONS) || GO_LESSONS.length !== 45) {
        console.error(
            "Go course setup error: expected 45 lessons, found",
            GO_LESSONS.length
        );
    }

    goRestoreTheme();

    goCreatePlayground();

    goAddExtraPlaygroundControls();

    goBindEvents();

    goRenderLessonList();

    goRenderProgress();

    goLoadLesson(goCurrentLesson);

    goRenderCertificate();

    console.log(
        "ELOMCODE Go Masterclass ready:",
        GO_LESSONS.length,
        "lessons loaded."
    );
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        goInitialiseCourse,
        { once: true }
    );
} else {
    goInitialiseCourse();
}