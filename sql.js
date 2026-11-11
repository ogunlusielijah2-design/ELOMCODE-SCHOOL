/* ================================================================
   ELOMCODE SCHOOL — SQL MASTERCLASS
   Version: 1.0
   50 Lessons | SQLite Engine | Practice Lab | XP | Certificate
   ================================================================ */

"use strict";

/* ================================================================
   1. COURSE CONFIGURATION
   ================================================================ */

const SQL_TOTAL_LESSONS = 50;
const SQL_LESSON_XP = 25;
const SQL_CHALLENGE_XP = 25;

const SQL_STORAGE_KEY = "elomcode_sql_masterclass_progress";
const SQL_DATABASE_NAME = "ELOMCODE_SQL_DATABASE";

let sqlDatabase = null;
let sqlEngineReady = false;
let sqlEngineError = false;

let currentLessonIndex = 0;
let completedLessons = new Set();
let completedChallenges = new Set();
let totalXP = 0;

let currentLearnerName = "";

const sqlElement = (id) => document.getElementById(id);


/* ================================================================
   2. LESSON CONTENT
   ================================================================ */

const SQL_COURSE = [

    {
        section: "SQL FOUNDATIONS",
        lessons: [

            {
                title: "Introduction to SQL",
                subtitle: "Discover the language used to communicate with databases.",
                duration: "5 min",
                tip: "SQL is a language for working with data. Start by understanding what you want to retrieve.",
                explanation: `
                    <h3>What is SQL?</h3>
                    <p><strong>SQL</strong> stands for Structured Query Language. It is used to communicate with relational databases.</p>
                    <p>Imagine a school storing information about its students. The school could use a database to store names, ages, departments, and grades. SQL lets us retrieve and manage that information.</p>
                    <h3>What can SQL do?</h3>
                    <ul>
                        <li>Retrieve information using <code>SELECT</code>.</li>
                        <li>Add new records using <code>INSERT</code>.</li>
                        <li>Modify existing records using <code>UPDATE</code>.</li>
                        <li>Remove records using <code>DELETE</code>.</li>
                        <li>Create and manage database structures using commands such as <code>CREATE TABLE</code>.</li>
                    </ul>
                    <h3>Your first SQL query</h3>
                    <p>A query is an instruction sent to a database. SQL keywords are commonly written in uppercase for readability, although SQLite also accepts lowercase keywords.</p>
                    <p>Run the example to see a result returned by the actual SQLite engine.</p>
                `,
                example: `SELECT 'Welcome to ELOMCODE SQL!' AS message;`,
                challenge: "Write a SELECT query that returns the text SQL is powerful in a column named message.",
                required: ["SELECT", "SQL IS POWERFUL", "MESSAGE"]
            },

            {
                title: "Understanding Databases",
                subtitle: "Learn how databases organize information.",
                duration: "5 min",
                tip: "A database is a collection of organized information, not simply a single table.",
                explanation: `
                    <h3>What is a database?</h3>
                    <p>A database is an organized collection of data that can be stored, searched, updated, and managed.</p>
                    <p>A school database might contain separate tables for students, courses, teachers, and examination results.</p>
                    <h3>What is a relational database?</h3>
                    <p>A relational database stores information in tables. Different tables can be connected through related values, such as student IDs or course IDs.</p>
                    <h3>Database management systems</h3>
                    <p>A database management system, or DBMS, is software used to create and manage databases. Examples include SQLite, PostgreSQL, MySQL, and Microsoft SQL Server.</p>
                    <p>This course uses SQLite so you can practise SQL directly in your browser.</p>
                `,
                example: `SELECT name, department
FROM students;`,
                challenge: "Retrieve the names and departments of students.",
                required: ["SELECT", "NAME", "DEPARTMENT", "FROM", "STUDENTS"]
            },

            {
                title: "Tables, Rows and Columns",
                subtitle: "Understand the building blocks of relational data.",
                duration: "6 min",
                tip: "Think of a table as a spreadsheet, a row as one record, and a column as one property.",
                explanation: `
                    <h3>Tables</h3>
                    <p>A table stores related records. Our sample database contains a table named <code>students</code>.</p>
                    <h3>Rows</h3>
                    <p>Each row represents one record. One row in the students table describes one student.</p>
                    <h3>Columns</h3>
                    <p>Each column represents a property, such as <code>name</code>, <code>age</code>, or <code>department</code>.</p>
                    <h3>Reading a table</h3>
                    <p>SQL allows you to select specific columns or retrieve all available columns with an asterisk.</p>
                    <p>Try changing the example to display a different combination of columns.</p>
                `,
                example: `SELECT id, name, age
FROM students;`,
                challenge: "Retrieve every column from the students table.",
                required: ["SELECT", "*", "FROM", "STUDENTS"]
            },

            {
                title: "Your First SELECT Query",
                subtitle: "Retrieve information from a database.",
                duration: "6 min",
                tip: "SELECT identifies the columns you want to retrieve.",
                explanation: `
                    <h3>The SELECT statement</h3>
                    <p><code>SELECT</code> is one of the most frequently used SQL commands. It retrieves information without changing the stored records.</p>
                    <pre><code>SELECT name
FROM students;</code></pre>
                    <p>The first line requests the <code>name</code> column. The second line identifies the table containing that column.</p>
                    <h3>The asterisk</h3>
                    <p>Use <code>SELECT *</code> to retrieve all columns. This is useful while learning, although selecting only the columns you need can make larger queries easier to understand.</p>
                    <h3>Statement endings</h3>
                    <p>A semicolon conventionally marks the end of an SQL statement. It is particularly useful when writing several statements together.</p>
                `,
                example: `SELECT *
FROM students;`,
                challenge: "Retrieve every column from the courses table.",
                required: ["SELECT", "*", "FROM", "COURSES"]
            },

            {
                title: "Selecting Specific Columns",
                subtitle: "Choose exactly which information you need.",
                duration: "5 min",
                tip: "Separate multiple column names with commas.",
                explanation: `
                    <h3>Choosing columns</h3>
                    <p>You do not always need every column in a table. You can select only the information relevant to your task.</p>
                    <pre><code>SELECT name, age
FROM students;</code></pre>
                    <p>This query returns two columns instead of displaying the entire table.</p>
                    <h3>Column order</h3>
                    <p>The columns normally appear in the result in the same order in which you list them in your SELECT statement.</p>
                    <p>Try selecting <code>department</code> before <code>name</code> to see how the result changes.</p>
                `,
                example: `SELECT department, name
FROM students;`,
                challenge: "Select the name and age columns from students, in that order.",
                required: ["SELECT", "NAME", "AGE", "FROM", "STUDENTS"]
            }

        ]
    },

    {
        section: "RETRIEVING AND FILTERING DATA",
        lessons: [

            {
                title: "Removing Duplicates with DISTINCT",
                subtitle: "Return unique values from a column.",
                duration: "5 min",
                tip: "DISTINCT removes duplicate result rows; it does not delete records from the original table.",
                explanation: `
                    <h3>Why use DISTINCT?</h3>
                    <p>A table may contain many students from the same department. If you only want to know which departments exist, repeated department names are unnecessary.</p>
                    <pre><code>SELECT DISTINCT department
FROM students;</code></pre>
                    <p>SQLite returns each distinct department value once.</p>
                    <h3>Multiple columns</h3>
                    <p>You can apply DISTINCT to multiple selected columns. In that case, duplicate combinations of those values are removed.</p>
                `,
                example: `SELECT DISTINCT department
FROM students;`,
                challenge: "Return the unique course levels from the courses table.",
                required: ["SELECT", "DISTINCT", "LEVEL", "FROM", "COURSES"]
            },

            {
                title: "Column Aliases with AS",
                subtitle: "Give query results clear, readable column names.",
                duration: "5 min",
                tip: "An alias changes the result heading, not the underlying table column.",
                explanation: `
                    <h3>What is an alias?</h3>
                    <p>An alias is an alternative name used within a query result. The <code>AS</code> keyword makes the intended name clear.</p>
                    <pre><code>SELECT name AS student_name
FROM students;</code></pre>
                    <p>The returned column is labelled <code>student_name</code>.</p>
                    <h3>Aliases for calculations</h3>
                    <p>Aliases are especially helpful when a column contains a calculation or expression. A descriptive label makes the output easier to understand.</p>
                    <p>Aliases generally apply to that query rather than permanently renaming a database column.</p>
                `,
                example: `SELECT
    name AS student_name,
    age AS student_age
FROM students;`,
                challenge: "Display the students' names using the alias learner_name.",
                required: ["SELECT", "NAME", "AS", "LEARNER_NAME", "FROM", "STUDENTS"]
            },

            {
                title: "Filtering Data with WHERE",
                subtitle: "Retrieve only records that match a condition.",
                duration: "6 min",
                tip: "WHERE filters rows before the results are returned.",
                explanation: `
                    <h3>The WHERE clause</h3>
                    <p><code>WHERE</code> restricts which records appear in a query result.</p>
                    <pre><code>SELECT *
FROM students
WHERE age > 18;</code></pre>
                    <p>This query returns students whose age is greater than 18.</p>
                    <h3>Common uses</h3>
                    <ul>
                        <li>Find a particular student.</li>
                        <li>Retrieve products below a price.</li>
                        <li>Find records matching a department.</li>
                    </ul>
                    <p>Without WHERE, a SELECT query generally returns every matching row from its source table.</p>
                `,
                example: `SELECT name, age
FROM students
WHERE age > 18;`,
                challenge: "Find students older than 20.",
                required: ["SELECT", "FROM", "STUDENTS", "WHERE", "AGE", ">"]
            },

            {
                title: "Comparison Operators",
                subtitle: "Compare values using SQL conditions.",
                duration: "6 min",
                tip: "Remember that <> means not equal in SQL.",
                explanation: `
                    <h3>Comparison operators</h3>
                    <p>SQL uses comparison operators to evaluate values.</p>
                    <ul>
                        <li><code>=</code> means equal to.</li>
                        <li><code>&lt;&gt;</code> means not equal to.</li>
                        <li><code>&gt;</code> means greater than.</li>
                        <li><code>&lt;</code> means less than.</li>
                        <li><code>&gt;=</code> means greater than or equal to.</li>
                        <li><code>&lt;=</code> means less than or equal to.</li>
                    </ul>
                    <p>Text values are usually enclosed in single quotation marks. Numeric values normally do not require quotation marks.</p>
                    <p>SQL comparisons involving NULL require special handling, which we will cover later.</p>
                `,
                example: `SELECT name, age
FROM students
WHERE age >= 20;`,
                challenge: "Find students whose age is less than or equal to 19.",
                required: ["SELECT", "FROM", "STUDENTS", "WHERE", "AGE", "<="]
            },

            {
                title: "Combining Conditions with AND, OR and NOT",
                subtitle: "Build more precise filters.",
                duration: "7 min",
                tip: "Use parentheses when you want to make complicated condition groupings explicit.",
                explanation: `
                    <h3>AND</h3>
                    <p><code>AND</code> requires both conditions to be true.</p>
                    <h3>OR</h3>
                    <p><code>OR</code> requires at least one condition to be true.</p>
                    <h3>NOT</h3>
                    <p><code>NOT</code> reverses a logical condition.</p>
                    <pre><code>SELECT *
FROM students
WHERE age >= 18 AND department = 'Computer Science';</code></pre>
                    <p>This example selects students who meet both conditions.</p>
                    <p>When combining AND and OR, use parentheses to make the intended logic easy to read.</p>
                `,
                example: `SELECT name, age, department
FROM students
WHERE age >= 18
  AND department = 'Computer Science';`,
                challenge: "Find students in Computer Science OR Engineering.",
                required: ["SELECT", "FROM", "STUDENTS", "WHERE", "OR", "COMPUTER SCIENCE", "ENGINEERING"]
            },

            {
                title: "Filtering with IN",
                subtitle: "Match a value against a list of possibilities.",
                duration: "5 min",
                tip: "IN is often clearer than writing several equality conditions connected by OR.",
                explanation: `
                    <h3>The IN operator</h3>
                    <p><code>IN</code> checks whether a value matches any item in a supplied list.</p>
                    <pre><code>SELECT *
FROM students
WHERE department IN ('Engineering', 'Mathematics');</code></pre>
                    <p>The query returns students from either listed department.</p>
                    <h3>NOT IN</h3>
                    <p><code>NOT IN</code> selects values that are not in the list. Be careful when NULL values are involved, because SQL uses three-valued logic for comparisons with NULL.</p>
                `,
                example: `SELECT name, department
FROM students
WHERE department IN ('Engineering', 'Computer Science');`,
                challenge: "Find courses whose level is Beginner or Intermediate.",
                required: ["SELECT", "FROM", "COURSES", "WHERE", "IN", "BEGINNER", "INTERMEDIATE"]
            },

            {
                title: "Filtering Ranges with BETWEEN",
                subtitle: "Find values inside an inclusive range.",
                duration: "5 min",
                tip: "BETWEEN includes both the lower and upper boundaries.",
                explanation: `
                    <h3>Using BETWEEN</h3>
                    <p><code>BETWEEN</code> checks whether a value lies within a range, including both endpoints.</p>
                    <pre><code>SELECT *
FROM students
WHERE age BETWEEN 18 AND 22;</code></pre>
                    <p>This query includes ages 18 and 22 as well as the values between them.</p>
                    <h3>NOT BETWEEN</h3>
                    <p>You can use <code>NOT BETWEEN</code> to select values outside the specified range.</p>
                    <p>BETWEEN also works with other comparable values, including dates stored in a consistent format.</p>
                `,
                example: `SELECT name, age
FROM students
WHERE age BETWEEN 18 AND 22;`,
                challenge: "Find products priced between 100 and 500, inclusive.",
                required: ["SELECT", "FROM", "PRODUCTS", "WHERE", "BETWEEN", "100", "500"]
            },

            {
                title: "Pattern Matching with LIKE",
                subtitle: "Search text using wildcard characters.",
                duration: "6 min",
                tip: "The percent sign matches any sequence of characters, including an empty sequence.",
                explanation: `
                    <h3>The LIKE operator</h3>
                    <p><code>LIKE</code> is used for pattern matching in text.</p>
                    <ul>
                        <li><code>'A%'</code> matches text beginning with A.</li>
                        <li><code>'%a'</code> matches text ending with a.</li>
                        <li><code>'%data%'</code> matches text containing data.</li>
                        <li><code>'_a%'</code> matches text whose second character is a.</li>
                    </ul>
                    <p>The underscore represents one character. The percent sign represents zero or more characters.</p>
                    <p>SQLite's default LIKE behaviour is generally case-insensitive for basic ASCII letters. Other database systems may behave differently.</p>
                `,
                example: `SELECT name
FROM students
WHERE name LIKE 'A%';`,
                challenge: "Find products whose names contain the word phone.",
                required: ["SELECT", "FROM", "PRODUCTS", "WHERE", "LIKE", "%PHONE%"]
            },

            {
                title: "Working with NULL",
                subtitle: "Identify missing or unknown values correctly.",
                duration: "6 min",
                tip: "Use IS NULL instead of = NULL.",
                explanation: `
                    <h3>What does NULL mean?</h3>
                    <p>NULL represents a missing or unknown value. It is different from zero, an empty string, and the text 'NULL'.</p>
                    <h3>Checking for NULL</h3>
                    <pre><code>SELECT *
FROM students
WHERE email IS NULL;</code></pre>
                    <p>Use <code>IS NULL</code> to find missing values and <code>IS NOT NULL</code> to find values that are present.</p>
                    <h3>Why does = NULL not work?</h3>
                    <p>SQL does not treat NULL as an ordinary value. Comparisons such as <code>email = NULL</code> do not evaluate to true. Use the dedicated NULL operators instead.</p>
                `,
                example: `SELECT name, email
FROM students
WHERE email IS NULL;`,
                challenge: "Find students whose email is not NULL.",
                required: ["SELECT", "FROM", "STUDENTS", "WHERE", "EMAIL", "IS NOT NULL"]
            },

            {
                title: "Sorting with ORDER BY",
                subtitle: "Control the order of query results.",
                duration: "5 min",
                tip: "Use ASC for ascending order and DESC for descending order.",
                explanation: `
                    <h3>ORDER BY</h3>
                    <p><code>ORDER BY</code> sorts returned records by one or more expressions.</p>
                    <pre><code>SELECT name, age
FROM students
ORDER BY age ASC;</code></pre>
                    <p>ASC sorts from low to high, or alphabetically for text. It is the default direction.</p>
                    <p>DESC sorts in the opposite direction.</p>
                    <h3>Multiple sorting rules</h3>
                    <p>You can sort by age and then by name. The second expression helps order records that share the same age.</p>
                `,
                example: `SELECT name, age
FROM students
ORDER BY age DESC;`,
                challenge: "Display products from lowest price to highest price.",
                required: ["SELECT", "FROM", "PRODUCTS", "ORDER BY", "PRICE", "ASC"]
            },

            {
                title: "Limiting Results with LIMIT and OFFSET",
                subtitle: "Retrieve a manageable portion of a result set.",
                duration: "5 min",
                tip: "Use ORDER BY when you need a predictable top-N result.",
                explanation: `
                    <h3>LIMIT</h3>
                    <p><code>LIMIT</code> restricts how many rows a query returns.</p>
                    <pre><code>SELECT *
FROM students
LIMIT 3;</code></pre>
                    <h3>OFFSET</h3>
                    <p><code>OFFSET</code> skips a specified number of rows before returning results.</p>
                    <p>These clauses are useful for displaying small result sets or building pages of database results.</p>
                    <p>For reliable pagination, sort the records first so that the order is predictable.</p>
                `,
                example: `SELECT name, age
FROM students
ORDER BY name
LIMIT 3 OFFSET 1;`,
                challenge: "Return the two most expensive products.",
                required: ["SELECT", "FROM", "PRODUCTS", "ORDER BY", "PRICE", "DESC", "LIMIT", "2"]
            }

        ]
    },

    {
        section: "SQL FUNCTIONS AND AGGREGATION",
        lessons: [

            {
                title: "Counting Rows with COUNT",
                subtitle: "Calculate how many records match a query.",
                duration: "5 min",
                tip: "COUNT(*) counts rows, while COUNT(column) ignores NULL values in that column.",
                explanation: `
                    <h3>The COUNT function</h3>
                    <p><code>COUNT()</code> calculates the number of records or non-NULL values.</p>
                    <pre><code>SELECT COUNT(*) AS total_students
FROM students;</code></pre>
                    <p>The result contains one row with the total number of students.</p>
                    <h3>COUNT DISTINCT</h3>
                    <p><code>COUNT(DISTINCT department)</code> counts distinct, non-NULL department values.</p>
                    <p>Aggregate functions are particularly useful for reports and summaries.</p>
                `,
                example: `SELECT COUNT(*) AS total_students
FROM students;`,
                challenge: "Count all products and name the result total_products.",
                required: ["SELECT", "COUNT", "PRODUCTS", "TOTAL_PRODUCTS"]
            },

            {
                title: "Calculating Totals with SUM",
                subtitle: "Add numeric values together.",
                duration: "5 min",
                tip: "SUM ignores NULL values and returns NULL when there are no non-NULL input values.",
                explanation: `
                    <h3>Using SUM</h3>
                    <p><code>SUM()</code> adds the non-NULL values in a numeric expression.</p>
                    <pre><code>SELECT SUM(price) AS total_value
FROM products;</code></pre>
                    <p>This returns the sum of the product prices in our sample table.</p>
                    <h3>Combining SUM with WHERE</h3>
                    <p>You can calculate totals for a subset of records by filtering them with WHERE.</p>
                    <p>SUM can also be used with GROUP BY to calculate separate totals for different categories.</p>
                `,
                example: `SELECT SUM(price) AS total_product_value
FROM products;`,
                challenge: "Calculate the total price of products in the products table.",
                required: ["SELECT", "SUM", "PRICE", "FROM", "PRODUCTS"]
            },

            {
                title: "Calculating Averages with AVG",
                subtitle: "Find the average of numeric values.",
                duration: "5 min",
                tip: "AVG ignores NULL inputs, so it may not be the same as dividing by the total row count.",
                explanation: `
                    <h3>The AVG function</h3>
                    <p><code>AVG()</code> calculates the average of non-NULL numeric values.</p>
                    <pre><code>SELECT AVG(age) AS average_age
FROM students;</code></pre>
                    <p>The result is a numeric value representing the average age in the table.</p>
                    <h3>Using an average for comparisons</h3>
                    <p>Average values can help describe a dataset or compare individual records with a group average.</p>
                    <p>SQLite may return an average with a decimal component.</p>
                `,
                example: `SELECT AVG(age) AS average_age
FROM students;`,
                challenge: "Calculate the average product price.",
                required: ["SELECT", "AVG", "PRICE", "FROM", "PRODUCTS"]
            },

            {
                title: "Finding Minimum and Maximum Values",
                subtitle: "Discover the smallest and largest values.",
                duration: "5 min",
                tip: "MIN and MAX can work with text as well as numeric values, using the applicable ordering rules.",
                explanation: `
                    <h3>MIN()</h3>
                    <p><code>MIN()</code> returns the smallest non-NULL value in its input.</p>
                    <h3>MAX()</h3>
                    <p><code>MAX()</code> returns the largest non-NULL value in its input.</p>
                    <pre><code>SELECT
    MIN(price) AS cheapest,
    MAX(price) AS most_expensive
FROM products;</code></pre>
                    <p>These functions are often combined in summaries and reports.</p>
                    <p>Try using MIN and MAX on the age column in the students table.</p>
                `,
                example: `SELECT
    MIN(price) AS lowest_price,
    MAX(price) AS highest_price
FROM products;`,
                challenge: "Find the youngest and oldest student ages.",
                required: ["SELECT", "MIN", "MAX", "AGE", "FROM", "STUDENTS"]
            },

            {
                title: "Grouping Data with GROUP BY",
                subtitle: "Calculate separate summaries for categories.",
                duration: "7 min",
                tip: "GROUP BY forms groups before aggregate functions calculate their results.",
                explanation: `
                    <h3>Why group data?</h3>
                    <p>A report may need to count students in each department rather than count all students together.</p>
                    <pre><code>SELECT department, COUNT(*) AS total
FROM students
GROUP BY department;</code></pre>
                    <p>GROUP BY places records with matching department values into groups.</p>
                    <p>COUNT then calculates the number of rows in each group.</p>
                    <h3>Multiple grouping columns</h3>
                    <p>You can group by more than one column to produce more detailed summaries.</p>
                `,
                example: `SELECT department, COUNT(*) AS student_count
FROM students
GROUP BY department
ORDER BY student_count DESC;`,
                challenge: "Count how many products belong to each category.",
                required: ["SELECT", "CATEGORY", "COUNT", "FROM", "PRODUCTS", "GROUP BY"]
            },

            {
                title: "Filtering Groups with HAVING",
                subtitle: "Apply conditions to aggregated groups.",
                duration: "6 min",
                tip: "WHERE filters individual rows; HAVING filters groups after grouping.",
                explanation: `
                    <h3>Understanding HAVING</h3>
                    <p>WHERE is used to filter records before grouping. HAVING filters the groups produced by GROUP BY.</p>
                    <pre><code>SELECT department, COUNT(*) AS total
FROM students
GROUP BY department
HAVING COUNT(*) > 1;</code></pre>
                    <p>This returns departments with more than one student.</p>
                    <h3>Using both clauses</h3>
                    <p>You can use WHERE to select eligible records and HAVING to filter the resulting groups.</p>
                    <p>Keeping these responsibilities separate makes queries easier to understand.</p>
                `,
                example: `SELECT department, COUNT(*) AS total
FROM students
GROUP BY department
HAVING COUNT(*) > 1;`,
                challenge: "Show product categories containing more than one product.",
                required: ["SELECT", "CATEGORY", "COUNT", "FROM", "PRODUCTS", "GROUP BY", "HAVING", ">"]
            },

            {
                title: "Working with Text Functions",
                subtitle: "Transform and inspect text inside SQL queries.",
                duration: "6 min",
                tip: "SQLite supports functions such as UPPER, LOWER, LENGTH, TRIM, and SUBSTR.",
                explanation: `
                    <h3>Common text functions</h3>
                    <ul>
                        <li><code>UPPER(text)</code> converts basic text to uppercase.</li>
                        <li><code>LOWER(text)</code> converts basic text to lowercase.</li>
                        <li><code>LENGTH(text)</code> returns its length.</li>
                        <li><code>TRIM(text)</code> removes surrounding spaces.</li>
                        <li><code>SUBSTR(text, start, length)</code> extracts part of a string.</li>
                    </ul>
                    <p>These functions are useful when displaying, cleaning, or inspecting text data.</p>
                    <p>Text processing behaviour can vary slightly between database systems, especially for international characters.</p>
                `,
                example: `SELECT
    name,
    UPPER(name) AS uppercase_name,
    LENGTH(name) AS name_length
FROM students;`,
                challenge: "Return product names in uppercase.",
                required: ["SELECT", "UPPER", "NAME", "FROM", "PRODUCTS"]
            },

            {
                title: "Numeric Functions and Calculations",
                subtitle: "Perform arithmetic and numeric transformations.",
                duration: "6 min",
                tip: "SQL can calculate values directly, even without reading them from a table.",
                explanation: `
                    <h3>Arithmetic in SQL</h3>
                    <p>SQL expressions can use addition, subtraction, multiplication, and division.</p>
                    <pre><code>SELECT 100 + 50 AS total;</code></pre>
                    <p>SQLite also provides numeric functions such as <code>ABS()</code> for absolute values and <code>ROUND()</code> for rounding.</p>
                    <h3>Calculated columns</h3>
                    <p>You can calculate a value from existing columns and return it with a descriptive alias.</p>
                    <p>Remember that integer division and numeric behaviour can differ between database engines.</p>
                `,
                example: `SELECT
    price,
    price * 1.10 AS price_with_10_percent
FROM products;`,
                challenge: "Return the absolute value of -25 using ABS.",
                required: ["SELECT", "ABS", "-25"]
            },

            {
                title: "Working with Dates and Times",
                subtitle: "Retrieve and format date-related values in SQLite.",
                duration: "6 min",
                tip: "SQLite commonly stores dates as ISO-formatted text, Unix timestamps, or Julian day numbers.",
                explanation: `
                    <h3>SQLite date and time functions</h3>
                    <p>SQLite provides functions such as <code>DATE()</code>, <code>TIME()</code>, <code>DATETIME()</code>, and <code>STRFTIME()</code>.</p>
                    <pre><code>SELECT DATE('now') AS current_date;</code></pre>
                    <p>This asks SQLite for the current date. Its result depends on the environment and time handling used by SQLite.</p>
                    <h3>Date calculations</h3>
                    <p>SQLite's <code>DATE()</code> function can interpret modifiers such as <code>'+7 days'</code>.</p>
                    <p>Other SQL systems use different date types and functions, so consult the documentation for the database you are using.</p>
                `,
                example: `SELECT
    DATE('now') AS today,
    DATE('now', '+7 days') AS next_week;`,
                challenge: "Return today's date using the DATE function.",
                required: ["SELECT", "DATE", "NOW"]
            },

            {
                title: "Conditional Logic with CASE",
                subtitle: "Return different values based on conditions.",
                duration: "6 min",
                tip: "CASE expressions are evaluated in order, so the first matching WHEN branch is used.",
                explanation: `
                    <h3>What is CASE?</h3>
                    <p><code>CASE</code> lets a query return different values depending on conditions.</p>
                    <pre><code>SELECT name,
    CASE
        WHEN age >= 18 THEN 'Adult'
        ELSE 'Under 18'
    END AS age_group
FROM students;</code></pre>
                    <p>Each WHEN introduces a condition. THEN supplies the result for a matching condition. ELSE provides a fallback.</p>
                    <h3>Practical uses</h3>
                    <p>CASE is useful for labels, categories, reports, and calculated output.</p>
                `,
                example: `SELECT
    name,
    CASE
        WHEN age >= 20 THEN '20 or older'
        WHEN age >= 18 THEN '18 to 19'
        ELSE 'Under 18'
    END AS age_group
FROM students;`,
                challenge: "Use CASE to label products costing at least 500 as Premium and the others as Standard.",
                required: ["CASE", "WHEN", "PRICE", "500", "THEN", "PREMIUM", "ELSE", "STANDARD", "END"]
            }

        ]
    },

    {
        section: "CHANGING DATA",
        lessons: [

            {
                title: "Adding Records with INSERT",
                subtitle: "Insert a new row into a database table.",
                duration: "6 min",
                tip: "Explicitly naming the target columns helps make INSERT statements clear.",
                explanation: `
                    <h3>The INSERT statement</h3>
                    <p><code>INSERT INTO</code> adds new records to a table.</p>
                    <pre><code>INSERT INTO students (name, age, department)
VALUES ('Ada', 19, 'Computer Science');</code></pre>
                    <p>The column list identifies where each supplied value belongs.</p>
                    <p>In this practice environment, examples are rolled back after execution, so the demonstration does not permanently change your database.</p>
                    <p>Queries you run yourself in the practice editor remain active until you reset the database or reload the page.</p>
                `,
                example: `INSERT INTO students (name, age, department, email)
VALUES ('Ada Example', 19, 'Computer Science', 'ada@example.com');`,
                challenge: "Insert a product named Notebook with a price of 50 and category Stationery.",
                required: ["INSERT INTO", "PRODUCTS", "NOTEBOOK", "50", "STATIONERY"]
            },

            {
                title: "Inserting Multiple Rows",
                subtitle: "Add several records with one INSERT statement.",
                duration: "5 min",
                tip: "Every VALUES group must supply values that correspond to the same column list.",
                explanation: `
                    <h3>Multiple-row INSERT</h3>
                    <p>You can insert multiple records in one statement by separating their value groups with commas.</p>
                    <pre><code>INSERT INTO products (name, price, category)
VALUES
    ('Notebook', 50, 'Stationery'),
    ('Pen', 20, 'Stationery');</code></pre>
                    <p>This can be more concise than writing a separate INSERT statement for every record.</p>
                    <p>Make sure each row contains the correct number of values in the correct order.</p>
                `,
                example: `INSERT INTO products (name, price, category)
VALUES
    ('Practice Notebook', 50, 'Stationery'),
    ('Practice Pen', 20, 'Stationery');`,
                challenge: "Insert two products using one INSERT statement.",
                required: ["INSERT INTO", "PRODUCTS", "VALUES", ","]
            },

            {
                title: "Updating Records with UPDATE",
                subtitle: "Modify values in existing records.",
                duration: "6 min",
                tip: "Always inspect your WHERE condition before running UPDATE against important data.",
                explanation: `
                    <h3>The UPDATE statement</h3>
                    <p><code>UPDATE</code> modifies existing records.</p>
                    <pre><code>UPDATE products
SET price = 250
WHERE id = 1;</code></pre>
                    <p>The SET clause defines the new value. The WHERE clause identifies which records should change.</p>
                    <h3>A critical warning</h3>
                    <p>Without WHERE, an UPDATE normally changes every row in the target table.</p>
                    <p>Our example runner uses a rollback so you can observe the statement without keeping its changes. In the practice editor, changes remain until the database is reset.</p>
                `,
                example: `UPDATE products
SET price = 250
WHERE id = 1;

SELECT id, name, price
FROM products
WHERE id = 1;`,
                challenge: "Increase the price of the product with id 1 to 999.",
                required: ["UPDATE", "PRODUCTS", "SET", "PRICE", "999", "WHERE", "ID", "1"]
            },

            {
                title: "Deleting Records with DELETE",
                subtitle: "Remove selected rows from a table.",
                duration: "6 min",
                tip: "DELETE without WHERE removes every row in the table.",
                explanation: `
                    <h3>The DELETE statement</h3>
                    <p><code>DELETE FROM</code> removes rows from a table.</p>
                    <pre><code>DELETE FROM products
WHERE id = 1;</code></pre>
                    <p>The WHERE condition identifies which rows should be removed.</p>
                    <h3>Delete carefully</h3>
                    <p>Before a deletion, you can run a SELECT statement with the same WHERE condition to inspect the affected records.</p>
                    <p>Our example runner rolls back example changes. Your own practice queries, however, affect the current in-browser database.</p>
                `,
                example: `DELETE FROM products
WHERE id = 1;

SELECT *
FROM products
WHERE id = 1;`,
                challenge: "Delete the product whose id is 2.",
                required: ["DELETE FROM", "PRODUCTS", "WHERE", "ID", "2"]
            },

            {
                title: "Transactions: COMMIT and ROLLBACK",
                subtitle: "Understand how groups of database changes are controlled.",
                duration: "7 min",
                tip: "A transaction lets you group related changes so they can be committed or rolled back together.",
                explanation: `
                    <h3>What is a transaction?</h3>
                    <p>A transaction is a group of database operations treated as a unit.</p>
                    <h3>COMMIT</h3>
                    <p><code>COMMIT</code> makes changes in a transaction permanent within the database.</p>
                    <h3>ROLLBACK</h3>
                    <p><code>ROLLBACK</code> cancels changes made since the transaction began, provided they have not already been committed.</p>
                    <p>Transactions are important when several changes must succeed or fail together.</p>
                    <p>SQLite transaction behaviour can differ depending on the connection and transaction mode. The example uses a transaction that is rolled back after displaying its results.</p>
                `,
                example: `BEGIN;

UPDATE products
SET price = price + 10
WHERE id = 1;

SELECT id, name, price
FROM products
WHERE id = 1;

ROLLBACK;`,
                challenge: "Write a transaction that begins, updates product 1, and rolls back the change.",
                required: ["BEGIN", "UPDATE", "PRODUCTS", "ROLLBACK"]
            }

        ]
    },

    {
        section: "TABLES AND DATABASE DESIGN",
        lessons: [

            {
                title: "Creating Tables with CREATE TABLE",
                subtitle: "Define the structure that holds your data.",
                duration: "7 min",
                tip: "Choose meaningful column names and data types before inserting records.",
                explanation: `
                    <h3>Creating a table</h3>
                    <p><code>CREATE TABLE</code> defines a new table and its columns.</p>
                    <pre><code>CREATE TABLE books (
    id INTEGER,
    title TEXT,
    published_year INTEGER
);</code></pre>
                    <p>SQLite supports several storage classes, including INTEGER, REAL, TEXT, BLOB, and NULL.</p>
                    <p>The example creates a temporary demonstration table and rolls it back afterward. In your practice editor, you can create your own tables.</p>
                    <p>Use <code>CREATE TABLE IF NOT EXISTS</code> when appropriate to avoid an error if the table already exists.</p>
                `,
                example: `CREATE TABLE demo_books (
    id INTEGER,
    title TEXT,
    published_year INTEGER
);

INSERT INTO demo_books
VALUES (1, 'Learning SQL', 2026);

SELECT * FROM demo_books;`,
                challenge: "Create a table named practice_books with id INTEGER and title TEXT.",
                required: ["CREATE TABLE", "PRACTICE_BOOKS", "ID", "INTEGER", "TITLE", "TEXT"]
            },

            {
                title: "Understanding SQL Data Types",
                subtitle: "Choose suitable representations for stored values.",
                duration: "6 min",
                tip: "SQLite uses type affinity, so its typing rules differ from those of stricter database systems.",
                explanation: `
                    <h3>Common SQLite storage classes</h3>
                    <ul>
                        <li><code>INTEGER</code> represents whole-number values.</li>
                        <li><code>REAL</code> represents floating-point numbers.</li>
                        <li><code>TEXT</code> stores text.</li>
                        <li><code>BLOB</code> stores binary data.</li>
                        <li><code>NULL</code> represents a missing or unknown value.</li>
                    </ul>
                    <h3>Type affinity</h3>
                    <p>SQLite associates a type affinity with each column, but it can store values of different storage classes in many columns.</p>
                    <p>Other database systems may enforce data types more strictly. Always consider the rules of the specific database you use.</p>
                `,
                example: `SELECT
    typeof(25) AS integer_type,
    typeof(25.5) AS real_type,
    typeof('Hello') AS text_type;`,
                challenge: "Use typeof() to show the storage class of the number 100.",
                required: ["SELECT", "TYPEOF", "100"]
            },

            {
                title: "NOT NULL and UNIQUE Constraints",
                subtitle: "Prevent missing values and duplicate entries where required.",
                duration: "6 min",
                tip: "A constraint is a rule enforced by the database when data is inserted or updated.",
                explanation: `
                    <h3>NOT NULL</h3>
                    <p><code>NOT NULL</code> prevents a column from being assigned a NULL value.</p>
                    <h3>UNIQUE</h3>
                    <p><code>UNIQUE</code> prevents duplicate values according to the database's uniqueness rules.</p>
                    <pre><code>CREATE TABLE accounts (
    id INTEGER,
    email TEXT NOT NULL UNIQUE
);</code></pre>
                    <p>These constraints help protect data quality.</p>
                    <p>In SQLite, a UNIQUE constraint can allow multiple NULL values, so combine it with NOT NULL when a value must be present and unique.</p>
                `,
                example: `CREATE TABLE demo_accounts (
    id INTEGER,
    email TEXT NOT NULL UNIQUE
);

INSERT INTO demo_accounts
VALUES (1, 'learner@example.com');

SELECT * FROM demo_accounts;`,
                challenge: "Create a table named unique_learners with a NOT NULL name and UNIQUE email.",
                required: ["CREATE TABLE", "UNIQUE_LEARNERS", "NOT NULL", "UNIQUE", "EMAIL"]
            },

            {
                title: "Primary Keys",
                subtitle: "Give each record a reliable identifier.",
                duration: "6 min",
                tip: "A primary key uniquely identifies a row and cannot be NULL.",
                explanation: `
                    <h3>What is a primary key?</h3>
                    <p>A primary key identifies each record in a table.</p>
                    <pre><code>CREATE TABLE learners (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);</code></pre>
                    <p>SQLite's INTEGER PRIMARY KEY has special behaviour and is commonly used for integer identifiers.</p>
                    <h3>Why primary keys matter</h3>
                    <p>Names may be repeated or changed, but a stable identifier lets other records refer to a specific learner.</p>
                    <p>A table has one primary-key constraint, although that key can consist of more than one column.</p>
                `,
                example: `CREATE TABLE demo_learners (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);

INSERT INTO demo_learners (name)
VALUES ('Ada');

SELECT * FROM demo_learners;`,
                challenge: "Create a table named library_books with id as an INTEGER PRIMARY KEY.",
                required: ["CREATE TABLE", "LIBRARY_BOOKS", "ID", "INTEGER", "PRIMARY KEY"]
            },

            {
                title: "Foreign Keys and Relationships",
                subtitle: "Connect records across related tables.",
                duration: "7 min",
                tip: "A foreign key normally references a primary key or another eligible unique key.",
                explanation: `
                    <h3>What is a foreign key?</h3>
                    <p>A foreign key connects a value in one table to a valid key in another table.</p>
                    <p>For example, an enrolments table can store a student ID and a course ID to identify who is taking which course.</p>
                    <pre><code>CREATE TABLE demo_enrolments (
    id INTEGER PRIMARY KEY,
    student_id INTEGER,
    FOREIGN KEY (student_id)
        REFERENCES students(id)
);</code></pre>
                    <h3>Referential integrity</h3>
                    <p>Foreign keys help prevent relationships from referring to records that do not exist.</p>
                    <p>SQLite foreign-key enforcement should be explicitly enabled for each connection when required.</p>
                `,
                example: `PRAGMA foreign_keys = ON;

CREATE TABLE demo_departments (
    id INTEGER PRIMARY KEY,
    name TEXT UNIQUE
);

CREATE TABLE demo_employees (
    id INTEGER PRIMARY KEY,
    name TEXT,
    department_id INTEGER,
    FOREIGN KEY (department_id)
        REFERENCES demo_departments(id)
);

INSERT INTO demo_departments VALUES (1, 'Engineering');
INSERT INTO demo_employees VALUES (1, 'Ada', 1);

SELECT * FROM demo_employees;`,
                challenge: "Create a table named demo_orders with a foreign key referencing products(id).",
                required: ["CREATE TABLE", "DEMO_ORDERS", "FOREIGN KEY", "REFERENCES", "PRODUCTS", "ID"]
            },

            {
                title: "DEFAULT and CHECK Constraints",
                subtitle: "Set fallback values and enforce conditions.",
                duration: "6 min",
                tip: "A DEFAULT value applies when an INSERT omits that column or explicitly uses DEFAULT where supported.",
                explanation: `
                    <h3>DEFAULT</h3>
                    <p>A DEFAULT constraint supplies a value when an INSERT does not provide one for that column.</p>
                    <h3>CHECK</h3>
                    <p>A CHECK constraint requires a condition to be satisfied when a row is inserted or updated.</p>
                    <pre><code>CREATE TABLE inventory (
    quantity INTEGER DEFAULT 0,
    price REAL CHECK (price >= 0)
);</code></pre>
                    <p>These constraints move some data-quality rules into the database itself.</p>
                    <p>Remember that CHECK conditions evaluating to NULL are not treated as false in SQLite, so use NOT NULL too when a value is mandatory.</p>
                `,
                example: `CREATE TABLE demo_inventory (
    quantity INTEGER DEFAULT 0,
    price REAL CHECK (price >= 0)
);

INSERT INTO demo_inventory (price)
VALUES (150);

SELECT * FROM demo_inventory;`,
                challenge: "Create a table named stock with quantity DEFAULT 0 and price CHECK(price >= 0).",
                required: ["CREATE TABLE", "STOCK", "QUANTITY", "DEFAULT", "0", "CHECK", "PRICE", ">= 0"]
            },

            {
                title: "Changing Tables with ALTER TABLE",
                subtitle: "Modify an existing table's structure.",
                duration: "6 min",
                tip: "Check the capabilities of your database engine before planning a complex schema change.",
                explanation: `
                    <h3>ALTER TABLE</h3>
                    <p><code>ALTER TABLE</code> changes the structure of an existing table.</p>
                    <p>In SQLite, a common operation is adding a column:</p>
                    <pre><code>ALTER TABLE students
ADD COLUMN phone TEXT;</code></pre>
                    <p>The new column is available to queries after the alteration.</p>
                    <p>SQLite supports several table alterations, but not every schema change can be expressed with the same simple command. More complex changes may require rebuilding the table.</p>
                `,
                example: `CREATE TABLE demo_alter (
    id INTEGER PRIMARY KEY,
    name TEXT
);

ALTER TABLE demo_alter
ADD COLUMN phone TEXT;

PRAGMA table_info(demo_alter);`,
                challenge: "Add an email TEXT column to an existing table named practice_people.",
                required: ["ALTER TABLE", "PRACTICE_PEOPLE", "ADD COLUMN", "EMAIL", "TEXT"]
            },

            {
                title: "Removing Tables with DROP TABLE",
                subtitle: "Understand how to remove a table definition and its data.",
                duration: "5 min",
                tip: "DROP TABLE is different from DELETE: it removes the table itself.",
                explanation: `
                    <h3>DROP TABLE</h3>
                    <p><code>DROP TABLE</code> removes a table from the database.</p>
                    <pre><code>DROP TABLE old_records;</code></pre>
                    <p>After a successful drop, the table is no longer available under that name.</p>
                    <h3>DELETE versus DROP</h3>
                    <p>DELETE removes selected rows but leaves the table structure. DROP TABLE removes the table structure and its stored records.</p>
                    <p>Use <code>DROP TABLE IF EXISTS</code> when you want to avoid an error if a table is absent.</p>
                `,
                example: `CREATE TABLE demo_to_drop (
    id INTEGER,
    label TEXT
);

INSERT INTO demo_to_drop VALUES (1, 'Temporary');

DROP TABLE demo_to_drop;

SELECT name
FROM sqlite_master
WHERE type = 'table'
  AND name = 'demo_to_drop';`,
                challenge: "Write a statement that drops a table named temporary_data if it exists.",
                required: ["DROP TABLE", "IF EXISTS", "TEMPORARY_DATA"]
            }

        ]
    },

    {
        section: "RELATIONSHIPS AND JOINS",
        lessons: [

            {
                title: "Understanding SQL Joins",
                subtitle: "Combine related information from different tables.",
                duration: "7 min",
                tip: "Before joining tables, identify which columns express the relationship between them.",
                explanation: `
                    <h3>Why use joins?</h3>
                    <p>Related information is often stored in different tables to reduce duplication and keep the data organized.</p>
                    <p>A student record may be in one table while course information is stored in another.</p>
                    <h3>Joining tables</h3>
                    <p>A JOIN combines rows from multiple tables according to a relationship or condition.</p>
                    <p>Common join types include INNER JOIN and LEFT JOIN. The appropriate join depends on which records you need to preserve.</p>
                    <p>Our sample database includes students, courses, and enrolments for practice.</p>
                `,
                example: `SELECT
    students.name,
    enrolments.course_id
FROM students
INNER JOIN enrolments
    ON students.id = enrolments.student_id;`,
                challenge: "Join students to enrolments using students.id and enrolments.student_id.",
                required: ["SELECT", "FROM", "STUDENTS", "JOIN", "ENROLMENTS", "ON", "STUDENTS.ID", "STUDENT_ID"]
            },

            {
                title: "INNER JOIN",
                subtitle: "Return rows that match on both sides of a join.",
                duration: "7 min",
                tip: "An INNER JOIN excludes unmatched rows from both sides.",
                explanation: `
                    <h3>How INNER JOIN works</h3>
                    <p><code>INNER JOIN</code> returns combinations of rows that satisfy the join condition.</p>
                    <pre><code>SELECT students.name, courses.title
FROM enrolments
INNER JOIN students
    ON students.id = enrolments.student_id
INNER JOIN courses
    ON courses.id = enrolments.course_id;</code></pre>
                    <p>The enrolments table connects each student with a course.</p>
                    <h3>Join conditions</h3>
                    <p>Use ON to describe how the records relate. If the condition is incorrect or too broad, the query may return misleading or unexpectedly large results.</p>
                `,
                example: `SELECT
    students.name,
    courses.title
FROM enrolments
INNER JOIN students
    ON students.id = enrolments.student_id
INNER JOIN courses
    ON courses.id = enrolments.course_id;`,
                challenge: "Use INNER JOIN to connect students and enrolments by student ID.",
                required: ["INNER JOIN", "STUDENTS", "ENROLMENTS", "ON", "STUDENT_ID"]
            },

            {
                title: "LEFT JOIN",
                subtitle: "Preserve every row from the left table.",
                duration: "7 min",
                tip: "Columns from the right table become NULL when no matching row is found.",
                explanation: `
                    <h3>How LEFT JOIN works</h3>
                    <p>A <code>LEFT JOIN</code> returns every row from its left-hand table and matching rows from the right-hand table.</p>
                    <p>When a left-hand row has no match, the right-hand columns contain NULL values.</p>
                    <pre><code>SELECT students.name, enrolments.course_id
FROM students
LEFT JOIN enrolments
    ON students.id = enrolments.student_id;</code></pre>
                    <p>This is useful for finding students who have not enrolled in any course.</p>
                    <p>Be careful when filtering right-hand columns in WHERE, because some filters can remove the unmatched rows you wanted to preserve.</p>
                `,
                example: `SELECT
    students.name,
    enrolments.course_id
FROM students
LEFT JOIN enrolments
    ON students.id = enrolments.student_id;`,
                challenge: "Use LEFT JOIN to display all students, including those without enrolments.",
                required: ["LEFT JOIN", "STUDENTS", "ENROLMENTS", "ON"]
            },

            {
                title: "Self Joins",
                subtitle: "Join a table to itself to compare related records.",
                duration: "6 min",
                tip: "Aliases are essential when the same table appears more than once in a query.",
                explanation: `
                    <h3>What is a self join?</h3>
                    <p>A self join is a normal join in which a table is joined to another reference of itself.</p>
                    <p>For example, an employees table might contain an employee ID and a manager ID. Both values can refer to rows in that same table.</p>
                    <pre><code>SELECT
    employee.name AS employee,
    manager.name AS manager
FROM employees AS employee
LEFT JOIN employees AS manager
    ON employee.manager_id = manager.id;</code></pre>
                    <p>The aliases distinguish the employee row from the manager row.</p>
                    <p>This technique is useful for hierarchical relationships.</p>
                `,
                example: `SELECT
    employee.name AS employee,
    manager.name AS manager
FROM employees AS employee
LEFT JOIN employees AS manager
    ON employee.manager_id = manager.id;`,
                challenge: "Write a self join using aliases employee and manager.",
                required: ["FROM", "EMPLOYEES", "AS EMPLOYEE", "JOIN", "AS MANAGER", "ON"]
            },

            {
                title: "Combining Results with UNION",
                subtitle: "Combine compatible result sets.",
                duration: "6 min",
                tip: "Each SELECT in a UNION must return the same number of columns with compatible meanings.",
                explanation: `
                    <h3>UNION</h3>
                    <p><code>UNION</code> combines the rows returned by two SELECT statements and removes duplicate result rows.</p>
                    <h3>UNION ALL</h3>
                    <p><code>UNION ALL</code> also combines result sets but retains duplicates.</p>
                    <pre><code>SELECT name FROM students
UNION
SELECT name FROM instructors;</code></pre>
                    <p>Column names in the combined output generally come from the first SELECT.</p>
                    <p>Use UNION when you need distinct combined results and UNION ALL when duplicates should be preserved.</p>
                `,
                example: `SELECT name AS person_name
FROM students

UNION

SELECT name
FROM employees;`,
                challenge: "Combine the name columns from students and employees using UNION.",
                required: ["SELECT", "NAME", "FROM", "STUDENTS", "UNION", "EMPLOYEES"]
            }

        ]
    },

    {
        section: "ADVANCED SQL",
        lessons: [

            {
                title: "Subqueries",
                subtitle: "Use one query inside another query.",
                duration: "7 min",
                tip: "A subquery is often easiest to understand when you first run it by itself.",
                explanation: `
                    <h3>What is a subquery?</h3>
                    <p>A subquery is a SELECT or other query nested inside another SQL statement.</p>
                    <p>For example, a query can find products priced above the average price returned by another SELECT.</p>
                    <pre><code>SELECT name, price
FROM products
WHERE price > (
    SELECT AVG(price)
    FROM products
);</code></pre>
                    <p>The inner query calculates the average. The outer query compares each product price with that result.</p>
                    <p>Subqueries can appear in WHERE, FROM, and other supported positions.</p>
                `,
                example: `SELECT name, price
FROM products
WHERE price > (
    SELECT AVG(price)
    FROM products
);`,
                challenge: "Find students older than the average age using a subquery.",
                required: ["SELECT", "FROM", "STUDENTS", "WHERE", "AGE", ">", "SELECT", "AVG"]
            },

            {
                title: "EXISTS and NOT EXISTS",
                subtitle: "Check whether a related query returns any rows.",
                duration: "6 min",
                tip: "EXISTS tests for the presence of rows; it does not need to return those rows to the outer query.",
                explanation: `
                    <h3>EXISTS</h3>
                    <p><code>EXISTS</code> evaluates to true when its subquery returns at least one row.</p>
                    <h3>NOT EXISTS</h3>
                    <p><code>NOT EXISTS</code> evaluates to true when the subquery returns no rows.</p>
                    <pre><code>SELECT name
FROM students AS s
WHERE EXISTS (
    SELECT 1
    FROM enrolments AS e
    WHERE e.student_id = s.id
);</code></pre>
                    <p>This returns students with at least one matching enrolment.</p>
                    <p>EXISTS is especially useful for checking related data without needing to retrieve it.</p>
                `,
                example: `SELECT name
FROM students AS s
WHERE EXISTS (
    SELECT 1
    FROM enrolments AS e
    WHERE e.student_id = s.id
);`,
                challenge: "Find students who have no enrolments using NOT EXISTS.",
                required: ["SELECT", "FROM", "STUDENTS", "NOT EXISTS", "ENROLMENTS", "STUDENT_ID"]
            },

            {
                title: "Creating Views",
                subtitle: "Save a reusable query as a database view.",
                duration: "6 min",
                tip: "A standard view stores a query definition rather than a separate copy of its result rows.",
                explanation: `
                    <h3>What is a view?</h3>
                    <p>A view is a named query that can be used much like a table in other queries.</p>
                    <pre><code>CREATE VIEW adult_students AS
SELECT *
FROM students
WHERE age >= 18;</code></pre>
                    <p>You can then query the view using SELECT.</p>
                    <h3>Why use views?</h3>
                    <ul>
                        <li>Reuse a frequently needed query.</li>
                        <li>Simplify complex reporting queries.</li>
                        <li>Present selected columns or records through a consistent interface.</li>
                    </ul>
                    <p>SQLite views are not automatically materialized tables.</p>
                `,
                example: `CREATE VIEW demo_adult_students AS
SELECT id, name, age
FROM students
WHERE age >= 18;

SELECT * FROM demo_adult_students;`,
                challenge: "Create a view named expensive_products for products costing more than 500.",
                required: ["CREATE VIEW", "EXPENSIVE_PRODUCTS", "SELECT", "FROM", "PRODUCTS", "WHERE", "PRICE", "500"]
            },

            {
                title: "Indexes and Query Performance",
                subtitle: "Understand how indexes can speed up lookups.",
                duration: "6 min",
                tip: "Indexes can improve reads but require storage and add work to inserts, updates, and deletes.",
                explanation: `
                    <h3>What is an index?</h3>
                    <p>An index is an additional database structure that can help SQLite locate matching rows without scanning an entire table.</p>
                    <pre><code>CREATE INDEX idx_students_department
ON students(department);</code></pre>
                    <p>An index can help queries that filter or sort by indexed columns, depending on the query plan and data.</p>
                    <h3>Indexes are not free</h3>
                    <p>Indexes use storage and must be maintained when data changes. Creating indexes for every column is not always beneficial.</p>
                    <p>Use EXPLAIN QUERY PLAN to investigate how SQLite intends to execute a query.</p>
                `,
                example: `CREATE INDEX idx_demo_student_age
ON students(age);

EXPLAIN QUERY PLAN
SELECT *
FROM students
WHERE age = 20;`,
                challenge: "Create an index named idx_products_price on products(price).",
                required: ["CREATE INDEX", "IDX_PRODUCTS_PRICE", "ON", "PRODUCTS", "PRICE"]
            },

            {
                title: "Common Table Expressions",
                subtitle: "Make complex queries easier to organize with WITH.",
                duration: "7 min",
                tip: "A CTE exists for the duration of its statement, not as a permanent table.",
                explanation: `
                    <h3>What is a CTE?</h3>
                    <p>A Common Table Expression, or CTE, defines a temporary named result set using the <code>WITH</code> clause.</p>
                    <pre><code>WITH high_value_products AS (
    SELECT *
    FROM products
    WHERE price > 500
)
SELECT *
FROM high_value_products;</code></pre>
                    <p>The outer query can refer to the named CTE as though it were a table.</p>
                    <h3>Why use CTEs?</h3>
                    <p>CTEs can improve readability by separating a complex query into named steps. SQLite also supports recursive CTEs for appropriate problems.</p>
                `,
                example: `WITH expensive_products AS (
    SELECT name, price
    FROM products
    WHERE price > 500
)
SELECT *
FROM expensive_products
ORDER BY price DESC;`,
                challenge: "Use WITH to create a CTE named adult_students and select from it.",
                required: ["WITH", "ADULT_STUDENTS", "SELECT", "FROM", "STUDENTS"]
            },

            {
                title: "Window Functions",
                subtitle: "Calculate values across related rows without collapsing them.",
                duration: "8 min",
                tip: "GROUP BY reduces rows into groups; window functions usually keep individual result rows visible.",
                explanation: `
                    <h3>What are window functions?</h3>
                    <p>Window functions calculate values across a set of related rows while retaining the individual rows in the result.</p>
                    <pre><code>SELECT
    name,
    department,
    ROW_NUMBER() OVER (
        PARTITION BY department
        ORDER BY age DESC
    ) AS row_number
FROM students;</code></pre>
                    <p>PARTITION BY separates records into groups. ORDER BY determines their order within each group.</p>
                    <p>Other window functions include RANK, DENSE_RANK, and aggregate functions used with an OVER clause.</p>
                `,
                example: `SELECT
    name,
    age,
    ROW_NUMBER() OVER (
        ORDER BY age DESC
    ) AS age_rank
FROM students;`,
                challenge: "Use ROW_NUMBER() OVER (ORDER BY price DESC) to number products.",
                required: ["ROW_NUMBER", "OVER", "ORDER BY", "PRICE", "DESC", "FROM", "PRODUCTS"]
            }

        ]
    },

    {
        section: "PRACTICAL SQL MASTERY",
        lessons: [

            {
                title: "Building a Complete SQL Report",
                subtitle: "Combine filtering, grouping, and sorting.",
                duration: "8 min",
                tip: "Build complex queries in stages: first retrieve the correct rows, then summarize and sort them.",
                explanation: `
                    <h3>From query to report</h3>
                    <p>Reports often combine several SQL techniques.</p>
                    <p>For example, a product report might count items in each category, calculate their average price, and display categories from most expensive to least expensive.</p>
                    <h3>Query structure</h3>
                    <ol>
                        <li>SELECT defines the result columns.</li>
                        <li>FROM identifies the source table.</li>
                        <li>WHERE filters individual rows.</li>
                        <li>GROUP BY defines groups.</li>
                        <li>HAVING filters groups.</li>
                        <li>ORDER BY sorts the result.</li>
                        <li>LIMIT restricts the output.</li>
                    </ol>
                    <p>These clauses work together to produce useful summaries from raw records.</p>
                `,
                example: `SELECT
    category,
    COUNT(*) AS product_count,
    ROUND(AVG(price), 2) AS average_price
FROM products
GROUP BY category
HAVING COUNT(*) > 0
ORDER BY average_price DESC;`,
                challenge: "Create a report showing each department and its student count, ordered by count.",
                required: ["SELECT", "DEPARTMENT", "COUNT", "FROM", "STUDENTS", "GROUP BY", "ORDER BY"]
            },

            {
                title: "SQL Security and Safe Queries",
                subtitle: "Learn safer patterns for applications that use databases.",
                duration: "7 min",
                tip: "When building applications, pass user input as parameters instead of concatenating it into SQL strings.",
                explanation: `
                    <h3>Why SQL security matters</h3>
                    <p>Applications often use SQL to search or update information based on user input. Constructing queries carelessly can introduce SQL injection vulnerabilities.</p>
                    <h3>Parameterized queries</h3>
                    <p>In an application, use prepared statements and bind parameters instead of inserting raw user input into SQL text.</p>
                    <p>For example, an application should pass a username as a bound parameter rather than building a query by joining strings.</p>
                    <h3>Other good practices</h3>
                    <ul>
                        <li>Grant only the database permissions an application needs.</li>
                        <li>Validate data according to application requirements.</li>
                        <li>Use transactions for related changes.</li>
                        <li>Protect sensitive information and database backups.</li>
                    </ul>
                    <p>This browser editor is a learning environment and does not connect to an external production database.</p>
                `,
                example: `SELECT name
FROM students
WHERE name = 'Ada Johnson';`,
                challenge: "Write a SELECT query that retrieves a student by name using a WHERE condition.",
                required: ["SELECT", "FROM", "STUDENTS", "WHERE", "NAME", "="]
            },

            {
                title: "Reading Query Plans",
                subtitle: "Use EXPLAIN QUERY PLAN to inspect how SQLite approaches a query.",
                duration: "6 min",
                tip: "A query plan is diagnostic information, not a guarantee that every execution will have identical performance.",
                explanation: `
                    <h3>What is a query plan?</h3>
                    <p>A query plan describes how SQLite intends to execute a statement.</p>
                    <pre><code>EXPLAIN QUERY PLAN
SELECT *
FROM students
WHERE age = 20;</code></pre>
                    <p>The output can indicate whether SQLite plans to scan a table or use an index.</p>
                    <h3>Why it matters</h3>
                    <p>As databases grow, understanding query plans can help identify opportunities to improve performance.</p>
                    <p>Always consider the actual data, available indexes, and workload before deciding whether a query needs optimization.</p>
                `,
                example: `EXPLAIN QUERY PLAN
SELECT name, age
FROM students
WHERE age >= 20;`,
                challenge: "Use EXPLAIN QUERY PLAN with a SELECT query against the products table.",
                required: ["EXPLAIN QUERY PLAN", "SELECT", "FROM", "PRODUCTS"]
            },

            {
                title: "Database Normalization",
                subtitle: "Organize related data to reduce duplication and inconsistencies.",
                duration: "7 min",
                tip: "Normalization is about sound data design, not making every table as small as possible.",
                explanation: `
                    <h3>What is normalization?</h3>
                    <p>Database normalization is a set of design principles that helps organize relational data and reduce unnecessary duplication.</p>
                    <h3>Why separate tables?</h3>
                    <p>Imagine storing a student's name, course title, and instructor information repeatedly for every enrolment. Changes could require updating many rows.</p>
                    <p>Separating students, courses, and enrolments helps each table represent one kind of entity or relationship.</p>
                    <h3>Primary keys and foreign keys</h3>
                    <p>Keys identify records and connect related tables. They are essential tools for implementing a normalized relational design.</p>
                    <p>Good design balances integrity, clarity, and practical application needs.</p>
                `,
                example: `SELECT
    students.name,
    courses.title
FROM enrolments
JOIN students
    ON students.id = enrolments.student_id
JOIN courses
    ON courses.id = enrolments.course_id;`,
                challenge: "Retrieve student names and course titles using the enrolments relationship.",
                required: ["SELECT", "STUDENTS", "COURSES", "ENROLMENTS", "JOIN", "ON"]
            },

            {
                title: "Final Project: Student Database",
                subtitle: "Bring your SQL skills together in a practical project.",
                duration: "12 min",
                tip: "Plan your tables, identify their keys, and test your queries with small amounts of data first.",
                explanation: `
                    <h3>Your final project</h3>
                    <p>Design a small student database that stores learners, courses, and enrolments.</p>
                    <h3>Project requirements</h3>
                    <ol>
                        <li>Create a learners table with a primary key.</li>
                        <li>Create a courses table with a primary key.</li>
                        <li>Create an enrolments table connecting learners and courses.</li>
                        <li>Insert example records.</li>
                        <li>Retrieve learner and course information using JOIN.</li>
                        <li>Write a report that counts enrolments by course.</li>
                    </ol>
                    <p>You can complete the project in the independent practice editor. The tables you create remain in the current in-browser database until it is reset or the page is reloaded.</p>
                    <p>Use the concepts from earlier lessons to decide which constraints and queries are appropriate.</p>
                `,
                example: `SELECT
    courses.title,
    COUNT(enrolments.id) AS enrolment_count
FROM courses
LEFT JOIN enrolments
    ON courses.id = enrolments.course_id
GROUP BY courses.id, courses.title
ORDER BY enrolment_count DESC;`,
                challenge: "Write a query that lists course titles and counts their enrolments, including courses with zero enrolments.",
                required: ["SELECT", "COURSES", "TITLE", "COUNT", "LEFT JOIN", "ENROLMENTS", "GROUP BY"]
            }

        ]
    }

];


/* ================================================================
   3. PREPARE THE 50-LESSON COURSE
   ================================================================ */

let SQL_LESSONS = [];

function prepareLessons() {
    SQL_LESSONS = [];

    SQL_COURSE.forEach((group) => {
        group.lessons.forEach((lesson) => {
            SQL_LESSONS.push({
                ...lesson,
                section: group.section,
                id: SQL_LESSONS.length + 1
            });
        });
    });

    if (SQL_LESSONS.length !== SQL_TOTAL_LESSONS) {
        console.error(
            "SQL lesson count mismatch:",
            SQL_LESSONS.length,
            "expected:",
            SQL_TOTAL_LESSONS
        );
    }
}


/* ================================================================
   4. SAVE AND RESTORE PROGRESS
   ================================================================ */

function loadSQLProgress() {
    try {
        const saved = JSON.parse(
            localStorage.getItem(SQL_STORAGE_KEY) || "{}"
        );

        completedLessons = new Set(
            Array.isArray(saved.completedLessons)
                ? saved.completedLessons
                : []
        );

        completedChallenges = new Set(
            Array.isArray(saved.completedChallenges)
                ? saved.completedChallenges
                : []
        );

        totalXP = Number(saved.totalXP) || 0;
        currentLearnerName = saved.learnerName || "";

        currentLessonIndex = Number(saved.currentLessonIndex) || 0;

        if (currentLessonIndex < 0 ||
            currentLessonIndex >= SQL_LESSONS.length) {
            currentLessonIndex = 0;
        }

        completedLessons = new Set(
            [...completedLessons].filter(
                id => Number.isInteger(id) &&
                id >= 1 &&
                id <= SQL_TOTAL_LESSONS
            )
        );

        completedChallenges = new Set(
            [...completedChallenges].filter(
                id => Number.isInteger(id) &&
                id >= 1 &&
                id <= SQL_TOTAL_LESSONS
            )
        );

        // Reconcile XP from saved completion records.
        totalXP =
            completedLessons.size * SQL_LESSON_XP +
            completedChallenges.size * SQL_CHALLENGE_XP;

    } catch (error) {
        console.warn("Could not restore SQL progress:", error);

        completedLessons = new Set();
        completedChallenges = new Set();
        totalXP = 0;
        currentLessonIndex = 0;
    }
}

function saveSQLProgress() {
    try {
        localStorage.setItem(SQL_STORAGE_KEY, JSON.stringify({
            completedLessons: [...completedLessons],
            completedChallenges: [...completedChallenges],
            totalXP,
            currentLessonIndex,
            learnerName: currentLearnerName
        }));
    } catch (error) {
        console.warn("Could not save SQL progress:", error);
        showMessage("Progress could not be saved in this browser.");
    }
}


/* ================================================================
   5. SAMPLE DATABASE
   ================================================================ */

function createSampleDatabase() {
    if (!sqlDatabase) return;

    sqlDatabase.run("PRAGMA foreign_keys = ON;");

    sqlDatabase.run(`
        CREATE TABLE students (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            age INTEGER,
            department TEXT,
            email TEXT
        );

        CREATE TABLE courses (
            id INTEGER PRIMARY KEY,
            title TEXT NOT NULL,
            level TEXT,
            fee REAL
        );

        CREATE TABLE enrolments (
            id INTEGER PRIMARY KEY,
            student_id INTEGER,
            course_id INTEGER,
            enrolled_on TEXT DEFAULT CURRENT_DATE,
            FOREIGN KEY (student_id) REFERENCES students(id),
            FOREIGN KEY (course_id) REFERENCES courses(id)
        );

        CREATE TABLE products (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            price REAL NOT NULL,
            category TEXT NOT NULL
        );

        CREATE TABLE employees (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            manager_id INTEGER,
            department TEXT,
            salary REAL,
            FOREIGN KEY (manager_id) REFERENCES employees(id)
        );

        CREATE TABLE instructors (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            department TEXT
        );

        INSERT INTO students (id, name, age, department, email) VALUES
            (1, 'Ada Johnson', 21, 'Computer Science', 'ada@example.com'),
            (2, 'Daniel Smith', 19, 'Engineering', 'daniel@example.com'),
            (3, 'Grace Okafor', 22, 'Mathematics', 'grace@example.com'),
            (4, 'Samuel James', 18, 'Computer Science', NULL),
            (5, 'Miriam Ade', 20, 'Engineering', 'miriam@example.com'),
            (6, 'David Peter', 17, 'Mathematics', 'david@example.com'),
            (7, 'Amara Bello', 23, 'Computer Science', 'amara@example.com'),
            (8, 'John Michael', 20, 'Physics', NULL);

        INSERT INTO courses (id, title, level, fee) VALUES
            (1, 'SQL Fundamentals', 'Beginner', 150),
            (2, 'Web Development', 'Intermediate', 300),
            (3, 'Python Programming', 'Beginner', 250),
            (4, 'Database Design', 'Intermediate', 450),
            (5, 'Advanced Analytics', 'Advanced', 650),
            (6, 'Computer Basics', 'Beginner', 100);

        INSERT INTO enrolments (id, student_id, course_id, enrolled_on) VALUES
            (1, 1, 1, '2026-01-10'),
            (2, 1, 3, '2026-01-12'),
            (3, 2, 2, '2026-01-15'),
            (4, 3, 4, '2026-02-01'),
            (5, 4, 1, '2026-02-05'),
            (6, 5, 3, '2026-02-12'),
            (7, 7, 5, '2026-03-01');

        INSERT INTO products (id, name, price, category) VALUES
            (1, 'Laptop', 1200, 'Electronics'),
            (2, 'Phone', 750, 'Electronics'),
            (3, 'Notebook', 50, 'Stationery'),
            (4, 'Pen', 20, 'Stationery'),
            (5, 'Headphones', 180, 'Electronics'),
            (6, 'Office Chair', 420, 'Furniture'),
            (7, 'Desk Lamp', 85, 'Furniture'),
            (8, 'USB Cable', 15, 'Electronics');

        INSERT INTO employees (id, name, manager_id, department, salary) VALUES
            (1, 'Olivia Manager', NULL, 'Management', 90000),
            (2, 'Noah Developer', 1, 'Engineering', 65000),
            (3, 'Emma Analyst', 1, 'Analytics', 62000),
            (4, 'Liam Designer', 2, 'Design', 55000),
            (5, 'Sophia Engineer', 2, 'Engineering', 70000);

        INSERT INTO instructors (id, name, department) VALUES
            (1, 'Dr. Johnson', 'Computer Science'),
            (2, 'Mrs. Williams', 'Mathematics'),
            (3, 'Mr. Adams', 'Engineering');
    `);
}


/* ================================================================
   6. SQL ENGINE INITIALIZATION
   ================================================================ */

function updateEngineStatus(message, ready = false, error = false) {
    const status = sqlElement("engineStatus");
    const heroStatus = sqlElement("heroEngineStatus");

    if (status) status.textContent = message;

    if (heroStatus) {
        heroStatus.textContent = ready ? "Ready" : error ? "Offline" : "Loading";
    }

    const overlayTitle = sqlElement("engineLoadingTitle");
    const overlayMessage = sqlElement("engineLoadingMessage");
    const overlayFill = sqlElement("engineLoadingFill");

    if (overlayTitle) {
        overlayTitle.textContent = error
            ? "SQL engine unavailable"
            : ready
                ? "Your workspace is ready"
                : "Preparing your workspace";
    }

    if (overlayMessage) {
        overlayMessage.textContent = message;
    }

    if (overlayFill) {
        overlayFill.style.width = ready ? "100%" : error ? "100%" : "45%";
    }
}

function hideEngineOverlay() {
    const overlay = sqlElement("engineLoadingOverlay");
    if (!overlay) return;

    overlay.classList.add("engine-ready");

    window.setTimeout(() => {
        overlay.style.display = "none";
    }, 500);
}

function showEngineOverlay() {
    const overlay = sqlElement("engineLoadingOverlay");
    if (!overlay) return;

    overlay.style.display = "";
    overlay.classList.remove("engine-ready");
}

async function initializeSQLEngine() {
    showEngineOverlay();

    updateEngineStatus("Initializing SQLite...", false);

    try {
        if (typeof initSqlJs !== "function") {
            throw new Error(
                "The SQLite library did not load. Check your internet connection and refresh the page."
            );
        }

        const SQL = await initSqlJs({
            locateFile: file =>
                "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/" + file
        });

        sqlDatabase = new SQL.Database();

        createSampleDatabase();

        sqlEngineReady = true;
        sqlEngineError = false;

        updateEngineStatus("SQLite engine ready", true);

        hideEngineOverlay();

        renderCurrentLesson();
        updateProgressUI();

    } catch (error) {
        console.error("SQL engine initialization failed:", error);

        sqlEngineReady = false;
        sqlEngineError = true;

        updateEngineStatus("SQL engine unavailable", false, true);

        const message = sqlElement("engineLoadingMessage");

        if (message) {
            message.textContent =
                "Could not load SQLite. Check your internet connection, then refresh this page.";
        }

        const fill = sqlElement("engineLoadingFill");
        if (fill) fill.style.width = "100%";

        const output = sqlElement("exampleOutput");
        if (output) {
            output.innerHTML = `
                <div class="empty-output">
                    <span class="empty-output-icon">!</span>
                    <p>SQLite could not be loaded. Reconnect to the internet and refresh.</p>
                </div>
            `;
        }
    }
}


/* ================================================================
   7. DATABASE EXECUTION AND OUTPUT
   ================================================================ */

function escapeHTML(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function formatSQLValue(value) {
    if (value === null || value === undefined) {
        return '<span class="sql-null">NULL</span>';
    }

    return escapeHTML(value);
}

function renderQueryResults(results, target, emptyMessage = "Query executed successfully.") {
    if (!target) return;

    if (!results || results.length === 0) {
        target.innerHTML = `
            <div class="empty-output">
                <span class="empty-output-icon">✓</span>
                <p>${escapeHTML(emptyMessage)}</p>
            </div>
        `;
        return;
    }

    let html = "";

    results.forEach((result, index) => {
        const columns = result.columns || [];
        const values = result.values || [];

        if (columns.length === 0) {
            html += `
                <div class="query-success-message">
                    <span>✓</span>
                    Statement ${index + 1} executed successfully.
                </div>
            `;
            return;
        }

        html += `
            <div class="result-table-wrap">
                <table class="sql-result-table">
                    <thead>
                        <tr>
                            ${columns.map(column =>
                                `<th>${escapeHTML(column)}</th>`
                            ).join("")}
                        </tr>
                    </thead>
                    <tbody>
                        ${values.map(row => `
                            <tr>
                                ${row.map(value =>
                                    `<td>${formatSQLValue(value)}</td>`
                                ).join("")}
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
                <div class="result-row-count">
                    ${values.length} row${values.length === 1 ? "" : "s"} returned
                </div>
            </div>
        `;
    });

    target.innerHTML = html;
}

function renderQueryError(error, target) {
    if (!target) return;

    target.innerHTML = `
        <div class="sql-error-message">
            <strong>SQL Error</strong>
            <p>${escapeHTML(error.message || String(error))}</p>
            <small>Check your table names, column names, syntax, and quotation marks.</small>
        </div>
    `;
}

function setOutputStatus(id, message, type = "") {
    const element = sqlElement(id);
    if (!element) return;

    element.textContent = message;

    element.classList.remove("status-success", "status-error", "status-running");

    if (type) element.classList.add("status-" + type);
}

function executeSQL(query) {
    if (!sqlEngineReady || !sqlDatabase) {
        throw new Error("SQLite is not ready. Please wait or refresh the page.");
    }

    if (!query.trim()) {
        throw new Error("Write an SQL query before running it.");
    }

    return sqlDatabase.exec(query);
}


/* ================================================================
   8. SAFE EXAMPLE EXECUTION
   ================================================================ */

/*
   Examples run inside a savepoint. The results are captured, then
   the savepoint is rolled back so demonstration queries do not
   permanently change the learner's practice database.
*/

function executeExampleSafely(query) {
    if (!sqlEngineReady || !sqlDatabase) {
        throw new Error("The SQLite engine is not ready.");
    }

    const savepointName = "elomcode_example_savepoint";

    sqlDatabase.run("SAVEPOINT " + savepointName + ";");

    try {
        const results = sqlDatabase.exec(query);

        sqlDatabase.run("ROLLBACK TO " + savepointName + ";");
        sqlDatabase.run("RELEASE " + savepointName + ";");

        return results;

    } catch (error) {
        try {
            sqlDatabase.run("ROLLBACK TO " + savepointName + ";");
            sqlDatabase.run("RELEASE " + savepointName + ";");
        } catch (rollbackError) {
            console.warn("Example rollback warning:", rollbackError);
        }

        throw error;
    }
}

function runCurrentExample() {
    const lesson = SQL_LESSONS[currentLessonIndex];
    if (!lesson) return;

    const output = sqlElement("exampleOutput");

    setOutputStatus("exampleOutputStatus", "RUNNING", "running");

    try {
        const results = executeExampleSafely(lesson.example);

        renderQueryResults(results, output);

        setOutputStatus("exampleOutputStatus", "SUCCESS", "success");

    } catch (error) {
        renderQueryError(error, output);

        setOutputStatus("exampleOutputStatus", "ERROR", "error");
    }
}


/* ================================================================
   9. INDEPENDENT PRACTICE EDITOR
   ================================================================ */

function updateEditorLineNumbers() {
    const editor = sqlElement("codeEditor");
    const lineNumbers = sqlElement("editorLineNumbers");

    if (!editor || !lineNumbers) return;

    const lines = Math.max(1, editor.value.split("\n").length);

    lineNumbers.innerHTML = Array.from(
        { length: lines },
        (_, index) => index + 1
    ).join("<br>");

    lineNumbers.scrollTop = editor.scrollTop;
}

function updateExampleLineNumbers(query) {
    const element = sqlElement("exampleLineNumbers");
    if (!element) return;

    const count = Math.max(1, query.split("\n").length);

    element.innerHTML = Array.from(
        { length: count },
        (_, index) => index + 1
    ).join("<br>");
}

function markEditorChanged() {
    const indicator = sqlElement("editorUnsavedIndicator");

    if (indicator) {
        indicator.style.opacity = "1";
        indicator.title = "Editor content has changed";
    }

    updateEditorLineNumbers();
}

function clearEditor() {
    const editor = sqlElement("codeEditor");
    if (!editor) return;

    editor.value = "";
    editor.focus();

    updateEditorLineNumbers();

    const indicator = sqlElement("editorUnsavedIndicator");
    if (indicator) indicator.style.opacity = "0";

    const output = sqlElement("codeOutput");

    if (output) {
        output.innerHTML = `
            <div class="empty-output">
                <span class="empty-output-icon">⌘</span>
                <p>Your query results will appear here.</p>
            </div>
        `;
    }

    setOutputStatus("codeOutputStatus", "WAITING");
}

function runPracticeQuery() {
    const editor = sqlElement("codeEditor");
    const output = sqlElement("codeOutput");

    if (!editor || !output) return;

    const query = editor.value.trim();

    if (!query) {
        renderQueryError(
            new Error("Your editor is empty. Write a query before running it."),
            output
        );

        setOutputStatus("codeOutputStatus", "EMPTY", "error");
        return;
    }

    setOutputStatus("codeOutputStatus", "RUNNING", "running");

    try {
        const results = executeSQL(query);

        renderQueryResults(
            results,
            output,
            "Query executed successfully. No result rows were returned."
        );

        setOutputStatus("codeOutputStatus", "SUCCESS", "success");

        const indicator = sqlElement("editorUnsavedIndicator");
        if (indicator) indicator.style.opacity = "0";

    } catch (error) {
        renderQueryError(error, output);

        setOutputStatus("codeOutputStatus", "ERROR", "error");
    }
}

function resetSampleDatabase() {
    if (!sqlEngineReady) return;

    const confirmed = window.confirm(
        "Reset the SQL practice database? All tables and changes you made in this session will be removed and the sample database will be restored."
    );

    if (!confirmed) return;

    try {
        sqlDatabase.close();

        const SQL = window.SQL;
        // The sql.js constructor is stored separately below.
        sqlDatabase = new SQL.Database();

        createSampleDatabase();

        const output = sqlElement("codeOutput");

        if (output) {
            output.innerHTML = `
                <div class="empty-output">
                    <span class="empty-output-icon">✓</span>
                    <p>The sample database has been restored.</p>
                </div>
            `;
        }

        setOutputStatus("codeOutputStatus", "RESET", "success");

        showMessage("Database reset successfully.");

    } catch (error) {
        console.error(error);
        showMessage("The database could not be reset. Refresh the page to restore it.");
    }
}


/* ================================================================
   10. LESSON SIDEBAR
   ================================================================ */

function renderLessonSidebar() {
    const list = sqlElement("lessonList");
    if (!list) return;

    list.innerHTML = "";

    const groups = {};

    SQL_LESSONS.forEach((lesson, index) => {
        if (!groups[lesson.section]) groups[lesson.section] = [];

        groups[lesson.section].push({
            ...lesson,
            index
        });
    });

    Object.entries(groups).forEach(([sectionName, lessons]) => {
        const group = document.createElement("div");
        group.className = "lesson-group";

        const heading = document.createElement("button");
        heading.type = "button";
        heading.className = "lesson-group-heading";
        heading.setAttribute("aria-expanded", "true");

        heading.innerHTML = `
            <span class="group-heading-copy">
                <span class="group-title">${escapeHTML(sectionName)}</span>
                <span class="group-count">${lessons.length} LESSONS</span>
            </span>
            <span class="group-chevron">⌄</span>
        `;

        const lessonContainer = document.createElement("div");
        lessonContainer.className = "lesson-group-items";

        lessons.forEach((lesson) => {
            const button = document.createElement("button");

            button.type = "button";
            button.className = "lesson-item";
            button.dataset.index = lesson.index;

            const isComplete = completedLessons.has(lesson.id);

            button.innerHTML = `
                <span class="lesson-item-number">
                    ${isComplete ? "✓" : String(lesson.id).padStart(2, "0")}
                </span>
                <span class="lesson-item-copy">
                    <span class="lesson-item-title">${escapeHTML(lesson.title)}</span>
                    <span class="lesson-item-duration">${escapeHTML(lesson.duration)}</span>
                </span>
                <span class="lesson-item-status">${isComplete ? "✓" : ""}</span>
            `;

            if (lesson.index === currentLessonIndex) {
                button.classList.add("active");
                button.setAttribute("aria-current", "step");
            }

            if (isComplete) button.classList.add("completed");

            button.addEventListener("click", () => {
                navigateToLesson(lesson.index);
            });

            lessonContainer.appendChild(button);
        });

        heading.addEventListener("click", () => {
            const isExpanded =
                heading.getAttribute("aria-expanded") === "true";

            heading.setAttribute("aria-expanded", String(!isExpanded));

            lessonContainer.hidden = isExpanded;

            heading.classList.toggle("group-collapsed", isExpanded);
        });

        group.appendChild(heading);
        group.appendChild(lessonContainer);

        list.appendChild(group);
    });

    const loading = sqlElement("sidebarLoading");
    if (loading) loading.remove();

    const sidebarCount = sqlElement("sidebarLessonCount");
    const heroCount = sqlElement("heroLessonCount");

    if (sidebarCount) sidebarCount.textContent = SQL_LESSONS.length + " lessons";
    if (heroCount) heroCount.textContent = SQL_LESSONS.length;
}


/* ================================================================
   11. DISPLAY A LESSON
   ================================================================ */

function renderCurrentLesson() {
    const lesson = SQL_LESSONS[currentLessonIndex];
    if (!lesson) return;

    const setText = (id, value) => {
        const element = sqlElement(id);
        if (element) element.textContent = value;
    };

    setText("lessonCategory", lesson.section);
    setText("lessonNumber", "LESSON " + String(lesson.id).padStart(2, "0"));
    setText("lessonDuration", lesson.duration);
    setText("lessonTitle", lesson.title);
    setText("lessonSubtitle", lesson.subtitle);
    setText("lessonTip", lesson.tip);

    const explanation = sqlElement("lessonExplanation");
    if (explanation) explanation.innerHTML = lesson.explanation;

    const exampleCode = sqlElement("exampleCode");
    if (exampleCode) exampleCode.textContent = lesson.example;

    updateExampleLineNumbers(lesson.example);

    const exampleOutput = sqlElement("exampleOutput");

    if (exampleOutput) {
        exampleOutput.innerHTML = `
            <div class="empty-output">
                <span class="empty-output-icon">▤</span>
                <p>Run the example to see the results.</p>
            </div>
        `;
    }

    setOutputStatus("exampleOutputStatus", "READY");

    const isComplete = completedLessons.has(lesson.id);
    const badge = sqlElement("lessonCompletionBadge");

    if (badge) {
        badge.innerHTML = isComplete
            ? "<span>✓</span><span>Completed</span>"
            : "<span>○</span><span>In progress</span>";

        badge.classList.toggle("completed", isComplete);
    }

    const completeButton = sqlElement("completeButton");

    if (completeButton) {
        completeButton.disabled = isComplete;
        completeButton.innerHTML = isComplete
            ? 'Completed <span>✓</span>'
            : 'Mark as Complete <span>✓</span>';
    }

    const previousButton = sqlElement("previousButton");
    const nextButton = sqlElement("nextButton");

    if (previousButton) {
        previousButton.disabled = currentLessonIndex === 0;
    }

    if (nextButton) {
        nextButton.disabled = currentLessonIndex === SQL_LESSONS.length - 1;

        nextButton.innerHTML =
            currentLessonIndex === SQL_LESSONS.length - 1
                ? 'Course Complete <span>✓</span>'
                : 'Next Lesson <span>→</span>';
    }

    renderChallenge(lesson);
    renderLessonSidebar();
    updateProgressUI();

    saveSQLProgress();
}

function navigateToLesson(index) {
    if (index < 0 || index >= SQL_LESSONS.length) return;

    currentLessonIndex = index;

    renderCurrentLesson();

    const workspace = sqlElement("lessonWorkspace");

    if (workspace) {
        workspace.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    announce("Opened lesson " + (index + 1) + ": " + SQL_LESSONS[index].title);
}

function startLearning() {
    const workspace = sqlElement("lessonWorkspace");

    if (workspace) {
        workspace.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    const editor = sqlElement("codeEditor");
    if (editor && sqlEngineReady) {
        // Leave the practice editor empty.
        editor.value = "";
        updateEditorLineNumbers();
    }
}


/* ================================================================
   12. LESSON PROGRESS AND XP
   ================================================================ */

function completeCurrentLesson() {
    const lesson = SQL_LESSONS[currentLessonIndex];

    if (!lesson) return;

    if (completedLessons.has(lesson.id)) {
        showMessage("You have already completed this lesson.");
        return;
    }

    completedLessons.add(lesson.id);
    totalXP += SQL_LESSON_XP;

    saveSQLProgress();
    renderCurrentLesson();

    showMessage("Lesson completed! +" + SQL_LESSON_XP + " XP earned.");

    announce("Lesson completed. You earned " + SQL_LESSON_XP + " XP.");

    if (completedLessons.size === SQL_TOTAL_LESSONS) {
        window.setTimeout(() => {
            showMessage("Congratulations! All 50 lessons are complete. Your certificate is unlocked.");
            updateCertificateButton();
        }, 400);
    }
}

function updateProgressUI() {
    const completedCount = completedLessons.size;
    const percent = Math.round(
        (completedCount / Math.max(1, SQL_LESSONS.length)) * 100
    );

    const setText = (id, value) => {
        const element = sqlElement(id);
        if (element) element.textContent = value;
    };

    setText("progressPercent", percent + "%");
    setText("completedText", completedCount + " lessons completed");
    setText("xpCount", totalXP);
    setText("heroXP", totalXP + " XP");
    setText("heroCompleted", completedCount + " lessons");

    const fill = sqlElement("progressFill");
    if (fill) fill.style.width = percent + "%";

    const track = sqlElement("progressTrack");
    if (track) track.setAttribute("aria-valuenow", String(percent));

    updateCertificateButton();
}

function showMessage(message) {
    const element = sqlElement("lessonMessage");
    if (!element) return;

    element.textContent = message;
    element.classList.add("message-visible");

    window.clearTimeout(showMessage.timer);

    showMessage.timer = window.setTimeout(() => {
        element.classList.remove("message-visible");
    }, 4500);
}

function announce(message) {
    const element = sqlElement("liveAnnouncement");
    if (element) element.textContent = message;
}


/* ================================================================
   13. CHALLENGES
   ================================================================ */

function renderChallenge(lesson) {
    const title = sqlElement("challengeTitle");
    const text = sqlElement("challengeText");
    const feedback = sqlElement("challengeFeedback");

    if (title) title.textContent = "Challenge " + lesson.id + ": " + lesson.title;
    if (text) text.textContent = lesson.challenge;

    if (feedback) {
        feedback.textContent = completedChallenges.has(lesson.id)
            ? "✓ Challenge completed — you have already earned its XP."
            : "Write your answer in the practice editor, run it, then check your challenge.";
    }

    let button = sqlElement("checkChallengeButton");

    if (!button) {
        button = document.createElement("button");
        button.type = "button";
        button.id = "checkChallengeButton";
        button.className = "primary-button";
        button.textContent = "Check Challenge";

        const content = sqlElement("challengeSection");

        if (content) content.appendChild(button);

        button.addEventListener("click", checkCurrentChallenge);
    }

    button.disabled = completedChallenges.has(lesson.id);
    button.textContent = completedChallenges.has(lesson.id)
        ? "Challenge Completed ✓"
        : "Check Challenge";
}

function normalizeSQL(value) {
    return value
        .toUpperCase()
        .replace(/--[^\n]*/g, "")
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function checkCurrentChallenge() {
    const lesson = SQL_LESSONS[currentLessonIndex];
    const editor = sqlElement("codeEditor");
    const feedback = sqlElement("challengeFeedback");

    if (!lesson || !editor || !feedback) return;

    if (completedChallenges.has(lesson.id)) {
        feedback.textContent = "You have already completed this challenge.";
        return;
    }

    const query = editor.value.trim();

    if (!query) {
        feedback.textContent = "Write your SQL solution in the practice editor first.";
        return;
    }

    if (!sqlEngineReady) {
        feedback.textContent = "The SQL engine is not ready yet.";
        return;
    }

    try {
        // The challenge query must execute successfully.
        // Run inside a savepoint to avoid permanently applying changes
        // just because the learner checks an answer.
        sqlDatabase.run("SAVEPOINT elomcode_challenge_check;");

        let results;

        try {
            results = sqlDatabase.exec(query);
        } finally {
            sqlDatabase.run("ROLLBACK TO elomcode_challenge_check;");
            sqlDatabase.run("RELEASE elomcode_challenge_check;");
        }

        const normalized = normalizeSQL(query);

        const requirements = lesson.required || [];

        const missing = requirements.filter(
            requirement =>
                !normalized.includes(normalizeSQL(requirement))
        );

        if (missing.length > 0) {
            feedback.textContent =
                "Your SQL runs, but it may not meet every requirement yet. Review the challenge and try again.";
            return;
        }

        completedChallenges.add(lesson.id);
        totalXP += SQL_CHALLENGE_XP;

        saveSQLProgress();
        updateProgressUI();

        feedback.textContent =
            "Excellent! Your SQL runs and includes the required elements. +" +
            SQL_CHALLENGE_XP + " XP earned.";

        const button = sqlElement("checkChallengeButton");

        if (button) {
            button.disabled = true;
            button.textContent = "Challenge Completed ✓";
        }

        showMessage("Challenge completed! +" + SQL_CHALLENGE_XP + " XP earned.");

    } catch (error) {
        feedback.textContent =
            "Your query needs attention: " + (error.message || String(error));
    }
}


/* ================================================================
   14. CERTIFICATE SYSTEM
   ================================================================ */

function updateCertificateButton() {
    const button = sqlElement("certificateButton");
    const text = sqlElement("certificateButtonText");
    const lock = sqlElement("certificateLock");

    const unlocked = completedLessons.size === SQL_TOTAL_LESSONS;

    if (button) button.disabled = !unlocked;
    if (text) text.textContent = unlocked ? "View Certificate" : "Certificate Locked";
    if (lock) lock.textContent = unlocked ? "✓" : "🔒";
}

function openCertificateModal() {
    if (completedLessons.size !== SQL_TOTAL_LESSONS) {
        showMessage("Complete all 50 lessons to unlock your certificate.");
        return;
    }

    const backdrop = sqlElement("modalBackdrop");
    const modal = sqlElement("certificateModal");

    if (backdrop) backdrop.hidden = false;
    if (modal) modal.hidden = false;

    const nameInput = sqlElement("learnerName");

    if (nameInput) nameInput.value = currentLearnerName;

    const form = sqlElement("certificateForm");
    const card = sqlElement("certificateCard");
    const actions = sqlElement("certificateActions");

    if (currentLearnerName) {
        generateCertificate(false);
    } else {
        if (form) form.hidden = false;
        if (card) card.hidden = true;
        if (actions) actions.hidden = true;
    }

    if (nameInput && !currentLearnerName) {
        window.setTimeout(() => nameInput.focus(), 100);
    }
}

function closeCertificateModal() {
    const backdrop = sqlElement("modalBackdrop");
    const modal = sqlElement("certificateModal");

    if (backdrop) backdrop.hidden = true;
    if (modal) modal.hidden = true;
}

function generateCertificate(showErrors = true) {
    if (completedLessons.size !== SQL_TOTAL_LESSONS) {
        if (showErrors) {
            setCertificateMessage("Complete all lessons before generating your certificate.");
        }
        return;
    }

    const nameInput = sqlElement("learnerName");
    const name = nameInput ? nameInput.value.trim() : currentLearnerName;

    if (!name) {
        if (showErrors) setCertificateMessage("Please enter your name.");
        return;
    }

    currentLearnerName = name;

    saveSQLProgress();

    const printedName = sqlElement("printedLearnerName");
    const lessons = sqlElement("certificateLessons");
    const xp = sqlElement("certificateXP");

    if (printedName) printedName.textContent = name;
    if (lessons) lessons.textContent = SQL_TOTAL_LESSONS + " / " + SQL_TOTAL_LESSONS;
    if (xp) xp.textContent = totalXP + " XP";

    const form = sqlElement("certificateForm");
    const card = sqlElement("certificateCard");
    const actions = sqlElement("certificateActions");

    if (form) form.hidden = true;
    if (card) card.hidden = false;
    if (actions) actions.hidden = false;

    setCertificateMessage("");
}

function setCertificateMessage(message) {
    const element = sqlElement("certificateFormMessage");
    if (element) element.textContent = message;
}

function editCertificateName() {
    const form = sqlElement("certificateForm");
    const card = sqlElement("certificateCard");
    const actions = sqlElement("certificateActions");
    const nameInput = sqlElement("learnerName");

    if (form) form.hidden = false;
    if (card) card.hidden = true;
    if (actions) actions.hidden = true;

    if (nameInput) {
        nameInput.value = currentLearnerName;
        nameInput.focus();
    }
}

function printCertificate() {
    if (completedLessons.size !== SQL_TOTAL_LESSONS || !currentLearnerName) {
        showMessage("Generate your certificate first.");
        return;
    }

    document.body.classList.add("printing-certificate");

    window.print();

    window.setTimeout(() => {
        document.body.classList.remove("printing-certificate");
    }, 1000);
}


/* ================================================================
   15. SIDEBAR CONTROLS
   ================================================================ */

function toggleSidebar() {
    const sidebar = sqlElement("lessonSidebar");
    const layout = sqlElement("courseLayout");

    if (!sidebar) return;

    sidebar.classList.toggle("sidebar-open");
    sidebar.classList.toggle("sidebar-collapsed");

    if (layout) layout.classList.toggle("sidebar-expanded");
}


/* ================================================================
   16. BACKGROUND PARTICLES
   ================================================================ */

function createSQLParticles() {
    const container = sqlElement("particles");
    if (!container) return;

    container.innerHTML = "";

    const count = window.innerWidth < 700 ? 18 : 35;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement("span");

        particle.className = "sql-particle";

        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 8 + "s";
        particle.style.animationDuration = (6 + Math.random() * 9) + "s";
        particle.style.opacity = String(0.15 + Math.random() * 0.45);

        container.appendChild(particle);
    }
}


/* ================================================================
   17. BUTTON AND KEYBOARD EVENTS
   ================================================================ */

function bindSQLControls() {
    const bind = (id, eventName, callback) => {
        const element = sqlElement(id);
        if (element) element.addEventListener(eventName, callback);
    };

    bind("startLearningButton", "click", startLearning);
    bind("runExampleButton", "click", runCurrentExample);
    bind("runCodeButton", "click", runPracticeQuery);
    bind("clearEditorButton", "click", clearEditor);
    bind("resetDatabaseButton", "click", resetSampleDatabase);
    bind("completeButton", "click", completeCurrentLesson);
    bind("certificateButton", "click", openCertificateModal);
    bind("closeModalButton", "click", closeCertificateModal);
    bind("modalBackdrop", "click", closeCertificateModal);
    bind("generateCertificateButton", "click", () => generateCertificate(true));
    bind("editCertificateNameButton", "click", editCertificateName);
    bind("printCertificateButton", "click", printCertificate);
    bind("toggleSidebarButton", "click", toggleSidebar);

    bind("previousButton", "click", () => {
        navigateToLesson(currentLessonIndex - 1);
    });

    bind("nextButton", "click", () => {
        if (currentLessonIndex < SQL_LESSONS.length - 1) {
            navigateToLesson(currentLessonIndex + 1);
        } else {
            showMessage("You have reached the final lesson. Complete any remaining lessons to unlock your certificate.");
        }
    });

    bind("codeEditor", "input", markEditorChanged);

    bind("codeEditor", "scroll", () => {
        const editor = sqlElement("codeEditor");
        const numbers = sqlElement("editorLineNumbers");

        if (editor && numbers) numbers.scrollTop = editor.scrollTop;
    });

    bind("codeEditor", "keydown", (event) => {
        if (event.key === "Tab") {
            event.preventDefault();

            const editor = event.target;
            const start = editor.selectionStart;
            const end = editor.selectionEnd;

            editor.setRangeText("    ", start, end, "end");

            markEditorChanged();
        }

        if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
            event.preventDefault();
            runPracticeQuery();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeCertificateModal();
        }
    });
}


/* ================================================================
   18. RESET DATABASE SUPPORT
   ================================================================ */

/*
   Store the SQL.js constructor so the reset button can create a
   fresh in-memory database.
*/

const originalInitializeSQLEngine = initializeSQLEngine;

initializeSQLEngine = async function () {
    showEngineOverlay();

    updateEngineStatus("Initializing SQLite...", false);

    try {
        if (typeof initSqlJs !== "function") {
            throw new Error(
                "The SQLite library did not load. Check your internet connection and refresh."
            );
        }

        const SQL = await initSqlJs({
            locateFile: file =>
                "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/" + file
        });

        window.SQL = SQL;

        sqlDatabase = new SQL.Database();

        createSampleDatabase();

        sqlEngineReady = true;
        sqlEngineError = false;

        updateEngineStatus("SQLite engine ready", true);

        hideEngineOverlay();

        renderCurrentLesson();
        updateProgressUI();

    } catch (error) {
        console.error("SQL engine initialization failed:", error);

        sqlEngineReady = false;
        sqlEngineError = true;

        updateEngineStatus("SQL engine unavailable", false, true);

        const message = sqlElement("engineLoadingMessage");

        if (message) {
            message.textContent =
                "Could not load SQLite. Check your internet connection, then refresh this page.";
        }

        const output = sqlElement("exampleOutput");

        if (output) {
            renderQueryError(error, output);
        }
    }
};


/* ================================================================
   19. APPLICATION STARTUP
   ================================================================ */

function initializeSQLCourse() {
    prepareLessons();

    loadSQLProgress();

    bindSQLControls();

    createSQLParticles();

    updateEditorLineNumbers();

    renderLessonSidebar();

    updateProgressUI();

    initializeSQLEngine();
}

document.addEventListener("DOMContentLoaded", initializeSQLCourse);