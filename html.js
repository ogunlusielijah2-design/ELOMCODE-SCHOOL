/* ============================================================
   ELOMCODE SCHOOL
   HTML MASTERCLASS — COMPLETE COURSE ENGINE
   Architect: Elijah Opomulero

   FEATURES:
   - 40 complete HTML lessons
   - Dynamic lesson navigation
   - Topic-specific explanations and examples
   - Live HTML example preview
   - Independent practice editor
   - Practice preview
   - Lesson challenges and checking
   - XP and lesson completion
   - Local progress storage
   - Responsive sidebar controls
   - Keyboard shortcuts
   - No certificate functionality
============================================================ */

"use strict";


/* ============================================================
   1. COURSE CONFIGURATION
============================================================ */

const STORAGE_KEY = "elomcode_html_course_progress";
const XP_PER_LESSON = 25;
const TOTAL_LESSONS = 40;

const $ = (id) => document.getElementById(id);


/* ============================================================
   2. LESSON DATABASE
============================================================ */

const lessons = [

    // ==================== FOUNDATIONS ====================

    {
        category: "Foundations",
        title: "What Is HTML?",
        subtitle: "Understand the language behind every webpage.",
        explanation: `
            <p><strong>HTML</strong> stands for HyperText Markup Language. It is the standard markup language used to structure content on websites.</p>
            <p>HTML tells a browser what different parts of a webpage represent. For example, it identifies headings, paragraphs, images, links, lists and buttons.</p>
            <p>HTML is not a programming language because it does not perform logical operations by itself. Instead, it provides the structure of a webpage.</p>
            <h3>Why is HTML important?</h3>
            <ul>
                <li>It provides the structure of websites.</li>
                <li>It organizes webpage content.</li>
                <li>It works together with CSS and JavaScript.</li>
                <li>It is one of the foundations of web development.</li>
            </ul>
        `,
        tip: "Think of HTML as the skeleton of a webpage. CSS provides its appearance, while JavaScript adds interaction.",
        example: `<h1>Welcome to My Website</h1>
<p>I am learning HTML at ELOMCODE School.</p>
<button>Get Started</button>`,
        challengeTitle: "Build Your First Webpage",
        challengeText: "Create a webpage containing a heading, a paragraph and a button.",
        required: ["<h1", "<p", "<button"]
    },

    {
        category: "Foundations",
        title: "HTML Documents",
        subtitle: "Learn the standard structure of an HTML document.",
        explanation: `
            <p>An HTML document follows a standard structure that helps browsers understand and display webpage content correctly.</p>
            <p>The <code>&lt;!DOCTYPE html&gt;</code> declaration tells the browser that the document uses HTML5.</p>
            <p>The <code>&lt;html&gt;</code> element contains the entire document. Inside it are the <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code> sections.</p>
            <p>The head contains information about the document, while the body contains the visible webpage content.</p>
        `,
        tip: "Always begin a new HTML document with the HTML5 doctype declaration.",
        example: `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is my webpage.</p>
</body>
</html>`,
        challengeTitle: "Create an HTML Document",
        challengeText: "Write a complete HTML document containing the doctype, html, head, title and body elements.",
        required: ["<!doctype html", "<html", "<head", "<title", "<body"]
    },

    {
        category: "Foundations",
        title: "HTML Elements",
        subtitle: "Understand how HTML elements are created.",
        explanation: `
            <p>An HTML element is usually made up of an opening tag, content and a closing tag.</p>
            <p>For example, <code>&lt;p&gt;Hello&lt;/p&gt;</code> is a paragraph element.</p>
            <p>The opening tag identifies where the element begins, while the closing tag identifies where it ends.</p>
            <p>Some HTML elements are empty elements and do not require closing tags, such as <code>&lt;br&gt;</code> and <code>&lt;img&gt;</code>.</p>
        `,
        tip: "An HTML tag is not exactly the same as an HTML element. The element includes the tag and its content.",
        example: `<h1>My Introduction</h1>
<p>My name is Elijah.</p>
<p>I am learning web development.</p>`,
        challengeTitle: "Create Different Elements",
        challengeText: "Create one heading element and two paragraph elements.",
        required: ["<h1", "<p"]
    },

    {
        category: "Foundations",
        title: "HTML Tags",
        subtitle: "Explore opening, closing and empty tags.",
        explanation: `
            <p>HTML tags are keywords enclosed in angle brackets. They tell the browser how to interpret different pieces of content.</p>
            <p>Most HTML elements have an opening tag and a closing tag. A closing tag contains a forward slash before the tag name.</p>
            <p>For example, <code>&lt;strong&gt;</code> opens a strong element, while <code>&lt;/strong&gt;</code> closes it.</p>
            <p>Empty elements, such as <code>&lt;br&gt;</code>, do not wrap around content.</p>
        `,
        tip: "Make sure you close elements properly. Incorrectly nested tags can cause unexpected results.",
        example: `<p>This is a paragraph.</p>
<strong>This text is important.</strong>
<br>
<em>This text is emphasized.</em>`,
        challengeTitle: "Practise HTML Tags",
        challengeText: "Create a paragraph, a strong element, an emphasized element and a line break.",
        required: ["<p", "<strong", "<em", "<br"]
    },

    {
        category: "Foundations",
        title: "Headings",
        subtitle: "Organize webpage content using heading levels.",
        explanation: `
            <p>HTML provides six heading elements, ranging from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>.</p>
            <p><code>&lt;h1&gt;</code> represents the highest-level heading, while <code>&lt;h6&gt;</code> represents the lowest-level heading.</p>
            <p>Headings help organize information into meaningful sections. They also improve accessibility and make webpages easier to understand.</p>
            <p>Use headings according to the structure of your content, not simply because of their default sizes.</p>
        `,
        tip: "A webpage should normally have one clear main heading. Use lower heading levels to organize subsections.",
        example: `<h1>Web Development</h1>
<h2>Frontend Development</h2>
<h3>HTML</h3>
<h3>CSS</h3>
<h2>Backend Development</h2>
<h3>Server-side Programming</h3>`,
        challengeTitle: "Create a Heading Structure",
        challengeText: "Create an h1 heading, an h2 heading and an h3 heading.",
        required: ["<h1", "<h2", "<h3"]
    },

    {
        category: "Foundations",
        title: "Paragraphs",
        subtitle: "Display written content using paragraph elements.",
        explanation: `
            <p>The HTML paragraph element is represented by the <code>&lt;p&gt;</code> tag.</p>
            <p>It is used to group related sentences into a paragraph. Browsers normally display paragraphs with some space before and after them.</p>
            <p>Paragraphs help make written information easier to read and organize.</p>
        `,
        tip: "Use a separate paragraph element for each distinct paragraph instead of placing all your writing inside one large element.",
        example: `<h1>About Me</h1>

<p>My name is Elijah.</p>

<p>I am a student learning computer science.</p>

<p>I enjoy creating websites.</p>`,
        challengeTitle: "Write Your Introduction",
        challengeText: "Create a heading and at least two paragraphs introducing yourself.",
        required: ["<h1", "<p"]
    },

    {
        category: "Foundations",
        title: "Line Breaks",
        subtitle: "Move content to a new line.",
        explanation: `
            <p>The <code>&lt;br&gt;</code> element inserts a line break within text.</p>
            <p>Unlike paragraphs, line breaks do not create a new paragraph with additional spacing.</p>
            <p>They are useful when the line arrangement itself is meaningful, such as in addresses or poems.</p>
            <p>The br element is an empty element, so it does not require a closing tag.</p>
        `,
        tip: "Do not use repeated br elements to create large spaces between sections. CSS is better for controlling spacing.",
        example: `<h2>My Address</h2>

<p>
12 Unity Street<br>
Osogbo<br>
Osun State<br>
Nigeria
</p>`,
        challengeTitle: "Create an Address",
        challengeText: "Write an address using at least two line breaks.",
        required: ["<p", "<br"]
    },

    {
        category: "Foundations",
        title: "HTML Comments",
        subtitle: "Write notes inside your HTML code.",
        explanation: `
            <p>HTML comments allow developers to write notes inside their code.</p>
            <p>A comment begins with <code>&lt;!--</code> and ends with <code>--&gt;</code>.</p>
            <p>Browsers do not display comments as normal webpage content. They are useful for explaining sections of code or temporarily documenting work.</p>
            <p>Comments are still visible to anyone who views the page source, so they should not contain passwords or private information.</p>
        `,
        tip: "Write comments that explain why something is done, especially when the reason may not be obvious.",
        example: `<!-- Main page heading -->
<h1>Welcome to My Website</h1>

<!-- Introduction section -->
<p>This is my first webpage.</p>`,
        challengeTitle: "Add Comments to Your Page",
        challengeText: "Write an HTML comment above a heading and add a paragraph below it.",
        required: ["<!--", "-->", "<h1", "<p"]
    },

    {
        category: "Foundations",
        title: "Text Formatting",
        subtitle: "Emphasize and format webpage text.",
        explanation: `
            <p>HTML provides elements for giving text different meanings and emphasis.</p>
            <p>The <code>&lt;strong&gt;</code> element indicates strong importance, while <code>&lt;em&gt;</code> indicates emphasis.</p>
            <p>The <code>&lt;b&gt;</code> element draws attention to text without adding importance, while <code>&lt;i&gt;</code> represents text in an alternate voice or mood.</p>
            <p>Other useful elements include <code>&lt;mark&gt;</code>, <code>&lt;small&gt;</code>, <code>&lt;del&gt;</code> and <code>&lt;ins&gt;</code>.</p>
        `,
        tip: "Choose formatting elements based on the meaning of the content, not just their appearance.",
        example: `<p><strong>Important:</strong> Read the instructions.</p>
<p><em>Never stop learning.</em></p>
<p>This is <mark>highlighted text</mark>.</p>
<p>Old price: <del>₦5,000</del></p>
<p>New price: <ins>₦4,000</ins></p>`,
        challengeTitle: "Format Your Text",
        challengeText: "Create text using strong, em and mark elements.",
        required: ["<strong", "<em", "<mark"]
    },

    {
        category: "Foundations",
        title: "Introduction to Lists",
        subtitle: "Organize information into readable lists.",
        explanation: `
            <p>HTML lists are used to organize related information into groups.</p>
            <p>There are three common types: ordered lists, unordered lists and description lists.</p>
            <p>Ordered lists use numbers or letters. Unordered lists use bullet points. Description lists are used for terms and their descriptions.</p>
            <p>List items are normally placed inside the <code>&lt;li&gt;</code> element.</p>
        `,
        tip: "Choose the list type according to whether the order of the items matters.",
        example: `<h2>My Skills</h2>

<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>`,
        challengeTitle: "Create a Skills List",
        challengeText: "Create an unordered list containing at least three items.",
        required: ["<ul", "<li"]
    },


    // ==================== STRUCTURE ====================

    {
        category: "Structure",
        title: "Ordered Lists",
        subtitle: "Create numbered lists in HTML.",
        explanation: `
            <p>An ordered list uses the <code>&lt;ol&gt;</code> element to display items in a specific sequence.</p>
            <p>Each item is placed inside an <code>&lt;li&gt;</code> element.</p>
            <p>Ordered lists are useful for instructions, rankings, procedures and any information where sequence matters.</p>
            <p>The type attribute can change the numbering style.</p>
        `,
        tip: "Use ordered lists when readers need to follow a particular order.",
        example: `<h2>Steps to Build a Website</h2>

<ol>
    <li>Plan the website.</li>
    <li>Write the HTML.</li>
    <li>Style with CSS.</li>
    <li>Add JavaScript.</li>
</ol>`,
        challengeTitle: "Create a Numbered List",
        challengeText: "Create an ordered list with at least three steps.",
        required: ["<ol", "<li"]
    },

    {
        category: "Structure",
        title: "HTML Links",
        subtitle: "Connect webpages using hyperlinks.",
        explanation: `
            <p>HTML links allow users to move from one webpage or resource to another.</p>
            <p>The anchor element, written as <code>&lt;a&gt;</code>, creates a hyperlink.</p>
            <p>The <code>href</code> attribute specifies the destination of the link.</p>
            <p>You can link to another webpage, a section on the same page, an email address or an external website.</p>
        `,
        tip: "Use meaningful link text so users can understand where a link will take them.",
        example: `<h2>Useful Website</h2>

<a href="https://www.example.com">
    Visit Example Website
</a>

<br>

<a href="#about">Go to About Section</a>

<h2 id="about">About</h2>
<p>This is the about section.</p>`,
        challengeTitle: "Create Your First Links",
        challengeText: "Create an external link and another link pointing to a section using an ID.",
        required: ["<a", "href=", "id="]
    },

    {
        category: "Structure",
        title: "HTML Images",
        subtitle: "Display images on webpages.",
        explanation: `
            <p>The HTML <code>&lt;img&gt;</code> element is used to display images on a webpage.</p>
            <p>The <code>src</code> attribute specifies the image location, while the <code>alt</code> attribute provides alternative text.</p>
            <p>Images can be stored locally in your project or loaded from an online location.</p>
            <p>The img element is an empty element and does not require a closing tag.</p>
        `,
        tip: "Always provide meaningful alternative text for images that communicate important information.",
        example: `<h2>My Favourite Image</h2>

<img
    src="https://placehold.co/400x220"
    alt="A sample landscape image"
    width="400"
>`,
        challengeTitle: "Display an Image",
        challengeText: "Add an image using the img element with src and alt attributes.",
        required: ["<img", "src=", "alt="]
    },

    {
        category: "Structure",
        title: "Image Attributes",
        subtitle: "Control image information and dimensions.",
        explanation: `
            <p>HTML image attributes provide additional information and control over an image.</p>
            <p>The <code>src</code> attribute identifies the image source. The <code>alt</code> attribute provides alternative text.</p>
            <p>The <code>width</code> and <code>height</code> attributes specify image dimensions.</p>
            <p>Images can also use attributes such as loading to control when the browser loads them.</p>
        `,
        tip: "For responsive websites, CSS is usually the best place to control how images scale on different screens.",
        example: `<img
    src="https://placehold.co/500x300"
    alt="A sample image"
    width="500"
    height="300"
    loading="lazy"
>`,
        challengeTitle: "Configure an Image",
        challengeText: "Create an image with src, alt, width and height attributes.",
        required: ["<img", "src=", "alt=", "width=", "height="]
    },

    {
        category: "Structure",
        title: "Div Elements",
        subtitle: "Group webpage content into containers.",
        explanation: `
            <p>The <code>&lt;div&gt;</code> element is a general-purpose container used to group other HTML elements.</p>
            <p>It has no special meaning by itself. Developers commonly use it to organize webpage layouts and apply CSS styles.</p>
            <p>A div can contain headings, paragraphs, images, buttons and other elements.</p>
            <p>Use semantic elements when they describe the meaning of a section more clearly.</p>
        `,
        tip: "Do not use div elements for everything. Semantic HTML can make your structure clearer.",
        example: `<div>
    <h2>About Our School</h2>
    <p>We help students learn technology.</p>
    <button>Learn More</button>
</div>`,
        challengeTitle: "Build a Content Container",
        challengeText: "Create a div containing a heading and a paragraph.",
        required: ["<div", "</div>", "<h2", "<p"]
    },

    {
        category: "Structure",
        title: "Semantic HTML",
        subtitle: "Give meaning to different parts of your webpage.",
        explanation: `
            <p>Semantic HTML uses elements that clearly describe the purpose of the content they contain.</p>
            <p>Examples include <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code> and <code>&lt;footer&gt;</code>.</p>
            <p>Semantic elements help browsers, search engines and assistive technologies understand webpage structure.</p>
            <p>They also make HTML code easier for developers to read and maintain.</p>
        `,
        tip: "Use an element because of what its content represents, not merely because of how it looks.",
        example: `<header>
    <h1>My Website</h1>
</header>

<nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
</nav>

<main>
    <section>
        <h2>Welcome</h2>
        <p>Welcome to my website.</p>
    </section>
</main>

<footer>
    <p>Copyright 2026</p>
</footer>`,
        challengeTitle: "Create a Semantic Layout",
        challengeText: "Build a page using header, nav, main, section and footer.",
        required: ["<header", "<nav", "<main", "<section", "<footer"]
    },

    {
        category: "Structure",
        title: "The Header Element",
        subtitle: "Create introductory sections for webpages.",
        explanation: `
            <p>The <code>&lt;header&gt;</code> element represents introductory content for a webpage or a particular section.</p>
            <p>It commonly contains a logo, heading, introductory text or navigation.</p>
            <p>A webpage can have a main header, and individual sections or articles can also have their own headers.</p>
        `,
        tip: "A header element does not automatically mean the topmost part of the entire webpage. It can belong to a section or article.",
        example: `<header>
    <h1>ELOMCODE School</h1>
    <p>Learn. Code. Build. Become.</p>
</header>`,
        challengeTitle: "Build a Website Header",
        challengeText: "Create a header containing a heading and introductory paragraph.",
        required: ["<header", "<h1", "<p"]
    },

    {
        category: "Structure",
        title: "Navigation Elements",
        subtitle: "Build meaningful navigation areas.",
        explanation: `
            <p>The <code>&lt;nav&gt;</code> element represents a section containing important navigation links.</p>
            <p>It is commonly used for website menus, navigation bars and links to major sections.</p>
            <p>Not every group of links needs a nav element. It is best reserved for significant navigation areas.</p>
        `,
        tip: "Make navigation labels clear and descriptive. Visitors should understand where each link leads.",
        example: `<nav>
    <a href="#home">Home</a>
    <a href="#courses">Courses</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
</nav>

<section id="courses">
    <h2>Our Courses</h2>
</section>`,
        challengeTitle: "Create a Navigation Menu",
        challengeText: "Create a nav element containing at least three links.",
        required: ["<nav", "<a", "href="]
    },

    {
        category: "Structure",
        title: "The Main Element",
        subtitle: "Identify the primary content of a webpage.",
        explanation: `
            <p>The <code>&lt;main&gt;</code> element represents the dominant content of a webpage.</p>
            <p>It should contain information that is unique to the main purpose of that page.</p>
            <p>Content that is repeated across multiple pages, such as site navigation and footers, normally belongs outside the main element.</p>
            <p>A document should generally have only one visible main element.</p>
        `,
        tip: "Use main to make the primary content of your page easy to identify.",
        example: `<header>
    <h1>My Portfolio</h1>
</header>

<main>
    <h2>Welcome</h2>
    <p>This is the main content of my portfolio.</p>
</main>`,
        challengeTitle: "Create Your Main Content",
        challengeText: "Create a main element containing a heading and paragraph.",
        required: ["<main", "<h2", "<p"]
    },

    {
        category: "Structure",
        title: "Sections and Articles",
        subtitle: "Organize related content into meaningful groups.",
        explanation: `
            <p>The <code>&lt;section&gt;</code> element represents a thematic grouping of related content.</p>
            <p>The <code>&lt;article&gt;</code> element represents independent content that can make sense on its own, such as a blog post or news story.</p>
            <p>Sections usually have headings that describe their subject. Articles can also contain their own headings.</p>
            <p>Choosing between them depends on the purpose of the content.</p>
        `,
        tip: "A useful way to think about article is independent content, while section groups content around a theme.",
        example: `<section>
    <h2>Latest News</h2>

    <article>
        <h3>Technology Update</h3>
        <p>Technology continues to develop.</p>
    </article>

    <article>
        <h3>Education Update</h3>
        <p>Learning creates opportunities.</p>
    </article>
</section>`,
        challengeTitle: "Organize an Article",
        challengeText: "Create a section containing an article with a heading and paragraph.",
        required: ["<section", "<article", "<h3", "<p"]
    },


    // ==================== FORMS AND MEDIA ====================

    {
        category: "Forms and Media",
        title: "HTML Tables",
        subtitle: "Present information in rows and columns.",
        explanation: `
            <p>HTML tables are used to display structured data in rows and columns.</p>
            <p>The <code>&lt;table&gt;</code> element creates the table. The <code>&lt;tr&gt;</code> element creates a row, while <code>&lt;td&gt;</code> creates a data cell.</p>
            <p>Tables are suitable for information such as schedules, comparison data and records.</p>
            <p>They should not be used as the main tool for designing webpage layouts.</p>
        `,
        tip: "Use tables for tabular information, not for arranging the entire webpage.",
        example: `<table border="1">
    <tr>
        <td>Name</td>
        <td>Course</td>
    </tr>
    <tr>
        <td>Elijah</td>
        <td>Computer Science</td>
    </tr>
</table>`,
        challengeTitle: "Create a Data Table",
        challengeText: "Create a table with at least two rows and two data cells in each row.",
        required: ["<table", "<tr", "<td"]
    },

    {
        category: "Forms and Media",
        title: "Table Headings and Captions",
        subtitle: "Make tables easier to understand.",
        explanation: `
            <p>Table headings identify what information is contained in each column or row.</p>
            <p>The <code>&lt;th&gt;</code> element defines a header cell. The <code>&lt;caption&gt;</code> element provides a title or description for the table.</p>
            <p>The scope attribute can indicate whether a heading applies to a row or column.</p>
            <p>Proper table headings improve accessibility and make data easier to interpret.</p>
        `,
        tip: "Use th for headings and td for ordinary data cells.",
        example: `<table border="1">
    <caption>Student Records</caption>

    <tr>
        <th scope="col">Name</th>
        <th scope="col">Department</th>
    </tr>

    <tr>
        <td>Elijah</td>
        <td>Computer Science</td>
    </tr>
</table>`,
        challengeTitle: "Improve Your Table",
        challengeText: "Create a table with a caption and at least two heading cells.",
        required: ["<table", "<caption", "<th"]
    },

    {
        category: "Forms and Media",
        title: "Table Sections",
        subtitle: "Divide tables into logical parts.",
        explanation: `
            <p>HTML provides three elements for organizing table content: <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code> and <code>&lt;tfoot&gt;</code>.</p>
            <p>The thead element groups the table header rows. The tbody element groups the main data rows.</p>
            <p>The tfoot element groups summary or footer rows.</p>
            <p>These elements make complex tables easier to understand and maintain.</p>
        `,
        tip: "Use table sections to give large tables a clearer structure.",
        example: `<table border="1">
    <thead>
        <tr>
            <th>Item</th>
            <th>Price</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Book</td>
            <td>₦2,000</td>
        </tr>
    </tbody>

    <tfoot>
        <tr>
            <td>Total</td>
            <td>₦2,000</td>
        </tr>
    </tfoot>
</table>`,
        challengeTitle: "Structure a Table",
        challengeText: "Create a table containing thead, tbody and tfoot.",
        required: ["<thead", "<tbody", "<tfoot"]
    },

    {
        category: "Forms and Media",
        title: "Colspan and Rowspan",
        subtitle: "Merge table cells across columns and rows.",
        explanation: `
            <p>The colspan and rowspan attributes allow table cells to occupy more than one column or row.</p>
            <p><code>colspan</code> specifies how many columns a cell should span.</p>
            <p><code>rowspan</code> specifies how many rows a cell should span.</p>
            <p>They are useful when creating tables with grouped headings or combined information.</p>
        `,
        tip: "Plan your table structure carefully when merging cells so that the rows and columns remain correctly aligned.",
        example: `<table border="1">
    <tr>
        <th colspan="2">Student Information</th>
    </tr>
    <tr>
        <td>Name</td>
        <td>Elijah</td>
    </tr>
    <tr>
        <td rowspan="2">Department</td>
        <td>Computer Science</td>
    </tr>
    <tr>
        <td>100 Level</td>
    </tr>
</table>`,
        challengeTitle: "Merge Table Cells",
        challengeText: "Create a table that uses both colspan and rowspan.",
        required: ["<table", "colspan=", "rowspan="]
    },

    {
        category: "Forms and Media",
        title: "HTML Forms",
        subtitle: "Collect information from website visitors.",
        explanation: `
            <p>HTML forms allow websites to collect information from users.</p>
            <p>The <code>&lt;form&gt;</code> element contains controls such as text fields, buttons, checkboxes and selection menus.</p>
            <p>The action attribute specifies where form data should be sent, while the method attribute specifies how it should be submitted.</p>
            <p>HTML creates the form structure, but processing submitted data normally requires a server or application.</p>
        `,
        tip: "A form displayed in a browser does not automatically save information. Data handling requires additional functionality.",
        example: `<form action="#" method="post">
    <label for="fullname">Full Name:</label>
    <input type="text" id="fullname" name="fullname">

    <button type="submit">Submit</button>
</form>`,
        challengeTitle: "Create a Simple Form",
        challengeText: "Create a form containing a text input and a submit button.",
        required: ["<form", "<input", "type=\"text\"", "type=\"submit\""]
    },

    {
        category: "Forms and Media",
        title: "Input Elements",
        subtitle: "Explore different types of user input.",
        explanation: `
            <p>The <code>&lt;input&gt;</code> element allows users to enter or select information.</p>
            <p>The type attribute determines the kind of input control displayed.</p>
            <p>Common input types include text, password, email, number, date, file and submit.</p>
            <p>Choosing the correct input type can improve usability and browser validation.</p>
        `,
        tip: "Use email for email addresses, number for numeric input and date when users need to select a date.",
        example: `<form>
    <label>Name:</label>
    <input type="text" name="name">

    <label>Email:</label>
    <input type="email" name="email">

    <label>Age:</label>
    <input type="number" name="age">

    <label>Date:</label>
    <input type="date" name="date">
</form>`,
        challengeTitle: "Use Different Inputs",
        challengeText: "Create text, email and number input fields.",
        required: ["<input", "type=\"text\"", "type=\"email\"", "type=\"number\""]
    },

    {
        category: "Forms and Media",
        title: "Labels and Placeholders",
        subtitle: "Make form fields clearer and easier to use.",
        explanation: `
            <p>The <code>&lt;label&gt;</code> element provides a descriptive name for a form control.</p>
            <p>A label can be connected to an input using the label's for attribute and the input's matching id attribute.</p>
            <p>The placeholder attribute provides a short hint inside an input field.</p>
            <p>A placeholder should not replace a proper label because its text disappears when users enter information.</p>
        `,
        tip: "Always connect form labels to their controls whenever possible.",
        example: `<form>
    <label for="email">Email Address</label>

    <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
    >
</form>`,
        challengeTitle: "Create an Accessible Input",
        challengeText: "Create a label connected to an email input with a placeholder.",
        required: ["<label", "for=", "id=", "type=\"email\"", "placeholder="]
    },

    {
        category: "Forms and Media",
        title: "Radio Buttons and Checkboxes",
        subtitle: "Allow users to select form options.",
        explanation: `
            <p>Radio buttons and checkboxes are form controls used for selecting options.</p>
            <p>Radio buttons allow a user to select one option from a group when the controls share the same name.</p>
            <p>Checkboxes allow users to select one or more independent options.</p>
            <p>Both controls should have clear labels so users understand what they are selecting.</p>
        `,
        tip: "Use radio buttons for one choice from a group and checkboxes when multiple choices are allowed.",
        example: `<h3>Select Your Gender</h3>

<label>
    <input type="radio" name="gender" value="male">
    Male
</label>

<label>
    <input type="radio" name="gender" value="female">
    Female
</label>

<h3>Choose Your Interests</h3>

<label>
    <input type="checkbox" name="interest" value="coding">
    Coding
</label>

<label>
    <input type="checkbox" name="interest" value="design">
    Design
</label>`,
        challengeTitle: "Build Selection Controls",
        challengeText: "Create a group of radio buttons and at least one checkbox.",
        required: ["type=\"radio\"", "type=\"checkbox\"", "name="]
    },

    {
        category: "Forms and Media",
        title: "Select and Textarea",
        subtitle: "Create dropdown menus and larger text fields.",
        explanation: `
            <p>The <code>&lt;select&gt;</code> element creates a dropdown menu containing options.</p>
            <p>Each option is created using the <code>&lt;option&gt;</code> element.</p>
            <p>The <code>&lt;textarea&gt;</code> element creates a text field that can accept multiple lines of text.</p>
            <p>These elements are useful for collecting choices, comments and longer messages.</p>
        `,
        tip: "Give dropdown options meaningful values and provide a label for each form control.",
        example: `<form>
    <label for="course">Choose a course:</label>

    <select id="course" name="course">
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
    </select>

    <br><br>

    <label for="message">Your Message:</label>

    <textarea id="message" rows="4" cols="30"></textarea>
</form>`,
        challengeTitle: "Build a Selection Form",
        challengeText: "Create a dropdown with at least two options and a textarea.",
        required: ["<select", "<option", "<textarea"]
    },

    {
        category: "Forms and Media",
        title: "Form Validation",
        subtitle: "Check user input using built-in HTML features.",
        explanation: `
            <p>Form validation helps ensure that users provide information in the expected format.</p>
            <p>HTML provides attributes such as required, minlength, maxlength, min, max and pattern.</p>
            <p>The required attribute prevents a form from being submitted when a required field is empty.</p>
            <p>Browser validation improves usability, but important data must also be validated on the server.</p>
        `,
        tip: "Never rely only on browser validation for security. Server-side validation is also important.",
        example: `<form>
    <label for="username">Username:</label>

    <input
        type="text"
        id="username"
        required
        minlength="3"
        maxlength="20"
    >

    <label for="email">Email:</label>

    <input
        type="email"
        id="email"
        required
    >

    <button type="submit">Register</button>
</form>`,
        challengeTitle: "Validate a Form",
        challengeText: "Create a required email input and a text input with a minlength attribute.",
        required: ["<form", "type=\"email\"", "required", "minlength="]
    },

    {
        category: "Forms and Media",
        title: "Audio and Video",
        subtitle: "Add multimedia content to webpages.",
        explanation: `
            <p>HTML provides the audio and video elements for displaying multimedia directly on webpages.</p>
            <p>The <code>&lt;audio&gt;</code> element is used for sound, while the <code>&lt;video&gt;</code> element is used for video content.</p>
            <p>The controls attribute displays playback controls such as play, pause and volume.</p>
            <p>The source element can specify the media file and its MIME type.</p>
        `,
        tip: "Provide appropriate fallback text and consider captions for videos so more people can access the content.",
        example: `<h2>Audio Example</h2>

<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support audio.
</audio>

<h2>Video Example</h2>

<video width="400" controls>
    <source src="video.mp4" type="video/mp4">
    Your browser does not support video.
</video>`,
        challengeTitle: "Add Multimedia",
        challengeText: "Create an audio element and a video element with controls.",
        required: ["<audio", "<video", "controls"]
    },


    // ==================== ADVANCED HTML ====================

    {
        category: "Advanced HTML",
        title: "The Footer Element",
        subtitle: "Create footer sections for webpages.",
        explanation: `
            <p>The <code>&lt;footer&gt;</code> element represents footer information for a webpage or a section.</p>
            <p>It commonly contains copyright information, contact details, related links and author information.</p>
            <p>A webpage can have one main footer, and individual articles or sections can also contain their own footers.</p>
        `,
        tip: "Keep footer information relevant to the page or section it belongs to.",
        example: `<footer>
    <p>&copy; 2026 ELOMCODE School.</p>
    <p>Built for learners and future developers.</p>
    <a href="#top">Back to Top</a>
</footer>`,
        challengeTitle: "Create a Website Footer",
        challengeText: "Create a footer containing copyright information and a link.",
        required: ["<footer", "&copy;", "<a"]
    },

    {
        category: "Advanced HTML",
        title: "HTML Entities",
        subtitle: "Display reserved and special characters.",
        explanation: `
            <p>HTML entities allow special characters to be displayed in webpage content.</p>
            <p>Some characters have special meaning in HTML. For example, the less-than symbol can be interpreted as the beginning of a tag.</p>
            <p>Entities begin with an ampersand and normally end with a semicolon.</p>
            <p>Common examples include <code>&amp;lt;</code>, <code>&amp;gt;</code>, <code>&amp;amp;</code>, <code>&amp;copy;</code> and <code>&amp;nbsp;</code>.</p>
        `,
        tip: "Use entities when you need to display characters that HTML normally interprets as markup.",
        example: `<h2>HTML Entities</h2>

<p>Less than: &lt;</p>
<p>Greater than: &gt;</p>
<p>Ampersand: &amp;</p>
<p>Copyright: &copy; 2026</p>
<p>Registered: &reg;</p>`,
        challengeTitle: "Display Special Characters",
        challengeText: "Display the less-than, greater-than, ampersand and copyright characters using HTML entities.",
        required: ["&lt;", "&gt;", "&amp;", "&copy;"]
    },

    {
        category: "Advanced HTML",
        title: "The Iframe Element",
        subtitle: "Embed another webpage or document.",
        explanation: `
            <p>The <code>&lt;iframe&gt;</code> element creates an inline frame that can display another webpage or supported document inside the current page.</p>
            <p>The src attribute specifies the resource to display. The width and height attributes control the frame dimensions.</p>
            <p>Some websites restrict embedding, so not every external page can be displayed inside an iframe.</p>
            <p>Security-related attributes such as sandbox can limit what embedded content is allowed to do.</p>
        `,
        tip: "Only embed trusted content. Use iframe security options carefully, especially when displaying external resources.",
        example: `<h2>Embedded Content</h2>

<iframe
    src="https://example.com"
    width="400"
    height="250"
    title="Example Website"
>
</iframe>`,
        challengeTitle: "Create an Iframe",
        challengeText: "Create an iframe with src, width, height and title attributes.",
        required: ["<iframe", "src=", "width=", "height=", "title="]
    },

    {
        category: "Advanced HTML",
        title: "HTML Classes",
        subtitle: "Identify groups of elements for styling.",
        explanation: `
            <p>The class attribute allows developers to assign one or more class names to HTML elements.</p>
            <p>Classes are commonly used by CSS to style multiple elements with the same design.</p>
            <p>JavaScript can also use class names to select and work with elements.</p>
            <p>Multiple elements can share the same class name.</p>
        `,
        tip: "Use meaningful class names that describe the purpose of the elements.",
        example: `<h2 class="heading">Our Courses</h2>

<p class="description">
    Learn web development.
</p>

<p class="description">
    Build real projects.
</p>

<style>
.heading {
    color: blue;
}

.description {
    font-size: 18px;
}
</style>`,
        challengeTitle: "Use HTML Classes",
        challengeText: "Create at least two elements that share the same class name.",
        required: ["class=", "<h2", "<p"]
    },

    {
        category: "Advanced HTML",
        title: "HTML IDs",
        subtitle: "Give an element a unique identifier.",
        explanation: `
            <p>The id attribute assigns a unique identifier to an HTML element.</p>
            <p>An ID is commonly used to target a specific element with CSS or JavaScript.</p>
            <p>It can also be used as a destination for links within the same webpage.</p>
            <p>Unlike classes, an ID should normally be unique within a document.</p>
        `,
        tip: "Use classes for groups of elements and IDs when you need to identify one specific element.",
        example: `<h1 id="main-title">Welcome</h1>

<p id="intro">
    This is my introduction.
</p>

<a href="#main-title">Back to Heading</a>

<style>
#main-title {
    color: blue;
}
</style>`,
        challengeTitle: "Create Unique IDs",
        challengeText: "Create a heading with an ID and a link that points to that ID.",
        required: ["id=", "href=\"#"]
    },

    {
        category: "Advanced HTML",
        title: "The Data Attribute",
        subtitle: "Store custom information in HTML elements.",
        explanation: `
            <p>HTML data attributes allow developers to store custom information on HTML elements.</p>
            <p>They begin with <code>data-</code>, followed by a descriptive name.</p>
            <p>For example, <code>data-user-id</code> can store a user identifier.</p>
            <p>JavaScript can access these values through the element's dataset property.</p>
        `,
        tip: "Use data attributes for custom information that belongs to an element. Do not use them to store sensitive information.",
        example: `<button
    data-course="HTML"
    data-level="Beginner"
>
    View Course
</button>`,
        challengeTitle: "Add Custom Data",
        challengeText: "Create an element with at least two custom data attributes.",
        required: ["data-"]
    },

    {
        category: "Advanced HTML",
        title: "Meta Information",
        subtitle: "Describe your webpage to browsers and search engines.",
        explanation: `
            <p>Meta elements provide information about an HTML document.</p>
            <p>They are placed inside the head element and are not normally displayed as visible webpage content.</p>
            <p>Common metadata includes character encoding, viewport settings, descriptions and author information.</p>
            <p>The viewport meta element is especially important for responsive websites on mobile devices.</p>
        `,
        tip: "Use UTF-8 character encoding and a viewport meta element in modern webpages.",
        example: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <meta
        name="description"
        content="Learn HTML at ELOMCODE School."
    >

    <title>My Website</title>
</head>
<body>
    <h1>Welcome</h1>
</body>
</html>`,
        challengeTitle: "Add Metadata",
        challengeText: "Create a webpage head containing charset, viewport and description metadata.",
        required: ["<head", "<meta", "charset=", "name=\"viewport\"", "name=\"description\""]
    },

    {
        category: "Advanced HTML",
        title: "Page Titles",
        subtitle: "Give your webpages meaningful browser titles.",
        explanation: `
            <p>The <code>&lt;title&gt;</code> element defines the title of an HTML document.</p>
            <p>It is placed inside the head element and is commonly displayed in the browser tab.</p>
            <p>Search engines may also use page titles when displaying search results.</p>
            <p>A good title should clearly describe the content of the webpage.</p>
        `,
        tip: "Give every important webpage a unique and descriptive title.",
        example: `<!DOCTYPE html>
<html>
<head>
    <title>About Us | ELOMCODE School</title>
</head>
<body>
    <h1>About ELOMCODE School</h1>
    <p>Learn. Code. Build. Become.</p>
</body>
</html>`,
        challengeTitle: "Create a Page Title",
        challengeText: "Create an HTML document with a descriptive title inside the head element.",
        required: ["<head", "<title", "</title>"]
    },

    {
        category: "Advanced HTML",
        title: "Build a Complete Portfolio",
        subtitle: "Combine your HTML knowledge into a complete webpage.",
        explanation: `
            <p>You have reached the final lesson of this HTML Masterclass. It is time to combine the concepts you have learned into one practical project.</p>
            <p>A portfolio webpage introduces you, displays your skills and gives visitors a way to contact you.</p>
            <h3>Your portfolio should include:</h3>
            <ul>
                <li>A meaningful page title and metadata.</li>
                <li>A header containing your name.</li>
                <li>A navigation menu.</li>
                <li>A main section introducing you.</li>
                <li>A list of your skills.</li>
                <li>A portfolio or projects section.</li>
                <li>A contact form.</li>
                <li>A footer.</li>
            </ul>
            <p>This project brings together document structure, headings, paragraphs, lists, links, images, semantic elements and forms.</p>
        `,
        tip: "Build the structure first. Once the HTML is correct, you can use CSS to create a more professional appearance.",
        example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
</head>
<body>

    <header>
        <h1>Elijah Opomulero</h1>
        <p>Student and Web Developer</p>
    </header>

    <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
    </nav>

    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>Welcome to my personal portfolio.</p>
        </section>

        <section id="skills">
            <h2>My Skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </section>

        <section id="contact">
            <h2>Contact Me</h2>

            <form>
                <label for="email">Email:</label>
                <input type="email" id="email" required>

                <button type="submit">Send</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 My Portfolio</p>
    </footer>

</body>
</html>`,
        challengeTitle: "Final HTML Portfolio Project",
        challengeText: "Build a complete portfolio using a document structure, header, navigation, main, sections, list, form and footer.",
        required: [
            "<!doctype html",
            "<html",
            "<head",
            "<title",
            "<header",
            "<nav",
            "<main",
            "<section",
            "<ul",
            "<form",
            "<footer"
        ]
    }

];


/* ============================================================
   3. COURSE STATE
============================================================ */

let currentLessonIndex = 0;
let completedLessons = new Set();
let collapsedCategories = new Set();

let courseProgress = {
    completedLessons: [],
    currentLessonIndex: 0
};


/* ============================================================
   4. LOAD AND SAVE PROGRESS
============================================================ */

function loadProgress() {

    try {

        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return;
        }

        const data = JSON.parse(saved);

        if (
            data &&
            Array.isArray(data.completedLessons)
        ) {

            completedLessons = new Set(
                data.completedLessons.filter(index =>
                    Number.isInteger(index) &&
                    index >= 0 &&
                    index < lessons.length
                )
            );

        }

        if (
            Number.isInteger(data.currentLessonIndex) &&
            data.currentLessonIndex >= 0 &&
            data.currentLessonIndex < lessons.length
        ) {

            currentLessonIndex = data.currentLessonIndex;

        }

    } catch (error) {

        console.warn("Unable to load course progress:", error);

        completedLessons = new Set();
        currentLessonIndex = 0;

    }

}


function saveProgress() {

    courseProgress = {

        completedLessons: Array.from(completedLessons),

        currentLessonIndex: currentLessonIndex

    };

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(courseProgress)
        );

    } catch (error) {

        console.warn("Unable to save course progress:", error);

        showMessage(
            "Your browser could not save progress. Check your browser storage settings.",
            "warning"
        );

    }

}


/* ============================================================
   5. GENERAL HELPERS
============================================================ */

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, character => {

        const entities = {

            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"

        };

        return entities[character];

    });

}


function getCourseXP() {

    return completedLessons.size * XP_PER_LESSON;

}


function getProgressPercentage() {

    return Math.round(
        (completedLessons.size / lessons.length) * 100
    );

}


function isLessonCompleted(index) {

    return completedLessons.has(index);

}


function getCurrentLesson() {

    return lessons[currentLessonIndex];

}


function showMessage(message, type = "success") {

    const messageElement = $("lessonMessage");

    if (!messageElement) return;

    messageElement.textContent = message;

    messageElement.className = "lesson-message " + type;

    if (messageElement._timeout) {

        clearTimeout(messageElement._timeout);

    }

    messageElement._timeout = setTimeout(() => {

        messageElement.textContent = "";

        messageElement.className = "lesson-message";

    }, 4500);

}


function announce(message) {

    const live = $("liveAnnouncement");

    if (live) {

        live.textContent = message;

    }

}


/* ============================================================
   6. HTML PREVIEW ENGINE
============================================================ */

function createPreviewDocument(userHTML) {

    const safeHTML = String(userHTML || "");

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

    * {
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        padding: 18px;
        margin: 0;
        color: #1d2939;
        background: #ffffff;
        line-height: 1.6;
        overflow-wrap: anywhere;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    table {
        max-width: 100%;
    }

    input,
    textarea,
    select,
    button {
        max-width: 100%;
    }

</style>

</head>

<body>

${safeHTML}

</body>
</html>`;

}


function renderExamplePreview() {

    const lesson = getCurrentLesson();

    const preview = $("examplePreview");

    if (!lesson || !preview) return;

    preview.srcdoc = createPreviewDocument(
        lesson.example
    );

}


function renderPracticePreview() {

    const editor = $("codeEditor");

    const preview = $("practicePreview");

    if (!editor || !preview) return;

    preview.srcdoc = createPreviewDocument(
        editor.value
    );

}


/* ============================================================
   7. SIDEBAR LESSON NAVIGATION
============================================================ */

function buildLessonNavigation() {

    const navigation = $("lessonNavigation");

    if (!navigation) return;

    navigation.innerHTML = "";

    const categories = {};

    lessons.forEach((lesson, index) => {

        if (!categories[lesson.category]) {

            categories[lesson.category] = [];

        }

        categories[lesson.category].push({
            lesson,
            index
        });

    });


    Object.entries(categories).forEach(
        ([category, categoryLessons]) => {

            const categoryWrapper = document.createElement("div");

            categoryWrapper.className = "lesson-category";

            const categoryButton = document.createElement("button");

            categoryButton.type = "button";

            categoryButton.className = "category-heading";

            categoryButton.textContent = category;

            categoryButton.setAttribute(
                "aria-expanded",
                String(!collapsedCategories.has(category))
            );

            const lessonList = document.createElement("div");

            lessonList.className = "category-lessons";

            categoryLessons.forEach(({ lesson, index }) => {

                const button = document.createElement("button");

                button.type = "button";

                button.className = "lesson-nav-item";

                button.dataset.lessonIndex = index;

                const completed = isLessonCompleted(index);

                button.innerHTML = `
                    <span class="lesson-nav-number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <span class="lesson-nav-title">
                        ${escapeHTML(lesson.title)}
                    </span>

                    <span class="lesson-nav-check">
                        ${completed ? "✓" : ""}
                    </span>
                `;

                button.addEventListener("click", () => {

                    selectLesson(index);

                    closeSidebarOnMobile();

                });

                lessonList.appendChild(button);

            });


            categoryButton.addEventListener("click", () => {

                if (collapsedCategories.has(category)) {

                    collapsedCategories.delete(category);

                } else {

                    collapsedCategories.add(category);

                }

                updateCategoryVisibility(
                    category,
                    lessonList,
                    categoryButton
                );

            });


            categoryWrapper.appendChild(categoryButton);

            categoryWrapper.appendChild(lessonList);

            navigation.appendChild(categoryWrapper);

            updateCategoryVisibility(
                category,
                lessonList,
                categoryButton
            );

        }
    );

    updateSidebarActiveLesson();

}


function updateCategoryVisibility(
    category,
    lessonList,
    categoryButton
) {

    const isCollapsed = collapsedCategories.has(category);

    lessonList.hidden = isCollapsed;

    categoryButton.setAttribute(
        "aria-expanded",
        String(!isCollapsed)
    );

}


function updateSidebarActiveLesson() {

    document.querySelectorAll(
        ".lesson-nav-item"
    ).forEach(button => {

        const index = Number(button.dataset.lessonIndex);

        const isActive = index === currentLessonIndex;

        button.classList.toggle("active", isActive);

        button.classList.toggle(
            "completed",
            isLessonCompleted(index)
        );

        button.setAttribute(
            "aria-current",
            isActive ? "step" : "false"
        );

        const check = button.querySelector(
            ".lesson-nav-check"
        );

        if (check) {

            check.textContent = isLessonCompleted(index)
                ? "✓"
                : "";

        }

    });

}


function openCurrentLessonCategory() {

    const currentCategory = getCurrentLesson().category;

    collapsedCategories.delete(currentCategory);

    const navigation = $("lessonNavigation");

    if (!navigation) return;

    const categoryWrappers = navigation.querySelectorAll(
        ".lesson-category"
    );

    categoryWrappers.forEach(wrapper => {

        const button = wrapper.querySelector(
            ".category-heading"
        );

        const list = wrapper.querySelector(
            ".category-lessons"
        );

        if (
            button &&
            button.textContent === currentCategory
        ) {

            updateCategoryVisibility(
                currentCategory,
                list,
                button
            );

        }

    });

}


/* ============================================================
   8. COURSE STATISTICS
============================================================ */

function updateStatistics() {

    const completed = completedLessons.size;

    const percentage = getProgressPercentage();

    const xp = getCourseXP();

    const progressPercent = $("progressPercent");

    const progressFill = $("progressFill");

    const progressTrack = $("progressTrack");

    const completedText = $("completedText");

    const xpCount = $("xpCount");

    const lessonCount = $("lessonCount");

    const sidebarXP = $("sidebarXP");

    const heroTotalLessons = $("heroTotalLessons");

    const heroCompleted = $("heroCompleted");

    const heroXP = $("heroXP");


    if (progressPercent) {

        progressPercent.textContent = percentage + "%";

    }

    if (progressFill) {

        progressFill.style.width = percentage + "%";

    }

    if (progressTrack) {

        progressTrack.setAttribute(
            "aria-valuenow",
            percentage
        );

    }

    if (completedText) {

        completedText.textContent =
            completed + " / " + lessons.length + " completed";

    }

    if (xpCount) {

        xpCount.textContent = xp;

    }

    if (lessonCount) {

        lessonCount.textContent = lessons.length;

    }

    if (sidebarXP) {

        sidebarXP.textContent = xp;

    }

    if (heroTotalLessons) {

        heroTotalLessons.textContent = lessons.length;

    }

    if (heroCompleted) {

        heroCompleted.textContent = completed;

    }

    if (heroXP) {

        heroXP.textContent = xp;

    }

}


/* ============================================================
   9. LESSON COMPLETION BADGE
============================================================ */

function updateCompletionBadge() {

    const badge = $("lessonCompletionBadge");

    if (!badge) return;

    if (isLessonCompleted(currentLessonIndex)) {

        badge.textContent = "✓ Completed";

        badge.classList.add("completed");

    } else {

        badge.textContent = "In Progress";

        badge.classList.remove("completed");

    }

}


/* ============================================================
   10. LESSON RENDERING
============================================================ */

function renderLesson() {

    const lesson = getCurrentLesson();

    if (!lesson) return;


    const category = $("lessonCategory");

    const number = $("lessonNumber");

    const title = $("lessonTitle");

    const subtitle = $("lessonSubtitle");

    const explanation = $("lessonExplanation");

    const tip = $("lessonTip");

    const exampleCode = $("exampleCode");

    const challengeTitle = $("challengeTitle");

    const challengeText = $("challengeText");

    const previousButton = $("previousButton");

    const nextButton = $("nextButton");

    const completeButton = $("completeButton");

    const workspace = $("lessonWorkspace");


    if (category) {

        category.textContent = lesson.category;

    }

    if (number) {

        number.textContent =
            "LESSON " +
            String(currentLessonIndex + 1).padStart(2, "0");

    }

    if (title) {

        title.textContent = lesson.title;

    }

    if (subtitle) {

        subtitle.textContent = lesson.subtitle;

    }

    if (explanation) {

        explanation.innerHTML = lesson.explanation;

    }

    if (tip) {

        tip.textContent = lesson.tip;

    }

    if (exampleCode) {

        exampleCode.textContent = lesson.example;

    }

    if (challengeTitle) {

        challengeTitle.textContent = lesson.challengeTitle;

    }

    if (challengeText) {

        challengeText.textContent = lesson.challengeText;

    }


    if (previousButton) {

        previousButton.disabled =
            currentLessonIndex === 0;

    }

    if (nextButton) {

        nextButton.disabled =
            currentLessonIndex === lessons.length - 1;

    }

    if (completeButton) {

        completeButton.textContent =
            isLessonCompleted(currentLessonIndex)
                ? "✓ Completed"
                : "Mark as Complete";

        completeButton.classList.toggle(
            "completed",
            isLessonCompleted(currentLessonIndex)
        );

    }


    const editor = $("codeEditor");

    if (editor) {

        editor.value = lesson.example;

        updateLineNumbers();

    }


    const feedback = $("challengeFeedback");

    if (feedback) {

        feedback.textContent = "";

        feedback.className = "challenge-feedback";

    }


    const practiceFeedback = $("practiceFeedback");

    if (practiceFeedback) {

        practiceFeedback.textContent = "";

    }


    updateCompletionBadge();

    updateStatistics();

    buildLessonNavigation();

    openCurrentLessonCategory();

    updateSidebarActiveLesson();

    renderExamplePreview();

    renderPracticePreview();

    updateNavigationButtons();


    announce(
        "Lesson " +
        (currentLessonIndex + 1) +
        ": " +
        lesson.title
    );


    if (workspace) {

        workspace.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* ============================================================
   11. LESSON NAVIGATION
============================================================ */

function selectLesson(index) {

    if (
        !Number.isInteger(index) ||
        index < 0 ||
        index >= lessons.length
    ) {

        return;

    }

    currentLessonIndex = index;

    saveProgress();

    renderLesson();

}


function nextLesson() {

    if (currentLessonIndex < lessons.length - 1) {

        selectLesson(currentLessonIndex + 1);

    } else {

        showMessage(
            "You have reached the final lesson of the HTML Masterclass.",
            "success"
        );

    }

}


function previousLesson() {

    if (currentLessonIndex > 0) {

        selectLesson(currentLessonIndex - 1);

    }

}


function updateNavigationButtons() {

    const previousButton = $("previousButton");

    const nextButton = $("nextButton");

    if (previousButton) {

        previousButton.disabled =
            currentLessonIndex === 0;

    }

    if (nextButton) {

        nextButton.disabled =
            currentLessonIndex === lessons.length - 1;

    }

}


/* ============================================================
   12. MARK LESSON COMPLETE
============================================================ */

function completeCurrentLesson() {

    const alreadyCompleted = isLessonCompleted(
        currentLessonIndex
    );

    if (alreadyCompleted) {

        showMessage(
            "You have already completed this lesson. Keep learning!",
            "success"
        );

        return;

    }


    completedLessons.add(currentLessonIndex);

    saveProgress();

    updateStatistics();

    updateCompletionBadge();

    buildLessonNavigation();

    updateSidebarActiveLesson();


    const completeButton = $("completeButton");

    if (completeButton) {

        completeButton.textContent = "✓ Completed";

        completeButton.classList.add("completed");

    }


    showMessage(
        "Excellent work! You earned " +
        XP_PER_LESSON +
        " XP.",
        "success"
    );

    announce(
        "Lesson completed. " +
        XP_PER_LESSON +
        " experience points earned."
    );

}


/* ============================================================
   13. CODE EDITOR LINE NUMBERS
============================================================ */

function updateLineNumbers() {

    const editor = $("codeEditor");

    const lineNumbers = $("editorLineNumbers");

    if (!editor || !lineNumbers) return;

    const lineCount = Math.max(
        1,
        editor.value.split("\n").length
    );

    lineNumbers.innerHTML = "";

    for (let i = 1; i <= lineCount; i++) {

        const line = document.createElement("div");

        line.textContent = i;

        lineNumbers.appendChild(line);

    }

}


function syncEditorScroll() {

    const editor = $("codeEditor");

    const lineNumbers = $("editorLineNumbers");

    if (!editor || !lineNumbers) return;

    lineNumbers.scrollTop = editor.scrollTop;

}


/* ============================================================
   14. EDITOR BUTTONS
============================================================ */

function resetEditor() {

    const editor = $("codeEditor");

    if (!editor) return;

    editor.value = getCurrentLesson().example;

    updateLineNumbers();

    renderPracticePreview();

    showPracticeFeedback(
        "The original lesson example has been restored.",
        "success"
    );

}


function clearEditor() {

    const editor = $("codeEditor");

    if (!editor) return;

    editor.value = "";

    updateLineNumbers();

    renderPracticePreview();

    showPracticeFeedback(
        "The editor is now empty.",
        "info"
    );

}


function showPracticeFeedback(message, type = "info") {

    const feedback = $("practiceFeedback");

    if (!feedback) return;

    feedback.textContent = message;

    feedback.className =
        "practice-feedback " + type;

}


/* ============================================================
   15. CHALLENGE VALIDATION
============================================================ */

function normalizeCode(code) {

    return String(code || "")
        .toLowerCase()
        .replace(/<!--[\s\S]*?-->/g, "")
        .replace(/\s+/g, " ")
        .trim();

}


function checkChallenge() {

    const editor = $("codeEditor");

    const feedback = $("challengeFeedback");

    if (!editor || !feedback) return;

    const code = normalizeCode(editor.value);

    const lesson = getCurrentLesson();

    const requirements = lesson.required || [];

    if (!code) {

        feedback.textContent =
            "Your editor is empty. Write your solution first.";

        feedback.className =
            "challenge-feedback error";

        return;

    }


    const missing = requirements.filter(requirement => {

        return !code.includes(
            requirement.toLowerCase()
        );

    });


    if (missing.length === 0) {

        feedback.textContent =
            "Excellent! Your solution contains the required HTML elements. Challenge completed!";

        feedback.className =
            "challenge-feedback success";

        completeCurrentLesson();

        renderPracticePreview();

        return;

    }


    feedback.textContent =
        "Not quite there yet. Check that your code includes: " +
        missing.join(", ") +
        ". Review the lesson and try again.";

    feedback.className =
        "challenge-feedback error";

}


/* ============================================================
   16. SIDEBAR CONTROLS
============================================================ */

function toggleSidebar() {

    const sidebar = $("courseSidebar");

    const layout = $("courseLayout");

    const button = $("toggleSidebarButton");

    if (!sidebar) return;

    const isOpen = sidebar.classList.toggle("is-open");

    if (layout) {

        layout.classList.toggle("sidebar-open", isOpen);

    }

    if (button) {

        button.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    }

}


function closeSidebarOnMobile() {

    if (window.innerWidth > 900) return;

    const sidebar = $("courseSidebar");

    const layout = $("courseLayout");

    const button = $("toggleSidebarButton");

    if (sidebar) {

        sidebar.classList.remove("is-open");

    }

    if (layout) {

        layout.classList.remove("sidebar-open");

    }

    if (button) {

        button.setAttribute("aria-expanded", "false");

    }

}


/* ============================================================
   17. KEYBOARD SHORTCUTS
============================================================ */

function setupKeyboardShortcuts() {

    document.addEventListener("keydown", event => {

        const target = event.target;

        const isTyping =
            target &&
            (
                target.tagName === "TEXTAREA" ||
                target.tagName === "INPUT" ||
                target.isContentEditable
            );


        if (
            (event.ctrlKey || event.metaKey) &&
            event.key === "Enter"
        ) {

            event.preventDefault();

            renderPracticePreview();

            showPracticeFeedback(
                "Your HTML preview has been updated.",
                "success"
            );

            return;

        }


        if (isTyping) return;


        if (event.key === "ArrowRight") {

            event.preventDefault();

            nextLesson();

        }

        if (event.key === "ArrowLeft") {

            event.preventDefault();

            previousLesson();

        }

    });

}


function setupEditorTabSupport() {

    const editor = $("codeEditor");

    if (!editor) return;

    editor.addEventListener("keydown", event => {

        if (event.key !== "Tab") return;

        event.preventDefault();

        const start = editor.selectionStart;

        const end = editor.selectionEnd;

        editor.setRangeText(
            "    ",
            start,
            end,
            "end"
        );

        updateLineNumbers();

    });

}


/* ============================================================
   18. BACKGROUND PARTICLES
============================================================ */

function createParticles() {

    const container = $("particlesContainer");

    if (!container) return;

    if (
        window.matchMedia &&
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        return;

    }

    if (container.children.length > 0) return;

    const particleCount = 18;

    for (let i = 0; i < particleCount; i++) {

        const particle = document.createElement("span");

        particle.className = "background-particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.animationDelay =
            Math.random() * 8 + "s";

        particle.style.animationDuration =
            (6 + Math.random() * 8) + "s";

        container.appendChild(particle);

    }

}


/* ============================================================
   19. BUTTON EVENT CONNECTIONS
============================================================ */

function connectCourseButtons() {

    const previousButton = $("previousButton");

    const nextButton = $("nextButton");

    const completeButton = $("completeButton");

    const runExampleButton = $("runExampleButton");

    const runCodeButton = $("runCodeButton");

    const checkChallengeButton = $("checkChallengeButton");

    const resetEditorButton = $("resetEditorButton");

    const clearEditorButton = $("clearEditorButton");

    const toggleSidebarButton = $("toggleSidebarButton");

    const editor = $("codeEditor");


    if (previousButton) {

        previousButton.addEventListener(
            "click",
            previousLesson
        );

    }

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            nextLesson
        );

    }

    if (completeButton) {

        completeButton.addEventListener(
            "click",
            completeCurrentLesson
        );

    }

    if (runExampleButton) {

        runExampleButton.addEventListener("click", () => {

            renderExamplePreview();

            showMessage(
                "Lesson example preview updated.",
                "success"
            );

        });

    }

    if (runCodeButton) {

        runCodeButton.addEventListener("click", () => {

            renderPracticePreview();

            showPracticeFeedback(
                "Your code has been rendered in the preview.",
                "success"
            );

        });

    }

    if (checkChallengeButton) {

        checkChallengeButton.addEventListener(
            "click",
            checkChallenge
        );

    }

    if (resetEditorButton) {

        resetEditorButton.addEventListener(
            "click",
            resetEditor
        );

    }

    if (clearEditorButton) {

        clearEditorButton.addEventListener(
            "click",
            clearEditor
        );

    }

    if (toggleSidebarButton) {

        toggleSidebarButton.addEventListener(
            "click",
            toggleSidebar
        );

    }

    if (editor) {

        editor.addEventListener("input", () => {

            updateLineNumbers();

        });

        editor.addEventListener("scroll", syncEditorScroll);

    }

}


/* ============================================================
   20. COURSE INITIALIZATION
============================================================ */

function initializeHTMLMasterclass() {

    if (!document.getElementById("lessonWorkspace")) {

        console.warn(
            "ELOMCODE HTML Masterclass: lessonWorkspace was not found."
        );

        return;

    }


    if (lessons.length !== TOTAL_LESSONS) {

        console.error(
            "Lesson database mismatch:",
            lessons.length,
            "lessons found."
        );

    }


    loadProgress();

    connectCourseButtons();

    setupKeyboardShortcuts();

    setupEditorTabSupport();

    createParticles();

    updateStatistics();

    buildLessonNavigation();

    renderLesson();


    console.log(
        "ELOMCODE HTML Masterclass initialized successfully."
    );

    console.log(
        lessons.length + " lessons loaded."
    );

    console.log(
        completedLessons.size + " lessons completed."
    );

}


/* ============================================================
   21. START COURSE
============================================================ */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initializeHTMLMasterclass
    );

} else {

    initializeHTMLMasterclass();

}


/* ============================================================
   END OF ELOMCODE HTML MASTERCLASS
   Architect: Elijah Opomulero
   Learn. Code. Build. Become.
============================================================ */