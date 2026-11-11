/* ==========================================================
   ELOMCODE SCHOOL
   TYPESCRIPT MASTERCLASS — COURSE ENGINE
   45 Interactive Lessons
   Course Architect: Elijah Opomulero
========================================================== */

"use strict";


/* ==========================================================
   01. COURSE CONFIGURATION
========================================================== */

const COURSE = {
    name: "TypeScript Masterclass",
    totalLessons: 45,
    xpPerLesson: 25,
    storageKey: "elomcode_typescript_course_progress",
    certificateKey: "elomcode_typescript_certificate"
};


/* ==========================================================
   02. LESSON DATABASE
========================================================== */

const LESSONS = [

    /* ------------------------------------------------------
       SECTION 1 — FOUNDATIONS
    ------------------------------------------------------ */

    {
        group: "FOUNDATIONS",
        title: "Welcome to TypeScript",
        subtitle: "Discover TypeScript and what makes it useful.",
        explanation: `
            <p>Welcome to the ELOMCODE TypeScript Masterclass! TypeScript is a programming language built on JavaScript. It adds a type system that helps developers identify certain mistakes before their programs run.</p>
            <h3>Why learn TypeScript?</h3>
            <ul>
                <li>Understand the kinds of values your variables should contain.</li>
                <li>Catch many programming mistakes while writing code.</li>
                <li>Improve code completion in modern editors.</li>
                <li>Make large JavaScript projects easier to maintain.</li>
            </ul>
            <p>TypeScript code is normally compiled into JavaScript, which browsers can execute.</p>
        `,
        tip: "TypeScript builds on JavaScript. Learning JavaScript fundamentals will make your journey easier.",
        example: `const message: string = "Welcome to ELOMCODE!";
console.log(message);

const course: string = "TypeScript Masterclass";
console.log(course);`,
        challengeTitle: "Your First TypeScript Program",
        challenge: `Create a string variable called <code>learner</code> containing your name. Print a welcome message using <code>console.log()</code>.`
    },

    {
        group: "FOUNDATIONS",
        title: "TypeScript vs JavaScript",
        subtitle: "Understand the relationship between the two languages.",
        explanation: `
            <p>JavaScript is the language browsers execute. TypeScript adds features such as static types, interfaces, and compile-time checking.</p>
            <h3>What happens to TypeScript?</h3>
            <ol>
                <li>You write TypeScript code.</li>
                <li>The TypeScript compiler checks and transforms it.</li>
                <li>The compiler produces JavaScript.</li>
                <li>The JavaScript program runs in a supported environment.</li>
            </ol>
            <p>Types such as <code>string</code> and <code>number</code> are generally removed during compilation. They help check your code but do not automatically validate data received from an external source at runtime.</p>
        `,
        tip: "TypeScript does not replace JavaScript's runtime. It helps you write JavaScript programs with stronger development-time checks.",
        example: `const language: string = "TypeScript";
const basedOn: string = "JavaScript";

console.log(language + " builds on " + basedOn);`,
        challengeTitle: "Explain the Difference",
        challenge: `Create two string variables: <code>javascript</code> and <code>typescript</code>. Print a sentence explaining how they are related.`
    },

    {
        group: "FOUNDATIONS",
        title: "Setting Up Your Environment",
        subtitle: "Learn what you need to start writing TypeScript.",
        explanation: `
            <p>TypeScript projects commonly use Node.js, a package manager, and the TypeScript compiler. Editors can provide autocomplete, error highlighting, and navigation.</p>
            <h3>Typical development setup</h3>
            <ul>
                <li>Install Node.js from its official website.</li>
                <li>Install a code editor.</li>
                <li>Install TypeScript in a project with <code>npm install --save-dev typescript</code>.</li>
                <li>Create a configuration file using <code>npx tsc --init</code>.</li>
                <li>Compile a file using <code>npx tsc filename.ts</code>.</li>
            </ul>
            <p>This course also provides an in-browser compiler for practice, so you can experiment without installing these tools first.</p>
        `,
        tip: "The browser playground is convenient for learning. Real projects usually need a properly configured development environment.",
        example: `const setup = {
    editor: "Notepad++",
    language: "TypeScript",
    compiler: "TypeScript Compiler"
};

console.log(setup.editor);
console.log(setup.language);
console.log(setup.compiler);`,
        challengeTitle: "Understand Your Tools",
        challenge: `Create an object named <code>tools</code> with properties for an editor, a programming language, and a compiler. Print each property.`
    },

    {
        group: "FOUNDATIONS",
        title: "Your First TypeScript File",
        subtitle: "Write and compile your first typed program.",
        explanation: `
            <p>A TypeScript source file usually ends with <code>.ts</code>. Inside it, you can write familiar JavaScript syntax and add type annotations.</p>
            <p>For example, <code>const age: number = 17;</code> declares a constant whose value must be a number under TypeScript's type checking.</p>
            <h3>Basic structure</h3>
            <ul>
                <li>Declare variables.</li>
                <li>Write expressions.</li>
                <li>Call functions such as <code>console.log()</code>.</li>
                <li>Compile the file into JavaScript.</li>
            </ul>
        `,
        tip: "Start with short programs. Once you understand each line, combine the pieces into larger applications.",
        example: `const learnerName: string = "Elijah";
const lessonNumber: number = 4;

console.log("Learner: " + learnerName);
console.log("Current lesson: " + lessonNumber);`,
        challengeTitle: "Create a Learner Profile",
        challenge: `Declare your name as a <code>string</code>, your age as a <code>number</code>, and print both values.`
    },

    {
        group: "FOUNDATIONS",
        title: "Understanding Type Annotations",
        subtitle: "Tell TypeScript what kind of value a variable should hold.",
        explanation: `
            <p>A type annotation follows a variable name after a colon. It tells TypeScript what type of value is expected.</p>
            <p>Examples include <code>let city: string</code>, <code>let score: number</code>, and <code>let active: boolean</code>.</p>
            <p>If a value conflicts with its declared type, TypeScript can report an error during type checking.</p>
            <h3>Annotations and inference</h3>
            <p>You do not always need to write a type annotation. TypeScript can often infer a variable's type from its initial value.</p>
        `,
        tip: "Use annotations when they improve clarity. Avoid adding unnecessary types to every simple expression.",
        example: `let city: string = "Lagos";
let temperature: number = 29;
let isLearning: boolean = true;

console.log(city);
console.log(temperature);
console.log(isLearning);`,
        challengeTitle: "Annotate Your Variables",
        challenge: `Create typed variables for a school name, a course count, and whether lessons are available. Print all three.`
    },

    {
        group: "FOUNDATIONS",
        title: "The TypeScript Compiler",
        subtitle: "Understand how TypeScript becomes JavaScript.",
        explanation: `
            <p>The TypeScript compiler, commonly called <code>tsc</code>, checks TypeScript code and emits JavaScript when configured to do so.</p>
            <p>In this course, the compiler runs in your browser. It transforms your practice code into JavaScript before the output iframe executes it.</p>
            <h3>Important distinction</h3>
            <p>Transpiling code and performing full project type checking are different tasks. This browser playground uses transpilation diagnostics to help you practise, but it is not a replacement for a complete TypeScript project check.</p>
        `,
        tip: "A successful compilation does not guarantee that a program is free of every bug.",
        example: `const firstNumber: number = 12;
const secondNumber: number = 8;

const result: number = firstNumber + secondNumber;

console.log("Result: " + result);`,
        challengeTitle: "Compile a Calculation",
        challenge: `Write a TypeScript program that adds two numbers, stores the result in a typed variable, and prints the answer.`
    },

    {
        group: "FOUNDATIONS",
        title: "Comments and Readable Code",
        subtitle: "Document your intentions with clear comments.",
        explanation: `
            <p>Comments explain the purpose of code. JavaScript and TypeScript support single-line comments beginning with <code>//</code> and multiline comments enclosed by <code>/*</code> and <code>*/</code>.</p>
            <p>Comments do not change the program's behaviour. They are useful when explaining decisions, assumptions, and complicated logic.</p>
            <h3>Write useful comments</h3>
            <ul>
                <li>Explain why something is done when the reason is not obvious.</li>
                <li>Keep comments accurate as code changes.</li>
                <li>Use clear variable names instead of relying on comments alone.</li>
            </ul>
        `,
        tip: "Readable code with meaningful names is often more useful than a large number of comments.",
        example: `// Store the learner's score.
const score: number = 85;

/*
    Decide whether the learner
    has reached the target.
*/
const passed: boolean = score >= 50;

console.log(score);
console.log(passed);`,
        challengeTitle: "Document Your Code",
        challenge: `Write a short program with two meaningful comments. Calculate the total price of two items and print the result.`
    },

    {
        group: "FOUNDATIONS",
        title: "Constants and Let",
        subtitle: "Choose how to declare variables.",
        explanation: `
            <p>Use <code>const</code> when a variable binding should not be reassigned. Use <code>let</code> when the binding needs to change.</p>
            <p>For example, a course title might be declared with <code>const</code>, while a running score might use <code>let</code>.</p>
            <p>A <code>const</code> object can still have its properties changed unless its type or the object's structure prevents that. The keyword prevents reassignment of the binding, not every possible mutation of its value.</p>
        `,
        tip: "Prefer const by default. Change to let only when reassignment is needed.",
        example: `const courseName: string = "TypeScript";
let score: number = 10;

score = score + 15;

console.log(courseName);
console.log(score);`,
        challengeTitle: "Manage a Score",
        challenge: `Declare a constant course name and a variable score. Increase the score by 20 and print both values.`
    },


    /* ------------------------------------------------------
       SECTION 2 — VARIABLES AND TYPES
    ------------------------------------------------------ */

    {
        group: "VARIABLES & TYPES",
        title: "String Types",
        subtitle: "Work confidently with text.",
        explanation: `
            <p>The <code>string</code> type represents text. String values can use single quotes, double quotes, or template literals.</p>
            <p>Template literals use backticks and allow expressions inside <code>\${...}</code>. They are helpful when combining text and variable values.</p>
            <p>String methods such as <code>toUpperCase()</code>, <code>toLowerCase()</code>, and <code>includes()</code> can help process text.</p>
        `,
        tip: "Template literals are convenient for messages containing several variable values.",
        example: `const firstName: string = "Elijah";
const course: string = "TypeScript";

const message: string = \`Welcome \${firstName}! You are learning \${course}.\`;

console.log(message);
console.log(firstName.toUpperCase());`,
        challengeTitle: "Build a Welcome Message",
        challenge: `Create two string variables and use a template literal to produce a personalised welcome message.`
    },

    {
        group: "VARIABLES & TYPES",
        title: "Number Types",
        subtitle: "Represent integers and decimal values.",
        explanation: `
            <p>TypeScript uses the <code>number</code> type for ordinary numeric values, including integers and decimals.</p>
            <p>You can use arithmetic operators such as <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, and <code>%</code>.</p>
            <p>JavaScript also has special numeric values such as <code>NaN</code> and <code>Infinity</code>, so type annotations alone do not guarantee a sensible calculation.</p>
        `,
        tip: "Use parentheses to make complicated mathematical expressions easier to understand.",
        example: `const price: number = 2500;
const quantity: number = 3;
const total: number = price * quantity;

console.log("Total: " + total);
console.log("Remainder: " + (17 % 5));`,
        challengeTitle: "Calculate a Purchase",
        challenge: `Store an item price and quantity in number variables. Calculate and print the total cost.`
    },

    {
        group: "VARIABLES & TYPES",
        title: "Boolean Types",
        subtitle: "Represent true and false values.",
        explanation: `
            <p>The <code>boolean</code> type has two values: <code>true</code> and <code>false</code>.</p>
            <p>Booleans commonly represent whether a condition is satisfied, whether a task is complete, or whether a feature is enabled.</p>
            <p>Comparison operators such as <code>&gt;</code>, <code>&lt;</code>, and <code>===</code> produce boolean results.</p>
        `,
        tip: "Choose descriptive boolean names such as isComplete, hasAccess, or canContinue.",
        example: `const score: number = 78;
const hasPassed: boolean = score >= 50;
const isExcellent: boolean = score >= 70;

console.log(hasPassed);
console.log(isExcellent);`,
        challengeTitle: "Check a Result",
        challenge: `Create a boolean called <code>isAdult</code> based on a numeric age. Print the boolean value.`
    },

    {
        group: "VARIABLES & TYPES",
        title: "Type Inference",
        subtitle: "Let TypeScript discover types automatically.",
        explanation: `
            <p>Type inference allows TypeScript to determine a type from context or an initial value.</p>
            <p>For example, <code>const message = "Hello"</code> gives TypeScript enough information to infer a string value.</p>
            <p>Inference reduces unnecessary annotations while preserving many of the benefits of static checking.</p>
        `,
        tip: "You can use inferred types and explicit annotations together in the same program.",
        example: `const name = "Elijah";
const lessonCount = 45;
const isReady = true;

console.log(typeof name);
console.log(typeof lessonCount);
console.log(typeof isReady);`,
        challengeTitle: "Explore Inferred Types",
        challenge: `Declare a string, a number, and a boolean without annotations. Use <code>typeof</code> to print each variable's runtime type.`
    },

    {
        group: "VARIABLES & TYPES",
        title: "The Any Type",
        subtitle: "Understand flexible typing and its risks.",
        explanation: `
            <p>The <code>any</code> type disables many type checks for the value it represents.</p>
            <p>It can be useful when migrating old JavaScript code, but it can also hide mistakes and remove many of TypeScript's advantages.</p>
            <p>Where possible, prefer more specific types or use <code>unknown</code> when a value is not yet understood.</p>
        `,
        tip: "Treat any as an escape hatch, not your default type.",
        example: `let flexibleValue: any = "Hello";
console.log(flexibleValue);

flexibleValue = 42;
console.log(flexibleValue);

flexibleValue = true;
console.log(flexibleValue);`,
        challengeTitle: "Observe a Flexible Value",
        challenge: `Create an <code>any</code> variable and assign it a string, then a number. Print it after each assignment. Explain why unrestricted flexibility can be risky.`
    },

    {
        group: "VARIABLES & TYPES",
        title: "The Unknown Type",
        subtitle: "Handle values safely when their type is uncertain.",
        explanation: `
            <p>The <code>unknown</code> type can represent a value whose type has not yet been established.</p>
            <p>Unlike <code>any</code>, TypeScript does not allow arbitrary operations on unknown values until you narrow their type.</p>
            <p>You can use <code>typeof</code> checks or other conditions to determine what kind of value you are handling.</p>
        `,
        tip: "Unknown encourages you to verify a value before using it.",
        example: `function describeValue(value: unknown): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    if (typeof value === "number") {
        return value.toFixed(2);
    }

    return "Unsupported value";
}

console.log(describeValue("hello"));
console.log(describeValue(12.5));
console.log(describeValue(true));`,
        challengeTitle: "Narrow an Unknown Value",
        challenge: `Write a function that accepts <code>unknown</code> and returns the value in uppercase only when it is a string. Otherwise, return a helpful message.`
    },

    {
        group: "VARIABLES & TYPES",
        title: "Arrays and Typed Lists",
        subtitle: "Create collections of values.",
        explanation: `
            <p>An array stores multiple values in a single collection.</p>
            <p>TypeScript supports declarations such as <code>number[]</code> and <code>Array&lt;string&gt;</code>. Both can describe arrays of a particular element type.</p>
            <p>Typed arrays help prevent accidentally inserting incompatible values.</p>
        `,
        tip: "Use the element type that reflects what your array should contain.",
        example: `const scores: number[] = [70, 85, 92, 68];

scores.push(88);

console.log(scores);
console.log("Number of scores: " + scores.length);

const average: number =
    scores.reduce((total, score) => total + score, 0)
    / scores.length;

console.log("Average: " + average);`,
        challengeTitle: "Calculate an Average",
        challenge: `Create an array of at least four numeric scores. Calculate and print their average.`
    },

    {
        group: "VARIABLES & TYPES",
        title: "Tuples",
        subtitle: "Represent arrays with a known position-based structure.",
        explanation: `
            <p>A tuple describes an array-like structure where positions have particular types.</p>
            <p>For example, <code>[string, number]</code> describes a two-element tuple whose first value is a string and whose second value is a number.</p>
            <p>Tuples are useful for structured pairs and small fixed-position collections. TypeScript's tuple checks have limits, so they should not be treated as a complete runtime validation system.</p>
        `,
        tip: "For records with several meaningful properties, an object can be clearer than a tuple.",
        example: `const learner: [string, number] = ["Elijah", 17];

console.log("Name: " + learner[0]);
console.log("Age: " + learner[1]);`,
        challengeTitle: "Create a Tuple",
        challenge: `Create a tuple containing a course title and a numeric lesson count. Print each value using its position.`
    },

    {
        group: "VARIABLES & TYPES",
        title: "Union Types",
        subtitle: "Allow a value to have more than one possible type.",
        explanation: `
            <p>A union type combines alternatives using the pipe symbol <code>|</code>.</p>
            <p>A variable declared as <code>string | number</code> may hold either a string or a number.</p>
            <p>Before using operations that only work for one alternative, check which type the value currently has.</p>
        `,
        tip: "Union types describe allowed alternatives. Narrow the value before using type-specific methods.",
        example: `function formatValue(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    return value.toFixed(2);
}

console.log(formatValue("typescript"));
console.log(formatValue(45.678));`,
        challengeTitle: "Handle Two Types",
        challenge: `Write a function that accepts <code>string | number</code> and returns a readable string for either kind of value.`
    },

    {
        group: "VARIABLES & TYPES",
        title: "Literal Types",
        subtitle: "Restrict a variable to specific values.",
        explanation: `
            <p>Literal types allow only specific values instead of every value of a general type.</p>
            <p>For example, <code>"beginner" | "intermediate" | "advanced"</code> defines three permitted text values.</p>
            <p>Literal types are useful for settings, application states, and options with a known set of choices.</p>
        `,
        tip: "Combine literal types with unions to represent a controlled set of choices.",
        example: `type Level = "beginner" | "intermediate" | "advanced";

const currentLevel: Level = "beginner";

function showLevel(level: Level): void {
    console.log("Learning level: " + level);
}

showLevel(currentLevel);`,
        challengeTitle: "Create a Learning Level",
        challenge: `Create a type called <code>Difficulty</code> with three permitted string values. Write a function that prints the selected difficulty.`
    },


    /* ------------------------------------------------------
       SECTION 3 — FUNCTIONS
    ------------------------------------------------------ */

    {
        group: "FUNCTIONS",
        title: "Function Basics",
        subtitle: "Create reusable blocks of code.",
        explanation: `
            <p>Functions group instructions into reusable units. A function can receive parameters, perform work, and optionally return a result.</p>
            <p>TypeScript checks the declared or inferred types of function parameters and return values.</p>
            <p>Use descriptive function names that communicate what the function does.</p>
        `,
        tip: "A good function usually has a clear responsibility and a meaningful name.",
        example: `function greet(name: string): string {
    return "Hello, " + name + "!";
}

console.log(greet("Elijah"));
console.log(greet("Learner"));`,
        challengeTitle: "Write a Greeting Function",
        challenge: `Create a function that accepts a learner's name and returns a personalised welcome message.`
    },

    {
        group: "FUNCTIONS",
        title: "Parameter Types",
        subtitle: "Specify what information a function accepts.",
        explanation: `
            <p>Function parameters can have explicit types. If a function expects a number, passing an incompatible value can produce a TypeScript error.</p>
            <p>Typed parameters help explain a function's requirements and improve editor assistance.</p>
            <p>TypeScript types are primarily development-time checks. JavaScript callers or external inputs may still provide unexpected runtime values.</p>
        `,
        tip: "Describe each parameter according to the data the function actually needs.",
        example: `function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
}

console.log(calculateTotal(2500, 3));
console.log(calculateTotal(800, 2));`,
        challengeTitle: "Calculate a Total",
        challenge: `Write a function with two numeric parameters that returns their product. Test it with two different calls.`
    },

    {
        group: "FUNCTIONS",
        title: "Return Types",
        subtitle: "Describe the value returned by a function.",
        explanation: `
            <p>A return type describes what a function returns.</p>
            <p>For example, <code>function add(a: number, b: number): number</code> promises a numeric result.</p>
            <p>Functions that do not return a useful value can use the <code>void</code> return type.</p>
        `,
        tip: "Explicit return types are particularly useful for public functions and complicated logic.",
        example: `function add(a: number, b: number): number {
    return a + b;
}

function announce(message: string): void {
    console.log(message);
}

announce("Calculation complete");
console.log(add(12, 8));`,
        challengeTitle: "Return a Result",
        challenge: `Create one function that returns a number and another that prints a message without returning a useful value.`
    },

    {
        group: "FUNCTIONS",
        title: "Optional Parameters",
        subtitle: "Make certain function arguments optional.",
        explanation: `
            <p>An optional parameter uses a question mark before the colon, such as <code>name?: string</code>.</p>
            <p>Optional parameters may be omitted when calling the function. Inside the function, their values may be undefined.</p>
            <p>Use a default value when a parameter should have a useful fallback.</p>
        `,
        tip: "Check optional values or provide a default before using them as guaranteed strings or numbers.",
        example: `function welcome(name?: string): string {
    return "Welcome, " + (name ?? "learner") + "!";
}

console.log(welcome("Elijah"));
console.log(welcome());`,
        challengeTitle: "Optional Personalisation",
        challenge: `Write a function with an optional name parameter. If no name is supplied, use the word <code>learner</code>.`
    },

    {
        group: "FUNCTIONS",
        title: "Default Parameters",
        subtitle: "Provide fallback values for function arguments.",
        explanation: `
            <p>A default parameter supplies a value when the caller omits the argument or passes undefined.</p>
            <p>For example, a greeting function might default to the name <code>"Learner"</code>.</p>
            <p>Default values can reduce repeated conditional logic inside functions.</p>
        `,
        tip: "Choose defaults that make sense for the task rather than hiding missing information that should be required.",
        example: `function greet(
    name: string = "Learner",
    course: string = "TypeScript"
): string {
    return \`Hello \${name}. Welcome to \${course}!\`;
}

console.log(greet());
console.log(greet("Elijah"));
console.log(greet("Elijah", "JavaScript"));`,
        challengeTitle: "Design a Default Greeting",
        challenge: `Write a function with a default course name and an optional custom learner name through a default parameter. Test both cases.`
    },

    {
        group: "FUNCTIONS",
        title: "Arrow Functions",
        subtitle: "Write functions using concise syntax.",
        explanation: `
            <p>Arrow functions use the <code>=&gt;</code> syntax.</p>
            <p>They are common in callbacks, array methods, and short function expressions.</p>
            <p>Arrow functions capture <code>this</code> from their surrounding context rather than defining their own <code>this</code> value like ordinary functions do.</p>
        `,
        tip: "Use concise arrow functions for simple transformations and callbacks.",
        example: `const square = (value: number): number => value * value;

const double = (value: number): number => value * 2;

console.log(square(6));
console.log(double(9));`,
        challengeTitle: "Build an Arrow Function",
        challenge: `Create an arrow function that converts a number of minutes into seconds. Test it with two values.`
    },

    {
        group: "FUNCTIONS",
        title: "Function Types",
        subtitle: "Describe the shape of a function.",
        explanation: `
            <p>TypeScript can describe a function's parameter types and return type using a function type.</p>
            <p>For example, <code>(a: number, b: number) =&gt; number</code> describes a function that accepts two numbers and returns a number.</p>
            <p>This allows variables and parameters to specify what kind of functions they accept.</p>
        `,
        tip: "Function types are useful when passing behaviour into other functions.",
        example: `type Calculator = (a: number, b: number) => number;

const add: Calculator = (a, b) => a + b;
const multiply: Calculator = (a, b) => a * b;

console.log(add(5, 4));
console.log(multiply(5, 4));`,
        challengeTitle: "Define a Calculator Type",
        challenge: `Create a function type for a function that accepts two numbers and returns a number. Use it for a subtraction function.`
    },

    {
        group: "FUNCTIONS",
        title: "Rest Parameters",
        subtitle: "Accept a flexible number of arguments.",
        explanation: `
            <p>A rest parameter uses three dots before its name, such as <code>...values: number[]</code>.</p>
            <p>It collects the remaining arguments into an array.</p>
            <p>Rest parameters are useful for calculations and functions that accept a variable number of items.</p>
        `,
        tip: "Give rest parameters an appropriate array type so each item is checked.",
        example: `function sum(...values: number[]): number {
    return values.reduce((total, value) => total + value, 0);
}

console.log(sum(2, 4, 6));
console.log(sum(10, 20, 30, 40));`,
        challengeTitle: "Sum Multiple Values",
        challenge: `Create a function that accepts any number of numeric arguments and returns their average. Handle the case where no numbers are supplied.`
    },


    /* ------------------------------------------------------
       SECTION 4 — OBJECTS AND INTERFACES
    ------------------------------------------------------ */

    {
        group: "OBJECTS & INTERFACES",
        title: "Object Types",
        subtitle: "Describe the structure of an object.",
        explanation: `
            <p>Objects store related information using properties.</p>
            <p>TypeScript can describe an object's structure by listing its property names and types.</p>
            <p>This helps ensure that required properties exist and contain compatible values in checked code.</p>
        `,
        tip: "Choose property names that describe the information each property stores.",
        example: `const learner: {
    name: string;
    age: number;
    enrolled: boolean;
} = {
    name: "Elijah",
    age: 17,
    enrolled: true
};

console.log(learner.name);
console.log(learner.age);
console.log(learner.enrolled);`,
        challengeTitle: "Create a Learner Object",
        challenge: `Create a typed object with a learner's name, course, and lesson count. Print its properties.`
    },

    {
        group: "OBJECTS & INTERFACES",
        title: "Type Aliases",
        subtitle: "Give reusable names to types.",
        explanation: `
            <p>A type alias uses the <code>type</code> keyword to give a name to a type.</p>
            <p>Type aliases can represent objects, unions, tuples, and many other type expressions.</p>
            <p>Reusing named types makes code easier to understand and maintain.</p>
        `,
        tip: "Use meaningful type names that describe the concept represented by the type.",
        example: `type Learner = {
    name: string;
    course: string;
    lessonsCompleted: number;
};

const student: Learner = {
    name: "Elijah",
    course: "TypeScript",
    lessonsCompleted: 15
};

console.log(student);`,
        challengeTitle: "Define a Course Type",
        challenge: `Create a type alias called <code>Course</code> with a title, lesson count, and difficulty. Create an object using that type.`
    },

    {
        group: "OBJECTS & INTERFACES",
        title: "Interfaces",
        subtitle: "Define contracts for object structures.",
        explanation: `
            <p>An interface describes the shape of an object.</p>
            <p>Interfaces commonly define the properties that an object or class should provide.</p>
            <p>Type aliases and interfaces overlap in many situations. Interfaces can also be extended and reopened through declaration merging in appropriate contexts.</p>
        `,
        tip: "Interfaces are especially useful for describing objects passed between different parts of an application.",
        example: `interface Course {
    title: string;
    lessons: number;
}

const course: Course = {
    title: "TypeScript Masterclass",
    lessons: 45
};

console.log(course.title);
console.log(course.lessons);`,
        challengeTitle: "Create an Interface",
        challenge: `Create a <code>Learner</code> interface with a name and numeric score. Create an object that follows the interface.`
    },

    {
        group: "OBJECTS & INTERFACES",
        title: "Optional Object Properties",
        subtitle: "Allow certain object properties to be omitted.",
        explanation: `
            <p>An optional property uses a question mark, such as <code>email?: string</code>.</p>
            <p>An object using that type may omit the property.</p>
            <p>Code should check optional properties before relying on their presence.</p>
        `,
        tip: "Optional properties are useful when information is not always available.",
        example: `interface Profile {
    name: string;
    email?: string;
}

const first: Profile = {
    name: "Elijah"
};

const second: Profile = {
    name: "Learner",
    email: "learner@example.com"
};

console.log(first.email ?? "No email supplied");
console.log(second.email ?? "No email supplied");`,
        challengeTitle: "Build a Flexible Profile",
        challenge: `Create a profile interface with a required name and an optional phone number. Print a fallback message if the phone number is missing.`
    },

    {
        group: "OBJECTS & INTERFACES",
        title: "Readonly Properties",
        subtitle: "Prevent reassignment through a particular type.",
        explanation: `
            <p>The <code>readonly</code> modifier prevents a property from being reassigned through a reference whose type declares it readonly.</p>
            <p>It is a compile-time restriction, not a security boundary or a guarantee that an object can never change through another reference.</p>
            <p>Readonly properties are useful for values that should remain stable after initialisation.</p>
        `,
        tip: "Readonly improves clarity, but it does not automatically freeze an object at runtime.",
        example: `interface Course {
    readonly id: number;
    title: string;
}

const course: Course = {
    id: 101,
    title: "TypeScript"
};

course.title = "Advanced TypeScript";

console.log(course.id);
console.log(course.title);`,
        challengeTitle: "Protect an Identifier",
        challenge: `Create an interface with a readonly ID and a changeable title. Update the title and print both properties.`
    },

    {
        group: "OBJECTS & INTERFACES",
        title: "Extending Interfaces",
        subtitle: "Build new object contracts from existing ones.",
        explanation: `
            <p>An interface can extend another interface using <code>extends</code>.</p>
            <p>The new interface inherits the original interface's required properties and may add more properties.</p>
            <p>This is useful when several objects share a common structure.</p>
        `,
        tip: "Use interface extension when the new structure is a more specific version of an existing one.",
        example: `interface Person {
    name: string;
}

interface Developer extends Person {
    language: string;
}

const developer: Developer = {
    name: "Elijah",
    language: "TypeScript"
};

console.log(developer.name);
console.log(developer.language);`,
        challengeTitle: "Extend an Interface",
        challenge: `Create a base <code>Person</code> interface and extend it with a <code>Student</code> interface containing a course property.`
    },

    {
        group: "OBJECTS & INTERFACES",
        title: "Intersection Types",
        subtitle: "Combine multiple type requirements.",
        explanation: `
            <p>An intersection type uses the <code>&amp;</code> operator to combine types.</p>
            <p>A value of an intersection type must satisfy the combined requirements.</p>
            <p>Intersections are useful when composing object types from smaller pieces.</p>
        `,
        tip: "Be careful when combining properties with incompatible types.",
        example: `type HasName = {
    name: string;
};

type HasScore = {
    score: number;
};

type Learner = HasName & HasScore;

const learner: Learner = {
    name: "Elijah",
    score: 95
};

console.log(learner);`,
        challengeTitle: "Combine Two Types",
        challenge: `Create one type for contact information and another for course information. Combine them into a single learner type.`
    },

    {
        group: "OBJECTS & INTERFACES",
        title: "Enums",
        subtitle: "Represent a defined set of named constants.",
        explanation: `
            <p>Enums define a named set of constant values.</p>
            <p>Numeric enums can generate reverse mappings, while string enums map member names to string values.</p>
            <p>String unions are another common way to represent a small set of permitted values.</p>
        `,
        tip: "Choose enums or literal unions according to the needs and conventions of your project.",
        example: `enum CourseStatus {
    NotStarted = "Not started",
    InProgress = "In progress",
    Completed = "Completed"
}

const status: CourseStatus = CourseStatus.InProgress;

console.log(status);`,
        challengeTitle: "Track Course Status",
        challenge: `Create an enum with three course statuses and print one of its values.`
    },


    /* ------------------------------------------------------
       SECTION 5 — CLASSES
    ------------------------------------------------------ */

    {
        group: "CLASSES",
        title: "Introduction to Classes",
        subtitle: "Model objects with reusable blueprints.",
        explanation: `
            <p>A class describes how objects can be created and what behaviour they provide.</p>
            <p>Classes can contain properties, constructors, and methods.</p>
            <p>TypeScript adds type checking and visibility modifiers to JavaScript's class syntax.</p>
        `,
        tip: "Use classes when an object needs to combine related state and behaviour.",
        example: `class Course {
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    describe(): string {
        return "Course: " + this.title;
    }
}

const course = new Course("TypeScript");
console.log(course.describe());`,
        challengeTitle: "Build Your First Class",
        challenge: `Create a <code>Learner</code> class with a name property and a method that returns a welcome message.`
    },

    {
        group: "CLASSES",
        title: "Constructors and Properties",
        subtitle: "Initialise objects when they are created.",
        explanation: `
            <p>A constructor runs when a new class instance is created.</p>
            <p>It can accept parameters and use them to initialise properties.</p>
            <p>TypeScript also supports parameter properties, which combine a constructor parameter and a property declaration.</p>
        `,
        tip: "Initialise required properties in the constructor so new objects begin in a useful state.",
        example: `class Learner {
    constructor(
        public name: string,
        public score: number
    ) {}

    describe(): string {
        return \`\${this.name} scored \${this.score}\`;
    }
}

const learner = new Learner("Elijah", 92);
console.log(learner.describe());`,
        challengeTitle: "Create a Learner Record",
        challenge: `Build a class with a learner name and course title. Create an instance and print a sentence containing both values.`
    },

    {
        group: "CLASSES",
        title: "Access Modifiers",
        subtitle: "Control access to class members.",
        explanation: `
            <p>TypeScript provides <code>public</code>, <code>protected</code>, and <code>private</code> modifiers.</p>
            <p>Public members can be accessed normally. Protected members are accessible within the class and its subclasses. Private members restrict access within the declaring class under TypeScript's modifier rules.</p>
            <p>TypeScript's private modifier is a compile-time restriction; JavaScript's <code>#private</code> fields provide runtime-enforced private fields.</p>
        `,
        tip: "Keep implementation details private when other code does not need to access them.",
        example: `class Account {
    public owner: string;
    private balance: number;

    constructor(owner: string, balance: number) {
        this.owner = owner;
        this.balance = balance;
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new Account("Elijah", 5000);

console.log(account.owner);
console.log(account.getBalance());`,
        challengeTitle: "Encapsulate Data",
        challenge: `Create a class with a public name and private score. Add a method that returns the score without exposing the property directly.`
    },

    {
        group: "CLASSES",
        title: "Inheritance",
        subtitle: "Extend a class to reuse and specialise behaviour.",
        explanation: `
            <p>Inheritance allows a class to extend another class.</p>
            <p>The child class can inherit members and introduce additional properties or methods.</p>
            <p>When a subclass defines its own constructor, it must call <code>super()</code> before using <code>this</code>.</p>
        `,
        tip: "Prefer inheritance when there is a genuine specialised relationship between the classes.",
        example: `class Animal {
    constructor(public name: string) {}

    speak(): string {
        return this.name + " makes a sound.";
    }
}

class Dog extends Animal {
    speak(): string {
        return this.name + " barks.";
    }
}

const dog = new Dog("Buddy");
console.log(dog.speak());`,
        challengeTitle: "Extend a Base Class",
        challenge: `Create a base <code>Person</code> class and a <code>Student</code> class that extends it with a course property.`
    },

    {
        group: "CLASSES",
        title: "Implementing Interfaces",
        subtitle: "Require a class to follow a defined contract.",
        explanation: `
            <p>A class can use <code>implements</code> to declare that it satisfies an interface.</p>
            <p>TypeScript checks that the class provides the required members.</p>
            <p>This helps different classes offer a consistent set of methods or properties.</p>
        `,
        tip: "Interfaces let you write code that depends on required behaviour rather than one specific class.",
        example: `interface Printable {
    print(): string;
}

class Report implements Printable {
    constructor(public title: string) {}

    print(): string {
        return "Report: " + this.title;
    }
}

const report = new Report("Learning Progress");
console.log(report.print());`,
        challengeTitle: "Implement a Contract",
        challenge: `Create an interface with a <code>describe()</code> method. Build a class that implements it.`
    },


    /* ------------------------------------------------------
       SECTION 6 — ADVANCED TYPES
    ------------------------------------------------------ */

    {
        group: "ADVANCED TYPES",
        title: "Generics",
        subtitle: "Create reusable components that preserve type information.",
        explanation: `
            <p>Generics allow types to be supplied as parameters.</p>
            <p>A generic function can work with different value types while preserving information about the type it receives.</p>
            <p>The generic parameter is written inside angle brackets, such as <code>&lt;T&gt;</code>.</p>
        `,
        tip: "Generics are useful when you want reusable code without losing type information.",
        example: `function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(42));
console.log(identity<boolean>(true));`,
        challengeTitle: "Build a Generic Function",
        challenge: `Create a generic function called <code>firstItem</code> that returns the first element of an array, or undefined if the array is empty.`
    },

    {
        group: "ADVANCED TYPES",
        title: "Generic Interfaces",
        subtitle: "Make object contracts work with different data types.",
        explanation: `
            <p>Interfaces can declare generic parameters.</p>
            <p>A generic interface can describe a container, response, or result that carries different kinds of values.</p>
            <p>For example, a container can store a string in one instance and a number in another.</p>
        `,
        tip: "Use generics to preserve the relationship between related input and output types.",
        example: `interface Box<T> {
    value: T;
}

const textBox: Box<string> = {
    value: "TypeScript"
};

const numberBox: Box<number> = {
    value: 45
};

console.log(textBox.value);
console.log(numberBox.value);`,
        challengeTitle: "Create a Generic Container",
        challenge: `Define a generic interface named <code>Container</code> with a value property. Create one string container and one numeric container.`
    },

    {
        group: "ADVANCED TYPES",
        title: "Type Narrowing",
        subtitle: "Refine a broad type using checks.",
        explanation: `
            <p>Type narrowing uses conditions to establish which types are possible at a particular point in a program.</p>
            <p>TypeScript understands many checks, including <code>typeof</code>, equality comparisons, and the <code>in</code> operator.</p>
            <p>Narrowing is especially useful when working with union types.</p>
        `,
        tip: "Check a value before using methods or properties that are available only on certain types.",
        example: `function describe(value: string | number): string {
    if (typeof value === "string") {
        return "Text length: " + value.length;
    }

    return "Number squared: " + value * value;
}

console.log(describe("Hello"));
console.log(describe(7));`,
        challengeTitle: "Narrow a Union",
        challenge: `Write a function that accepts a string or number. Return the string's length for text and the number doubled for numeric input.`
    },

    {
        group: "ADVANCED TYPES",
        title: "Type Guards",
        subtitle: "Create reusable checks for identifying types.",
        explanation: `
            <p>A type guard is a condition or function that helps establish the type of a value.</p>
            <p>A user-defined type guard can return a type predicate such as <code>value is string</code>.</p>
            <p>Type guards are useful when working with unknown data or unions of object types.</p>
        `,
        tip: "A type predicate should accurately reflect what the function actually checks.",
        example: `function isString(value: unknown): value is string {
    return typeof value === "string";
}

function showValue(value: unknown): string {
    if (isString(value)) {
        return value.toUpperCase();
    }

    return "Value is not a string";
}

console.log(showValue("hello"));
console.log(showValue(42));`,
        challengeTitle: "Write a Type Guard",
        challenge: `Create a function that checks whether an unknown value is a number. Use the function to safely format numeric values.`
    },

    {
        group: "ADVANCED TYPES",
        title: "The Never Type",
        subtitle: "Represent values that cannot occur.",
        explanation: `
            <p>The <code>never</code> type represents values that never occur.</p>
            <p>It commonly appears in functions that always throw an exception or never finish normally.</p>
            <p>It can also help TypeScript detect missing cases in exhaustive checks.</p>
        `,
        tip: "Use never to express impossible cases, not simply as another name for void.",
        example: `function fail(message: string): never {
    throw new Error(message);
}

function assertNever(value: never): never {
    throw new Error("Unexpected value: " + value);
}

console.log("The error demonstration is ready.");
console.log("The fail function throws when called.");`,
        challengeTitle: "Understand Never",
        challenge: `Write a function that always throws an error and annotate its return type as <code>never</code>. Do not call it unless you intend to trigger the error.`
    },

    {
        group: "ADVANCED TYPES",
        title: "Utility Types",
        subtitle: "Transform existing types with built-in helpers.",
        explanation: `
            <p>TypeScript provides utility types that transform other types.</p>
            <ul>
                <li><code>Partial&lt;T&gt;</code> makes properties optional.</li>
                <li><code>Required&lt;T&gt;</code> makes properties required.</li>
                <li><code>Pick&lt;T, K&gt;</code> selects certain properties.</li>
                <li><code>Omit&lt;T, K&gt;</code> removes selected properties.</li>
                <li><code>Readonly&lt;T&gt;</code> makes properties readonly.</li>
            </ul>
            <p>These utilities are particularly useful for models and update operations.</p>
        `,
        tip: "Utility types help you reuse a source type instead of repeating nearly identical declarations.",
        example: `interface User {
    name: string;
    email: string;
    age: number;
}

type UserPreview = Pick<User, "name" | "email">;
type UserUpdate = Partial<User>;

const preview: UserPreview = {
    name: "Elijah",
    email: "learner@example.com"
};

const update: UserUpdate = {
    age: 18
};

console.log(preview);
console.log(update);`,
        challengeTitle: "Transform an Existing Type",
        challenge: `Create a user type and use <code>Pick</code> to create a smaller profile containing only the name and email.`
    },

    {
        group: "ADVANCED TYPES",
        title: "Keyof and Indexed Access",
        subtitle: "Work with property names and property types.",
        explanation: `
            <p>The <code>keyof</code> operator creates a type from the keys of another type.</p>
            <p>Indexed access types use bracket notation, such as <code>User["name"]</code>, to obtain the type of a property.</p>
            <p>These features are useful for writing reusable functions that safely access object properties.</p>
        `,
        tip: "Use keyof when a function should accept only valid keys of a particular object type.",
        example: `interface User {
    name: string;
    age: number;
}

type UserKey = keyof User;
type UserName = User["name"];

function getProperty<T, K extends keyof T>(
    object: T,
    key: K
): T[K] {
    return object[key];
}

const user: User = {
    name: "Elijah",
    age: 17
};

console.log(getProperty(user, "name"));
console.log(getProperty(user, "age"));`,
        challengeTitle: "Build a Typed Property Getter",
        challenge: `Create a generic function that returns an object's property using a key restricted to that object's valid keys.`
    },

    {
        group: "ADVANCED TYPES",
        title: "Conditional Types",
        subtitle: "Choose types according to a type relationship.",
        explanation: `
            <p>Conditional types use a structure similar to a conditional expression: <code>T extends U ? X : Y</code>.</p>
            <p>They allow TypeScript to select a type based on whether one type satisfies a condition.</p>
            <p>Conditional types are evaluated by the type system and do not create runtime branching by themselves.</p>
        `,
        tip: "Conditional types are powerful, but simpler aliases are often easier to maintain.",
        example: `type MessageFor<T> =
    T extends string
        ? "This is text"
        : "This is not text";

type TextMessage = MessageFor<string>;
type NumberMessage = MessageFor<number>;

const textMessage: TextMessage = "This is text";
const numberMessage: NumberMessage = "This is not text";

console.log(textMessage);
console.log(numberMessage);`,
        challengeTitle: "Create a Conditional Type",
        challenge: `Create a conditional type that resolves to <code>"Number"</code> for numeric types and <code>"Other"</code> for other types.`
    },

    {
        group: "ADVANCED TYPES",
        title: "Modules and Exports",
        subtitle: "Organise code into separate files.",
        explanation: `
            <p>Modules allow code to be split into separate files.</p>
            <p>The <code>export</code> keyword makes selected declarations available to other modules, while <code>import</code> brings exported declarations into another module.</p>
            <p>Module behaviour and emitted code depend on your TypeScript and JavaScript configuration.</p>
            <p>This single-file browser playground demonstrates concepts, but it does not create separate project files automatically.</p>
        `,
        tip: "Use modules to keep related functionality together and avoid one enormous source file.",
        example: `// Imagine this declaration is exported
// from a file named math.ts.

export function add(
    first: number,
    second: number
): number {
    return first + second;
}

// In another project file you could import add
// from "./math" and call it.

console.log("Module example: " + add(8, 12));`,
        challengeTitle: "Plan a Two-File Project",
        challenge: `Imagine a project with <code>math.ts</code> and <code>main.ts</code>. Describe which function you would export from the first file and import into the second.`
    },


    /* ------------------------------------------------------
       SECTION 7 — PROJECTS AND MASTERY
    ------------------------------------------------------ */

    {
        group: "PROJECTS & MASTERY",
        title: "Promises and Async Functions",
        subtitle: "Work with asynchronous operations.",
        explanation: `
            <p>Promises represent the eventual result of an asynchronous operation.</p>
            <p>An <code>async</code> function returns a promise. Inside it, <code>await</code> can pause that function until a promise settles.</p>
            <p>TypeScript can describe the resolved value of a promise and the result of an asynchronous function.</p>
        `,
        tip: "Use try/catch when you need to handle rejected promises from asynchronous operations.",
        example: `async function getCourseName(): Promise<string> {
    return "TypeScript Masterclass";
}

async function main(): Promise<void> {
    const course: string = await getCourseName();
    console.log(course);
    console.log("Course loaded successfully.");
}

main().catch((error: unknown) => {
    console.error("Something went wrong:", error);
});`,
        challengeTitle: "Create an Async Function",
        challenge: `Write an asynchronous function that returns a course title as a promise. Await the result and print it.`
    },

    {
        group: "PROJECTS & MASTERY",
        title: "Error Handling",
        subtitle: "Handle failures without hiding important information.",
        explanation: `
            <p>Errors can occur during calculations, network requests, and many other operations.</p>
            <p>Use <code>try</code>, <code>catch</code>, and optionally <code>finally</code> to handle exceptions.</p>
            <p>In TypeScript, a caught error is commonly treated as unknown when strict catch-variable checking is enabled. Check its type before relying on specific properties.</p>
        `,
        tip: "Handle expected failures clearly and avoid swallowing errors without explanation.",
        example: `function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }

    return a / b;
}

try {
    console.log(divide(20, 4));
    console.log(divide(10, 0));
} catch (error: unknown) {
    if (error instanceof Error) {
        console.log("Error: " + error.message);
    } else {
        console.log("An unexpected error occurred.");
    }
}`,
        challengeTitle: "Handle a Division Error",
        challenge: `Write a division function that throws an error when the divisor is zero. Use <code>try/catch</code> to display a helpful message.`
    },

    {
        group: "PROJECTS & MASTERY",
        title: "Type Assertions",
        subtitle: "Tell TypeScript how you understand a value's type.",
        explanation: `
            <p>A type assertion tells TypeScript to treat a value as a particular type.</p>
            <p>For example, <code>value as string</code> is an assertion, not a runtime conversion.</p>
            <p>Assertions do not validate data or change the value at runtime. An incorrect assertion can therefore lead to runtime errors.</p>
        `,
        tip: "Use assertions only when you have a good reason to know more than TypeScript can infer.",
        example: `const rawValue: unknown = "ELOMCODE";

if (typeof rawValue === "string") {
    const message = rawValue.toUpperCase();
    console.log(message);
}

// Assertions do not convert values.
// Always verify external data when necessary.`,
        challengeTitle: "Use a Safe Type Check",
        challenge: `Start with a value typed as <code>unknown</code>. Check that it is a string before converting it to uppercase. Explain why an assertion alone would not validate the value.`
    },

    {
        group: "PROJECTS & MASTERY",
        title: "Working with JSON",
        subtitle: "Understand typed data received as JSON.",
        explanation: `
            <p>JSON is a text format commonly used to exchange data.</p>
            <p><code>JSON.parse()</code> returns a value that should not automatically be trusted to match a TypeScript interface.</p>
            <p>External data requires runtime validation when its structure matters. A type assertion by itself does not validate the JSON.</p>
        `,
        tip: "Treat data from files, APIs, and users as untrusted until you have checked its structure.",
        example: `interface Course {
    title: string;
    lessons: number;
}

const jsonText: string =
    '{"title":"TypeScript","lessons":45}';

const parsed: unknown = JSON.parse(jsonText);

if (
    typeof parsed === "object" &&
    parsed !== null &&
    "title" in parsed &&
    "lessons" in parsed &&
    typeof parsed.title === "string" &&
    typeof parsed.lessons === "number"
) {
    console.log(parsed.title);
    console.log(parsed.lessons);
} else {
    console.log("Invalid course data.");
}`,
        challengeTitle: "Validate JSON Data",
        challenge: `Parse a JSON string and verify that it contains a string property named <code>name</code> before printing the name.`
    },

    {
        group: "PROJECTS & MASTERY",
        title: "Build a Typed Calculator",
        subtitle: "Combine functions, types, and error handling.",
        explanation: `
            <p>Small projects help you combine individual concepts into something useful.</p>
            <p>A typed calculator can use a union type for its operation, numeric parameters for its inputs, and a return type for its result.</p>
            <p>Checking the operation and handling division by zero make the program more reliable.</p>
        `,
        tip: "Before coding a project, identify its inputs, outputs, and possible errors.",
        example: `type Operation = "add" | "subtract" | "multiply" | "divide";

function calculate(
    a: number,
    b: number,
    operation: Operation
): number {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            if (b === 0) {
                throw new Error("Division by zero.");
            }
            return a / b;
    }
}

console.log(calculate(12, 4, "add"));
console.log(calculate(12, 4, "subtract"));
console.log(calculate(12, 4, "multiply"));
console.log(calculate(12, 4, "divide"));`,
        challengeTitle: "Extend the Calculator",
        challenge: `Add a new function that calculates the remainder of two numbers. Handle a zero divisor appropriately.`
    },

    {
        group: "PROJECTS & MASTERY",
        title: "Build a Typed Student Record",
        subtitle: "Use interfaces, arrays, and functions together.",
        explanation: `
            <p>Many applications manage records that share a common structure.</p>
            <p>A student record can be described with an interface. An array can hold multiple records, and functions can calculate results from those records.</p>
            <p>This pattern appears in school systems, dashboards, inventory applications, and many other projects.</p>
        `,
        tip: "Define your data model first, then build functions that operate on it.",
        example: `interface Student {
    name: string;
    score: number;
}

const students: Student[] = [
    { name: "Ada", score: 85 },
    { name: "Tunde", score: 72 },
    { name: "Mira", score: 94 }
];

function getAverage(items: Student[]): number {
    if (items.length === 0) {
        return 0;
    }

    const total = items.reduce(
        (sum, student) => sum + student.score,
        0
    );

    return total / items.length;
}

console.log(students);
console.log("Average: " + getAverage(students));`,
        challengeTitle: "Create a Student Report",
        challenge: `Add a function that returns the name of the student with the highest score. Handle an empty array.`
    },

    {
        group: "PROJECTS & MASTERY",
        title: "TypeScript Best Practices",
        subtitle: "Write code that is easier to maintain.",
        explanation: `
            <p>Good TypeScript code is not simply code containing many type annotations. It uses types to communicate intent and prevent mistakes.</p>
            <ul>
                <li>Prefer specific types over any.</li>
                <li>Use unknown for uncertain values that need checking.</li>
                <li>Choose descriptive names.</li>
                <li>Keep functions focused.</li>
                <li>Validate data from external sources.</li>
                <li>Use strict compiler settings when practical.</li>
                <li>Organise larger projects into modules.</li>
            </ul>
        `,
        tip: "The goal is clear, reliable code—not the maximum possible number of type annotations.",
        example: `interface Product {
    name: string;
    price: number;
}

function formatPrice(product: Product): string {
    return \`\${product.name}: \${product.price.toFixed(2)}\`;
}

const product: Product = {
    name: "Keyboard",
    price: 12500
};

console.log(formatPrice(product));`,
        challengeTitle: "Improve a Small Program",
        challenge: `Create a typed product object and a function that formats its details. Use clear names and a specific type.`
    },

    {
        group: "PROJECTS & MASTERY",
        title: "Your TypeScript Final Project",
        subtitle: "Bring your skills together in one application.",
        explanation: `
            <p>Congratulations on reaching the final lesson of the TypeScript Masterclass!</p>
            <p>Your final project is to build a small course-management application.</p>
            <h3>Suggested requirements</h3>
            <ul>
                <li>Define a Course interface.</li>
                <li>Create an array of courses.</li>
                <li>Write a function to add a course.</li>
                <li>Write a function to find a course by title.</li>
                <li>Write a function to calculate the total number of lessons.</li>
                <li>Handle missing courses clearly.</li>
            </ul>
            <p>Use the practice editor to build a small version first, then expand it as your skills grow.</p>
        `,
        tip: "Finishing a course is a milestone. Keep practising by building projects of increasing complexity.",
        example: `interface Course {
    title: string;
    lessons: number;
}

const courses: Course[] = [
    { title: "HTML", lessons: 40 },
    { title: "CSS", lessons: 45 },
    { title: "TypeScript", lessons: 45 }
];

function findCourse(title: string): Course | undefined {
    return courses.find(
        course => course.title.toLowerCase() === title.toLowerCase()
    );
}

function totalLessons(items: Course[]): number {
    return items.reduce(
        (total, course) => total + course.lessons,
        0
    );
}

console.log(findCourse("TypeScript"));
console.log("Total lessons: " + totalLessons(courses));`,
        challengeTitle: "Complete Your Final Project",
        challenge: `Build a typed course manager with an interface, an array, a search function, and a function that calculates the total lessons. Test your functions with multiple values.`
    }

];


/* ==========================================================
   03. DOM HELPERS
========================================================== */

const $ = (selector) => document.querySelector(selector);

const elements = {
    particles: $("#particles"),

    progressLessons: $("#progressLessons"),
    topXP: $("#topXP"),

    progressPercent: $("#progressPercent"),
    overallProgressBar: $("#overallProgressBar"),
    progressFill: $("#progressFill"),
    progressMessage: $("#progressMessage"),

    sidebarLessonCount: $("#sidebarLessonCount"),
    sidebarProgressFill: $("#sidebarProgressFill"),
    sidebarProgressText: $("#sidebarProgressText"),
    lessonList: $("#lessonList"),

    lessonCategory: $("#lessonCategory"),
    lessonNumber: $("#lessonNumber"),
    lessonTitle: $("#lessonTitle"),
    lessonSubtitle: $("#lessonSubtitle"),
    lessonExplanation: $("#lessonExplanation"),
    lessonTip: $("#lessonTip"),

    exampleCode: $("#exampleCode"),
    runExampleButton: $("#runExampleButton"),
    exampleOutputFrame: $("#exampleOutputFrame"),
    exampleOutputStatus: $("#exampleOutputStatus"),

    codeEditor: $("#codeEditor"),
    runButton: $("#runButton"),
    resetButton: $("#resetButton"),
    editorStatus: $("#editorStatus"),
    outputStatus: $("#outputStatus"),
    practiceOutputFrame: $("#practiceOutputFrame"),

    challengeTitle: $("#challengeTitle"),
    challengeText: $("#challengeText"),

    previousButton: $("#previousButton"),
    completeButton: $("#completeButton"),
    completeButtonText: $("#completeButtonText"),
    nextButton: $("#nextButton"),
    lessonCompletionMessage: $("#lessonCompletionMessage"),

    certificateStatus: $("#certificateStatus"),
    certificateMessage: $("#certificateMessage"),
    certificateButton: $("#certificateButton"),
    certificateOpenButton: $("#certificateOpenButton"),

    certificateModal: $("#certificateModal"),
    certificateBackdrop: $("#certificateBackdrop"),
    certificateModalTitle: $("#certificateModalTitle"),
    certificateName: $("#certificateName"),
    certificateDate: $("#certificateDate"),
    certificateXP: $("#certificateXP"),
    certificateClose: $("#certificateClose"),
    certificatePrintButton: $("#certificatePrintButton"),
    certificateCancelButton: $("#certificateCancelButton"),

    liveAnnouncement: $("#liveAnnouncement")
};


/* ==========================================================
   04. APPLICATION STATE
========================================================== */

let currentLessonIndex = 0;
let lastFocusedElement = null;

let progress = {
    completed: [],
    xp: 0,
    currentLesson: 0
};

let certificateData = {
    name: "",
    date: ""
};


/* ==========================================================
   05. SAFE LOCAL STORAGE
========================================================== */

function readStorage(key) {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        console.warn("Browser storage is unavailable.", error);
        return null;
    }
}

function writeStorage(key, value) {
    try {
        localStorage.setItem(key, value);
        return true;
    } catch (error) {
        console.warn("Could not save browser data.", error);
        return false;
    }
}

function loadProgress() {
    const saved = readStorage(COURSE.storageKey);

    if (!saved) {
        return;
    }

    try {
        const parsed = JSON.parse(saved);

        if (
            parsed &&
            Array.isArray(parsed.completed) &&
            Number.isInteger(parsed.currentLesson)
        ) {
            progress.completed = [
                ...new Set(
                    parsed.completed.filter(
                        (id) =>
                            Number.isInteger(id) &&
                            id >= 0 &&
                            id < LESSONS.length
                    )
                )
            ];

            progress.currentLesson = Math.min(
                Math.max(parsed.currentLesson, 0),
                LESSONS.length - 1
            );

            progress.xp =
                progress.completed.length * COURSE.xpPerLesson;
        }
    } catch (error) {
        console.warn("Saved course progress could not be read.", error);
    }
}

function saveProgress() {
    progress.xp =
        progress.completed.length * COURSE.xpPerLesson;

    writeStorage(
        COURSE.storageKey,
        JSON.stringify(progress)
    );
}

function loadCertificate() {
    const saved = readStorage(COURSE.certificateKey);

    if (!saved) {
        return;
    }

    try {
        const parsed = JSON.parse(saved);

        if (parsed && typeof parsed === "object") {
            certificateData.name =
                typeof parsed.name === "string" ? parsed.name : "";

            certificateData.date =
                typeof parsed.date === "string" ? parsed.date : "";
        }
    } catch (error) {
        console.warn("Certificate details could not be loaded.", error);
    }
}

function saveCertificate() {
    writeStorage(
        COURSE.certificateKey,
        JSON.stringify(certificateData)
    );
}


/* ==========================================================
   06. COMPILER AVAILABILITY
========================================================== */

function compilerAvailable() {
    return (
        typeof window.ts !== "undefined" &&
        typeof window.ts.transpileModule === "function"
    );
}


/* ==========================================================
   07. SAFE OUTPUT FRAME
========================================================== */

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function setOutputStatus(element, message, state = "") {
    if (!element) {
        return;
    }

    element.textContent = message;
    element.className = "output-status";

    if (state) {
        element.classList.add(state);
    }
}

function showFrameMessage(frame, message, isError = false) {
    if (!frame) {
        return;
    }

    const safeMessage = escapeHtml(message);

    const errorStyle = isError
        ? "color:#b42342;background:#fff4f6;"
        : "color:#52637d;background:#ffffff;";

    frame.srcdoc = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
*{box-sizing:border-box}
body{
    margin:0;
    padding:16px;
    font-family:Arial,sans-serif;
    font-size:13px;
    line-height:1.7;
    ${errorStyle}
}
pre{
    margin:0;
    white-space:pre-wrap;
    overflow-wrap:anywhere;
    font-family:Consolas,monospace;
}
</style>
</head>
<body><pre>${safeMessage}</pre></body>
</html>`;
}


/* ==========================================================
   08. TYPE SCRIPT TRANSFORMER
========================================================== */

function compileTypeScript(source) {
    if (!compilerAvailable()) {
        throw new Error(
            "The TypeScript compiler could not be loaded. " +
            "Check your internet connection and reload the course."
        );
    }

    const result = window.ts.transpileModule(source, {
        compilerOptions: {
            target: window.ts.ScriptTarget.ES2020,
            module: window.ts.ModuleKind.None,
            strict: true,
            removeComments: false,
            sourceMap: false
        },
        reportDiagnostics: true
    });

    const errors = (result.diagnostics || []).filter(
        (diagnostic) =>
            diagnostic.category === window.ts.DiagnosticCategory.Error
    );

    if (errors.length > 0) {
        const message = errors
            .map((diagnostic) => {
                const text = window.ts.flattenDiagnosticMessageText(
                    diagnostic.messageText,
                    "\n"
                );

                if (diagnostic.file && diagnostic.start !== undefined) {
                    const position =
                        diagnostic.file.getLineAndCharacterOfPosition(
                            diagnostic.start
                        );

                    return `Line ${position.line + 1}: ${text}`;
                }

                return text;
            })
            .join("\n");

        throw new Error(message);
    }

    return result.outputText;
}


/* ==========================================================
   09. EXECUTE JAVASCRIPT IN THE OUTPUT FRAME
========================================================== */

function runCompiledCode(source, frame, statusElement, editorMode = false) {
    if (!source.trim()) {
        showFrameMessage(
            frame,
            "Your editor is empty. Write some TypeScript code and run it."
        );

        setOutputStatus(statusElement, "EMPTY", "");
        return;
    }

    setOutputStatus(statusElement, "COMPILING...", "running");

    try {
        const javascript = compileTypeScript(source);

        const codePayload = JSON.stringify(javascript);

        const runnerScript = `
(function () {
    "use strict";

    const output = document.getElementById("output");
    const status = document.getElementById("runtimeStatus");

    let hasError = false;

    function display(value) {
        let result;

        if (typeof value === "string") {
            result = value;
        } else {
            try {
                result = JSON.stringify(value, null, 2);
            } catch (error) {
                result = String(value);
            }
        }

        if (result === undefined) {
            result = String(value);
        }

        const line = document.createElement("div");
        line.textContent = result;
        output.appendChild(line);
    }

    const originalConsole = {
        log: console.log,
        info: console.info,
        warn: console.warn,
        error: console.error
    };

    console.log = (...args) => args.forEach(display);
    console.info = (...args) => args.forEach(display);
    console.warn = (...args) => {
        hasError = true;
        args.forEach(display);
    };

    console.error = (...args) => {
        hasError = true;
        args.forEach(display);
    };

    window.addEventListener("error", function (event) {
        hasError = true;
        display("Runtime error: " + event.message);
    });

    window.addEventListener("unhandledrejection", function (event) {
        hasError = true;

        const reason = event.reason;

        display(
            "Unhandled promise rejection: " +
            (reason && reason.message ? reason.message : String(reason))
        );
    });

    window.addEventListener("load", function () {
        status.textContent = hasError ? "FINISHED WITH ERRORS" : "EXECUTED";
        status.dataset.error = hasError ? "true" : "false";

        console.log = originalConsole.log;
        console.info = originalConsole.info;
        console.warn = originalConsole.warn;
        console.error = originalConsole.error;
    });

    try {
        const compiled = ${codePayload};

        const execute = new Function(compiled);

        execute();
    } catch (error) {
        hasError = true;

        display(
            "Runtime error: " +
            (error && error.message ? error.message : String(error))
        );

        status.textContent = "RUNTIME ERROR";
        status.dataset.error = "true";
    }
})();
`;

        const documentContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
*{box-sizing:border-box}

body{
    margin:0;
    padding:14px;

    color:#263751;
    background:#ffffff;

    font-family:Arial,sans-serif;
    font-size:12px;
    line-height:1.75;

    overflow-wrap:anywhere;
}

.output-label{
    margin-bottom:9px;

    color:#8090a7;

    font-size:9px;
    font-weight:800;
    letter-spacing:1.2px;
}

#output{
    display:flex;
    flex-direction:column;
    gap:4px;
}

#output > div{
    padding:4px 8px;

    border-left:2px solid #d8e8ff;

    background:#f7faff;

    border-radius:3px;

    white-space:pre-wrap;
    overflow-wrap:anywhere;

    font-family:Consolas,monospace;
}

#runtimeStatus{
    display:none;
}

</style>
</head>

<body>

<div class="output-label">CONSOLE OUTPUT</div>
<div id="output"></div>
<div id="runtimeStatus"></div>

<script>
${runnerScript}
<\/script>

</body>
</html>`;

        frame.srcdoc = documentContent;

        setOutputStatus(statusElement, "RUNNING...", "running");

        const startedAt = Date.now();

        const timeout = window.setTimeout(() => {
            try {
                const frameWindow = frame.contentWindow;

                if (
                    frameWindow &&
                    frameWindow.document.readyState !== "complete" &&
                    Date.now() - startedAt >= 5000
                ) {
                    frame.srcdoc = "";

                    showFrameMessage(
                        frame,
                        "Execution took too long or did not finish. " +
                        "Check for an infinite loop or an operation that never completes.",
                        true
                    );

                    setOutputStatus(
                        statusElement,
                        "TIMEOUT",
                        "error"
                    );
                }
            } catch (error) {
                console.warn("Execution monitor could not inspect the frame.");
            }
        }, 5000);

        frame.addEventListener(
            "load",
            function onFrameLoad() {
                window.clearTimeout(timeout);

                try {
                    const frameDocument = frame.contentDocument;

                    if (!frameDocument) {
                        return;
                    }

                    const runtimeStatus =
                        frameDocument.getElementById("runtimeStatus");

                    if (runtimeStatus) {
                        const hasError =
                            runtimeStatus.dataset.error === "true";

                        setOutputStatus(
                            statusElement,
                            hasError ? "CHECK OUTPUT" : "SUCCESS",
                            hasError ? "error" : "success"
                        );
                    }
                } catch (error) {
                    console.warn("Output status could not be updated.");
                }
            },
            { once: true }
        );

        if (editorMode && elements.editorStatus) {
            elements.editorStatus.textContent = "CODE EXECUTED";
        }

    } catch (error) {
        showFrameMessage(
            frame,
            error instanceof Error
                ? error.message
                : String(error),
            true
        );

        setOutputStatus(statusElement, "COMPILATION ERROR", "error");

        if (editorMode && elements.editorStatus) {
            elements.editorStatus.textContent = "CHECK YOUR CODE";
        }
    }
}


/* ==========================================================
   10. LESSON SIDEBAR GENERATOR
========================================================== */

function renderLessonList() {
    if (!elements.lessonList) {
        return;
    }

    elements.lessonList.innerHTML = "";

    let previousGroup = "";

    LESSONS.forEach((lesson, index) => {
        if (lesson.group !== previousGroup) {
            const heading = document.createElement("div");

            heading.className = "lesson-group-title";
            heading.textContent = lesson.group;

            elements.lessonList.appendChild(heading);

            previousGroup = lesson.group;
        }

        const button = document.createElement("button");

        button.type = "button";
        button.className = "lesson-item";

        button.dataset.lessonIndex = String(index);

        const number = document.createElement("span");
        number.className = "lesson-item-number";
        number.textContent = String(index + 1).padStart(2, "0");

        const copy = document.createElement("span");
        copy.className = "lesson-item-copy";

        const title = document.createElement("strong");
        title.textContent = lesson.title;

        const subtitle = document.createElement("span");
        subtitle.textContent = lesson.group;

        copy.append(title, subtitle);

        const check = document.createElement("span");
        check.className = "lesson-item-check";
        check.setAttribute("aria-hidden", "true");

        button.append(number, copy, check);

        button.addEventListener("click", () => {
            selectLesson(index);
        });

        elements.lessonList.appendChild(button);
    });

    updateLessonListState();
}

function updateLessonListState() {
    if (!elements.lessonList) {
        return;
    }

    const buttons = elements.lessonList.querySelectorAll(".lesson-item");

    buttons.forEach((button, index) => {
        const completed = progress.completed.includes(index);
        const active = index === currentLessonIndex;

        button.classList.toggle("active", active);
        button.classList.toggle("completed", completed);

        button.setAttribute("aria-current", active ? "step" : "false");

        const check = button.querySelector(".lesson-item-check");

        if (check) {
            check.textContent = completed ? "✓" : "";
        }

        if (active) {
            button.setAttribute("aria-label", `Current lesson: ${LESSONS[index].title}`);
        } else {
            button.setAttribute("aria-label", `Open lesson ${index + 1}: ${LESSONS[index].title}`);
        }
    });
}


/* ==========================================================
   11. RENDER CURRENT LESSON
========================================================== */

function selectLesson(index) {
    if (!Number.isInteger(index)) {
        return;
    }

    if (index < 0 || index >= LESSONS.length) {
        return;
    }

    currentLessonIndex = index;
    progress.currentLesson = index;

    saveProgress();

    renderCurrentLesson();

    updateLessonListState();
    updateProgressUI();

    if (elements.liveAnnouncement) {
        elements.liveAnnouncement.textContent =
            `Lesson ${index + 1}: ${LESSONS[index].title}`;
    }
}

function renderCurrentLesson() {
    const lesson = LESSONS[currentLessonIndex];

    if (!lesson) {
        return;
    }

    elements.lessonCategory.textContent = lesson.group;

    elements.lessonNumber.textContent =
        `LESSON ${String(currentLessonIndex + 1).padStart(2, "0")} OF ${LESSONS.length}`;

    elements.lessonTitle.textContent = lesson.title;
    elements.lessonSubtitle.textContent = lesson.subtitle;

    elements.lessonExplanation.innerHTML = lesson.explanation;

    elements.lessonTip.innerHTML = `
        <span class="tip-icon">✦</span>
        <div>
            <strong>DEVELOPER TIP</strong>
            <p>${escapeHtml(lesson.tip)}</p>
        </div>
    `;

    elements.exampleCode.textContent = lesson.example;

    elements.challengeTitle.textContent = lesson.challengeTitle;
    elements.challengeText.innerHTML = lesson.challenge;

    elements.codeEditor.value = "";

    elements.editorStatus.textContent = "READY TO CODE";

    setOutputStatus(elements.exampleOutputStatus, "READY");
    setOutputStatus(elements.outputStatus, "WAITING");

    showFrameMessage(
        elements.exampleOutputFrame,
        "Click Run Example to execute the current lesson's code."
    );

    showFrameMessage(
        elements.practiceOutputFrame,
        "Write your TypeScript code and click Run My Code."
    );

    elements.lessonCompletionMessage.textContent = "";
    elements.lessonCompletionMessage.className = "completion-message";

    updateNavigationButtons();
    updateCompleteButton();

    window.scrollTo({
        top: document.querySelector(".lesson-workspace").offsetTop - 100,
        behavior: "smooth"
    });
}


/* ==========================================================
   12. PROGRESS DISPLAY
========================================================== */

function updateProgressUI() {
    const completedCount = progress.completed.length;

    const percentage = Math.round(
        (completedCount / LESSONS.length) * 100
    );

    progress.xp = completedCount * COURSE.xpPerLesson;

    elements.progressLessons.textContent =
        `${completedCount}/${LESSONS.length}`;

    elements.topXP.textContent = `${progress.xp} XP`;

    elements.progressPercent.textContent = `${percentage}%`;

    elements.progressFill.style.width = `${percentage}%`;

    elements.overallProgressBar.setAttribute(
        "aria-valuenow",
        String(percentage)
    );

    elements.overallProgressBar.setAttribute("role", "progressbar");
    elements.overallProgressBar.setAttribute("aria-valuemin", "0");
    elements.overallProgressBar.setAttribute("aria-valuemax", "100");

    elements.sidebarProgressFill.style.width = `${percentage}%`;

    elements.sidebarProgressText.textContent =
        `${completedCount} of ${LESSONS.length} completed`;

    if (completedCount === 0) {
        elements.progressMessage.textContent =
            "Your TypeScript journey starts here. Let's build something great!";
    } else if (completedCount < LESSONS.length) {
        elements.progressMessage.textContent =
            `Great progress! You've completed ${completedCount} lessons and earned ${progress.xp} XP. Keep going!`;
    } else {
        elements.progressMessage.textContent =
            `Amazing work! You've completed all ${LESSONS.length} lessons and earned ${progress.xp} XP.`;
    }

    updateCertificateUI();
    updateLessonListState();
}

function updateNavigationButtons() {
    elements.previousButton.disabled = currentLessonIndex === 0;

    elements.nextButton.disabled =
        currentLessonIndex === LESSONS.length - 1;
}

function updateCompleteButton() {
    const completed = progress.completed.includes(currentLessonIndex);

    elements.completeButton.classList.toggle("completed", completed);

    elements.completeButtonText.textContent = completed
        ? "✓ Lesson Completed"
        : "✓ Complete Lesson";
}


/* ==========================================================
   13. COMPLETE A LESSON
========================================================== */

function completeCurrentLesson() {
    const alreadyCompleted =
        progress.completed.includes(currentLessonIndex);

    if (alreadyCompleted) {
        elements.lessonCompletionMessage.textContent =
            "You've already completed this lesson. Keep practising or move to the next lesson.";

        elements.lessonCompletionMessage.className =
            "completion-message";

        return;
    }

    progress.completed.push(currentLessonIndex);

    progress.completed = [...new Set(progress.completed)];

    saveProgress();

    updateProgressUI();
    updateCompleteButton();

    const lesson = LESSONS[currentLessonIndex];

    elements.lessonCompletionMessage.textContent =
        `Excellent work! "${lesson.title}" is complete. You earned ${COURSE.xpPerLesson} XP.`;

    elements.lessonCompletionMessage.className =
        "completion-message";

    if (elements.liveAnnouncement) {
        elements.liveAnnouncement.textContent =
            `Lesson completed. You earned ${COURSE.xpPerLesson} experience points.`;
    }

    if (progress.completed.length === LESSONS.length) {
        elements.lessonCompletionMessage.textContent =
            "Incredible achievement! All 45 lessons are complete. Your certificate is now unlocked.";
    }

    updateCertificateUI();
}


/* ==========================================================
   14. CERTIFICATE SYSTEM
========================================================== */

function certificateUnlocked() {
    return progress.completed.length === LESSONS.length;
}

function updateCertificateUI() {
    const unlocked = certificateUnlocked();

    elements.certificateButton.disabled = !unlocked;

    elements.certificateStatus.classList.toggle("unlocked", unlocked);

    const statusText = unlocked
        ? "CERTIFICATE UNLOCKED"
        : "CERTIFICATE LOCKED";

    elements.certificateStatus.innerHTML = `
        <span class="certificate-status-dot"></span>
        ${statusText}
    `;

    elements.certificateMessage.textContent = unlocked
        ? "You've completed all 45 lessons! Enter your name and view your TypeScript Masterclass certificate."
        : `Complete all 45 lessons to unlock your certificate. You have completed ${progress.completed.length} so far.`;

    elements.certificateButton.textContent = unlocked
        ? "Prepare Your Certificate"
        : "Unlock Your Certificate";

    elements.certificateOpenButton.hidden = !unlocked;

    if (unlocked) {
        elements.certificateXP.textContent = `${progress.xp} XP`;
    }
}

function openCertificate() {
    if (!certificateUnlocked()) {
        elements.certificateMessage.textContent =
            "Complete all 45 lessons before opening your certificate.";

        return;
    }

    lastFocusedElement = document.activeElement;

    const savedName = certificateData.name ||
        elements.certificateName.value.trim();

    elements.certificateName.value = savedName;

    const today = new Date();

    const formattedDate = today.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    certificateData.date = certificateData.date || formattedDate;

    elements.certificateDate.textContent = certificateData.date;

    elements.certificateXP.textContent = `${progress.xp} XP`;

    elements.certificateModal.classList.add("open");

    elements.certificateModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    window.setTimeout(() => {
        elements.certificateName.focus();
    }, 100);
}

function closeCertificate() {
    elements.certificateModal.classList.remove("open");

    elements.certificateModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    if (
        lastFocusedElement &&
        typeof lastFocusedElement.focus === "function"
    ) {
        lastFocusedElement.focus();
    }
}

function printCertificate() {
    if (!certificateUnlocked()) {
        return;
    }

    const learnerName = elements.certificateName.value.trim();

    if (!learnerName) {
        elements.certificateName.focus();

        elements.certificateName.setCustomValidity(
            "Please enter the learner's full name."
        );

        elements.certificateName.reportValidity();

        elements.certificateName.addEventListener(
            "input",
            () => {
                elements.certificateName.setCustomValidity("");
            },
            { once: true }
        );

        return;
    }

    certificateData.name = learnerName;

    const dateText = elements.certificateDate.textContent;

    certificateData.date = dateText;

    saveCertificate();

    const printWindow = window.open("", "_blank");

    if (!printWindow) {
        alert(
            "Your browser blocked the print window. " +
            "Allow pop-ups for this page and try again."
        );

        return;
    }

    const paper = $("#certificatePaper").cloneNode(true);

    const nameInput = paper.querySelector("#certificateName");

    if (nameInput) {
        const name = document.createElement("div");

        name.className = "printed-learner-name";
        name.textContent = learnerName;

        nameInput.replaceWith(name);
    }

    const stylesheet = `
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            padding: 20px;

            color: #172b4b;
            background: white;

            font-family: Georgia, "Times New Roman", serif;
        }

        .certificate-paper {
            width: 100%;
            max-width: 1100px;

            margin: 0 auto;

            padding: 13px;

            background: #fffdf7;

            border: 1px solid #e7d5a6;
        }

        .certificate-border {
            min-height: 490px;

            padding: 38px 35px;

            text-align: center;

            border: 2px solid #c9a95c;

            background: #fffefa;
        }

        .certificate-emblem {
            width: 55px;
            height: 55px;

            display: grid;
            place-items: center;

            margin: 0 auto 14px;

            border: 2px solid #c9a95c;
            border-radius: 50%;

            color: #a07b2e;

            font-size: 34px;
            font-weight: 900;
        }

        .certificate-overline {
            display: block;

            color: #9b7935;

            font-size: 9px;
            font-weight: 900;

            letter-spacing: 3px;
        }

        .certificate-border h2 {
            margin-top: 17px;

            color: #172b4b;

            font-size: 36px;
        }

        .certificate-divider {
            width: 110px;
            height: 2px;

            margin: 19px auto;

            background: #c9a95c;
        }

        .certificate-intro {
            color: #64748b;
            font-size: 14px;
        }

        .printed-learner-name {
            width: 90%;

            margin: 14px auto 18px;
            padding: 9px 5px;

            border-bottom: 1px solid #c9a95c;

            color: #12294b;

            font-size: 30px;
            font-weight: 700;

            overflow-wrap: anywhere;
        }

        .certificate-description {
            max-width: 510px;

            margin: 0 auto;

            color: #58657a;

            font-size: 12px;
            line-height: 2;
        }

        .certificate-details {
            display: flex;
            justify-content: center;

            gap: 65px;

            margin-top: 27px;
        }

        .certificate-details > div {
            display: flex;
            flex-direction: column;

            gap: 8px;
        }

        .certificate-details span {
            color: #9b7935;

            font-size: 8px;
            font-weight: 900;

            letter-spacing: 1.5px;
        }

        .certificate-details strong {
            color: #243a59;
            font-size: 12px;
        }

        .certificate-signature-area {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;

            gap: 30px;

            margin-top: 36px;
        }

        .signature-block {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .signature-line {
            width: 200px;
            height: 1px;

            margin-bottom: 9px;

            background: #c9a95c;
        }

        .signature-block strong {
            color: #1c3557;
            font-size: 14px;
        }

        .signature-block span {
            margin-top: 5px;

            color: #9b7935;

            font-size: 8px;
            font-weight: 900;
        }

        .certificate-seal {
            width: 75px;
            height: 75px;

            display: flex;
            flex-direction: column;

            align-items: center;
            justify-content: center;

            border: 2px solid #c9a95c;
            border-radius: 50%;

            color: #a07b2e;
            background: #fff7df;
        }

        .certificate-seal span {
            font-size: 24px;
            font-weight: 900;
        }

        .certificate-seal small {
            font-size: 6px;
            font-weight: 900;
        }

        .certificate-bottom {
            margin-top: 30px;

            color: #a0874e;

            font-size: 8px;
            font-weight: 900;

            letter-spacing: 3px;
        }

        @page {
            size: landscape;
            margin: 10mm;
        }

        @media print {
            body {
                padding: 0;
            }

            .certificate-paper {
                max-width: none;
            }

            .certificate-border {
                min-height: 0;
            }
        }
    `;

    printWindow.document.open();

    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            >

            <title>TypeScript Masterclass Certificate</title>

            <style>${stylesheet}</style>
        </head>

        <body>
            ${paper.outerHTML}

            <script>
                window.addEventListener("load", function () {
                    setTimeout(function () {
                        window.print();
                    }, 300);
                });
            <\/script>
        </body>
        </html>
    `);

    printWindow.document.close();
}


/* ==========================================================
   15. EDITOR CONTROLS
========================================================== */

function runExample() {
    const source = LESSONS[currentLessonIndex].example;

    runCompiledCode(
        source,
        elements.exampleOutputFrame,
        elements.exampleOutputStatus,
        false
    );
}

function runPracticeCode() {
    const source = elements.codeEditor.value;

    elements.editorStatus.textContent = "COMPILING...";

    runCompiledCode(
        source,
        elements.practiceOutputFrame,
        elements.outputStatus,
        true
    );
}

function clearEditor() {
    elements.codeEditor.value = "";

    elements.editorStatus.textContent = "EDITOR CLEARED";

    setOutputStatus(elements.outputStatus, "CLEARED");

    showFrameMessage(
        elements.practiceOutputFrame,
        "Editor cleared. Write your TypeScript code and run it."
    );

    elements.codeEditor.focus();
}


/* ==========================================================
   16. AMBIENT PARTICLES
========================================================== */

function createParticles() {
    if (!elements.particles) {
        return;
    }

    elements.particles.innerHTML = "";

    const particleCount = window.matchMedia(
        "(max-width: 600px)"
    ).matches ? 16 : 30;

    for (let index = 0; index < particleCount; index++) {
        const particle = document.createElement("span");

        particle.className = "ambient-particle";

        particle.style.left = `${Math.random() * 100}%`;

        particle.style.top = `${Math.random() * 100}%`;

        particle.style.setProperty(
            "--particle-duration",
            `${8 + Math.random() * 12}s`
        );

        particle.style.animationDelay =
            `${Math.random() * -15}s`;

        const size = 2 + Math.random() * 3;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        elements.particles.appendChild(particle);
    }
}


/* ==========================================================
   17. EVENT LISTENERS
========================================================== */

function registerEvents() {
    elements.runExampleButton.addEventListener(
        "click",
        runExample
    );

    elements.runButton.addEventListener(
        "click",
        runPracticeCode
    );

    elements.resetButton.addEventListener(
        "click",
        clearEditor
    );

    elements.completeButton.addEventListener(
        "click",
        completeCurrentLesson
    );

    elements.previousButton.addEventListener(
        "click",
        () => selectLesson(currentLessonIndex - 1)
    );

    elements.nextButton.addEventListener(
        "click",
        () => selectLesson(currentLessonIndex + 1)
    );

    elements.certificateButton.addEventListener(
        "click",
        openCertificate
    );

    elements.certificateOpenButton.addEventListener(
        "click",
        openCertificate
    );

    elements.certificateClose.addEventListener(
        "click",
        closeCertificate
    );

    elements.certificateCancelButton.addEventListener(
        "click",
        closeCertificate
    );

    elements.certificateBackdrop.addEventListener(
        "click",
        closeCertificate
    );

    elements.certificatePrintButton.addEventListener(
        "click",
        printCertificate
    );

    elements.certificateName.addEventListener(
        "input",
        () => {
            certificateData.name =
                elements.certificateName.value;

            saveCertificate();
        }
    );

    elements.codeEditor.addEventListener(
        "keydown",
        (event) => {
            if (
                event.key === "Enter" &&
                (event.ctrlKey || event.metaKey)
            ) {
                event.preventDefault();

                runPracticeCode();
            }

            if (event.key === "Tab") {
                event.preventDefault();

                const start = elements.codeEditor.selectionStart;
                const end = elements.codeEditor.selectionEnd;

                const value = elements.codeEditor.value;

                elements.codeEditor.value =
                    value.substring(0, start) +
                    "    " +
                    value.substring(end);

                elements.codeEditor.selectionStart =
                    elements.codeEditor.selectionEnd =
                        start + 4;
            }
        }
    );

    elements.certificateModal.addEventListener(
        "keydown",
        (event) => {
            if (event.key === "Escape") {
                closeCertificate();
            }
        }
    );
}


/* ==========================================================
   18. INITIALISE THE COURSE
========================================================== */

function initialiseCourse() {
    const actualLessonCount = LESSONS.length;

    if (actualLessonCount !== COURSE.totalLessons) {
        console.error(
            `Course configuration expects ${COURSE.totalLessons} lessons, ` +
            `but the lesson database contains ${actualLessonCount}.`
        );
    }

    elements.sidebarLessonCount.textContent =
        String(actualLessonCount);

    loadProgress();
    loadCertificate();

    renderLessonList();

    registerEvents();

    createParticles();

    selectLesson(
        Math.min(
            Math.max(progress.currentLesson, 0),
            LESSONS.length - 1
        )
    );

    updateProgressUI();

    if (!compilerAvailable()) {
        showFrameMessage(
            elements.exampleOutputFrame,
            "The TypeScript compiler could not load. Check your internet connection and reload this page.",
            true
        );

        showFrameMessage(
            elements.practiceOutputFrame,
            "The TypeScript compiler could not load. Check your internet connection and reload this page.",
            true
        );

        setOutputStatus(
            elements.exampleOutputStatus,
            "COMPILER UNAVAILABLE",
            "error"
        );

        setOutputStatus(
            elements.outputStatus,
            "COMPILER UNAVAILABLE",
            "error"
        );
    }

    console.log(
        "ELOMCODE TypeScript Masterclass initialised."
    );

    console.log(
        `Lessons loaded: ${LESSONS.length}`
    );
}

document.addEventListener(
    "DOMContentLoaded",
    initialiseCourse
);


/* ==========================================================
   END OF TYPESCRIPT MASTERCLASS ENGINE
   ELOMCODE SCHOOL
   Course Architect: Elijah Opomulero
========================================================== */