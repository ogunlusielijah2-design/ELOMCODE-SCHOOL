"use strict";

/* =========================================================
   ELOMCODE SCHOOL
   JAVASCRIPT MASTERCLASS ENGINE
   VERSION 2.0 — COMPLETE COURSE SYSTEM
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const XP_PER_LESSON = 25;
    const STORAGE_KEY = "elomcode_javascript_masterclass_progress";

    const $ = id => document.getElementById(id);

    /* =====================================================
       COURSE LESSONS
       KEEP ALL 36 LESSONS
       ===================================================== */

    const lessons = [

        // FOUNDATIONS

        {
            category: "Foundations",
            title: "Introduction to JavaScript",
            subtitle: "Discover the language that makes websites interactive.",
            explanation: [
                "JavaScript is a programming language used to make websites interactive. HTML provides the structure of a webpage, CSS controls its appearance, and JavaScript can control its behaviour.",
                "JavaScript can respond when someone clicks a button, calculate a result, display a message, validate a form, or update content without reloading the entire page.",
                "The console.log() instruction displays information in the browser's developer console. In this course, our playground captures that output and displays it directly on the page."
            ],
            tip: "Start with small instructions. Understand what each line does before adding more code.",
            example: "console.log('Welcome to ELOMCODE!');",
            expected: "Welcome to ELOMCODE!",
            challengeTitle: "Display Your First Message",
            challengeText: "Write a console.log() instruction that displays your name.",
            practiceHint: "// Write your own JavaScript here\n"
        },

        {
            category: "Foundations",
            title: "Your First JavaScript Statement",
            subtitle: "Write an instruction that JavaScript can execute.",
            explanation: [
                "A statement is an instruction that tells JavaScript to perform an action. One statement might display a message, assign a value to a variable, or calculate a number.",
                "JavaScript usually executes statements in order, from top to bottom. This means the first statement generally runs before the second statement.",
                "A semicolon can mark the end of a statement. JavaScript can often insert semicolons automatically, but using them consistently can make beginner code easier to read."
            ],
            tip: "Try changing the message in the example and run it again.",
            example: "console.log('I am learning JavaScript');\nconsole.log('One step at a time!');",
            expected: "I am learning JavaScript\nOne step at a time!",
            challengeTitle: "Write Two Statements",
            challengeText: "Display two different messages using two console.log() statements.",
            practiceHint: ""
        },

        {
            category: "Foundations",
            title: "JavaScript Comments",
            subtitle: "Add notes to your code without executing them.",
            explanation: [
                "Comments are notes written for people reading your code. JavaScript ignores comments when executing a program.",
                "A single-line comment begins with two forward slashes: //. Everything after those slashes on that line is treated as a comment.",
                "For longer notes, you can use /* to begin a block comment and */ to end it. Comments can explain why a section of code exists or remind you what you intended to do."
            ],
            tip: "Use comments to explain important ideas, not to repeat every line of code.",
            example: "// This is a comment\nconsole.log('Comments help explain code.');",
            expected: "Comments help explain code.",
            challengeTitle: "Explain Your Code",
            challengeText: "Write a comment above a console.log() statement that displays a message.",
            practiceHint: ""
        },

        {
            category: "Foundations",
            title: "Where JavaScript Runs",
            subtitle: "Understand how JavaScript works in a browser.",
            explanation: [
                "Web browsers such as Chrome can execute JavaScript. A webpage can include JavaScript directly inside a script element or load it from a separate .js file.",
                "This ELOMCODE course uses a separate JavaScript file to control lesson navigation and course progress. Your practice code runs in an isolated preview frame.",
                "JavaScript can also run outside the browser using environments such as Node.js. For now, we will focus on beginner-friendly browser JavaScript."
            ],
            tip: "Keep course files together in the same folder when they reference one another by filename.",
            example: "console.log('JavaScript runs!');",
            expected: "JavaScript runs!",
            challengeTitle: "Think About the Browser",
            challengeText: "Use console.log() to display a message explaining what JavaScript can do on a website.",
            practiceHint: ""
        },

        {
            category: "Foundations",
            title: "Understanding the Console",
            subtitle: "Display messages and inspect values.",
            explanation: [
                "The console is a useful place to inspect values while learning JavaScript. The console.log() method can display strings, numbers, variables, and the results of calculations.",
                "You can provide multiple values to console.log(), separated by commas. JavaScript displays those values together, which is useful when checking what your code is doing.",
                "In this course's playground, console output appears beneath the editor, so you can experiment without opening browser developer tools."
            ],
            tip: "Try displaying a word, a number, and a calculation in separate console.log() calls.",
            example: "console.log('Student:', 'Elijah');\nconsole.log('Score:', 95);\nconsole.log(10 + 5);",
            expected: "Student: Elijah\nScore: 95\n15",
            challengeTitle: "Inspect Some Values",
            challengeText: "Display your name and a number of your choice in the console.",
            practiceHint: ""
        },

        // VARIABLES AND DATA TYPES

        {
            category: "Variables & Data Types",
            title: "Introduction to Variables",
            subtitle: "Store information that your program can use.",
            explanation: [
                "A variable is a named place where JavaScript can keep a value. You can use that name later instead of writing the value repeatedly.",
                "The let keyword declares a variable whose value can be reassigned. The variable name should describe the information it represents.",
                "For example, a variable named studentName is easier to understand than a name that gives no clue about its purpose."
            ],
            tip: "Choose meaningful variable names such as studentName, totalScore, and favouriteColour.",
            example: "let studentName = 'Elijah';\nconsole.log(studentName);",
            expected: "Elijah",
            challengeTitle: "Create a Variable",
            challengeText: "Create a variable named favouriteFood and display its value.",
            practiceHint: ""
        },

        {
            category: "Variables & Data Types",
            title: "Using let",
            subtitle: "Create variables whose values can change.",
            explanation: [
                "The let keyword declares a variable. After declaring it, you can assign a different value to the same variable.",
                "An assignment uses a single equals sign. The statement score = 20 assigns the value 20 to the existing variable named score.",
                "You cannot use let to declare the same variable name twice in the same scope. If you want to change its value, assign the new value without writing let again."
            ],
            tip: "Declare a variable once, then reassign it when you need to change its value.",
            example: "let score = 10;\nscore = 25;\nconsole.log(score);",
            expected: "25",
            challengeTitle: "Update a Score",
            challengeText: "Create a points variable, give it an initial value, change that value, and display the final result.",
            practiceHint: ""
        },

        {
            category: "Variables & Data Types",
            title: "Using const",
            subtitle: "Declare a binding that cannot be reassigned.",
            explanation: [
                "The const keyword declares a variable binding that cannot be reassigned. You must give a const variable its initial value when declaring it.",
                "For example, const schoolName = 'ELOMCODE School'; creates a binding called schoolName. Trying to assign a different value to that same binding causes an error.",
                "A const object or array can still have its contents changed. Const prevents reassignment of the binding; it does not automatically make every object value immutable."
            ],
            tip: "Use const when you do not intend to reassign a variable. Use let when reassignment is needed.",
            example: "const schoolName = 'ELOMCODE School';\nconsole.log(schoolName);",
            expected: "ELOMCODE School",
            challengeTitle: "Declare a Constant",
            challengeText: "Create a const variable named country and display its value.",
            practiceHint: ""
        },

        {
            category: "Variables & Data Types",
            title: "Variable Naming Rules",
            subtitle: "Choose clear and valid names for your variables.",
            explanation: [
                "JavaScript variable names can contain letters, digits, underscores, and dollar signs. A name cannot begin with a digit.",
                "Variable names are case-sensitive. For example, studentName and studentname are two different names.",
                "A common style is camelCase, where the first word starts with a lowercase letter and each following word begins with a capital letter, such as totalMarks or favouriteLanguage."
            ],
            tip: "Use descriptive names and remember that JavaScript treats uppercase and lowercase letters differently.",
            example: "let firstName = 'Elijah';\nlet totalMarks = 85;\nconsole.log(firstName);\nconsole.log(totalMarks);",
            expected: "Elijah\n85",
            challengeTitle: "Choose Good Names",
            challengeText: "Create two variables with meaningful names and display both values.",
            practiceHint: ""
        },

        {
            category: "Variables & Data Types",
            title: "String Data Type",
            subtitle: "Work with text in JavaScript.",
            explanation: [
                "A string is text. Strings can be written inside single quotes, double quotes, or backticks.",
                "The quotation marks tell JavaScript that the characters should be treated as text rather than as variable names or instructions.",
                "Strings can contain names, sentences, addresses, and other text. You can join strings together using the plus operator."
            ],
            tip: "Remember to close the quotation marks you open.",
            example: "let message = 'Keep learning!';\nconsole.log(message);",
            expected: "Keep learning!",
            challengeTitle: "Create a Message",
            challengeText: "Create a string variable containing an encouraging message and display it.",
            practiceHint: ""
        },

        {
            category: "Variables & Data Types",
            title: "Number Data Type",
            subtitle: "Store whole numbers and decimal numbers.",
            explanation: [
                "JavaScript uses the number type for ordinary numeric values, including whole numbers and decimal numbers.",
                "Numbers do not need quotation marks. Writing 25 creates a numeric value, while writing '25' creates a string.",
                "You can use numbers in calculations and store their results in variables."
            ],
            tip: "Keep numeric values unquoted when you intend to perform arithmetic with them.",
            example: "let age = 17;\nlet price = 12.5;\nconsole.log(age);\nconsole.log(price);",
            expected: "17\n12.5",
            challengeTitle: "Store Two Numbers",
            challengeText: "Create two number variables and display their sum.",
            practiceHint: ""
        },

        {
            category: "Variables & Data Types",
            title: "Boolean Values",
            subtitle: "Represent true and false information.",
            explanation: [
                "A Boolean is a data type with two values: true and false. Booleans are useful when a program needs to represent whether a condition is satisfied.",
                "For example, isLoggedIn could contain true if someone is signed in, or false if they are not.",
                "The Boolean values true and false are written without quotation marks. Putting them in quotation marks would make them strings instead."
            ],
            tip: "Use true and false for actual Boolean values, not 'true' or 'false' as text.",
            example: "let isLearning = true;\nlet isFinished = false;\nconsole.log(isLearning);\nconsole.log(isFinished);",
            expected: "true\nfalse",
            challengeTitle: "Create a Boolean",
            challengeText: "Create a Boolean variable describing whether you are learning JavaScript and display it.",
            practiceHint: ""
        },

        {
            category: "Variables & Data Types",
            title: "Checking Data Types",
            subtitle: "Use typeof to inspect a value's type.",
            explanation: [
                "The typeof operator helps you inspect the type of a value. It is often used when learning JavaScript or debugging a program.",
                "For example, typeof 'Hello' returns the string 'string', while typeof 42 returns 'number'.",
                "One detail to remember is that typeof null returns 'object' because of a longstanding JavaScript behaviour."
            ],
            tip: "Use typeof when you are unsure whether a value is a string, number, or Boolean.",
            example: "console.log(typeof 'Hello');\nconsole.log(typeof 42);\nconsole.log(typeof true);",
            expected: "string\nnumber\nboolean",
            challengeTitle: "Inspect Three Types",
            challengeText: "Use typeof to display the types of a string, a number, and a Boolean.",
            practiceHint: ""
        },

        // OPERATORS

        {
            category: "Operators",
            title: "Arithmetic Operators",
            subtitle: "Perform calculations with JavaScript.",
            explanation: [
                "Arithmetic operators let JavaScript perform mathematical calculations. The plus sign adds, the minus sign subtracts, the asterisk multiplies, and the slash divides.",
                "The remainder operator, written %, returns the remainder after division. For example, 10 % 3 returns 1.",
                "You can combine numbers and variables in expressions and display the result using console.log()."
            ],
            tip: "Experiment with different numbers and check each result.",
            example: "console.log(10 + 5);\nconsole.log(10 - 5);\nconsole.log(10 * 5);\nconsole.log(10 / 5);\nconsole.log(10 % 3);",
            expected: "15\n5\n50\n2\n1",
            challengeTitle: "Calculate a Total",
            challengeText: "Create two number variables and display their addition, subtraction, and multiplication results.",
            practiceHint: ""
        },

        {
            category: "Operators",
            title: "Assignment Operators",
            subtitle: "Assign and update variable values.",
            explanation: [
                "The equals sign assigns a value to a variable. JavaScript also provides shorthand assignment operators for updating an existing value.",
                "For example, score += 5 adds five to score and stores the result back in score. It is a shorter way to write score = score + 5.",
                "Other examples include -= for subtraction, *= for multiplication, and /= for division."
            ],
            tip: "Use shorthand assignment when you want to update a variable using its current value.",
            example: "let score = 10;\nscore += 5;\nscore *= 2;\nconsole.log(score);",
            expected: "30",
            challengeTitle: "Update Your Points",
            challengeText: "Start with 20 points, add 10, and display the final value.",
            practiceHint: ""
        },

        {
            category: "Operators",
            title: "Comparison Operators",
            subtitle: "Compare values and receive Boolean results.",
            explanation: [
                "Comparison operators compare values and produce a Boolean result: true or false.",
                "Common comparisons include greater than (>), less than (<), greater than or equal to (>=), and strict equality (===).",
                "Strict equality checks both value and type. For example, 5 === '5' is false because one value is a number and the other is a string."
            ],
            tip: "Prefer strict equality (===) when you want to compare both value and type.",
            example: "console.log(10 > 5);\nconsole.log(10 < 5);\nconsole.log(5 === 5);\nconsole.log(5 === '5');",
            expected: "true\nfalse\ntrue\nfalse",
            challengeTitle: "Compare Two Values",
            challengeText: "Compare two numbers using greater-than and strict-equality operators.",
            practiceHint: ""
        },

        {
            category: "Operators",
            title: "Logical Operators",
            subtitle: "Combine or reverse conditions.",
            explanation: [
                "Logical operators help you work with Boolean conditions. The && operator means AND, || means OR, and ! means NOT.",
                "With AND, both conditions must be true for the combined result to be true. With OR, at least one condition must be true.",
                "NOT reverses a Boolean result. For example, !true evaluates to false."
            ],
            tip: "Test logical expressions with different true and false values to understand how they combine.",
            example: "console.log(true && true);\nconsole.log(true && false);\nconsole.log(true || false);\nconsole.log(!true);",
            expected: "true\nfalse\ntrue\nfalse",
            challengeTitle: "Combine Conditions",
            challengeText: "Write one expression using && and another using ||. Display both results.",
            practiceHint: ""
        },

        {
            category: "Operators",
            title: "Joining Strings",
            subtitle: "Combine text using concatenation.",
            explanation: [
                "String concatenation means joining strings together. The plus operator can join text with other text.",
                "If you combine a string with a number using +, JavaScript may convert the number to text and join them. This behaviour is useful in some situations but can surprise beginners.",
                "Template literals, introduced using backticks, are another convenient way to place values inside text."
            ],
            tip: "Try template literals when you want to include variable values inside a sentence.",
            example: "let name = 'Elijah';\nconsole.log('Hello, ' + name + '!');\nconsole.log(`Welcome, ${name}!`);",
            expected: "Hello, Elijah!\nWelcome, Elijah!",
            challengeTitle: "Build a Greeting",
            challengeText: "Create a name variable and use it to display a complete greeting.",
            practiceHint: ""
        },

        // CONDITIONS

        {
            category: "Conditions",
            title: "Introduction to if",
            subtitle: "Run code only when a condition is true.",
            explanation: [
                "An if statement allows a program to make a decision. JavaScript checks the condition inside parentheses and runs the block if the condition is true.",
                "The code inside the block is enclosed in curly braces. This makes it clear which instructions belong to the condition.",
                "If the condition is false, JavaScript skips the block and continues with the rest of the program."
            ],
            tip: "Change the value in the example and observe whether the message appears.",
            example: "let score = 80;\n\nif (score >= 50) {\n    console.log('You passed!');\n}",
            expected: "You passed!",
            challengeTitle: "Check a Score",
            challengeText: "Create an if statement that displays 'Excellent!' when a score is at least 80.",
            practiceHint: ""
        },

        {
            category: "Conditions",
            title: "if...else",
            subtitle: "Choose between two possible outcomes.",
            explanation: [
                "An if...else statement lets your program choose between two paths. If the condition is true, the if block runs. Otherwise, the else block runs.",
                "This is useful when a program must respond differently depending on a value, such as whether a score reaches a passing mark.",
                "Only one of the two branches runs during a normal execution of that if...else statement."
            ],
            tip: "Test both branches by changing the score.",
            example: "let score = 40;\n\nif (score >= 50) {\n    console.log('Passed');\n} else {\n    console.log('Try again');\n}",
            expected: "Try again",
            challengeTitle: "Pass or Try Again",
            challengeText: "Write an if...else statement that checks whether a number is positive or not positive.",
            practiceHint: ""
        },

        {
            category: "Conditions",
            title: "else if",
            subtitle: "Check multiple conditions in order.",
            explanation: [
                "An else if branch lets you check another condition when the earlier if condition is false.",
                "JavaScript checks these conditions from top to bottom. When one condition is true, its block runs and the remaining branches in that chain are skipped.",
                "Order matters. For example, check for a score of 80 or more before checking whether the score is 50 or more."
            ],
            tip: "Put the more specific or higher-threshold conditions first when grading scores.",
            example: "let score = 85;\n\nif (score >= 90) {\n    console.log('A');\n} else if (score >= 80) {\n    console.log('B');\n} else {\n    console.log('Keep practising');\n}",
            expected: "B",
            challengeTitle: "Create a Grade Checker",
            challengeText: "Use if, else if, and else to display a different message for two score ranges.",
            practiceHint: ""
        },

        {
            category: "Conditions",
            title: "The switch Statement",
            subtitle: "Choose an action from several matching cases.",
            explanation: [
                "A switch statement compares an expression against several case values. When a matching case is found, its instructions run.",
                "The break statement normally stops execution from continuing into the next case. Without it, execution can fall through to later cases.",
                "The default case runs when no case matches, making it useful as a fallback."
            ],
            tip: "Remember to use break when you want a case to finish without continuing into the next one.",
            example: "let day = 'Monday';\n\nswitch (day) {\n    case 'Monday':\n        console.log('Start of the week');\n        break;\n    default:\n        console.log('Another day');\n}",
            expected: "Start of the week",
            challengeTitle: "Match a Day",
            challengeText: "Create a switch statement for a day of the week and include a default case.",
            practiceHint: ""
        },

        // LOOPS

        {
            category: "Loops",
            title: "Introduction to Loops",
            subtitle: "Repeat instructions without writing them repeatedly.",
            explanation: [
                "A loop repeats a block of code. Loops are useful when you need to perform the same kind of action multiple times.",
                "JavaScript has several loop forms, including for, while, and do...while. Each has a different structure and can suit different situations.",
                "A loop needs a suitable stopping condition. Otherwise, it may continue for too long or become an infinite loop."
            ],
            tip: "When practising loops, start with a small number of repetitions.",
            example: "for (let i = 1; i <= 3; i++) {\n    console.log('Repeat', i);\n}",
            expected: "Repeat 1\nRepeat 2\nRepeat 3",
            challengeTitle: "Repeat a Message",
            challengeText: "Use a loop to display the numbers 1, 2, 3, 4, and 5.",
            practiceHint: ""
        },

        {
            category: "Loops",
            title: "The for Loop",
            subtitle: "Repeat code using an initial value, condition, and update.",
            explanation: [
                "A for loop commonly contains three parts: an initialisation, a condition, and an update.",
                "The initialisation usually creates a counter. The condition determines whether another iteration should run. The update changes the counter after each iteration.",
                "In a loop such as for (let i = 1; i <= 5; i++), the counter starts at 1 and increases until the condition becomes false."
            ],
            tip: "Check the starting value, condition, and update to understand how many times a loop will run.",
            example: "for (let i = 1; i <= 5; i++) {\n    console.log(i);\n}",
            expected: "1\n2\n3\n4\n5",
            challengeTitle: "Count to Ten",
            challengeText: "Write a for loop that displays the numbers from 1 through 10.",
            practiceHint: ""
        },

        {
            category: "Loops",
            title: "The while Loop",
            subtitle: "Repeat instructions while a condition remains true.",
            explanation: [
                "A while loop checks its condition before running its block. If the condition is true, the block runs. The condition is checked again afterwards.",
                "If the condition is false at the beginning, the loop body does not run at all.",
                "Remember to change something that affects the condition inside the loop when necessary. Otherwise, you might accidentally create an infinite loop."
            ],
            tip: "Make sure the condition can eventually become false.",
            example: "let count = 1;\n\nwhile (count <= 3) {\n    console.log(count);\n    count++;\n}",
            expected: "1\n2\n3",
            challengeTitle: "Count with while",
            challengeText: "Use a while loop to display the numbers from 1 through 5.",
            practiceHint: ""
        },

        {
            category: "Loops",
            title: "Loop Control",
            subtitle: "Use break and continue to control repetitions.",
            explanation: [
                "The break statement exits a loop immediately. It is useful when the program has found what it is looking for or has reached a stopping point.",
                "The continue statement skips the rest of the current iteration and moves to the next iteration.",
                "These instructions can help you control loops, but a simple loop condition is often easier to understand when it can solve the problem."
            ],
            tip: "Try changing the condition in the example and observe which numbers are displayed.",
            example: "for (let i = 1; i <= 5; i++) {\n    if (i === 3) {\n        continue;\n    }\n    console.log(i);\n}",
            expected: "1\n2\n4\n5",
            challengeTitle: "Skip a Number",
            challengeText: "Write a loop from 1 to 10 that skips the number 5.",
            practiceHint: ""
        },

        // FUNCTIONS

        {
            category: "Functions",
            title: "Introduction to Functions",
            subtitle: "Group instructions into reusable blocks.",
            explanation: [
                "A function is a reusable block of code that performs a task. Instead of writing the same instructions repeatedly, you can define a function and call it whenever needed.",
                "A function declaration uses the function keyword, a name, parentheses, and a block surrounded by curly braces.",
                "Defining a function does not normally run its body immediately. You call the function by writing its name followed by parentheses."
            ],
            tip: "Remember the difference between defining a function and calling it.",
            example: "function greet() {\n    console.log('Hello, learner!');\n}\n\ngreet();",
            expected: "Hello, learner!",
            challengeTitle: "Create a Greeting Function",
            challengeText: "Define a function named welcome that displays a welcome message, then call it.",
            practiceHint: ""
        },

        {
            category: "Functions",
            title: "Function Parameters",
            subtitle: "Give functions information to work with.",
            explanation: [
                "Parameters are names listed in a function definition. They act like local variables that receive values when the function is called.",
                "When you call a function, you can provide arguments inside the parentheses. Those argument values are passed to the corresponding parameters.",
                "Parameters make functions more flexible because the same function can work with different values."
            ],
            tip: "Use parameters when a function should work with different names, numbers, or other values.",
            example: "function greet(name) {\n    console.log('Hello, ' + name + '!');\n}\n\ngreet('Elijah');\ngreet('Ada');",
            expected: "Hello, Elijah!\nHello, Ada!",
            challengeTitle: "Personalise a Message",
            challengeText: "Create a function that accepts a name and displays a greeting for that person.",
            practiceHint: ""
        },

        {
            category: "Functions",
            title: "Return Values",
            subtitle: "Send a result back from a function.",
            explanation: [
                "The return statement sends a value back to the code that called a function. That value can be stored in a variable, displayed, or used in another calculation.",
                "When JavaScript reaches a return statement, it exits that function immediately.",
                "A function that does not explicitly return a value normally produces undefined as its result."
            ],
            tip: "Use return when you need the function's result to be used elsewhere in your program.",
            example: "function add(a, b) {\n    return a + b;\n}\n\nlet result = add(4, 6);\nconsole.log(result);",
            expected: "10",
            challengeTitle: "Return a Sum",
            challengeText: "Write a function that multiplies two numbers and returns the result.",
            practiceHint: ""
        },

        // ARRAYS AND OBJECTS

        {
            category: "Arrays & Objects",
            title: "Introduction to Arrays",
            subtitle: "Store multiple values in one ordered collection.",
            explanation: [
                "An array stores multiple values in a single ordered collection. Arrays are written using square brackets, with commas separating the elements.",
                "Each element has an index. JavaScript arrays use zero-based indexing, which means the first element is at index 0, the second at index 1, and so on.",
                "You can access an element by writing the array name followed by its index in square brackets."
            ],
            tip: "Remember that the first array index is 0, not 1.",
            example: "let fruits = ['Apple', 'Mango', 'Orange'];\nconsole.log(fruits[0]);\nconsole.log(fruits[1]);",
            expected: "Apple\nMango",
            challengeTitle: "Create a Fruit Array",
            challengeText: "Create an array containing three fruits and display the first fruit.",
            practiceHint: ""
        },

        {
            category: "Arrays & Objects",
            title: "Array Methods",
            subtitle: "Add, remove, and inspect array elements.",
            explanation: [
                "JavaScript arrays have methods that help you work with their contents. The push() method adds an element to the end of an array.",
                "The pop() method removes and returns the last element. The length property tells you how many elements are currently in the array.",
                "These methods are useful when a program needs to maintain a collection of changing values."
            ],
            tip: "Remember that push() and pop() change the original array.",
            example: "let fruits = ['Apple', 'Mango'];\nfruits.push('Orange');\nconsole.log(fruits.length);\nconsole.log(fruits[2]);",
            expected: "3\nOrange",
            challengeTitle: "Update an Array",
            challengeText: "Create an array, add a new element with push(), and display its length.",
            practiceHint: ""
        },

        {
            category: "Arrays & Objects",
            title: "Introduction to Objects",
            subtitle: "Represent related information with properties.",
            explanation: [
                "An object stores information as properties. Each property has a key and a value.",
                "For example, a student object could contain a name, course, and level. These related values can be grouped together instead of being stored in separate variables.",
                "You can access a property using dot notation, such as student.name, or bracket notation, such as student['name']."
            ],
            tip: "Use objects when several pieces of information belong to the same thing.",
            example: "let student = {\n    name: 'Elijah',\n    course: 'JavaScript'\n};\n\nconsole.log(student.name);\nconsole.log(student.course);",
            expected: "Elijah\nJavaScript",
            challengeTitle: "Create a Student Object",
            challengeText: "Create an object with your name and favourite subject, then display both properties.",
            practiceHint: ""
        },

        // MODERN JAVASCRIPT

        {
            category: "Modern JavaScript",
            title: "Arrow Functions",
            subtitle: "Write functions with a shorter syntax.",
            explanation: [
                "Arrow functions provide a shorter way to write function expressions. They use an arrow made from an equals sign and a greater-than sign: =>.",
                "When an arrow function has a single expression and no braces, JavaScript can return that expression's value automatically.",
                "Arrow functions have some differences from ordinary functions, including how they handle this. For now, focus on their basic syntax."
            ],
            tip: "Compare the arrow function in this example with a traditional function declaration.",
            example: "const add = (a, b) => a + b;\nconsole.log(add(3, 7));",
            expected: "10",
            challengeTitle: "Create an Arrow Function",
            challengeText: "Write an arrow function that subtracts one number from another and display the result.",
            practiceHint: ""
        },

        {
            category: "Modern JavaScript",
            title: "Template Literals",
            subtitle: "Place variable values inside strings.",
            explanation: [
                "Template literals are strings written using backticks instead of ordinary quotation marks.",
                "Inside a template literal, you can insert an expression using ${ and }. JavaScript evaluates that expression and places its result into the text.",
                "Template literals can also span multiple lines, making them useful for longer text."
            ],
            tip: "Use backticks around the entire template literal, not ordinary quotation marks.",
            example: "let name = 'Elijah';\nlet language = 'JavaScript';\nconsole.log(`Hello ${name}, welcome to ${language}!`);",
            expected: "Hello Elijah, welcome to JavaScript!",
            challengeTitle: "Build a Personal Message",
            challengeText: "Use a template literal to combine your name and a learning goal in one sentence.",
            practiceHint: ""
        },

        {
            category: "Modern JavaScript",
            title: "Working with the DOM",
            subtitle: "Find and update elements on a webpage.",
            explanation: [
                "The Document Object Model, or DOM, represents a webpage as objects that JavaScript can access and change.",
                "Methods such as document.getElementById() can find an element by its id. Once an element is found, JavaScript can change properties such as textContent.",
                "Your practice code runs inside an isolated preview frame. You can use document.body to create and update content inside that frame."
            ],
            tip: "In this isolated playground, document.body.innerHTML can create visible HTML inside the preview.",
            example: "document.body.innerHTML = '<h2>Hello from JavaScript!</h2>';\nconsole.log('The page was updated.');",
            expected: "The page was updated.\n\nThe preview also displays: Hello from JavaScript!",
            challengeTitle: "Change the Page",
            challengeText: "Use document.body.innerHTML to display a heading with your own text.",
            practiceHint: ""
        },

        {
            category: "Modern JavaScript",
            title: "Handling Errors",
            subtitle: "Understand and respond to problems in code.",
            explanation: [
                "An error occurs when JavaScript cannot complete an instruction as written. Errors can result from invalid syntax, incorrect assumptions, or operations that fail at runtime.",
                "The try...catch structure lets you run code in a try block and handle certain errors in a catch block.",
                "Handling errors can help your program respond more clearly instead of stopping without a useful explanation. It does not mean every possible problem can be safely ignored."
            ],
            tip: "Read the error message carefully. It often gives you a clue about what needs to be corrected.",
            example: "try {\n    throw new Error('Something went wrong');\n} catch (error) {\n    console.log('Error:', error.message);\n}",
            expected: "Error: Something went wrong",
            challengeTitle: "Handle an Error",
            challengeText: "Create a try...catch statement that throws an Error with your own message and displays it in the catch block.",
            practiceHint: ""
        },

        {
            category: "Modern JavaScript",
            title: "Build a Mini Program",
            subtitle: "Combine variables, conditions, and functions.",
            explanation: [
                "A small program becomes useful when you combine several concepts. Variables hold information, functions group reusable actions, and conditions help the program choose what to do.",
                "In this example, a function receives a score and uses a condition to decide which message to return.",
                "You can expand the program by adding more score ranges, accepting different values, or displaying the result on a webpage."
            ],
            tip: "Build one small working feature at a time. Test it before adding more complexity.",
            example: "function checkScore(score) {\n    if (score >= 50) {\n        return 'Passed';\n    }\n    return 'Try again';\n}\n\nconsole.log(checkScore(75));\nconsole.log(checkScore(30));",
            expected: "Passed\nTry again",
            challengeTitle: "Build Your Own Mini Program",
            challengeText: "Create a function that accepts a number and returns a message based on whether the number is positive, negative, or zero.",
            practiceHint: ""
        }

    ];


    /* =====================================================
       COURSE STATE AND SAVED PROGRESS
       ===================================================== */

    let currentLesson = 0;
    let completedLessons = [];
    let xp = 0;

    try {

        const saved = JSON.parse(
            localStorage.getItem(STORAGE_KEY) || "{}"
        );

        if (Array.isArray(saved.completedLessons)) {

            completedLessons = [
                ...new Set(
                    saved.completedLessons.filter(index =>
                        Number.isInteger(index) &&
                        index >= 0 &&
                        index < lessons.length
                    )
                )
            ];

        }

        xp = completedLessons.length * XP_PER_LESSON;

    } catch (error) {

        completedLessons = [];
        xp = 0;

    }


    /* =====================================================
       HELPER FUNCTIONS
       ===================================================== */

    function setText(id, value) {

        const element = $(id);

        if (element) {
            element.textContent = value;
        }

    }

    function setDisabled(id, disabled) {

        const element = $(id);

        if (element) {
            element.disabled = disabled;
        }

    }

    function setButtonLabel(id, label) {

        const element = $(id);

        if (element) {
            element.textContent = label;
        }

    }

    function scrollToElement(element, offset) {

        if (!element) {
            return;
        }

        const top =
            element.getBoundingClientRect().top +
            window.scrollY -
            (offset || 100);

        window.scrollTo({
            top: Math.max(0, top),
            behavior: "smooth"
        });

    }


    /* =====================================================
       BUILD ALL 36 SIDEBAR LESSONS
       ===================================================== */

    function buildSidebar() {

        const list = $("lessonList");

        if (!list) {
            console.error("ELOMCODE: lessonList element is missing.");
            return;
        }

        list.innerHTML = "";

        let currentCategory = "";

        lessons.forEach(function (lesson, index) {

            if (lesson.category !== currentCategory) {

                currentCategory = lesson.category;

                const heading = document.createElement("div");

                heading.className = "lesson-category";
                heading.textContent = currentCategory.toUpperCase();

                list.appendChild(heading);

            }

            const button = document.createElement("button");

            button.type = "button";
            button.className = "lesson-button";
            button.dataset.lessonIndex = index;
            button.setAttribute(
                "aria-label",
                "Open lesson " + (index + 1) + ": " + lesson.title
            );

            const number = document.createElement("span");

            number.className = "lesson-number";
            number.textContent = String(index + 1).padStart(2, "0");

            const name = document.createElement("span");

            name.className = "lesson-name";
            name.textContent = lesson.title;

            const check = document.createElement("span");

            check.className = "lesson-check";

            button.append(number, name, check);

            button.addEventListener("click", function () {

                loadLesson(index, true);

            });

            list.appendChild(button);

        });

        setText("sidebarLessonCount", lessons.length + " LESSONS");

        updateSidebar();

        console.log(
            "ELOMCODE: " + lessons.length +
            " JavaScript lessons loaded."
        );

    }


    /* =====================================================
       LOAD A LESSON
       ===================================================== */

    function loadLesson(index, shouldScroll) {

        if (index < 0 || index >= lessons.length) {
            return;
        }

        currentLesson = index;

        const lesson = lessons[index];

        setText("lessonCategory", lesson.category.toUpperCase());

        setText(
            "lessonNumber",
            "LESSON " + String(index + 1).padStart(2, "0")
        );

        setText("lessonTitle", lesson.title);
        setText("lessonSubtitle", lesson.subtitle);
        setText("lessonTip", lesson.tip);

        setText(
            "exampleCode",
            lesson.example
        );

        setText(
            "exampleOutput",
            "Press Run Example to see the actual output."
        );

        setText("challengeTitle", lesson.challengeTitle);
        setText("challengeText", lesson.challengeText);

        const explanation = $("lessonExplanation");

        if (explanation) {

            explanation.replaceChildren();

            lesson.explanation.forEach(function (paragraph) {

                const p = document.createElement("p");

                p.textContent = paragraph;

                explanation.appendChild(p);

            });

        }

        const editor = $("codeEditor");

        if (editor) {

            editor.value = lesson.practiceHint || "";

        }

        setText(
            "codeOutput",
            "Write your own JavaScript, then select Run My Code."
        );

        setDisabled("previousButton", index === 0);

        setDisabled("nextButton", index === lessons.length - 1);

        const isCompleted = completedLessons.includes(index);

        setButtonLabel(
            "completeButton",
            isCompleted ? "✓ Lesson Completed" : "✓ Complete Lesson"
        );

        const completeButton = $("completeButton");

        if (completeButton) {

            completeButton.classList.toggle(
                "button-success",
                !isCompleted
            );

            completeButton.classList.toggle(
                "button-light",
                isCompleted
            );

        }

        setText("lessonMessage", "");

        const message = $("lessonMessage");

        if (message) {
            message.classList.remove("error");
        }

        updateSidebar();
        updateProgress();

        if (shouldScroll) {

            requestAnimationFrame(function () {

                scrollToElement($("lessonTitle"), 105);

            });

        }

    }


    /* =====================================================
       SIDEBAR ACTIVE AND COMPLETED STATES
       ===================================================== */

    function updateSidebar() {

        document.querySelectorAll(".lesson-button").forEach(function (button) {

            const index = Number(button.dataset.lessonIndex);

            const isActive = index === currentLesson;
            const isCompleted = completedLessons.includes(index);

            button.classList.toggle("active", isActive);
            button.classList.toggle("completed", isCompleted);

            button.setAttribute(
                "aria-current",
                isActive ? "step" : "false"
            );

            const number = button.querySelector(".lesson-number");
            const check = button.querySelector(".lesson-check");

            if (number) {

                number.textContent = isCompleted
                    ? "✓"
                    : String(index + 1).padStart(2, "0");

            }

            if (check) {
                check.textContent = isCompleted ? "✓" : "";
            }

        });

        const activeButton = document.querySelector(
            '.lesson-button[data-lesson-index="' + currentLesson + '"]'
        );

        if (activeButton && window.innerWidth > 760) {

            const list = $("lessonList");

            if (list) {

                const buttonTop = activeButton.offsetTop;
                const buttonBottom = buttonTop + activeButton.offsetHeight;

                if (buttonTop < list.scrollTop) {

                    list.scrollTop = buttonTop;

                } else if (
                    buttonBottom > list.scrollTop + list.clientHeight
                ) {

                    list.scrollTop = buttonBottom - list.clientHeight;

                }

            }

        }

    }


    /* =====================================================
       SAVE PROGRESS
       ===================================================== */

    function saveProgress() {

        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({
                    completedLessons: completedLessons,
                    xp: xp
                })
            );

        } catch (error) {

            console.warn(
                "ELOMCODE: Progress could not be saved.",
                error
            );

        }

    }


    /* =====================================================
       UPDATE COURSE PROGRESS
       ===================================================== */

    function updateProgress() {

        const total = lessons.length;
        const completed = completedLessons.length;

        const percent = Math.round((completed / total) * 100);

        setText("progressPercent", percent + "%");

        const progressFill = $("progressFill");

        if (progressFill) {

            progressFill.style.width = percent + "%";
            progressFill.setAttribute("aria-valuenow", percent);

        }

        setText(
            "completedText",
            completed + " of " + total + " lessons"
        );

        setText("xpCount", xp);

        const experienceFill = $("experienceFill");

        if (experienceFill) {
            experienceFill.style.width = percent + "%";
        }

        setText(
            "experienceText",
            completed === total
                ? "Course completed!"
                : completed + " of " + total + " lessons completed"
        );

        setText(
            "certificateStatus",
            completed === total
                ? "Your certificate is unlocked!"
                : (total - completed) + " lessons remaining"
        );

        const certificateButton = $("certificateButton");

        if (certificateButton) {

            certificateButton.style.borderTopColor =
                completed === total ? "#16ad70" : "";

            certificateButton.disabled = completed !== total;

            certificateButton.setAttribute(
                "aria-disabled",
                completed === total ? "false" : "true"
            );

        }

        setText("certificateLessons", completed + " of " + total);
        setText("certificateXP", xp + " XP");

        saveProgress();

    }


    /* =====================================================
       SAFE SANDBOXED JAVASCRIPT RUNNER
       ===================================================== */

    function runJavaScript(code, outputElement, onFinish) {

        if (!outputElement) {
            if (typeof onFinish === "function") onFinish();
            return;
        }

        outputElement.textContent = "Running your code...";

        const frame = document.createElement("iframe");

        frame.setAttribute("sandbox", "allow-scripts");
        frame.setAttribute("title", "JavaScript code output");

        frame.style.position = "fixed";
        frame.style.width = "1px";
        frame.style.height = "1px";
        frame.style.left = "-10000px";
        frame.style.top = "0";
        frame.style.opacity = "0";
        frame.style.pointerEvents = "none";
        frame.style.border = "0";

        document.body.appendChild(frame);

        const runId =
            "elomcode-" +
            Date.now() +
            "-" +
            Math.random().toString(36).slice(2);

        let finished = false;

        const timeout = window.setTimeout(function () {

            finish(
                "Execution stopped because the code took too long. " +
                "Check your loops and try again."
            );

        }, 3000);


        function finish(message) {

            if (finished) {
                return;
            }

            finished = true;

            window.clearTimeout(timeout);

            window.removeEventListener("message", onMessage);

            if (frame.parentNode) {
                frame.parentNode.removeChild(frame);
            }

            outputElement.textContent = message || "(No console output.)";

            if (typeof onFinish === "function") {
                onFinish();
            }

        }


        function onMessage(event) {

            if (event.source !== frame.contentWindow) {
                return;
            }

            const data = event.data;

            if (!data || data.runId !== runId) {
                return;
            }

            if (data.type === "result") {
                finish(data.output || "(No console output.)");
            }

            if (data.type === "error") {
                finish("Error: " + data.message);
            }

        }


        window.addEventListener("message", onMessage);

        const safeCode = JSON.stringify(String(code))
            .replace(/</g, "\\u003c");

        frame.srcdoc = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>
<script>
(function () {

    const runId = ${JSON.stringify(runId)};
    const userCode = ${safeCode};
    const output = [];

    function printable(value) {

        if (typeof value === "string") {
            return value;
        }

        if (value instanceof Error) {
            return value.message;
        }

        if (value === undefined) {
            return "undefined";
        }

        if (typeof value === "function") {
            return value.toString();
        }

        try {

            const result = JSON.stringify(value);

            return result === undefined
                ? String(value)
                : result;

        } catch (error) {

            return String(value);

        }

    }

    function formatArguments(args) {

        return Array.from(args).map(printable).join(" ");

    }

    console.log = function () {
        output.push(formatArguments(arguments));
    };

    console.info = console.log;
    console.warn = console.log;
    console.error = console.log;

    window.onerror = function (message, source, line) {

        window.parent.postMessage({
            runId: runId,
            type: "error",
            message: String(message) + " (line " + line + ")"
        }, "*");

        return true;

    };

    try {

        const execute = new Function(
            "console",
            "document",
            "window",
            userCode
        );

        execute(console, document, window);

        const pageText = document.body.innerText.trim();

        let result = output.join("\\n");

        if (pageText) {

            if (result) {
                result += "\\n\\n";
            }

            result += "Page content:\\n" + pageText;

        }

        window.parent.postMessage({
            runId: runId,
            type: "result",
            output: result
        }, "*");

    } catch (error) {

        window.parent.postMessage({
            runId: runId,
            type: "error",
            message: error.name + ": " + error.message
        }, "*");

    }

})();
<\/script>
</body>
</html>`;

    }


    /* =====================================================
       RUN THE LESSON EXAMPLE
       ===================================================== */

    function runExample() {

        const lesson = lessons[currentLesson];

        setDisabled("runExampleButton", true);
        setButtonLabel("runExampleButton", "Running...");

        runJavaScript(
            lesson.example,
            $("exampleOutput"),
            function () {

                setDisabled("runExampleButton", false);
                setButtonLabel("runExampleButton", "▶ Run Example");

            }
        );

    }


    /* =====================================================
       RUN THE LEARNER'S OWN CODE
       ===================================================== */

    function runPractice() {

        const editor = $("codeEditor");

        if (!editor) {
            return;
        }

        const code = editor.value;

        if (!code.trim()) {

            setText(
                "codeOutput",
                "Your editor is empty. Write some JavaScript first, then run it."
            );

            editor.focus();

            return;

        }

        setDisabled("runCodeButton", true);
        setButtonLabel("runCodeButton", "Running...");

        runJavaScript(
            code,
            $("codeOutput"),
            function () {

                setDisabled("runCodeButton", false);
                setButtonLabel("runCodeButton", "▶ Run My Code");

            }
        );

    }


    /* =====================================================
       COMPLETE A LESSON
       ===================================================== */

    function completeCurrentLesson() {

        const isNewCompletion =
            !completedLessons.includes(currentLesson);

        if (isNewCompletion) {

            completedLessons.push(currentLesson);

            completedLessons.sort(function (a, b) {
                return a - b;
            });

            xp = completedLessons.length * XP_PER_LESSON;

            const message = $("lessonMessage");

            if (message) {

                message.classList.remove("error");

                message.textContent =
                    "Excellent work! Lesson completed. You earned " +
                    XP_PER_LESSON + " XP.";

            }

        } else {

            setText(
                "lessonMessage",
                "You have already completed this lesson. Keep going!"
            );

        }

        setButtonLabel("completeButton", "✓ Lesson Completed");

        const completeButton = $("completeButton");

        if (completeButton) {

            completeButton.classList.remove("button-success");
            completeButton.classList.add("button-light");

        }

        updateProgress();
        updateSidebar();

        if (completedLessons.length === lessons.length) {

            setText(
                "lessonMessage",
                "Congratulations! You have completed the entire " +
                "JavaScript Masterclass. Enter your name to receive your certificate."
            );

            openCertificate();

        }

    }


    /* =====================================================
       PREVIOUS AND NEXT LESSONS
       ===================================================== */

    function previousLesson() {

        if (currentLesson > 0) {
            loadLesson(currentLesson - 1, true);
        }

    }


    function nextLesson() {

        if (currentLesson < lessons.length - 1) {

            loadLesson(currentLesson + 1, true);

        } else {

            setText(
                "lessonMessage",
                "You have reached the final lesson. Review any unfinished lessons to unlock your certificate."
            );

        }

    }


    /* =====================================================
       CERTIFICATE SYSTEM
       ===================================================== */

    function openCertificate() {

        if (completedLessons.length !== lessons.length) {

            const message = $("lessonMessage");

            if (message) {

                message.classList.add("error");

                message.textContent =
                    "Your certificate is locked. Complete all " +
                    lessons.length + " lessons first.";

            }

            return;

        }

        setText("certificateLessons", lessons.length + " of " + lessons.length);
        setText("certificateXP", xp + " XP");

        const modal = $("certificateModal");

        if (!modal) {
            return;
        }

        const nameInput = $("learnerName");

        if (nameInput) {

            nameInput.style.borderColor = "";
            nameInput.placeholder = "Enter your full name";

        }

        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");

        window.setTimeout(function () {

            if (nameInput) {
                nameInput.focus();
            }

        }, 150);

    }


    function closeCertificate() {

        const modal = $("certificateModal");

        if (!modal) {
            return;
        }

        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");

    }


    /* =====================================================
       PUT THE LEARNER'S NAME ON THE CERTIFICATE
       ===================================================== */

    function prepareCertificateName(name) {

        const modal = $("certificateModal");

        if (!modal) {
            return;
        }

        const certificateCard =
            modal.querySelector(".certificate-card") || modal;

        let nameDisplay = $("printedLearnerName");

        if (!nameDisplay) {

            nameDisplay = document.createElement("div");

            nameDisplay.id = "printedLearnerName";
            nameDisplay.className = "printed-learner-name";

            const description =
                certificateCard.querySelector(".certificate-description");

            if (description) {

                description.insertAdjacentElement(
                    "beforebegin",
                    nameDisplay
                );

            } else {

                certificateCard.appendChild(nameDisplay);

            }

        }

        nameDisplay.textContent = name;

        nameDisplay.style.textAlign = "center";
        nameDisplay.style.fontSize = "clamp(25px, 4vw, 38px)";
        nameDisplay.style.fontWeight = "800";
        nameDisplay.style.margin = "22px 0";
        nameDisplay.style.overflowWrap = "anywhere";

    }


    /* =====================================================
       CERTIFICATE PRINT STYLES
       ===================================================== */

    function installCertificatePrintStyles() {

        if ($("elomcodeCertificatePrintStyles")) {
            return;
        }

        const style = document.createElement("style");

        style.id = "elomcodeCertificatePrintStyles";

        style.textContent = `
            @page {
                size: A4 landscape;
                margin: 10mm;
            }

            @media print {

                body * {
                    visibility: hidden !important;
                }

                #certificateModal,
                #certificateModal * {
                    visibility: visible !important;
                }

                #certificateModal {
                    display: block !important;
                    position: absolute !important;
                    inset: 0 !important;
                    width: 100% !important;
                    height: auto !important;
                    min-height: 0 !important;
                    padding: 0 !important;
                    margin: 0 !important;
                    overflow: visible !important;
                    background: #ffffff !important;
                    box-shadow: none !important;
                    z-index: 999999 !important;
                }

                #certificateModal .modal-backdrop,
                #certificateModal .modal-close,
                #certificateModal button,
                #certificateModal input,
                #certificateModal label,
                #certificateModal form {
                    display: none !important;
                }

                #certificateModal .certificate-card {
                    display: block !important;
                    position: relative !important;
                    width: 100% !important;
                    max-width: none !important;
                    min-height: 160mm !important;
                    height: auto !important;
                    margin: 0 auto !important;
                    padding: 16mm !important;
                    overflow: visible !important;
                    border: 5px double #c99b3c !important;
                    border-radius: 0 !important;
                    box-shadow: none !important;
                    background: #ffffff !important;
                    color: #172033 !important;
                    page-break-inside: avoid !important;
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                }

                #printedLearnerName {
                    display: block !important;
                    visibility: visible !important;
                    color: #172033 !important;
                    font-size: 30pt !important;
                    font-weight: 800 !important;
                    text-align: center !important;
                    margin: 14mm 0 !important;
                }

                #certificateModal .certificate-card * {
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                }

            }
        `;

        document.head.appendChild(style);

    }


    /* =====================================================
       PRINT OR SAVE CERTIFICATE AS PDF
       ===================================================== */

    function printCertificate() {

        if (completedLessons.length !== lessons.length) {

            setText(
                "lessonMessage",
                "Complete every lesson before printing your certificate."
            );

            const message = $("lessonMessage");

            if (message) {
                message.classList.add("error");
            }

            return;

        }

        const nameInput = $("learnerName");

        if (!nameInput) {
            return;
        }

        const name = nameInput.value.trim();

        if (!name) {

            nameInput.style.borderColor = "#e04b5a";
            nameInput.placeholder = "Please enter your full name first";
            nameInput.focus();

            return;

        }

        nameInput.style.borderColor = "";

        prepareCertificateName(name);

        installCertificatePrintStyles();

                /* Prepare a dedicated one-page certificate print layout */
        let printStyle = document.getElementById(
            "elomcode-certificate-print-style"
        );

        if (!printStyle) {
            printStyle = document.createElement("style");
            printStyle.id = "elomcode-certificate-print-style";

            printStyle.textContent = `
                @page {
                    size: A4 landscape;
                    margin: 0;
                }

                @media print {
                    html,
                    body {
                        width: 297mm !important;
                        height: 210mm !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        overflow: hidden !important;
                        background: white !important;
                    }

                    body * {
                        visibility: hidden !important;
                    }

                    #certificateModal,
                    #certificateModal * {
                        visibility: visible !important;
                    }

                    #certificateModal {
                        position: fixed !important;
                        inset: 0 !important;
                        display: block !important;
                        width: 297mm !important;
                        height: 210mm !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        overflow: hidden !important;
                        background: white !important;
                        z-index: 999999 !important;
                    }

                    #certificateModal .modal-backdrop,
                    #certificateModal #modalBackdrop,
                    #certificateModal .modal-close,
                    #certificateModal button,
                    #certificateModal input,
                    #certificateModal label {
                        display: none !important;
                    }

                    #certificateModal .certificate-card {
                        position: absolute !important;
                        top: 10mm !important;
                        left: 10mm !important;
                        width: 277mm !important;
                        height: 190mm !important;
                        max-width: none !important;
                        max-height: none !important;
                        box-sizing: border-box !important;
                        margin: 0 !important;
                        padding: 15mm !important;
                        overflow: hidden !important;
                        border: 4px double #c99b3c !important;
                        border-radius: 0 !important;
                        box-shadow: none !important;
                        background: white !important;
                        color: #172033 !important;
                        page-break-before: avoid !important;
                        page-break-after: avoid !important;
                        page-break-inside: avoid !important;
                        break-before: avoid-page !important;
                        break-after: avoid-page !important;
                        break-inside: avoid-page !important;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }

                    #printedLearnerName {
                        display: block !important;
                        visibility: visible !important;
                        margin: 12mm 0 !important;
                        text-align: center !important;
                        font-size: 26pt !important;
                        font-weight: bold !important;
                        color: #172033 !important;
                        overflow-wrap: anywhere !important;
                    }
                }
            `;

            document.head.appendChild(printStyle);
        }

        window.print();

    }


    /* =====================================================
       FLOATING BACKGROUND PARTICLES
       ===================================================== */

    function createParticles() {

        const container = $("particles");

        if (!container) {
            return;
        }

        container.innerHTML = "";

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < 28; i++) {

            const particle = document.createElement("span");

            particle.className = "particle";

            particle.style.left = Math.random() * 100 + "%";

            particle.style.top =
                (60 + Math.random() * 50) + "%";

            particle.style.animationDuration =
                (8 + Math.random() * 13) + "s";

            particle.style.animationDelay =
                (-Math.random() * 15) + "s";

            const size = 2 + Math.random() * 3;

            particle.style.width = size + "px";
            particle.style.height = size + "px";

            fragment.appendChild(particle);

        }

        container.appendChild(fragment);

    }


    /* =====================================================
       CONNECT ALL BUTTONS SAFELY
       ===================================================== */

    function connectButton(id, handler) {

        const element = $(id);

        if (element) {
            element.addEventListener("click", handler);
        } else {
            console.warn("ELOMCODE: Missing button #" + id);
        }

    }


    connectButton("runExampleButton", runExample);

    connectButton("runCodeButton", runPractice);

    connectButton("clearEditorButton", function () {

        const editor = $("codeEditor");

        if (editor) {

            editor.value = "";
            editor.focus();

        }

        setText(
            "codeOutput",
            "Editor cleared. Write your JavaScript and run it when ready."
        );

    });

    connectButton("previousButton", previousLesson);

    connectButton("nextButton", nextLesson);

    connectButton("completeButton", completeCurrentLesson);

    connectButton("certificateButton", openCertificate);

    connectButton("closeModalButton", closeCertificate);

    connectButton("modalBackdrop", closeCertificate);

    connectButton("printCertificateButton", printCertificate);


    /* =====================================================
       KEYBOARD NAVIGATION
       ===================================================== */

    document.addEventListener("keydown", function (event) {

        const target = event.target;

        const tag = target && target.tagName
            ? target.tagName.toUpperCase()
            : "";

        if (
            tag === "TEXTAREA" ||
            tag === "INPUT" ||
            tag === "SELECT" ||
            (target && target.isContentEditable) ||
            event.ctrlKey ||
            event.altKey ||
            event.metaKey
        ) {
            return;
        }

        if (event.key === "ArrowLeft") {

            previousLesson();

        } else if (event.key === "ArrowRight") {

            nextLesson();

        } else if (event.key === "Escape") {

            closeCertificate();

        }

    });


    /* =====================================================
       START THE COURSE
       ===================================================== */

    try {

        buildSidebar();

        createParticles();

        updateProgress();

        loadLesson(0, false);

        console.log(
            "ELOMCODE JavaScript Masterclass is ready. " +
            lessons.length + " lessons are available."
        );

    } catch (error) {

        console.error(
            "ELOMCODE course startup error:",
            error
        );

        const list = $("lessonList");

        if (list) {

            list.innerHTML =
                '<div class="sidebar-loading">' +
                'The lessons could not load. ' +
                'Please check javascript.js for errors.' +
                '</div>';

        }

        const message = $("lessonMessage");

        if (message) {

            message.textContent =
                "A course startup error occurred. Open the browser console to inspect it.";

            message.classList.add("error");

        }

    }

});