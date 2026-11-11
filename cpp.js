/* =========================================================
   ELOMCODE SCHOOL — C++ MASTERCLASS
   Interactive Course Engine
   Designed by Elijah Opomulero

   File: cpp.js

   Features:
   - 45 C++ lessons
   - Lesson navigation
   - Practice editor
   - External C++ compiler integration
   - Progress and XP tracking
   - Certificate system
   - Animated background
========================================================= */

"use strict";


/* =========================================================
   1. COURSE CONFIGURATION
========================================================= */

const COURSE_CONFIG = {
    title: "C++ Programming Masterclass",
    totalLessons: 45,
    xpPerLesson: 25,
    founder: "Elijah Opomulero",
    storageKey: "elomcode_cpp_course_progress",
    compilerEndpoint: "https://emkc.org/api/v2/piston/execute"
};

const MAX_XP =
    COURSE_CONFIG.totalLessons * COURSE_CONFIG.xpPerLesson;


/* =========================================================
   2. LESSON DATABASE
========================================================= */

const LESSONS = [

    // =====================================================
    // SECTION 1 — C++ FOUNDATIONS
    // =====================================================

    {
        category: "C++ FOUNDATIONS",
        title: "Welcome to C++ Programming",
        subtitle: "Discover C++ and what you can build with it.",
        explanation: `
            <p>Welcome to the ELOMCODE School C++ Masterclass!</p>

            <p><strong>C++</strong> is a general-purpose programming language
            used to create software that needs performance, control, and
            efficient resource usage.</p>

            <p>Developers use C++ in areas such as game development,
            desktop applications, embedded systems, simulations, and
            performance-intensive software.</p>

            <h4>What makes C++ special?</h4>

            <ul>
                <li>It supports procedural programming.</li>
                <li>It supports object-oriented programming.</li>
                <li>It gives programmers control over many system resources.</li>
                <li>It provides powerful libraries and language features.</li>
            </ul>

            <p>Throughout this course, you will learn to write programs,
            understand errors, solve problems, and develop your programming
            skills step by step.</p>
        `,
        tip: "You do not need previous programming experience to begin this course.",
        example: `#include <iostream>

int main() {
    std::cout << "Welcome to C++!";
    return 0;
}`,
        challengeTitle: "Your First Programming Goal",
        challenge: "Study the example. Identify the line that displays the welcome message."
    },

    {
        category: "C++ FOUNDATIONS",
        title: "Understanding C++ Programs",
        subtitle: "Explore the basic structure of a C++ program.",
        explanation: `
            <p>A C++ program consists of instructions that tell a computer
            what to do.</p>

            <p>The <code>#include</code> directive allows a program to use
            declarations from a header. The <code>iostream</code> header
            provides standard input and output tools.</p>

            <p>The <code>main()</code> function is the usual entry point
            of a hosted C++ program. Execution begins there.</p>

            <p>Braces <code>{}</code> enclose a block of code, while many
            statements end with a semicolon.</p>
        `,
        tip: "Learn the purpose of each line instead of memorizing the whole program.",
        example: `#include <iostream>

int main() {
    std::cout << "My first program";
    return 0;
}`,
        challengeTitle: "Identify the Main Function",
        challenge: "Find the function where the program begins executing."
    },

    {
        category: "C++ FOUNDATIONS",
        title: "Setting Up a C++ Compiler",
        subtitle: "Understand how C++ source code becomes a program.",
        explanation: `
            <p>C++ is a compiled language. A compiler translates source code
            into a form that a computer can execute.</p>

            <p>You normally write code in a text editor or an integrated
            development environment (IDE), then use a compiler such as
            GCC or Clang.</p>

            <p>For this course, the Run buttons can send your source code
            to an external online compiler service when that service is
            available.</p>

            <h4>The general workflow</h4>

            <ol>
                <li>Write your C++ source code.</li>
                <li>Compile the source code.</li>
                <li>Correct any compiler errors.</li>
                <li>Run and test the resulting program.</li>
            </ol>
        `,
        tip: "A code editor helps you write code; a compiler translates C++ source code.",
        example: `#include <iostream>

int main() {
    std::cout << "Ready to compile!";
    return 0;
}`,
        challengeTitle: "Understand the Workflow",
        challenge: "Put these stages in order: write code, compile code, test the program."
    },

    {
        category: "C++ FOUNDATIONS",
        title: "Your First Output with cout",
        subtitle: "Display messages in a C++ program.",
        explanation: `
            <p><code>std::cout</code> is used to send output to the standard
            output stream.</p>

            <p>The insertion operator <code>&lt;&lt;</code> sends the value
            on its right to the output stream.</p>

            <p>You can display text by placing it inside double quotation
            marks.</p>
        `,
        tip: "Text that you want to display must be placed inside quotation marks.",
        example: `#include <iostream>

int main() {
    std::cout << "Hello, Elijah!";
    return 0;
}`,
        challengeTitle: "Print a Welcome Message",
        challenge: "Change the example message to welcome someone to ELOMCODE School."
    },

    {
        category: "C++ FOUNDATIONS",
        title: "Comments in C++",
        subtitle: "Write notes that explain your code.",
        explanation: `
            <p>Comments are notes written inside source code. They help
            explain the program to people reading it.</p>

            <p>A single-line comment begins with <code>//</code>.</p>

            <p>A multiline comment begins with <code>/*</code> and ends
            with <code>*/</code>.</p>

            <p>Comments are ignored as executable instructions by the
            compiler, although comments can still matter in some
            preprocessing situations.</p>
        `,
        tip: "Write comments that explain why something is done when the reason may not be obvious.",
        example: `#include <iostream>

int main() {
    // Display a greeting.
    std::cout << "Hello, C++!";

    /*
       This is a
       multiline comment.
    */

    return 0;
}`,
        challengeTitle: "Add a Comment",
        challenge: "Add a single-line comment above the output statement."
    },

    {
        category: "C++ FOUNDATIONS",
        title: "Statements and Semicolons",
        subtitle: "Understand how C++ statements are written.",
        explanation: `
            <p>A statement is an instruction in a C++ program.</p>

            <p>Many C++ statements end with a semicolon. Forgetting a
            required semicolon is a common beginner mistake.</p>

            <p>Braces are different from semicolons: braces group statements
            into blocks.</p>
        `,
        tip: "When you see a compiler error, check the line mentioned and the lines immediately before it.",
        example: `#include <iostream>

int main() {
    std::cout << "First statement";
    std::cout << "Second statement";
    return 0;
}`,
        challengeTitle: "Inspect the Statements",
        challenge: "Count the statements inside main() in the example."
    },

    {
        category: "C++ FOUNDATIONS",
        title: "Escape Characters",
        subtitle: "Control how text appears in output.",
        explanation: `
            <p>Escape sequences represent special characters inside string
            literals.</p>

            <p><code>\\n</code> represents a newline. The sequence
            <code>\\t</code> represents a horizontal tab.</p>

            <p>To include a backslash in a string, you can write
            <code>\\\\</code>. To include a double quotation mark, use
            <code>\\"</code>.</p>
        `,
        tip: "Use a newline when you want separate pieces of output to appear on separate lines.",
        example: `#include <iostream>

int main() {
    std::cout << "Hello!\\n";
    std::cout << "Welcome to C++\\n";
    std::cout << "Name:\\tElijah\\n";
    return 0;
}`,
        challengeTitle: "Format Your Output",
        challenge: "Modify the example so that three messages appear on three separate lines."
    },

    {
        category: "C++ FOUNDATIONS",
        title: "Your First Mini Program",
        subtitle: "Combine the fundamentals in a small program.",
        explanation: `
            <p>You have now learned about the structure of a C++ program,
            output, comments, statements, and escape characters.</p>

            <p>A small program is a good way to combine these concepts.</p>

            <p>Read the example, run it, and then try changing the messages
            to make the program your own.</p>
        `,
        tip: "Small experiments help you understand programming concepts more deeply.",
        example: `#include <iostream>

int main() {
    // A simple introduction.
    std::cout << "My C++ Journey\\n";
    std::cout << "Powered by ELOMCODE School\\n";
    std::cout << "Learn. Code. Build. Become.\\n";

    return 0;
}`,
        challengeTitle: "Create Your Introduction",
        challenge: "Write a program that prints your name, your course, and one learning goal."
    },


    // =====================================================
    // SECTION 2 — VARIABLES AND DATA TYPES
    // =====================================================

    {
        category: "VARIABLES & DATA TYPES",
        title: "Understanding Variables",
        subtitle: "Store information that your program can use.",
        explanation: `
            <p>A variable is a named object used to store a value.</p>

            <p>In C++, you declare a variable with a type and a name.
            You can also initialize it with a starting value.</p>

            <p>For example, <code>int age = 18;</code> declares an integer
            variable named age and initializes it to 18.</p>
        `,
        tip: "Choose variable names that describe the information they represent.",
        example: `#include <iostream>

int main() {
    int age = 18;
    std::cout << age;
    return 0;
}`,
        challengeTitle: "Create a Variable",
        challenge: "Declare an integer named score and display its value."
    },

    {
        category: "VARIABLES & DATA TYPES",
        title: "Integer Data Types",
        subtitle: "Work with whole numbers.",
        explanation: `
            <p>The type <code>int</code> is commonly used for whole numbers.</p>

            <p>For other ranges and requirements, C++ provides types such
            as <code>short</code>, <code>long</code>, and
            <code>long long</code>.</p>

            <p>The exact sizes and ranges of integer types depend on the
            implementation, subject to the language's requirements.</p>
        `,
        tip: "Use an integer type when your value represents a whole number rather than a fraction.",
        example: `#include <iostream>

int main() {
    int apples = 12;
    int oranges = 8;

    std::cout << "Apples: " << apples << "\\n";
    std::cout << "Oranges: " << oranges << "\\n";

    return 0;
}`,
        challengeTitle: "Store Whole Numbers",
        challenge: "Create two integer variables representing two different quantities and display both."
    },

    {
        category: "VARIABLES & DATA TYPES",
        title: "Floating-Point Numbers",
        subtitle: "Represent numbers with fractional parts.",
        explanation: `
            <p>Floating-point types represent values that may contain
            fractional parts.</p>

            <p><code>float</code> and <code>double</code> are commonly
            used for these values. A <code>double</code> generally provides
            more precision than a <code>float</code>.</p>

            <p>Floating-point calculations can involve rounding because
            many decimal fractions cannot be represented exactly in binary.</p>
        `,
        tip: "Use a suitable numeric type for the precision your program requires.",
        example: `#include <iostream>

int main() {
    double price = 1250.50;
    double discount = 150.25;

    std::cout << "Price: " << price << "\\n";
    std::cout << "Discount: " << discount << "\\n";

    return 0;
}`,
        challengeTitle: "Represent a Decimal",
        challenge: "Declare a double variable for a price and display it."
    },

    {
        category: "VARIABLES & DATA TYPES",
        title: "Characters and Strings",
        subtitle: "Represent individual characters and text.",
        explanation: `
            <p>The type <code>char</code> represents a character-sized
            value. A character literal is normally written with single
            quotation marks, such as <code>'A'</code>.</p>

            <p>The standard library's <code>std::string</code> type is
            commonly used to store text. Include
            <code>&lt;string&gt;</code> to use it.</p>

            <p>String literals use double quotation marks.</p>
        `,
        tip: "Remember: character literals use single quotes; string literals use double quotes.",
        example: `#include <iostream>
#include <string>

int main() {
    char grade = 'A';
    std::string name = "Elijah";

    std::cout << name << "\\n";
    std::cout << grade << "\\n";

    return 0;
}`,
        challengeTitle: "Store a Name",
        challenge: "Create a string containing a name and a char containing a grade."
    },

    {
        category: "VARIABLES & DATA TYPES",
        title: "Boolean Values",
        subtitle: "Represent true-or-false information.",
        explanation: `
            <p>The <code>bool</code> type represents a logical value.</p>

            <p>A Boolean variable can contain <code>true</code> or
            <code>false</code>.</p>

            <p>Boolean values are useful for conditions, decisions, and
            representing whether something is enabled, complete, or valid.</p>
        `,
        tip: "Use Boolean variables when the answer to a question can be true or false.",
        example: `#include <iostream>

int main() {
    bool isLearning = true;
    bool isFinished = false;

    std::cout << std::boolalpha;
    std::cout << isLearning << "\\n";
    std::cout << isFinished << "\\n";

    return 0;
}`,
        challengeTitle: "Create a Boolean",
        challenge: "Create a Boolean variable called isReady and display it using boolalpha."
    },

    {
        category: "VARIABLES & DATA TYPES",
        title: "Constants",
        subtitle: "Create values that cannot be changed through that name.",
        explanation: `
            <p>The <code>const</code> keyword declares an object that cannot
            be modified through that name after initialization.</p>

            <p>Constants help communicate that a value is intended to
            remain unchanged.</p>

            <p>For example, a program may define a constant representing
            the number of days in a week.</p>
        `,
        tip: "Give constants meaningful names and initialize them when declaring them.",
        example: `#include <iostream>

int main() {
    const int DAYS_IN_WEEK = 7;

    std::cout << DAYS_IN_WEEK;
    return 0;
}`,
        challengeTitle: "Declare a Constant",
        challenge: "Create a constant representing the number of months in a year."
    },

    {
        category: "VARIABLES & DATA TYPES",
        title: "Type Conversion",
        subtitle: "Convert values from one type to another.",
        explanation: `
            <p>Type conversion changes a value from one type to another.</p>

            <p>Some conversions happen implicitly. You can also request
            an explicit conversion using a cast such as
            <code>static_cast&lt;double&gt;(value)</code>.</p>

            <p>Converting a floating-point number to an integer discards
            its fractional part when using the ordinary floating-to-integer
            conversion.</p>
        `,
        tip: "Be aware of possible precision loss when converting between numeric types.",
        example: `#include <iostream>

int main() {
    int wholeNumber = 7;

    double decimalNumber =
        static_cast<double>(wholeNumber);

    std::cout << decimalNumber;
    return 0;
}`,
        challengeTitle: "Convert an Integer",
        challenge: "Use static_cast to convert an integer to double and display the result."
    },

    {
        category: "VARIABLES & DATA TYPES",
        title: "Getting User Input",
        subtitle: "Allow a program to receive information.",
        explanation: `
            <p><code>std::cin</code> is commonly used to read input from
            the standard input stream.</p>

            <p>The extraction operator <code>&gt;&gt;</code> reads a value
            into a variable.</p>

            <p>When reading text that contains spaces, consider
            <code>std::getline()</code> rather than ordinary extraction.</p>
        `,
        tip: "Always think about what happens if the user enters something different from what you expected.",
        example: `#include <iostream>

int main() {
    int age;

    std::cout << "Enter an age: ";
    if (std::cin >> age) {
        std::cout << "You entered " << age;
    }

    return 0;
}`,
        challengeTitle: "Read a Number",
        challenge: "Create a program that asks for a number and displays the number entered."
    },


    // =====================================================
    // SECTION 3 — OPERATORS AND CONDITIONS
    // =====================================================

    {
        category: "OPERATORS & CONDITIONS",
        title: "Arithmetic Operators",
        subtitle: "Perform mathematical calculations.",
        explanation: `
            <p>C++ provides operators for addition, subtraction,
            multiplication, division, and remainder.</p>

            <p>The operators include <code>+</code>, <code>-</code>,
            <code>*</code>, <code>/</code>, and <code>%</code>.</p>

            <p>When both operands of integer division are integers, the
            fractional part is discarded. The remainder operator
            <code>%</code> is used with integral operands.</p>
        `,
        tip: "Pay attention to the types involved in a calculation.",
        example: `#include <iostream>

int main() {
    int a = 17;
    int b = 5;

    std::cout << a + b << "\\n";
    std::cout << a - b << "\\n";
    std::cout << a * b << "\\n";
    std::cout << a / b << "\\n";
    std::cout << a % b << "\\n";

    return 0;
}`,
        challengeTitle: "Calculate a Result",
        challenge: "Create two integer variables and display their sum, difference, and product."
    },

    {
        category: "OPERATORS & CONDITIONS",
        title: "Assignment Operators",
        subtitle: "Assign and update variable values.",
        explanation: `
            <p>The assignment operator <code>=</code> stores a value
            in an assignable object.</p>

            <p>Compound assignment operators such as <code>+=</code>,
            <code>-=</code>, and <code>*=</code> combine an operation
            with assignment.</p>

            <p>For example, <code>score += 5;</code> adds five to score
            and stores the result back in score.</p>
        `,
        tip: "Assignment changes a variable's stored value; comparison checks a relationship between values.",
        example: `#include <iostream>

int main() {
    int score = 10;

    score += 5;
    score *= 2;

    std::cout << score;
    return 0;
}`,
        challengeTitle: "Update a Score",
        challenge: "Start with a score of 20, add 10, and then subtract 5 using compound assignments."
    },

    {
        category: "OPERATORS & CONDITIONS",
        title: "Comparison Operators",
        subtitle: "Compare values and produce Boolean results.",
        explanation: `
            <p>Comparison operators compare two values.</p>

            <p>Common operators include <code>==</code>, <code>!=</code>,
            <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>,
            and <code>&gt;=</code>.</p>

            <p>These comparisons produce Boolean results that can be used
            in conditions.</p>
        `,
        tip: "Use == to compare values. A single = performs assignment.",
        example: `#include <iostream>

int main() {
    int a = 10;
    int b = 20;

    std::cout << std::boolalpha;
    std::cout << (a < b) << "\\n";
    std::cout << (a == b) << "\\n";

    return 0;
}`,
        challengeTitle: "Compare Two Values",
        challenge: "Compare two integer values and display whether the first is greater than the second."
    },

    {
        category: "OPERATORS & CONDITIONS",
        title: "Logical Operators",
        subtitle: "Combine or reverse logical conditions.",
        explanation: `
            <p>Logical operators help combine Boolean expressions.</p>

            <p><code>&amp;&amp;</code> means logical AND,
            <code>||</code> means logical OR, and
            <code>!</code> means logical NOT.</p>

            <p>AND is true when both conditions are true. OR is true when
            at least one condition is true. NOT reverses a Boolean result.</p>
        `,
        tip: "Test each condition separately when a combined expression is confusing.",
        example: `#include <iostream>

int main() {
    bool hasTicket = true;
    bool eventOpen = true;

    std::cout << std::boolalpha;
    std::cout << (hasTicket && eventOpen);

    return 0;
}`,
        challengeTitle: "Combine Conditions",
        challenge: "Use AND to check whether two Boolean variables are both true."
    },

    {
        category: "OPERATORS & CONDITIONS",
        title: "If Statements",
        subtitle: "Run code when a condition is true.",
        explanation: `
            <p>An <code>if</code> statement allows a program to make
            a decision.</p>

            <p>If the condition evaluates to true, the associated
            statement or block is executed. Otherwise, it is skipped.</p>

            <p>Conditions often use comparison operators.</p>
        `,
        tip: "Use braces around the body of an if statement to make the program structure clear.",
        example: `#include <iostream>

int main() {
    int score = 85;

    if (score >= 50) {
        std::cout << "Pass";
    }

    return 0;
}`,
        challengeTitle: "Check a Score",
        challenge: "Write an if statement that displays a message when a number is greater than zero."
    },

    {
        category: "OPERATORS & CONDITIONS",
        title: "If-Else Statements",
        subtitle: "Choose between two paths.",
        explanation: `
            <p>An <code>if-else</code> statement provides two alternatives.</p>

            <p>The if block runs when its condition is true. The else
            block runs when the condition is false.</p>

            <p>This structure is useful for simple decisions such as
            checking whether a value meets a requirement.</p>
        `,
        tip: "Choose a condition that clearly describes the decision you want the program to make.",
        example: `#include <iostream>

int main() {
    int number = 7;

    if (number % 2 == 0) {
        std::cout << "Even";
    } else {
        std::cout << "Odd";
    }

    return 0;
}`,
        challengeTitle: "Even or Odd",
        challenge: "Use if-else to display whether an integer is even or odd."
    },

    {
        category: "OPERATORS & CONDITIONS",
        title: "Else-If Chains",
        subtitle: "Handle several possible conditions.",
        explanation: `
            <p>An <code>else if</code> chain lets a program test multiple
            conditions in order.</p>

            <p>The first condition that evaluates to true determines
            which branch executes. If none is true, an optional else
            block can execute.</p>
        `,
        tip: "Arrange conditions carefully so a broad condition does not hide a more specific one.",
        example: `#include <iostream>

int main() {
    int score = 78;

    if (score >= 80) {
        std::cout << "Excellent";
    } else if (score >= 60) {
        std::cout << "Good";
    } else {
        std::cout << "Keep practising";
    }

    return 0;
}`,
        challengeTitle: "Create a Grade Checker",
        challenge: "Write an else-if chain that categorizes a score into at least three ranges."
    },

    {
        category: "OPERATORS & CONDITIONS",
        title: "The Switch Statement",
        subtitle: "Choose a branch based on a value.",
        explanation: `
            <p>A <code>switch</code> statement can select a branch based
            on an integral, enumeration, or certain other supported
            value types.</p>

            <p>Each case label identifies a possible value. The
            <code>break</code> statement usually exits the switch
            after a case executes.</p>

            <p>A default label can handle values that do not match
            any listed case.</p>
        `,
        tip: "Remember that ordinary switch cases can fall through when you omit a break.",
        example: `#include <iostream>

int main() {
    int day = 2;

    switch (day) {
        case 1:
            std::cout << "Monday";
            break;

        case 2:
            std::cout << "Tuesday";
            break;

        default:
            std::cout << "Other day";
    }

    return 0;
}`,
        challengeTitle: "Build a Menu",
        challenge: "Create a switch statement with three choices and a default branch."
    },

    {
        category: "OPERATORS & CONDITIONS",
        title: "The Ternary Operator",
        subtitle: "Choose a value using a conditional expression.",
        explanation: `
            <p>The conditional operator <code>?:</code> evaluates a
            condition and selects one of two expressions.</p>

            <p>It is useful for short expressions where a full if-else
            statement would be unnecessary.</p>

            <p>For complex logic, a regular if-else statement is often
            easier to read.</p>
        `,
        tip: "Prefer clarity over making every expression as short as possible.",
        example: `#include <iostream>

int main() {
    int age = 20;

    std::string result =
        age >= 18 ? "Adult" : "Under 18";

    std::cout << result;
    return 0;
}`,
        challengeTitle: "Choose Between Two Values",
        challenge: "Use the ternary operator to select the larger of two integers."
    },


    // =====================================================
    // SECTION 4 — LOOPS AND FUNCTIONS
    // =====================================================

    {
        category: "LOOPS & FUNCTIONS",
        title: "Understanding Loops",
        subtitle: "Repeat instructions without copying them.",
        explanation: `
            <p>Loops repeat a statement or block of statements.</p>

            <p>C++ provides several loop structures, including
            <code>for</code>, <code>while</code>, and
            <code>do-while</code>.</p>

            <p>Loops are useful for processing collections, counting,
            and repeating a task while a condition holds.</p>
        `,
        tip: "Always check how a loop starts, what condition keeps it running, and how it changes.",
        example: `#include <iostream>

int main() {
    int count = 1;

    while (count <= 3) {
        std::cout << count << "\\n";
        count++;
    }

    return 0;
}`,
        challengeTitle: "Repeat a Message",
        challenge: "Write a loop that prints a message five times."
    },

    {
        category: "LOOPS & FUNCTIONS",
        title: "For Loops",
        subtitle: "Repeat code using initialization, a condition, and an update.",
        explanation: `
            <p>A traditional <code>for</code> loop has an initialization
            part, a condition, and an iteration expression.</p>

            <p>The initialization runs once. Before each iteration, the
            condition is checked. The iteration expression normally runs
            after the loop body.</p>
        `,
        tip: "For counting tasks, a for loop often makes the loop structure easy to see.",
        example: `#include <iostream>

int main() {
    for (int i = 1; i <= 5; i++) {
        std::cout << i << "\\n";
    }

    return 0;
}`,
        challengeTitle: "Count to Ten",
        challenge: "Use a for loop to print the numbers from 1 to 10."
    },

    {
        category: "LOOPS & FUNCTIONS",
        title: "While Loops",
        subtitle: "Repeat code while a condition remains true.",
        explanation: `
            <p>A <code>while</code> loop checks its condition before
            each iteration.</p>

            <p>If the condition is false at the beginning, the body
            will not run.</p>

            <p>Remember to make sure the loop can eventually stop when
            that is the intended behavior.</p>
        `,
        tip: "An accidental infinite loop can make a program appear unresponsive.",
        example: `#include <iostream>

int main() {
    int number = 3;

    while (number > 0) {
        std::cout << number << "\\n";
        number--;
    }

    return 0;
}`,
        challengeTitle: "Count Down",
        challenge: "Use a while loop to count down from five to one."
    },

    {
        category: "LOOPS & FUNCTIONS",
        title: "Do-While Loops",
        subtitle: "Run a loop body before checking its condition.",
        explanation: `
            <p>A <code>do-while</code> loop executes its body before
            checking the condition.</p>

            <p>This means the body executes at least once.</p>

            <p>Unlike a normal while loop, the do-while statement ends
            with a semicolon after its condition.</p>
        `,
        tip: "Use do-while when the task should happen once before the condition is checked.",
        example: `#include <iostream>

int main() {
    int number = 1;

    do {
        std::cout << number << "\\n";
        number++;
    } while (number <= 3);

    return 0;
}`,
        challengeTitle: "Print at Least Once",
        challenge: "Write a do-while loop that displays a message at least once."
    },

    {
        category: "LOOPS & FUNCTIONS",
        title: "Break and Continue",
        subtitle: "Control how a loop proceeds.",
        explanation: `
            <p><code>break</code> exits the nearest enclosing loop or
            switch statement.</p>

            <p><code>continue</code> skips the remaining statements
            in the current loop iteration and proceeds according to
            the loop type.</p>

            <p>These statements can be useful, but clear loop conditions
            often make code easier to maintain.</p>
        `,
        tip: "Use break and continue deliberately so readers can understand why the loop changes course.",
        example: `#include <iostream>

int main() {
    for (int i = 1; i <= 5; i++) {
        if (i == 3) {
            continue;
        }

        std::cout << i << "\\n";
    }

    return 0;
}`,
        challengeTitle: "Skip a Number",
        challenge: "Use continue to skip the number 4 in a loop from 1 to 6."
    },

    {
        category: "LOOPS & FUNCTIONS",
        title: "Nested Loops",
        subtitle: "Place one loop inside another loop.",
        explanation: `
            <p>A nested loop is a loop inside another loop.</p>

            <p>Nested loops are useful for grids, tables, patterns,
            and processing multidimensional data.</p>

            <p>For each iteration of the outer loop, the inner loop
            may execute several times.</p>
        `,
        tip: "Trace the outer and inner variables separately when learning nested loops.",
        example: `#include <iostream>

int main() {
    for (int row = 1; row <= 3; row++) {
        for (int column = 1; column <= 3; column++) {
            std::cout << "* ";
        }

        std::cout << "\\n";
    }

    return 0;
}`,
        challengeTitle: "Build a Star Grid",
        challenge: "Use nested loops to print three rows of four stars."
    },

    {
        category: "LOOPS & FUNCTIONS",
        title: "Introduction to Functions",
        subtitle: "Organize reusable instructions into named units.",
        explanation: `
            <p>A function is a named unit of code that can perform a task
            and optionally return a value.</p>

            <p>Functions help divide programs into smaller, more manageable
            pieces.</p>

            <p>A function usually has a return type, a name, parameters
            if needed, and a body.</p>
        `,
        tip: "Give each function a clear responsibility and a descriptive name.",
        example: `#include <iostream>

void greet() {
    std::cout << "Welcome to C++!";
}

int main() {
    greet();
    return 0;
}`,
        challengeTitle: "Create a Greeting Function",
        challenge: "Create a void function that prints a greeting, then call it from main()."
    },

    {
        category: "LOOPS & FUNCTIONS",
        title: "Function Parameters",
        subtitle: "Pass information into functions.",
        explanation: `
            <p>Parameters allow functions to receive information from
            the code that calls them.</p>

            <p>When a function is called, the arguments supplied by
            the caller initialize its parameters according to the
            parameter types and passing rules.</p>

            <p>Parameters make functions reusable with different values.</p>
        `,
        tip: "A function that accepts parameters can often be reused for many different inputs.",
        example: `#include <iostream>

void greet(std::string name) {
    std::cout << "Hello, " << name << "!";
}

int main() {
    greet("Elijah");
    return 0;
}`,
        challengeTitle: "Personalize a Greeting",
        challenge: "Write a function that accepts a name and prints a personalized greeting."
    },

    {
        category: "LOOPS & FUNCTIONS",
        title: "Return Values",
        subtitle: "Send a result back from a function.",
        explanation: `
            <p>A non-void function can return a result to the code that
            called it.</p>

            <p>The return type describes the type of result produced
            by the function.</p>

            <p>A function declared with a non-void return type must
            provide a suitable return value on every path that reaches
            the end of the function's execution.</p>
        `,
        tip: "Use a return value when the caller needs to use the result of a calculation.",
        example: `#include <iostream>

int add(int a, int b) {
    return a + b;
}

int main() {
    std::cout << add(4, 6);
    return 0;
}`,
        challengeTitle: "Build an Addition Function",
        challenge: "Create a function that returns the product of two integers."
    },


    // =====================================================
    // SECTION 5 — ARRAYS AND STRINGS
    // =====================================================

    {
        category: "ARRAYS & STRINGS",
        title: "Introduction to Arrays",
        subtitle: "Store multiple values of the same type.",
        explanation: `
            <p>An array stores a fixed number of elements of the same
            type in a contiguous sequence.</p>

            <p>In a built-in array, the elements are accessed using
            indexes beginning at zero.</p>

            <p>Accessing an index outside the array's valid range can
            cause undefined behavior.</p>
        `,
        tip: "For an array of five elements, the valid indexes are 0, 1, 2, 3, and 4.",
        example: `#include <iostream>

int main() {
    int numbers[4] = {10, 20, 30, 40};

    std::cout << numbers[0] << "\\n";
    std::cout << numbers[2] << "\\n";

    return 0;
}`,
        challengeTitle: "Create an Array",
        challenge: "Create an array of five integers and display its first and last elements."
    },

    {
        category: "ARRAYS & STRINGS",
        title: "Looping Through Arrays",
        subtitle: "Process array elements one by one.",
        explanation: `
            <p>Loops can visit each element of an array.</p>

            <p>A traditional for loop can use an index. A range-based
            for loop provides a convenient way to visit each element
            directly.</p>

            <p>For many simple tasks, range-based loops are easier to read.</p>
        `,
        tip: "Use a reference in a range-based loop when you need to modify the original elements.",
        example: `#include <iostream>

int main() {
    int numbers[] = {2, 4, 6, 8};

    for (int number : numbers) {
        std::cout << number << "\\n";
    }

    return 0;
}`,
        challengeTitle: "Display Every Element",
        challenge: "Use a range-based for loop to display every value in an integer array."
    },

    {
        category: "ARRAYS & STRINGS",
        title: "Working with Strings",
        subtitle: "Store and manipulate text.",
        explanation: `
            <p>The standard library's <code>std::string</code> type
            provides a convenient way to work with text.</p>

            <p>Strings can be concatenated using <code>+</code>, measured
            with <code>size()</code> or <code>length()</code>, and
            accessed by position.</p>

            <p>Remember that string indexes begin at zero.</p>
        `,
        tip: "Check that a string is not empty before accessing an element by index.",
        example: `#include <iostream>
#include <string>

int main() {
    std::string first = "Learn";
    std::string second = "C++";

    std::string message = first + " " + second;

    std::cout << message << "\\n";
    std::cout << message.size();

    return 0;
}`,
        challengeTitle: "Combine Two Strings",
        challenge: "Create two strings, combine them into a third string, and display the result."
    },

    {
        category: "ARRAYS & STRINGS",
        title: "Two-Dimensional Arrays",
        subtitle: "Represent values in rows and columns.",
        explanation: `
            <p>A two-dimensional built-in array can represent a grid
            with rows and columns.</p>

            <p>It can be declared with two dimensions and accessed using
            two indexes.</p>

            <p>The first index selects a row; the second selects a
            position within that row.</p>
        `,
        tip: "Use nested loops when you need to process every row and column.",
        example: `#include <iostream>

int main() {
    int grid[2][2] = {
        {1, 2},
        {3, 4}
    };

    std::cout << grid[0][0] << "\\n";
    std::cout << grid[1][1];

    return 0;
}`,
        challengeTitle: "Build a Small Grid",
        challenge: "Create a 2-by-2 integer array and print all its values."
    },


    // =====================================================
    // SECTION 6 — OBJECT-ORIENTED PROGRAMMING
    // =====================================================

    {
        category: "OBJECT-ORIENTED PROGRAMMING",
        title: "Introduction to Classes",
        subtitle: "Create your own types in C++.",
        explanation: `
            <p>A class defines a type that can combine data and functions.</p>

            <p>Class members may include variables, member functions,
            constructors, and other declarations.</p>

            <p>A class can describe a concept such as a student,
            a product, or a bank account.</p>
        `,
        tip: "Use classes when related data and operations belong together.",
        example: `#include <iostream>
#include <string>

class Student {
public:
    std::string name = "Elijah";

    void introduce() {
        std::cout << "Hello, " << name;
    }
};

int main() {
    Student student;
    student.introduce();

    return 0;
}`,
        challengeTitle: "Create a Class",
        challenge: "Create a class named Book with a title and a member function that displays it."
    },

    {
        category: "OBJECT-ORIENTED PROGRAMMING",
        title: "Objects and Members",
        subtitle: "Create objects from classes and use their members.",
        explanation: `
            <p>An object is an instance of a type.</p>

            <p>After creating an object, you can access its public
            members using the dot operator.</p>

            <p>Different objects of the same class can hold different
            member values.</p>
        `,
        tip: "A class describes the type; an object is a particular instance of that type.",
        example: `#include <iostream>

class Counter {
public:
    int value = 0;
};

int main() {
    Counter first;
    Counter second;

    first.value = 10;
    second.value = 20;

    std::cout << first.value << "\\n";
    std::cout << second.value;

    return 0;
}`,
        challengeTitle: "Create Two Objects",
        challenge: "Create two objects from the same class and give them different values."
    },

    {
        category: "OBJECT-ORIENTED PROGRAMMING",
        title: "Constructors",
        subtitle: "Initialize objects when they are created.",
        explanation: `
            <p>A constructor is a special member function used to
            initialize an object.</p>

            <p>A constructor has the same name as its class and has
            no return type.</p>

            <p>Constructors can accept parameters and can use a member
            initializer list to initialize members.</p>
        `,
        tip: "Use constructors to ensure objects begin in a valid, meaningful state.",
        example: `#include <iostream>
#include <string>

class Student {
public:
    std::string name;

    Student(std::string studentName)
        : name(studentName) {}
};

int main() {
    Student student("Elijah");
    std::cout << student.name;

    return 0;
}`,
        challengeTitle: "Initialize an Object",
        challenge: "Create a class with a constructor that initializes a name."
    },

    {
        category: "OBJECT-ORIENTED PROGRAMMING",
        title: "Access Specifiers",
        subtitle: "Control access to class members.",
        explanation: `
            <p>C++ provides access specifiers including
            <code>public</code>, <code>private</code>, and
            <code>protected</code>.</p>

            <p>Public members can be accessed from code that has access
            to the object. Private members are accessible to the class's
            member functions and specified friends.</p>

            <p>Access control is one part of designing clear interfaces
            and protecting an object's internal representation.</p>
        `,
        tip: "Keep internal details private when callers should interact through public operations.",
        example: `#include <iostream>

class Account {
private:
    int balance = 100;

public:
    int getBalance() const {
        return balance;
    }
};

int main() {
    Account account;
    std::cout << account.getBalance();

    return 0;
}`,
        challengeTitle: "Protect a Member",
        challenge: "Create a class with a private integer and a public function that returns it."
    },

    {
        category: "OBJECT-ORIENTED PROGRAMMING",
        title: "Encapsulation",
        subtitle: "Keep internal state behind a clear interface.",
        explanation: `
            <p>Encapsulation groups data and related operations while
            controlling how outside code interacts with the data.</p>

            <p>A class can use private members and public methods to
            validate changes and maintain its rules.</p>

            <p>This helps prevent callers from changing an object's
            internal state in unintended ways.</p>
        `,
        tip: "Make invalid states harder to create by validating changes inside the class.",
        example: `#include <iostream>

class Score {
private:
    int value = 0;

public:
    void setValue(int newValue) {
        if (newValue >= 0) {
            value = newValue;
        }
    }

    int getValue() const {
        return value;
    }
};

int main() {
    Score score;
    score.setValue(50);

    std::cout << score.getValue();
    return 0;
}`,
        challengeTitle: "Create a Controlled Value",
        challenge: "Build a class that stores a non-negative score and exposes a getter."
    },

    {
        category: "OBJECT-ORIENTED PROGRAMMING",
        title: "Inheritance",
        subtitle: "Create a class based on another class.",
        explanation: `
            <p>Inheritance allows a derived class to build on a base class.</p>

            <p>A derived class can inherit accessible members and add
            its own behavior or data.</p>

            <p>Inheritance can represent an is-a relationship, but it
            should be used when that relationship makes sense for the design.</p>
        `,
        tip: "Do not use inheritance only to avoid repeating a few lines of code.",
        example: `#include <iostream>

class Animal {
public:
    void eat() {
        std::cout << "Eating\\n";
    }
};

class Dog : public Animal {
public:
    void bark() {
        std::cout << "Woof!";
    }
};

int main() {
    Dog dog;
    dog.eat();
    dog.bark();

    return 0;
}`,
        challengeTitle: "Build a Derived Class",
        challenge: "Create a base class and a derived class with its own additional member function."
    },

    {
        category: "OBJECT-ORIENTED PROGRAMMING",
        title: "Polymorphism",
        subtitle: "Use a common interface for different behaviors.",
        explanation: `
            <p>Polymorphism allows code to work through a common interface
            while different types provide different behavior.</p>

            <p>In C++, virtual member functions support runtime
            polymorphism through base-class interfaces.</p>

            <p>When using polymorphic base classes, consider a virtual
            destructor if objects may be deleted through a base pointer.</p>
        `,
        tip: "Polymorphism is especially useful when several types share an interface but behave differently.",
        example: `#include <iostream>

class Animal {
public:
    virtual void speak() const {
        std::cout << "Animal sound";
    }

    virtual ~Animal() = default;
};

class Dog : public Animal {
public:
    void speak() const override {
        std::cout << "Woof!";
    }
};

int main() {
    Dog dog;
    const Animal& animal = dog;

    animal.speak();
    return 0;
}`,
        challengeTitle: "Override a Function",
        challenge: "Create a base class with a virtual function and override it in a derived class."
    },


    // =====================================================
    // SECTION 7 — POINTERS AND REFERENCES
    // =====================================================

    {
        category: "POINTERS & REFERENCES",
        title: "Understanding Memory Addresses",
        subtitle: "Learn how objects are located in memory.",
        explanation: `
            <p>Objects occupy storage during their lifetimes. The address-of
            operator <code>&amp;</code> can obtain the address of an object.</p>

            <p>Pointer types can store addresses of compatible objects.</p>

            <p>Understanding addresses is useful for learning pointers,
            references, dynamic storage, and many systems programming concepts.</p>
        `,
        tip: "An address is not the same thing as the value stored in an object.",
        example: `#include <iostream>

int main() {
    int number = 42;

    std::cout << "Value: " << number << "\\n";
    std::cout << "Address: " << &number;

    return 0;
}`,
        challengeTitle: "Inspect an Address",
        challenge: "Create an integer and print both its value and its address."
    },

    {
        category: "POINTERS & REFERENCES",
        title: "Introduction to Pointers",
        subtitle: "Store and use addresses through pointer variables.",
        explanation: `
            <p>A pointer is an object that can hold an address.</p>

            <p>The address-of operator <code>&amp;</code> obtains an
            object's address, while the unary <code>*</code> operator
            can dereference a valid pointer.</p>

            <p>Dereferencing a null, dangling, or otherwise invalid
            pointer is not safe.</p>
        `,
        tip: "Only dereference a pointer when it points to a valid object.",
        example: `#include <iostream>

int main() {
    int number = 25;
    int* pointer = &number;

    std::cout << *pointer;

    return 0;
}`,
        challengeTitle: "Use a Pointer",
        challenge: "Create an integer, store its address in a pointer, and display the pointed-to value."
    },

    {
        category: "POINTERS & REFERENCES",
        title: "References",
        subtitle: "Create another name for an existing object.",
        explanation: `
            <p>A reference is an alias for an object.</p>

            <p>A reference must be initialized when declared, and it
            continues to refer to the object it was initialized to
            refer to.</p>

            <p>References are often used in function parameters to avoid
            copying objects or to allow a function to modify an argument.</p>
        `,
        tip: "A reference is not a separate copy of the object it refers to.",
        example: `#include <iostream>

int main() {
    int number = 10;
    int& reference = number;

    reference = 30;

    std::cout << number;
    return 0;
}`,
        challengeTitle: "Modify Through a Reference",
        challenge: "Create an integer reference and change the original variable through it."
    },

    {
        category: "POINTERS & REFERENCES",
        title: "Dynamic Memory Basics",
        subtitle: "Understand storage with dynamic lifetimes.",
        explanation: `
            <p>C++ supports dynamically allocated objects, but manual
            memory management introduces responsibilities.</p>

            <p>Modern C++ generally favors automatic storage, standard
            containers, and smart pointers over raw owning pointers.</p>

            <p>When raw dynamic allocation is used, ownership and object
            lifetime must be handled correctly.</p>
        `,
        tip: "Prefer std::vector and smart pointers for most everyday C++ programs.",
        example: `#include <iostream>
#include <memory>

int main() {
    auto number = std::make_unique<int>(42);

    std::cout << *number;

    return 0;
}`,
        challengeTitle: "Use Managed Dynamic Storage",
        challenge: "Study how make_unique creates an object managed by a smart pointer."
    },


    // =====================================================
    // SECTION 8 — STANDARD LIBRARY AND FILES
    // =====================================================

    {
        category: "STANDARD LIBRARY & FILES",
        title: "The Standard Library",
        subtitle: "Use existing tools provided by C++.",
        explanation: `
            <p>The C++ standard library provides useful facilities for
            containers, strings, algorithms, input/output, and more.</p>

            <p>Using established library features can reduce the amount
            of code you need to write and maintain.</p>

            <p>Common headers include <code>&lt;string&gt;</code>,
            <code>&lt;vector&gt;</code>, <code>&lt;algorithm&gt;</code>,
            and <code>&lt;iostream&gt;</code>.</p>
        `,
        tip: "Before implementing a common data structure or algorithm yourself, check whether the standard library already provides it.",
        example: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {10, 20, 30};

    std::cout << numbers.size();

    return 0;
}`,
        challengeTitle: "Use a Standard Container",
        challenge: "Create a vector containing three integers and display its size."
    },

    {
        category: "STANDARD LIBRARY & FILES",
        title: "Working with Vectors",
        subtitle: "Use a flexible sequence container.",
        explanation: `
            <p><code>std::vector</code> is a standard library container
            that manages a sequence of elements.</p>

            <p>Unlike a built-in array, a vector can grow and shrink
            as elements are added or removed.</p>

            <p>Vectors provide operations such as <code>push_back()</code>,
            <code>size()</code>, and indexed access.</p>
        `,
        tip: "Use at() when you want indexed access with bounds checking.",
        example: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers;

    numbers.push_back(10);
    numbers.push_back(20);
    numbers.push_back(30);

    for (int number : numbers) {
        std::cout << number << "\\n";
    }

    return 0;
}`,
        challengeTitle: "Add Vector Elements",
        challenge: "Create a vector, add three values with push_back(), and print every value."
    },

    {
        category: "STANDARD LIBRARY & FILES",
        title: "Sorting and Algorithms",
        subtitle: "Use standard algorithms to process data.",
        explanation: `
            <p>The <code>&lt;algorithm&gt;</code> header provides functions
            for common operations such as sorting.</p>

            <p><code>std::sort()</code> can sort elements in a range
            when the elements can be ordered appropriately.</p>

            <p>Using a standard algorithm is often simpler and more
            reliable than writing a sorting algorithm for everyday tasks.</p>
        `,
        tip: "Understand which range an algorithm operates on and whether the range is valid.",
        example: `#include <algorithm>
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {5, 2, 8, 1};

    std::sort(numbers.begin(), numbers.end());

    for (int number : numbers) {
        std::cout << number << " ";
    }

    return 0;
}`,
        challengeTitle: "Sort a List",
        challenge: "Create a vector of integers and sort it in ascending order using std::sort()."
    },

    {
        category: "STANDARD LIBRARY & FILES",
        title: "Reading and Writing Files",
        subtitle: "Work with files using C++ streams.",
        explanation: `
            <p>The <code>&lt;fstream&gt;</code> header provides file stream
            types, including <code>std::ifstream</code>,
            <code>std::ofstream</code>, and <code>std::fstream</code>.</p>

            <p>An output file stream can write text to a file, while an
            input file stream can read data from a file.</p>

            <p>Always check whether opening a file succeeded. File
            availability depends on the environment where the program runs.</p>
        `,
        tip: "Check file operations for errors instead of assuming the file was opened successfully.",
        example: `#include <fstream>
#include <iostream>

int main() {
    std::ofstream file("lesson.txt");

    if (file) {
        file << "Learning C++ with ELOMCODE";
        std::cout << "File opened successfully";
    } else {
        std::cout << "Could not open file";
    }

    return 0;
}`,
        challengeTitle: "Write to a File",
        challenge: "Write a program that opens an output file, writes a message, and checks whether the file opened successfully."
    },


    // =====================================================
    // SECTION 9 — ADVANCED CONCEPTS AND PROJECTS
    // =====================================================

    {
        category: "ADVANCED CONCEPTS",
        title: "Exception Handling",
        subtitle: "Handle certain runtime error conditions.",
        explanation: `
            <p>C++ exception handling uses <code>try</code>,
            <code>throw</code>, and <code>catch</code>.</p>

            <p>Code inside a try block can throw an exception. A matching
            catch handler can respond to the exception.</p>

            <p>Exceptions are one tool for error handling; they do not
            replace all forms of error checking.</p>
        `,
        tip: "Handle errors at a level where you can take a useful action or provide meaningful information.",
        example: `#include <iostream>
#include <stdexcept>

int main() {
    try {
        throw std::runtime_error("Example error");
    } catch (const std::exception& error) {
        std::cout << error.what();
    }

    return 0;
}`,
        challengeTitle: "Catch an Exception",
        challenge: "Create a try block that throws a standard exception and a catch block that displays its message."
    },

    {
        category: "ADVANCED CONCEPTS",
        title: "Templates",
        subtitle: "Write reusable code that works with different types.",
        explanation: `
            <p>Templates allow functions and classes to be parameterized
            by types and other compile-time values.</p>

            <p>Function templates can work with multiple types when the
            operations used by the function are supported for those types.</p>

            <p>Templates are a major part of the C++ standard library.</p>
        `,
        tip: "Start with simple function templates before exploring more complex template techniques.",
        example: `#include <iostream>

template <typename T>
T larger(T a, T b) {
    return a > b ? a : b;
}

int main() {
    std::cout << larger(4, 9) << "\\n";
    std::cout << larger(2.5, 1.8);

    return 0;
}`,
        challengeTitle: "Write a Template Function",
        challenge: "Create a function template that returns the smaller of two values of the same type."
    },

    {
        category: "ADVANCED CONCEPTS",
        title: "Namespaces",
        subtitle: "Organize names and reduce naming conflicts.",
        explanation: `
            <p>A namespace groups declarations under a named scope.</p>

            <p>The standard library uses the <code>std</code> namespace.
            That is why many standard library names are written with
            the <code>std::</code> prefix.</p>

            <p>You can define your own namespace to organize your code.</p>
        `,
        tip: "In headers and larger programs, explicit namespace qualification often improves clarity.",
        example: `#include <iostream>

namespace School {
    void greet() {
        std::cout << "Welcome to ELOMCODE!";
    }
}

int main() {
    School::greet();
    return 0;
}`,
        challengeTitle: "Create a Namespace",
        challenge: "Create a namespace containing a function and call the function using the scope resolution operator."
    },

    {
        category: "ADVANCED CONCEPTS",
        title: "Lambda Expressions",
        subtitle: "Create small function objects where you need them.",
        explanation: `
            <p>A lambda expression creates a callable object directly
            where it is needed.</p>

            <p>Lambdas can capture variables from their surrounding
            scope and can be passed to algorithms.</p>

            <p>They are especially useful with standard library algorithms
            and event-style operations.</p>
        `,
        tip: "Understand what a lambda captures and whether it captures by value or by reference.",
        example: `#include <iostream>

int main() {
    auto greet = []() {
        std::cout << "Hello from a lambda!";
    };

    greet();
    return 0;
}`,
        challengeTitle: "Create a Lambda",
        challenge: "Write a lambda that displays a message and call it."
    },

    {
        category: "ADVANCED CONCEPTS",
        title: "Modern C++ and auto",
        subtitle: "Use type deduction where it improves readability.",
        explanation: `
            <p>The <code>auto</code> keyword allows the compiler to
            deduce a variable's type from its initializer.</p>

            <p>Type deduction can make code shorter, particularly when
            working with complex types or iterators.</p>

            <p>It is still important to understand the type being deduced.</p>
        `,
        tip: "Use auto when it makes the code clearer, not merely to hide important type information.",
        example: `#include <iostream>
#include <string>

int main() {
    auto age = 18;
    auto name = std::string("Elijah");

    std::cout << name << " " << age;

    return 0;
}`,
        challengeTitle: "Use Type Deduction",
        challenge: "Declare an integer and a string using auto, then display both values."
    },

    {
        category: "ADVANCED CONCEPTS",
        title: "Build a Student Record",
        subtitle: "Combine classes, strings, and output.",
        explanation: `
            <p>Now it is time to combine several concepts in a small
            project.</p>

            <p>A student record can store a student's name and score.
            A member function can display that information.</p>

            <p>This exercise combines classes, objects, data members,
            and output.</p>
        `,
        tip: "Build a small working version first. You can add validation and more features later.",
        example: `#include <iostream>
#include <string>

class Student {
public:
    std::string name;
    int score;

    void display() const {
        std::cout << "Student: " << name << "\\n";
        std::cout << "Score: " << score;
    }
};

int main() {
    Student student{"Elijah", 95};

    student.display();
    return 0;
}`,
        challengeTitle: "Create a Student Record",
        challenge: "Create a student record with a name and score, then display both values."
    },

    {
        category: "ADVANCED CONCEPTS",
        title: "Build a Simple Calculator",
        subtitle: "Combine input, decisions, and arithmetic.",
        explanation: `
            <p>A calculator is a useful beginner project because it
            combines several C++ concepts.</p>

            <p>You can read two numbers, read an operator, and use
            conditional statements to choose the appropriate calculation.</p>

            <p>A robust calculator should validate input and avoid
            division by zero.</p>
        `,
        tip: "Test normal cases and edge cases, including invalid input and division by zero.",
        example: `#include <iostream>

int main() {
    double a = 12;
    double b = 4;

    std::cout << "Sum: " << a + b << "\\n";
    std::cout << "Difference: " << a - b << "\\n";
    std::cout << "Product: " << a * b << "\\n";
    std::cout << "Quotient: " << a / b << "\\n";

    return 0;
}`,
        challengeTitle: "Extend the Calculator",
        challenge: "Build a calculator that accepts two values and displays their sum, difference, product, or quotient."
    },

    {
        category: "ADVANCED CONCEPTS",
        title: "Final Project: Your C++ Profile",
        subtitle: "Bring your C++ learning journey together.",
        explanation: `
            <p>Congratulations on reaching the final lesson of the
            ELOMCODE School C++ Masterclass!</p>

            <p>Your final project is to create a simple C++ profile
            program. It should display information about a learner and
            include a short message about their learning goals.</p>

            <p>As you work, review the concepts you have learned:
            variables, strings, output, functions, classes, conditions,
            loops, and standard library features.</p>

            <h4>Suggested project features</h4>

            <ul>
                <li>A learner's name.</li>
                <li>A course name.</li>
                <li>A learning goal.</li>
                <li>A function that displays the profile.</li>
                <li>Clear, well-formatted output.</li>
            </ul>

            <p>Completing the lessons is an important milestone.
            Continue practising and building projects to strengthen
            your programming skills.</p>
        `,
        tip: "Your best next step after this course is to build a project independently and keep practising.",
        example: `#include <iostream>
#include <string>

class LearnerProfile {
public:
    std::string name = "Elijah";
    std::string course = "C++ Programming";
    std::string goal = "Build useful software";

    void display() const {
        std::cout << "ELOMCODE SCHOOL\\n";
        std::cout << "Learner: " << name << "\\n";
        std::cout << "Course: " << course << "\\n";
        std::cout << "Goal: " << goal << "\\n";
        std::cout << "Learn. Code. Build. Become.\\n";
    }
};

int main() {
    LearnerProfile profile;
    profile.display();

    return 0;
}`,
        challengeTitle: "Build Your Final C++ Profile",
        challenge: "Create your own profile program using at least one class, several variables, and a member function."
    }

];


/* =========================================================
   3. DOM REFERENCES
========================================================= */

const $ = (id) => document.getElementById(id);

const elements = {
    particles: $("particles"),

    progressLessons: $("progressLessons"),
    topXP: $("topXP"),

    progressPercent: $("progressPercent"),
    overallProgressBar: $("overallProgressBar"),
    progressFill: $("progressFill"),
    progressMessage: $("progressMessage"),

    sidebarLessonCount: $("sidebarLessonCount"),
    lessonList: $("lessonList"),

    lessonCategory: $("lessonCategory"),
    lessonNumber: $("lessonNumber"),
    lessonTitle: $("lessonTitle"),
    lessonSubtitle: $("lessonSubtitle"),
    lessonExplanation: $("lessonExplanation"),
    lessonTip: $("lessonTip"),

    exampleCode: $("exampleCode"),
    runExampleButton: $("runExampleButton"),
    exampleOutputFrame: $("exampleOutputFrame"),

    codeEditor: $("codeEditor"),
    runButton: $("runButton"),
    resetButton: $("resetButton"),
    editorStatus: $("editorStatus"),
    outputStatus: $("outputStatus"),
    practiceOutputFrame: $("practiceOutputFrame"),

    challengeTitle: $("challengeTitle"),
    challengeText: $("challengeText"),

    previousButton: $("previousButton"),
    completeButton: $("completeButton"),
    completeButtonText: $("completeButtonText"),
    nextButton: $("nextButton"),
    lessonCompletionMessage: $("lessonCompletionMessage"),

    certificateStatus: $("certificateStatus"),
    certificateMessage: $("certificateMessage"),
    certificateButton: $("certificateButton"),
    certificateOpenButton: $("certificateOpenButton"),

    certificateModal: $("certificateModal"),
    certificateBackdrop: $("certificateBackdrop"),
    certificateModalTitle: $("certificateModalTitle"),
    certificateName: $("certificateName"),
    certificateDate: $("certificateDate"),
    certificateXP: $("certificateXP"),
    certificateClose: $("certificateClose"),
    certificatePrintButton: $("certificatePrintButton"),
    certificateCancelButton: $("certificateCancelButton"),

    liveAnnouncement: $("liveAnnouncement"),
    currentYear: $("currentYear")
};


/* =========================================================
   4. STATE AND STORAGE
========================================================= */

let currentLessonIndex = 0;
let previousFocusedElement = null;

let progress = {
    completedLessons: [],
    xp: 0,
    drafts: {},
    certificateName: "",
    lastUpdated: null
};


function loadProgress() {
    try {
        const saved = localStorage.getItem(COURSE_CONFIG.storageKey);

        if (!saved) {
            return;
        }

        const parsed = JSON.parse(saved);

        if (!parsed || typeof parsed !== "object") {
            return;
        }

        const completed = Array.isArray(parsed.completedLessons)
            ? parsed.completedLessons
            : [];

        progress.completedLessons = [
            ...new Set(
                completed.filter(
                    (index) =>
                        Number.isInteger(index) &&
                        index >= 0 &&
                        index < LESSONS.length
                )
            )
        ];

        progress.xp =
            progress.completedLessons.length *
            COURSE_CONFIG.xpPerLesson;

        progress.drafts =
            parsed.drafts &&
            typeof parsed.drafts === "object" &&
            !Array.isArray(parsed.drafts)
                ? parsed.drafts
                : {};

        progress.certificateName =
            typeof parsed.certificateName === "string"
                ? parsed.certificateName.slice(0, 80)
                : "";

        progress.lastUpdated =
            typeof parsed.lastUpdated === "string"
                ? parsed.lastUpdated
                : null;

    } catch (error) {
        console.warn("Could not load course progress.", error);
    }
}


function saveProgress() {
    progress.xp =
        progress.completedLessons.length *
        COURSE_CONFIG.xpPerLesson;

    progress.lastUpdated = new Date().toISOString();

    try {
        localStorage.setItem(
            COURSE_CONFIG.storageKey,
            JSON.stringify(progress)
        );
    } catch (error) {
        console.warn("Could not save course progress.", error);
        announce("Progress could not be saved in this browser.");
    }
}


function isLessonCompleted(index) {
    return progress.completedLessons.includes(index);
}


function isCourseCompleted() {
    return (
        progress.completedLessons.length === LESSONS.length
    );
}


/* =========================================================
   5. SAFE TEXT HELPERS
========================================================= */

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];
    });
}


function announce(message) {
    if (elements.liveAnnouncement) {
        elements.liveAnnouncement.textContent = message;
    }
}


function showMessage(message, isError = false) {
    if (!elements.lessonCompletionMessage) {
        return;
    }

    elements.lessonCompletionMessage.textContent = message;

    elements.lessonCompletionMessage.classList.toggle(
        "error",
        Boolean(isError)
    );
}


/* =========================================================
   6. BACKGROUND PARTICLES
========================================================= */

function createParticles() {
    const container = elements.particles;

    if (!container) {
        return;
    }

    container.replaceChildren();

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 35; i++) {
        const particle = document.createElement("span");

        particle.className = "ambient-particle";

        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        particle.style.animationDelay =
            `${Math.random() * 8}s`;

        particle.style.animationDuration =
            `${6 + Math.random() * 8}s`;

        fragment.appendChild(particle);
    }

    container.appendChild(fragment);
}


/* =========================================================
   7. VALIDATE LESSON DATA
========================================================= */

function validateLessons() {
    if (LESSONS.length !== COURSE_CONFIG.totalLessons) {
        console.error(
            `Expected ${COURSE_CONFIG.totalLessons} lessons, ` +
            `but found ${LESSONS.length}.`
        );
    }

    LESSONS.forEach((lesson, index) => {
        const required = [
            "category",
            "title",
            "subtitle",
            "explanation",
            "tip",
            "example",
            "challengeTitle",
            "challenge"
        ];

        for (const field of required) {
            if (!lesson[field]) {
                console.warn(
                    `Lesson ${index + 1} is missing ${field}.`
                );
            }
        }
    });
}


/* =========================================================
   8. GENERATE LESSON SIDEBAR
========================================================= */

function renderLessonList() {
    const container = elements.lessonList;

    if (!container) {
        return;
    }

    container.replaceChildren();

    let previousCategory = "";
    const fragment = document.createDocumentFragment();

    LESSONS.forEach((lesson, index) => {
        if (lesson.category !== previousCategory) {
            const heading = document.createElement("div");

            heading.className = "lesson-group-title";
            heading.textContent = lesson.category;

            fragment.appendChild(heading);
            previousCategory = lesson.category;
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

        const subtitle = document.createElement("small");
        subtitle.textContent = `Lesson ${index + 1}`;

        copy.append(title, subtitle);

        const check = document.createElement("span");
        check.className = "lesson-item-check";
        check.setAttribute("aria-hidden", "true");

        button.append(number, copy, check);

        button.addEventListener("click", () => {
            selectLesson(index);
        });

        fragment.appendChild(button);
    });

    container.appendChild(fragment);

    updateSidebarState();
}


function updateSidebarState() {
    if (!elements.lessonList) {
        return;
    }

    const buttons = elements.lessonList.querySelectorAll(
        ".lesson-item"
    );

    buttons.forEach((button) => {
        const index = Number(button.dataset.lessonIndex);

        const completed = isLessonCompleted(index);
        const active = index === currentLessonIndex;

        button.classList.toggle("active", active);
        button.classList.toggle("completed", completed);

        button.setAttribute(
            "aria-current",
            active ? "step" : "false"
        );

        const check = button.querySelector(".lesson-item-check");
        const number = button.querySelector(".lesson-item-number");

        if (check) {
            check.textContent = completed ? "✓" : "";
        }

        if (number) {
            number.textContent = completed
                ? "✓"
                : String(index + 1).padStart(2, "0");
        }
    });
}


/* =========================================================
   9. LESSON CONTENT
========================================================= */

function renderLesson(index) {
    const lesson = LESSONS[index];

    if (!lesson) {
        return;
    }

    currentLessonIndex = index;

    if (elements.lessonCategory) {
        elements.lessonCategory.textContent = lesson.category;
    }

    if (elements.lessonNumber) {
        elements.lessonNumber.textContent =
            `LESSON ${String(index + 1).padStart(2, "0")} ` +
            `OF ${LESSONS.length}`;
    }

    if (elements.lessonTitle) {
        elements.lessonTitle.textContent = lesson.title;
    }

    if (elements.lessonSubtitle) {
        elements.lessonSubtitle.textContent = lesson.subtitle;
    }

    if (elements.lessonExplanation) {
        elements.lessonExplanation.innerHTML = lesson.explanation;
    }

    if (elements.lessonTip) {
        elements.lessonTip.textContent = lesson.tip;
    }

    if (elements.exampleCode) {
        elements.exampleCode.textContent = lesson.example;
    }

    if (elements.challengeTitle) {
        elements.challengeTitle.textContent = lesson.challengeTitle;
    }

    if (elements.challengeText) {
        elements.challengeText.textContent = lesson.challenge;
    }

    if (elements.codeEditor) {
        const savedDraft = progress.drafts[index];

        elements.codeEditor.value =
            typeof savedDraft === "string"
                ? savedDraft
                : "";
    }

    if (elements.editorStatus) {
        elements.editorStatus.textContent = "READY TO CODE";
    }

    if (elements.outputStatus) {
        elements.outputStatus.textContent = "READY";
    }

    if (elements.exampleOutputFrame) {
        setOutput(
            elements.exampleOutputFrame,
            "Your example output will appear here."
        );
    }

    if (elements.practiceOutputFrame) {
        setOutput(
            elements.practiceOutputFrame,
            "Write your C++ program and select Run My Code."
        );
    }

    if (elements.previousButton) {
        elements.previousButton.disabled = index === 0;
    }

    if (elements.nextButton) {
        elements.nextButton.disabled =
            index === LESSONS.length - 1;
    }

    const completed = isLessonCompleted(index);

    if (elements.completeButton) {
        elements.completeButton.classList.toggle(
            "completed",
            completed
        );
    }

    if (elements.completeButtonText) {
        elements.completeButtonText.textContent = completed
            ? "✓ Lesson Completed"
            : "✓ Mark Lesson Complete";
    }

    if (elements.completeButton) {
        elements.completeButton.disabled = completed;
    }

    if (elements.lessonCompletionMessage) {
        elements.lessonCompletionMessage.textContent = "";
        elements.lessonCompletionMessage.classList.remove("error");
    }

    updateSidebarState();
    updateProgressUI();
    updateCertificateUI();

    announce(`Lesson ${index + 1}: ${lesson.title}`);
}


function selectLesson(index) {
    if (!Number.isInteger(index)) {
        return;
    }

    if (index < 0 || index >= LESSONS.length) {
        return;
    }

    saveCurrentDraft();

    renderLesson(index);

    const main = document.querySelector(".lesson-heading-card");

    if (main && window.matchMedia("(max-width: 850px)").matches) {
        main.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/* =========================================================
   10. PROGRESS DISPLAY
========================================================= */

function updateProgressUI() {
    const completedCount = progress.completedLessons.length;

    const percent = LESSONS.length
        ? Math.round((completedCount / LESSONS.length) * 100)
        : 0;

    progress.xp = completedCount * COURSE_CONFIG.xpPerLesson;

    if (elements.progressLessons) {
        elements.progressLessons.textContent =
            `${completedCount}/${LESSONS.length}`;
    }

    if (elements.topXP) {
        elements.topXP.textContent = `${progress.xp} XP`;
    }

    if (elements.progressPercent) {
        elements.progressPercent.textContent = `${percent}%`;
    }

    if (elements.overallProgressBar) {
        elements.overallProgressBar.style.width = `${percent}%`;
    }

    if (elements.progressFill) {
        elements.progressFill.style.width = `${percent}%`;
    }

    if (elements.progressMessage) {
        if (percent === 100) {
            elements.progressMessage.textContent =
                "Amazing! You have completed every lesson.";
        } else if (completedCount === 0) {
            elements.progressMessage.textContent =
                "Your C++ journey starts here. Let's begin!";
        } else {
            elements.progressMessage.textContent =
                `${completedCount} lesson(s) completed. ` +
                `${LESSONS.length - completedCount} to go!`;
        }
    }

    if (elements.sidebarLessonCount) {
        elements.sidebarLessonCount.textContent =
            `${LESSONS.length} Lessons`;
    }
}


function saveCurrentDraft() {
    if (!elements.codeEditor) {
        return;
    }

    progress.drafts[currentLessonIndex] =
        elements.codeEditor.value;

    saveProgress();
}


/* =========================================================
   11. COMPLETE A LESSON
========================================================= */

function completeCurrentLesson() {
    if (isLessonCompleted(currentLessonIndex)) {
        showMessage("You have already completed this lesson.");
        return;
    }

    progress.completedLessons.push(currentLessonIndex);

    progress.completedLessons = [
        ...new Set(progress.completedLessons)
    ];

    progress.xp =
        progress.completedLessons.length *
        COURSE_CONFIG.xpPerLesson;

    saveProgress();

    updateSidebarState();
    updateProgressUI();
    updateCertificateUI();

    if (elements.completeButton) {
        elements.completeButton.classList.add("completed");
        elements.completeButton.disabled = true;
    }

    if (elements.completeButtonText) {
        elements.completeButtonText.textContent =
            "✓ Lesson Completed";
    }

    const completedCount = progress.completedLessons.length;

    if (isCourseCompleted()) {
        showMessage(
            "Congratulations! You have completed all 45 C++ lessons. " +
            "Your certificate is now unlocked!"
        );
    } else {
        showMessage(
            `Great work! Lesson ${currentLessonIndex + 1} completed. ` +
            `You earned ${COURSE_CONFIG.xpPerLesson} XP. ` +
            `${completedCount}/${LESSONS.length} lessons completed.`
        );
    }

    announce("Lesson completed. Experience points updated.");
}


/* =========================================================
   12. OUTPUT FRAME
========================================================= */

function setOutput(frame, message, isError = false) {
    if (!frame) {
        return;
    }

    const safeMessage = escapeHTML(message);

    const textColor = isError ? "#ff8798" : "#d7e8ff";

    frame.srcdoc = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
                * {
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                    padding: 13px 15px;
                    background: #08172b;
                    color: ${textColor};
                    font-family: Consolas, "Courier New", monospace;
                    font-size: 12px;
                    line-height: 1.8;
                    overflow-wrap: anywhere;
                    white-space: pre-wrap;
                }
            </style>
        </head>
        <body>${safeMessage}</body>
        </html>
    `;
}


/* =========================================================
   13. COMPILER SERVICE
========================================================= */

/*
   This course uses the public Piston API for demonstration.

   External compiler services may change availability, request
   limits, runtime versions, or access policies.

   Do not send secrets or sensitive personal information.
*/


async function compileAndRunCpp(sourceCode, frame, statusElement) {
    if (!sourceCode.trim()) {
        setOutput(
            frame,
            "Your editor is empty. Write some C++ code first.",
            true
        );

        if (statusElement) {
            statusElement.textContent = "EMPTY";
        }

        return;
    }

    if (statusElement) {
        statusElement.textContent = "COMPILING...";
    }

    setOutput(frame, "Connecting to the C++ compiler...");

    const controller = new AbortController();

    const timeout = setTimeout(() => {
        controller.abort();
    }, 25000);

    try {
        const response = await fetch(
            COURSE_CONFIG.compilerEndpoint,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                signal: controller.signal,

                body: JSON.stringify({
                    language: "cpp",
                    version: "10.2.0",
                    files: [
                        {
                            name: "main.cpp",
                            content: sourceCode
                        }
                    ],
                    stdin: "",
                    args: [],
                    compile_timeout: 10000,
                    run_timeout: 5000,
                    compile_memory_limit: -1,
                    run_memory_limit: -1
                })
            }
        );

        if (!response.ok) {
            throw new Error(
                `Compiler service returned HTTP ${response.status}.`
            );
        }

        const result = await response.json();

        const compileOutput =
            result.compile &&
            (
                result.compile.stderr ||
                result.compile.output
            )
                ? (
                    result.compile.stderr ||
                    result.compile.output
                )
                : "";

        if (result.compile && result.compile.code !== 0) {
            const message = compileOutput ||
                "Compilation failed. Check your C++ syntax.";

            setOutput(frame, message, true);

            if (statusElement) {
                statusElement.textContent = "COMPILE ERROR";
            }

            return;
        }

        const run = result.run || {};

        const stdout = run.stdout || "";
        const stderr = run.stderr || "";

        let output = stdout;

        if (stderr) {
            output +=
                (output ? "\n\n" : "") +
                "Program error output:\n" +
                stderr;
        }

        if (!output.trim()) {
            output = "Program finished without displaying output.";
        }

        if (typeof run.code === "number" && run.code !== 0) {
            output += `\n\nProgram exit code: ${run.code}`;
        }

        setOutput(
            frame,
            output,
            Boolean(stderr || run.code)
        );

        if (statusElement) {
            statusElement.textContent =
                run.code === 0 ? "FINISHED" : "CHECK OUTPUT";
        }

    } catch (error) {
        let message;

        if (error.name === "AbortError") {
            message =
                "The compiler request took too long. Please try again.";
        } else {
            message =
                "Could not reach the online C++ compiler.\n\n" +
                "Check your internet connection and try again.\n\n" +
                "If the service is unavailable, try again later.\n\n" +
                "Details: " + error.message;
        }

        setOutput(frame, message, true);

        if (statusElement) {
            statusElement.textContent = "UNAVAILABLE";
        }

    } finally {
        clearTimeout(timeout);
    }
}


/* =========================================================
   14. RUN EXAMPLE
========================================================= */

async function runExample() {
    const lesson = LESSONS[currentLessonIndex];

    if (!lesson) {
        return;
    }

    await compileAndRunCpp(
        lesson.example,
        elements.exampleOutputFrame,
        elements.outputStatus
    );
}


/* =========================================================
   15. RUN PRACTICE CODE
========================================================= */

async function runPracticeCode() {
    if (!elements.codeEditor) {
        return;
    }

    saveCurrentDraft();

    await compileAndRunCpp(
        elements.codeEditor.value,
        elements.practiceOutputFrame,
        elements.editorStatus
    );
}


/* =========================================================
   16. CLEAR PRACTICE EDITOR
========================================================= */

function clearPracticeEditor() {
    if (!elements.codeEditor) {
        return;
    }

    const shouldClear = window.confirm(
        "Clear the code in your practice editor?"
    );

    if (!shouldClear) {
        return;
    }

    elements.codeEditor.value = "";

    progress.drafts[currentLessonIndex] = "";

    saveProgress();

    if (elements.editorStatus) {
        elements.editorStatus.textContent = "READY TO CODE";
    }

    setOutput(
        elements.practiceOutputFrame,
        "Editor cleared. Write your C++ program here."
    );

    announce("Practice editor cleared.");
}


/* =========================================================
   17. CERTIFICATE SYSTEM
========================================================= */

function updateCertificateUI() {
    const unlocked = isCourseCompleted();

    if (elements.certificateStatus) {
        elements.certificateStatus.classList.toggle(
            "unlocked",
            unlocked
        );

        elements.certificateStatus.textContent = unlocked
            ? "✓ Certificate Unlocked"
            : "🔒 Certificate Locked";
    }

    if (elements.certificateMessage) {
        elements.certificateMessage.textContent = unlocked
            ? "You have completed all 45 lessons! You can now open your certificate."
            : `Complete all ${LESSONS.length} lessons to unlock your C++ Masterclass certificate.`;
    }

    if (elements.certificateButton) {
        elements.certificateButton.disabled = !unlocked;
    }

    if (elements.certificateOpenButton) {
        elements.certificateOpenButton.hidden = !unlocked;
    }

    if (elements.certificateXP) {
        elements.certificateXP.textContent =
            `${progress.xp} XP`;
    }

    if (elements.certificateName) {
        elements.certificateName.value =
            progress.certificateName || "";
    }
}


function openCertificate() {
    if (!isCourseCompleted()) {
        showMessage(
            "Complete every lesson before opening your certificate."
        );

        return;
    }

    if (!elements.certificateModal) {
        return;
    }

    previousFocusedElement = document.activeElement;

    if (elements.certificateName) {
        elements.certificateName.value =
            progress.certificateName || "";

        elements.certificateName.maxLength = 80;
    }

    if (elements.certificateDate) {
        elements.certificateDate.textContent =
            new Date().toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric"
            });
    }

    if (elements.certificateXP) {
        elements.certificateXP.textContent =
            `${progress.xp} XP`;
    }

    elements.certificateModal.classList.add("open");

    elements.certificateModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";

    if (elements.certificateName) {
        elements.certificateName.focus();
    }
}


function closeCertificate() {
    if (!elements.certificateModal) {
        return;
    }

    elements.certificateModal.classList.remove("open");

    elements.certificateModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

    if (
        previousFocusedElement &&
        typeof previousFocusedElement.focus === "function"
    ) {
        previousFocusedElement.focus();
    }
}


function saveCertificateName() {
    if (!elements.certificateName) {
        return false;
    }

    const name = elements.certificateName.value.trim();

    if (!name) {
        window.alert(
            "Please enter your full name before printing the certificate."
        );

        elements.certificateName.focus();

        return false;
    }

    if (name.length > 80) {
        window.alert("Please use a shorter name.");
        return false;
    }

    progress.certificateName = name;

    saveProgress();

    return true;
}


function printCertificate() {
    if (!isCourseCompleted()) {
        window.alert(
            "Complete all course lessons before printing the certificate."
        );

        return;
    }

    if (!saveCertificateName()) {
        return;
    }

    updateCertificateUI();

    window.print();
}


/* =========================================================
   18. NAVIGATION EVENTS
========================================================= */

function goToPreviousLesson() {
    if (currentLessonIndex > 0) {
        selectLesson(currentLessonIndex - 1);
    }
}


function goToNextLesson() {
    if (currentLessonIndex < LESSONS.length - 1) {
        selectLesson(currentLessonIndex + 1);
    }
}


/* =========================================================
   19. KEYBOARD SHORTCUTS
========================================================= */

function handleEditorKeyboard(event) {
    if (!elements.codeEditor) {
        return;
    }

    if (event.key === "Tab") {
        event.preventDefault();

        const textarea = elements.codeEditor;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        textarea.setRangeText(
            "    ",
            start,
            end,
            "end"
        );

        saveCurrentDraft();
    }

    if (
        event.key === "Enter" &&
        (event.ctrlKey || event.metaKey)
    ) {
        event.preventDefault();
        runPracticeCode();
    }
}


/* =========================================================
   20. CONNECT ALL EVENT LISTENERS
========================================================= */

function connectEvents() {
    if (elements.previousButton) {
        elements.previousButton.addEventListener(
            "click",
            goToPreviousLesson
        );
    }

    if (elements.nextButton) {
        elements.nextButton.addEventListener(
            "click",
            goToNextLesson
        );
    }

    if (elements.completeButton) {
        elements.completeButton.addEventListener(
            "click",
            completeCurrentLesson
        );
    }

    if (elements.runExampleButton) {
        elements.runExampleButton.addEventListener(
            "click",
            runExample
        );
    }

    if (elements.runButton) {
        elements.runButton.addEventListener(
            "click",
            runPracticeCode
        );
    }

    if (elements.resetButton) {
        elements.resetButton.addEventListener(
            "click",
            clearPracticeEditor
        );
    }

    if (elements.codeEditor) {
        elements.codeEditor.addEventListener(
            "input",
            () => {
                progress.drafts[currentLessonIndex] =
                    elements.codeEditor.value;

                saveProgress();
            }
        );

        elements.codeEditor.addEventListener(
            "keydown",
            handleEditorKeyboard
        );
    }

    if (elements.certificateButton) {
        elements.certificateButton.addEventListener(
            "click",
            openCertificate
        );
    }

    if (elements.certificateOpenButton) {
        elements.certificateOpenButton.addEventListener(
            "click",
            openCertificate
        );
    }

    if (elements.certificateClose) {
        elements.certificateClose.addEventListener(
            "click",
            closeCertificate
        );
    }

    if (elements.certificateCancelButton) {
        elements.certificateCancelButton.addEventListener(
            "click",
            closeCertificate
        );
    }

    if (elements.certificateBackdrop) {
        elements.certificateBackdrop.addEventListener(
            "click",
            closeCertificate
        );
    }

    if (elements.certificatePrintButton) {
        elements.certificatePrintButton.addEventListener(
            "click",
            printCertificate
        );
    }

    if (elements.certificateName) {
        elements.certificateName.addEventListener(
            "input",
            () => {
                progress.certificateName =
                    elements.certificateName.value.slice(0, 80);

                saveProgress();
            }
        );
    }

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            elements.certificateModal &&
            elements.certificateModal.classList.contains("open")
        ) {
            closeCertificate();
        }
    });
}


/* =========================================================
   21. INITIALIZE COURSE
========================================================= */

function initializeCourse() {
    loadProgress();

    validateLessons();

    createParticles();

    if (elements.currentYear) {
        elements.currentYear.textContent =
            String(new Date().getFullYear());
    }

    if (elements.certificateModal) {
        elements.certificateModal.setAttribute(
            "aria-hidden",
            "true"
        );
    }

    connectEvents();

    renderLessonList();

    renderLesson(0);

    updateProgressUI();

    updateCertificateUI();

    setOutput(
        elements.exampleOutputFrame,
        "Select Run Example to compile and run the lesson example."
    );

    setOutput(
        elements.practiceOutputFrame,
        "Write your C++ code in the editor, then select Run My Code."
    );

    console.log(
        "ELOMCODE C++ Masterclass initialized.",
        `${LESSONS.length} lessons available.`
    );
}


if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializeCourse,
        { once: true }
    );
} else {
    initializeCourse();
}