/* =========================================================
   ELOMCODE SCHOOL — JAVA MASTERCLASS
   File: java.js

   Learn. Code. Build. Become.
   Course Architect: Elijah Opomulero

   FEATURES
   - 50 Java lessons
   - Searchable lesson sidebar
   - Lesson navigation
   - Progress saved in localStorage
   - XP system
   - Example code and expected output
   - Practice editor
   - Online Java execution request
   - Lesson challenges and hints
   - Certificate after completing all lessons
   - Responsive mobile sidebar
   ========================================================= */

"use strict";


/* =========================================================
   01. CONFIGURATION
   ========================================================= */

const JAVA_CONFIG = {
    totalLessons: 50,
    xpPerLesson: 25,
    storageKey: "elomcode_java_masterclass_progress",
    certificateNameKey: "elomcode_java_certificate_name",
    compilerEndpoint: "https://emkc.org/api/v2/piston/execute"
};


/* =========================================================
   02. LESSON DATA

   Every lesson includes:
   - Title
   - Category
   - Subtitle
   - Explanation
   - Example
   - Expected output
   - Challenge
   - Hint
   - Starter code

   The practice editor starts empty.
   ========================================================= */

const javaLessons = [

    {
        title: "Introduction to Java",
        category: "GETTING STARTED",
        subtitle: "Discover Java and what you can build with it.",
        explanation: `
            <p><strong>Java</strong> is a general-purpose programming language used to build many kinds of software, including desktop applications, backend services, and Android applications.</p>
            <p>Java is known for its object-oriented approach and its ability to run on different operating systems when a compatible Java runtime is available.</p>
            <h4>Why learn Java?</h4>
            <ul>
                <li>It teaches you important programming concepts.</li>
                <li>It supports object-oriented programming.</li>
                <li>It is used in many real-world software projects.</li>
                <li>Its strong type system helps you understand how programs use data.</li>
            </ul>
            <p>In this course, you will start with the basics and gradually work towards building a small project.</p>
        `,
        tip: "Do not rush. Understanding the basics will make advanced Java topics easier.",
        example: `public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to Java!");
    }
}`,
        output: "Welcome to Java!",
        challengeTitle: "Your First Java Challenge",
        challenge: "Read the example and identify the statement that prints a message to the console.",
        hint: "Look for the line containing System.out.println.",
        starter: ""
    },

    {
        title: "Setting Up Java",
        category: "GETTING STARTED",
        subtitle: "Understand what you need before writing Java programs.",
        explanation: `
            <p>To compile and run Java programs on your computer, you normally install a <strong>Java Development Kit (JDK)</strong>.</p>
            <p>The JDK includes tools for compiling Java source code and running Java applications.</p>
            <h4>Important tools</h4>
            <ul>
                <li><strong>JDK:</strong> Tools for Java development.</li>
                <li><strong>javac:</strong> The Java compiler.</li>
                <li><strong>java:</strong> The command used to launch a Java application.</li>
            </ul>
            <p>You can write Java code in a text editor, but you still need a compatible Java environment to compile and execute it.</p>
        `,
        tip: "Check whether Java is installed before troubleshooting your code.",
        example: `java --version
javac --version`,
        output: "The commands display the installed Java runtime and compiler versions, if available.",
        challengeTitle: "Understand Your Tools",
        challenge: "Which tool compiles a Java source file: java or javac?",
        hint: "The compiler command ends with the letter c.",
        starter: ""
    },

    {
        title: "Your First Java Program",
        category: "GETTING STARTED",
        subtitle: "Create a simple program that displays a message.",
        explanation: `
            <p>A Java application can begin with a class containing a <strong>main</strong> method.</p>
            <p>The main method is a standard entry point used when launching many basic Java applications.</p>
            <p><strong>System.out.println()</strong> prints text and then moves to a new line.</p>
            <h4>Remember</h4>
            <ul>
                <li>Java statements commonly end with a semicolon.</li>
                <li>Class names are conventionally written in PascalCase.</li>
                <li>The file name should match the public class name.</li>
            </ul>
        `,
        tip: "Try changing the message inside the quotation marks.",
        example: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,
        output: "Hello, Java!",
        challengeTitle: "Print Your Own Message",
        challenge: "Write a Java program that prints: I am learning Java!",
        hint: "Create the Main class, add the main method, and use System.out.println().",
        starter: ""
    },

    {
        title: "Java Syntax",
        category: "JAVA FUNDAMENTALS",
        subtitle: "Learn the basic rules that Java code follows.",
        explanation: `
            <p><strong>Syntax</strong> means the rules that define how code must be written.</p>
            <p>Java uses curly braces to group blocks of code. Statements commonly end with semicolons, and Java is case-sensitive.</p>
            <h4>Example</h4>
            <p><strong>System.out.println</strong> and <strong>system.out.println</strong> are not equivalent. Capitalization matters.</p>
            <p>When Java encounters invalid syntax, compilation normally fails and reports an error.</p>
        `,
        tip: "Check capitalization, braces, parentheses, and semicolons when debugging.",
        example: `public class Main {
    public static void main(String[] args) {
        System.out.println("Java syntax matters.");
    }
}`,
        output: "Java syntax matters.",
        challengeTitle: "Spot the Rules",
        challenge: "Write one valid println statement inside a Java main method.",
        hint: "Use System.out.println(\"Your message\");",
        starter: ""
    },

    {
        title: "Java Comments",
        category: "JAVA FUNDAMENTALS",
        subtitle: "Write notes in your code without executing them.",
        explanation: `
            <p>Comments help explain code to people reading it. Java ignores ordinary comments during program execution.</p>
            <h4>Three common comment forms</h4>
            <ul>
                <li><strong>//</strong> starts a single-line comment.</li>
                <li><strong>/* ... */</strong> surrounds a block comment.</li>
                <li><strong>/** ... */</strong> can document classes and methods using Javadoc conventions.</li>
            </ul>
            <p>Use comments to explain important reasoning rather than repeating what every line already says.</p>
        `,
        tip: "Keep comments useful and up to date.",
        example: `public class Main {
    public static void main(String[] args) {
        // Display a welcome message
        System.out.println("Welcome!");
    }
}`,
        output: "Welcome!",
        challengeTitle: "Add a Comment",
        challenge: "Write a Java program containing a comment and a println statement.",
        hint: "Start a single-line comment with //.",
        starter: ""
    },

    {
        title: "Java Variables",
        category: "DATA AND VARIABLES",
        subtitle: "Store information so your program can use it.",
        explanation: `
            <p>A <strong>variable</strong> is a named location used to hold a value.</p>
            <p>Java requires variables to have declared types. For example, int is commonly used for whole numbers, while String represents text.</p>
            <h4>Declaration example</h4>
            <p><strong>int age = 17;</strong> declares an integer variable named age and gives it an initial value.</p>
            <p>You can use a variable later in your program and, when permitted, assign it a new value.</p>
        `,
        tip: "Choose meaningful variable names such as studentName or totalScore.",
        example: `public class Main {
    public static void main(String[] args) {
        int score = 85;
        System.out.println(score);
    }
}`,
        output: "85",
        challengeTitle: "Create a Variable",
        challenge: "Declare an integer variable named score and print its value.",
        hint: "Use int score = 100; followed by a println statement.",
        starter: ""
    },

    {
        title: "Java Data Types",
        category: "DATA AND VARIABLES",
        subtitle: "Choose the appropriate type for each value.",
        explanation: `
            <p>A data type tells Java what kind of value a variable can hold.</p>
            <h4>Primitive types</h4>
            <ul>
                <li><strong>int:</strong> Whole numbers.</li>
                <li><strong>double:</strong> Numbers that can contain a fractional part.</li>
                <li><strong>char:</strong> A single UTF-16 code unit.</li>
                <li><strong>boolean:</strong> true or false.</li>
                <li><strong>long, float, byte, short:</strong> Other numeric types.</li>
            </ul>
            <p><strong>String</strong> is a reference type commonly used for text.</p>
        `,
        tip: "Choose a type that can represent the values your program needs.",
        example: `public class Main {
    public static void main(String[] args) {
        int age = 17;
        double price = 25.5;
        char grade = 'A';
        boolean learning = true;
        String name = "Elijah";

        System.out.println(name);
        System.out.println(age);
        System.out.println(price);
        System.out.println(grade);
        System.out.println(learning);
    }
}`,
        output: "Elijah\n17\n25.5\nA\ntrue",
        challengeTitle: "Choose Your Types",
        challenge: "Declare one integer, one decimal number, and one boolean.",
        hint: "Try int, double, and boolean.",
        starter: ""
    },

    {
        title: "Type Casting",
        category: "DATA AND VARIABLES",
        subtitle: "Convert values between compatible data types.",
        explanation: `
            <p><strong>Type casting</strong> means converting a value from one type to another.</p>
            <p>Widening conversions, such as int to double, can happen automatically when the conversion is supported.</p>
            <p>Narrowing conversions, such as double to int, may lose information and normally require an explicit cast.</p>
            <p>Converting 8.9 to int using a cast produces 8 because the fractional part is discarded.</p>
        `,
        tip: "Casting a floating-point number to an integer does not round it to the nearest integer.",
        example: `public class Main {
    public static void main(String[] args) {
        double price = 8.9;
        int wholePrice = (int) price;

        System.out.println(wholePrice);
    }
}`,
        output: "8",
        challengeTitle: "Convert a Number",
        challenge: "Create a double value and explicitly cast it to an int.",
        hint: "Use (int) before the expression you want to convert.",
        starter: ""
    },

    {
        title: "Java Operators",
        category: "OPERATORS",
        subtitle: "Perform calculations and comparisons.",
        explanation: `
            <p>Operators perform actions on values and variables.</p>
            <h4>Common operator groups</h4>
            <ul>
                <li><strong>Arithmetic:</strong> +, -, *, /, %</li>
                <li><strong>Comparison:</strong> ==, !=, &gt;, &lt;, &gt;=, &lt;=</li>
                <li><strong>Logical:</strong> &amp;&amp;, ||, !</li>
                <li><strong>Assignment:</strong> =, +=, -=, *=</li>
            </ul>
            <p>When working with integer division, a fractional result is discarded. For example, 7 / 2 evaluates to 3 when both operands are integers.</p>
        `,
        tip: "Use parentheses to make complicated expressions easier to read.",
        example: `public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;

        System.out.println(a + b);
        System.out.println(a % b);
        System.out.println(a > b);
    }
}`,
        output: "13\n1\ntrue",
        challengeTitle: "Practise Operators",
        challenge: "Write a program that adds two numbers and prints the result.",
        hint: "Create two int variables and add them using +.",
        starter: ""
    },

    {
        title: "User Input",
        category: "INPUT AND OUTPUT",
        subtitle: "Let a program receive information from a user.",
        explanation: `
            <p>The <strong>Scanner</strong> class is commonly used to read console input.</p>
            <p>You can create a Scanner connected to System.in and use methods such as nextInt() or nextLine().</p>
            <p>Programs that read input may need careful handling of newlines and invalid values.</p>
            <p>The browser-based runner may provide limited or no interactive standard input. If so, practise input handling locally with a JDK.</p>
        `,
        tip: "When mixing nextInt() and nextLine(), remember that nextInt() does not consume the line break after the number.",
        example: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Enter your age:");
        int age = input.nextInt();

        System.out.println(age);
        input.close();
    }
}`,
        output: "Enter your age:\nThe next line displays the integer supplied to standard input, when input is available.",
        challengeTitle: "Read a Value",
        challenge: "Write a program that creates a Scanner and reads an integer.",
        hint: "Import java.util.Scanner and use nextInt().",
        starter: ""
    },

    {
        title: "Java Strings",
        category: "STRINGS",
        subtitle: "Work with text in Java programs.",
        explanation: `
            <p>A <strong>String</strong> represents a sequence of characters and is one of the most commonly used Java reference types.</p>
            <p>You create string literals using double quotation marks.</p>
            <p>Strings are immutable: operations on a String produce a result rather than changing the original String object.</p>
            <p>Use equals() to compare string contents. Using == compares references rather than reliably comparing text values.</p>
        `,
        tip: "For content comparison, use name.equals(\"Elijah\") rather than name == \"Elijah\".",
        example: `public class Main {
    public static void main(String[] args) {
        String firstName = "Elijah";
        String message = "Hello, " + firstName;

        System.out.println(message);
    }
}`,
        output: "Hello, Elijah",
        challengeTitle: "Join Two Strings",
        challenge: "Create two String variables and combine them into a message.",
        hint: "Use the + operator to concatenate strings.",
        starter: ""
    },

    {
        title: "String Methods",
        category: "STRINGS",
        subtitle: "Use built-in methods to examine and work with text.",
        explanation: `
            <p>Java strings provide methods that make common text operations easier.</p>
            <ul>
                <li><strong>length():</strong> Returns the number of UTF-16 code units.</li>
                <li><strong>toUpperCase():</strong> Returns an uppercase version.</li>
                <li><strong>toLowerCase():</strong> Returns a lowercase version.</li>
                <li><strong>contains():</strong> Checks whether a sequence appears.</li>
                <li><strong>substring():</strong> Extracts part of a string.</li>
            </ul>
            <p>Many string operations return new strings because strings are immutable.</p>
        `,
        tip: "String indexes start at zero.",
        example: `public class Main {
    public static void main(String[] args) {
        String word = "Java";

        System.out.println(word.length());
        System.out.println(word.toUpperCase());
    }
}`,
        output: "4\nJAVA",
        challengeTitle: "Explore a String",
        challenge: "Print the length and uppercase version of a word.",
        hint: "Use length() and toUpperCase().",
        starter: ""
    },

    {
        title: "Java Math",
        category: "MATH AND LOGIC",
        subtitle: "Use the Math class for common mathematical operations.",
        explanation: `
            <p>Java provides the <strong>Math</strong> class for common mathematical operations.</p>
            <ul>
                <li>Math.max(a, b) returns the greater value.</li>
                <li>Math.min(a, b) returns the smaller value.</li>
                <li>Math.sqrt(x) calculates a square root.</li>
                <li>Math.abs(x) returns an absolute value.</li>
                <li>Math.pow(a, b) raises a value to a power.</li>
            </ul>
        `,
        tip: "Check the method's return type and the kind of arguments it accepts.",
        example: `public class Main {
    public static void main(String[] args) {
        System.out.println(Math.max(12, 7));
        System.out.println(Math.sqrt(81));
        System.out.println(Math.abs(-5));
    }
}`,
        output: "12\n9.0\n5",
        challengeTitle: "Calculate a Square Root",
        challenge: "Use Math.sqrt() to calculate the square root of 144.",
        hint: "Pass 144 into Math.sqrt().",
        starter: ""
    },

    {
        title: "Boolean Values",
        category: "MATH AND LOGIC",
        subtitle: "Represent true and false conditions.",
        explanation: `
            <p>The boolean type has only two possible values: <strong>true</strong> and <strong>false</strong>.</p>
            <p>Boolean expressions are important when making decisions and controlling loops.</p>
            <p>Comparison expressions, such as age &gt;= 18, evaluate to a boolean result.</p>
        `,
        tip: "A boolean variable can make a condition easier to understand.",
        example: `public class Main {
    public static void main(String[] args) {
        boolean hasAccess = true;

        System.out.println(hasAccess);
        System.out.println(10 > 3);
    }
}`,
        output: "true\ntrue",
        challengeTitle: "Check a Condition",
        challenge: "Create a boolean variable and print its value.",
        hint: "Try boolean isLearning = true;.",
        starter: ""
    },

    {
        title: "If Statements",
        category: "CONDITIONALS",
        subtitle: "Run code only when a condition is true.",
        explanation: `
            <p>An <strong>if statement</strong> allows a program to make a decision.</p>
            <p>If the condition evaluates to true, the statements inside the block execute. Otherwise, the block is skipped.</p>
            <p>Use comparison and boolean operators to create conditions.</p>
        `,
        tip: "Use curly braces even for short blocks to make the program easier to maintain.",
        example: `public class Main {
    public static void main(String[] args) {
        int score = 80;

        if (score >= 50) {
            System.out.println("Passed");
        }
    }
}`,
        output: "Passed",
        challengeTitle: "Make a Decision",
        challenge: "Print a message only when a number is greater than 10.",
        hint: "Use if (number > 10).",
        starter: ""
    },

    {
        title: "If Else Statements",
        category: "CONDITIONALS",
        subtitle: "Choose between two possible paths.",
        explanation: `
            <p>An <strong>if-else statement</strong> provides two paths.</p>
            <p>The if block runs when the condition is true. The else block runs when the condition is false.</p>
            <p>This is useful when a program must choose between outcomes.</p>
        `,
        tip: "Make sure your condition matches the decision you actually want to make.",
        example: `public class Main {
    public static void main(String[] args) {
        int score = 42;

        if (score >= 50) {
            System.out.println("Passed");
        } else {
            System.out.println("Keep practising");
        }
    }
}`,
        output: "Keep practising",
        challengeTitle: "Choose an Outcome",
        challenge: "Print one message if a number is positive and another if it is not positive.",
        hint: "Use if (number > 0) and an else block.",
        starter: ""
    },

    {
        title: "Else If Statements",
        category: "CONDITIONALS",
        subtitle: "Check several conditions in sequence.",
        explanation: `
            <p>An <strong>else if</strong> chain checks multiple conditions.</p>
            <p>Java evaluates the conditions in order. Once a condition matches, its block executes and the remaining branches are skipped.</p>
            <p>Order your conditions carefully, especially when one condition includes values covered by another.</p>
        `,
        tip: "Test the boundary values of your conditions.",
        example: `public class Main {
    public static void main(String[] args) {
        int score = 75;

        if (score >= 80) {
            System.out.println("Excellent");
        } else if (score >= 50) {
            System.out.println("Passed");
        } else {
            System.out.println("Try again");
        }
    }
}`,
        output: "Passed",
        challengeTitle: "Grade a Score",
        challenge: "Use if, else if, and else to display different messages for different scores.",
        hint: "Check the highest score range before lower ranges.",
        starter: ""
    },

    {
        title: "Switch Statements",
        category: "CONDITIONALS",
        subtitle: "Select an action based on a value.",
        explanation: `
            <p>A <strong>switch statement</strong> can make multiple alternatives easier to organise.</p>
            <p>Traditional switch statements can use case labels and break statements. Modern Java also supports switch expressions.</p>
            <p>Choose the switch form that fits your Java version and the task.</p>
        `,
        tip: "In a traditional switch statement, understand when execution falls through from one case to the next.",
        example: `public class Main {
    public static void main(String[] args) {
        int day = 2;

        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            default:
                System.out.println("Other day");
        }
    }
}`,
        output: "Tuesday",
        challengeTitle: "Choose a Menu Option",
        challenge: "Use a switch statement to print a message for one of two numeric choices.",
        hint: "Create a variable and match it with case labels.",
        starter: ""
    },

    {
        title: "While Loops",
        category: "LOOPS",
        subtitle: "Repeat code while a condition remains true.",
        explanation: `
            <p>A <strong>while loop</strong> checks its condition before each iteration.</p>
            <p>If the condition is initially false, the loop body does not run.</p>
            <p>Make sure the loop can eventually stop. Otherwise, it may run indefinitely.</p>
        `,
        tip: "Update the variable used in your loop condition.",
        example: `public class Main {
    public static void main(String[] args) {
        int count = 1;

        while (count <= 3) {
            System.out.println(count);
            count++;
        }
    }
}`,
        output: "1\n2\n3",
        challengeTitle: "Count to Five",
        challenge: "Use a while loop to print numbers from 1 through 5.",
        hint: "Start at 1, continue while the value is at most 5, and increment it.",
        starter: ""
    },

    {
        title: "Do While Loops",
        category: "LOOPS",
        subtitle: "Run a loop body at least once.",
        explanation: `
            <p>A <strong>do-while loop</strong> executes its body before checking its condition.</p>
            <p>This means the body runs at least once, even when the condition is initially false.</p>
            <p>The condition at the end of a do-while loop is followed by a semicolon.</p>
        `,
        tip: "Remember the semicolon after the while condition.",
        example: `public class Main {
    public static void main(String[] args) {
        int count = 1;

        do {
            System.out.println(count);
            count++;
        } while (count <= 3);
    }
}`,
        output: "1\n2\n3",
        challengeTitle: "Run at Least Once",
        challenge: "Create a do-while loop that prints a message once.",
        hint: "Place the println statement inside do { } and put the condition after while.",
        starter: ""
    },

    {
        title: "For Loops",
        category: "LOOPS",
        subtitle: "Repeat code using a clear counter structure.",
        explanation: `
            <p>A <strong>for loop</strong> combines initialisation, a condition, and an update in one statement.</p>
            <p>It is often useful when the number of iterations is known or when iterating over a range of values.</p>
            <p>The counter can be increased or decreased depending on your requirements.</p>
        `,
        tip: "Check whether your loop condition should use &lt; or &lt;=.",
        example: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
    }
}`,
        output: "1\n2\n3\n4\n5",
        challengeTitle: "Build a Counting Loop",
        challenge: "Use a for loop to print the numbers from 1 to 10.",
        hint: "Initialise i to 1 and continue while i <= 10.",
        starter: ""
    },

    {
        title: "Break and Continue",
        category: "LOOPS",
        subtitle: "Control how a loop proceeds.",
        explanation: `
            <p><strong>break</strong> exits the nearest enclosing loop or switch statement.</p>
            <p><strong>continue</strong> skips the remainder of the current loop iteration and proceeds to the next iteration.</p>
            <p>These statements can be useful, but clear loop conditions are often easier to maintain.</p>
        `,
        tip: "Use break and continue when they make your code clearer, not simply to avoid writing a good condition.",
        example: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            if (i == 3) {
                continue;
            }

            System.out.println(i);
        }
    }
}`,
        output: "1\n2\n4\n5",
        challengeTitle: "Skip a Number",
        challenge: "Print numbers 1 to 5, but skip the number 3.",
        hint: "Use continue when the counter equals 3.",
        starter: ""
    },

    {
        title: "Java Arrays",
        category: "ARRAYS",
        subtitle: "Store multiple values in one array.",
        explanation: `
            <p>An <strong>array</strong> stores a fixed number of elements of a particular type.</p>
            <p>Array indexes start at zero, so the first element is at index 0.</p>
            <p>The length property tells you how many elements the array contains.</p>
        `,
        tip: "An array index must be between 0 and length - 1.",
        example: `public class Main {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30};

        System.out.println(numbers[0]);
        System.out.println(numbers.length);
    }
}`,
        output: "10\n3",
        challengeTitle: "Create an Array",
        challenge: "Create an integer array containing three numbers and print the first one.",
        hint: "Use int[] values = {1, 2, 3};.",
        starter: ""
    },

    {
        title: "Loop Through Arrays",
        category: "ARRAYS",
        subtitle: "Visit each element in an array.",
        explanation: `
            <p>You can use a traditional for loop or an enhanced for loop to visit array elements.</p>
            <p>A traditional loop gives you direct access to the index. An enhanced for loop is convenient when you simply need each value.</p>
        `,
        tip: "Use array.length as the limit for a traditional array loop.",
        example: `public class Main {
    public static void main(String[] args) {
        int[] scores = {70, 80, 90};

        for (int score : scores) {
            System.out.println(score);
        }
    }
}`,
        output: "70\n80\n90",
        challengeTitle: "Print Every Element",
        challenge: "Create an array and print every element using a loop.",
        hint: "Try the enhanced for loop: for (int value : values).",
        starter: ""
    },

    {
        title: "Multidimensional Arrays",
        category: "ARRAYS",
        subtitle: "Organise values in rows and columns.",
        explanation: `
            <p>A multidimensional array can be used to represent rows and columns of values.</p>
            <p>A two-dimensional Java array is an array whose elements are themselves arrays. Its rows can have different lengths.</p>
            <p>Access an element using two indexes, such as matrix[0][1].</p>
        `,
        tip: "Remember that each index starts at zero.",
        example: `public class Main {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2},
            {3, 4}
        };

        System.out.println(matrix[1][0]);
    }
}`,
        output: "3",
        challengeTitle: "Read a Matrix",
        challenge: "Create a two-dimensional array and print one element.",
        hint: "Use two pairs of square brackets to access an element.",
        starter: ""
    },

    {
        title: "Java Methods",
        category: "METHODS",
        subtitle: "Organise reusable actions into methods.",
        explanation: `
            <p>A <strong>method</strong> is a named block of code that performs a task.</p>
            <p>Methods help organise programs into smaller, reusable parts.</p>
            <p>A method declaration includes information such as its name, parameters, and return type.</p>
        `,
        tip: "Give methods names that describe what they do.",
        example: `public class Main {
    static void greet() {
        System.out.println("Hello!");
    }

    public static void main(String[] args) {
        greet();
    }
}`,
        output: "Hello!",
        challengeTitle: "Create a Method",
        challenge: "Create a method named greet that prints a short message, then call it.",
        hint: "Declare static void greet() inside the class.",
        starter: ""
    },

    {
        title: "Method Parameters",
        category: "METHODS",
        subtitle: "Pass information into a method.",
        explanation: `
            <p><strong>Parameters</strong> are variables declared in a method's parameter list.</p>
            <p>When you call the method, you supply arguments that provide values for those parameters.</p>
            <p>The declared types of the arguments must be compatible with the parameter types.</p>
        `,
        tip: "Choose parameter names that explain the purpose of each input.",
        example: `public class Main {
    static void greet(String name) {
        System.out.println("Hello, " + name);
    }

    public static void main(String[] args) {
        greet("Elijah");
    }
}`,
        output: "Hello, Elijah",
        challengeTitle: "Pass a Name",
        challenge: "Create a greeting method that accepts a name and prints it.",
        hint: "Add a String parameter to your method.",
        starter: ""
    },

    {
        title: "Return Values",
        category: "METHODS",
        subtitle: "Send a result back from a method.",
        explanation: `
            <p>A method with a non-void return type provides a result to the caller.</p>
            <p>The return statement supplies that value and ends the method's current execution path.</p>
            <p>A void method does not return a value.</p>
        `,
        tip: "The returned value must be compatible with the method's declared return type.",
        example: `public class Main {
    static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(add(4, 6));
    }
}`,
        output: "10",
        challengeTitle: "Return a Sum",
        challenge: "Write a method that accepts two integers and returns their sum.",
        hint: "Use a method returning int and a return statement.",
        starter: ""
    },

    {
        title: "Method Overloading",
        category: "METHODS",
        subtitle: "Create methods with the same name but different parameters.",
        explanation: `
            <p><strong>Method overloading</strong> allows methods in the same class to share a name when their parameter lists differ.</p>
            <p>The compiler chooses the applicable overload based on the method call's arguments.</p>
            <p>Changing only the return type is not enough to create a valid overload.</p>
        `,
        tip: "Overloaded methods must differ in their parameter signatures.",
        example: `public class Main {
    static int add(int a, int b) {
        return a + b;
    }

    static double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(add(2, 3));
        System.out.println(add(2.5, 3.5));
    }
}`,
        output: "5\n6.0",
        challengeTitle: "Overload a Method",
        challenge: "Create two methods with the same name but different parameter types.",
        hint: "One method can accept int values and another can accept double values.",
        starter: ""
    },

    {
        title: "Variable Scope",
        category: "METHODS",
        subtitle: "Understand where variables can be accessed.",
        explanation: `
            <p><strong>Scope</strong> describes where a declared name can be accessed.</p>
            <p>A local variable declared inside a method or block is generally accessible only within that scope.</p>
            <p>Class fields have different access and lifetime rules from local variables.</p>
        `,
        tip: "Declare variables close to where they are needed.",
        example: `public class Main {
    public static void main(String[] args) {
        int number = 10;

        if (number > 5) {
            int bonus = 2;
            System.out.println(bonus);
        }

        System.out.println(number);
    }
}`,
        output: "2\n10",
        challengeTitle: "Explore Scope",
        challenge: "Declare a local variable inside a method and use it within that method.",
        hint: "Keep the variable inside the braces where it is used.",
        starter: ""
    },

    {
        title: "Recursion",
        category: "METHODS",
        subtitle: "Understand methods that call themselves.",
        explanation: `
            <p><strong>Recursion</strong> occurs when a method calls itself, directly or indirectly.</p>
            <p>A recursive method needs a base case that stops the recursive calls.</p>
            <p>Without an appropriate stopping condition, recursion may continue until the program runs out of stack space.</p>
        `,
        tip: "Check that every recursive path moves towards a base case.",
        example: `public class Main {
    static int factorial(int n) {
        if (n <= 1) {
            return 1;
        }

        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        System.out.println(factorial(5));
    }
}`,
        output: "120",
        challengeTitle: "Understand the Base Case",
        challenge: "Identify the condition that stops the factorial method from calling itself.",
        hint: "Look at the if statement at the start of factorial().",
        starter: ""
    },

    {
        title: "Classes and Objects",
        category: "OBJECT-ORIENTED JAVA",
        subtitle: "Learn the foundation of object-oriented programming.",
        explanation: `
            <p>A <strong>class</strong> defines a type that can contain fields and methods.</p>
            <p>An <strong>object</strong> is an instance of a class.</p>
            <p>Objects allow related data and behaviour to be organised together.</p>
        `,
        tip: "Use a class to model a concept in your program, such as a Student or Book.",
        example: `class Student {
    String name = "Elijah";
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();
        System.out.println(student.name);
    }
}`,
        output: "Elijah",
        challengeTitle: "Create an Object",
        challenge: "Create a simple class, instantiate it, and access one of its fields.",
        hint: "Use the new keyword to construct an object.",
        starter: ""
    },

    {
        title: "Constructors",
        category: "OBJECT-ORIENTED JAVA",
        subtitle: "Initialise objects when they are created.",
        explanation: `
            <p>A <strong>constructor</strong> is used when creating an instance of a class.</p>
            <p>A constructor has the same name as its class and does not declare a return type.</p>
            <p>Constructors can accept parameters so that new objects begin with useful values.</p>
        `,
        tip: "Do not write void before a constructor name.",
        example: `class Student {
    String name;

    Student(String studentName) {
        name = studentName;
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student("Elijah");
        System.out.println(s.name);
    }
}`,
        output: "Elijah",
        challengeTitle: "Build a Constructor",
        challenge: "Create a class whose constructor receives a name.",
        hint: "Use a constructor with a String parameter.",
        starter: ""
    },

    {
        title: "The this Keyword",
        category: "OBJECT-ORIENTED JAVA",
        subtitle: "Refer to the current object.",
        explanation: `
            <p>The <strong>this</strong> keyword refers to the current object in an instance context.</p>
            <p>It is often used to distinguish an instance field from a constructor or method parameter with the same name.</p>
        `,
        tip: "Use this.field when a parameter has the same name as an instance field.",
        example: `class Student {
    String name;

    Student(String name) {
        this.name = name;
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student("Elijah");
        System.out.println(s.name);
    }
}`,
        output: "Elijah",
        challengeTitle: "Use this",
        challenge: "Create a constructor where the parameter and field have the same name.",
        hint: "Assign this.name = name.",
        starter: ""
    },

    {
        title: "Encapsulation",
        category: "OBJECT-ORIENTED JAVA",
        subtitle: "Control access to an object's internal state.",
        explanation: `
            <p><strong>Encapsulation</strong> means keeping data and related behaviour together while controlling access to internal details.</p>
            <p>Java commonly uses private fields and public methods to manage how other code interacts with an object.</p>
            <p>Validation inside methods can help protect an object's state.</p>
        `,
        tip: "Getters and setters are common tools, but design methods around the object's actual needs.",
        example: `class Account {
    private int balance = 100;

    public int getBalance() {
        return balance;
    }
}

public class Main {
    public static void main(String[] args) {
        Account account = new Account();
        System.out.println(account.getBalance());
    }
}`,
        output: "100",
        challengeTitle: "Protect a Field",
        challenge: "Declare a private field and provide a public method to read its value.",
        hint: "A private field cannot normally be accessed directly from unrelated classes.",
        starter: ""
    },

    {
        title: "Inheritance",
        category: "OBJECT-ORIENTED JAVA",
        subtitle: "Create a class based on another class.",
        explanation: `
            <p><strong>Inheritance</strong> allows a class to extend another class.</p>
            <p>The subclass can inherit accessible members and add its own behaviour.</p>
            <p>Java supports single class inheritance: a class can extend one direct superclass.</p>
        `,
        tip: "Use inheritance when there is a genuine is-a relationship between classes.",
        example: `class Animal {
    void speak() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.speak();
    }
}`,
        output: "Animal sound",
        challengeTitle: "Extend a Class",
        challenge: "Create a subclass that extends a parent class containing a method.",
        hint: "Use the extends keyword.",
        starter: ""
    },

    {
        title: "Polymorphism",
        category: "OBJECT-ORIENTED JAVA",
        subtitle: "Use a common type for different implementations.",
        explanation: `
            <p><strong>Polymorphism</strong> allows code to work with a common parent type or interface while different objects provide their own behaviour.</p>
            <p>Method overriding is a common example: a subclass supplies its implementation of an inherited instance method.</p>
            <p>When an overridden instance method is called, Java chooses the implementation according to the actual object at runtime.</p>
        `,
        tip: "Use @Override above an overriding method to help the compiler check your intent.",
        example: `class Animal {
    void speak() {
        System.out.println("Animal");
    }
}

class Dog extends Animal {
    @Override
    void speak() {
        System.out.println("Dog");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Dog();
        animal.speak();
    }
}`,
        output: "Dog",
        challengeTitle: "Override a Method",
        challenge: "Create a subclass that overrides a method from its parent class.",
        hint: "Use @Override and provide a new method body.",
        starter: ""
    },

    {
        title: "Abstraction",
        category: "OBJECT-ORIENTED JAVA",
        subtitle: "Define essential behaviour while hiding implementation details.",
        explanation: `
            <p><strong>Abstraction</strong> focuses on what an object can do rather than exposing every detail of how it works.</p>
            <p>Java supports abstraction through abstract classes and interfaces.</p>
            <p>An abstract class can declare abstract methods that concrete subclasses must implement, subject to Java's language rules.</p>
        `,
        tip: "Use abstraction to express a useful contract for related classes.",
        example: `abstract class Shape {
    abstract double area();
}

class Square extends Shape {
    double side = 4;

    @Override
    double area() {
        return side * side;
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(new Square().area());
    }
}`,
        output: "16.0",
        challengeTitle: "Create an Abstract Class",
        challenge: "Declare an abstract class with one abstract method and implement it in a subclass.",
        hint: "Use the abstract keyword.",
        starter: ""
    },

    {
        title: "Interfaces",
        category: "OBJECT-ORIENTED JAVA",
        subtitle: "Define behaviour that classes can implement.",
        explanation: `
            <p>An <strong>interface</strong> defines a contract that implementing classes agree to fulfil.</p>
            <p>Interfaces can contain abstract methods and may also contain default, static, and private methods, depending on the declaration and Java version.</p>
            <p>A class can implement more than one interface.</p>
        `,
        tip: "Interfaces are useful when unrelated classes need to share a common capability.",
        example: `interface Greeter {
    void greet();
}

class Student implements Greeter {
    public void greet() {
        System.out.println("Hello!");
    }
}

public class Main {
    public static void main(String[] args) {
        Greeter g = new Student();
        g.greet();
    }
}`,
        output: "Hello!",
        challengeTitle: "Implement an Interface",
        challenge: "Create an interface with one method and implement it in a class.",
        hint: "Use implements in the class declaration.",
        starter: ""
    },

    {
        title: "Enums",
        category: "OBJECT-ORIENTED JAVA",
        subtitle: "Represent a fixed set of named constants.",
        explanation: `
            <p>An <strong>enum</strong> defines a type with a fixed set of named constants.</p>
            <p>Enums are useful for values such as days of the week, status values, and application choices.</p>
            <p>They provide more structure than using arbitrary strings for a fixed set of options.</p>
        `,
        tip: "Use enum values when a variable should represent one of a known set of choices.",
        example: `enum Level {
    BEGINNER,
    INTERMEDIATE,
    ADVANCED
}

public class Main {
    public static void main(String[] args) {
        Level level = Level.BEGINNER;
        System.out.println(level);
    }
}`,
        output: "BEGINNER",
        challengeTitle: "Define an Enum",
        challenge: "Create an enum with three named constants and print one of them.",
        hint: "Declare the enum outside the Main class.",
        starter: ""
    },

    {
        title: "Inner Classes",
        category: "OBJECT-ORIENTED JAVA",
        subtitle: "Understand classes declared inside other classes.",
        explanation: `
            <p>An <strong>inner class</strong> is a non-static nested class declared inside another class.</p>
            <p>Java also supports static nested classes, local classes, and anonymous classes.</p>
            <p>Nested types can help group implementation details with the class they support.</p>
        `,
        tip: "Choose nested classes when the relationship between the types makes the code easier to understand.",
        example: `class Outer {
    class Inner {
        void greet() {
            System.out.println("Hello from Inner");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Outer outer = new Outer();
        Outer.Inner inner = outer.new Inner();
        inner.greet();
    }
}`,
        output: "Hello from Inner",
        challengeTitle: "Create an Inner Class",
        challenge: "Declare a class inside another class and call one of its methods.",
        hint: "A non-static inner class instance is created through an outer object.",
        starter: ""
    },

    {
        title: "Exception Handling",
        category: "ERROR HANDLING",
        subtitle: "Handle exceptional situations in your program.",
        explanation: `
            <p>Java uses <strong>exceptions</strong> to represent conditions that interrupt normal program flow.</p>
            <p>Use try and catch to handle exceptions that you can meaningfully recover from. A finally block can perform cleanup that should happen regardless of whether an exception occurs.</p>
            <p>Checked exceptions may need to be caught or declared, while unchecked exceptions do not have that requirement.</p>
        `,
        tip: "Do not silently ignore exceptions. Handle them appropriately or allow them to be reported.",
        example: `public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException error) {
            System.out.println("Cannot divide by zero");
        }
    }
}`,
        output: "Cannot divide by zero",
        challengeTitle: "Handle an Exception",
        challenge: "Write a try-catch statement that handles an ArithmeticException.",
        hint: "Place the operation inside try and catch ArithmeticException.",
        starter: ""
    },

    {
        title: "File Handling",
        category: "FILES AND COLLECTIONS",
        subtitle: "Understand how Java reads and writes files.",
        explanation: `
            <p>Java provides several APIs for working with files.</p>
            <p>The java.nio.file package includes Path and Files, which are useful for reading, writing, and inspecting files.</p>
            <p>File operations can fail because of missing files, permissions, or other environmental conditions, so appropriate error handling is important.</p>
            <p>Online execution services may restrict file access or remove files after a run. File examples are best tested in a local Java environment.</p>
        `,
        tip: "Always understand where your program is allowed to read and write files.",
        example: `import java.nio.file.Path;
import java.nio.file.Files;
import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        Path file = Path.of("example.txt");

        Files.writeString(file, "Hello from Java");
        System.out.println(Files.readString(file));
    }
}`,
        output: "Hello from Java — if the execution environment permits the file operations.",
        challengeTitle: "Explore File APIs",
        challenge: "Identify the Java API used to read and write text files in this example.",
        hint: "Look at the import statements.",
        starter: ""
    },

    {
        title: "ArrayList",
        category: "FILES AND COLLECTIONS",
        subtitle: "Use a resizable collection of elements.",
        explanation: `
            <p><strong>ArrayList</strong> is a resizable list implementation from the Java Collections Framework.</p>
            <p>Unlike a regular array, an ArrayList can grow or shrink as elements are added or removed.</p>
            <p>ArrayList uses reference types as its element type. Use wrapper classes such as Integer when storing numeric values.</p>
        `,
        tip: "Remember to import java.util.ArrayList.",
        example: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();

        names.add("Elijah");
        names.add("Java");

        System.out.println(names.get(0));
        System.out.println(names.size());
    }
}`,
        output: "Elijah\n2",
        challengeTitle: "Create a List",
        challenge: "Create an ArrayList of strings, add two items, and print one item.",
        hint: "Use add(), get(), and size().",
        starter: ""
    },

    {
        title: "HashMap",
        category: "FILES AND COLLECTIONS",
        subtitle: "Store values associated with keys.",
        explanation: `
            <p>A <strong>HashMap</strong> stores key-value associations.</p>
            <p>Each key maps to at most one value in the map. Adding another value for the same key replaces its previous mapping.</p>
            <p>HashMap does not guarantee a particular iteration order.</p>
        `,
        tip: "Choose key types that have suitable equals() and hashCode() implementations.",
        example: `import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> scores = new HashMap<>();

        scores.put("Elijah", 95);

        System.out.println(scores.get("Elijah"));
    }
}`,
        output: "95",
        challengeTitle: "Store a Score",
        challenge: "Create a HashMap with a string key and an integer value.",
        hint: "Use put() to add an entry and get() to retrieve it.",
        starter: ""
    },

    {
        title: "Wrapper Classes",
        category: "JAVA FUNDAMENTALS",
        subtitle: "Use object representations of primitive values.",
        explanation: `
            <p>Java has wrapper classes for its primitive types. Examples include Integer, Double, Boolean, and Character.</p>
            <p>Wrapper objects are useful with APIs and collections that work with reference types.</p>
            <p>Java supports autoboxing and unboxing between compatible primitive values and wrapper types.</p>
        `,
        tip: "Be careful when unboxing a null wrapper reference; it can cause a NullPointerException.",
        example: `public class Main {
    public static void main(String[] args) {
        Integer score = 90;
        int actualScore = score;

        System.out.println(actualScore);
    }
}`,
        output: "90",
        challengeTitle: "Use a Wrapper",
        challenge: "Create an Integer object and assign its value to an int variable.",
        hint: "Java supports unboxing from Integer to int.",
        starter: ""
    },

    {
        title: "Generics",
        category: "ADVANCED FUNDAMENTALS",
        subtitle: "Write reusable classes and methods with type parameters.",
        explanation: `
            <p><strong>Generics</strong> allow classes, interfaces, and methods to work with type parameters.</p>
            <p>They improve type safety and reduce the need for manual casting in many collection-based programs.</p>
            <p>For example, ArrayList&lt;String&gt; declares a list intended to contain strings.</p>
        `,
        tip: "Use generics to express what kind of values a class or method expects.",
        example: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> words = new ArrayList<>();
        words.add("Java");

        String word = words.get(0);
        System.out.println(word);
    }
}`,
        output: "Java",
        challengeTitle: "Use a Generic Collection",
        challenge: "Create an ArrayList that stores strings and retrieve one value.",
        hint: "Declare it as ArrayList<String>.",
        starter: ""
    },

    {
        title: "Lambda Expressions",
        category: "ADVANCED FUNDAMENTALS",
        subtitle: "Represent behaviour using concise expressions.",
        explanation: `
            <p>A <strong>lambda expression</strong> can provide an implementation of a functional interface.</p>
            <p>Functional interfaces have one abstract method, although they may have other kinds of methods as well.</p>
            <p>Lambdas are commonly used with collection operations and event-based APIs.</p>
        `,
        tip: "Understand the target functional interface when reading a lambda expression.",
        example: `interface Greeting {
    void sayHello();
}

public class Main {
    public static void main(String[] args) {
        Greeting greeting = () ->
            System.out.println("Hello from a lambda!");

        greeting.sayHello();
    }
}`,
        output: "Hello from a lambda!",
        challengeTitle: "Write a Lambda",
        challenge: "Create a lambda expression that prints a message.",
        hint: "Use () -> followed by the action.",
        starter: ""
    },

    {
        title: "Date and Time",
        category: "ADVANCED FUNDAMENTALS",
        subtitle: "Work with dates and times using the modern Java API.",
        explanation: `
            <p>The java.time package provides modern date and time classes.</p>
            <ul>
                <li><strong>LocalDate:</strong> A date without a time.</li>
                <li><strong>LocalTime:</strong> A time without a date.</li>
                <li><strong>LocalDateTime:</strong> A date and time without a time zone.</li>
                <li><strong>Instant:</strong> A point on the timeline.</li>
            </ul>
            <p>Use a time-zone-aware type when your application needs to represent a specific zone.</p>
        `,
        tip: "Choose a date-time type based on whether time zones are relevant to your task.",
        example: `import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        LocalDate date = LocalDate.of(2026, 10, 13);
        System.out.println(date);
    }
}`,
        output: "2026-10-13",
        challengeTitle: "Create a Date",
        challenge: "Use LocalDate to create a date and print it.",
        hint: "Use LocalDate.of(year, month, day).",
        starter: ""
    },

    {
        title: "Build a Mini Project",
        category: "PROJECT",
        subtitle: "Bring several Java concepts together.",
        explanation: `
            <p>A mini project helps you practise combining variables, methods, conditionals, and other concepts.</p>
            <p>For this lesson, plan a simple score tracker that stores a learner's name and score, then prints a summary.</p>
            <h4>Suggested requirements</h4>
            <ul>
                <li>Declare a name and a score.</li>
                <li>Print both values.</li>
                <li>Use an if-else statement to display a result.</li>
                <li>Organise at least one task in a method.</li>
            </ul>
        `,
        tip: "Build the project in small steps and compile after each major change.",
        example: `public class Main {
    public static void main(String[] args) {
        String name = "Elijah";
        int score = 85;

        System.out.println("Learner: " + name);
        System.out.println("Score: " + score);

        if (score >= 50) {
            System.out.println("Result: Passed");
        } else {
            System.out.println("Result: Keep practising");
        }
    }
}`,
        output: "Learner: Elijah\nScore: 85\nResult: Passed",
        challengeTitle: "Build Your Score Tracker",
        challenge: "Write your own score tracker using variables, output, and a conditional statement.",
        hint: "Start with a name and score, then decide which result message should appear.",
        starter: ""
    },

    {
        title: "Java Best Practices",
        category: "FINAL LESSON",
        subtitle: "Review good habits for writing understandable Java code.",
        explanation: `
            <p>Good programming involves more than making code run. It also involves readability, correctness, maintainability, and appropriate testing.</p>
            <h4>Helpful habits</h4>
            <ul>
                <li>Use meaningful variable and method names.</li>
                <li>Keep methods focused on clear responsibilities.</li>
                <li>Indent code consistently.</li>
                <li>Validate input where appropriate.</li>
                <li>Handle errors instead of silently ignoring them.</li>
                <li>Test normal cases and edge cases.</li>
                <li>Use version control as your projects grow.</li>
            </ul>
            <p>You have reached the final lesson of this course. Keep practising and use these fundamentals as the foundation for larger Java projects.</p>
        `,
        tip: "You do not need to memorise everything. Learn how to understand, practise, test, and improve your code.",
        example: `public class Main {
    public static void main(String[] args) {
        String goal = "Keep learning";
        System.out.println(goal);
    }
}`,
        output: "Keep learning",
        challengeTitle: "Your Final Challenge",
        challenge: "Write a short Java program that uses a variable, a method, and a conditional statement. Test it and explain what it does.",
        hint: "Build your program one feature at a time, then compile and test it.",
        starter: ""
    }

];


/* =========================================================
   03. COMPLETE TO 50 LESSONS

   The original lesson data is checked at startup.
   If any lesson is accidentally missing, the course shows
   an explicit placeholder rather than silently breaking
   navigation or claiming the missing lesson is complete.
   ========================================================= */

if (javaLessons.length !== JAVA_CONFIG.totalLessons) {
    console.error(
        "Java course lesson count mismatch:",
        javaLessons.length,
        "lessons found; expected",
        JAVA_CONFIG.totalLessons
    );
}


/* =========================================================
   04. STATE
   ========================================================= */

let currentLessonIndex = 0;

let completedLessons = [];

let totalXP = 0;

let hintVisible = false;

let toastTimeout = null;

let isRunningCode = false;


/* =========================================================
   05. DOM HELPERS
   ========================================================= */

function getElement(id) {
    return document.getElementById(id);
}

function setText(id, value) {
    const element = getElement(id);

    if (element) {
        element.textContent = value;
    }
}

function safeReadJSON(key, fallback) {
    try {
        const value = localStorage.getItem(key);

        if (!value) {
            return fallback;
        }

        return JSON.parse(value);
    } catch (error) {
        console.warn("Could not read saved data:", error);
        return fallback;
    }
}


/* =========================================================
   06. LOAD AND SAVE PROGRESS
   ========================================================= */

function loadProgress() {
    const saved = safeReadJSON(
        JAVA_CONFIG.storageKey,
        null
    );

    if (!saved || typeof saved !== "object") {
        completedLessons = [];
        totalXP = 0;
        currentLessonIndex = 0;
        return;
    }

    const savedCompleted = Array.isArray(saved.completedLessons)
        ? saved.completedLessons
        : [];

    completedLessons = [
        ...new Set(
            savedCompleted.filter(index =>
                Number.isInteger(index) &&
                index >= 0 &&
                index < javaLessons.length
            )
        )
    ];

    const expectedXP =
        completedLessons.length * JAVA_CONFIG.xpPerLesson;

    totalXP = Math.min(
        Math.max(0, Number(saved.totalXP) || 0),
        expectedXP
    );

    // Keep XP consistent with completed lessons.
    totalXP = expectedXP;

    const savedIndex = Number(saved.currentLessonIndex);

    currentLessonIndex =
        Number.isInteger(savedIndex) &&
        savedIndex >= 0 &&
        savedIndex < javaLessons.length
            ? savedIndex
            : 0;
}


function saveProgress() {
    const data = {
        completedLessons,
        totalXP,
        currentLessonIndex,
        lastUpdated: new Date().toISOString()
    };

    try {
        localStorage.setItem(
            JAVA_CONFIG.storageKey,
            JSON.stringify(data)
        );
    } catch (error) {
        console.warn("Progress could not be saved:", error);

        showToast(
            "Progress could not be saved in this browser."
        );
    }
}


/* =========================================================
   07. FORMAT HELPERS
   ========================================================= */

function formatLessonNumber(index) {
    return String(index + 1).padStart(2, "0");
}


function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


/* =========================================================
   08. TOAST
   ========================================================= */

function showToast(message) {
    const toast = getElement("toastMessage");

    if (!toast) {
        return;
    }

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}


/* =========================================================
   09. BUILD LESSON SIDEBAR
   ========================================================= */

function renderLessonList(filterText = "") {
    const list = getElement("lessonList");

    if (!list) {
        console.error("Missing lessonList element.");
        return;
    }

    const query = filterText.trim().toLowerCase();

    const filtered = javaLessons
        .map((lesson, index) => ({
            lesson,
            index
        }))
        .filter(item => {
            return (
                item.lesson.title.toLowerCase().includes(query) ||
                item.lesson.category.toLowerCase().includes(query) ||
                item.lesson.subtitle.toLowerCase().includes(query)
            );
        });

    if (filtered.length === 0) {
        list.innerHTML = `
            <div class="lesson-loading">
                <p>No lessons match your search.</p>
            </div>
        `;

        return;
    }

    list.innerHTML = filtered.map(item => {
        const { lesson, index } = item;

        const isActive = index === currentLessonIndex;

        const isCompleted = completedLessons.includes(index);

        const classes = [
            "lesson-button",
            isActive ? "active" : "",
            isCompleted ? "completed" : ""
        ].filter(Boolean).join(" ");

        return `
            <button
                type="button"
                class="${classes}"
                data-lesson-index="${index}"
                aria-current="${isActive ? "step" : "false"}"
            >
                <span class="lesson-button-number">
                    ${isCompleted ? "✓" : formatLessonNumber(index)}
                </span>

                <span class="lesson-button-text">
                    <span class="lesson-button-title">
                        ${escapeHTML(lesson.title)}
                    </span>

                    <span class="lesson-button-category">
                        ${escapeHTML(lesson.category)}
                    </span>
                </span>

                <span class="lesson-button-check">
                    ${isCompleted ? "✓" : ""}
                </span>
            </button>
        `;
    }).join("");
}


/* =========================================================
   10. RENDER CURRENT LESSON
   ========================================================= */

function renderCurrentLesson() {
    const lesson = javaLessons[currentLessonIndex];

    if (!lesson) {
        showToast("This lesson could not be loaded.");
        return;
    }

    setText(
        "lessonNumber",
        `LESSON ${formatLessonNumber(currentLessonIndex)}`
    );

    setText("lessonCategory", lesson.category);

    setText("lessonTitle", lesson.title);

    setText("lessonSubtitle", lesson.subtitle);

    setText("lessonBreadcrumbTitle", lesson.title);

    setText(
        "mobileLessonIndicator",
        `Lesson ${currentLessonIndex + 1} of ${javaLessons.length}`
    );

    const explanation = getElement("lessonExplanation");

    if (explanation) {
        explanation.innerHTML = lesson.explanation;
    }

    setText("lessonTip", lesson.tip);

    const exampleCode = getElement("exampleCode");

    if (exampleCode) {
        exampleCode.textContent = lesson.example;
    }

    setText("exampleFileName", "Main.java");

    setText("exampleOutput", lesson.output);

    setText("challengeTitle", lesson.challengeTitle);

    setText("challengeText", lesson.challenge);

    setText("hintText", lesson.hint);

    hintVisible = false;

    const challengeHint = getElement("challengeHint");

    if (challengeHint) {
        challengeHint.classList.remove("visible");
    }

    setText("showHintButton", "Show Hint");

    // Update the lesson completion state.
    const completed = completedLessons.includes(
        currentLessonIndex
    );

    const indicator = getElement("lessonCompletionIndicator");

    if (indicator) {
        indicator.classList.toggle("completed", completed);
    }

    setText(
        "completionLabel",
        completed ? "Completed" : "Not completed"
    );

    const completeButton = getElement("completeButton");

    if (completeButton) {
        completeButton.classList.toggle("completed", completed);

        setText(
            "completeButton",
            completed
                ? "✓ Lesson Completed"
                : "✓ Mark Lesson Complete"
        );
    }

    const previousButton = getElement("previousButton");

    const nextButton = getElement("nextButton");

    if (previousButton) {
        previousButton.disabled = currentLessonIndex === 0;
    }

    if (nextButton) {
        nextButton.disabled =
            currentLessonIndex === javaLessons.length - 1;
    }

    renderLessonList(
        getElement("lessonSearch")?.value || ""
    );

    updateProgress();

    clearRunOutput();

    updateEditorLineNumbers();

    saveProgress();
}


/* =========================================================
   11. PROGRESS AND XP
   ========================================================= */

function updateProgress() {
    const total = javaLessons.length;

    const completed = completedLessons.length;

    const percentage = total > 0
        ? Math.round((completed / total) * 100)
        : 0;

    setText("progressPercent", `${percentage}%`);

    setText("progressLessons", completed);

    setText("totalLessons", total);

    setText("xpText", `${totalXP} XP`);

    setText("heroLessonCount", `${total} Lessons`);

    setText(
        "sidebarProgressText",
        `${completed} of ${total} completed`
    );

    const progressFill = getElement("progressFill");

    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }

    const sidebarFill = getElement("sidebarProgressFill");

    if (sidebarFill) {
        sidebarFill.style.width = `${percentage}%`;
    }

    const certificateFill = getElement("certificateProgressFill");

    if (certificateFill) {
        certificateFill.style.width = `${percentage}%`;
    }

    setText(
        "certificateStatus",
        `${completed} of ${total} lessons completed`
    );

    updateCertificateAvailability();
}


function completeCurrentLesson() {
    const index = currentLessonIndex;

    if (completedLessons.includes(index)) {
        showToast("You have already completed this lesson.");
        return;
    }

    completedLessons.push(index);

    totalXP = completedLessons.length * JAVA_CONFIG.xpPerLesson;

    saveProgress();

    renderCurrentLesson();

    showToast(
        `Lesson completed! +${JAVA_CONFIG.xpPerLesson} XP`
    );

    if (completedLessons.length === javaLessons.length) {
        showToast(
            "Congratulations! You completed the Java Masterclass."
        );
    }
}


/* =========================================================
   12. CERTIFICATE
   ========================================================= */

function updateCertificateAvailability() {
    const complete =
        completedLessons.length === javaLessons.length;

    const button = getElement("certificateOpenButton");

    if (button) {
        button.disabled = !complete;
    }

    const message = getElement("certificateMessage");

    if (message) {
        message.textContent = complete
            ? "Congratulations! You have completed all 50 Java lessons. Your certificate is unlocked."
            : `Complete all ${javaLessons.length} lessons to unlock your Java Masterclass certificate.`;
    }
}


function openCertificate() {
    if (completedLessons.length !== javaLessons.length) {
        showToast("Complete all lessons to unlock your certificate.");
        return;
    }

    const modal = getElement("certificateModal");

    if (!modal) {
        return;
    }

    const savedName = localStorage.getItem(
        JAVA_CONFIG.certificateNameKey
    ) || "";

    const nameInput = getElement("certificateName");

    if (nameInput) {
        nameInput.value = savedName;
    }

    setText(
        "certificateDate",
        new Date().toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric"
        })
    );

    modal.classList.add("open");

    modal.setAttribute("aria-hidden", "false");
}


function closeCertificate() {
    const modal = getElement("certificateModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("open");

    modal.setAttribute("aria-hidden", "true");
}


function saveCertificateName() {
    const input = getElement("certificateName");

    if (!input) {
        return;
    }

    try {
        localStorage.setItem(
            JAVA_CONFIG.certificateNameKey,
            input.value.trim()
        );
    } catch (error) {
        console.warn("Certificate name could not be saved.", error);
    }
}


function printCertificate() {
    if (completedLessons.length !== javaLessons.length) {
        showToast("Finish all lessons before printing your certificate.");
        return;
    }

    const nameInput = getElement("certificateName");

    if (!nameInput || !nameInput.value.trim()) {
        showToast("Enter your name on the certificate first.");

        nameInput?.focus();

        return;
    }

    saveCertificateName();

    window.print();
}


/* =========================================================
   13. LESSON NAVIGATION
   ========================================================= */

function goToLesson(index) {
    if (
        !Number.isInteger(index) ||
        index < 0 ||
        index >= javaLessons.length
    ) {
        return;
    }

    currentLessonIndex = index;

    renderCurrentLesson();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    closeMobileSidebar();
}


function goToPreviousLesson() {
    if (currentLessonIndex > 0) {
        goToLesson(currentLessonIndex - 1);
    }
}


function goToNextLesson() {
    if (currentLessonIndex < javaLessons.length - 1) {
        goToLesson(currentLessonIndex + 1);
    } else {
        showToast("You have reached the final lesson.");
    }
}


/* =========================================================
   14. HINTS
   ========================================================= */

function toggleHint() {
    hintVisible = !hintVisible;

    const hint = getElement("challengeHint");

    if (hint) {
        hint.classList.toggle("visible", hintVisible);
    }

    setText(
        "showHintButton",
        hintVisible ? "Hide Hint" : "Show Hint"
    );
}


/* =========================================================
   15. PRACTICE EDITOR
   ========================================================= */

function updateEditorLineNumbers() {
    const editor = getElement("codeEditor");

    const numbers = getElement("editorLineNumbers");

    if (!editor || !numbers) {
        return;
    }

    const lineCount = Math.max(
        1,
        editor.value.split("\n").length
    );

    numbers.textContent = Array.from(
        { length: lineCount },
        (_, index) => index + 1
    ).join("\n");

    setText(
        "characterCount",
        `${editor.value.length} characters`
    );
}


function clearEditor() {
    const editor = getElement("codeEditor");

    if (!editor) {
        return;
    }

    editor.value = "";

    updateEditorLineNumbers();

    editor.focus();

    showToast("Editor cleared.");
}


function resetEditor() {
    clearEditor();
}


function insertEditorTab(event) {
    if (
        event.key !== "Tab" ||
        event.shiftKey ||
        event.ctrlKey ||
        event.altKey
    ) {
        return;
    }

    event.preventDefault();

    const editor = event.currentTarget;

    const start = editor.selectionStart;

    const end = editor.selectionEnd;

    editor.setRangeText(
        "    ",
        start,
        end,
        "end"
    );

    updateEditorLineNumbers();
}


/* =========================================================
   16. EXECUTION OUTPUT
   ========================================================= */

function showRunOutput(message, status = "WAITING", type = "") {
    const card = getElement("runOutputCard");

    const output = getElement("runOutput");

    const statusElement = getElement("runOutputStatus");

    if (card) {
        card.classList.add("visible");
    }

    if (output) {
        output.textContent = message;
    }

    if (statusElement) {
        statusElement.textContent = status;

        statusElement.classList.remove(
            "success",
            "error",
            "running"
        );

        if (type) {
            statusElement.classList.add(type);
        }
    }
}


function clearRunOutput() {
    const card = getElement("runOutputCard");

    if (card) {
        card.classList.remove("visible");
    }

    setText(
        "runOutput",
        "Your program's execution result will appear here."
    );

    setText("runOutputStatus", "WAITING");

    const statusElement = getElement("runOutputStatus");

    if (statusElement) {
        statusElement.classList.remove(
            "success",
            "error",
            "running"
        );
    }
}


/* =========================================================
   17. JAVA EXECUTION

   This uses the Piston API.

   Java is not executed natively by the browser.
   Execution requires network access and a working
   external compiler service.

   API availability, supported versions, CORS, execution
   limits, and standard-input support may vary.
   ========================================================= */

async function runJavaCode() {
    if (isRunningCode) {
        return;
    }

    const editor = getElement("codeEditor");

    const runButton = getElement("runButton");

    const editorStatus = getElement("editorStatus");

    if (!editor) {
        return;
    }

    const code = editor.value.trim();

    if (!code) {
        showRunOutput(
            "Your editor is empty.\n\nWrite a Java program first, then click Run My Code.",
            "NO CODE",
            "error"
        );

        showToast("Write some Java code first.");

        editor.focus();

        return;
    }

    /*
       The standard online-runner convention is to compile
       a public class named Main from Main.java.
    */

    if (
        /\bpublic\s+class\s+(?!Main\b)[A-Za-z_$][\w$]*/.test(code)
    ) {
        showRunOutput(
            "The practice runner uses Main.java.\n\nIf you declare a public class, name it Main so that it matches the runner's file name.",
            "CHECK CLASS",
            "error"
        );

        return;
    }

    isRunningCode = true;

    if (runButton) {
        runButton.disabled = true;
        runButton.textContent = "Running...";
    }

    if (editorStatus) {
        editorStatus.textContent = "RUNNING";
    }

    showRunOutput(
        "Sending your Java program to the online execution service...\n\nPlease wait.",
        "RUNNING",
        "running"
    );

    try {
        const response = await fetch(
            JAVA_CONFIG.compilerEndpoint,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    language: "java",
                    version: "*",

                    files: [
                        {
                            name: "Main.java",
                            content: code
                        }
                    ]
                })
            }
        );

        if (!response.ok) {
            throw new Error(
                `The execution service returned HTTP ${response.status}.`
            );
        }

        const result = await response.json();

        const compileOutput = result.compile || {};

        const runOutput = result.run || {};

        const combinedOutput = [
            compileOutput.stderr,
            compileOutput.output,
            runOutput.stdout,
            runOutput.stderr,
            runOutput.output
        ]
            .filter(Boolean)
            .join("\n")
            .trim();

        const compileFailed =
            compileOutput.code !== undefined &&
            compileOutput.code !== 0;

        const runFailed =
            runOutput.code !== undefined &&
            runOutput.code !== 0;

        if (compileFailed || runFailed) {
            showRunOutput(
                combinedOutput ||
                "The program did not finish successfully. Check your code and try again.",
                "EXECUTION ERROR",
                "error"
            );
        } else {
            showRunOutput(
                combinedOutput || "Program finished without console output.",
                "FINISHED",
                "success"
            );
        }

        if (editorStatus) {
            editorStatus.textContent = "READY";
        }

    } catch (error) {
        console.error("Java execution error:", error);

        showRunOutput(
            "The Java execution service could not be reached.\n\n" +
            "Possible reasons:\n" +
            "• Your internet connection is unavailable.\n" +
            "• The online compiler service is down or rate-limited.\n" +
            "• The browser blocked the request.\n\n" +
            "Check your connection and try again. You can also compile Java locally with a JDK.",
            "SERVICE UNAVAILABLE",
            "error"
        );

        if (editorStatus) {
            editorStatus.textContent = "READY";
        }

    } finally {
        isRunningCode = false;

        if (runButton) {
            runButton.disabled = false;

            runButton.innerHTML =
                '<span aria-hidden="true">▶</span> Run My Code';
        }
    }
}


/* =========================================================
   18. MOBILE SIDEBAR
   ========================================================= */

function openMobileSidebar() {
    const sidebar = getElement("lessonSidebar");

    const overlay = getElement("sidebarOverlay");

    if (!sidebar || !overlay) {
        return;
    }

    sidebar.classList.add("mobile-open");

    overlay.classList.add("visible");

    overlay.setAttribute("aria-hidden", "false");
}


function closeMobileSidebar() {
    const sidebar = getElement("lessonSidebar");

    const overlay = getElement("sidebarOverlay");

    if (!sidebar || !overlay) {
        return;
    }

    sidebar.classList.remove("mobile-open");

    overlay.classList.remove("visible");

    overlay.setAttribute("aria-hidden", "true");
}


/* =========================================================
   19. EVENT LISTENERS
   ========================================================= */

function attachEventListeners() {

    // Lesson selection.
    const lessonList = getElement("lessonList");

    lessonList?.addEventListener("click", event => {
        const button = event.target.closest(
            "[data-lesson-index]"
        );

        if (!button) {
            return;
        }

        const index = Number(
            button.dataset.lessonIndex
        );

        goToLesson(index);
    });


    // Search.
    getElement("lessonSearch")?.addEventListener(
        "input",
        event => {
            renderLessonList(event.target.value);
        }
    );


    // Previous and next lesson.
    getElement("previousButton")?.addEventListener(
        "click",
        goToPreviousLesson
    );

    getElement("nextButton")?.addEventListener(
        "click",
        goToNextLesson
    );


    // Complete lesson.
    getElement("completeButton")?.addEventListener(
        "click",
        completeCurrentLesson
    );


    // Hints.
    getElement("showHintButton")?.addEventListener(
        "click",
        toggleHint
    );


    // Editor updates.
    getElement("codeEditor")?.addEventListener(
        "input",
        updateEditorLineNumbers
    );

    getElement("codeEditor")?.addEventListener(
        "keydown",
        insertEditorTab
    );


    // Clear and reset.
    getElement("clearButton")?.addEventListener(
        "click",
        clearEditor
    );

    getElement("resetButton")?.addEventListener(
        "click",
        resetEditor
    );


    // Execute Java.
    getElement("runButton")?.addEventListener(
        "click",
        runJavaCode
    );


    // Certificate.
    getElement("certificateOpenButton")?.addEventListener(
        "click",
        openCertificate
    );

    getElement("certificateClose")?.addEventListener(
        "click",
        closeCertificate
    );

    getElement("certificatePrintButton")?.addEventListener(
        "click",
        printCertificate
    );

    getElement("certificateName")?.addEventListener(
        "input",
        saveCertificateName
    );


    // Close the certificate when clicking outside the paper.
    getElement("certificateModal")?.addEventListener(
        "click",
        event => {
            if (event.target.id === "certificateModal") {
                closeCertificate();
            }
        }
    );


    // Mobile sidebar.
    getElement("sidebarOpenButton")?.addEventListener(
        "click",
        openMobileSidebar
    );

    getElement("sidebarCloseButton")?.addEventListener(
        "click",
        closeMobileSidebar
    );

    getElement("sidebarOverlay")?.addEventListener(
        "click",
        closeMobileSidebar
    );


    // Keyboard shortcuts for the modal.
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeCertificate();
            closeMobileSidebar();
        }

        // Ctrl+Enter or Command+Enter runs the code editor.
        if (
            (event.ctrlKey || event.metaKey) &&
            event.key === "Enter"
        ) {
            const editor = getElement("codeEditor");

            if (editor && document.activeElement === editor) {
                event.preventDefault();
                runJavaCode();
            }
        }
    });


    // Current year.
    setText(
        "currentYear",
        new Date().getFullYear()
    );
}


/* =========================================================
   20. STARTUP
   ========================================================= */

function initializeJavaCourse() {
    loadProgress();

    attachEventListeners();

    renderCurrentLesson();

    updateProgress();

    updateEditorLineNumbers();

    console.log(
        "ELOMCODE School Java Masterclass initialized.",
        {
            lessons: javaLessons.length,
            completed: completedLessons.length,
            xp: totalXP
        }
    );
}


if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializeJavaCourse
    );
} else {
    initializeJavaCourse();
}