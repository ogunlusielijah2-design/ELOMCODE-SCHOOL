/* ==========================================================
   ELOMCODE SCHOOL — PYTHON MASTERCLASS ENGINE
   55 Lessons | Browser Python Runtime | Progress | Certificate
   ========================================================== */

"use strict";

const STORAGE_KEY = "elomcode_python_masterclass_progress";
const XP_PER_LESSON = 25;

/*
   Each lesson contains:
   category, title, subtitle, explanation, example,
   expected output, tip, challenge and starter task.
*/

const lessonData = [

    // ======================================================
    // SECTION 1: PYTHON FOUNDATIONS — 10 LESSONS
    // ======================================================

    {
        category: "Python Foundations",
        title: "Introduction to Python",
        subtitle: "Discover Python and what you can build with it.",
        explanation: [
            "Python is a high-level programming language known for readable syntax. It is used in web development, automation, data analysis, artificial intelligence and many other fields.",
            "A Python program is a set of instructions the computer executes. Unlike HTML, which describes webpage structure, Python performs calculations, processes information and controls program behaviour.",
            "You can start with a simple instruction such as print(\"Hello, Python!\"). The print() function displays information in the program's output."
        ],
        tip: "Start small. Understanding one instruction properly is more valuable than copying a long program you do not understand.",
        example: "print(\"Hello, Python!\")",
        output: "Hello, Python!",
        challenge: "Write a program that prints your name and welcomes someone to ELOMCODE School."
    },

    {
        category: "Python Foundations",
        title: "Your First Python Program",
        subtitle: "Write and execute your first instructions.",
        explanation: [
            "A Python program can contain one instruction or many instructions. Python normally executes statements from top to bottom.",
            "The print() function displays text, numbers and the results of expressions. Text is normally placed inside quotation marks.",
            "You can put several print() statements on separate lines to display several messages."
        ],
        tip: "Try changing the message inside print(). Python will display your new message when you run the program.",
        example: 'print("Welcome to ELOMCODE")\nprint("I am learning Python.")\nprint(2026)',
        output: "Welcome to ELOMCODE\nI am learning Python.\n2026",
        challenge: "Print three separate lines: your name, your favourite subject and your reason for learning Python."
    },

    {
        category: "Python Foundations",
        title: "Python Syntax",
        subtitle: "Understand the rules that make Python code valid.",
        explanation: [
            "Syntax refers to the rules used to write valid code. Python expects instructions, brackets, quotation marks and indentation to follow specific rules.",
            "For example, print(\"Hello\") is valid, while print(\"Hello) has an unfinished string and causes a syntax error.",
            "Python is case-sensitive. The names print and Print are different. Built-in functions should be written using their correct spelling."
        ],
        tip: "When an error appears, read the message and check the line Python identifies. A missing bracket or quotation mark is a common beginner mistake.",
        example: 'print("Correct syntax")\nprint(5 + 3)',
        output: "Correct syntax\n8",
        challenge: "Write two valid Python statements and make sure every bracket and quotation mark is properly closed."
    },

    {
        category: "Python Foundations",
        title: "Comments in Python",
        subtitle: "Write notes that explain your code.",
        explanation: [
            "Comments are notes for people reading a program. Python ignores a comment that begins with the # symbol outside a string.",
            "Comments can explain why a calculation exists, describe a difficult section or temporarily disable an instruction while testing.",
            "Useful comments add context. You generally do not need to comment on every obvious instruction."
        ],
        tip: "A comment is not displayed by print(). It helps a person understand the code rather than telling Python to perform an action.",
        example: '# Display a welcome message\nprint("Welcome!")',
        output: "Welcome!",
        challenge: "Write a comment explaining your program, then print a welcome message below it."
    },

    {
        category: "Python Foundations",
        title: "Variables",
        subtitle: "Store information under meaningful names.",
        explanation: [
            "A variable is a name associated with a value. Use the assignment operator = to assign a value to a variable.",
            "For example, name = \"Elijah\" stores a string under the name name. You can later use print(name) to display that value.",
            "Variable names can contain letters, numbers and underscores, but they cannot begin with a number. Python variable names are case-sensitive."
        ],
        tip: "Choose meaningful names such as student_name, score and total_price instead of unclear names like x1 and a2.",
        example: 'name = "Elijah"\nscore = 95\nprint(name)\nprint(score)',
        output: "Elijah\n95",
        challenge: "Create variables for your name, age and favourite programming language. Print each variable."
    },

    {
        category: "Python Foundations",
        title: "Python Data Types",
        subtitle: "Recognise the different kinds of information.",
        explanation: [
            "Python supports several data types. Common beginner types include str for text, int for whole numbers, float for decimal numbers and bool for True or False values.",
            "The type() function tells you the type of a value. Understanding data types helps you decide which operations are appropriate.",
            "For example, adding two integers performs arithmetic, while combining two strings joins their text."
        ],
        tip: "Text such as \"25\" is a string, not an integer. The quotation marks change the type of the value.",
        example: 'print(type("Python"))\nprint(type(25))\nprint(type(3.5))\nprint(type(True))',
        output: "<class 'str'>\n<class 'int'>\n<class 'float'>\n<class 'bool'>",
        challenge: "Create one string, one integer, one float and one Boolean. Use type() to inspect each."
    },

    {
        category: "Python Foundations",
        title: "Numbers in Python",
        subtitle: "Work with integers and decimal values.",
        explanation: [
            "Python commonly represents whole numbers using int and decimal numbers using float.",
            "You can use numbers for scores, prices, measurements, quantities and many other tasks. Python supports positive and negative values.",
            "The int() and float() functions can convert suitable values between numeric types, although converting a decimal to an integer discards its fractional part."
        ],
        tip: "Use meaningful variable names when performing calculations so the purpose of each number is clear.",
        example: "students = 30\nprice = 12.5\nprint(students)\nprint(price)\nprint(int(price))",
        output: "30\n12.5\n12",
        challenge: "Store a whole number and a decimal number in separate variables. Print both values and their types."
    },

    {
        category: "Python Foundations",
        title: "Strings",
        subtitle: "Work with text in your programs.",
        explanation: [
            "A string is a sequence of text characters. Python lets you create strings using single or double quotation marks.",
            "You can combine strings with +, repeat strings with *, and find their length using len(). String methods can change the way text is represented.",
            "Strings are immutable, meaning their individual characters cannot be changed in place. Methods such as upper() return a new string."
        ],
        tip: "Use quotation marks around text, but not around a variable name when you want Python to retrieve the variable's value.",
        example: 'word = "python"\nprint(word.upper())\nprint(len(word))\nprint(word + " programming")',
        output: "PYTHON\n6\npython programming",
        challenge: "Store your favourite word in a variable. Print it in uppercase and display its length."
    },

    {
        category: "Python Foundations",
        title: "Input and Output",
        subtitle: "Receive information from users.",
        explanation: [
            "The print() function displays output. The input() function pauses execution and waits for the user to enter information.",
            "The value returned by input() is a string, even when the user types digits. Use int() or float() when you need a numeric value.",
            "A prompt inside input() explains what information the program expects."
        ],
        tip: "When testing interactively, enter the requested value into the input prompt. In this course editor, input() responses can be entered when you run your code.",
        example: 'name = "Learner"\nprint("Hello,", name)\nprint("Welcome to Python!")',
        output: "Hello, Learner\nWelcome to Python!",
        challenge: "Write a program that asks for a person's name and prints a personalised greeting."
    },

    {
        category: "Python Foundations",
        title: "Type Conversion",
        subtitle: "Convert values from one data type to another.",
        explanation: [
            "Type conversion changes a value from one data type to another. Common conversion functions include int(), float(), str() and bool().",
            "For example, int(\"42\") converts a numeric string to the integer 42. float(\"3.5\") converts suitable text to a decimal number.",
            "Not every value can be converted. Trying int(\"hello\") raises a ValueError because the text does not represent an integer."
        ],
        tip: "Convert input values before performing arithmetic. Remember that int(4.9) produces 4 rather than rounding to 5.",
        example: 'age_text = "17"\nage = int(age_text)\nprint(age + 3)\nprint(str(age))',
        output: "20\n17",
        challenge: "Convert the string \"100\" into an integer, add 25, and print the result."
    },

    // ======================================================
    // SECTION 2: OPERATORS AND DECISIONS — 10 LESSONS
    // ======================================================

    {
        category: "Operators and Decisions",
        title: "Arithmetic Operators",
        subtitle: "Perform mathematical operations.",
        explanation: [
            "Python arithmetic operators include + for addition, - for subtraction, * for multiplication and / for division.",
            "The // operator performs floor division, % returns the remainder, and ** raises a number to a power.",
            "Operator precedence determines which operations happen first. Parentheses help you make the intended order clear."
        ],
        tip: "Use parentheses for complex calculations so the order of operations is easy to read.",
        example: "print(10 + 5)\nprint(10 / 4)\nprint(10 // 4)\nprint(10 % 4)\nprint(2 ** 3)",
        output: "15\n2.5\n2\n2\n8",
        challenge: "Calculate the total cost of four items priced at 250 each, then print the total."
    },

    {
        category: "Operators and Decisions",
        title: "Comparison Operators",
        subtitle: "Compare values and produce Boolean results.",
        explanation: [
            "Comparison operators compare two values and return True or False.",
            "The main operators are ==, !=, >, <, >= and <=. Notice that == tests equality while = assigns a value.",
            "Comparisons are commonly used in if statements, loops and validation rules."
        ],
        tip: "A single = assigns a value. Two equals signs == compare values.",
        example: "print(10 > 5)\nprint(10 == 10)\nprint(4 != 4)\nprint(7 <= 9)",
        output: "True\nTrue\nFalse\nTrue",
        challenge: "Compare two numbers using greater-than, equality and less-than operators."
    },

    {
        category: "Operators and Decisions",
        title: "Logical Operators",
        subtitle: "Combine multiple conditions.",
        explanation: [
            "The logical operators and, or and not allow programs to evaluate Boolean conditions.",
            "and returns True when both conditions are true. or returns True when at least one condition is true. not reverses a Boolean value.",
            "Logical operators are useful for eligibility checks, access rules and complex decisions."
        ],
        tip: "Break a complicated condition into smaller parts when you are learning. This makes mistakes easier to identify.",
        example: "age = 20\nprint(age >= 18 and age < 30)\nprint(age < 18 or age > 60)\nprint(not False)",
        output: "True\nFalse\nTrue",
        challenge: "Create a condition that checks whether a number is greater than 10 and less than 100."
    },

    {
        category: "Operators and Decisions",
        title: "Assignment Operators",
        subtitle: "Update variables efficiently.",
        explanation: [
            "Assignment operators store values in variables. The basic operator is =.",
            "Compound operators such as +=, -=, *= and /= update an existing variable using an operation.",
            "For example, score += 5 means the current score increases by five. It is equivalent to score = score + 5."
        ],
        tip: "The variable must already have a value before you use a compound assignment operator.",
        example: "score = 10\nscore += 5\nscore *= 2\nprint(score)",
        output: "30",
        challenge: "Start with a balance of 500, add 150 and then subtract 75. Print the final balance."
    },

    {
        category: "Operators and Decisions",
        title: "If Statements",
        subtitle: "Make your program choose an action.",
        explanation: [
            "An if statement executes a block of code only when its condition is true.",
            "Python uses a colon after the condition and indentation to identify the statements belonging to the block.",
            "Conditions can use comparisons, Boolean values and logical operators."
        ],
        tip: "Indentation is part of Python syntax. Use consistent four-space indentation for blocks.",
        example: 'score = 85\nif score >= 50:\n    print("You passed!")',
        output: "You passed!",
        challenge: "Create a variable for a score. Print \"Pass\" if it is at least 50."
    },

    {
        category: "Operators and Decisions",
        title: "If, Elif and Else",
        subtitle: "Handle multiple possible outcomes.",
        explanation: [
            "Use if for the first condition, elif for additional conditions and else for the fallback case.",
            "Python evaluates conditions in order and executes the first matching branch. The other branches are skipped.",
            "This structure is useful for grading systems, menus and decisions that have several outcomes."
        ],
        tip: "Order your conditions carefully. A broad condition placed too early may prevent a more specific condition from being reached.",
        example: 'score = 75\nif score >= 80:\n    print("Excellent")\nelif score >= 50:\n    print("Pass")\nelse:\n    print("Try again")',
        output: "Pass",
        challenge: "Write a program that prints Excellent for scores of 80 or above, Pass for 50–79, and Try again otherwise."
    },

    {
        category: "Operators and Decisions",
        title: "Nested Conditions",
        subtitle: "Place one decision inside another.",
        explanation: [
            "A nested condition is an if statement placed inside another conditional block.",
            "Nested conditions help when a second decision should only be considered after a first requirement has been satisfied.",
            "Although nesting is useful, overly deep nesting can make code difficult to read. Logical operators or separate functions may simplify complicated rules."
        ],
        tip: "Pay close attention to indentation. The position of a nested block determines when it runs.",
        example: 'logged_in = True\nis_admin = False\nif logged_in:\n    if is_admin:\n        print("Admin access")\n    else:\n        print("Standard access")',
        output: "Standard access",
        challenge: "Check whether a person is logged in and then whether they are an administrator. Print an appropriate message."
    },

    {
        category: "Operators and Decisions",
        title: "Membership Operators",
        subtitle: "Check whether a value exists in a collection.",
        explanation: [
            "The in and not in operators test membership.",
            "They can check whether a substring exists in a string or whether an item exists in a list, tuple, set or dictionary.",
            "Membership tests return Boolean values and are useful for searching and validating choices."
        ],
        tip: "For strings, membership checks are case-sensitive. \"Py\" in \"Python\" is True, while \"py\" in \"Python\" is False.",
        example: 'language = "Python"\nprint("Py" in language)\nprint("Java" in language)\nprint(3 in [1, 2, 3])',
        output: "True\nFalse\nTrue",
        challenge: "Create a list of three favourite foods and check whether one particular food is in the list."
    },

    {
        category: "Operators and Decisions",
        title: "Identity Operators",
        subtitle: "Understand is and is not.",
        explanation: [
            "The is and is not operators test whether two references point to the same object, rather than simply checking whether their values are equal.",
            "Use == when you want to compare values. Use is especially when checking identity, such as whether a value is None.",
            "Two different list objects can contain identical items while still being different objects."
        ],
        tip: "For most everyday value comparisons, == is the correct choice. A common identity check is value is None.",
        example: "first = [1, 2]\nsecond = [1, 2]\nprint(first == second)\nprint(first is second)",
        output: "True\nFalse",
        challenge: "Create two separate lists containing the same items and compare them with == and is."
    },

    {
        category: "Operators and Decisions",
        title: "Operator Precedence",
        subtitle: "Control the order of calculations.",
        explanation: [
            "Operator precedence determines which operations are evaluated first in an expression.",
            "Exponentiation has higher precedence than multiplication, which has higher precedence than addition. Comparisons and logical operations follow their own precedence rules.",
            "Parentheses can explicitly group calculations and improve readability."
        ],
        tip: "When in doubt, use parentheses to make the intended calculation unambiguous.",
        example: "print(2 + 3 * 4)\nprint((2 + 3) * 4)\nprint(2 ** 3 * 2)",
        output: "14\n20\n16",
        challenge: "Write one expression that produces 20 by adding 2 and 3 before multiplying by 4."
    },

    // ======================================================
    // SECTION 3: LOOPS AND COLLECTIONS — 10 LESSONS
    // ======================================================

    {
        category: "Loops and Collections",
        title: "For Loops",
        subtitle: "Repeat instructions over a sequence.",
        explanation: [
            "A for loop iterates over the items in an iterable, such as a list, string or range.",
            "On each iteration, Python assigns the next item to the loop variable and executes the indented block.",
            "For loops are useful when you need to process a collection or repeat an action a known number of times."
        ],
        tip: "Indent every statement that should run during each iteration.",
        example: 'for number in range(1, 4):\n    print(number)',
        output: "1\n2\n3",
        challenge: "Use a for loop to print the numbers from 1 to 10."
    },

    {
        category: "Loops and Collections",
        title: "While Loops",
        subtitle: "Repeat instructions while a condition is true.",
        explanation: [
            "A while loop repeats its block as long as its condition remains true.",
            "The condition is checked before each iteration. If it starts as false, the loop body does not execute.",
            "Remember to update variables involved in the condition when necessary. Otherwise, a loop may never end."
        ],
        tip: "Always identify what will eventually make the condition false before running a while loop.",
        example: "number = 1\nwhile number <= 3:\n    print(number)\n    number += 1",
        output: "1\n2\n3",
        challenge: "Use a while loop to print the numbers 1 through 5."
    },

    {
        category: "Loops and Collections",
        title: "The Range Function",
        subtitle: "Generate sequences of numbers.",
        explanation: [
            "range() produces a sequence of integers commonly used with loops.",
            "range(stop) begins at zero and stops before stop. range(start, stop) specifies a starting value, and range(start, stop, step) also specifies a step.",
            "The stopping value is excluded. This is why range(1, 5) produces 1, 2, 3 and 4."
        ],
        tip: "To include 10 in a sequence that starts at 1, use range(1, 11).",
        example: "print(list(range(5)))\nprint(list(range(1, 5)))\nprint(list(range(2, 11, 2)))",
        output: "[0, 1, 2, 3, 4]\n[1, 2, 3, 4]\n[2, 4, 6, 8, 10]",
        challenge: "Use range() to print all even numbers from 2 to 20."
    },

    {
        category: "Loops and Collections",
        title: "Break and Continue",
        subtitle: "Control how loops proceed.",
        explanation: [
            "break immediately exits the nearest enclosing loop.",
            "continue skips the remainder of the current iteration and moves to the next iteration.",
            "These statements are useful when searching for an item or skipping values that do not meet a requirement."
        ],
        tip: "Use break when the loop should stop entirely, and continue when it should skip only the current item.",
        example: "for number in range(1, 6):\n    if number == 3:\n        continue\n    print(number)",
        output: "1\n2\n4\n5",
        challenge: "Loop through numbers 1 to 10 and skip the number 5."
    },

    {
        category: "Loops and Collections",
        title: "Nested Loops",
        subtitle: "Place one loop inside another.",
        explanation: [
            "A nested loop is a loop inside another loop. The inner loop normally completes its iterations for every iteration of the outer loop.",
            "Nested loops can generate grids, combinations and simple patterns.",
            "Be mindful of how many iterations occur. If each loop repeats many times, the total amount of work can grow quickly."
        ],
        tip: "Trace the outer and inner variables separately to understand the order of execution.",
        example: "for row in range(1, 3):\n    for column in range(1, 3):\n        print(row, column)",
        output: "1 1\n1 2\n2 1\n2 2",
        challenge: "Use nested loops to print a three-by-three grid of coordinate pairs."
    },

    {
        category: "Loops and Collections",
        title: "Lists",
        subtitle: "Store multiple values in an ordered collection.",
        explanation: [
            "A list stores multiple items in a single ordered, mutable collection. Create a list using square brackets.",
            "List positions are indexed starting at zero. A list can contain strings, numbers and other values.",
            "Lists are useful for storing names, scores, products and information that belongs together."
        ],
        tip: "The first item is at index 0, not index 1. An index that does not exist causes an IndexError.",
        example: 'fruits = ["apple", "banana", "mango"]\nprint(fruits[0])\nprint(fruits[2])\nprint(len(fruits))',
        output: "apple\nmango\n3",
        challenge: "Create a list of five favourite foods. Print the first item and the length of the list."
    },

    {
        category: "Loops and Collections",
        title: "List Methods",
        subtitle: "Add, remove and organise list items.",
        explanation: [
            "Lists provide methods such as append(), extend(), insert(), remove(), pop() and sort().",
            "append() adds one item to the end. remove() deletes the first matching value. pop() removes and returns an item by index, or the final item by default.",
            "Methods that modify a list often change the existing list instead of returning a new list."
        ],
        tip: "Check whether a method changes the original list or returns a value. For example, list.sort() sorts in place.",
        example: 'numbers = [3, 1, 2]\nnumbers.append(4)\nnumbers.sort()\nprint(numbers)\nnumbers.remove(2)\nprint(numbers)',
        output: "[1, 2, 3, 4]\n[1, 3, 4]",
        challenge: "Create a list, add an item, remove an item and print the final list."
    },

    {
        category: "Loops and Collections",
        title: "Tuples",
        subtitle: "Store ordered values that should not be changed.",
        explanation: [
            "A tuple is an ordered collection that cannot be modified after creation.",
            "Tuples are commonly written using parentheses, although commas are what make a tuple. A single-item tuple requires a trailing comma.",
            "They are useful for fixed groups of values, such as coordinates or related settings."
        ],
        tip: "Use a tuple for a fixed collection and a list when you need to add, remove or replace items.",
        example: 'coordinates = (10, 20)\nprint(coordinates[0])\nprint(coordinates[1])\nprint(len(coordinates))',
        output: "10\n20\n2",
        challenge: "Create a tuple containing three colours and print the second colour."
    },

    {
        category: "Loops and Collections",
        title: "Sets",
        subtitle: "Work with unique values.",
        explanation: [
            "A set is a collection of unique items. Duplicate values are removed automatically.",
            "Sets are useful for membership checks, removing duplicates and performing mathematical set operations.",
            "Sets do not provide the same positional indexing as lists, so do not rely on an item appearing in a particular position."
        ],
        tip: "An empty set is created with set(), because {} creates an empty dictionary.",
        example: "numbers = {1, 2, 2, 3, 3}\nprint(sorted(numbers))\nprint(2 in numbers)",
        output: "[1, 2, 3]\nTrue",
        challenge: "Create a set containing repeated numbers and show that only unique values remain."
    },

    {
        category: "Loops and Collections",
        title: "Dictionaries",
        subtitle: "Store information using key-value pairs.",
        explanation: [
            "A dictionary maps keys to values. It is useful when information needs meaningful labels, such as a student's name, age and score.",
            "Use square brackets with a key to retrieve or update a value. The get() method offers a way to retrieve a value with a fallback when a key is missing.",
            "Dictionary keys must be hashable. Strings and many immutable values are commonly used as keys."
        ],
        tip: "Use a dictionary when a value should be found by a meaningful key rather than by its position.",
        example: 'student = {"name": "Ada", "score": 90}\nprint(student["name"])\nstudent["score"] = 95\nprint(student["score"])',
        output: "Ada\n95",
        challenge: "Create a dictionary describing a book with its title, author and year. Print each value."
    },

    // ======================================================
    // SECTION 4: STRINGS AND FUNCTIONS — 8 LESSONS
    // ======================================================

    {
        category: "Strings and Functions",
        title: "String Methods",
        subtitle: "Transform and inspect text.",
        explanation: [
            "String methods provide operations for transforming and inspecting text.",
            "Common methods include upper(), lower(), strip(), replace(), split(), startswith() and find(). Most return a result without changing the original string.",
            "Methods can be combined to normalise user input before processing it."
        ],
        tip: "Because strings are immutable, save a returned string if you want to keep the transformed version.",
        example: 'message = "  Hello Python  "\nprint(message.strip())\nprint(message.upper())\nprint("banana".replace("a", "o"))',
        output: "Hello Python\n  HELLO PYTHON  \nbonono",
        challenge: "Take a string with extra spaces, remove the outside spaces and print it in lowercase."
    },

    {
        category: "Strings and Functions",
        title: "String Slicing",
        subtitle: "Extract parts of a string.",
        explanation: [
            "Slicing retrieves a portion of a sequence using the form sequence[start:stop:step].",
            "The start index is included, but the stop index is excluded. Negative indices count from the end of the sequence.",
            "Slicing can also be used with lists and tuples. A step of -1 is a common way to reverse a sequence."
        ],
        tip: "Try tracing the start and stop positions carefully. The stop index itself is never included in the slice.",
        example: 'word = "PYTHON"\nprint(word[0:3])\nprint(word[-3:])\nprint(word[::-1])',
        output: "PYT\nHON\nNOHTYP",
        challenge: "Create a word and print its first three characters and its reversed form."
    },

    {
        category: "Strings and Functions",
        title: "Formatted Strings",
        subtitle: "Insert values into readable messages.",
        explanation: [
            "Formatted strings, commonly called f-strings, allow expressions to be inserted directly into text.",
            "Place an f before the opening quotation mark and put expressions inside curly braces.",
            "F-strings can format numbers and decimal precision, making them useful for receipts, reports and personalised messages."
        ],
        tip: "An f-string uses curly braces for expressions. Without the leading f, the braces remain ordinary text.",
        example: 'name = "Ada"\nscore = 92\nprint(f"{name} scored {score} marks.")\nprint(f"Average: {3.14159:.2f}")',
        output: "Ada scored 92 marks.\nAverage: 3.14",
        challenge: "Create variables for a person's name and score, then display both in one f-string."
    },

    {
        category: "Strings and Functions",
        title: "Defining Functions",
        subtitle: "Package reusable instructions.",
        explanation: [
            "A function is a named block of code that performs a task. Define a function using def, followed by its name and parentheses.",
            "The function body is indented. The function executes when it is called, which allows the same behaviour to be reused.",
            "Functions help divide a large program into smaller parts that are easier to test and understand."
        ],
        tip: "Defining a function does not run its body. You must call the function.",
        example: 'def greet():\n    print("Hello, learner!")\n\ngreet()',
        output: "Hello, learner!",
        challenge: "Define a function called welcome() that prints a message, then call it."
    },

    {
        category: "Strings and Functions",
        title: "Function Parameters",
        subtitle: "Pass information into functions.",
        explanation: [
            "Parameters are names in a function definition that receive values when the function is called.",
            "Arguments are the actual values passed to the function. A function can accept one or several parameters.",
            "Parameters make functions reusable because the same instructions can work with different inputs."
        ],
        tip: "The order of positional arguments matters unless you use keyword arguments.",
        example: 'def greet(name):\n    print(f"Hello, {name}!")\n\ngreet("Ada")\ngreet("Elijah")',
        output: "Hello, Ada!\nHello, Elijah!",
        challenge: "Write a function that accepts a name and prints a personalised greeting."
    },

    {
        category: "Strings and Functions",
        title: "Return Values",
        subtitle: "Send a result back from a function.",
        explanation: [
            "The return statement ends a function and sends a result back to the code that called it.",
            "A returned value can be stored, printed, or passed into another function. This differs from print(), which displays a value but does not return that displayed value.",
            "Functions that return results are especially useful for calculations and reusable business rules."
        ],
        tip: "Use return when other parts of the program need the result. Use print when you simply want to display something.",
        example: "def add(a, b):\n    return a + b\n\nresult = add(4, 6)\nprint(result)",
        output: "10",
        challenge: "Create a function that multiplies two numbers and returns the result."
    },

    {
        category: "Strings and Functions",
        title: "Default and Keyword Arguments",
        subtitle: "Make function calls more flexible.",
        explanation: [
            "A parameter can have a default value. If the caller omits that argument, the default is used.",
            "Keyword arguments specify a parameter by name, which can make calls easier to understand.",
            "Parameters without defaults generally need to be supplied before optional parameters in a function definition."
        ],
        tip: "Use keyword arguments when a function has several options and the meaning of each value should be clear.",
        example: 'def greet(name, greeting="Hello"):\n    print(f"{greeting}, {name}!")\n\ngreet("Ada")\ngreet("Elijah", greeting="Welcome")',
        output: "Hello, Ada!\nWelcome, Elijah!",
        challenge: "Write a function that accepts a name and an optional greeting."
    },

    {
        category: "Strings and Functions",
        title: "Variable Scope",
        subtitle: "Understand where variable names are available.",
        explanation: [
            "Scope describes where a variable name can be accessed. A variable created inside a function is normally local to that function.",
            "Parameters are local names too. Code outside the function cannot normally access a local variable by its name.",
            "Using local variables and returning results often makes functions easier to reason about than relying on global state."
        ],
        tip: "If another part of your program needs a calculated value, consider returning it from the function.",
        example: "def calculate():\n    total = 10 + 5\n    return total\n\nresult = calculate()\nprint(result)",
        output: "15",
        challenge: "Create a function with a local variable, return its value and print the returned result outside the function."
    },

    // ======================================================
    // SECTION 5: ADVANCED PYTHON SKILLS — 7 LESSONS
    // ======================================================

    {
        category: "Advanced Python Skills",
        title: "List Comprehensions",
        subtitle: "Build lists using concise expressions.",
        explanation: [
            "A list comprehension creates a new list by evaluating an expression for each item in an iterable.",
            "It can include a condition to filter which items are included. This often replaces a short loop that builds a list with append().",
            "Although comprehensions are concise, ordinary loops may be clearer for complicated logic."
        ],
        tip: "Understand the equivalent for loop first, then learn to recognise the shorter comprehension form.",
        example: "squares = [number ** 2 for number in range(1, 5)]\nprint(squares)",
        output: "[1, 4, 9, 16]",
        challenge: "Create a list comprehension that produces the squares of even numbers from 1 to 10."
    },

    {
        category: "Advanced Python Skills",
        title: "Lambda Functions",
        subtitle: "Write small anonymous functions.",
        explanation: [
            "A lambda expression creates a small anonymous function containing a single expression.",
            "Lambdas are often used for short transformations or as a key function for sorting.",
            "For complex logic, a normal def function with a descriptive name is usually easier to read."
        ],
        tip: "Lambda functions return the value of their expression automatically. They do not use a return statement.",
        example: "double = lambda number: number * 2\nprint(double(5))\nprint(double(12))",
        output: "10\n24",
        challenge: "Create a lambda function that adds 10 to a number and test it with two values."
    },

    {
        category: "Advanced Python Skills",
        title: "Modules and Imports",
        subtitle: "Use code provided by Python modules.",
        explanation: [
            "A module is a file or library of Python code that provides reusable functions, classes or values.",
            "The import statement makes a module available to your program. For example, math provides mathematical functions and constants.",
            "Modules help you avoid writing everything from scratch. Some modules are included with Python, while others must be installed separately."
        ],
        tip: "Use a module's documentation to understand the functions and arguments it supports.",
        example: "import math\nprint(math.sqrt(81))\nprint(round(math.pi, 2))",
        output: "9.0\n3.14",
        challenge: "Import math and display the square root of 144."
    },

    {
        category: "Advanced Python Skills",
        title: "Random Numbers",
        subtitle: "Generate random choices and values.",
        explanation: [
            "Python's random module provides tools for pseudorandom choices and numbers.",
            "Functions include randint(), choice() and shuffle(). The results can differ each time the program runs.",
            "The ordinary random module is suitable for games and simulations, but not for generating security-sensitive secrets."
        ],
        tip: "A random result is not necessarily predictable. If you need reproducible experiments, learn about random.seed().",
        example: "import random\nrandom.seed(7)\nprint(random.randint(1, 10))\nprint(random.choice(['red', 'blue', 'green']))",
        output: "The seeded result is repeatable for this Python environment.",
        challenge: "Use random.choice() to select one item from a list of three colours."
    },

    {
        category: "Advanced Python Skills",
        title: "Error Handling",
        subtitle: "Handle problems without abruptly stopping.",
        explanation: [
            "Errors can occur when a program receives unexpected input or performs an invalid operation.",
            "A try block contains code that might raise an exception. An except block handles a matching exception so the program can respond appropriately.",
            "Catch specific exceptions when possible. Broad exception handling can hide programming mistakes."
        ],
        tip: "Handle the error you expect rather than suppressing every possible error.",
        example: 'try:\n    number = int("42")\n    print(number)\nexcept ValueError:\n    print("Invalid number")',
        output: "42",
        challenge: "Convert a valid numeric string to an integer using try and except."
    },

    {
        category: "Advanced Python Skills",
        title: "Working with Dates",
        subtitle: "Represent dates and times in Python.",
        explanation: [
            "Python's datetime module provides classes for representing dates, times and durations.",
            "The date class represents calendar dates, while datetime can represent a date and time together. Formatting methods can turn these values into readable strings.",
            "Dates are useful for schedules, reports, age calculations and recording when events happen."
        ],
        tip: "For programs that depend on a user's local time zone, learn about aware datetime objects and time zones.",
        example: "from datetime import date\nsample = date(2026, 10, 12)\nprint(sample.year)\nprint(sample.month)\nprint(sample.day)",
        output: "2026\n10\n12",
        challenge: "Create a date object for your chosen date and print its year, month and day."
    },

    {
        category: "Advanced Python Skills",
        title: "File Handling",
        subtitle: "Read and write files with Python.",
        explanation: [
            "Python can read from and write to files. The open() function opens a file using a chosen mode, such as read or write.",
            "The with statement is recommended because it ensures the file is properly closed after the block finishes.",
            "File access depends on the runtime's available file system and permissions. Browser-based environments may use a virtual file system rather than your computer's actual folders."
        ],
        tip: "Writing to a file in write mode can replace its existing contents. Be careful when working with important files.",
        example: 'with open("notes.txt", "w") as file:\n    file.write("Learning Python")\n\nwith open("notes.txt", "r") as file:\n    print(file.read())',
        output: "Learning Python",
        challenge: "Write text to a file, then read the file and display its contents."
    },

    // ======================================================
    // SECTION 6: OBJECT-ORIENTED PYTHON — 5 LESSONS
    // ======================================================

    {
        category: "Object-Oriented Python",
        title: "Introduction to OOP",
        subtitle: "Organise programs around objects.",
        explanation: [
            "Object-oriented programming, or OOP, organises code around objects that combine data and behaviour.",
            "A class describes how a type of object is structured. An object is an instance created from that class.",
            "OOP can help represent real-world concepts such as students, products, accounts or game characters."
        ],
        tip: "Think of a class as a blueprint and an object as a particular instance made from that blueprint.",
        example: "class Student:\n    pass\n\nstudent = Student()\nprint(type(student).__name__)",
        output: "Student",
        challenge: "Create a class called Book and create one instance of it."
    },

    {
        category: "Object-Oriented Python",
        title: "Classes and Objects",
        subtitle: "Create objects with attributes and methods.",
        explanation: [
            "A class is defined using the class keyword. Attributes store information about an object, while methods define behaviour.",
            "The self parameter refers to the current instance. Python passes the instance automatically when an instance method is called.",
            "Classes help group related information and operations into one understandable structure."
        ],
        tip: "Instance methods usually take self as their first parameter.",
        example: 'class Dog:\n    def speak(self):\n        print("Woof!")\n\ndog = Dog()\ndog.speak()',
        output: "Woof!",
        challenge: "Create a class with a method that prints a message, then call that method."
    },

    {
        category: "Object-Oriented Python",
        title: "The Constructor",
        subtitle: "Initialise new objects.",
        explanation: [
            "The __init__ method initialises an object when an instance is created.",
            "It commonly assigns arguments to instance attributes using self.attribute_name.",
            "Constructors allow objects to begin with meaningful values rather than requiring every attribute to be assigned afterward."
        ],
        tip: "The name __init__ contains two underscores before and after init.",
        example: 'class Student:\n    def __init__(self, name):\n        self.name = name\n\nstudent = Student("Ada")\nprint(student.name)',
        output: "Ada",
        challenge: "Create a Student class that accepts a name and age, then display both attributes."
    },

    {
        category: "Object-Oriented Python",
        title: "Inheritance",
        subtitle: "Create a class based on another class.",
        explanation: [
            "Inheritance allows one class to reuse or extend the behaviour of another class.",
            "The original class is called the base class or parent class. The derived class can add methods or override inherited behaviour.",
            "Inheritance is useful when types share common behaviour, but it should not be used when a simpler composition would make the design clearer."
        ],
        tip: "A child class can call a parent implementation with super() when appropriate.",
        example: 'class Animal:\n    def speak(self):\n        print("Animal sound")\n\nclass Cat(Animal):\n    pass\n\nCat().speak()',
        output: "Animal sound",
        challenge: "Create a base class with a method, then create a child class that inherits the method."
    },

    {
        category: "Object-Oriented Python",
        title: "Encapsulation and Polymorphism",
        subtitle: "Understand object behaviour and interfaces.",
        explanation: [
            "Encapsulation means grouping data and behaviour together and defining how an object should be used. Python conventions such as a leading underscore communicate that an attribute is intended for internal use.",
            "Polymorphism allows different objects to respond to the same operation in their own way. For example, different classes may each define a speak() method.",
            "These ideas help programs support different object types through a consistent interface."
        ],
        tip: "A leading underscore is a convention, not strict access control. Python generally relies on clear interfaces and developer discipline.",
        example: 'class Dog:\n    def speak(self):\n        return "Woof"\n\nclass Cat:\n    def speak(self):\n        return "Meow"\n\nfor animal in [Dog(), Cat()]:\n    print(animal.speak())',
        output: "Woof\nMeow",
        challenge: "Create two classes with the same method name but different return values."
    },

    // ======================================================
    // SECTION 7: PRACTICAL PYTHON AND PROJECTS — 5 LESSONS
    // ======================================================

    {
        category: "Practical Python and Projects",
        title: "Debugging Python",
        subtitle: "Find and fix mistakes in your programs.",
        explanation: [
            "Debugging is the process of finding the cause of unexpected behaviour and correcting it.",
            "Syntax errors prevent code from being parsed. Runtime exceptions occur during execution. Logic errors occur when the program runs but produces the wrong result.",
            "Read error messages carefully, isolate the problem and test one change at a time."
        ],
        tip: "When a program fails, reduce it to the smallest example that still reproduces the problem.",
        example: "price = 100\nquantity = 3\ntotal = price * quantity\nprint(total)",
        output: "300",
        challenge: "Write a small calculation, intentionally inspect how its variables affect the result, and correct any wrong calculation."
    },

    {
        category: "Practical Python and Projects",
        title: "Useful Built-in Functions",
        subtitle: "Use Python's ready-made tools.",
        explanation: [
            "Python includes built-in functions such as len(), sum(), min(), max(), sorted(), round() and abs().",
            "These functions handle common operations on values and collections without requiring you to write the logic yourself.",
            "Learning the built-ins helps you write shorter and more readable programs."
        ],
        tip: "Check the expected input type and return value when learning a new function.",
        example: "numbers = [4, 8, 2, 6]\nprint(len(numbers))\nprint(sum(numbers))\nprint(min(numbers))\nprint(max(numbers))",
        output: "4\n20\n2\n8",
        challenge: "Create a list of numbers and use sum(), max() and min() on it."
    },

    {
        category: "Practical Python and Projects",
        title: "Build a Calculator",
        subtitle: "Combine variables, input and arithmetic.",
        explanation: [
            "A calculator project combines input, type conversion, arithmetic and output.",
            "A reliable calculator must decide which operations are allowed and how invalid choices should be handled.",
            "For this practice task, you can begin with fixed variables and then extend your program to accept user input."
        ],
        tip: "Test addition, subtraction, multiplication and division separately before combining them into a menu.",
        example: "first = 12\nsecond = 4\nprint(first + second)\nprint(first - second)\nprint(first * second)\nprint(first / second)",
        output: "16\n8\n48\n3.0",
        challenge: "Build a calculator that performs at least two arithmetic operations and displays the results."
    },

    {
        category: "Practical Python and Projects",
        title: "Build a Number Guessing Game",
        subtitle: "Combine loops, conditions and randomness.",
        explanation: [
            "A number guessing game chooses a secret number and asks the player to guess it.",
            "The program compares the guess with the secret value and provides feedback such as too high or too low.",
            "A loop can continue until the guess is correct. A limited number of attempts can make the game more challenging."
        ],
        tip: "Start by testing the comparison logic using fixed numbers before adding random selection and user input.",
        example: 'secret = 7\nguess = 5\nif guess < secret:\n    print("Too low")\nelif guess > secret:\n    print("Too high")\nelse:\n    print("Correct!")',
        output: "Too low",
        challenge: "Create a number guessing game that tells the player whether a guess is too high, too low or correct."
    },

    {
        category: "Practical Python and Projects",
        title: "Build a Student Grade System",
        subtitle: "Use collections and decisions to process scores.",
        explanation: [
            "A grade system stores student information, checks scores and assigns grades according to defined rules.",
            "You can use dictionaries to connect students with scores and conditional statements to assign a result.",
            "A more complete system might validate score ranges, calculate class averages and summarise results."
        ],
        tip: "Write down the grading rules first and test values at the boundaries between grades.",
        example: 'score = 85\nif score >= 80:\n    grade = "A"\nelif score >= 70:\n    grade = "B"\nelif score >= 60:\n    grade = "C"\nelse:\n    grade = "Needs improvement"\nprint(grade)',
        output: "A",
        challenge: "Build a grade system that accepts a score and assigns an appropriate grade."
    },

    // ======================================================
    // SECTION 8: PYTHON MASTERY — 10 LESSONS
    // ======================================================

    {
        category: "Python Mastery",
        title: "Working with JSON",
        subtitle: "Represent structured information.",
        explanation: [
            "JSON is a text format for representing structured data. It is widely used for APIs, configuration and data exchange.",
            "Python's json module can convert Python values into JSON text with dumps() and parse JSON text with loads().",
            "JSON supports objects, arrays, strings, numbers, Booleans and null. Not every Python object can be represented directly."
        ],
        tip: "Python dictionaries commonly map to JSON objects, and Python lists commonly map to JSON arrays.",
        example: 'import json\ndata = {"name": "Ada", "score": 95}\ntext = json.dumps(data)\nprint(text)\nprint(json.loads(text)["name"])',
        output: '{"name": "Ada", "score": 95}\nAda',
        challenge: "Convert a dictionary to JSON text and then parse it back into a Python value."
    },

    {
        category: "Python Mastery",
        title: "Iterators and Iterables",
        subtitle: "Understand how Python moves through data.",
        explanation: [
            "An iterable is an object that can provide its items one at a time, such as a list or string.",
            "An iterator keeps track of iteration state and provides values through next(). The iter() function can obtain an iterator from an iterable.",
            "Iteration underlies for loops, comprehensions and many tools for processing streams of data."
        ],
        tip: "A for loop automatically manages iterator creation and completion for you.",
        example: "items = [10, 20, 30]\niterator = iter(items)\nprint(next(iterator))\nprint(next(iterator))\nprint(next(iterator))",
        output: "10\n20\n30",
        challenge: "Create an iterator from a list and retrieve its first two items using next()."
    },

    {
        category: "Python Mastery",
        title: "Generators",
        subtitle: "Produce values one at a time.",
        explanation: [
            "A generator function uses yield to produce values gradually instead of building and returning an entire sequence at once.",
            "Each time the generator is advanced, execution continues from where it last yielded a value.",
            "Generators can save memory when working with large sequences or streams of information."
        ],
        tip: "Use yield when a function should produce a sequence of values over time.",
        example: "def count_up_to_three():\n    yield 1\n    yield 2\n    yield 3\n\nprint(list(count_up_to_three()))",
        output: "[1, 2, 3]",
        challenge: "Write a generator that yields the numbers 1, 2 and 3."
    },

    {
        category: "Python Mastery",
        title: "Decorators",
        subtitle: "Extend function behaviour.",
        explanation: [
            "A decorator is a callable that takes another callable and returns a replacement or wrapped callable.",
            "Decorators are often written with the @decorator_name syntax immediately above a function definition.",
            "They are used for logging, timing, registration and other cross-cutting behaviours."
        ],
        tip: "Understand ordinary functions and nested functions before attempting complicated decorators.",
        example: 'def announce(func):\n    def wrapper():\n        print("Starting")\n        func()\n    return wrapper\n\n@announce\ndef greet():\n    print("Hello")\n\ngreet()',
        output: "Starting\nHello",
        challenge: "Create a simple decorator that prints a message before calling another function."
    },

    {
        category: "Python Mastery",
        title: "Context Managers",
        subtitle: "Manage resources safely.",
        explanation: [
            "A context manager sets up a resource and ensures that cleanup happens when the block finishes.",
            "The with statement uses a context manager. File objects are a familiar example because the file is closed automatically after the block.",
            "Context managers can also manage locks, temporary resources and other operations that require reliable cleanup."
        ],
        tip: "Prefer with open(...) over manually opening a file and hoping every execution path closes it.",
        example: 'from io import StringIO\nwith StringIO("Python") as file:\n    print(file.read())\nprint(file.closed)',
        output: "Python\nTrue",
        challenge: "Use a context manager to read text from an in-memory text stream."
    },

    {
        category: "Python Mastery",
        title: "Testing with Assertions",
        subtitle: "Check whether expected conditions hold.",
        explanation: [
            "An assert statement checks a condition and raises AssertionError if the condition is false.",
            "Assertions are useful for debugging assumptions and checking internal program logic during development.",
            "They should not replace validation of untrusted user input because Python can disable assertions in optimized execution."
        ],
        tip: "Test normal values, boundary values and invalid cases rather than checking only one successful example.",
        example: "total = 5 + 5\nassert total == 10\nprint('Test passed')",
        output: "Test passed",
        challenge: "Write a calculation and use assert to verify that its result equals the expected value."
    },

    {
        category: "Python Mastery",
        title: "Working with CSV Data",
        subtitle: "Read and write tabular text data.",
        explanation: [
            "CSV files represent tabular data using rows and delimiters, commonly commas.",
            "Python's csv module handles quoting and delimiter rules more safely than manually splitting every line.",
            "CSV data is often exchanged between spreadsheets, reporting systems and data-processing programs."
        ],
        tip: "When working with real files, use newline='' when opening CSV files as recommended by Python's csv documentation.",
        example: 'import csv\nfrom io import StringIO\nsource = StringIO("name,score\\nAda,90\\n")\nfor row in csv.DictReader(source):\n    print(row["name"], row["score"])',
        output: "Ada 90",
        challenge: "Use csv.DictReader with an in-memory CSV string and print a field from each row."
    },

    {
        category: "Python Mastery",
        title: "Introduction to APIs",
        subtitle: "Understand how programs communicate.",
        explanation: [
            "An API defines how one program can request information or actions from another program.",
            "A web API often exchanges data through HTTP requests and JSON responses. Requests may include parameters, headers and authentication information.",
            "In a browser-based Python environment, network access may be restricted by browser security rules and the remote server's configuration."
        ],
        tip: "Before using an API, read its documentation and understand its authentication, usage limits and data requirements.",
        example: 'import json\nresponse = {"status": "success", "items": 3}\nprint(json.dumps(response, indent=2))',
        output: '{\n  "status": "success",\n  "items": 3\n}',
        challenge: "Create a dictionary that represents an API response and convert it to formatted JSON."
    },

    {
        category: "Python Mastery",
        title: "Python Security Basics",
        subtitle: "Write safer programs.",
        explanation: [
            "Secure programs validate inputs, protect credentials and avoid executing untrusted code.",
            "Never store private API keys or passwords in public source code. Do not use eval() or exec() on untrusted input.",
            "Use established libraries and documentation for security-sensitive tasks, and handle file paths and external data carefully."
        ],
        tip: "Treat user input and external data as untrusted until you have validated them.",
        example: 'user_text = "__import__(\'os\').name"\nprint("Received text safely")\nprint(len(user_text) > 0)',
        output: "Received text safely\nTrue",
        challenge: "Write a program that validates whether a user-provided number falls within an acceptable range."
    },

    {
        category: "Python Mastery",
        title: "Final Python Project",
        subtitle: "Bring your Python knowledge together.",
        explanation: [
            "Your final project combines the concepts you have learned: variables, conditions, loops, collections, functions and error handling.",
            "Choose a useful project such as a student record manager, expense tracker, quiz game or inventory system.",
            "Plan the requirements, build a small working version, test it with different inputs and improve it gradually."
        ],
        tip: "A small project that works correctly and that you understand is better than a large copied project you cannot explain.",
        example: 'def calculate_average(scores):\n    if not scores:\n        return 0\n    return sum(scores) / len(scores)\n\nscores = [70, 80, 90]\nprint(calculate_average(scores))',
        output: "80.0",
        challenge: "Build your own Python project using at least three concepts from this course. Explain what each part does."
    }

];

/* ==========================================================
   COURSE DATA CHECK
   ========================================================== */

if (lessonData.length !== 55) {
    console.error(
        "Python course lesson count mismatch:",
        lessonData.length,
        "lessons found; expected 55."
    );
}

/* ==========================================================
   LESSON EXPLANATION EXTENSIONS
   ========================================================== */

const explanationExtensions = {
    "Your First Python Program": "The editor supports multiple lines, so you can build a program gradually and observe the order in which statements execute.",
    "Python Syntax": "Python reports syntax errors when it cannot interpret your code. Read the line and error type before changing anything.",
    "Comments in Python": "Comments should explain purpose, assumptions or reasoning that is not obvious from the code.",
    "Variables": "Assignment binds a name to a value. A later assignment can bind that name to a different value.",
    "Python Data Types": "A value's type determines which operations it supports and how Python interprets it.",
    "Input and Output": "Interactive input depends on the environment. If input() is unavailable in a browser sandbox, use a fixed variable while practising the same logic.",
    "Lists": "Lists can grow and shrink. Their zero-based indexing is shared by many Python sequence types.",
    "For Loops": "The loop variable takes the next value on every iteration. When the iterable is exhausted, the loop ends.",
    "While Loops": "Use while loops when repetition depends on a changing condition rather than a fixed sequence.",
    "Functions": "Reusable functions reduce repetition and make code easier to test.",
    "File Handling": "This browser environment uses a virtual Python filesystem. Files created here are not automatically saved into a folder on your computer.",
    "Final Python Project": "Plan your program before coding: identify the input, the processing steps and the expected output."
};

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

function formatPythonCode(code) {
    return escapeHTML(code);
}

/* ==========================================================
   STATE AND PERSISTENCE
   ========================================================== */

function createDefaultState() {
    return {
        currentLesson: 0,
        completed: [],
        xp: 0,
        drafts: {},
        updatedAt: null
    };
}

function loadState() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

        if (!saved || typeof saved !== "object") {
            return createDefaultState();
        }

        const completed = Array.isArray(saved.completed)
            ? saved.completed.filter(
                index => Number.isInteger(index) &&
                index >= 0 &&
                index < lessonData.length
            )
            : [];

        const uniqueCompleted = [...new Set(completed)];

        return {
            currentLesson:
                Number.isInteger(saved.currentLesson) &&
                saved.currentLesson >= 0 &&
                saved.currentLesson < lessonData.length
                    ? saved.currentLesson
                    : 0,

            completed: uniqueCompleted,

            xp: uniqueCompleted.length * XP_PER_LESSON,

            drafts: saved.drafts && typeof saved.drafts === "object"
                ? saved.drafts
                : {},

            updatedAt: saved.updatedAt || null
        };
    } catch (error) {
        console.warn("Could not load saved Python progress.", error);
        return createDefaultState();
    }
}

let state = loadState();
let pyodide = null;
let runtimePromise = null;
let isRunning = false;
let lessonListBuilt = false;

const $ = id => document.getElementById(id);

function saveState() {
    state.xp = state.completed.length * XP_PER_LESSON;
    state.updatedAt = new Date().toISOString();

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
        console.warn("Could not save Python progress.", error);
    }
}

/* ==========================================================
   DOM INITIALISATION
   ========================================================== */

document.addEventListener("DOMContentLoaded", initialiseCourse);

function initialiseCourse() {
    buildSidebar();
    bindEvents();
    renderLesson(state.currentLesson);
    updateProgress();
    initialisePythonRuntime();
}

/* ==========================================================
   SIDEBAR
   ========================================================== */

function buildSidebar() {
    const container = $("lessonList");
    container.innerHTML = "";

    const groups = new Map();

    lessonData.forEach((lesson, index) => {
        if (!groups.has(lesson.category)) {
            groups.set(lesson.category, []);
        }

        groups.get(lesson.category).push({ ...lesson, index });
    });

    groups.forEach((lessons, category) => {
        const group = document.createElement("section");
        group.className = "lesson-group";

        const heading = document.createElement("button");
        heading.className = "group-heading";
        heading.type = "button";

        const title = document.createElement("span");
        title.textContent = category;

        const count = document.createElement("span");
        count.textContent = `${lessons.length} LESSONS`;

        heading.append(title, count);

        const items = document.createElement("div");
        items.className = "lesson-items";

        lessons.forEach(lesson => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "lesson-item";
            button.dataset.lesson = lesson.index;

            const number = document.createElement("span");
            number.className = "lesson-index";
            number.textContent = String(lesson.index + 1).padStart(2, "0");

            const name = document.createElement("span");
            name.className = "lesson-name";
            name.textContent = lesson.title;

            const check = document.createElement("span");
            check.className = "lesson-check";

            button.append(number, name, check);

            button.addEventListener("click", () => {
                goToLesson(lesson.index);
                closeMobileSidebar();
            });

            items.appendChild(button);
        });

        heading.addEventListener("click", () => {
            const isHidden = items.hidden;
            items.hidden = !isHidden;
            count.textContent = isHidden
                ? `${lessons.length} LESSONS`
                : "SHOW";
        });

        group.append(heading, items);
        container.appendChild(group);
    });

    lessonListBuilt = true;
    updateSidebar();
}

function updateSidebar() {
    if (!lessonListBuilt) return;

    document.querySelectorAll(".lesson-item").forEach(button => {
        const index = Number(button.dataset.lesson);
        const completed = state.completed.includes(index);

        button.classList.toggle("active", index === state.currentLesson);
        button.classList.toggle("completed", completed);

        const check = button.querySelector(".lesson-check");
        if (check) {
            check.textContent = completed ? "✓" : "";
        }

        button.setAttribute(
            "aria-current",
            index === state.currentLesson ? "step" : "false"
        );
    });
}

/* ==========================================================
   LESSON RENDERING
   ========================================================== */

function renderLesson(index) {
    if (index < 0 || index >= lessonData.length) return;

    saveCurrentDraft();

    state.currentLesson = index;
    saveState();

    const lesson = lessonData[index];

    $("lessonNumber").textContent =
        `LESSON ${String(index + 1).padStart(2, "0")}`;

    $("lessonCategory").textContent = lesson.category.toUpperCase();
    $("lessonTitle").textContent = lesson.title;
    $("lessonSubtitle").textContent = lesson.subtitle;

    const explanation = $("lessonExplanation");
    explanation.innerHTML = "";

    lesson.explanation.forEach(paragraph => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        explanation.appendChild(p);
    });

    if (explanationExtensions[lesson.title]) {
        const p = document.createElement("p");
        p.textContent = explanationExtensions[lesson.title];
        explanation.appendChild(p);
    }

    $("lessonTip").textContent = "TIP: " + lesson.tip;

    $("exampleCode").innerHTML =
        `<code>${formatPythonCode(lesson.example)}</code>`;

    $("exampleExpected").textContent = lesson.output;

    $("challengeTitle").textContent = `Challenge ${index + 1}`;
    $("challengeText").textContent = lesson.challenge;

    $("experienceLesson").textContent = `Lesson ${index + 1}`;

    const completed = state.completed.includes(index);

    $("lessonStatus").textContent =
        completed ? "✓ COMPLETED" : "IN PROGRESS";

    $("lessonStatus").style.color =
        completed ? "var(--green)" : "var(--gold)";

    $("completeButton").textContent =
        completed ? "✓ Lesson Completed" : "✓ Mark Lesson Complete";

    $("completeButton").disabled = completed;

    $("previousButton").disabled = index === 0;
    $("nextButton").disabled = index === lessonData.length - 1;

    $("codeEditor").value =
        typeof state.drafts[index] === "string"
            ? state.drafts[index]
            : "";

    $("practiceOutput").textContent =
        "Your program's output will appear here.";

    $("outputStatus").textContent = "Waiting for your code";

    updateSidebar();
    updateProgress();

    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ==========================================================
   NAVIGATION
   ========================================================== */

function goToLesson(index) {
    if (index < 0 || index >= lessonData.length) return;
    renderLesson(index);
}

function saveCurrentDraft() {
    const editor = $("codeEditor");

    if (!editor) return;

    state.drafts[state.currentLesson] = editor.value;
}

function bindEvents() {
    $("previousButton").addEventListener("click", () => {
        if (state.currentLesson > 0) {
            goToLesson(state.currentLesson - 1);
        }
    });

    $("nextButton").addEventListener("click", () => {
        if (state.currentLesson < lessonData.length - 1) {
            goToLesson(state.currentLesson + 1);
        }
    });

    $("completeButton").addEventListener("click", completeCurrentLesson);

    $("runButton").addEventListener("click", runPythonCode);

    $("resetButton").addEventListener("click", () => {
        $("codeEditor").value = "";
        saveCurrentDraft();

        $("practiceOutput").textContent =
            "Your program's output will appear here.";

        $("outputStatus").textContent = "Editor cleared";
        saveState();
    });

    $("codeEditor").addEventListener("input", () => {
        saveCurrentDraft();
        saveState();
    });

    $("certificateOpenButton").addEventListener("click", openCertificate);

    $("certificateClose").addEventListener("click", closeCertificate);

    $("certificateModal").addEventListener("click", event => {
        if (event.target === $("certificateModal")) {
            closeCertificate();
        }
    });

    $("certificatePrintButton").addEventListener("click", () => {
        if (state.completed.length !== lessonData.length) {
            return;
        }

        const name = $("certificateName").value.trim();

        if (!name) {
            $("certificateName").focus();
            $("certificateName").setCustomValidity(
                "Please enter your full name."
            );
            $("certificateName").reportValidity();
            return;
        }

        $("certificateName").setCustomValidity("");
        window.print();
    });

    $("certificateName").addEventListener("input", () => {
        $("certificateName").setCustomValidity("");
    });

    $("menuButton").addEventListener("click", openMobileSidebar);

    $("sidebarOverlay").addEventListener("click", closeMobileSidebar);

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeMobileSidebar();
            closeCertificate();
        }

        // Tab indentation in the code editor.
        if (
            event.key === "Tab" &&
            event.target === $("codeEditor")
        ) {
            event.preventDefault();

            const editor = $("codeEditor");
            const start = editor.selectionStart;
            const end = editor.selectionEnd;

            editor.value =
                editor.value.substring(0, start) +
                "    " +
                editor.value.substring(end);

            editor.selectionStart = editor.selectionEnd = start + 4;

            saveCurrentDraft();
            saveState();
        }
    });
}

function completeCurrentLesson() {
    const index = state.currentLesson;

    if (!state.completed.includes(index)) {
        state.completed.push(index);
    }

    state.completed.sort((a, b) => a - b);

    saveState();
    updateProgress();
    updateSidebar();
    updateCertificate();

    $("lessonStatus").textContent = "✓ COMPLETED";
    $("lessonStatus").style.color = "var(--green)";

    $("completeButton").textContent = "✓ Lesson Completed";
    $("completeButton").disabled = true;

    if (state.completed.length === lessonData.length) {
        $("certificateMessage").textContent =
            "Excellent work! You have completed every Python lesson.";
    }

    if (state.currentLesson < lessonData.length - 1) {
        $("practiceOutput").textContent =
            "Lesson completed! You can move to the next lesson when you're ready.";

        $("outputStatus").textContent = "Progress saved";
    }
}

/* ==========================================================
   XP AND PROGRESS
   ========================================================== */

function updateProgress() {
    const total = lessonData.length;
    const completed = state.completed.length;
    const percentage = Math.round((completed / total) * 100);

    state.xp = completed * XP_PER_LESSON;

    $("progressFill").style.width = percentage + "%";
    $("progressPercent").textContent = percentage + "%";
    $("progressLessons").textContent = `${completed} of ${total} lessons`;

    $("sidebarXP").textContent = `${state.xp} XP`;
    $("xpText").textContent = `${state.xp} XP`;
    $("topXP").textContent = `${state.xp} XP`;
    $("completedCount").textContent = `${completed} / ${total}`;

    updateCertificate();
}

function updateCertificate() {
    const unlocked = state.completed.length === lessonData.length;

    $("certificateOpenButton").disabled = !unlocked;

    $("certificateStatus").textContent = unlocked
        ? "✓ CERTIFICATE UNLOCKED"
        : `${lessonData.length - state.completed.length} LESSONS REMAINING`;

    $("certificateStatus").style.color =
        unlocked ? "var(--green)" : "var(--gold)";

    $("certificateMessage").textContent = unlocked
        ? "You have completed all 55 lessons. Your certificate is ready."
        : `Complete all ${lessonData.length} lessons to unlock your certificate.`;

    $("certificateXP").textContent =
        `${state.completed.length * XP_PER_LESSON} XP`;
}

/* ==========================================================
   PYTHON RUNTIME
   ========================================================== */

async function initialisePythonRuntime() {
    const status = $("runtimeStatus");

    status.textContent = "Loading Python runtime...";
    status.className = "runtime-status";

    try {
        if (typeof loadPyodide !== "function") {
            throw new Error(
                "The Python runtime could not be loaded. Check your internet connection and reload the page."
            );
        }

        runtimePromise = loadPyodide({
            stdout: () => {},
            stderr: () => {}
        });

        pyodide = await runtimePromise;

        status.textContent = "Python runtime ready";
        status.className = "runtime-status ready";

        $("practiceOutput").textContent =
            "Python is ready. Write a program and select Run Code.";

    } catch (error) {
        console.error("Python runtime failed to initialise:", error);

        status.textContent = "Python runtime unavailable";
        status.className = "runtime-status error";

        $("practiceOutput").textContent =
            "Python could not start.\n\n" +
            "Check your internet connection and reload the page. " +
            "The browser must be able to load the Pyodide runtime.";
    }
}

/* ==========================================================
   RUN PYTHON CODE
   ========================================================== */

async function runPythonCode() {
    if (isRunning) return;

    const source = $("codeEditor").value;

    if (!source.trim()) {
        $("practiceOutput").textContent =
            "Your editor is empty.\nWrite some Python code first, then select Run Code.";

        $("outputStatus").textContent = "No code to run";
        return;
    }

    isRunning = true;

    const runButton = $("runButton");
    const output = $("practiceOutput");
    const outputStatus = $("outputStatus");

    runButton.disabled = true;
    runButton.innerHTML = "<span>⏳</span> Running...";
    outputStatus.textContent = "Executing Python...";

    output.textContent = "";

    try {
        if (!pyodide) {
            if (!runtimePromise) {
                await initialisePythonRuntime();
            } else {
                pyodide = await runtimePromise;
            }
        }

        if (!pyodide) {
            throw new Error(
                "Python is not ready. Check your internet connection and try again."
            );
        }

        /*
           Capture stdout and stderr while preserving normal Python execution.
           input() is supported through an interactive prompt.
        */

        pyodide.setStdout({
            batched: text => {
                output.textContent += text + "\n";
            }
        });

        pyodide.setStderr({
            batched: text => {
                output.textContent += text + "\n";
            }
        });

        /*
           Ask for input interactively when Python code calls input().
           Pyodide uses JavaScript's prompt for this browser implementation.
        */

        pyodide.setStdin({
            stdin: () => {
                const response = window.prompt(
                    "Your Python program is requesting input:"
                );

                if (response === null) {
                    throw new Error("Input cancelled by the learner.");
                }

                return response;
            }
        });

        await pyodide.runPythonAsync(source);

        if (!output.textContent.trim()) {
            output.textContent = "Program executed successfully. No output was produced.";
        }

        outputStatus.textContent = "Execution completed";

    } catch (error) {
        console.error("Python execution error:", error);

        output.textContent +=
            (output.textContent ? "\n" : "") +
            String(error);

        outputStatus.textContent = "Execution error";

    } finally {
        isRunning = false;
        runButton.disabled = false;
        runButton.innerHTML = "<span>▶</span> Run Code";

        saveCurrentDraft();
        saveState();
    }
}

/* ==========================================================
   CERTIFICATE
   ========================================================== */

function openCertificate() {
    if (state.completed.length !== lessonData.length) return;

    $("certificateModal").classList.add("open");
    $("certificateModal").setAttribute("aria-hidden", "false");

    $("certificateName").focus();
}

function closeCertificate() {
    $("certificateModal").classList.remove("open");
    $("certificateModal").setAttribute("aria-hidden", "true");
}

/* ==========================================================
   MOBILE SIDEBAR
   ========================================================== */

function openMobileSidebar() {
    $("sidebar").classList.add("mobile-open");
    $("sidebarOverlay").classList.add("active");
}

function closeMobileSidebar() {
    $("sidebar").classList.remove("mobile-open");
    $("sidebarOverlay").classList.remove("active");
}