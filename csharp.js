/* =========================================================
   ELOMCODE SCHOOL — C# PROGRAMMING MASTERCLASS
   Complete Learning Engine
   Built by Elijah Opomulero

   Features:
   - 40 structured C# lessons
   - Detailed lesson explanations
   - Code examples and expected outputs
   - Practice editor
   - Online C# compilation
   - Lesson challenges and hints
   - XP and lesson completion
   - Local progress storage
   - Lesson search and filters
   - Certificate generation and printing
   - Accessible notifications
========================================================= */

"use strict";


/* =========================================================
   1. CONFIGURATION
========================================================= */

const CSharpCourse = {
    name: "C# Programming Masterclass",
    language: "csharp",
    compilerVersion: "6.12.0",
    compilerEndpoint: "https://emkc.org/api/v2/piston",
    storageKey: "elomcode_csharp_course_progress",
    editorKey: "elomcode_csharp_editor",
    learnerKey: "elomcode_csharp_learner_name",
    totalXPPerLesson: 10
};


const $ = id => document.getElementById(id);


const courseState = {
    currentLesson: 0,
    completedLessons: [],
    xp: 0,
    filter: "all",
    search: "",
    isRunning: false,
    compilerAvailable: null,
    challengeCompleted: [],
    editorModified: false,
    lessonAnswers: {},
    learnerName: "",
    compilerChecked: false
};


const dom = {};


/* =========================================================
   2. LESSON CONTENT
========================================================= */

const lessons = [

    // LESSON 1
    {
        category: "INTRODUCTION",
        title: "Welcome to C# Programming",
        subtitle: "Understand C# and write your first program.",

        explanation: `
            <p>
                C# (pronounced <strong>C-sharp</strong>) is a modern,
                general-purpose programming language developed by Microsoft.
                It is commonly used to build desktop applications, web
                applications, games, cloud services, and many other types
                of software.
            </p>

            <p>
                C# is a strongly typed language. This means that values have
                types, such as integers, decimal numbers, strings, and
                Boolean values. The compiler helps identify many mistakes
                before a program runs.
            </p>

            <p>
                In this course, you will learn how to write instructions,
                store information, make decisions, repeat operations,
                organize code into methods, and create your own classes
                and objects.
            </p>

            <p>
                A C# program can begin with a class containing a
                <code>Main()</code> method. The <code>Main()</code>
                method is a traditional entry point where program
                execution begins.
            </p>
        `,

        tip: "Do not rush. Learn what each line does instead of memorizing code.",

        exampleDescription: "This program displays a greeting in the console.",

        code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}`,

        output: "Hello, World!",

        exampleExplanation:
            "using System makes the Console class available. Main() is the entry point, and Console.WriteLine() prints text followed by a new line.",

        starter: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello from ELOMCODE School!");
    }
}`,

        challengeTitle: "Print a Welcome Message",

        challenge:
            "Write a C# statement that displays Welcome to C#! on the console.",

        hint:
            "Use Console.WriteLine(\"Welcome to C#!\"); inside Main().",

        checks: ["Welcome to C#!"]
    },


    // LESSON 2
    {
        category: "FUNDAMENTALS",
        title: "Understanding C# Syntax",
        subtitle: "Learn the basic rules that make C# code work.",

        explanation: `
            <p>
                Syntax refers to the rules used to write valid code.
                Just as natural languages have grammar, programming
                languages have rules that the compiler expects you to follow.
            </p>

            <p>
                In C#, statements commonly end with a semicolon
                (<code>;</code>). Curly braces (<code>{ }</code>)
                group statements into classes, methods, and other
                code blocks.
            </p>

            <p>
                C# is case-sensitive. For example, <code>Console</code>
                and <code>console</code> are not the same identifier.
                Keywords such as <code>class</code> and
                <code>static</code> have special meanings.
            </p>

            <p>
                Indentation makes code easier to read, but spaces
                and indentation do not usually determine the meaning
                of ordinary C# statements.
            </p>
        `,

        tip: "When you see a syntax error, check missing semicolons, braces, spelling, and capitalization.",

        exampleDescription: "Observe the class, method, braces, and semicolons.",

        code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("First statement");
        Console.WriteLine("Second statement");
    }
}`,

        output: "First statement\nSecond statement",

        exampleExplanation:
            "Each WriteLine statement ends with a semicolon. The braces show which statements belong inside Main().",

        starter: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Learn");
        Console.WriteLine("Code");
        Console.WriteLine("Build");
    }
}`,

        challengeTitle: "Write Two Statements",

        challenge:
            "Write two Console.WriteLine statements that display Learn C# and Keep Practising on separate lines.",

        hint:
            "Use one Console.WriteLine statement for each message.",

        checks: ["Learn C#", "Keep Practising"]
    },


    // LESSON 3
    {
        category: "OUTPUT",
        title: "Displaying Output",
        subtitle: "Use Console.WriteLine() and Console.Write().",

        explanation: `
            <p>
                Output is information a program sends to the user.
                In a console application, the <code>Console</code>
                class provides methods for displaying information.
            </p>

            <p>
                <code>Console.WriteLine()</code> displays text and
                moves to the next line. <code>Console.Write()</code>
                displays text without automatically moving to the next line.
            </p>

            <p>
                You can display words, numbers, and the results of
                expressions. Text must be enclosed in quotation marks,
                while numeric values can be written without quotation marks.
            </p>
        `,

        tip: "Use WriteLine when you want each message to appear on its own line.",

        exampleDescription: "Compare WriteLine and Write.",

        code: `using System;

class Program
{
    static void Main()
    {
        Console.Write("Hello ");
        Console.WriteLine("Elijah!");
        Console.WriteLine(25);
    }
}`,

        output: "Hello Elijah!\n25",

        exampleExplanation:
            "Write() keeps the cursor on the same line. WriteLine() adds a line break after displaying its value.",

        starter: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("My name is Elijah.");
        Console.WriteLine("I am learning C#.");
    }
}`,

        challengeTitle: "Display Three Lines",

        challenge:
            "Create a program that displays your name, your school, and your favourite programming language on three separate lines.",

        hint:
            "Write three Console.WriteLine statements.",

        checks: ["Console.WriteLine"]
    },


    // LESSON 4
    {
        category: "COMMENTS",
        title: "Comments in C#",
        subtitle: "Write notes that explain your code.",

        explanation: `
            <p>
                Comments are notes written inside source code.
                The compiler ignores ordinary comments, so they do
                not become executable instructions.
            </p>

            <p>
                A single-line comment begins with <code>//</code>.
                Everything after those characters on the same line
                is treated as a comment.
            </p>

            <p>
                A multiline comment begins with <code>/*</code>
                and ends with <code>*/</code>. Multiline comments
                can span several lines.
            </p>

            <p>
                Good comments explain why something is done when
                the reason is not obvious. Avoid adding comments
                that merely repeat what the code already clearly says.
            </p>
        `,

        tip: "Write comments that help another person understand your reasoning.",

        exampleDescription: "The comment is ignored while the statement executes.",

        code: `using System;

class Program
{
    static void Main()
    {
        // Display a welcome message
        Console.WriteLine("Welcome!");

        /*
           This is a multiline comment.
           It can contain several lines.
        */
        Console.WriteLine("Keep learning.");
    }
}`,

        output: "Welcome!\nKeep learning.",

        exampleExplanation:
            "Neither comment appears in the program output. Only the two WriteLine statements execute.",

        starter: `using System;

class Program
{
    static void Main()
    {
        // Write a greeting below
        Console.WriteLine("Hello!");

    }
}`,

        challengeTitle: "Add a Useful Comment",

        challenge:
            "Write a program with one single-line comment and a statement that displays Learning C# is exciting.",

        hint:
            "Begin the comment with // and put Console.WriteLine below it.",

        checks: ["//", "Console.WriteLine"]
    },


    // LESSON 5
    {
        category: "VARIABLES",
        title: "Variables and Data Storage",
        subtitle: "Store information for use in your program.",

        explanation: `
            <p>
                A variable is a named storage location used to hold
                a value. You can use variables to store a person's
                name, age, score, price, or almost any other kind
                of information.
            </p>

            <p>
                A variable declaration normally specifies a type
                followed by a name. For example,
                <code>int age = 17;</code> creates an integer
                variable named age and gives it the value 17.
            </p>

            <p>
                The equals sign is the assignment operator. It
                assigns a value to a variable. A variable can
                receive a new value later in the program.
            </p>

            <p>
                Choose descriptive variable names. Names such as
                <code>studentName</code> and <code>totalScore</code>
                make your program easier to understand.
            </p>
        `,

        tip: "Give variables meaningful names and choose a data type that suits the value.",

        exampleDescription: "Declare variables and display their values.",

        code: `using System;

class Program
{
    static void Main()
    {
        string name = "Elijah";
        int age = 17;

        Console.WriteLine(name);
        Console.WriteLine(age);
    }
}`,

        output: "Elijah\n17",

        exampleExplanation:
            "The string variable stores text, while the int variable stores a whole number.",

        starter: `using System;

class Program
{
    static void Main()
    {
        string school = "ELOMCODE School";
        int lessons = 40;

        Console.WriteLine(school);
        Console.WriteLine(lessons);
    }
}`,

        challengeTitle: "Create Two Variables",

        challenge:
            "Create a string variable called favouriteLanguage and an integer variable called numberOfLessons. Give them values and print both.",

        hint:
            "Use string for text and int for a whole number.",

        checks: ["string", "int", "Console.WriteLine"]
    },


    // LESSON 6
    {
        category: "DATA TYPES",
        title: "C# Data Types",
        subtitle: "Choose suitable types for different values.",

        explanation: `
            <p>
                A data type determines what kind of value a variable
                can represent and which operations can be performed on it.
            </p>

            <p>
                Common C# types include <code>int</code> for whole
                numbers, <code>double</code> for floating-point numbers,
                <code>decimal</code> for decimal calculations that need
                high decimal precision, <code>string</code> for text,
                <code>char</code> for a single UTF-16 character, and
                <code>bool</code> for true or false.
            </p>

            <p>
                For example, a person's age could be stored in an int,
                a product price in a decimal, a person's name in a string,
                and whether a task is completed in a bool.
            </p>

            <p>
                Choosing a suitable type helps your program represent
                information correctly and prevents many unintended operations.
            </p>
        `,

        tip: "Use decimal for many financial values and bool for true-or-false conditions.",

        exampleDescription: "Each variable stores a different type of value.",

        code: `using System;

class Program
{
    static void Main()
    {
        int age = 17;
        double temperature = 36.5;
        decimal price = 1500.50m;
        char grade = 'A';
        string name = "Elijah";
        bool isLearning = true;

        Console.WriteLine(age);
        Console.WriteLine(temperature);
        Console.WriteLine(price);
        Console.WriteLine(grade);
        Console.WriteLine(name);
        Console.WriteLine(isLearning);
    }
}`,

        output: "17\n36.5\n1500.50\nA\nElijah\nTrue",

        exampleExplanation:
            "Notice the m suffix on the decimal value and the single quotation marks around the char value.",

        starter: `using System;

class Program
{
    static void Main()
    {
        int score = 95;
        string subject = "Computer Science";
        bool passed = true;

        Console.WriteLine(score);
        Console.WriteLine(subject);
        Console.WriteLine(passed);
    }
}`,

        challengeTitle: "Choose the Correct Types",

        challenge:
            "Declare an integer for a score, a string for a student's name, and a Boolean variable indicating whether the student passed.",

        hint:
            "Use int, string, and bool respectively.",

        checks: ["int", "string", "bool"]
    },


    // LESSON 7
    {
        category: "CONSTANTS",
        title: "Constants and Readonly Values",
        subtitle: "Understand values that should not change.",

        explanation: `
            <p>
                Sometimes a value should remain fixed throughout
                a program. C# provides the <code>const</code> keyword
                for constants whose values can be determined at compile time.
            </p>

            <p>
                A constant must be assigned a value when it is declared.
                You cannot later assign a different value to that constant.
            </p>

            <p>
                Constants are useful for fixed values such as a conversion
                factor or a known limit. By convention, some C# projects
                use uppercase names for constants, although that is not
                a requirement of the language.
            </p>

            <p>
                The <code>readonly</code> modifier serves a different purpose:
                a readonly field can be assigned during declaration or
                in an appropriate constructor, depending on its context.
            </p>
        `,

        tip: "Use const for values that truly cannot change and are known at compile time.",

        exampleDescription: "The constant is used in a calculation.",

        code: `using System;

class Program
{
    static void Main()
    {
        const double Pi = 3.14159;
        double radius = 2;

        double area = Pi * radius * radius;

        Console.WriteLine(area);
    }
}`,

        output: "12.56636",

        exampleExplanation:
            "Pi is declared with const, so the program cannot assign it a new value later.",

        starter: `using System;

class Program
{
    static void Main()
    {
        const int DaysInWeek = 7;

        Console.WriteLine(DaysInWeek);
    }
}`,

        challengeTitle: "Declare a Constant",

        challenge:
            "Declare a constant named DaysInYear with the value 365 and print it.",

        hint:
            "Write const int DaysInYear = 365; inside Main().",

        checks: ["const", "DaysInYear", "365"]
    },


    // LESSON 8
    {
        category: "INPUT",
        title: "Reading User Input",
        subtitle: "Allow people to enter information.",

        explanation: `
            <p>
                Input allows a program to receive information from a user.
                In console applications, <code>Console.ReadLine()</code>
                reads a line of input and returns it as text.
            </p>

            <p>
                If you need a number, the text must be converted into
                a numeric type. Methods such as <code>int.TryParse()</code>
                help check whether the entered text can be interpreted
                as an integer.
            </p>

            <p>
                TryParse is often preferable to direct conversion when
                input may be invalid because it allows you to handle
                the situation without an ordinary parsing exception.
            </p>

            <p>
                An online compiler may supply input through a separate
                standard-input field. If the playground does not expose
                that field, use a program with predefined values for
                your first experiments.
            </p>
        `,

        tip: "Validate user input instead of assuming that every entry is correct.",

        exampleDescription: "Read a line of text from the console.",

        code: `using System;

class Program
{
    static void Main()
    {
        Console.Write("Enter your name: ");
        string name = Console.ReadLine();

        Console.WriteLine("Welcome, " + name + "!");
    }
}`,

        output: "Enter your name: Elijah\nWelcome, Elijah!",

        exampleExplanation:
            "The displayed output assumes the user entered Elijah. The actual name depends on the supplied input.",

        starter: `using System;

class Program
{
    static void Main()
    {
        string city = "Osogbo";

        Console.WriteLine("I live in " + city);
    }
}`,

        challengeTitle: "Read a Name",

        challenge:
            "Write a program that uses Console.ReadLine() to receive a name and then displays a greeting using that name.",

        hint:
            "Store the result of Console.ReadLine() in a string variable.",

        checks: ["Console.ReadLine", "Console.WriteLine"]
    },


    // LESSON 9
    {
        category: "OPERATORS",
        title: "Arithmetic Operators",
        subtitle: "Perform calculations with numbers.",

        explanation: `
            <p>
                Arithmetic operators let you calculate values.
                C# supports addition (<code>+</code>), subtraction
                (<code>-</code>), multiplication (<code>*</code>),
                division (<code>/</code>), and remainder (<code>%</code>).
            </p>

            <p>
                The remainder operator returns what remains after
                division. For example, <code>10 % 3</code> evaluates to 1.
            </p>

            <p>
                Integer division discards the fractional part of the
                result. For example, <code>7 / 2</code> using two
                integers evaluates to 3. If you need a fractional result,
                use a floating-point or decimal operand.
            </p>

            <p>
                Parentheses help control the order of calculations.
            </p>
        `,

        tip: "Pay attention to data types when dividing numbers.",

        exampleDescription: "Calculate several arithmetic expressions.",

        code: `using System;

class Program
{
    static void Main()
    {
        int a = 10;
        int b = 3;

        Console.WriteLine(a + b);
        Console.WriteLine(a - b);
        Console.WriteLine(a * b);
        Console.WriteLine(a / b);
        Console.WriteLine(a % b);
    }
}`,

        output: "13\n7\n30\n3\n1",

        exampleExplanation:
            "Because a and b are integers, a / b produces the integer result 3.",

        starter: `using System;

class Program
{
    static void Main()
    {
        int first = 20;
        int second = 5;

        Console.WriteLine(first + second);
        Console.WriteLine(first * second);
    }
}`,

        challengeTitle: "Calculate a Total",

        challenge:
            "Create two integer variables, add them together, and display the result. Also display their product.",

        hint:
            "Use + for addition and * for multiplication.",

        checks: ["+", "*", "Console.WriteLine"]
    },


    // LESSON 10
    {
        category: "OPERATORS",
        title: "Comparison Operators",
        subtitle: "Compare values and produce Boolean results.",

        explanation: `
            <p>
                Comparison operators compare two values and produce
                either <code>true</code> or <code>false</code>.
                These results are Boolean values.
            </p>

            <p>
                The equality operator is <code>==</code>, while
                <code>!=</code> means not equal. The operators
                <code>&gt;</code>, <code>&lt;</code>,
                <code>&gt;=</code>, and <code>&lt;=</code>
                mean greater than, less than, greater than or equal to,
                and less than or equal to.
            </p>

            <p>
                Do not confuse <code>=</code>, which assigns a value,
                with <code>==</code>, which compares two values.
            </p>
        `,

        tip: "Remember: one equals sign assigns; two equals signs compare.",

        exampleDescription: "Each comparison produces a Boolean result.",

        code: `using System;

class Program
{
    static void Main()
    {
        int a = 10;
        int b = 5;

        Console.WriteLine(a > b);
        Console.WriteLine(a == b);
        Console.WriteLine(a != b);
        Console.WriteLine(a <= b);
    }
}`,

        output: "True\nFalse\nTrue\nFalse",

        exampleExplanation:
            "The comparisons evaluate to Boolean values, displayed as True or False.",

        starter: `using System;

class Program
{
    static void Main()
    {
        int score = 85;

        Console.WriteLine(score >= 50);
        Console.WriteLine(score == 100);
    }
}`,

        challengeTitle: "Compare Two Values",

        challenge:
            "Create two integer variables and use comparison operators to check whether the first is greater than the second and whether they are equal.",

        hint:
            "Use > and == inside Console.WriteLine().",

        checks: [">", "=="]
    },


    // LESSON 11
    {
        category: "OPERATORS",
        title: "Logical Operators",
        subtitle: "Combine conditions in your programs.",

        explanation: `
            <p>
                Logical operators let you combine or reverse
                Boolean conditions.
            </p>

            <p>
                The AND operator (<code>&amp;&amp;</code>) is true
                when both conditions are true. The OR operator
                (<code>||</code>) is true when at least one condition
                is true. The NOT operator (<code>!</code>) reverses
                a Boolean result.
            </p>

            <p>
                Logical operators are often used with if statements
                to create more specific decisions.
            </p>
        `,

        tip: "Read a combined condition from left to right and identify what must be true.",

        exampleDescription: "Combine conditions using logical operators.",

        code: `using System;

class Program
{
    static void Main()
    {
        int age = 17;
        bool hasTicket = true;

        Console.WriteLine(age >= 18 && hasTicket);
        Console.WriteLine(age >= 18 || hasTicket);
        Console.WriteLine(!hasTicket);
    }
}`,

        output: "False\nTrue\nFalse",

        exampleExplanation:
            "AND requires both conditions. OR requires at least one. NOT reverses the Boolean value.",

        starter: `using System;

class Program
{
    static void Main()
    {
        bool knowsCSharp = true;
        bool practisesDaily = true;

        Console.WriteLine(knowsCSharp && practisesDaily);
    }
}`,

        challengeTitle: "Combine Two Conditions",

        challenge:
            "Create two Boolean variables and display the result of combining them with AND and OR.",

        hint:
            "Use the operators && and ||.",

        checks: ["bool", "&&", "||"]
    },


    // LESSON 12
    {
        category: "STRINGS",
        title: "Working with Strings",
        subtitle: "Store, combine, and inspect text.",

        explanation: `
            <p>
                A string represents a sequence of text characters.
                String values are written inside double quotation marks.
            </p>

            <p>
                You can combine strings using the + operator.
                A string also provides useful members such as
                <code>Length</code>, <code>ToUpper()</code>,
                <code>ToLower()</code>, and <code>Contains()</code>.
            </p>

            <p>
                Strings are immutable: operations that appear to change
                a string return a new string rather than modifying
                the original string object.
            </p>
        `,

        tip: "Use interpolation with $\"...\" when combining text and variable values.",

        exampleDescription: "Inspect a string and transform its casing.",

        code: `using System;

class Program
{
    static void Main()
    {
        string name = "Elijah";

        Console.WriteLine(name.Length);
        Console.WriteLine(name.ToUpper());
        Console.WriteLine(name.ToLower());
        Console.WriteLine("Hello " + name);
    }
}`,

        output: "6\nELIJAH\nelijah\nHello Elijah",

        exampleExplanation:
            "Length returns the number of UTF-16 code units in this string. The casing methods return new strings.",

        starter: `using System;

class Program
{
    static void Main()
    {
        string language = "CSharp";

        Console.WriteLine(language.Length);
        Console.WriteLine(language.ToUpper());
    }
}`,

        challengeTitle: "Inspect a Word",

        challenge:
            "Create a string variable and print its length and uppercase form.",

        hint:
            "Use the .Length property and .ToUpper() method.",

        checks: [".Length", ".ToUpper"]
    },


    // LESSON 13
    {
        category: "STRINGS",
        title: "String Interpolation",
        subtitle: "Insert variable values into text.",

        explanation: `
            <p>
                String interpolation provides a readable way to
                combine text and variable values.
            </p>

            <p>
                Start the string with a dollar sign immediately before
                the opening quotation mark. Place expressions inside
                curly braces.
            </p>

            <p>
                Interpolation is often easier to read than repeatedly
                joining strings with the + operator, especially when
                a sentence contains several variables.
            </p>
        `,

        tip: "Use $\"Hello, {name}!\" to include a variable inside a string.",

        exampleDescription: "Insert variables into a formatted sentence.",

        code: `using System;

class Program
{
    static void Main()
    {
        string name = "Elijah";
        int lessons = 40;

        Console.WriteLine($"Welcome {name}!");
        Console.WriteLine($"There are {lessons} lessons.");
    }
}`,

        output: "Welcome Elijah!\nThere are 40 lessons.",

        exampleExplanation:
            "The expressions inside curly braces are evaluated and inserted into the resulting string.",

        starter: `using System;

class Program
{
    static void Main()
    {
        string course = "C#";
        int lessons = 40;

        Console.WriteLine($"I am learning {course}.");
        Console.WriteLine($"Lessons: {lessons}");
    }
}`,

        challengeTitle: "Create a Personal Message",

        challenge:
            "Create a name variable and a course variable. Use string interpolation to display a sentence containing both values.",

        hint:
            "Begin the string with $ and put variable names inside curly braces.",

        checks: ["$\"", "{", "}"]
    },


    // LESSON 14
    {
        category: "CONDITIONALS",
        title: "The if Statement",
        subtitle: "Execute code when a condition is true.",

        explanation: `
            <p>
                Programs often need to make decisions. The
                <code>if</code> statement executes a block of code
                when its condition evaluates to true.
            </p>

            <p>
                The condition must produce a Boolean result.
                If it is false, the block is skipped.
            </p>

            <p>
                An if statement can control what happens based on
                a score, a user's choice, a stored value, or another
                condition in your program.
            </p>
        `,

        tip: "Use braces around the statements belonging to a decision.",

        exampleDescription: "Display a message only when the condition is true.",

        code: `using System;

class Program
{
    static void Main()
    {
        int score = 80;

        if (score >= 50)
        {
            Console.WriteLine("You passed!");
        }
    }
}`,

        output: "You passed!",

        exampleExplanation:
            "The score is 80, so the condition score >= 50 evaluates to true.",

        starter: `using System;

class Program
{
    static void Main()
    {
        int age = 20;

        if (age >= 18)
        {
            Console.WriteLine("Adult age threshold reached.");
        }
    }
}`,

        challengeTitle: "Check a Score",

        challenge:
            "Write an if statement that displays Passed when a score is at least 50.",

        hint:
            "Use if (score >= 50) and display the message inside the block.",

        checks: ["if", ">=", "Console.WriteLine"]
    },


    // LESSON 15
    {
        category: "CONDITIONALS",
        title: "if, else, and else if",
        subtitle: "Handle different possible outcomes.",

        explanation: `
            <p>
                The <code>else</code> block runs when the preceding
                if condition is false. It gives your program an
                alternative action.
            </p>

            <p>
                An <code>else if</code> block checks another condition
                when earlier conditions were false. You can chain
                several conditions to handle different ranges or cases.
            </p>

            <p>
                Conditions are evaluated in order. Once a matching
                branch is selected, the remaining branches in that
                chain are skipped.
            </p>
        `,

        tip: "Order your conditions carefully, especially when checking ranges.",

        exampleDescription: "Classify a score using three branches.",

        code: `using System;

class Program
{
    static void Main()
    {
        int score = 75;

        if (score >= 80)
        {
            Console.WriteLine("Excellent");
        }
        else if (score >= 50)
        {
            Console.WriteLine("Passed");
        }
        else
        {
            Console.WriteLine("Try again");
        }
    }
}`,

        output: "Passed",

        exampleExplanation:
            "The score is below 80 but at least 50, so the second branch runs.",

        starter: `using System;

class Program
{
    static void Main()
    {
        int score = 45;

        if (score >= 50)
        {
            Console.WriteLine("Passed");
        }
        else
        {
            Console.WriteLine("Not passed");
        }
    }
}`,

        challengeTitle: "Classify a Score",

        challenge:
            "Write an if/else program that prints Passed when a score is 50 or more and Not passed otherwise.",

        hint:
            "Use if (score >= 50) followed by else.",

        checks: ["if", "else", ">="]
    },


    // LESSON 16
    {
        category: "CONDITIONALS",
        title: "The switch Statement",
        subtitle: "Select an action from several cases.",

        explanation: `
            <p>
                A switch statement selects a branch based on the
                value of an expression. It can be clearer than a long
                chain of equality checks.
            </p>

            <p>
                Each traditional switch section uses a case label.
                The break statement exits the switch after the selected
                case has run.
            </p>

            <p>
                A default section can handle values that do not match
                any listed case.
            </p>
        `,

        tip: "Remember to handle unexpected values when the input may vary.",

        exampleDescription: "Select a message based on a number.",

        code: `using System;

class Program
{
    static void Main()
    {
        int day = 2;

        switch (day)
        {
            case 1:
                Console.WriteLine("Monday");
                break;

            case 2:
                Console.WriteLine("Tuesday");
                break;

            default:
                Console.WriteLine("Other day");
                break;
        }
    }
}`,

        output: "Tuesday",

        exampleExplanation:
            "The value of day matches case 2, so Tuesday is displayed.",

        starter: `using System;

class Program
{
    static void Main()
    {
        int choice = 1;

        switch (choice)
        {
            case 1:
                Console.WriteLine("Start");
                break;

            default:
                Console.WriteLine("Unknown choice");
                break;
        }
    }
}`,

        challengeTitle: "Create a Simple Menu",

        challenge:
            "Write a switch statement that displays Start for option 1, Settings for option 2, and Unknown option for other values.",

        hint:
            "Use cases 1 and 2, followed by a default branch.",

        checks: ["switch", "case 1", "case 2", "default"]
    },


    // LESSON 17
    {
        category: "LOOPS",
        title: "The for Loop",
        subtitle: "Repeat instructions a controlled number of times.",

        explanation: `
            <p>
                A loop repeats a block of code. The for loop is
                particularly useful when you know how to initialize
                a counter, test a condition, and update the counter.
            </p>

            <p>
                A traditional for loop contains three sections:
                initialization, condition, and iteration.
                They are separated by semicolons inside the parentheses.
            </p>

            <p>
                The condition is checked before each iteration.
                When it becomes false, the loop stops.
            </p>
        `,

        tip: "Check whether your loop should use < or <= to avoid off-by-one errors.",

        exampleDescription: "Print the numbers from 1 through 5.",

        code: `using System;

class Program
{
    static void Main()
    {
        for (int i = 1; i <= 5; i++)
        {
            Console.WriteLine(i);
        }
    }
}`,

        output: "1\n2\n3\n4\n5",

        exampleExplanation:
            "The counter begins at 1, increases after each iteration, and the loop stops after 5.",

        starter: `using System;

class Program
{
    static void Main()
    {
        for (int i = 1; i <= 3; i++)
        {
            Console.WriteLine("Learning C#");
        }
    }
}`,

        challengeTitle: "Repeat a Message",

        challenge:
            "Use a for loop to display the numbers 1 through 10.",

        hint:
            "Initialize i at 1, continue while i <= 10, and increment with i++.",

        checks: ["for", "i++", "Console.WriteLine"]
    },


    // LESSON 18
    {
        category: "LOOPS",
        title: "The while Loop",
        subtitle: "Repeat code while a condition remains true.",

        explanation: `
            <p>
                A while loop checks its condition before running
                the body. If the condition is false at the beginning,
                the body does not execute.
            </p>

            <p>
                This makes while useful when the number of repetitions
                depends on a changing condition rather than a fixed count.
            </p>

            <p>
                Make sure something inside the loop can eventually
                make the condition false. Otherwise, your program
                may enter an infinite loop.
            </p>
        `,

        tip: "Update the variable used by the condition when necessary.",

        exampleDescription: "Use a while loop to count to three.",

        code: `using System;

class Program
{
    static void Main()
    {
        int count = 1;

        while (count <= 3)
        {
            Console.WriteLine(count);
            count++;
        }
    }
}`,

        output: "1\n2\n3",

        exampleExplanation:
            "Count increases during every iteration until count <= 3 becomes false.",

        starter: `using System;

class Program
{
    static void Main()
    {
        int number = 1;

        while (number <= 5)
        {
            Console.WriteLine(number);
            number++;
        }
    }
}`,

        challengeTitle: "Count with while",

        challenge:
            "Use a while loop to display the numbers from 1 through 5.",

        hint:
            "Start at 1 and increase the number during each iteration.",

        checks: ["while", "number++", "Console.WriteLine"]
    },


    // LESSON 19
    {
        category: "LOOPS",
        title: "The do-while Loop",
        subtitle: "Execute a loop body at least once.",

        explanation: `
            <p>
                A do-while loop executes its body before checking
                the condition. This guarantees at least one execution.
            </p>

            <p>
                The condition appears after the body, and the statement
                ends with a semicolon after the while condition.
            </p>

            <p>
                This structure can be useful for menu systems where
                you want to display the menu before deciding whether
                to repeat it.
            </p>
        `,

        tip: "Unlike while, do-while always executes the body at least once.",

        exampleDescription: "Display the number before checking the condition.",

        code: `using System;

class Program
{
    static void Main()
    {
        int number = 1;

        do
        {
            Console.WriteLine(number);
            number++;
        }
        while (number <= 3);
    }
}`,

        output: "1\n2\n3",

        exampleExplanation:
            "The body runs first, then the condition determines whether another iteration occurs.",

        starter: `using System;

class Program
{
    static void Main()
    {
        int count = 1;

        do
        {
            Console.WriteLine(count);
            count++;
        }
        while (count <= 4);
    }
}`,

        challengeTitle: "Practise do-while",

        challenge:
            "Write a do-while loop that displays numbers 1, 2, and 3.",

        hint:
            "Place the statements inside do { } and put the condition after while.",

        checks: ["do", "while", "count++"]
    },


    // LESSON 20
    {
        category: "LOOPS",
        title: "break and continue",
        subtitle: "Control the flow of a loop.",

        explanation: `
            <p>
                The <code>break</code> statement immediately exits
                the nearest enclosing loop or switch statement.
            </p>

            <p>
                The <code>continue</code> statement skips the remaining
                statements in the current loop iteration and proceeds
                to the next iteration according to the loop type.
            </p>

            <p>
                These statements can simplify loops when you need
                to stop early or skip selected values.
            </p>
        `,

        tip: "Use break to stop a loop and continue to skip one iteration.",

        exampleDescription: "Stop counting when the value reaches four.",

        code: `using System;

class Program
{
    static void Main()
    {
        for (int i = 1; i <= 6; i++)
        {
            if (i == 4)
            {
                break;
            }

            Console.WriteLine(i);
        }
    }
}`,

        output: "1\n2\n3",

        exampleExplanation:
            "When i becomes 4, break exits the loop before 4 is printed.",

        starter: `using System;

class Program
{
    static void Main()
    {
        for (int i = 1; i <= 5; i++)
        {
            if (i == 3)
            {
                continue;
            }

            Console.WriteLine(i);
        }
    }
}`,

        challengeTitle: "Skip One Number",

        challenge:
            "Use a for loop to print numbers 1 through 5, but skip 3 with continue.",

        hint:
            "Place if (i == 3) { continue; } before WriteLine.",

        checks: ["for", "continue", "Console.WriteLine"]
    },


    // LESSON 21
    {
        category: "ARRAYS",
        title: "Introduction to Arrays",
        subtitle: "Store multiple values in one variable.",

        explanation: `
            <p>
                An array stores a fixed number of values of the same
                type. Instead of declaring separate variables for each
                score, you can place all the scores in an integer array.
            </p>

            <p>
                Array elements are accessed using an index.
                C# arrays use zero-based indexing, so the first
                element is at index 0, the second at index 1, and so on.
            </p>

            <p>
                The Length property returns the number of elements
                in the array.
            </p>
        `,

        tip: "An array of five elements uses indexes 0, 1, 2, 3, and 4.",

        exampleDescription: "Declare an array and access individual elements.",

        code: `using System;

class Program
{
    static void Main()
    {
        int[] scores = { 80, 90, 75 };

        Console.WriteLine(scores[0]);
        Console.WriteLine(scores[1]);
        Console.WriteLine(scores.Length);
    }
}`,

        output: "80\n90\n3",

        exampleExplanation:
            "scores[0] accesses the first value. Length reports that the array contains three elements.",

        starter: `using System;

class Program
{
    static void Main()
    {
        string[] subjects =
        {
            "Maths",
            "English",
            "Computer Science"
        };

        Console.WriteLine(subjects[0]);
        Console.WriteLine(subjects.Length);
    }
}`,

        challengeTitle: "Create an Array",

        challenge:
            "Create an integer array containing three values. Display the first value and the array length.",

        hint:
            "Use int[] numbers = { 10, 20, 30 }; as a starting point.",

        checks: ["int[]", "Length", "[0]"]
    },


    // LESSON 22
    {
        category: "ARRAYS",
        title: "Looping Through Arrays",
        subtitle: "Process each array element.",

        explanation: `
            <p>
                Arrays are often processed with loops. A for loop
                gives access to each element's index, while a foreach
                loop provides each element directly.
            </p>

            <p>
                When using a traditional for loop, the condition
                commonly checks whether the index is less than
                the array's Length.
            </p>

            <p>
                A foreach loop is convenient when you simply need
                to read every value in a collection without changing
                the collection structure.
            </p>
        `,

        tip: "Use i < array.Length rather than i <= array.Length.",

        exampleDescription: "Print every element with foreach.",

        code: `using System;

class Program
{
    static void Main()
    {
        string[] names = { "Ada", "Elijah", "Grace" };

        foreach (string name in names)
        {
            Console.WriteLine(name);
        }
    }
}`,

        output: "Ada\nElijah\nGrace",

        exampleExplanation:
            "The foreach loop assigns each array element to name in turn.",

        starter: `using System;

class Program
{
    static void Main()
    {
        int[] numbers = { 2, 4, 6, 8 };

        foreach (int number in numbers)
        {
            Console.WriteLine(number);
        }
    }
}`,

        challengeTitle: "Print Every Element",

        challenge:
            "Create an array of four names and use foreach to display each name.",

        hint:
            "Write foreach (string name in names) and print name inside the loop.",

        checks: ["foreach", "string", "Console.WriteLine"]
    },


    // LESSON 23
    {
        category: "METHODS",
        title: "Introduction to Methods",
        subtitle: "Organize reusable instructions.",

        explanation: `
            <p>
                A method is a named block of code that performs a task.
                Methods help divide a program into smaller, understandable
                parts and allow code to be reused.
            </p>

            <p>
                A method declaration includes a return type, a name,
                and parentheses. A method can contain parameters,
                which provide information to it.
            </p>

            <p>
                The Main method is a common starting point for a
                traditional C# console application. Other methods
                can be called from Main.
            </p>
        `,

        tip: "Choose method names that describe the task the method performs.",

        exampleDescription: "Create and call a method that prints a message.",

        code: `using System;

class Program
{
    static void Main()
    {
        Greet();
    }

    static void Greet()
    {
        Console.WriteLine("Welcome!");
    }
}`,

        output: "Welcome!",

        exampleExplanation:
            "Calling Greet() executes the instructions inside the Greet method.",

        starter: `using System;

class Program
{
    static void Main()
    {
        ShowMessage();
    }

    static void ShowMessage()
    {
        Console.WriteLine("Keep practising!");
    }
}`,

        challengeTitle: "Create a Method",

        challenge:
            "Create a method called SayHello that displays Hello from my method! Call it from Main.",

        hint:
            "Declare static void SayHello() and call SayHello() inside Main.",

        checks: ["static void SayHello", "SayHello();"]
    },


    // LESSON 24
    {
        category: "METHODS",
        title: "Method Parameters",
        subtitle: "Pass information into a method.",

        explanation: `
            <p>
                Parameters allow a method to receive information
                from the code that calls it.
            </p>

            <p>
                When calling a method, the supplied values are
                called arguments. Each argument must be compatible
                with its corresponding parameter.
            </p>

            <p>
                Parameters make methods more flexible because the
                same method can operate on different values without
                repeating the method's implementation.
            </p>
        `,

        tip: "The parameter belongs in the method declaration; the argument goes in the call.",

        exampleDescription: "Pass a name to the Greet method.",

        code: `using System;

class Program
{
    static void Main()
    {
        Greet("Elijah");
        Greet("Ada");
    }

    static void Greet(string name)
    {
        Console.WriteLine($"Hello, {name}!");
    }
}`,

        output: "Hello, Elijah!\nHello, Ada!",

        exampleExplanation:
            "The method receives a different name each time it is called.",

        starter: `using System;

class Program
{
    static void Main()
    {
        DisplayScore(95);
    }

    static void DisplayScore(int score)
    {
        Console.WriteLine(score);
    }
}`,

        challengeTitle: "Pass a Value",

        challenge:
            "Create a method called ShowAge that accepts an integer parameter and displays it. Call the method with a value of your choice.",

        hint:
            "Declare static void ShowAge(int age).",

        checks: ["ShowAge", "int age", "Console.WriteLine"]
    },


    // LESSON 25
    {
        category: "METHODS",
        title: "Return Values",
        subtitle: "Send a result back from a method.",

        explanation: `
            <p>
                A method can return a value to the code that called it.
                The return type states what kind of value the method
                provides.
            </p>

            <p>
                For example, an int-returning method must return an
                integer on every applicable execution path. A method
                declared with void does not return a value to its caller.
            </p>

            <p>
                The return keyword sends the result back to the caller.
                The caller can store the returned value in a variable
                or use it in another expression.
            </p>
        `,

        tip: "The method's declared return type must match the value it returns.",

        exampleDescription: "Return the sum of two integers.",

        code: `using System;

class Program
{
    static void Main()
    {
        int result = Add(5, 3);

        Console.WriteLine(result);
    }

    static int Add(int a, int b)
    {
        return a + b;
    }
}`,

        output: "8",

        exampleExplanation:
            "Add returns a + b. Main stores the returned value in result and prints it.",

        starter: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine(Square(4));
    }

    static int Square(int number)
    {
        return number * number;
    }
}`,

        challengeTitle: "Return a Calculation",

        challenge:
            "Write a method called Multiply that accepts two integers and returns their product.",

        hint:
            "Use static int Multiply(int a, int b) and return a * b.",

        checks: ["static int Multiply", "return", "*"]
    },


    // LESSON 26
    {
        category: "METHODS",
        title: "Method Overloading",
        subtitle: "Use the same method name with different parameters.",

        explanation: `
            <p>
                Method overloading allows a class to contain multiple
                methods with the same name, provided their parameter
                lists differ in a valid way.
            </p>

            <p>
                The difference can involve the number, types, or
                arrangement of parameters. The compiler selects
                the applicable overload based on the call.
            </p>

            <p>
                Return type alone is not sufficient to distinguish
                overloaded methods with otherwise identical signatures.
            </p>
        `,

        tip: "Overloads need different parameter signatures, not merely different return types.",

        exampleDescription: "Two Add methods accept different parameter types.",

        code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine(Add(2, 3));
        Console.WriteLine(Add(2.5, 3.5));
    }

    static int Add(int a, int b)
    {
        return a + b;
    }

    static double Add(double a, double b)
    {
        return a + b;
    }
}`,

        output: "5\n6",

        exampleExplanation:
            "The compiler selects the integer overload for integer arguments and the double overload for double arguments.",

        starter: `using System;

class Program
{
    static void Main()
    {
        Display(10);
        Display("Hello");
    }

    static void Display(int value)
    {
        Console.WriteLine(value);
    }

    static void Display(string value)
    {
        Console.WriteLine(value);
    }
}`,

        challengeTitle: "Create Two Overloads",

        challenge:
            "Create two Display methods: one accepting an int and another accepting a string.",

        hint:
            "Use the same method name but different parameter types.",

        checks: ["Display(int", "Display(string"]
    },


    // LESSON 27
    {
        category: "CLASSES",
        title: "Introduction to Classes",
        subtitle: "Create your own types in C#.",

        explanation: `
            <p>
                A class is a blueprint for a type of object.
                It can define data through fields or properties
                and behaviour through methods.
            </p>

            <p>
                A class declaration uses the class keyword followed
                by a name and a body enclosed in braces.
            </p>

            <p>
                Classes are central to object-oriented programming.
                They allow related data and behaviour to be organized
                into one type.
            </p>
        `,

        tip: "Give classes names that describe the type of object they represent.",

        exampleDescription: "Define a simple class and create an instance.",

        code: `using System;

class Student
{
    public string Name = "Elijah";

    public void Introduce()
    {
        Console.WriteLine($"My name is {Name}.");
    }
}

class Program
{
    static void Main()
    {
        Student student = new Student();
        student.Introduce();
    }
}`,

        output: "My name is Elijah.",

        exampleExplanation:
            "new Student() creates an instance. The variable student refers to that object.",

        starter: `using System;

class Book
{
    public string Title = "C# Basics";

    public void ShowTitle()
    {
        Console.WriteLine(Title);
    }
}

class Program
{
    static void Main()
    {
        Book book = new Book();
        book.ShowTitle();
    }
}`,

        challengeTitle: "Create a Class",

        challenge:
            "Create a class called Car with a public string field called Brand and a method that prints the brand.",

        hint:
            "Create a Car object with new Car() and call its method.",

        checks: ["class Car", "Brand", "new Car"]
    },


    // LESSON 28
    {
        category: "OBJECTS",
        title: "Objects and Constructors",
        subtitle: "Create objects and initialize their state.",

        explanation: `
            <p>
                An object is an instance of a class. Each instance
                can hold its own data according to the fields and
                properties defined by the class.
            </p>

            <p>
                A constructor is a special member called when an
                object is created. Constructors commonly initialize
                the new object's state.
            </p>

            <p>
                A constructor has the same name as its class and
                does not declare a return type. The new keyword
                is commonly used to create an object.
            </p>
        `,

        tip: "Use constructors to establish a useful initial state for new objects.",

        exampleDescription: "Pass a name into a constructor.",

        code: `using System;

class Student
{
    public string Name;

    public Student(string name)
    {
        Name = name;
    }
}

class Program
{
    static void Main()
    {
        Student student = new Student("Elijah");

        Console.WriteLine(student.Name);
    }
}`,

        output: "Elijah",

        exampleExplanation:
            "The constructor receives the name and assigns it to the object's Name field.",

        starter: `using System;

class Car
{
    public string Brand;

    public Car(string brand)
    {
        Brand = brand;
    }
}

class Program
{
    static void Main()
    {
        Car car = new Car("Toyota");

        Console.WriteLine(car.Brand);
    }
}`,

        challengeTitle: "Initialize an Object",

        challenge:
            "Create a Book class with a constructor that accepts a title. Create a Book object and print its title.",

        hint:
            "Declare Book(string title) and assign title to the field.",

        checks: ["class Book", "Book(string title)", "new Book"]
    },


    // LESSON 29
    {
        category: "ENCAPSULATION",
        title: "Properties and Encapsulation",
        subtitle: "Control access to an object's data.",

        explanation: `
            <p>
                Encapsulation means organizing data and related
                behaviour together while controlling how the internal
                state can be accessed or changed.
            </p>

            <p>
                C# properties provide a convenient way to expose
                values through get and set accessors. Auto-properties
                can be written as <code>public string Name { get; set; }</code>.
            </p>

            <p>
                A property can also validate a value or restrict access.
                For example, a property with a private setter can be
                changed only from within the appropriate class context.
            </p>
        `,

        tip: "Use properties when you want to expose an object's values in a controlled way.",

        exampleDescription: "Use a property to store a student's name.",

        code: `using System;

class Student
{
    public string Name { get; set; }
}

class Program
{
    static void Main()
    {
        Student student = new Student();

        student.Name = "Elijah";

        Console.WriteLine(student.Name);
    }
}`,

        output: "Elijah",

        exampleExplanation:
            "The set accessor assigns a value and the get accessor retrieves it.",

        starter: `using System;

class Product
{
    public string Name { get; set; }
    public decimal Price { get; set; }
}

class Program
{
    static void Main()
    {
        Product item = new Product();

        item.Name = "Notebook";
        item.Price = 1500m;

        Console.WriteLine(item.Name);
        Console.WriteLine(item.Price);
    }
}`,

        challengeTitle: "Add a Property",

        challenge:
            "Create a Product class with Name and Price properties. Assign values to an object and print them.",

        hint:
            "Use public string Name { get; set; } and a suitable numeric type for Price.",

        checks: ["get; set;", "Name", "Price"]
    },


    // LESSON 30
    {
        category: "INHERITANCE",
        title: "Inheritance",
        subtitle: "Build a class from another class.",

        explanation: `
            <p>
                Inheritance allows a class to derive from another class.
                The derived class can use accessible members of the
                base class and can add its own members.
            </p>

            <p>
                In C#, a colon after the derived class name identifies
                its base class. For example,
                <code>class Dog : Animal</code> declares Dog as
                a derived class of Animal.
            </p>

            <p>
                Inheritance can represent an IS-A relationship,
                such as a dog being an animal. Use it when the
                relationship makes sense for the design.
            </p>
        `,

        tip: "Inheritance is useful for genuine shared behaviour, not just to avoid typing.",

        exampleDescription: "Dog inherits the accessible method from Animal.",

        code: `using System;

class Animal
{
    public void Eat()
    {
        Console.WriteLine("The animal is eating.");
    }
}

class Dog : Animal
{
}

class Program
{
    static void Main()
    {
        Dog dog = new Dog();
        dog.Eat();
    }
}`,

        output: "The animal is eating.",

        exampleExplanation:
            "Dog inherits the public Eat method from Animal.",

        starter: `using System;

class Vehicle
{
    public void Start()
    {
        Console.WriteLine("Vehicle started.");
    }
}

class Car : Vehicle
{
}

class Program
{
    static void Main()
    {
        Car car = new Car();
        car.Start();
    }
}`,

        challengeTitle: "Use Inheritance",

        challenge:
            "Create a base class called Person with a method that prints a message. Create a Student class that inherits Person and call the inherited method.",

        hint:
            "Declare class Student : Person.",

        checks: ["class Person", "class Student : Person"]
    },


    // LESSON 31
    {
        category: "POLYMORPHISM",
        title: "Method Overriding",
        subtitle: "Customize inherited behaviour.",

        explanation: `
            <p>
                Method overriding allows a derived class to provide
                its own implementation of an inherited virtual method.
            </p>

            <p>
                The base method is declared with the virtual keyword.
                The derived implementation uses override.
            </p>

            <p>
                This supports runtime polymorphism: code can work
                with a base-class reference while the appropriate
                derived implementation is called for the actual object.
            </p>
        `,

        tip: "Use virtual in the base class and override in the derived class.",

        exampleDescription: "The Dog implementation replaces the inherited virtual behaviour.",

        code: `using System;

class Animal
{
    public virtual void Speak()
    {
        Console.WriteLine("Animal sound");
    }
}

class Dog : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Woof!");
    }
}

class Program
{
    static void Main()
    {
        Animal animal = new Dog();
        animal.Speak();
    }
}`,

        output: "Woof!",

        exampleExplanation:
            "Although the variable type is Animal, the actual object is Dog, so Dog.Speak() runs.",

        starter: `using System;

class Shape
{
    public virtual void Draw()
    {
        Console.WriteLine("Drawing a shape");
    }
}

class Circle : Shape
{
    public override void Draw()
    {
        Console.WriteLine("Drawing a circle");
    }
}

class Program
{
    static void Main()
    {
        Shape shape = new Circle();
        shape.Draw();
    }
}`,

        challengeTitle: "Override a Method",

        challenge:
            "Create a base class with a virtual method called Describe and override it in a derived class.",

        hint:
            "Use virtual in the base class and override in the child class.",

        checks: ["virtual", "override"]
    },


    // LESSON 32
    {
        category: "ABSTRACTION",
        title: "Abstract Classes",
        subtitle: "Define a base type that requires derived behaviour.",

        explanation: `
            <p>
                An abstract class is designed to serve as a base class.
                You cannot create an instance of an abstract class directly.
            </p>

            <p>
                An abstract method declares a required member without
                providing its implementation in that declaration.
                A non-abstract derived class must implement inherited
                abstract members.
            </p>

            <p>
                Abstract classes can also contain implemented methods,
                properties, and other members shared by derived classes.
            </p>
        `,

        tip: "Use abstract classes when related types share a common concept but need different implementations.",

        exampleDescription: "The derived class implements the abstract method.",

        code: `using System;

abstract class Shape
{
    public abstract double Area();
}

class Square : Shape
{
    public double Side { get; set; }

    public Square(double side)
    {
        Side = side;
    }

    public override double Area()
    {
        return Side * Side;
    }
}

class Program
{
    static void Main()
    {
        Shape shape = new Square(4);
        Console.WriteLine(shape.Area());
    }
}`,

        output: "16",

        exampleExplanation:
            "Square supplies the required Area implementation. The Main method uses it through a Shape reference.",

        starter: `using System;

abstract class Animal
{
    public abstract void Speak();
}

class Cat : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Meow!");
    }
}

class Program
{
    static void Main()
    {
        Animal animal = new Cat();
        animal.Speak();
    }
}`,

        challengeTitle: "Implement an Abstract Method",

        challenge:
            "Create an abstract class called Device with an abstract method called Start. Implement Start in a derived class.",

        hint:
            "Use abstract void Start(); and override it in the child class.",

        checks: ["abstract class", "abstract void Start", "override"]
    },


    // LESSON 33
    {
        category: "INTERFACES",
        title: "Interfaces",
        subtitle: "Define a contract that types can implement.",

        explanation: `
            <p>
                An interface defines a contract that a class or
                struct can implement. It specifies members that
                implementing types must provide, subject to the
                interface's member rules.
            </p>

            <p>
                An interface declaration uses the interface keyword.
                A class indicates implementation by listing the
                interface after a colon.
            </p>

            <p>
                Interfaces help separate what an object can do
                from the particular class that implements that behaviour.
                They are useful when unrelated classes need to share
                a common capability.
            </p>
        `,

        tip: "Think of an interface as a promise that a type provides certain behaviour.",

        exampleDescription: "The Printer class implements IPrintable.",

        code: `using System;

interface IPrintable
{
    void Print();
}

class Printer : IPrintable
{
    public void Print()
    {
        Console.WriteLine("Printing document");
    }
}

class Program
{
    static void Main()
    {
        IPrintable printer = new Printer();
        printer.Print();
    }
}`,

        output: "Printing document",

        exampleExplanation:
            "Printer implements the Print method required by IPrintable.",

        starter: `using System;

interface IGreeter
{
    void Greet();
}

class Greeter : IGreeter
{
    public void Greet()
    {
        Console.WriteLine("Hello!");
    }
}

class Program
{
    static void Main()
    {
        IGreeter greeter = new Greeter();
        greeter.Greet();
    }
}`,

        challengeTitle: "Create an Interface",

        challenge:
            "Create an interface called IPlayable with a Play method, then implement it in a Game class.",

        hint:
            "Declare interface IPlayable and implement public void Play() in Game.",

        checks: ["interface IPlayable", "class Game : IPlayable", "Play"]
    },


    // LESSON 34
    {
        category: "EXCEPTIONS",
        title: "Exception Handling",
        subtitle: "Respond to errors that occur during execution.",

        explanation: `
            <p>
                An exception represents an error or unusual condition
                during program execution. Exception handling lets a
                program respond to certain failures instead of allowing
                them to go unhandled.
            </p>

            <p>
                A try block contains code that may throw an exception.
                A catch block handles a matching exception type.
                A finally block, when used, runs as control leaves
                the try statement, whether or not an exception occurred.
            </p>

            <p>
                Catch specific exception types where possible.
                Avoid swallowing errors silently because that can
                make problems difficult to diagnose.
            </p>
        `,

        tip: "Handle expected failures clearly and do not use exceptions as ordinary decision-making logic.",

        exampleDescription: "Catch a format error when parsing invalid text.",

        code: `using System;

class Program
{
    static void Main()
    {
        string text = "hello";

        try
        {
            int number = int.Parse(text);
            Console.WriteLine(number);
        }
        catch (FormatException)
        {
            Console.WriteLine("Invalid number.");
        }
    }
}`,

        output: "Invalid number.",

        exampleExplanation:
            "The text cannot be parsed as an integer, so the FormatException handler runs.",

        starter: `using System;

class Program
{
    static void Main()
    {
        try
        {
            int value = int.Parse("abc");
            Console.WriteLine(value);
        }
        catch (FormatException)
        {
            Console.WriteLine("Please enter a valid number.");
        }
    }
}`,

        challengeTitle: "Handle Invalid Input",

        challenge:
            "Write a try/catch example that handles FormatException when parsing text as an integer.",

        hint:
            "Place int.Parse inside try and catch FormatException.",

        checks: ["try", "catch", "FormatException"]
    },


    // LESSON 35
    {
        category: "COLLECTIONS",
        title: "Lists in C#",
        subtitle: "Work with collections that can grow or shrink.",

        explanation: `
            <p>
                An array has a fixed length after it is created.
                A List<T>, by contrast, is a collection that can
                grow or shrink as items are added and removed.
            </p>

            <p>
                Lists are part of the System.Collections.Generic
                namespace. A list such as List<string> stores strings,
                while List<int> stores integers.
            </p>

            <p>
                Common list operations include Add, Remove,
                Contains, and Count. The Count property reports
                the number of items currently in the list.
            </p>
        `,

        tip: "Use List<T> when you need a collection whose size changes.",

        exampleDescription: "Create a list and add items.",

        code: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<string> names = new List<string>();

        names.Add("Elijah");
        names.Add("Ada");

        Console.WriteLine(names.Count);
        Console.WriteLine(names[0]);
    }
}`,

        output: "2\nElijah",

        exampleExplanation:
            "Add inserts items into the list. Count returns the current number of items.",

        starter: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<int> scores = new List<int>();

        scores.Add(80);
        scores.Add(90);
        scores.Add(95);

        Console.WriteLine(scores.Count);
    }
}`,

        challengeTitle: "Create a List",

        challenge:
            "Create a List<string>, add three names, and display the number of names.",

        hint:
            "Use List<string>, Add(), and Count.",

        checks: ["List<string>", ".Add(", ".Count"]
    },


    // LESSON 36
    {
        category: "DICTIONARIES",
        title: "Dictionaries",
        subtitle: "Store values using keys.",

        explanation: `
            <p>
                A Dictionary<TKey, TValue> stores key-value pairs.
                Each key identifies a value, making dictionaries
                useful when you want to look up information by a name,
                code, or another unique key.
            </p>

            <p>
                Dictionary keys must be unique according to the
                dictionary's equality comparer. Attempting to add
                a duplicate key with Add causes an exception.
            </p>

            <p>
                Use TryGetValue when you want to look up a key
                without assuming that it exists.
            </p>
        `,

        tip: "Use TryGetValue when a requested key may be missing.",

        exampleDescription: "Look up a student's score by name.",

        code: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        Dictionary<string, int> scores =
            new Dictionary<string, int>();

        scores["Elijah"] = 95;
        scores["Ada"] = 90;

        Console.WriteLine(scores["Elijah"]);
        Console.WriteLine(scores.Count);
    }
}`,

        output: "95\n2",

        exampleExplanation:
            "The name is the key and the integer is its associated score.",

        starter: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        Dictionary<string, string> capitals =
            new Dictionary<string, string>();

        capitals["Nigeria"] = "Abuja";
        capitals["France"] = "Paris";

        Console.WriteLine(capitals["Nigeria"]);
    }
}`,

        challengeTitle: "Create a Dictionary",

        challenge:
            "Create a dictionary that maps two country names to their capital cities, then display one capital.",

        hint:
            "Use Dictionary<string, string> and assign values using keys.",

        checks: ["Dictionary<string, string>", "Console.WriteLine"]
    },


    // LESSON 37
    {
        category: "ENUMS",
        title: "Enumerations",
        subtitle: "Represent a fixed set of named values.",

        explanation: `
            <p>
                An enum is a value type that defines a set of named
                constants. It makes code easier to read when a variable
                should represent one choice from a known set.
            </p>

            <p>
                For example, a program may define a Day enum with
                Monday, Tuesday, and the other days of the week.
            </p>

            <p>
                Unless specified otherwise, enum members have
                underlying integer values beginning at zero and
                increasing by one. You can also assign explicit values.
            </p>
        `,

        tip: "Enums help replace unclear numeric codes with meaningful names.",

        exampleDescription: "Declare and use a simple enum.",

        code: `using System;

enum Level
{
    Beginner,
    Intermediate,
    Advanced
}

class Program
{
    static void Main()
    {
        Level currentLevel = Level.Beginner;

        Console.WriteLine(currentLevel);
    }
}`,

        output: "Beginner",

        exampleExplanation:
            "The variable stores an enum member. Console.WriteLine displays its name.",

        starter: `using System;

enum TrafficLight
{
    Red,
    Yellow,
    Green
}

class Program
{
    static void Main()
    {
        TrafficLight light = TrafficLight.Green;

        Console.WriteLine(light);
    }
}`,

        challengeTitle: "Create an Enum",

        challenge:
            "Create an enum called Difficulty with Easy, Medium, and Hard, then display one of its values.",

        hint:
            "Declare enum Difficulty { Easy, Medium, Hard }.",

        checks: ["enum Difficulty", "Easy", "Medium", "Hard"]
    },


    // LESSON 38
    {
        category: "FILES",
        title: "File Handling Basics",
        subtitle: "Read and write files using C#.",

        explanation: `
            <p>
                C# provides file APIs through namespaces such as
                System.IO. The File class includes methods for
                reading and writing text files.
            </p>

            <p>
                File.WriteAllText writes text to a file, creating
                the file when appropriate and replacing its existing
                content. File.ReadAllText reads the file's text.
            </p>

            <p>
                File operations can fail because of missing directories,
                permission problems, unavailable files, or other
                environmental conditions. Real applications should
                handle such situations carefully.
            </p>

            <p>
                Online compilers may use temporary or restricted file
                systems. A file created during one execution may not
                be available during another execution.
            </p>
        `,

        tip: "Do not assume a file exists or that the program has permission to access it.",

        exampleDescription: "Write text to a file and read it back.",

        code: `using System;
using System.IO;

class Program
{
    static void Main()
    {
        string path = "notes.txt";

        File.WriteAllText(path, "Learning C#");
        string content = File.ReadAllText(path);

        Console.WriteLine(content);
    }
}`,

        output: "Learning C#",

        exampleExplanation:
            "The program writes a short message to a file and then reads the content back.",

        starter: `using System;
using System.IO;

class Program
{
    static void Main()
    {
        string path = "message.txt";

        File.WriteAllText(path, "Hello from C#");

        Console.WriteLine(File.ReadAllText(path));
    }
}`,

        challengeTitle: "Write and Read Text",

        challenge:
            "Use System.IO to write a message to a text file and then display its contents.",

        hint:
            "Use File.WriteAllText() followed by File.ReadAllText().",

        checks: ["using System.IO", "File.WriteAllText", "File.ReadAllText"]
    },


    // LESSON 39
    {
        category: "MODERN C#",
        title: "Lambda Expressions",
        subtitle: "Write compact functions and expressions.",

        explanation: `
            <p>
                A lambda expression is a compact way to define
                an anonymous function. It is frequently used with
                delegates, LINQ, event handlers, and collection methods.
            </p>

            <p>
                The lambda operator is written as <code>=&gt;</code>.
                The expression on the left represents the input
                parameters, and the expression or block on the right
                describes what the function does.
            </p>

            <p>
                For example, <code>x =&gt; x * 2</code> represents
                a function that takes a value x and returns twice
                that value when used in an appropriate delegate context.
            </p>
        `,

        tip: "Read => as a separation between the input parameters and the function body.",

        exampleDescription: "Use a lambda expression to calculate a doubled value.",

        code: `using System;

class Program
{
    static void Main()
    {
        Func<int, int> doubleNumber = x => x * 2;

        Console.WriteLine(doubleNumber(5));
    }
}`,

        output: "10",

        exampleExplanation:
            "Func<int, int> represents a function that accepts an integer and returns an integer.",

        starter: `using System;

class Program
{
    static void Main()
    {
        Func<int, int> square = x => x * x;

        Console.WriteLine(square(4));
    }
}`,

        challengeTitle: "Create a Lambda",

        challenge:
            "Use Func<int, int> and a lambda expression to create a function that triples an integer.",

        hint:
            "Use x => x * 3.",

        checks: ["Func<int, int>", "=>", "* 3"]
    },


    // LESSON 40
    {
        category: "FINAL PROJECT",
        title: "Build a Student Result Program",
        subtitle: "Bring your C# fundamentals together.",

        explanation: `
            <p>
                You have reached the final lesson of this learning path.
                Now you will combine variables, conditions, methods,
                and output to create a small student result program.
            </p>

            <p>
                Start by storing the student's name and score.
                Use a condition to determine whether the student passed.
                Then display a result summary using string interpolation.
            </p>

            <p>
                Good programs are not just about making code run.
                They should also be readable, organized, and easy
                to update. Use meaningful variable names and keep
                each statement focused on its purpose.
            </p>

            <p>
                After completing this project, experiment with additional
                features, such as grading categories, arrays of scores,
                methods for calculating averages, or reading user input.
            </p>
        `,

        tip: "Try building the project yourself before studying the example.",

        exampleDescription: "A small program that displays a student's result.",

        code: `using System;

class Program
{
    static void Main()
    {
        string studentName = "Elijah";
        int score = 85;

        string result = score >= 50
            ? "Passed"
            : "Not passed";

        Console.WriteLine($"Student: {studentName}");
        Console.WriteLine($"Score: {score}");
        Console.WriteLine($"Result: {result}");
    }
}`,

        output: "Student: Elijah\nScore: 85\nResult: Passed",

        exampleExplanation:
            "The conditional operator selects Passed or Not passed according to the score.",

        starter: `using System;

class Program
{
    static void Main()
    {
        string studentName = "Elijah";
        int score = 85;

        Console.WriteLine($"Student: {studentName}");
        Console.WriteLine($"Score: {score}");

        if (score >= 50)
        {
            Console.WriteLine("Result: Passed");
        }
        else
        {
            Console.WriteLine("Result: Not passed");
        }
    }
}`,

        challengeTitle: "Build Your Own Result Program",

        challenge:
            "Create a student result program with a name, a score, and an if/else decision. Display the name, score, and whether the student passed.",

        hint:
            "Use a string, an int, an if/else statement, and string interpolation or WriteLine statements.",

        checks: ["string", "int", "if", "else", "Console.WriteLine"]
    }

];


/* =========================================================
   3. INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", initializeCSharpCourse);


function initializeCSharpCourse() {
    cacheElements();

    loadSavedProgress();
    loadSavedEditor();
    loadSavedLearnerName();

    updateCurrentYear();
    createAmbientParticles();
    renderLessonList();
    renderLesson(courseState.currentLesson);
    updateCourseProgress();
    updateCertificateSection();
    setupEventListeners();
    updateEditorLineNumbers();
    updateEditorModifiedState();

    checkCompilerAvailability();

    announce("C# Programming Masterclass is ready.");

    console.log(
        "ELOMCODE School C# Masterclass initialized:",
        lessons.length,
        "lessons"
    );
}


/* =========================================================
   4. CACHE HTML ELEMENTS
========================================================= */

function cacheElements() {
    const ids = [
        "liveAnnouncement",
        "heroLessonCount",
        "heroCompletedCount",
        "heroXP",
        "progressPercentage",
        "courseProgressTrack",
        "courseProgressFill",
        "progressLessonText",
        "progressMotivation",
        "lessonSidebar",
        "sidebarToggle",
        "sidebarLessonSummary",
        "sidebarProgressFill",
        "sidebarProgressText",
        "lessonSearch",
        "lessonList",
        "lessonBreadcrumbCurrent",
        "lessonCategory",
        "lessonTitle",
        "lessonSubtitle",
        "lessonNumber",
        "lessonExplanation",
        "lessonTip",
        "exampleDescription",
        "exampleFileName",
        "copyExampleButton",
        "exampleCode",
        "exampleOutput",
        "exampleExplanation",
        "editorModifiedIndicator",
        "editorLineNumbers",
        "practiceCode",
        "resetEditorButton",
        "clearEditorButton",
        "editorStatusText",
        "runCodeButton",
        "copyPracticeCodeButton",
        "compilerStatus",
        "executionStatus",
        "clearOutputButton",
        "compilerOutput",
        "executionTime",
        "compilerMessage",
        "challengePoints",
        "challengeDescription",
        "challengeTask",
        "showHintButton",
        "challengeHint",
        "challengeHintText",
        "challengeAnswer",
        "checkChallengeButton",
        "resetChallengeButton",
        "challengeFeedback",
        "previousLessonButton",
        "nextLessonButton",
        "completeLessonButton",
        "completeLessonButtonText",
        "lessonCompletionMessage",
        "certificateProgressText",
        "certificateProgressFill",
        "certificateLockedMessage",
        "openCertificateButton",
        "certificateModal",
        "certificateModalBackdrop",
        "closeCertificateModal",
        "cancelCertificateButton",
        "certificateForm",
        "certificateLearnerName",
        "previewLearnerName",
        "printLearnerName",
        "printCertificateDate",
        "toastContainer",
        "currentYear",
        "compilerOutput",
        "lessonMainContent"
    ];

    ids.forEach(id => {
        dom[id] = $(id);
    });
}


/* =========================================================
   5. EVENT LISTENERS
========================================================= */

function setupEventListeners() {

    if (dom.lessonSearch) {
        dom.lessonSearch.addEventListener("input", event => {
            courseState.search = event.target.value.trim().toLowerCase();
            renderLessonList();
        });
    }


    document.querySelectorAll(".lesson-filter").forEach(button => {
        button.addEventListener("click", () => {
            courseState.filter = button.dataset.filter || "all";

            document.querySelectorAll(".lesson-filter").forEach(item => {
                item.classList.toggle("active", item === button);
            });

            renderLessonList();
        });
    });


    if (dom.sidebarToggle) {
        dom.sidebarToggle.addEventListener("click", () => {
            const sidebar = dom.lessonSidebar;

            if (!sidebar) return;

            const collapsed = sidebar.classList.toggle("collapsed");

            dom.sidebarToggle.setAttribute(
                "aria-expanded",
                String(!collapsed)
            );
        });
    }


    if (dom.previousLessonButton) {
        dom.previousLessonButton.addEventListener("click", () => {
            navigateToLesson(courseState.currentLesson - 1);
        });
    }


    if (dom.nextLessonButton) {
        dom.nextLessonButton.addEventListener("click", () => {
            navigateToLesson(courseState.currentLesson + 1);
        });
    }


    if (dom.completeLessonButton) {
        dom.completeLessonButton.addEventListener("click", completeCurrentLesson);
    }


    if (dom.copyExampleButton) {
        dom.copyExampleButton.addEventListener("click", () => {
            copyText(
                lessons[courseState.currentLesson].code,
                "Example code copied!"
            );
        });
    }


    if (dom.copyPracticeCodeButton) {
        dom.copyPracticeCodeButton.addEventListener("click", () => {
            copyText(
                dom.practiceCode ? dom.practiceCode.value : "",
                "Practice code copied!"
            );
        });
    }


    if (dom.resetEditorButton) {
        dom.resetEditorButton.addEventListener("click", resetEditor);
    }


    if (dom.clearEditorButton) {
        dom.clearEditorButton.addEventListener("click", clearEditor);
    }


    if (dom.practiceCode) {
        dom.practiceCode.addEventListener("input", () => {
            courseState.editorModified = true;

            saveEditor();
            updateEditorLineNumbers();
            updateEditorModifiedState();
        });

        dom.practiceCode.addEventListener("scroll", () => {
            if (dom.editorLineNumbers) {
                dom.editorLineNumbers.scrollTop = dom.practiceCode.scrollTop;
            }
        });

        dom.practiceCode.addEventListener("keydown", handleEditorTab);
    }


    if (dom.runCodeButton) {
        dom.runCodeButton.addEventListener("click", runPracticeCode);
    }


    if (dom.clearOutputButton) {
        dom.clearOutputButton.addEventListener("click", clearCompilerOutput);
    }


    if (dom.showHintButton) {
        dom.showHintButton.addEventListener("click", toggleHint);
    }


    if (dom.checkChallengeButton) {
        dom.checkChallengeButton.addEventListener("click", checkChallenge);
    }


    if (dom.resetChallengeButton) {
        dom.resetChallengeButton.addEventListener("click", resetChallengeAnswer);
    }


    if (dom.openCertificateButton) {
        dom.openCertificateButton.addEventListener("click", openCertificateModal);
    }


    if (dom.closeCertificateModal) {
        dom.closeCertificateModal.addEventListener("click", closeCertificateModal);
    }


    if (dom.cancelCertificateButton) {
        dom.cancelCertificateButton.addEventListener("click", closeCertificateModal);
    }


    if (dom.certificateModalBackdrop) {
        dom.certificateModalBackdrop.addEventListener("click", closeCertificateModal);
    }


    if (dom.certificateLearnerName) {
        dom.certificateLearnerName.addEventListener("input", () => {
            const name = dom.certificateLearnerName.value.trim();

            if (dom.previewLearnerName) {
                dom.previewLearnerName.textContent = name || "Learner's Name";
            }
        });
    }


    if (dom.certificateForm) {
        dom.certificateForm.addEventListener("submit", generateCertificate);
    }


    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeCertificateModal();
        }
    });
}


/* =========================================================
   6. LESSON LIST
========================================================= */

function renderLessonList() {
    if (!dom.lessonList) return;

    dom.lessonList.innerHTML = "";

    const filteredLessons = lessons
        .map((lesson, index) => ({ lesson, index }))
        .filter(({ lesson, index }) => {

            const isCompleted = courseState.completedLessons.includes(index);

            const matchesFilter =
                courseState.filter === "all" ||
                (courseState.filter === "completed" && isCompleted) ||
                (courseState.filter === "incomplete" && !isCompleted);

            const searchText = [
                lesson.title,
                lesson.subtitle,
                lesson.category
            ].join(" ").toLowerCase();

            const matchesSearch =
                !courseState.search ||
                searchText.includes(courseState.search);

            return matchesFilter && matchesSearch;
        });


    if (filteredLessons.length === 0) {
        dom.lessonList.innerHTML = `
            <div class="lesson-list-loading">
                <p>No matching lessons found.</p>
            </div>
        `;
        return;
    }


    filteredLessons.forEach(({ lesson, index }) => {
        const button = document.createElement("button");

        button.type = "button";

        button.className = "lesson-list-item";

        if (index === courseState.currentLesson) {
            button.classList.add("active");
        }

        const completed = courseState.completedLessons.includes(index);

        if (completed) {
            button.classList.add("completed");
        }

        button.innerHTML = `
            <span class="lesson-list-number">
                ${String(index + 1).padStart(2, "0")}
            </span>

            <span class="lesson-list-details">
                <strong>${escapeHTML(lesson.title)}</strong>
                <small>${escapeHTML(lesson.category)}</small>
            </span>

            <span class="lesson-list-status" aria-label="${
                completed ? "Completed" : "Not completed"
            }">
                ${completed ? "✓" : "○"}
            </span>
        `;

        button.addEventListener("click", () => {
            navigateToLesson(index);
        });

        dom.lessonList.appendChild(button);
    });
}


/* =========================================================
   7. RENDER A LESSON
========================================================= */

function renderLesson(index) {
    if (index < 0 || index >= lessons.length) return;

    courseState.currentLesson = index;

    const lesson = lessons[index];

    setText("lessonBreadcrumbCurrent", lesson.title);
    setText("lessonCategory", lesson.category);
    setText("lessonTitle", lesson.title);
    setText("lessonSubtitle", lesson.subtitle);
    setText("lessonNumber", String(index + 1).padStart(2, "0"));

    if (dom.lessonExplanation) {
        dom.lessonExplanation.innerHTML = lesson.explanation;
    }

    if (dom.lessonTip) {
        dom.lessonTip.innerHTML = `
            <div class="tip-icon">✦</div>
            <div>
                <strong>Learning Tip</strong>
                <p>${escapeHTML(lesson.tip)}</p>
            </div>
        `;
    }


    setText("exampleDescription", lesson.exampleDescription);
    setText("exampleFileName", "Program.cs");
    setText("exampleCode", lesson.code);

    if (dom.exampleOutput) {
        dom.exampleOutput.innerHTML = "";

        const pre = document.createElement("pre");
        pre.textContent = lesson.output;

        dom.exampleOutput.appendChild(pre);
    }

    if (dom.exampleExplanation) {
        dom.exampleExplanation.innerHTML = `
            <span class="explanation-icon">ⓘ</span>
            <p>${escapeHTML(lesson.exampleExplanation)}</p>
        `;
    }


    if (dom.practiceCode) {
        const savedLessonCode = getLessonEditorCode(index);

        dom.practiceCode.value = savedLessonCode || lesson.starter;

        saveEditor();
        updateEditorLineNumbers();
        updateEditorModifiedState();
    }


    setText("challengePoints", "+10 XP");
    setText("challengeDescription", lesson.subtitle);
    setText("challengeTask", lesson.challenge);
    setText("challengeHintText", lesson.hint);

    if (dom.challengeAnswer) {
        dom.challengeAnswer.value =
            courseState.lessonAnswers[index] || "";
    }

    if (dom.challengeHint) {
        dom.challengeHint.hidden = true;
    }

    if (dom.showHintButton) {
        dom.showHintButton.setAttribute("aria-expanded", "false");
        dom.showHintButton.innerHTML = `
            <span>Need a hint?</span>
            <span class="hint-toggle-icon">＋</span>
        `;
    }

    if (dom.challengeFeedback) {
        dom.challengeFeedback.hidden = true;
        dom.challengeFeedback.textContent = "";
        dom.challengeFeedback.className = "challenge-feedback";
    }


    updateLessonNavigation();
    updateCourseProgress();
    updateCertificateSection();
    renderLessonList();

    saveProgress();

    announce(`Lesson ${index + 1}: ${lesson.title}`);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   8. LESSON NAVIGATION
========================================================= */

function navigateToLesson(index) {
    if (index < 0 || index >= lessons.length) return;

    renderLesson(index);
}


function updateLessonNavigation() {
    const index = courseState.currentLesson;

    if (dom.previousLessonButton) {
        dom.previousLessonButton.disabled = index === 0;
    }

    if (dom.nextLessonButton) {
        dom.nextLessonButton.disabled = index === lessons.length - 1;

        const strong = dom.nextLessonButton.querySelector("strong");

        if (strong) {
            strong.textContent =
                index === lessons.length - 1
                    ? "Course Complete"
                    : "Continue Learning";
        }
    }


    const completed = courseState.completedLessons.includes(index);

    if (dom.completeLessonButton) {
        dom.completeLessonButton.classList.toggle("completed", completed);
    }

    setText(
        "completeLessonButtonText",
        completed ? "Lesson Completed ✓" : "Mark as Complete"
    );

    if (dom.lessonCompletionMessage) {
        dom.lessonCompletionMessage.hidden = !completed;
    }
}


/* =========================================================
   9. LESSON COMPLETION AND XP
========================================================= */

function completeCurrentLesson() {
    const index = courseState.currentLesson;

    if (courseState.completedLessons.includes(index)) {
        showToast("You've already completed this lesson.", "info");
        return;
    }

    courseState.completedLessons.push(index);
    courseState.xp += CSharpCourse.totalXPPerLesson;

    saveProgress();

    updateCourseProgress();
    updateCertificateSection();
    updateLessonNavigation();
    renderLessonList();

    showToast("Lesson completed! You earned 10 XP.", "success");

    announce("Lesson completed. Ten experience points earned.");

    if (courseState.completedLessons.length === lessons.length) {
        showToast("Congratulations! Your certificate is now unlocked.", "success");
    }
}


/* =========================================================
   10. COURSE PROGRESS
========================================================= */

function updateCourseProgress() {
    const total = lessons.length;

    const completed = courseState.completedLessons.length;

    const percentage = total === 0
        ? 0
        : Math.round((completed / total) * 100);


    setText("heroLessonCount", total);
    setText("heroCompletedCount", completed);
    setText("heroXP", courseState.xp);

    setText("progressPercentage", `${percentage}%`);

    setText(
        "progressLessonText",
        `${completed} of ${total} lessons completed`
    );

    setText(
        "sidebarLessonSummary",
        `${total} lessons`
    );

    setText(
        "sidebarProgressText",
        `${percentage}% complete`
    );


    if (dom.courseProgressFill) {
        dom.courseProgressFill.style.width = `${percentage}%`;
    }

    if (dom.sidebarProgressFill) {
        dom.sidebarProgressFill.style.width = `${percentage}%`;
    }

    if (dom.courseProgressTrack) {
        dom.courseProgressTrack.setAttribute(
            "aria-valuenow",
            String(percentage)
        );
    }


    const motivation =
        percentage === 100
            ? "You completed the entire course!"
            : percentage >= 75
                ? "You're getting close. Keep going!"
                : percentage >= 50
                    ? "Excellent progress. Keep building!"
                    : percentage >= 25
                        ? "You're building momentum!"
                        : completed > 0
                            ? "Every lesson makes a difference."
                            : "Your journey starts here!";

    setText("progressMotivation", motivation);
}


/* =========================================================
   11. SAVE AND LOAD PROGRESS
========================================================= */

function saveProgress() {
    const data = {
        currentLesson: courseState.currentLesson,
        completedLessons: courseState.completedLessons,
        xp: courseState.xp,
        challengeCompleted: courseState.challengeCompleted,
        lessonAnswers: courseState.lessonAnswers
    };

    try {
        localStorage.setItem(
            CSharpCourse.storageKey,
            JSON.stringify(data)
        );
    } catch (error) {
        console.warn("Could not save course progress:", error);
    }
}


function loadSavedProgress() {
    try {
        const raw = localStorage.getItem(CSharpCourse.storageKey);

        if (!raw) return;

        const data = JSON.parse(raw);

        if (Array.isArray(data.completedLessons)) {
            courseState.completedLessons = [
                ...new Set(
                    data.completedLessons.filter(index =>
                        Number.isInteger(index) &&
                        index >= 0 &&
                        index < lessons.length
                    )
                )
            ];
        }

        if (Array.isArray(data.challengeCompleted)) {
            courseState.challengeCompleted = data.challengeCompleted.filter(index =>
                Number.isInteger(index) &&
                index >= 0 &&
                index < lessons.length
            );
        }

        if (data.lessonAnswers && typeof data.lessonAnswers === "object") {
            courseState.lessonAnswers = data.lessonAnswers;
        }

        courseState.xp =
            courseState.completedLessons.length *
            CSharpCourse.totalXPPerLesson;

        if (
            Number.isInteger(data.currentLesson) &&
            data.currentLesson >= 0 &&
            data.currentLesson < lessons.length
        ) {
            courseState.currentLesson = data.currentLesson;
        }

    } catch (error) {
        console.warn("Could not load course progress:", error);
    }
}


/* =========================================================
   12. EDITOR STORAGE
========================================================= */

function getLessonEditorKey(index) {
    return `${CSharpCourse.editorKey}_lesson_${index}`;
}


function getLessonEditorCode(index) {
    try {
        return localStorage.getItem(getLessonEditorKey(index));
    } catch (error) {
        return null;
    }
}


function saveEditor() {
    if (!dom.practiceCode) return;

    try {
        localStorage.setItem(
            getLessonEditorKey(courseState.currentLesson),
            dom.practiceCode.value
        );
    } catch (error) {
        console.warn("Could not save editor contents:", error);
    }
}


function loadSavedEditor() {
    // The selected lesson's starter code is loaded by renderLesson().
}


function resetEditor() {
    const lesson = lessons[courseState.currentLesson];

    if (!dom.practiceCode) return;

    dom.practiceCode.value = lesson.starter;

    courseState.editorModified = false;

    saveEditor();
    updateEditorLineNumbers();
    updateEditorModifiedState();

    showToast("Editor reset to the lesson starter code.", "info");
}


function clearEditor() {
    if (!dom.practiceCode) return;

    dom.practiceCode.value = "";

    courseState.editorModified = true;

    saveEditor();
    updateEditorLineNumbers();
    updateEditorModifiedState();

    showToast("Editor cleared.", "info");
}


function updateEditorModifiedState() {
    const text = courseState.editorModified ? "Modified" : "Ready";

    setText("editorModifiedIndicator", text);
    setText(
        "editorStatusText",
        courseState.editorModified ? "Unsaved changes" : "Editor ready"
    );
}


function updateEditorLineNumbers() {
    if (!dom.practiceCode || !dom.editorLineNumbers) return;

    const count = Math.max(
        1,
        dom.practiceCode.value.split("\n").length
    );

    dom.editorLineNumbers.textContent = Array
        .from({ length: count }, (_, index) => index + 1)
        .join("\n");
}


function handleEditorTab(event) {
    if (!dom.practiceCode || event.key !== "Tab") return;

    event.preventDefault();

    const textarea = dom.practiceCode;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    textarea.setRangeText("    ", start, end, "end");

    courseState.editorModified = true;

    saveEditor();
    updateEditorLineNumbers();
    updateEditorModifiedState();
}


/* =========================================================
   13. ONLINE COMPILER AVAILABILITY
========================================================= */

async function checkCompilerAvailability() {
    setText("compilerStatus", "Checking...");

    try {
        const response = await fetch(
            `${CSharpCourse.compilerEndpoint}/runtimes`,
            {
                method: "GET",
                cache: "no-store"
            }
        );

        if (!response.ok) {
            throw new Error(`Compiler service returned HTTP ${response.status}`);
        }

        const runtimes = await response.json();

        const available = Array.isArray(runtimes) &&
            runtimes.some(runtime =>
                String(runtime.language).toLowerCase() === "csharp"
            );

        courseState.compilerAvailable = available;
        courseState.compilerChecked = true;

        setText(
            "compilerStatus",
            available ? "Available" : "Unavailable"
        );

        if (available) {
            showToast("C# compiler connection is ready.", "success");
        }

    } catch (error) {
        courseState.compilerAvailable = false;
        courseState.compilerChecked = true;

        setText("compilerStatus", "Connection unavailable");

        console.warn("Compiler availability check failed:", error);
    }
}


/* =========================================================
   14. RUN C# CODE
========================================================= */

async function runPracticeCode() {
    if (!dom.practiceCode) return;

    if (courseState.isRunning) return;

    const code = dom.practiceCode.value.trim();

    if (!code) {
        showToast("Write some C# code before running it.", "warning");
        return;
    }

    courseState.isRunning = true;

    const startTime = performance.now();

    setRunButtonState(true);

    setText("executionStatus", "Running...");
    setText("executionTime", "Execution time: running...");
    setText("compilerMessage", "Sending code to the compiler...");

    renderCompilerOutput(
        "Compiling and running your C# program...",
        "loading"
    );


    try {
        const controller = new AbortController();

        const timeout = setTimeout(() => controller.abort(), 25000);

        let response;

        try {
            response = await fetch(
                `${CSharpCourse.compilerEndpoint}/execute`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    signal: controller.signal,
                    body: JSON.stringify({
                        language: CSharpCourse.language,
                        version: CSharpCourse.compilerVersion,
                        files: [
                            {
                                name: "Program.cs",
                                content: code
                            }
                        ],
                        stdin: "",
                        args: [],
                        compile_timeout: 10000,
                        run_timeout: 10000
                    })
                }
            );
        } finally {
            clearTimeout(timeout);
        }


        if (!response.ok) {
            throw new Error(
                `Compiler service returned HTTP ${response.status}.`
            );
        }


        const result = await response.json();

        const elapsed = Math.round(performance.now() - startTime);

        setText("executionTime", `Execution time: ${elapsed} ms`);


        const compileOutput = result.compile && result.compile.output
            ? result.compile.output
            : "";

        const runOutput = result.run && result.run.output
            ? result.run.output
            : "";

        const runError = result.run && result.run.stderr
            ? result.run.stderr
            : "";

        const compileError = result.compile && result.compile.stderr
            ? result.compile.stderr
            : "";


        if (result.compile && result.compile.code !== 0) {
            renderCompilerOutput(
                compileError || compileOutput || "Compilation failed.",
                "error"
            );

            setText("executionStatus", "Compilation failed");
            setText("compilerMessage", "Review the compiler error and correct your code.");

            return;
        }


        if (result.run && result.run.code !== 0) {
            renderCompilerOutput(
                runError || runOutput || "The program did not finish successfully.",
                "error"
            );

            setText("executionStatus", "Execution error");
            setText("compilerMessage", "The program returned a non-zero exit code.");

            return;
        }


        const finalOutput = runOutput || "(Program completed with no output.)";

        renderCompilerOutput(finalOutput, "success");

        setText("executionStatus", "Execution successful");
        setText("compilerMessage", "Your C# program finished running.");

        announce("C# program execution completed.");

    } catch (error) {
        const message = error.name === "AbortError"
            ? "The compiler request timed out. Try again later."
            : `Unable to run the program: ${error.message}`;

        renderCompilerOutput(message, "error");

        setText("executionStatus", "Execution unavailable");
        setText("compilerMessage", "Check your internet connection or compiler service.");

        showToast(
            "The online compiler could not complete the request.",
            "error"
        );

        console.error("C# execution failed:", error);

    } finally {
        courseState.isRunning = false;

        setRunButtonState(false);
    }
}


function setRunButtonState(running) {
    if (!dom.runCodeButton) return;

    dom.runCodeButton.disabled = running;

    dom.runCodeButton.innerHTML = running
        ? `<span class="run-button-icon">⏳</span><span>Running...</span>`
        : `<span class="run-button-icon">▶</span><span>Run Code</span>`;
}


function renderCompilerOutput(message, type = "normal") {
    if (!dom.compilerOutput) return;

    dom.compilerOutput.innerHTML = "";

    const pre = document.createElement("pre");

    pre.textContent = String(message);

    pre.className = `compiler-result-${type}`;

    dom.compilerOutput.appendChild(pre);
}


function clearCompilerOutput() {
    if (!dom.compilerOutput) return;

    dom.compilerOutput.innerHTML = `
        <div class="output-placeholder">
            <span class="terminal-placeholder-icon">&gt;_</span>
            <p>Your program's output will appear here.</p>
            <small>Write some C# code and click Run Code.</small>
        </div>
    `;

    setText("executionStatus", "Not executed yet");
    setText("executionTime", "Execution time: —");
    setText("compilerMessage", "Ready for your next program.");
}


/* =========================================================
   15. CHALLENGE HINTS
========================================================= */

function toggleHint() {
    if (!dom.challengeHint) return;

    const willOpen = dom.challengeHint.hidden;

    dom.challengeHint.hidden = !willOpen;

    if (dom.showHintButton) {
        dom.showHintButton.setAttribute(
            "aria-expanded",
            String(willOpen)
        );

        dom.showHintButton.innerHTML = `
            <span>${willOpen ? "Hide hint" : "Need a hint?"}</span>
            <span class="hint-toggle-icon">${willOpen ? "−" : "＋"}</span>
        `;
    }
}


/* =========================================================
   16. CHALLENGE ANSWER CHECKING
========================================================= */

function checkChallenge() {
    const index = courseState.currentLesson;

    const lesson = lessons[index];

    const answer = dom.challengeAnswer
        ? dom.challengeAnswer.value.trim()
        : "";

    if (!answer) {
        showToast("Write your answer before checking it.", "warning");
        return;
    }

    courseState.lessonAnswers[index] = answer;

    saveProgress();


    const answerLower = answer.toLowerCase();

    const checks = lesson.checks || [];

    const matched = checks.filter(term =>
        answerLower.includes(String(term).toLowerCase())
    );

    const ratio = checks.length > 0
        ? matched.length / checks.length
        : 0;


    if (ratio >= 0.6) {
        handleChallengeSuccess(index);
    } else {
        showChallengeFeedback(
            "Keep trying!",
            "Your answer may need more of the required concepts. Review the lesson, use the hint if needed, and try again. This automatic check is only a basic keyword check.",
            "incorrect"
        );
    }
}


function handleChallengeSuccess(index) {
    if (!courseState.challengeCompleted.includes(index)) {
        courseState.challengeCompleted.push(index);

        saveProgress();

        showToast("Challenge passed! Nice work.", "success");
    } else {
        showToast("You've already received credit for this challenge.", "info");
    }

    showChallengeFeedback(
        "Good work!",
        "Your answer contains several expected concepts. This is a basic keyword check, not a full C# code evaluation. Run your code in the practice editor and verify that it behaves correctly.",
        "correct"
    );

    saveProgress();
}


function showChallengeFeedback(title, message, type) {
    if (!dom.challengeFeedback) return;

    dom.challengeFeedback.hidden = false;

    dom.challengeFeedback.className =
        `challenge-feedback ${type}`;

    dom.challengeFeedback.innerHTML = `
        <strong>${escapeHTML(title)}</strong>
        <p>${escapeHTML(message)}</p>
    `;
}


function resetChallengeAnswer() {
    if (dom.challengeAnswer) {
        dom.challengeAnswer.value = "";
    }

    delete courseState.lessonAnswers[courseState.currentLesson];

    saveProgress();

    if (dom.challengeFeedback) {
        dom.challengeFeedback.hidden = true;
        dom.challengeFeedback.textContent = "";
    }

    showToast("Challenge answer reset.", "info");
}


/* =========================================================
   17. CERTIFICATE PROGRESS
========================================================= */

function updateCertificateSection() {
    const completed = courseState.completedLessons.length;

    const total = lessons.length;

    const percentage = Math.round((completed / total) * 100);

    const unlocked = completed === total;


    setText(
        "certificateProgressText",
        `${completed} of ${total} lessons completed`
    );

    if (dom.certificateProgressFill) {
        dom.certificateProgressFill.style.width = `${percentage}%`;
    }

    if (dom.certificateLockedMessage) {
        dom.certificateLockedMessage.hidden = unlocked;

        if (!unlocked) {
            dom.certificateLockedMessage.innerHTML = `
                <span class="certificate-lock-icon">🔒</span>
                <div>
                    <strong>Certificate Locked</strong>
                    <p>Complete all ${total} lessons to unlock your certificate.</p>
                </div>
            `;
        } else {
            dom.certificateLockedMessage.innerHTML = `
                <span class="certificate-lock-icon">🏆</span>
                <div>
                    <strong>Certificate Unlocked!</strong>
                    <p>You completed all ${total} lessons. You can now generate your certificate.</p>
                </div>
            `;
        }
    }

    if (dom.openCertificateButton) {
        dom.openCertificateButton.disabled = !unlocked;
    }
}


/* =========================================================
   18. CERTIFICATE MODAL
========================================================= */

function openCertificateModal() {
    if (courseState.completedLessons.length !== lessons.length) {
        showToast("Complete all 40 lessons before claiming your certificate.", "warning");
        return;
    }

    if (!dom.certificateModal) return;

    dom.certificateModal.hidden = false;
    dom.certificateModal.setAttribute("aria-hidden", "false");
    dom.certificateModal.classList.add("open");

    if (dom.certificateLearnerName) {
        dom.certificateLearnerName.value = courseState.learnerName || "";

        if (dom.previewLearnerName) {
            dom.previewLearnerName.textContent =
                courseState.learnerName || "Learner's Name";
        }

        dom.certificateLearnerName.focus();
    }
}


function closeCertificateModal() {
    if (!dom.certificateModal) return;

    dom.certificateModal.hidden = true;
    dom.certificateModal.setAttribute("aria-hidden", "true");
    dom.certificateModal.classList.remove("open");
}


function generateCertificate(event) {
    event.preventDefault();

    if (courseState.completedLessons.length !== lessons.length) {
        showToast("Complete every lesson before generating the certificate.", "warning");
        closeCertificateModal();
        return;
    }

    const name = dom.certificateLearnerName
        ? dom.certificateLearnerName.value.trim()
        : "";

    if (name.length < 2) {
        showToast("Please enter your full name.", "warning");
        return;
    }

    courseState.learnerName = name;

    try {
        localStorage.setItem(CSharpCourse.learnerKey, name);
    } catch (error) {
        console.warn("Could not save learner name:", error);
    }


    setText("previewLearnerName", name);
    setText("printLearnerName", name);

    const date = new Date().toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    setText("printCertificateDate", date);

    closeCertificateModal();

    showToast("Your certificate is ready to print.", "success");

    setTimeout(() => {
        window.print();
    }, 300);
}


function loadSavedLearnerName() {
    try {
        courseState.learnerName =
            localStorage.getItem(CSharpCourse.learnerKey) || "";
    } catch (error) {
        courseState.learnerName = "";
    }

    setText(
        "previewLearnerName",
        courseState.learnerName || "Learner's Name"
    );

    setText(
        "printLearnerName",
        courseState.learnerName || "Learner's Name"
    );
}


/* =========================================================
   19. AMBIENT PARTICLES
========================================================= */

function createAmbientParticles() {
    const container = $("ambientParticles");

    if (!container) return;

    if (container.children.length > 0) return;

    const amount = window.matchMedia("(max-width: 700px)").matches
        ? 12
        : 24;

    for (let i = 0; i < amount; i++) {
        const particle = document.createElement("span");

        particle.className = "ambient-particle";

        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        particle.style.animationDelay = `${Math.random() * 8}s`;
        particle.style.animationDuration = `${8 + Math.random() * 10}s`;

        container.appendChild(particle);
    }
}


/* =========================================================
   20. COPY TEXT
========================================================= */

async function copyText(text, successMessage) {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
        } else {
            fallbackCopyText(text);
        }

        showToast(successMessage, "success");

    } catch (error) {
        try {
            fallbackCopyText(text);
            showToast(successMessage, "success");
        } catch (fallbackError) {
            showToast("Copy failed. Please select and copy the code manually.", "error");
        }
    }
}


function fallbackCopyText(text) {
    const textarea = document.createElement("textarea");

    textarea.value = text;

    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    textarea.style.pointerEvents = "none";

    document.body.appendChild(textarea);

    textarea.select();

    const successful = document.execCommand("copy");

    textarea.remove();

    if (!successful) {
        throw new Error("Copy command was unsuccessful.");
    }
}


/* =========================================================
   21. TOAST NOTIFICATIONS
========================================================= */

function showToast(message, type = "info") {
    if (!dom.toastContainer) {
        console.log(`[${type}] ${message}`);
        return;
    }

    const toast = document.createElement("div");

    toast.className = `toast toast-${type}`;

    toast.setAttribute("role", "status");

    toast.textContent = message;

    dom.toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add("show");
    });

    setTimeout(() => {
        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 3500);
}


/* =========================================================
   22. ACCESSIBILITY ANNOUNCEMENTS
========================================================= */

function announce(message) {
    if (!dom.liveAnnouncement) return;

    dom.liveAnnouncement.textContent = "";

    setTimeout(() => {
        dom.liveAnnouncement.textContent = message;
    }, 50);
}


/* =========================================================
   23. UTILITY FUNCTIONS
========================================================= */

function setText(id, value) {
    const element = dom[id] || $(id);

    if (element) {
        element.textContent = String(value);
    }
}


function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function updateCurrentYear() {
    setText("currentYear", new Date().getFullYear());
}


/* =========================================================
   24. PRINT SUPPORT
========================================================= */

window.addEventListener("beforeprint", () => {
    const completed = courseState.completedLessons.length;

    if (completed !== lessons.length) {
        console.warn(
            "Certificate printing was requested before all lessons were completed."
        );
    }
});


/* =========================================================
   25. COURSE DEBUG INFORMATION
========================================================= */

window.ELOMCODE_CSHARP = {
    get lessonCount() {
        return lessons.length;
    },

    get completedCount() {
        return courseState.completedLessons.length;
    },

    get currentLesson() {
        return courseState.currentLesson + 1;
    },

    get xp() {
        return courseState.xp;
    },

    get compilerAvailable() {
        return courseState.compilerAvailable;
    }
};


/* =========================================================
   END OF ELOMCODE SCHOOL C# MASTERCLASS
========================================================= */