/* =========================================================
   ELOMCODE SCHOOL
   PHP DEVELOPMENT MASTERCLASS
   Main JavaScript
   Version 1.0
========================================================= */

"use strict";


/* =========================================================
   1. COURSE CONFIGURATION
========================================================= */

const PHP_COURSE = {
    title: "PHP Development Masterclass",
    totalLessons: 25,
    storageKey: "elomcode_php_course_progress",
    certificateKey: "elomcode_php_certificate",
    themeKey: "elomcode_php_theme"
};


/* =========================================================
   2. LESSON DATABASE
========================================================= */

const lessons = [

    {
        title: "Introduction to PHP",
        category: "PHP Fundamentals",
        duration: "5 min read",

        intro: `
            <h3>What is PHP?</h3>

            <p>
                PHP is a server-side programming language commonly used
                to build dynamic websites and web applications.
                The letters originally stood for Personal Home Page,
                while PHP is now commonly expanded as PHP: Hypertext Preprocessor.
            </p>

            <p>
                Unlike HTML, which describes the structure of a webpage,
                PHP can process information, make decisions, handle forms,
                communicate with databases, and generate HTML for a browser.
            </p>

            <h3>What can PHP do?</h3>

            <ul>
                <li>Process submitted forms.</li>
                <li>Work with databases.</li>
                <li>Manage login sessions.</li>
                <li>Generate dynamic webpage content.</li>
                <li>Build APIs and backend systems.</li>
            </ul>

            <div class="lesson-callout">
                <strong>Remember:</strong> PHP generally runs on a server.
                The browser receives the resulting response rather than
                executing the original PHP source code itself.
            </div>
        `,

        example: `<?php
echo "Welcome to ELOMCODE School!";
?>`,

        practice: `<?php
echo "Welcome to ELOMCODE School!";
?>`,

        challengeTitle: "Display a welcome message",

        challenge: `
            Write a PHP statement using echo to display:
            Hello, PHP Developer!
        `,

        hint: `Use echo followed by a quoted string and a semicolon.`,

        output: "Welcome to ELOMCODE School!"
    },


    {
        title: "Setting Up a PHP Environment",
        category: "Getting Started",
        duration: "6 min read",

        intro: `
            <h3>What do you need to run PHP?</h3>

            <p>
                A PHP file usually needs a PHP interpreter to execute.
                A regular browser cannot fully execute PHP source code
                by itself.
            </p>

            <p>
                For local development, beginners often use XAMPP,
                which packages PHP, a web server, and database tools.
            </p>

            <h3>Typical local workflow</h3>

            <ol>
                <li>Install a PHP environment such as XAMPP.</li>
                <li>Start the Apache web server.</li>
                <li>Place your project in the appropriate web directory.</li>
                <li>Save your file with the <code>.php</code> extension.</li>
                <li>Open the project through the local server address.</li>
            </ol>

            <div class="lesson-callout warning">
                Opening a PHP file directly by double-clicking it is
                not the same as executing it through a PHP server.
            </div>
        `,

        example: `<?php
echo "My PHP environment is ready!";
?>`,

        practice: `<?php
echo "My PHP environment is ready!";
?>`,

        challengeTitle: "Understand the PHP workflow",

        challenge: `
            Explain why a PHP file normally needs a server or PHP runtime
            instead of simply being opened as an ordinary HTML file.
        `,

        hint: `Think about where PHP code is processed before a webpage is returned.`,

        output: "My PHP environment is ready!"
    },


    {
        title: "PHP Syntax and Opening Tags",
        category: "PHP Fundamentals",
        duration: "5 min read",

        intro: `
            <h3>Writing your first PHP code</h3>

            <p>
                PHP code is commonly placed between
                <code class="inline-code">&lt;?php</code> and
                <code class="inline-code">?&gt;</code> tags.
            </p>

            <p>
                A semicolon usually marks the end of a PHP statement.
                Consistent indentation makes code easier to read.
            </p>

            <h3>Important syntax rules</h3>

            <ul>
                <li>PHP variable names begin with a dollar sign.</li>
                <li>Statements commonly end with semicolons.</li>
                <li>Text strings are enclosed in quotes.</li>
                <li>PHP keywords such as <code>echo</code> are not case-sensitive.</li>
                <li>Variable names are case-sensitive.</li>
            </ul>
        `,

        example: `<?php
echo "Learning PHP is exciting!";
echo " I am getting started.";
?>`,

        practice: `<?php
echo "Learning PHP is exciting!";
?>`,

        challengeTitle: "Complete the PHP statement",

        challenge: `
            Write a valid PHP statement that displays:
            I am learning PHP.
        `,

        hint: `Start with echo, write the text inside quotes, and end with a semicolon.`,

        output: "Learning PHP is exciting!"
    },


    {
        title: "Comments in PHP",
        category: "PHP Fundamentals",
        duration: "4 min read",

        intro: `
            <h3>What are comments?</h3>

            <p>
                Comments are notes written inside source code.
                They help explain what code does, but PHP does not
                execute the content of a comment.
            </p>

            <h3>Common PHP comment styles</h3>

            <ul>
                <li><code>//</code> for a single-line comment.</li>
                <li><code>#</code> for another single-line comment style.</li>
                <li><code>/* ... */</code> for a block comment.</li>
            </ul>

            <div class="lesson-callout">
                Comments are useful for explaining decisions,
                documenting complicated logic, and helping other
                developers understand your code.
            </div>
        `,

        example: `<?php
// This is a single-line comment

# This is also a single-line comment

/*
This is a block comment.
It can span multiple lines.
*/

echo "Comments do not appear in this output.";
?>`,

        practice: `<?php
// Add a comment above this statement
echo "Comments help explain code.";
?>`,

        challengeTitle: "Add a comment",

        challenge: `
            Add a single-line comment above an echo statement.
        `,

        hint: `Begin your comment with two forward slashes: //`,

        output: "Comments do not appear in this output."
    },


    {
        title: "PHP Variables",
        category: "Variables and Data",
        duration: "6 min read",

        intro: `
            <h3>What is a variable?</h3>

            <p>
                A variable stores a value that a program can use.
                In PHP, a variable name begins with the dollar sign
                <code>$</code>.
            </p>

            <p>
                For example, <code>$name</code> can store a person's name,
                while <code>$age</code> can store a number.
            </p>

            <h3>Variable naming rules</h3>

            <ul>
                <li>Variable names begin with <code>$</code>.</li>
                <li>The name must begin with a letter or underscore after the dollar sign.</li>
                <li>Variable names cannot begin with a number.</li>
                <li>Variable names are case-sensitive.</li>
            </ul>
        `,

        example: `<?php
$name = "Elijah";
$age = 17;

echo $name;
echo $age;
?>`,

        practice: `<?php
$name = "Elijah";

echo $name;
?>`,

        challengeTitle: "Create your own variable",

        challenge: `
            Create a variable named $school containing
            the text ELOMCODE School, then display it.
        `,

        hint: `Use $school = "ELOMCODE School"; and then echo $school;`,

        output: "Elijah"
    },


    {
        title: "PHP Data Types",
        category: "Variables and Data",
        duration: "6 min read",

        intro: `
            <h3>Understanding data types</h3>

            <p>
                A data type describes the kind of value a variable holds.
                PHP supports several common data types.
            </p>

            <ul>
                <li><strong>String:</strong> Text, such as "Hello".</li>
                <li><strong>Integer:</strong> A whole number, such as 17.</li>
                <li><strong>Float:</strong> A decimal number, such as 3.14.</li>
                <li><strong>Boolean:</strong> Either true or false.</li>
                <li><strong>Array:</strong> A collection of values.</li>
                <li><strong>Null:</strong> Represents the absence of a value.</li>
            </ul>

            <p>
                PHP also supports objects and other types used in
                more advanced applications.
            </p>
        `,

        example: `<?php
$name = "Elijah";
$age = 17;
$price = 15.50;
$isLearning = true;

var_dump($name);
var_dump($age);
var_dump($price);
var_dump($isLearning);
?>`,

        practice: `<?php
$name = "PHP";
$number = 25;

echo $name;
echo $number;
?>`,

        challengeTitle: "Identify the data types",

        challenge: `
            Create one string variable, one integer variable,
            and one Boolean variable.
        `,

        hint: `Try $language = "PHP"; $lessons = 25; and $ready = true;`,

        output: "PHP25"
    },


    {
        title: "Echo and Print",
        category: "Output",
        duration: "5 min read",

        intro: `
            <h3>Displaying information</h3>

            <p>
                PHP provides <code>echo</code> and <code>print</code>
                to send output into the response generated by a PHP script.
            </p>

            <p>
                Both can display strings and variable values.
                The echo construct is commonly used when displaying
                ordinary output.
            </p>

            <h3>Combining output</h3>

            <p>
                You can use the concatenation operator, a dot
                <code>.</code>, to join strings in PHP.
            </p>
        `,

        example: `<?php
$name = "Elijah";

echo "Hello, ";
echo $name;

print " Welcome to PHP.";
?>`,

        practice: `<?php
$name = "Elijah";

echo "Hello, " . $name;
?>`,

        challengeTitle: "Display a complete sentence",

        challenge: `
            Use echo to display the sentence:
            PHP is a server-side language.
        `,

        hint: `Place the sentence inside quotation marks after echo.`,

        output: "Hello, Elijah"
    },


    {
        title: "PHP Strings",
        category: "Variables and Data",
        duration: "7 min read",

        intro: `
            <h3>Working with strings</h3>

            <p>
                A string is a sequence of characters used to represent
                text. PHP allows strings to be written with single or
                double quotation marks.
            </p>

            <p>
                Double-quoted strings can interpolate supported variables.
                Single-quoted strings generally display variable names
                literally instead of substituting their values.
            </p>

            <h3>String operations</h3>

            <ul>
                <li>Concatenation joins strings.</li>
                <li><code>strlen()</code> returns a string's byte length.</li>
                <li><code>strtoupper()</code> converts text to uppercase.</li>
                <li><code>strtolower()</code> converts text to lowercase.</li>
                <li><code>str_replace()</code> replaces matching text.</li>
            </ul>
        `,

        example: `<?php
$name = "Elijah";

echo "Hello, $name!";
echo strtoupper("php programming");
echo str_replace("PHP", "ELOMCODE", "PHP School");
?>`,

        practice: `<?php
$text = "php";

echo strtoupper($text);
?>`,

        challengeTitle: "Transform a string",

        challenge: `
            Create a string containing the word hello
            and convert it to uppercase.
        `,

        hint: `Use strtoupper($text) with your string variable.`,

        output: "PHP"
    },


    {
        title: "Numbers and Arithmetic",
        category: "Operators",
        duration: "6 min read",

        intro: `
            <h3>Performing calculations</h3>

            <p>
                PHP supports arithmetic operators that allow you
                to calculate values.
            </p>

            <ul>
                <li><code>+</code> Addition</li>
                <li><code>-</code> Subtraction</li>
                <li><code>*</code> Multiplication</li>
                <li><code>/</code> Division</li>
                <li><code>%</code> Remainder</li>
                <li><code>**</code> Exponentiation</li>
            </ul>

            <p>
                Parentheses can be used to control the order in
                which operations are evaluated.
            </p>
        `,

        example: `<?php
$a = 20;
$b = 5;

echo $a + $b;
echo $a * $b;
echo $a / $b;
?>`,

        practice: `<?php
$a = 10;
$b = 5;

echo $a + $b;
?>`,

        challengeTitle: "Calculate a total",

        challenge: `
            Create two number variables and display their sum.
        `,

        hint: `If your variables are $a and $b, use echo $a + $b;`,

        output: "15"
    },


    {
        title: "Comparison and Logical Operators",
        category: "Operators",
        duration: "7 min read",

        intro: `
            <h3>Comparing values</h3>

            <p>
                Comparison operators evaluate relationships between values.
                They commonly return Boolean results.
            </p>

            <ul>
                <li><code>==</code> Equal after type juggling.</li>
                <li><code>===</code> Identical value and type.</li>
                <li><code>!=</code> Not equal.</li>
                <li><code>!==</code> Not identical.</li>
                <li><code>&gt;</code> Greater than.</li>
                <li><code>&lt;</code> Less than.</li>
                <li><code>&gt;=</code> Greater than or equal.</li>
                <li><code>&lt;=</code> Less than or equal.</li>
            </ul>

            <p>
                Logical operators such as <code>&&</code>, <code>||</code>,
                and <code>!</code> help combine or reverse conditions.
            </p>
        `,

        example: `<?php
$age = 17;

var_dump($age >= 18);
var_dump($age < 18);
?>`,

        practice: `<?php
$a = 10;
$b = 5;

var_dump($a > $b);
?>`,

        challengeTitle: "Compare two numbers",

        challenge: `
            Create two variables and test whether the first
            is greater than the second.
        `,

        hint: `Use var_dump($a > $b);`,

        output: "bool(true)"
    },


    {
        title: "If, Else and Elseif",
        category: "Control Flow",
        duration: "7 min read",

        intro: `
            <h3>Making decisions</h3>

            <p>
                Conditional statements allow PHP to choose which
                block of code should execute based on a condition.
            </p>

            <ul>
                <li><code>if</code> runs code when a condition is true.</li>
                <li><code>else</code> provides an alternative.</li>
                <li><code>elseif</code> checks another condition.</li>
            </ul>

            <p>
                Conditions can be combined with comparison and
                logical operators.
            </p>
        `,

        example: `<?php
$score = 75;

if ($score >= 70) {
    echo "Excellent result!";
} elseif ($score >= 50) {
    echo "You passed.";
} else {
    echo "Keep practising.";
}
?>`,

        practice: `<?php
$score = 80;

if ($score >= 50) {
    echo "You passed!";
} else {
    echo "Try again.";
}
?>`,

        challengeTitle: "Create a decision",

        challenge: `
            Write a condition that displays Adult when age is
            18 or above and Under 18 otherwise.
        `,

        hint: `Use if ($age >= 18) followed by an else block.`,

        output: "You passed!"
    },


    {
        title: "Switch Statements",
        category: "Control Flow",
        duration: "5 min read",

        intro: `
            <h3>Choosing between multiple cases</h3>

            <p>
                A switch statement compares an expression against
                multiple cases and runs the matching branch.
            </p>

            <p>
                In many traditional switch statements, <code>break</code>
                prevents execution from continuing into later cases.
                A default branch handles unmatched cases.
            </p>
        `,

        example: `<?php
$day = 2;

switch ($day) {
    case 1:
        echo "Monday";
        break;

    case 2:
        echo "Tuesday";
        break;

    default:
        echo "Another day";
}
?>`,

        practice: `<?php
$choice = 1;

switch ($choice) {
    case 1:
        echo "Home";
        break;

    case 2:
        echo "Profile";
        break;

    default:
        echo "Unknown option";
}
?>`,

        challengeTitle: "Build a simple menu",

        challenge: `
            Use a switch statement to display a message for
            one of two choices and a default message.
        `,

        hint: `Use switch ($choice), case labels, break, and default.`,

        output: "Home"
    },


    {
        title: "Loops: While and Do While",
        category: "Loops",
        duration: "7 min read",

        intro: `
            <h3>Repeating instructions</h3>

            <p>
                A loop repeats a block of code while its conditions
                or iteration rules allow it.
            </p>

            <p>
                A while loop checks its condition before each iteration.
                A do-while loop executes its body at least once before
                checking its condition.
            </p>

            <div class="lesson-callout">
                Always ensure that a loop can eventually stop.
                An incorrect condition can create an infinite loop.
            </div>
        `,

        example: `<?php
$count = 1;

while ($count <= 3) {
    echo $count;
    $count++;
}
?>`,

        practice: `<?php
$count = 1;

while ($count <= 3) {
    echo $count;
    $count++;
}
?>`,

        challengeTitle: "Count from one to five",

        challenge: `
            Write a loop that starts at one and stops after five.
        `,

        hint: `Start with $count = 1, check $count <= 5, and increment the counter.`,

        output: "123"
    },


    {
        title: "For and Foreach Loops",
        category: "Loops",
        duration: "7 min read",

        intro: `
            <h3>For loops</h3>

            <p>
                A for loop is useful when you know the structure
                of the repetition, including initialization,
                the condition, and the update expression.
            </p>

            <h3>Foreach loops</h3>

            <p>
                A foreach loop is designed for iterating over
                arrays and other iterable values.
            </p>
        `,

        example: `<?php
for ($i = 1; $i <= 3; $i++) {
    echo $i;
}

$names = ["Elijah", "Ada", "Tobi"];

foreach ($names as $name) {
    echo $name;
}
?>`,

        practice: `<?php
for ($i = 1; $i <= 3; $i++) {
    echo $i;
}
?>`,

        challengeTitle: "Print a sequence",

        challenge: `
            Use a for loop to display the numbers one to five.
        `,

        hint: `Initialize the counter at one and use a condition that stops after five.`,

        output: "123"
    },


    {
        title: "Indexed and Associative Arrays",
        category: "Arrays",
        duration: "8 min read",

        intro: `
            <h3>What is an array?</h3>

            <p>
                An array stores multiple values in one variable.
                PHP supports indexed arrays, associative arrays,
                and multidimensional arrays.
            </p>

            <p>
                Indexed arrays use numeric indexes.
                Associative arrays use named keys.
            </p>
        `,

        example: `<?php
$fruits = ["Apple", "Mango", "Orange"];

echo $fruits[0];

$student = [
    "name" => "Elijah",
    "course" => "Computer Science"
];

echo $student["name"];
?>`,

        practice: `<?php
$fruits = ["Apple", "Mango", "Orange"];

echo $fruits[1];
?>`,

        challengeTitle: "Create an array",

        challenge: `
            Create an indexed array containing three languages
            and display the second item.
        `,

        hint: `PHP indexed arrays start at index zero, so the second item uses index one.`,

        output: "Mango"
    },


    {
        title: "Array Functions",
        category: "Arrays",
        duration: "6 min read",

        intro: `
            <h3>Useful array functions</h3>

            <p>
                PHP includes built-in functions for inspecting,
                modifying, and processing arrays.
            </p>

            <ul>
                <li><code>count()</code> returns the number of elements.</li>
                <li><code>in_array()</code> checks whether a value exists.</li>
                <li><code>array_push()</code> adds elements to the end.</li>
                <li><code>array_pop()</code> removes the last element.</li>
                <li><code>sort()</code> sorts an indexed array.</li>
            </ul>
        `,

        example: `<?php
$numbers = [10, 20, 30];

echo count($numbers);

array_push($numbers, 40);

echo count($numbers);
?>`,

        practice: `<?php
$numbers = [10, 20, 30];

echo count($numbers);
?>`,

        challengeTitle: "Count your array items",

        challenge: `
            Create an array with four items and use count()
            to determine the number of elements.
        `,

        hint: `Store the array in a variable and pass that variable to count().`,

        output: "3"
    },


    {
        title: "PHP Functions",
        category: "Functions",
        duration: "7 min read",

        intro: `
            <h3>Why use functions?</h3>

            <p>
                A function groups instructions into a reusable unit.
                Functions can accept parameters and return values.
            </p>

            <p>
                Defining a function does not normally execute its body.
                You call the function when you want its instructions
                to run.
            </p>
        `,

        example: `<?php
function greet($name) {
    return "Hello, " . $name;
}

echo greet("Elijah");
?>`,

        practice: `<?php
function greet($name) {
    return "Hello, " . $name;
}

echo greet("Elijah");
?>`,

        challengeTitle: "Create a greeting function",

        challenge: `
            Write a function called welcome that accepts a name
            and returns a greeting.
        `,

        hint: `Use function welcome($name) and return a string joined with $name.`,

        output: "Hello, Elijah"
    },


    {
        title: "Function Parameters and Return Values",
        category: "Functions",
        duration: "7 min read",

        intro: `
            <h3>Parameters and arguments</h3>

            <p>
                A parameter is a variable listed in a function definition.
                An argument is the value passed to the function when
                it is called.
            </p>

            <h3>Return values</h3>

            <p>
                The return statement sends a value back to the code
                that called the function. A returned value can be
                stored, displayed, or used in another calculation.
            </p>
        `,

        example: `<?php
function add($a, $b) {
    return $a + $b;
}

$total = add(10, 5);

echo $total;
?>`,

        practice: `<?php
function add($a, $b) {
    return $a + $b;
}

echo add(10, 5);
?>`,

        challengeTitle: "Build a calculator function",

        challenge: `
            Create a function that accepts two numbers
            and returns their sum.
        `,

        hint: `Use two parameters and return $a + $b;`,

        output: "15"
    },


    {
        title: "Superglobals",
        category: "Web Development",
        duration: "7 min read",

        intro: `
            <h3>What are superglobals?</h3>

            <p>
                PHP superglobals are predefined variables available
                in many scopes throughout a PHP script.
            </p>

            <ul>
                <li><code>$_GET</code> contains query-string parameters.</li>
                <li><code>$_POST</code> contains submitted POST data.</li>
                <li><code>$_SERVER</code> contains server and request information.</li>
                <li><code>$_SESSION</code> stores session-related data.</li>
                <li><code>$_COOKIE</code> contains cookie data sent by the browser.</li>
                <li><code>$_FILES</code> contains information about uploaded files.</li>
            </ul>

            <div class="lesson-callout warning">
                Never assume that submitted values are safe.
                Validate and appropriately handle external input.
            </div>
        `,

        example: `<?php
echo $_SERVER["REQUEST_METHOD"];
?>`,

        practice: `<?php
// In a real PHP server:
echo $_SERVER["REQUEST_METHOD"];
?>`,

        challengeTitle: "Understand request data",

        challenge: `
            Name two PHP superglobals and describe the type
            of information each one can provide.
        `,

        hint: `Think about $_GET, $_POST, $_SERVER, $_SESSION, and $_FILES.`,

        output: "This example requires a PHP server."
    },


    {
        title: "HTML Forms and PHP",
        category: "Web Development",
        duration: "9 min read",

        intro: `
            <h3>Receiving form data</h3>

            <p>
                HTML forms can send information to a PHP script.
                A form may use GET or POST, depending on the purpose
                and the application's requirements.
            </p>

            <p>
                The action attribute specifies where the form submits.
                The name attribute identifies each field in the submitted data.
            </p>

            <h3>Example form</h3>

            <p>
                A form containing an input named username can submit
                that value to a PHP script. The script can then read
                the submitted value through the appropriate request variable.
            </p>

            <div class="lesson-callout warning">
                Validate submitted data on the server.
                When displaying user-provided text in HTML, use
                appropriate output escaping such as htmlspecialchars().
            </div>
        `,

        example: `<!-- form.html -->
<form action="welcome.php" method="post">
    <label for="username">Your name:</label>
    <input id="username" name="username" required>
    <button type="submit">Submit</button>
</form>

<!-- welcome.php -->
<?php
$name = $_POST["username"] ?? "";
echo htmlspecialchars($name, ENT_QUOTES, "UTF-8");
?>`,

        practice: `<?php
$name = "Elijah";

echo htmlspecialchars($name, ENT_QUOTES, "UTF-8");
?>`,

        challengeTitle: "Create a simple form",

        challenge: `
            Create an HTML form with a text field named email
            and a submit button. Then identify the PHP superglobal
            commonly used for a POST submission.
        `,

        hint: `Use method="post" and access submitted values with $_POST.`,

        output: "Elijah"
    },


    {
        title: "GET and POST Methods",
        category: "Web Development",
        duration: "7 min read",

        intro: `
            <h3>Understanding GET</h3>

            <p>
                GET is commonly used to retrieve information.
                Parameters are often visible in the URL.
            </p>

            <h3>Understanding POST</h3>

            <p>
                POST is commonly used to submit data for processing.
                Submitted values are normally carried in the request body.
            </p>

            <p>
                Neither method automatically makes information secure.
                Sensitive information requires HTTPS and appropriate
                application security controls.
            </p>
        `,

        example: `<?php
// Reading a GET parameter safely with a fallback:
$search = $_GET["search"] ?? "";

echo htmlspecialchars(
    $search,
    ENT_QUOTES,
    "UTF-8"
);
?>`,

        practice: `<?php
// Real request data is provided by the server.
$search = "PHP lessons";

echo htmlspecialchars(
    $search,
    ENT_QUOTES,
    "UTF-8"
);
?>`,

        challengeTitle: "Choose the right method",

        challenge: `
            Explain one common use for GET and one common use
            for POST.
        `,

        hint: `Think about searching for a page versus submitting a registration form.`,

        output: "PHP lessons"
    },


    {
        title: "Including and Reusing Files",
        category: "Project Structure",
        duration: "6 min read",

        intro: `
            <h3>Reusing code across files</h3>

            <p>
                PHP can include code from other files. This helps
                separate reusable components such as headers,
                navigation, footers, and configuration.
            </p>

            <ul>
                <li><code>include</code> includes a file and normally emits a warning if it fails.</li>
                <li><code>require</code> requires a file and stops execution on a failure.</li>
                <li><code>include_once</code> avoids including the same file more than once.</li>
                <li><code>require_once</code> combines required inclusion with once-only behaviour.</li>
            </ul>

            <p>
                File paths and permissions should be handled carefully,
                especially when file names are influenced by user input.
            </p>
        `,

        example: `<?php
require_once "header.php";

echo "<main>Welcome to my website.</main>";

require_once "footer.php";
?>`,

        practice: `<?php
echo "Reusable components make projects easier to maintain.";
?>`,

        challengeTitle: "Plan reusable website components",

        challenge: `
            Name two components that could be stored in separate
            PHP files and reused across multiple pages.
        `,

        hint: `Consider components that appear on many pages, such as navigation and footers.`,

        output: "Reusable components make projects easier to maintain."
    },


    {
        title: "Sessions and Cookies",
        category: "User State",
        duration: "8 min read",

        intro: `
            <h3>What is a session?</h3>

            <p>
                A session allows a PHP application to maintain
                user-related state across multiple requests.
                Session data is commonly stored on the server.
            </p>

            <h3>What is a cookie?</h3>

            <p>
                A cookie is data stored by a browser and sent with
                applicable requests. Cookies can help remember preferences
                or identify a session.
            </p>

            <p>
                Sessions often begin with <code>session_start()</code>,
                which must be called before output when required
                by the response and session configuration.
            </p>

            <div class="lesson-callout warning">
                Do not store passwords or other highly sensitive secrets
                directly in cookies. Use secure session configuration,
                HTTPS, and appropriate access controls.
            </div>
        `,

        example: `<?php
session_start();

$_SESSION["username"] = "Elijah";

echo $_SESSION["username"];
?>`,

        practice: `<?php
// Session examples require a PHP server.
echo "Sessions can maintain user state.";
?>`,

        challengeTitle: "Understand session storage",

        challenge: `
            Explain one difference between a session and a cookie.
        `,

        hint: `Think about where session data and cookie data are commonly stored.`,

        output: "Sessions can maintain user state."
    },


    {
        title: "Working with Files",
        category: "File Handling",
        duration: "8 min read",

        intro: `
            <h3>File handling in PHP</h3>

            <p>
                PHP provides functions for reading, writing,
                and managing files.
            </p>

            <ul>
                <li><code>file_get_contents()</code> reads file content.</li>
                <li><code>file_put_contents()</code> writes data to a file.</li>
                <li><code>fopen()</code> opens a file handle.</li>
                <li><code>fclose()</code> closes a file handle.</li>
            </ul>

            <div class="lesson-callout warning">
                File operations can affect real files and data.
                Check permissions, validate paths, and never allow
                untrusted input to choose arbitrary file locations.
            </div>
        `,

        example: `<?php
$content = "Welcome to PHP file handling.";

file_put_contents("message.txt", $content);

echo "File written successfully.";
?>`,

        practice: `<?php
echo "File operations require a PHP runtime.";
?>`,

        challengeTitle: "Choose a file function",

        challenge: `
            Which PHP function can write a string to a file?
        `,

        hint: `Look at file_put_contents().`,

        output: "File operations require a PHP runtime."
    },


    {
        title: "Introduction to MySQL and Databases",
        category: "Databases",
        duration: "8 min read",

        intro: `
            <h3>What is a database?</h3>

            <p>
                A database stores information in an organized form.
                A relational database can organize information into
                tables containing rows and columns.
            </p>

            <p>
                MySQL is a relational database management system.
                PHP applications commonly use a database to store
                information such as users, products, and orders.
            </p>

            <h3>Basic database concepts</h3>

            <ul>
                <li><strong>Database:</strong> An organized collection of data.</li>
                <li><strong>Table:</strong> A structure containing related records.</li>
                <li><strong>Row:</strong> One record in a table.</li>
                <li><strong>Column:</strong> A particular field in a table.</li>
                <li><strong>SQL:</strong> A language used to work with relational databases.</li>
            </ul>
        `,

        example: `-- Example SQL table
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    course VARCHAR(100) NOT NULL
);`,

        practice: `<?php
echo "A database can store application information.";
?>`,

        challengeTitle: "Design a student table",

        challenge: `
            Suggest three columns for a database table that stores
            student information.
        `,

        hint: `Think about a student's ID, name, and course.`,

        output: "A database can store application information."
    },


    {
        title: "Connecting PHP to MySQL with PDO",
        category: "Databases",
        duration: "9 min read",

        intro: `
            <h3>Connecting to a database</h3>

            <p>
                PDO, short for PHP Data Objects, provides a consistent
                interface for working with supported databases.
            </p>

            <p>
                A PDO connection can use a data source name containing
                the database type, host, and database name.
            </p>

            <p>
                Real connection credentials must be configured for your
                environment. Do not publish passwords in public source
                repositories.
            </p>

            <div class="lesson-callout warning">
                Use prepared statements for values supplied by users.
                This helps protect queries from SQL injection.
            </div>
        `,

        example: `<?php
$dsn = "mysql:host=localhost;dbname=school;charset=utf8mb4";

$pdo = new PDO(
    $dsn,
    "your_database_user",
    "your_database_password",
    [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]
);

echo "Database connection successful.";
?>`,

        practice: `<?php
echo "PDO provides a consistent database interface.";
?>`,

        challengeTitle: "Recognize safe database access",

        challenge: `
            Why should user-supplied values be passed through
            prepared statements instead of being joined directly
            into SQL strings?
        `,

        hint: `Think about SQL injection and the separation of SQL code from values.`,

        output: "PDO provides a consistent database interface."
    },


    {
        title: "CRUD Operations",
        category: "Databases",
        duration: "9 min read",

        intro: `
            <h3>What does CRUD mean?</h3>

            <p>
                CRUD describes four common operations performed
                on stored data.
            </p>

            <ul>
                <li><strong>Create:</strong> Add a new record.</li>
                <li><strong>Read:</strong> Retrieve records.</li>
                <li><strong>Update:</strong> Change existing records.</li>
                <li><strong>Delete:</strong> Remove records.</li>
            </ul>

            <p>
                These operations are commonly implemented using SQL
                statements and a PHP database interface such as PDO.
            </p>
        `,

        example: `<?php
// Illustrative SQL statements:

// CREATE
$sql = "INSERT INTO students (name) VALUES (:name)";

// READ
$sql = "SELECT id, name FROM students";

// UPDATE
$sql = "UPDATE students SET name = :name WHERE id = :id";

// DELETE
$sql = "DELETE FROM students WHERE id = :id";
?>`,

        practice: `<?php
echo "CRUD means Create, Read, Update, and Delete.";
?>`,

        challengeTitle: "Identify the CRUD operation",

        challenge: `
            Which CRUD operation would you use to change
            a student's stored course?
        `,

        hint: `It changes an existing record rather than creating a new one.`,

        output: "CRUD means Create, Read, Update, and Delete."
    },


    {
        title: "PHP Security Essentials",
        category: "Security",
        duration: "9 min read",

        intro: `
            <h3>Why security matters</h3>

            <p>
                A PHP application may process personal information,
                user accounts, submitted forms, and database records.
                Security must be considered from the beginning.
            </p>

            <ul>
                <li>Validate data received from users.</li>
                <li>Escape output appropriately for its destination.</li>
                <li>Use prepared statements for database values.</li>
                <li>Store passwords with password_hash().</li>
                <li>Verify passwords with password_verify().</li>
                <li>Use HTTPS for sensitive communication.</li>
                <li>Protect state-changing forms against CSRF.</li>
                <li>Do not expose secrets or detailed production errors.</li>
            </ul>

            <div class="lesson-callout warning">
                Validation, output escaping, authentication, authorization,
                and database protection solve different problems.
                A secure application needs multiple layers of protection.
            </div>
        `,

        example: `<?php
$password = "example-password";

$hash = password_hash(
    $password,
    PASSWORD_DEFAULT
);

if (password_verify($password, $hash)) {
    echo "Password verified.";
}
?>`,

        practice: `<?php
echo "Security should be part of every PHP project.";
?>`,

        challengeTitle: "Choose a secure password approach",

        challenge: `
            Name the PHP function commonly used to create a
            password hash and the function used to verify a password.
        `,

        hint: `The two functions are password_hash() and password_verify().`,

        output: "Security should be part of every PHP project."
    },


    {
        title: "Object-Oriented PHP",
        category: "Object-Oriented Programming",
        duration: "9 min read",

        intro: `
            <h3>Classes and objects</h3>

            <p>
                Object-oriented programming organizes software around
                objects that combine data and behaviour.
            </p>

            <p>
                A class defines a structure, while an object is an
                instance of a class. Properties hold data, and methods
                define behaviour.
            </p>

            <p>
                PHP supports classes, objects, constructors,
                inheritance, interfaces, traits, and other
                object-oriented features.
            </p>
        `,

        example: `<?php
class Student {
    public string $name;

    public function __construct(string $name) {
        $this->name = $name;
    }

    public function introduce(): string {
        return "My name is " . $this->name;
    }
}

$student = new Student("Elijah");

echo $student->introduce();
?>`,

        practice: `<?php
echo "Classes describe objects and their behaviour.";
?>`,

        challengeTitle: "Design a class",

        challenge: `
            Imagine a Student class. Name one property
            and one method it could contain.
        `,

        hint: `A property might store a name, while a method might return a greeting.`,

        output: "Classes describe objects and their behaviour."
    },


    {
        title: "Namespaces and Composer",
        category: "Modern PHP",
        duration: "8 min read",

        intro: `
            <h3>Namespaces</h3>

            <p>
                Namespaces help organize classes, interfaces,
                functions, and other declarations. They reduce
                naming conflicts in larger projects.
            </p>

            <h3>Composer</h3>

            <p>
                Composer is a dependency manager for PHP.
                It helps projects install libraries and manage
                dependency versions.
            </p>

            <p>
                Composer also supports autoloading, which can
                automatically load classes according to a configured
                project structure.
            </p>
        `,

        example: `<?php
namespace App\\Models;

class Student {
    public function getName(): string {
        return "Elijah";
    }
}
?>`,

        practice: `<?php
echo "Namespaces help organize larger PHP applications.";
?>`,

        challengeTitle: "Understand namespaces",

        challenge: `
            Describe one reason a PHP project might use namespaces.
        `,

        hint: `Consider what happens when two libraries contain classes with the same name.`,

        output: "Namespaces help organize larger PHP applications."
    },


    {
        title: "Build a Simple PHP Project",
        category: "Final Project",
        duration: "12 min read",

        intro: `
            <h3>Project: Student Information Page</h3>

            <p>
                You have reached the final lesson. Now bring together
                variables, arrays, loops, functions, HTML, and PHP output
                to design a simple student information page.
            </p>

            <h3>Project requirements</h3>

            <ol>
                <li>Create a PHP file named index.php.</li>
                <li>Store several student names in an array.</li>
                <li>Use a loop to display each name.</li>
                <li>Use HTML to structure the output.</li>
                <li>Run the project using a PHP server.</li>
            </ol>

            <p>
                After the basic version works, consider adding a form
                and storing records in a database using PDO.
            </p>

            <div class="lesson-callout success">
                Congratulations on reaching the final lesson.
                Keep practising, reading documentation, and building
                projects to strengthen your PHP skills.
            </div>
        `,

        example: `<?php
$students = [
    "Elijah",
    "Ada",
    "Tobi"
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student List</title>
</head>
<body>

    <h1>Student List</h1>

    <ul>
        <?php foreach ($students as $student): ?>
            <li>
                <?= htmlspecialchars(
                    $student,
                    ENT_QUOTES,
                    "UTF-8"
                ) ?>
            </li>
        <?php endforeach; ?>
    </ul>

</body>
</html>`,

        practice: `<?php
$students = ["Elijah", "Ada", "Tobi"];

foreach ($students as $student) {
    echo $student . "\\n";
}
?>`,

        challengeTitle: "Plan your first PHP project",

        challenge: `
            Create a student list with at least three names.
            Display every name using a foreach loop.
        `,

        hint: `Create an array, loop through it with foreach, and display each item.`,

        output: "Elijah\nAda\nTobi"
    }

];


/* =========================================================
   3. APPLICATION STATE
========================================================= */

let currentLessonIndex = 0;

let activeFilter = "all";

let toastTimer = null;

let completedLessons = [];

let certificateRecord = null;


/* =========================================================
   4. DOM HELPERS
========================================================= */

function getElement(id) {
    return document.getElementById(id);
}

function safeText(value) {
    return String(value ?? "");
}

function escapeHTML(value) {
    return safeText(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function getCurrentLesson() {
    return lessons[currentLessonIndex];
}


/* =========================================================
   5. SAVE AND LOAD PROGRESS
========================================================= */

function loadProgress() {
    try {
        const saved = localStorage.getItem(PHP_COURSE.storageKey);

        if (!saved) {
            completedLessons = [];
            return;
        }

        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed.completedLessons)) {
            completedLessons = parsed.completedLessons.filter(index => {
                return (
                    Number.isInteger(index) &&
                    index >= 0 &&
                    index < lessons.length
                );
            });
        } else {
            completedLessons = [];
        }

        currentLessonIndex =
            Number.isInteger(parsed.currentLessonIndex) &&
            parsed.currentLessonIndex >= 0 &&
            parsed.currentLessonIndex < lessons.length
                ? parsed.currentLessonIndex
                : 0;

    } catch (error) {
        console.warn("Could not load PHP progress:", error);

        completedLessons = [];
        currentLessonIndex = 0;
    }
}


function saveProgress() {
    try {
        localStorage.setItem(
            PHP_COURSE.storageKey,
            JSON.stringify({
                completedLessons,
                currentLessonIndex
            })
        );
    } catch (error) {
        console.warn("Could not save PHP progress:", error);
        showToast("Progress could not be saved in this browser.");
    }
}


function isLessonCompleted(index) {
    return completedLessons.includes(index);
}


/* =========================================================
   6. RENDER LESSON LIST
========================================================= */

function renderLessonList() {
    const list = getElement("lessonList");

    if (!list) {
        return;
    }

    const searchInput = getElement("lessonSearch");

    const query = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    list.innerHTML = "";

    let visibleCount = 0;

    lessons.forEach((lesson, index) => {
        const completed = isLessonCompleted(index);

        const matchesSearch =
            lesson.title.toLowerCase().includes(query) ||
            lesson.category.toLowerCase().includes(query);

        const matchesFilter =
            activeFilter === "all" ||
            (activeFilter === "completed" && completed) ||
            (activeFilter === "uncompleted" && !completed);

        if (!matchesSearch || !matchesFilter) {
            return;
        }

        visibleCount++;

        const button = document.createElement("button");

        button.type = "button";

        button.className = "lesson-item";

        if (index === currentLessonIndex) {
            button.classList.add("active");
        }

        if (completed) {
            button.classList.add("completed");
        }

        button.innerHTML = `
            <span class="lesson-number">
                ${completed ? "✓" : String(index + 1).padStart(2, "0")}
            </span>

            <span class="lesson-item-text">
                <strong>${escapeHTML(lesson.title)}</strong>
                <span>${escapeHTML(lesson.category)}</span>
            </span>
        `;

        button.addEventListener("click", () => {
            openLesson(index);
        });

        list.appendChild(button);
    });

    if (visibleCount === 0) {
        const empty = document.createElement("p");

        empty.style.padding = "15px 8px";
        empty.style.fontSize = "12px";
        empty.style.color = "var(--text-soft)";
        empty.textContent = "No matching lessons found.";

        list.appendChild(empty);
    }
}


/* =========================================================
   7. RENDER CURRENT LESSON
========================================================= */

function renderCurrentLesson() {
    const lesson = getCurrentLesson();

    if (!lesson) {
        return;
    }

    getElement("lessonNumberLabel").textContent =
        `LESSON ${String(currentLessonIndex + 1).padStart(2, "0")}`;

    getElement("lessonTitle").textContent = lesson.title;

    getElement("lessonCategory").textContent =
        lesson.category.toUpperCase();

    getElement("lessonDuration").textContent = lesson.duration;

    getElement("lessonContent").innerHTML = lesson.intro;

    getElement("lessonExample").textContent = lesson.example;

    getElement("practiceEditor").value = lesson.practice;

    getElement("challengeTitle").textContent =
        lesson.challengeTitle;

    getElement("challengeDescription").textContent =
        lesson.challenge;

    getElement("challengeHint").textContent =
        "Hint: " + lesson.hint;

    getElement("challengeHint").classList.add("hidden");

    getElement("showHintButton").textContent = "Show Hint";

    getElement("currentLessonIndicator").textContent =
        `Lesson ${currentLessonIndex + 1} of ${lessons.length}`;

    const completed = isLessonCompleted(currentLessonIndex);

    const status = getElement("lessonStatus");

    status.textContent = completed
        ? "COMPLETED"
        : "NOT COMPLETED";

    status.classList.toggle("completed", completed);

    getElement("previousLessonButton").disabled =
        currentLessonIndex === 0;

    const completeButton = getElement("completeLessonButton");

    const nextButton = getElement("nextLessonButton");

    if (completed) {
        completeButton.classList.add("hidden");
        nextButton.classList.remove("hidden");
    } else {
        completeButton.classList.remove("hidden");
        completeButton.textContent = "Mark as Complete ✓";

        nextButton.classList.add("hidden");
    }

    if (currentLessonIndex === lessons.length - 1) {
        nextButton.textContent = "Finish Course →";
    } else {
        nextButton.textContent = "Next Lesson →";
    }

    getElement("codeOutput").textContent =
        "Your practice output will appear here.";

    renderLessonList();

    updateProgress();
    updateCertificate();
}


/* =========================================================
   8. OPEN LESSON
========================================================= */

function openLesson(index) {
    if (
        !Number.isInteger(index) ||
        index < 0 ||
        index >= lessons.length
    ) {
        return;
    }

    currentLessonIndex = index;

    saveProgress();

    renderCurrentLesson();

    getElement("lessonWorkspace").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================================
   9. COMPLETE LESSON
========================================================= */

function completeCurrentLesson() {
    if (!isLessonCompleted(currentLessonIndex)) {
        completedLessons.push(currentLessonIndex);
    }

    saveProgress();

    renderLessonList();

    updateProgress();

    updateCertificate();

    if (currentLessonIndex < lessons.length - 1) {
        getElement("completeLessonButton").classList.add("hidden");

        getElement("nextLessonButton").classList.remove("hidden");

        getElement("lessonStatus").textContent = "COMPLETED";

        getElement("lessonStatus").classList.add("completed");

        showToast("Lesson completed! Keep going. 🎉");

    } else {
        renderCurrentLesson();

        showToast(
            completedLessons.length === lessons.length
                ? "Congratulations! You completed every lesson."
                : "Final lesson completed! Review any remaining lessons."
        );
    }

    renderCurrentLesson();
}


/* =========================================================
   10. PROGRESS DISPLAY
========================================================= */

function updateProgress() {
    const total = lessons.length;

    const completed = completedLessons.length;

    const remaining = total - completed;

    const percent = total === 0
        ? 0
        : Math.round((completed / total) * 100);

    getElement("sidebarProgressText").textContent = `${percent}%`;

    getElement("sidebarProgressFill").style.width = `${percent}%`;

    getElement("sidebarLessonCount").textContent =
        `${completed} of ${total} lessons completed`;

    getElement("overviewLessonCount").textContent = total;

    getElement("overviewStatus").textContent =
        percent === 100
            ? "Completed"
            : percent > 0
                ? "In Progress"
                : "Not Started";

    getElement("largeProgressText").textContent = `${percent}%`;

    getElement("largeProgressFill").style.width = `${percent}%`;

    getElement("completedLessonsStat").textContent = completed;

    getElement("remainingLessonsStat").textContent = remaining;

    getElement("totalLessonsStat").textContent = total;

    getElement("progressCircle").style.background = `
        conic-gradient(
            #2377e8 0deg,
            #22d3ee ${percent * 3.6}deg,
            #e7eef8 ${percent * 3.6}deg,
            #e7eef8 360deg
        )
    `;

    getElement("progressSummaryTitle").textContent =
        percent === 100
            ? "You've completed the course!"
            : percent >= 50
                ? "You're making great progress."
                : percent > 0
                    ? "Your learning journey is underway."
                    : "Your journey starts here.";

    getElement("progressSummaryText").textContent =
        percent === 100
            ? "You have marked every PHP lesson as complete. Review your code and continue building projects."
            : `${completed} lessons completed. ${remaining} lessons remain in your learning path.`;

    renderLessonList();
}


/* =========================================================
   11. LIMITED PHP LEARNING PREVIEW
========================================================= */

/*
   IMPORTANT:

   This is NOT a PHP interpreter.

   It supports a small number of common examples so learners
   can see basic output in the browser.

   Full PHP execution requires a PHP runtime or server.
*/


function decodePHPString(value) {
    let text = value.trim();

    if (
        (text.startsWith('"') && text.endsWith('"')) ||
        (text.startsWith("'") && text.endsWith("'"))
    ) {
        text = text.slice(1, -1);
    }

    return text
        .replace(/\\n/g, "\n")
        .replace(/\\t/g, "\t")
        .replace(/\\"/g, '"')
        .replace(/\\'/g, "'")
        .replace(/\\\\/g, "\\");
}


function previewPHP(source) {
    const code = String(source || "");

    if (!code.trim()) {
        return "Write some code before running the preview.";
    }

    if (code.length > 20000) {
        return "Preview stopped: the code is too long for this learning preview.";
    }

    /*
       Some constructs require a real PHP environment.
    */

    const unsupportedPatterns = [
        /\b(?:new\s+PDO|mysqli_|mysqli\b)/i,
        /\b(?:\$_GET|\$_POST|\$_SERVER|\$_SESSION|\$_COOKIE|\$_FILES)\b/,
        /\b(?:file_put_contents|file_get_contents|fopen|fwrite|unlink|move_uploaded_file)\s*\(/i,
        /\b(?:session_start|header|setcookie)\s*\(/i,
        /\b(?:password_hash|password_verify)\s*\(/i,
        /\b(?:include|include_once|require|require_once)\b/i,
        /\b(?:namespace|class|interface|trait)\b/i,
        /\b(?:function|foreach|while|switch|try|catch)\b/i,
        /<\?=\s*.*\?>/s
    ];

    if (unsupportedPatterns.some(pattern => pattern.test(code))) {
        return (
            "This example uses PHP features that this browser preview " +
            "does not execute.\n\n" +
            "Use a PHP server or runtime to run it properly."
        );
    }

    if (/\beval\s*\(/i.test(code)) {
        return "The learning preview does not support eval().";
    }

    if (/\b(?:exec|shell_exec|system|passthru|proc_open|popen)\s*\(/i.test(code)) {
        return "System commands are not supported by the learning preview.";
    }

    const variables = Object.create(null);

    let output = "";

    let working = code;

    working = working.replace(
        /<\?php|<\?|\?>/g,
        ""
    );

    working = working.replace(
        /\/\*[\s\S]*?\*\//g,
        ""
    );

    working = working.replace(
        /(^|\n)\s*(?:\/\/|#).*$/gm,
        ""
    );

    working = working.replace(
        /(^|\s)\/\/[^\n]*/g,
        "$1"
    );

    /*
       Reject unsupported control-flow and function syntax
       rather than pretending to execute real PHP.
    */

    if (/[{}]/.test(working)) {
        return (
            "This browser preview supports only simple statements. " +
            "Control-flow blocks and function bodies require a PHP runtime."
        );
    }

    const statements = working
        .split(";")
        .map(statement => statement.trim())
        .filter(Boolean);

    for (const statement of statements) {
        const assignment = statement.match(
            /^\$([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)$/
        );

        if (assignment) {
            const name = assignment[1];

            const expression = assignment[2].trim();

            const result = evaluateSimpleExpression(
                expression,
                variables
            );

            if (!result.ok) {
                return result.error;
            }

            variables[name] = result.value;

            continue;
        }

        const echoMatch = statement.match(
            /^(?:echo|print)\s+([\s\S]+)$/
        );

        if (echoMatch) {
            const expression = echoMatch[1];

            const parts = splitConcatenation(expression);

            let combined = "";

            for (const part of parts) {
                const result = evaluateSimpleExpression(
                    part.trim(),
                    variables
                );

                if (!result.ok) {
                    return result.error;
                }

                combined += String(result.value);
            }

            output += combined;

            continue;
        }

        const varDump = statement.match(
            /^var_dump\s*\(\s*(.+)\s*\)$/
        );

        if (varDump) {
            const result = evaluateSimpleExpression(
                varDump[1],
                variables
            );

            if (!result.ok) {
                return result.error;
            }

            if (typeof result.value === "boolean") {
                output += result.value
                    ? "bool(true)"
                    : "bool(false)";
            } else if (typeof result.value === "number") {
                output += Number.isInteger(result.value)
                    ? `int(${result.value})`
                    : `float(${result.value})`;
            } else {
                output += `string(${String(result.value).length}) "${result.value}"`;
            }

            continue;
        }

        if (/^\s*$/.test(statement)) {
            continue;
        }

        return (
            "The browser preview could not interpret this statement.\n\n" +
            "Try a basic variable assignment or an echo statement, " +
            "or use a real PHP runtime for more advanced code."
        );
    }

    return output || "(No output was generated.)";
}


/* =========================================================
   12. SIMPLE EXPRESSION HELPERS
========================================================= */

function splitConcatenation(expression) {
    const parts = [];

    let current = "";

    let quote = null;

    let escaped = false;

    let depth = 0;

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (escaped) {
            current += char;
            escaped = false;
            continue;
        }

        if (char === "\\" && quote) {
            current += char;
            escaped = true;
            continue;
        }

        if (quote) {
            current += char;

            if (char === quote) {
                quote = null;
            }

            continue;
        }

        if (char === '"' || char === "'") {
            quote = char;
            current += char;
            continue;
        }

        if (char === "(") {
            depth++;
            current += char;
            continue;
        }

        if (char === ")") {
            depth--;
            current += char;
            continue;
        }

        if (char === "." && depth === 0) {
            parts.push(current);
            current = "";
            continue;
        }

        current += char;
    }

    parts.push(current);

    return parts;
}


function evaluateSimpleExpression(expression, variables) {
    let expr = expression.trim();

    if (!expr) {
        return {
            ok: false,
            error: "Empty expression."
        };
    }

    /*
       String literals.
    */

    if (
        (expr.startsWith('"') && expr.endsWith('"')) ||
        (expr.startsWith("'") && expr.endsWith("'"))
    ) {
        return {
            ok: true,
            value: decodePHPString(expr)
        };
    }

    /*
       Variables.
    */

    if (/^\$[a-zA-Z_][a-zA-Z0-9_]*$/.test(expr)) {
        const name = expr.slice(1);

        if (!Object.prototype.hasOwnProperty.call(variables, name)) {
            return {
                ok: false,
                error: `Undefined preview variable: $${name}`
            };
        }

        return {
            ok: true,
            value: variables[name]
        };
    }

    /*
       Boolean and null values.
    */

    if (expr === "true") {
        return {
            ok: true,
            value: true
        };
    }

    if (expr === "false") {
        return {
            ok: true,
            value: false
        };
    }

    if (expr === "null") {
        return {
            ok: true,
            value: null
        };
    }

    /*
       Basic integer and decimal literals.
    */

    if (/^-?\d+(?:\.\d+)?$/.test(expr)) {
        return {
            ok: true,
            value: Number(expr)
        };
    }

    /*
       Supported string functions.
    */

    const strtoupperMatch = expr.match(
        /^strtoupper\s*\(\s*(.+)\s*\)$/s
    );

    if (strtoupperMatch) {
        const value = evaluateSimpleExpression(
            strtoupperMatch[1],
            variables
        );

        if (!value.ok) {
            return value;
        }

        return {
            ok: true,
            value: String(value.value).toUpperCase()
        };
    }

    const strtolowerMatch = expr.match(
        /^strtolower\s*\(\s*(.+)\s*\)$/s
    );

    if (strtolowerMatch) {
        const value = evaluateSimpleExpression(
            strtolowerMatch[1],
            variables
        );

        if (!value.ok) {
            return value;
        }

        return {
            ok: true,
            value: String(value.value).toLowerCase()
        };
    }

    const strlenMatch = expr.match(
        /^strlen\s*\(\s*(.+)\s*\)$/s
    );

    if (strlenMatch) {
        const value = evaluateSimpleExpression(
            strlenMatch[1],
            variables
        );

        if (!value.ok) {
            return value;
        }

        return {
            ok: true,
            value: String(value.value).length
        };
    }

    const strReplaceMatch = expr.match(
        /^str_replace\s*\(\s*("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')\s*,\s*("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')\s*,\s*(.+)\s*\)$/s
    );

    if (strReplaceMatch) {
        const search = decodePHPString(strReplaceMatch[1]);

        const replace = decodePHPString(strReplaceMatch[2]);

        const subject = evaluateSimpleExpression(
            strReplaceMatch[3],
            variables
        );

        if (!subject.ok) {
            return subject;
        }

        return {
            ok: true,
            value: String(subject.value).split(search).join(replace)
        };
    }

    /*
       Simple arithmetic expressions involving numbers
       and already-defined variables.

       This evaluator is intentionally restricted.
    */

    const numericExpression = expr.replace(
        /\$([a-zA-Z_][a-zA-Z0-9_]*)/g,
        (fullMatch, name) => {
            if (!Object.prototype.hasOwnProperty.call(variables, name)) {
                throw new Error(`Undefined preview variable: $${name}`);
            }

            const value = variables[name];

            if (
                typeof value !== "number" ||
                !Number.isFinite(value)
            ) {
                throw new Error(
                    `Arithmetic requires a numeric variable: $${name}`
                );
            }

            return String(value);
        }
    );

    if (/^[\d\s.+\-*/%()]+$/.test(numericExpression)) {
        try {
            /*
               Only numeric characters and arithmetic operators
               are accepted by the expression check above.
            */

            const value = Function(
                '"use strict"; return (' + numericExpression + ');'
            )();

            if (
                typeof value === "number" &&
                Number.isFinite(value)
            ) {
                return {
                    ok: true,
                    value
                };
            }

        } catch (error) {
            return {
                ok: false,
                error: "Invalid arithmetic expression."
            };
        }
    }

    return {
        ok: false,
        error:
            "Unsupported expression in the browser preview: " +
            expr
    };
}


/* =========================================================
   13. RUN PRACTICE PREVIEW
========================================================= */

function runCodePreview() {
    const code = getElement("practiceEditor").value;

    try {
        const result = previewPHP(code);

        getElement("codeOutput").textContent = result;

        showToast("Practice preview finished.");
    } catch (error) {
        console.error(error);

        getElement("codeOutput").textContent =
            "The preview could not process this example.\n\n" +
            "Try a simpler example or run the code in a real PHP environment.";

        showToast("The learning preview could not run that code.");
    }
}


/* =========================================================
   14. COPY EXAMPLE
========================================================= */

async function copyExample() {
    const code = getElement("lessonExample").textContent;

    try {
        await navigator.clipboard.writeText(code);

        showToast("Example copied to clipboard.");
    } catch (error) {
        /*
           Fallback for browsers where Clipboard API access
           is not available.
        */

        const temporary = document.createElement("textarea");

        temporary.value = code;

        temporary.style.position = "fixed";
        temporary.style.opacity = "0";

        document.body.appendChild(temporary);

        temporary.select();

        let copied = false;

        try {
            copied = document.execCommand("copy");
        } catch (copyError) {
            copied = false;
        }

        temporary.remove();

        showToast(
            copied
                ? "Example copied to clipboard."
                : "Copy was blocked by the browser. Select the code and copy it manually."
        );
    }
}


/* =========================================================
   15. TOAST NOTIFICATIONS
========================================================= */

function showToast(message) {
    const toast = getElement("toastMessage");

    if (!toast) {
        return;
    }

    toast.textContent = message;

    toast.classList.add("show");

    if (toastTimer) {
        clearTimeout(toastTimer);
    }

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}


/* =========================================================
   16. LESSON FILTERS
========================================================= */

function setupFilters() {
    document.querySelectorAll(".filter-button").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".filter-button").forEach(item => {
                item.classList.remove("active");
            });

            button.classList.add("active");

            activeFilter = button.dataset.filter || "all";

            renderLessonList();
        });
    });

    getElement("lessonSearch").addEventListener("input", () => {
        renderLessonList();
    });
}


/* =========================================================
   17. NAVIGATION BUTTONS
========================================================= */

function setupNavigation() {
    getElement("startLearningButton").addEventListener("click", () => {
        getElement("lessonWorkspace").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    getElement("viewProgressButton").addEventListener("click", () => {
        getElement("progressSection").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    getElement("previousLessonButton").addEventListener("click", () => {
        if (currentLessonIndex > 0) {
            openLesson(currentLessonIndex - 1);
        }
    });

    getElement("completeLessonButton").addEventListener("click", () => {
        completeCurrentLesson();
    });

    getElement("nextLessonButton").addEventListener("click", () => {
        if (currentLessonIndex < lessons.length - 1) {
            openLesson(currentLessonIndex + 1);
            return;
        }

        if (completedLessons.length === lessons.length) {
            getElement("certificateSection").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } else {
            const nextIncomplete = lessons.findIndex((lesson, index) => {
                return !isLessonCompleted(index);
            });

            if (nextIncomplete !== -1) {
                openLesson(nextIncomplete);

                showToast("Complete the remaining lessons to unlock your certificate.");
            }
        }
    });
}


/* =========================================================
   18. PRACTICE CONTROLS
========================================================= */

function setupPracticeControls() {
    getElement("runCodeButton").addEventListener("click", () => {
        runCodePreview();
    });

    getElement("resetEditorButton").addEventListener("click", () => {
        getElement("practiceEditor").value =
            getCurrentLesson().practice;

        getElement("codeOutput").textContent =
            "Editor reset. Run the preview to see the output.";

        showToast("Practice editor reset.");
    });

    getElement("clearOutputButton").addEventListener("click", () => {
        getElement("codeOutput").textContent = "Console cleared.";
    });

    getElement("copyExampleButton").addEventListener("click", () => {
        copyExample();
    });

    getElement("showHintButton").addEventListener("click", () => {
        const hint = getElement("challengeHint");

        const hidden = hint.classList.toggle("hidden");

        getElement("showHintButton").textContent =
            hidden
                ? "Show Hint"
                : "Hide Hint";
    });
}


/* =========================================================
   19. THEME CONTROL
========================================================= */

function loadTheme() {
    try {
        const theme = localStorage.getItem(PHP_COURSE.themeKey);

        document.body.classList.toggle(
            "dark-mode",
            theme === "dark"
        );
    } catch (error) {
        console.warn("Could not load theme preference.");
    }
}


function toggleTheme() {
    const dark = document.body.classList.toggle("dark-mode");

    try {
        localStorage.setItem(
            PHP_COURSE.themeKey,
            dark ? "dark" : "light"
        );
    } catch (error) {
        console.warn("Could not save theme preference.");
    }

    showToast(
        dark
            ? "Dark appearance enabled."
            : "Light appearance enabled."
    );
}


/* =========================================================
   20. CERTIFICATE
========================================================= */

function loadCertificateRecord() {
    try {
        const saved = localStorage.getItem(
            PHP_COURSE.certificateKey
        );

        certificateRecord = saved
            ? JSON.parse(saved)
            : null;

    } catch (error) {
        certificateRecord = null;
    }
}


function updateCertificate() {
    const unlocked = completedLessons.length === lessons.length;

    const title = getElement("certificateTitle");

    const description = getElement("certificateDescription");

    const lock = getElement("certificateLock");

    const form = getElement("certificateForm");

    const actionButton = getElement("certificateActionButton");

    if (!unlocked) {
        title.textContent = "Your certificate awaits.";

        description.textContent =
            `Complete all ${lessons.length} lessons to unlock certificate generation. ` +
            `${completedLessons.length} lessons completed so far.`;

        lock.textContent = "◇";

        form.classList.add("hidden");

        actionButton.disabled = true;

        actionButton.textContent = "Certificate Locked";

        return;
    }

    lock.textContent = "✓";

    title.textContent = "You've completed the course!";

    description.textContent =
        "All lessons have been marked complete. Enter your name to prepare your certificate.";

    actionButton.disabled = false;

    actionButton.textContent = "Create My Certificate";

    if (certificateRecord && certificateRecord.name) {
        getElement("certificateName").value =
            certificateRecord.name;
    }
}


function setupCertificate() {
    getElement("certificateActionButton").addEventListener("click", () => {
        if (completedLessons.length !== lessons.length) {
            showToast("Complete all lessons first.");
            return;
        }

        getElement("certificateForm").classList.remove("hidden");

        getElement("certificateForm").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });

    getElement("generateCertificateButton").addEventListener("click", () => {
        if (completedLessons.length !== lessons.length) {
            showToast("Complete all lessons before generating a certificate.");
            return;
        }

        const name = getElement("certificateName").value.trim();

        if (!name) {
            showToast("Enter the name you want on the certificate.");
            getElement("certificateName").focus();
            return;
        }

        certificateRecord = {
            name,
            course: PHP_COURSE.title,
            architect: "Elijah Opomulero",
            issuedAt: new Date().toISOString()
        };

        try {
            localStorage.setItem(
                PHP_COURSE.certificateKey,
                JSON.stringify(certificateRecord)
            );
        } catch (error) {
            console.warn("Could not save certificate information.");
        }

        renderCertificatePreview(certificateRecord);
    });
}


function renderCertificatePreview(record) {
    const result = getElement("certificateResult");

    result.classList.remove("hidden");

    result.innerHTML = `
        <div class="certificate-print-area">

            <div style="
                padding: 30px 20px;
                border: 3px double #2377e8;
                background: #ffffff;
                color: #12213d;
                text-align: center;
            ">

                <div style="
                    font-size: 12px;
                    font-weight: 900;
                    letter-spacing: 4px;
                    color: #2377e8;
                ">
                    ELOMCODE SCHOOL
                </div>

                <div style="
                    width: 65px;
                    height: 65px;
                    margin: 20px auto;
                    display: grid;
                    place-items: center;
                    border-radius: 18px;
                    background: linear-gradient(145deg, #0b2147, #3295ff);
                    color: #ffffff;
                    font-size: 36px;
                    font-weight: 900;
                ">
                    E
                </div>

                <h2 style="
                    color: #0b2147;
                    font-size: 27px;
                    margin: 10px 0;
                ">
                    Certificate of Completion
                </h2>

                <p style="color: #64748b; margin: 15px 0;">
                    This certificate recognizes that
                </p>

                <h2 style="
                    color: #1752a1;
                    font-size: 30px;
                    margin: 15px 0;
                    overflow-wrap: anywhere;
                ">
                    ${escapeHTML(record.name)}
                </h2>

                <p style="color: #64748b; margin: 15px 0;">
                    has completed the learning lessons in
                </p>

                <h3 style="color: #0b2147; margin: 15px 0;">
                    PHP Development Masterclass
                </h3>

                <p style="color: #64748b; margin: 15px 0;">
                    Course Architect: Elijah Opomulero
                </p>

                <p style="
                    color: #64748b;
                    font-size: 12px;
                    margin-top: 20px;
                ">
                    Learning record date:
                    ${escapeHTML(new Date(record.issuedAt).toLocaleDateString())}
                </p>

                <p style="
                    color: #64748b;
                    font-size: 10px;
                    margin-top: 15px;
                ">
                    Built by Elijah Opomulero
                </p>

            </div>

        </div>

        <p>
            This is a locally generated learning certificate.
            It is not a server-verified or independently accredited credential.
        </p>

        <button type="button" class="primary-button" id="printCertificateButton">
            Print / Save as PDF
        </button>
    `;

    getElement("printCertificateButton").addEventListener("click", () => {
        printCertificate(record);
    });

    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    showToast("Your certificate is ready.");
}


function printCertificate(record) {
    const printWindow = window.open(
        "",
        "_blank",
        "width=900,height=750"
    );

    if (!printWindow) {
        showToast("Allow pop-ups to print your certificate.");
        return;
    }

    const issueDate = new Date(
        record.issuedAt
    ).toLocaleDateString();

    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">

            <title>PHP Course Certificate</title>

            <style>
                * {
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                    padding: 35px;
                    background: #f4f8ff;
                    color: #12213d;
                    font-family: Arial, sans-serif;
                }

                .certificate {
                    max-width: 900px;
                    min-height: 550px;
                    margin: 0 auto;
                    padding: 45px 35px;
                    background: white;
                    border: 7px double #2377e8;
                    text-align: center;
                }

                .school {
                    color: #2377e8;
                    font-size: 14px;
                    font-weight: 900;
                    letter-spacing: 5px;
                }

                .logo {
                    width: 65px;
                    height: 65px;
                    margin: 22px auto;
                    display: grid;
                    place-items: center;
                    background: linear-gradient(145deg, #0b2147, #3295ff);
                    color: white;
                    border-radius: 15px;
                    font-size: 38px;
                    font-weight: 900;
                }

                h1 {
                    margin: 20px 0;
                    color: #0b2147;
                    font-size: 32px;
                }

                .recipient {
                    margin: 22px 0;
                    color: #1752a1;
                    font-size: 35px;
                    overflow-wrap: anywhere;
                }

                p {
                    line-height: 1.7;
                    color: #64748b;
                }

                h2 {
                    color: #0b2147;
                }

                .footer {
                    margin-top: 45px;
                    font-size: 11px;
                }

                @media print {
                    body {
                        padding: 0;
                        background: white;
                    }

                    .certificate {
                        max-width: none;
                        min-height: 95vh;
                        border-width: 7px;
                    }
                }
            </style>
        </head>

        <body>

            <main class="certificate">

                <div class="school">
                    ELOMCODE SCHOOL
                </div>

                <div class="logo">E</div>

                <h1>Certificate of Completion</h1>

                <p>This certificate recognizes that</p>

                <h2 class="recipient">
                    ${escapeHTML(record.name)}
                </h2>

                <p>has completed the learning lessons in</p>

                <h2>PHP Development Masterclass</h2>

                <p>
                    Course Architect: Elijah Opomulero
                </p>

                <p>
                    Learning record date: ${escapeHTML(issueDate)}
                </p>

                <div class="footer">
                    Built by Elijah Opomulero
                </div>

            </main>

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
   21. KEYBOARD SHORTCUTS
========================================================= */

function setupKeyboardShortcuts() {
    getElement("practiceEditor").addEventListener("keydown", event => {
        if (event.key === "Tab") {
            event.preventDefault();

            const editor = event.target;

            const start = editor.selectionStart;
            const end = editor.selectionEnd;

            const indentation = "    ";

            editor.setRangeText(
                indentation,
                start,
                end,
                "end"
            );
        }

        if (
            (event.ctrlKey || event.metaKey) &&
            event.key === "Enter"
        ) {
            event.preventDefault();

            runCodePreview();
        }
    });
}


/* =========================================================
   22. INITIALIZE COURSE
========================================================= */

function initializePHPMasterclass() {
    /*
       Confirm that the expected course lessons exist.
    */

    if (!Array.isArray(lessons) || lessons.length === 0) {
        console.error("PHP lesson database is missing.");

        showToast("Course lessons could not be loaded.");

        return;
    }

    loadProgress();

    loadCertificateRecord();

    loadTheme();

    getElement("overviewLessonCount").textContent = lessons.length;

    getElement("sidebarLessonCount").textContent =
        `0 of ${lessons.length} lessons completed`;

    getElement("remainingLessonsStat").textContent = lessons.length;

    getElement("totalLessonsStat").textContent = lessons.length;

    setupFilters();

    setupNavigation();

    setupPracticeControls();

    setupCertificate();

    setupKeyboardShortcuts();

    getElement("themeButton").addEventListener("click", toggleTheme);

    /*
       Keep progress display synchronized with lesson changes.
    */

    renderCurrentLesson();

    updateProgress();

    updateCertificate();

    console.log(
        `ELOMCODE PHP Masterclass loaded: ${lessons.length} lessons.`
    );
}


/* =========================================================
   23. START APPLICATION
========================================================= */

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializePHPMasterclass
    );
} else {
    initializePHPMasterclass();
}