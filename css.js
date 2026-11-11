/* =========================================================
   ELOMCODE SCHOOL
   CSS MASTERCLASS — COMPLETE COURSE ENGINE
   Learn. Code. Build. Become.
   ========================================================= */

const TOTAL_LESSONS = 45;
const XP_PER_LESSON = 25;
const TOTAL_XP = TOTAL_LESSONS * XP_PER_LESSON;

const STORAGE_KEY = "elomcode_css_masterclass_progress";

/* ---------------------------------------------------------
   FRESH COURSE START
   Removes old CSS-course progress ONCE.
   Change v1 to v2 only if you intentionally want another reset.
   --------------------------------------------------------- */

const RESET_VERSION = "css_masterclass_fresh_start_v1";
const RESET_KEY = "elomcode_css_masterclass_reset_version";

if (localStorage.getItem(RESET_KEY) !== RESET_VERSION) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.setItem(RESET_KEY, RESET_VERSION);
}

/* ---------------------------------------------------------
   COURSE DATA
   --------------------------------------------------------- */

const lessons = [

    /* =====================================================
       FOUNDATIONS
       ===================================================== */

    {
        id: 1,
        category: "Foundations",
        title: "Introduction to CSS",
        subtitle: "Understand what CSS is and why every modern website needs it.",
        explanation: `
CSS stands for Cascading Style Sheets. It is the language used to control
the visual presentation of HTML documents.

HTML gives a webpage its structure. CSS gives that structure its appearance.
With CSS, you can control colors, spacing, fonts, borders, layouts,
animations, responsive behavior and much more.

Think of HTML as the structure of a house and CSS as the design,
painting, furniture arrangement and decoration.

CSS is not only about making a page "look pretty". Modern CSS is also
responsible for creating responsive layouts, positioning interface
components, building grids, creating transitions and producing interactive
visual experiences.
        `,
        why: `
Learning CSS properly gives you control over how your websites look and
behave across phones, tablets and computers. Instead of depending on
pre-made designs, you will be able to create your own.
        `,
        syntaxExplanation: `
A CSS rule normally contains a selector followed by one or more
declarations. A declaration contains a property and its value.
        `,
        syntaxCode: `p {
    color: blue;
    font-size: 20px;
}`,
        breakdown: [
            {
                name: "p",
                text: "The selector chooses the HTML paragraph elements."
            },
            {
                name: "color",
                text: "The property tells CSS which visual feature to change."
            },
            {
                name: "blue",
                text: "The value tells CSS what the selected property should become."
            }
        ],
        tip: "Do not try to memorize hundreds of CSS properties at once. Learn what each property controls and practice using it.",
        exampleDescription: "Change the appearance of a heading and paragraph using CSS.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
h1 {
    color: #0b5fc7;
}

p {
    color: #333;
    font-size: 18px;
}
</style>
</head>
<body>

<h1>Welcome to CSS</h1>
<p>CSS controls the appearance of a webpage.</p>

</body>
</html>`,
        extraExamples: [
            {
                title: "Change a background",
                description: "CSS can change the background color of an element.",
                code: `body {
    background: #eaf4ff;
}`
            },
            {
                title: "Center text",
                description: "The text-align property controls horizontal text alignment.",
                code: `h1 {
    text-align: center;
}`
            }
        ],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
h1 {
    color: #0b5fc7;
}

p {
    font-size: 18px;
}
</style>
</head>
<body>

<h1>My First CSS Page</h1>
<p>Try changing the CSS and run the code.</p>

</body>
</html>`,
        challenge: "Change the heading color and make the paragraph larger.",
        hint: "Try changing the color value inside the h1 rule and increase the paragraph's font-size."
    },

    {
        id: 2,
        category: "Foundations",
        title: "CSS Syntax",
        subtitle: "Learn the structure behind every CSS rule.",
        explanation: `
CSS follows a simple but powerful pattern. You select something, then tell
the browser which properties to change and what values those properties
should have.

A CSS rule is made up of a selector and a declaration block.

Inside the declaration block, each declaration follows the pattern:

property: value;

The semicolon separates declarations. The braces define the area in which
those declarations belong.
        `,
        why: "Understanding syntax prevents many common CSS errors and makes it easier to read other people's stylesheets.",
        syntaxExplanation: "The selector identifies the target, while declarations describe the styles that should be applied.",
        syntaxCode: `.card {
    background: white;
    padding: 20px;
    border-radius: 12px;
}`,
        breakdown: [
            { name: ".card", text: "Selects elements with the class card." },
            { name: "background", text: "Controls the element's background." },
            { name: "padding", text: "Creates space inside the element." },
            { name: "border-radius", text: "Rounds the element's corners." }
        ],
        tip: "A missing brace, colon or semicolon can stop a CSS rule from working correctly.",
        exampleDescription: "Create a styled card using several CSS declarations.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.card {
    background: white;
    padding: 25px;
    border: 2px solid #1684ff;
    border-radius: 16px;
}
</style>
</head>
<body>

<div class="card">
    <h2>CSS Syntax</h2>
    <p>This card is styled with CSS.</p>
</div>

</body>
</html>`,
        extraExamples: [
            {
                title: "Multiple properties",
                description: "A single selector can contain many declarations.",
                code: `.title {
    color: purple;
    font-size: 32px;
    text-align: center;
}`
            }
        ],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.box {

}
</style>
</head>
<body>

<div class="box">Style me!</div>

</body>
</html>`,
        challenge: "Give the box a blue background, 20px padding and rounded corners.",
        hint: "Add background, padding and border-radius declarations."
    },

    {
        id: 3,
        category: "Foundations",
        title: "How CSS Works",
        subtitle: "Understand the browser's styling process.",
        explanation: `
When a browser loads a webpage, it reads the HTML structure and the CSS
rules associated with that document.

The browser determines which CSS selectors match which HTML elements.
It then calculates which styles should win when several rules target the
same element.

This process is influenced by the cascade, specificity, inheritance and
the order in which rules appear.
        `,
        why: "Understanding how CSS works will help you solve conflicts instead of randomly changing code until something works.",
        syntaxExplanation: "CSS rules are matched against HTML elements. When several rules match, the browser determines which declaration has priority.",
        syntaxCode: `.title {
    color: blue;
}

h1 {
    color: red;
}`,
        breakdown: [
            { name: "Matching", text: "The browser finds which selectors match an element." },
            { name: "Cascade", text: "The browser determines which competing declarations should win." },
            { name: "Inheritance", text: "Some properties can be inherited from parent elements." }
        ],
        tip: "When CSS behaves unexpectedly, inspect the element and look for competing rules.",
        exampleDescription: "See how the order of rules can affect the final style.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.title {
    color: blue;
}

h1 {
    color: red;
}
</style>
</head>
<body>

<h1 class="title">Which color wins?</h1>

</body>
</html>`,
        extraExamples: [
            {
                title: "Later rule",
                description: "Two rules with similar priority can be affected by their position.",
                code: `p {
    color: blue;
}

p {
    color: green;
}`
            }
        ],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.message {
    color: blue;
}

.message {
    color: purple;
}
</style>
</head>
<body>

<p class="message">Observe the final color.</p>

</body>
</html>`,
        challenge: "Change the final color of the paragraph to green.",
        hint: "Change the value in the rule that appears last."
    },

    {
        id: 4,
        category: "Foundations",
        title: "Adding CSS to HTML",
        subtitle: "Learn the three main ways to connect CSS with HTML.",
        explanation: `
There are three common ways to add CSS to an HTML document.

Inline CSS is written directly inside an HTML element using the style
attribute.

Internal CSS is placed inside a style element, usually inside the head.

External CSS is written in a separate .css file and connected using a
link element.

External CSS is usually preferred for larger projects because it keeps
structure and styling separate and makes styles reusable across pages.
        `,
        why: "Knowing the three methods helps you understand existing websites and choose the right approach for your own projects.",
        syntaxExplanation: "Inline CSS uses style, internal CSS uses a style element, and external CSS uses a link element.",
        syntaxCode: `<link rel="stylesheet" href="style.css">`,
        breakdown: [
            { name: "link", text: "Connects another resource to the HTML document." },
            { name: "rel", text: "Describes the relationship between the HTML and the linked file." },
            { name: "href", text: "Specifies the location of the CSS file." }
        ],
        tip: "For serious websites, keep your CSS in an external stylesheet whenever possible.",
        exampleDescription: "This example demonstrates internal CSS.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
body {
    background: #eef7ff;
}

h1 {
    color: #0b5fc7;
}
</style>
</head>
<body>

<h1>Internal CSS</h1>

</body>
</html>`,
        extraExamples: [
            {
                title: "Inline CSS",
                description: "Inline styles are written directly on an element.",
                code: `<p style="color: blue;">Hello CSS</p>`
            },
            {
                title: "External CSS",
                description: "External CSS is connected using link.",
                code: `<link rel="stylesheet" href="style.css">`
            }
        ],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
h1 {

}
</style>
</head>
<body>

<h1>Connect CSS to HTML</h1>

</body>
</html>`,
        challenge: "Use internal CSS to make the heading blue and centered.",
        hint: "Use color and text-align inside the h1 rule."
    },

    {
        id: 5,
        category: "Selectors",
        title: "CSS Selectors",
        subtitle: "Learn how CSS chooses which HTML elements to style.",
        explanation: `
Selectors are one of the most important parts of CSS.

A selector tells the browser which elements a CSS rule should affect.
CSS provides many selectors, including element, class, ID, attribute,
universal, grouping, descendant and pseudo-class selectors.

The more confidently you understand selectors, the more precisely you
can control a webpage.
        `,
        why: "Selectors allow you to target exactly the elements you want without changing everything on the page.",
        syntaxExplanation: "A selector appears before the declaration block.",
        syntaxCode: `.card {
    color: #222;
}`,
        breakdown: [
            { name: ".card", text: "Targets elements with class=\"card\"." },
            { name: "{}", text: "Contains the declarations applied to the selected elements." }
        ],
        tip: "Use classes for reusable styles. Use IDs for unique elements when appropriate.",
        exampleDescription: "Use a class selector to style multiple cards.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.card {
    background: #eef7ff;
    padding: 20px;
    margin: 10px;
    border-radius: 12px;
}
</style>
</head>
<body>

<div class="card">Card One</div>
<div class="card">Card Two</div>

</body>
</html>`,
        extraExamples: [
            {
                title: "Element selector",
                description: "Targets every element of a particular type.",
                code: `p {
    color: #444;
}`
            }
        ],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.card {

}
</style>
</head>
<body>

<div class="card">Card One</div>
<div class="card">Card Two</div>

</body>
</html>`,
        challenge: "Give both cards a light blue background and 15px padding.",
        hint: "Use the .card selector."
    },

    {
        id: 6,
        category: "Selectors",
        title: "Element Selectors",
        subtitle: "Style every element of a particular HTML type.",
        explanation: `
An element selector targets HTML elements by their tag name.

For example, p targets all paragraph elements and h1 targets all level-one
headings.

Element selectors are useful when you want every element of a particular
type to share a base style.
        `,
        why: "Element selectors are excellent for creating consistent base styles across a page.",
        syntaxExplanation: "Write the HTML tag name directly as the selector.",
        syntaxCode: `p {
    color: #333;
}`,
        breakdown: [
            { name: "p", text: "Targets every paragraph element." },
            { name: "color", text: "Changes the text color." }
        ],
        tip: "Element selectors are broad. Use classes when only certain elements should receive a style.",
        exampleDescription: "Style all paragraphs on the page.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
p {
    color: #0b5fc7;
    font-size: 18px;
}
</style>
</head>
<body>

<p>First paragraph.</p>
<p>Second paragraph.</p>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
p {

}
</style>
</head>
<body>

<p>Paragraph one</p>
<p>Paragraph two</p>

</body>
</html>`,
        challenge: "Make every paragraph dark purple and 20px.",
        hint: "Use color and font-size in the p selector."
    },

    {
        id: 7,
        category: "Selectors",
        title: "Class Selectors",
        subtitle: "Create reusable styles with classes.",
        explanation: `
A class selector begins with a dot followed by the class name.

Classes are designed to be reusable. You can give the same class to many
HTML elements and style all of them with one CSS rule.

This makes classes one of the most frequently used selector types in
modern web development.
        `,
        why: "Classes let you create reusable design systems and components.",
        syntaxExplanation: "A dot identifies a class selector.",
        syntaxCode: `.highlight {
    color: #7c5cff;
}`,
        breakdown: [
            { name: ".", text: "The dot indicates that the selector is a class." },
            { name: "highlight", text: "The class name must match the HTML class attribute." }
        ],
        tip: "Choose meaningful class names that describe the role of an element.",
        exampleDescription: "Apply the same class to several elements.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.highlight {
    color: #7c5cff;
    font-weight: bold;
}
</style>
</head>
<body>

<p class="highlight">Important message.</p>
<p>Normal message.</p>
<p class="highlight">Another important message.</p>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.highlight {

}
</style>
</head>
<body>

<p class="highlight">Style me.</p>

</body>
</html>`,
        challenge: "Make the highlighted paragraph blue and bold.",
        hint: "Use color and font-weight."
    },

    {
        id: 8,
        category: "Selectors",
        title: "ID Selectors",
        subtitle: "Target a unique element with an ID.",
        explanation: `
An ID selector begins with a hash symbol.

IDs are normally used to identify one unique element on a page. Although
they can be styled with CSS, reusable visual components are usually better
handled with classes.
        `,
        why: "Understanding IDs helps you work with existing HTML and understand CSS specificity.",
        syntaxExplanation: "The hash symbol starts an ID selector.",
        syntaxCode: `#hero {
    background: #06234a;
}`,
        breakdown: [
            { name: "#hero", text: "Targets the element whose id is hero." },
            { name: "background", text: "Changes its background." }
        ],
        tip: "Use classes for reusable styling and reserve IDs for unique elements or specific structural purposes.",
        exampleDescription: "Style a unique hero section.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
#hero {
    background: #06234a;
    color: white;
    padding: 40px;
    text-align: center;
}
</style>
</head>
<body>

<section id="hero">
    <h1>Welcome</h1>
</section>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
#hero {

}
</style>
</head>
<body>

<section id="hero">
    <h1>My Hero Section</h1>
</section>

</body>
</html>`,
        challenge: "Give the hero section a dark blue background, white text and 40px padding.",
        hint: "Use background, color and padding."
    },

    {
        id: 9,
        category: "Selectors",
        title: "Attribute Selectors",
        subtitle: "Select elements based on their HTML attributes.",
        explanation: `
Attribute selectors allow CSS to target elements according to attributes
they contain.

For example, you can select inputs by type, links by their target, or
elements with a particular data attribute.

This is useful when you want styling to respond to information already
present in HTML.
        `,
        why: "Attribute selectors make CSS more precise without requiring additional classes.",
        syntaxExplanation: "Square brackets are used to describe an attribute condition.",
        syntaxCode: `input[type="text"] {
    border: 2px solid #1684ff;
}`,
        breakdown: [
            { name: "input", text: "Limits the selection to input elements." },
            { name: "[type=\"text\"]", text: "Matches inputs whose type attribute is text." }
        ],
        tip: "Attribute selectors are especially useful for forms.",
        exampleDescription: "Style text inputs differently from buttons.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
input[type="text"] {
    padding: 12px;
    border: 2px solid #1684ff;
    border-radius: 8px;
}
</style>
</head>
<body>

<input type="text" placeholder="Your name">
<br><br>
<input type="password" placeholder="Password">

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
input[type="text"] {

}
</style>
</head>
<body>

<input type="text" placeholder="Name">
<input type="email" placeholder="Email">

</body>
</html>`,
        challenge: "Give only the text input a blue border and 10px padding.",
        hint: "The selector is already targeting only type=\"text\"."
    },

    {
        id: 10,
        category: "Selectors",
        title: "Grouping Selectors",
        subtitle: "Style several selectors with one rule.",
        explanation: `
When different elements need exactly the same styles, you can group their
selectors together using commas.

This avoids repeating the same declarations multiple times and keeps CSS
cleaner.
        `,
        why: "Grouping reduces repetition and makes stylesheets easier to maintain.",
        syntaxExplanation: "Separate selectors with commas.",
        syntaxCode: `h1, h2, p {
    font-family: Arial, sans-serif;
}`,
        breakdown: [
            { name: "h1, h2, p", text: "Targets all three element types." },
            { name: "font-family", text: "Applies the same font to every selected element." }
        ],
        tip: "Group selectors when the declarations are genuinely shared.",
        exampleDescription: "Give headings and paragraphs a common color.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
h1, h2, p {
    color: #073b78;
}
</style>
</head>
<body>

<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>Paragraph text.</p>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
h1, h2 {

}
</style>
</head>
<body>

<h1>Heading One</h1>
<h2>Heading Two</h2>

</body>
</html>`,
        challenge: "Make both headings blue and centered.",
        hint: "Add color and text-align."
    },

    {
        id: 11,
        category: "Selectors",
        title: "Universal Selector",
        subtitle: "Understand the selector that can target everything.",
        explanation: `
The universal selector is represented by an asterisk.

It matches every element in the document. Developers commonly use it
for small global resets, such as removing default margins or changing
box sizing.
        `,
        why: "The universal selector is useful for establishing predictable base styles.",
        syntaxExplanation: "An asterisk selects every element.",
        syntaxCode: `* {
    box-sizing: border-box;
}`,
        breakdown: [
            { name: "*", text: "Matches every element." },
            { name: "box-sizing", text: "Controls how width and height calculations work." }
        ],
        tip: "Use the universal selector carefully because it can affect every element.",
        exampleDescription: "Create a simple global CSS reset.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
}
</style>
</head>
<body>

<h1>Global Styles</h1>
<p>The universal selector affects every element.</p>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
* {

}
</style>
</head>
<body>

<h1>Universal Selector</h1>
<p>Everything can be targeted.</p>

</body>
</html>`,
        challenge: "Use the universal selector to set box-sizing to border-box.",
        hint: "Add box-sizing: border-box."
    },

    /* =====================================================
       STYLING
       ===================================================== */

    {
        id: 12,
        category: "Styling",
        title: "Colors",
        subtitle: "Master CSS color values.",
        explanation: `
CSS supports several ways to describe colors. You can use named colors,
HEX values, RGB, RGBA, HSL and HSLA.

HEX is extremely common in web design. RGB describes red, green and blue
components. HSL represents hue, saturation and lightness.

Using color intentionally helps establish hierarchy, readability and
brand identity.
        `,
        why: "Color is one of the strongest visual tools in web design.",
        syntaxExplanation: "The color property controls text color while background-color controls an element's background.",
        syntaxCode: `h1 {
    color: #0b5fc7;
}

.card {
    background-color: #eef7ff;
}`,
        breakdown: [
            { name: "color", text: "Changes foreground text color." },
            { name: "background-color", text: "Changes the background color." }
        ],
        tip: "Always maintain enough contrast between text and its background.",
        exampleDescription: "Use multiple CSS color properties.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
body {
    background-color: #eef7ff;
}

h1 {
    color: #073b78;
}

p {
    color: rgb(50, 50, 70);
}
</style>
</head>
<body>

<h1>Beautiful Colors</h1>
<p>CSS gives you many ways to describe colors.</p>

</body>
</html>`,
        extraExamples: [
            {
                title: "HEX",
                description: "A hexadecimal color value.",
                code: `color: #ff4d8d;`
            },
            {
                title: "RGB",
                description: "RGB describes red, green and blue values.",
                code: `color: rgb(20, 100, 220);`
            }
        ],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
body {

}

h1 {

}
</style>
</head>
<body>

<h1>Color Practice</h1>

</body>
</html>`,
        challenge: "Give the page a light background and the heading a dark blue color.",
        hint: "Use background-color on body and color on h1."
    },

    {
        id: 13,
        category: "Styling",
        title: "Backgrounds",
        subtitle: "Create solid, gradient and image backgrounds.",
        explanation: `
Background properties control the visual surface behind an element.

You can use background-color, background-image, background-size,
background-position, background-repeat and the shorthand background
property.

Gradients can also be created directly with CSS using functions such as
linear-gradient and radial-gradient.
        `,
        why: "Backgrounds can establish the entire visual atmosphere of a page or section.",
        syntaxExplanation: "The background shorthand can combine several background properties.",
        syntaxCode: `body {
    background: linear-gradient(135deg, #06234a, #1684ff);
}`,
        breakdown: [
            { name: "linear-gradient", text: "Creates a gradual color transition." },
            { name: "135deg", text: "Controls the gradient direction." },
            { name: "color stops", text: "Define the colors used in the gradient." }
        ],
        tip: "Use subtle gradients when you want a premium interface without making the design overwhelming.",
        exampleDescription: "Create a cinematic gradient background.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
body {
    margin: 0;
    min-height: 100vh;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, #03152d, #0b5fc7, #7c5cff);
    color: white;
    font-family: Arial, sans-serif;
}

h1 {
    font-size: 48px;
}
</style>
</head>
<body>

<h1>CSS Backgrounds</h1>

</body>
</html>`,
        extraExamples: [
            {
                title: "Radial gradient",
                description: "A radial gradient spreads from a central point.",
                code: `background: radial-gradient(circle, #22dfff, #03152d);`
            }
        ],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
body {
    min-height: 100vh;

}
</style>
</head>
<body>

<h1>Background Practice</h1>

</body>
</html>`,
        challenge: "Create a blue-to-purple linear gradient covering the page.",
        hint: "Use linear-gradient inside background."
    },

    {
        id: 14,
        category: "Styling",
        title: "Borders",
        subtitle: "Define the edges of elements.",
        explanation: `
Borders create visible boundaries around elements.

The border property can control width, style and color. You can also
style individual sides using border-top, border-right, border-bottom and
border-left.

Common border styles include solid, dashed, dotted and double.
        `,
        why: "Borders help separate content, create cards and communicate structure.",
        syntaxExplanation: "The border shorthand accepts width, style and color.",
        syntaxCode: `button {
    border: 2px solid #1684ff;
}`,
        breakdown: [
            { name: "2px", text: "Controls border thickness." },
            { name: "solid", text: "Defines the border style." },
            { name: "#1684ff", text: "Defines the border color." }
        ],
        tip: "Borders do not have to be loud. A thin, low-contrast border can create a polished interface.",
        exampleDescription: "Build a simple bordered card.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.card {
    padding: 25px;
    border: 2px solid #1684ff;
    width: 250px;
}
</style>
</head>
<body>

<div class="card">
    <h2>Bordered Card</h2>
    <p>CSS borders define edges.</p>
</div>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
    width: 200px;
    height: 100px;

}
</style>
</head>
<body>

<div class="box">Border me</div>

</body>
</html>`,
        challenge: "Add a 3px solid purple border.",
        hint: "Use border: 3px solid purple."
    },

    {
        id: 15,
        category: "Styling",
        title: "Border Radius",
        subtitle: "Create rounded cards, buttons and interfaces.",
        explanation: `
The border-radius property rounds the corners of an element.

A small radius creates a subtle modern appearance while a large radius
can produce pill-shaped controls. Setting border-radius to 50% can turn
a square element into a circle when its width and height are equal.
        `,
        why: "Rounded corners are common in modern interface design and help establish visual hierarchy.",
        syntaxExplanation: "border-radius accepts length or percentage values.",
        syntaxCode: `.card {
    border-radius: 18px;
}`,
        breakdown: [
            { name: "border-radius", text: "Controls the roundness of corners." },
            { name: "18px", text: "Defines how rounded the corners become." }
        ],
        tip: "Keep radius values consistent across related components.",
        exampleDescription: "Create a rounded profile card.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.card {
    width: 260px;
    padding: 25px;
    background: #eef7ff;
    border-radius: 20px;
}
</style>
</head>
<body>

<div class="card">
    <h2>Rounded UI</h2>
    <p>Modern cards often use rounded corners.</p>
</div>

</body>
</html>`,
        extraExamples: [
            {
                title: "Pill button",
                description: "A large radius can create a pill shape.",
                code: `border-radius: 999px;`
            }
        ],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.button {
    padding: 12px 24px;
    background: #1684ff;
    color: white;

}
</style>
</head>
<body>

<button class="button">Click Me</button>

</body>
</html>`,
        challenge: "Turn the button into a rounded pill.",
        hint: "Try border-radius: 999px."
    },

    {
        id: 16,
        category: "Styling",
        title: "Width and Height",
        subtitle: "Control the dimensions of elements.",
        explanation: `
The width and height properties control an element's dimensions.

You can use fixed units such as pixels, relative units such as percentages,
or viewport units such as vw and vh.

Modern responsive layouts often combine different units instead of relying
only on fixed pixel values.
        `,
        why: "Understanding dimensions is essential for creating predictable layouts.",
        syntaxExplanation: "width controls horizontal size while height controls vertical size.",
        syntaxCode: `.box {
    width: 300px;
    height: 180px;
}`,
        breakdown: [
            { name: "width", text: "Controls the element's horizontal dimension." },
            { name: "height", text: "Controls the element's vertical dimension." }
        ],
        tip: "Avoid fixed heights when content may grow unexpectedly.",
        exampleDescription: "Create a responsive-width box.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
    width: 80%;
    height: 180px;
    background: #1684ff;
    color: white;
    display: grid;
    place-items: center;
}
</style>
</head>
<body>

<div class="box">80% width</div>

</body>
</html>`,
        extraExamples: [
            {
                title: "Viewport height",
                description: "vh is based on the browser viewport height.",
                code: `height: 50vh;`
            }
        ],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
    background: #7c5cff;

}
</style>
</head>
<body>

<div class="box">Resize me</div>

</body>
</html>`,
        challenge: "Give the box a width of 300px and a height of 150px.",
        hint: "Add width and height."
    },

    {
        id: 17,
        category: "Box Model",
        title: "Margins",
        subtitle: "Create space outside an element.",
        explanation: `
Margin creates space outside an element's border.

Margins can be set for all four sides or individually. The margin
shorthand can use one, two, three or four values.

Margins are essential for controlling the distance between components.
        `,
        why: "Without margins, many interfaces become crowded and difficult to read.",
        syntaxExplanation: "margin controls outer spacing.",
        syntaxCode: `.card {
    margin: 20px;
}`,
        breakdown: [
            { name: "margin", text: "Creates space outside the element." },
            { name: "20px", text: "Applies 20 pixels around all four sides." }
        ],
        tip: "Use margin to separate elements from each other; use padding for space inside an element.",
        exampleDescription: "Create space between cards.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.card {
    padding: 20px;
    background: #eef7ff;
    margin: 20px;
    border-radius: 12px;
}
</style>
</head>
<body>

<div class="card">Card One</div>
<div class="card">Card Two</div>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
    width: 150px;
    height: 100px;
    background: #1684ff;

}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>`,
        challenge: "Add 30px of margin around the box.",
        hint: "Use margin: 30px."
    },

    {
        id: 18,
        category: "Box Model",
        title: "Padding",
        subtitle: "Create comfortable space inside elements.",
        explanation: `
Padding creates space between an element's content and its border.

This is different from margin. Margin creates external space, while
padding creates internal space.

Padding is especially important for buttons, cards, navigation items
and readable content blocks.
        `,
        why: "Good padding makes interfaces feel comfortable instead of cramped.",
        syntaxExplanation: "padding controls internal spacing.",
        syntaxCode: `.card {
    padding: 24px;
}`,
        breakdown: [
            { name: "padding", text: "Creates internal space." },
            { name: "24px", text: "Adds 24 pixels around the content." }
        ],
        tip: "A good interface usually needs both margin and padding.",
        exampleDescription: "Compare internal spacing using padding.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.card {
    background: #eef7ff;
    padding: 30px;
    border: 2px solid #1684ff;
}
</style>
</head>
<body>

<div class="card">
    <h2>Comfortable Card</h2>
    <p>Padding keeps the content away from the border.</p>
</div>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.card {
    background: #eef7ff;

}
</style>
</head>
<body>

<div class="card">Add padding here.</div>

</body>
</html>`,
        challenge: "Give the card 25px of padding.",
        hint: "Use padding: 25px."
    },

    {
        id: 19,
        category: "Box Model",
        title: "The CSS Box Model",
        subtitle: "Understand content, padding, border and margin.",
        explanation: `
Every HTML element can be understood as a box.

The CSS box model consists of four main areas:

Content is the actual text or child content.
Padding surrounds the content.
Border surrounds the padding.
Margin creates space outside the border.

Understanding this model is one of the most important skills in CSS.
        `,
        why: "Many layout problems become easy once you understand how the box model calculates space.",
        syntaxExplanation: "The visual size of an element is influenced by content, padding, border and margin.",
        syntaxCode: `.box {
    width: 200px;
    padding: 20px;
    border: 5px solid blue;
    margin: 20px;
}`,
        breakdown: [
            { name: "Content", text: "The actual content area." },
            { name: "Padding", text: "Space inside the border." },
            { name: "Border", text: "The visible boundary." },
            { name: "Margin", text: "Space outside the border." }
        ],
        tip: "Use browser developer tools to inspect the box model visually.",
        exampleDescription: "Visualize the four parts of the box model.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
    width: 200px;
    padding: 25px;
    border: 5px solid #1684ff;
    margin: 30px;
    background: #eef7ff;
}
</style>
</head>
<body>

<div class="box">
    Content
</div>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
    width: 200px;
    padding: 20px;
    border: 4px solid #7c5cff;
    margin: 20px;
    background: #eef7ff;
}
</style>
</head>
<body>

<div class="box">Box Model</div>

</body>
</html>`,
        challenge: "Experiment with the padding and margin values and observe the difference.",
        hint: "Change padding first, then change margin."
    },

    {
        id: 20,
        category: "Box Model",
        title: "Box Sizing",
        subtitle: "Make width calculations easier and more predictable.",
        explanation: `
By default, CSS calculates an element's declared width separately from
its padding and border.

The box-sizing property changes this behavior.

With border-box, the declared width includes the content, padding and
border. This is one reason many modern CSS resets use:

* {
    box-sizing: border-box;
}
        `,
        why: "border-box makes responsive layouts much easier to reason about.",
        syntaxExplanation: "Set box-sizing to border-box when you want padding and borders included in the declared dimensions.",
        syntaxCode: `* {
    box-sizing: border-box;
}`,
        breakdown: [
            { name: "*", text: "Applies the rule to every element." },
            { name: "box-sizing", text: "Controls the sizing model." },
            { name: "border-box", text: "Includes padding and border inside the declared width and height." }
        ],
        tip: "Using border-box globally is a common modern CSS practice.",
        exampleDescription: "Compare the predictable sizing behavior of border-box.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
* {
    box-sizing: border-box;
}

.box {
    width: 300px;
    padding: 40px;
    border: 5px solid #1684ff;
    background: #eef7ff;
}
</style>
</head>
<body>

<div class="box">
    The total width stays 300px.
</div>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
* {
    box-sizing: border-box;
}

.box {
    width: 300px;
    padding: 30px;
    border: 5px solid #7c5cff;
}
</style>
</head>
<body>

<div class="box">Border-box</div>

</body>
</html>`,
        challenge: "Experiment by changing the width, padding and border values.",
        hint: "Notice that the overall declared width remains predictable."
    },

    /* =====================================================
       TYPOGRAPHY
       ===================================================== */

    {
        id: 21,
        category: "Typography",
        title: "Text Styling",
        subtitle: "Control alignment, decoration, spacing and more.",
        explanation: `
CSS provides many properties for controlling text.

You can change alignment, decoration, transformation, indentation,
letter spacing, word spacing, line height and more.

Typography is not only about choosing a font. Spacing and hierarchy are
equally important for readability.
        `,
        why: "Good typography makes a website easier to read and gives it a professional visual identity.",
        syntaxExplanation: "Text properties can be combined to create a clear typographic system.",
        syntaxCode: `p {
    text-align: center;
    line-height: 1.7;
    letter-spacing: 1px;
}`,
        breakdown: [
            { name: "text-align", text: "Controls horizontal text alignment." },
            { name: "line-height", text: "Controls vertical spacing between lines." },
            { name: "letter-spacing", text: "Controls the space between characters." }
        ],
        tip: "Do not overuse letter spacing. Readability should always come first.",
        exampleDescription: "Create a clean typographic block.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.content {
    max-width: 600px;
    margin: 40px auto;
    line-height: 1.7;
    letter-spacing: 0.4px;
    text-align: center;
}
</style>
</head>
<body>

<div class="content">
    <h1>Beautiful Typography</h1>
    <p>Good spacing can make simple text feel much more professional.</p>
</div>

</body>
</html>`,
        extraExamples: [
            {
                title: "Text transform",
                description: "Change capitalization with CSS.",
                code: `text-transform: uppercase;`
            }
        ],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
p {

}
</style>
</head>
<body>

<p>Style this paragraph.</p>

</body>
</html>`,
        challenge: "Center the paragraph and give it a line-height of 1.8.",
        hint: "Use text-align and line-height."
    },

    {
        id: 22,
        category: "Typography",
        title: "Fonts",
        subtitle: "Choose and control typefaces.",
        explanation: `
The font-family property controls which typeface an element uses.

You can specify a preferred font followed by fallback fonts. Other
properties such as font-size, font-weight and font-style help create
typographic hierarchy.
        `,
        why: "Fonts strongly influence the personality and readability of a website.",
        syntaxExplanation: "font-family defines the preferred typeface and fallback options.",
        syntaxCode: `body {
    font-family: Arial, sans-serif;
}`,
        breakdown: [
            { name: "Arial", text: "The preferred font." },
            { name: "sans-serif", text: "A fallback font category." }
        ],
        tip: "Always provide fallback fonts in case the preferred font is unavailable.",
        exampleDescription: "Build a simple typographic hierarchy.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
body {
    font-family: Arial, sans-serif;
}

h1 {
    font-size: 42px;
    font-weight: 700;
}

p {
    font-size: 18px;
}
</style>
</head>
<body>

<h1>CSS Fonts</h1>
<p>Font choices affect the personality of a website.</p>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
body {

}

h1 {

}
</style>
</head>
<body>

<h1>Typography</h1>
<p>Practice font styling.</p>

</body>
</html>`,
        challenge: "Use Arial as the body font and make the heading 40px.",
        hint: "Use font-family and font-size."
    },

    {
        id: 23,
        category: "Typography",
        title: "Web Fonts",
        subtitle: "Use custom fonts in your designs.",
        explanation: `
Web fonts allow websites to use typefaces that may not be installed on
the user's device.

One common approach is importing a web font through CSS. Another is
hosting font files yourself with @font-face.

When using external font services, always consider performance,
availability and licensing.
        `,
        why: "Custom fonts can give your website a distinctive visual identity.",
        syntaxExplanation: "A font can be imported and then assigned through font-family.",
        syntaxCode: `@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

body {
    font-family: 'Inter', sans-serif;
}`,
        breakdown: [
            { name: "@import", text: "Loads an external stylesheet." },
            { name: "font-family", text: "Applies the imported typeface." }
        ],
        tip: "For production projects, self-hosting fonts can provide more control.",
        exampleDescription: "This practice demonstrates a custom font declaration with a fallback.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
body {
    font-family: "Trebuchet MS", Arial, sans-serif;
}

h1 {
    font-size: 42px;
}
</style>
</head>
<body>

<h1>Custom Typography</h1>
<p>Fonts can create a unique brand identity.</p>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
body {
    font-family: Georgia, serif;
}
</style>
</head>
<body>

<h1>Web Fonts</h1>
<p>Try different font families.</p>

</body>
</html>`,
        challenge: "Change the body font to Georgia and the heading to a sans-serif font.",
        hint: "You can override the heading separately."
    },

    {
        id: 24,
        category: "Typography",
        title: "Links and Lists",
        subtitle: "Style navigation links and lists professionally.",
        explanation: `
Links and lists are common interface components.

CSS allows you to remove default list markers, change link colors,
remove underlines, add hover states and create custom navigation systems.

These techniques form the foundation of menus and navigation bars.
        `,
        why: "Almost every website contains links or lists, so knowing how to style them is essential.",
        syntaxExplanation: "Use selectors such as a, a:hover, ul and li to style navigation structures.",
        syntaxCode: `a {
    color: #0b5fc7;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}`,
        breakdown: [
            { name: "a", text: "Targets links." },
            { name: "a:hover", text: "Targets links while the pointer is over them." },
            { name: "text-decoration", text: "Controls decorations such as underlines." }
        ],
        tip: "Keep links visually recognizable, especially when accessibility matters.",
        exampleDescription: "Build a simple horizontal navigation menu.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
ul {
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 0;
}

a {
    text-decoration: none;
    color: #0b5fc7;
    font-weight: bold;
}

a:hover {
    color: #7c5cff;
}
</style>
</head>
<body>

<ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Courses</a></li>
    <li><a href="#">Practice</a></li>
</ul>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
ul {

}

a {

}
</style>
</head>
<body>

<ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Courses</a></li>
</ul>

</body>
</html>`,
        challenge: "Remove the list bullets and make the links blue without underlines.",
        hint: "Use list-style and text-decoration."
    },

    /* =====================================================
       DISPLAY & POSITION
       ===================================================== */

    {
        id: 25,
        category: "Layout",
        title: "Display",
        subtitle: "Understand block, inline, inline-block and none.",
        explanation: `
The display property determines how an element participates in layout.

Block elements generally take a full line. Inline elements flow within
text. Inline-block allows an element to sit inline while still accepting
width and height.

display: none removes an element from the layout entirely.
        `,
        why: "Display is one of the core tools for controlling how elements occupy space.",
        syntaxExplanation: "The display property changes an element's layout behavior.",
        syntaxCode: `.item {
    display: inline-block;
}`,
        breakdown: [
            { name: "inline", text: "Flows with surrounding text." },
            { name: "block", text: "Starts on a new line and normally fills available width." },
            { name: "inline-block", text: "Flows inline while allowing dimensions." },
            { name: "none", text: "Removes the element from layout." }
        ],
        tip: "Modern layouts often rely more heavily on Flexbox and Grid, but display remains fundamental.",
        exampleDescription: "Place several boxes on one line.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
    display: inline-block;
    width: 120px;
    padding: 25px;
    margin: 5px;
    background: #1684ff;
    color: white;
}
</style>
</head>
<body>

<div class="box">One</div>
<div class="box">Two</div>
<div class="box">Three</div>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
    width: 120px;
    padding: 20px;
    background: #7c5cff;

}
</style>
</head>
<body>

<div class="box">One</div>
<div class="box">Two</div>

</body>
</html>`,
        challenge: "Make both boxes appear beside each other.",
        hint: "Try display: inline-block."
    },

    {
        id: 26,
        category: "Layout",
        title: "Position",
        subtitle: "Control where elements appear in a layout.",
        explanation: `
The position property provides several positioning modes:

static is the normal default.
relative allows offsets while preserving the element's original space.
absolute positions an element relative to a positioned ancestor.
fixed attaches an element to the viewport.
sticky combines normal scrolling with a sticking behavior.

Positioning is powerful, but it should be used intentionally.
        `,
        why: "Positioning is useful for badges, overlays, floating controls, headers and many interface details.",
        syntaxExplanation: "Positioning values work with top, right, bottom and left.",
        syntaxCode: `.badge {
    position: absolute;
    top: 10px;
    right: 10px;
}`,
        breakdown: [
            { name: "position: absolute", text: "Removes the element from normal flow and positions it relative to a positioned ancestor." },
            { name: "top", text: "Controls the distance from the top." },
            { name: "right", text: "Controls the distance from the right." }
        ],
        tip: "A parent with position: relative is commonly used as the positioning context for an absolute child.",
        exampleDescription: "Place a badge in the corner of a card.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.card {
    position: relative;
    width: 280px;
    padding: 40px 20px;
    background: #eef7ff;
}

.badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #7c5cff;
    color: white;
    padding: 6px 10px;
    border-radius: 999px;
}
</style>
</head>
<body>

<div class="card">
    <span class="badge">NEW</span>
    <h2>CSS Card</h2>
    <p>Absolute positioning can create overlays.</p>
</div>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.card {
    position: relative;
    width: 250px;
    padding: 50px;
    background: #eef7ff;
}

.badge {
    position: absolute;

}
</style>
</head>
<body>

<div class="card">
    <span class="badge">NEW</span>
    Card
</div>

</body>
</html>`,
        challenge: "Move the badge to the top-right corner.",
        hint: "Use top and right."
    },

    {
        id: 27,
        category: "Layout",
        title: "Z-Index",
        subtitle: "Control which positioned element appears on top.",
        explanation: `
When elements overlap, z-index can control their stacking order.

A higher z-index normally places an element above another element in
the same stacking context.

z-index is especially useful for modals, menus, badges, overlays and
floating interface components.
        `,
        why: "Without stacking control, overlapping interface elements can appear in the wrong order.",
        syntaxExplanation: "Use a numeric z-index value on positioned elements.",
        syntaxCode: `.front {
    position: relative;
    z-index: 10;
}`,
        breakdown: [
            { name: "position", text: "The element needs an appropriate positioning context for z-index to participate." },
            { name: "z-index", text: "Controls stacking order." },
            { name: "10", text: "A higher value places the element above lower stacking values in the same context." }
        ],
        tip: "Do not solve every layout problem with huge z-index numbers. Understand stacking contexts.",
        exampleDescription: "Create two overlapping blocks and control their order.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.scene {
    position: relative;
    height: 220px;
}

.one,
.two {
    position: absolute;
    width: 150px;
    height: 150px;
    display: grid;
    place-items: center;
    color: white;
}

.one {
    background: #1684ff;
    left: 30px;
    top: 30px;
    z-index: 1;
}

.two {
    background: #7c5cff;
    left: 100px;
    top: 80px;
    z-index: 2;
}
</style>
</head>
<body>

<div class="scene">
    <div class="one">ONE</div>
    <div class="two">TWO</div>
</div>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.a, .b {
    position: absolute;
    width: 150px;
    height: 150px;
}

.a {
    background: blue;
    left: 30px;
    top: 30px;
    z-index: 1;
}

.b {
    background: purple;
    left: 80px;
    top: 80px;

}
</style>
</head>
<body>

<div class="a"></div>
<div class="b"></div>

</body>
</html>`,
        challenge: "Make the purple box appear above the blue box.",
        hint: "Give the purple box a higher z-index."
    },

    {
        id: 28,
        category: "Layout",
        title: "Overflow",
        subtitle: "Control content that does not fit inside its box.",
        explanation: `
Overflow controls what happens when content is larger than its container.

Common values include visible, hidden, scroll and auto.

overflow: hidden can be useful for clipping decorative content.
overflow: auto can create scrolling only when it is necessary.
        `,
        why: "Overflow control is important for cards, code editors, containers and responsive interfaces.",
        syntaxExplanation: "The overflow property controls content extending outside an element's box.",
        syntaxCode: `.panel {
    max-height: 180px;
    overflow: auto;
}`,
        breakdown: [
            { name: "max-height", text: "Limits the vertical size." },
            { name: "overflow: auto", text: "Adds scrolling when the content needs more space." }
        ],
        tip: "Be careful with overflow hidden because it can unintentionally clip content.",
        exampleDescription: "Create a scrollable content panel.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.panel {
    width: 300px;
    height: 150px;
    overflow: auto;
    padding: 20px;
    background: #eef7ff;
    border: 2px solid #1684ff;
}
</style>
</head>
<body>

<div class="panel">
    <h2>Scrollable Panel</h2>
    <p>CSS overflow controls what happens when content is too large.</p>
    <p>Keep adding content and the panel will scroll.</p>
    <p>More content...</p>
    <p>More content...</p>
    <p>More content...</p>
</div>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
    width: 250px;
    height: 100px;
    overflow: auto;
    border: 2px solid #7c5cff;
}
</style>
</head>
<body>

<div class="box">
    <p>This content is larger than the box.</p>
    <p>More content.</p>
    <p>More content.</p>
</div>

</body>
</html>`,
        challenge: "Experiment with overflow: hidden and overflow: auto.",
        hint: "Change the overflow value and compare the results."
    },

    /* =====================================================
       FLEXBOX
       ===================================================== */

    {
        id: 29,
        category: "Flexbox",
        title: "Flexbox Fundamentals",
        subtitle: "Build one-dimensional layouts with Flexbox.",
        explanation: `
Flexbox is a layout system designed for arranging items along a row or
column.

A flex container is created with display: flex.

Once an element becomes a flex container, its direct children become flex
items. You can then control direction, alignment, spacing and sizing.
        `,
        why: "Flexbox is one of the most useful CSS layout systems for modern websites.",
        syntaxExplanation: "display: flex turns an element into a flex container.",
        syntaxCode: `.container {
    display: flex;
}`,
        breakdown: [
            { name: "display: flex", text: "Creates a flex formatting context." },
            { name: "flex container", text: "The parent controls the arrangement of its direct children." },
            { name: "flex items", text: "The direct children participate in the flex layout." }
        ],
        tip: "Think of Flexbox as arranging items along one main direction.",
        exampleDescription: "Create a three-item horizontal flex layout.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
    display: flex;
    gap: 15px;
}

.item {
    flex: 1;
    padding: 30px;
    background: #1684ff;
    color: white;
    text-align: center;
}
</style>
</head>
<body>

<div class="container">
    <div class="item">One</div>
    <div class="item">Two</div>
    <div class="item">Three</div>
</div>

</body>
</html>`,
        extraExamples: [
            {
                title: "Column layout",
                description: "Flexbox can also arrange items vertically.",
                code: `.container {
    display: flex;
    flex-direction: column;
}`
            }
        ],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.container {

}

.item {
    padding: 20px;
    background: #1684ff;
    color: white;
}
</style>
</head>
<body>

<div class="container">
    <div class="item">One</div>
    <div class="item">Two</div>
    <div class="item">Three</div>
</div>

</body>
</html>`,
        challenge: "Turn the container into a Flexbox container and add a 15px gap.",
        hint: "Use display: flex and gap."
    },

    {
        id: 30,
        category: "Flexbox",
        title: "Flexbox Alignment",
        subtitle: "Master justify-content and align-items.",
        explanation: `
Flexbox provides powerful alignment controls.

justify-content controls alignment along the main axis.
align-items controls alignment along the cross axis.

Together they make it easy to center content or distribute items across
a container.
        `,
        why: "Flexbox alignment can solve many common layout problems with only a few lines of CSS.",
        syntaxExplanation: "Combine justify-content and align-items for precise alignment.",
        syntaxCode: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
}`,
        breakdown: [
            { name: "justify-content", text: "Controls distribution along the main axis." },
            { name: "align-items", text: "Controls alignment along the cross axis." },
            { name: "center", text: "Places items at the center of the relevant axis." }
        ],
        tip: "If centering does not work, check whether the container has enough height or width for the alignment to be visible.",
        exampleDescription: "Perfectly center an element inside a container.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #03152d;
}

.item {
    padding: 30px;
    background: #22dfff;
    border-radius: 15px;
}
</style>
</head>
<body>

<div class="container">
    <div class="item">Perfectly Centered</div>
</div>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
    height: 250px;
    display: flex;

}

.item {
    padding: 25px;
    background: #7c5cff;
    color: white;
}
</style>
</head>
<body>

<div class="container">
    <div class="item">Center Me</div>
</div>

</body>
</html>`,
        challenge: "Center the item both horizontally and vertically.",
        hint: "Use justify-content: center and align-items: center."
    },

    {
        id: 31,
        category: "Flexbox",
        title: "Flexbox Sizing",
        subtitle: "Control how flex items grow, shrink and occupy space.",
        explanation: `
Flexbox is not only about positioning. It can also control how items
share available space.

The flex property is shorthand for growth, shrinkage and basis.
flex: 1 is commonly used when several items should share available space.
        `,
        why: "Flex sizing lets you create flexible cards, navigation bars and responsive layouts.",
        syntaxExplanation: "flex: 1 tells an item to participate flexibly in the available space.",
        syntaxCode: `.item {
    flex: 1;
}`,
        breakdown: [
            { name: "flex-grow", text: "Controls how an item grows when extra space exists." },
            { name: "flex-shrink", text: "Controls how an item shrinks when space is limited." },
            { name: "flex-basis", text: "Defines the initial size before free space is distributed." }
        ],
        tip: "Try changing one item's flex value to see how it receives more space.",
        exampleDescription: "Create flexible cards with different proportions.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
    display: flex;
    gap: 10px;
}

.one {
    flex: 1;
    background: #1684ff;
}

.two {
    flex: 2;
    background: #7c5cff;
}

.item {
    padding: 40px 20px;
    color: white;
    text-align: center;
}
</style>
</head>
<body>

<div class="container">
    <div class="item one">1 part</div>
    <div class="item two">2 parts</div>
</div>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
    display: flex;
    gap: 10px;
}

.item {
    flex: 1;
    padding: 40px;
    background: #1684ff;
    color: white;
}
</style>
</head>
<body>

<div class="container">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
</div>

</body>
</html>`,
        challenge: "Make the second item twice as wide as the first.",
        hint: "Give the first item flex: 1 and the second flex: 2."
    },

    /* =====================================================
       GRID
       ===================================================== */

    {
        id: 32,
        category: "CSS Grid",
        title: "Grid Fundamentals",
        subtitle: "Build two-dimensional layouts with CSS Grid.",
        explanation: `
CSS Grid is designed for two-dimensional layouts.

Unlike Flexbox, which primarily handles one direction at a time, Grid
can control rows and columns simultaneously.

A grid container is created using display: grid.
        `,
        why: "Grid is excellent for dashboards, galleries, card layouts and complex page structures.",
        syntaxExplanation: "Use grid-template-columns to define the column structure.",
        syntaxCode: `.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}`,
        breakdown: [
            { name: "display: grid", text: "Creates a grid formatting context." },
            { name: "repeat(3, 1fr)", text: "Creates three equal columns." },
            { name: "gap", text: "Creates space between grid items." }
        ],
        tip: "Start with simple equal columns before experimenting with complex grid structures.",
        exampleDescription: "Build a three-column card grid.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

.card {
    padding: 35px;
    background: #eef7ff;
    border-radius: 15px;
    text-align: center;
}
</style>
</head>
<body>

<div class="grid">
    <div class="card">One</div>
    <div class="card">Two</div>
    <div class="card">Three</div>
</div>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.grid {
    display: grid;

}

.card {
    padding: 30px;
    background: #1684ff;
    color: white;
}
</style>
</head>
<body>

<div class="grid">
    <div class="card">1</div>
    <div class="card">2</div>
    <div class="card">3</div>
</div>

</body>
</html>`,
        challenge: "Create three equal columns with a 20px gap.",
        hint: "Use repeat(3, 1fr)."
    },

    {
        id: 33,
        category: "CSS Grid",
        title: "Grid Columns and Rows",
        subtitle: "Control exact grid structures.",
        explanation: `
Grid lets you explicitly define columns and rows.

You can use fr units, pixels, percentages, minmax and repeat to create
flexible structures.

The fr unit represents a fraction of the available space.
        `,
        why: "Precise grid control helps you build professional layouts.",
        syntaxExplanation: "grid-template-columns and grid-template-rows define the grid tracks.",
        syntaxCode: `.layout {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr;
}`,
        breakdown: [
            { name: "200px", text: "Creates a fixed first column." },
            { name: "1fr", text: "Allows the second column to use remaining space." },
            { name: "auto", text: "Lets the browser size a track based on its content and layout." }
        ],
        tip: "Mix fixed and flexible tracks when building sidebars and main content areas.",
        exampleDescription: "Create a sidebar and main content layout.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.layout {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 20px;
}

.sidebar {
    background: #03152d;
    color: white;
    padding: 25px;
}

.main {
    background: #eef7ff;
    padding: 25px;
}
</style>
</head>
<body>

<div class="layout">
    <aside class="sidebar">Sidebar</aside>
    <main class="main">Main Content</main>
</div>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.layout {
    display: grid;

}

.sidebar {
    background: #03152d;
    color: white;
    padding: 20px;
}

.main {
    background: #eef7ff;
    padding: 20px;
}
</style>
</head>
<body>

<div class="layout">
    <aside class="sidebar">Sidebar</aside>
    <main class="main">Main</main>
</div>

</body>
</html>`,
        challenge: "Create a 200px sidebar and let the main section fill the remaining space.",
        hint: "Use grid-template-columns: 200px 1fr."
    },

    {
        id: 34,
        category: "CSS Grid",
        title: "Grid Areas",
        subtitle: "Name parts of your layout for readable page structures.",
        explanation: `
Grid areas allow you to name regions of a grid.

Instead of relying only on numbers, you can describe a layout using
names such as header, sidebar, main and footer.

This makes complex layouts easier to understand and maintain.
        `,
        why: "Named grid areas can make page layouts extremely readable.",
        syntaxExplanation: "Define names using grid-template-areas and assign them with grid-area.",
        syntaxCode: `.page {
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
}`,
        breakdown: [
            { name: "grid-template-areas", text: "Defines a visual map of named regions." },
            { name: "grid-area", text: "Assigns an element to one of those named regions." }
        ],
        tip: "Use meaningful names that describe the role of each region.",
        exampleDescription: "Build a simple page shell with named areas.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.page {
    display: grid;
    grid-template-columns: 180px 1fr;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    gap: 10px;
}

header {
    grid-area: header;
    background: #0b5fc7;
    color: white;
    padding: 20px;
}

aside {
    grid-area: sidebar;
    background: #03152d;
    color: white;
    padding: 20px;
}

main {
    grid-area: main;
    background: #eef7ff;
    padding: 20px;
}

footer {
    grid-area: footer;
    background: #7c5cff;
    color: white;
    padding: 20px;
}
</style>
</head>
<body>

<div class="page">
    <header>Header</header>
    <aside>Sidebar</aside>
    <main>Main</main>
    <footer>Footer</footer>
</div>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.page {
    display: grid;
    grid-template-columns: 180px 1fr;
    grid-template-areas:
        "header header"
        "sidebar main";
}

header {
    grid-area: header;
    padding: 20px;
    background: #1684ff;
    color: white;
}

aside {
    grid-area: sidebar;
    padding: 20px;
    background: #03152d;
    color: white;
}

main {
    grid-area: main;
    padding: 20px;
    background: #eef7ff;
}
</style>
</head>
<body>

<div class="page">
    <header>Header</header>
    <aside>Sidebar</aside>
    <main>Main</main>
</div>

</body>
</html>`,
        challenge: "Add a footer area spanning both columns.",
        hint: "Add a footer name to grid-template-areas and assign grid-area: footer."
    },

    /* =====================================================
       RESPONSIVE DESIGN
       ===================================================== */

    {
        id: 35,
        category: "Responsive Design",
        title: "Responsive Design",
        subtitle: "Make websites adapt to different screen sizes.",
        explanation: `
Responsive design means creating interfaces that work well across
different screen sizes and devices.

A responsive layout should adapt rather than simply shrink.

CSS provides flexible units, Flexbox, Grid, media queries and other
techniques that make this possible.
        `,
        why: "People browse websites on phones, tablets, laptops and large screens. Your layout should work across them.",
        syntaxExplanation: "Responsive design often combines flexible dimensions with media queries.",
        syntaxCode: `.container {
    width: min(90%, 1100px);
    margin: auto;
}`,
        breakdown: [
            { name: "90%", text: "Allows the container to adapt to smaller screens." },
            { name: "1100px", text: "Provides a maximum comfortable width." },
            { name: "margin: auto", text: "Centers the container horizontally." }
        ],
        tip: "Design for flexibility instead of creating a separate fixed website for every device.",
        exampleDescription: "Create a centered responsive container.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
    width: min(90%, 900px);
    margin: 40px auto;
    padding: 30px;
    background: #eef7ff;
    border-radius: 20px;
}
</style>
</head>
<body>

<div class="container">
    <h1>Responsive Container</h1>
    <p>Resize the browser window and observe how the width adapts.</p>
</div>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
    width: min(90%, 1000px);
    margin: auto;
    padding: 20px;
    background: #eef7ff;
}
</style>
</head>
<body>

<div class="container">
    Responsive Content
</div>

</body>
</html>`,
        challenge: "Make the container use 90% of small screens but never exceed 800px.",
        hint: "Use width: min(90%, 800px)."
    },

    {
        id: 36,
        category: "Responsive Design",
        title: "Media Queries",
        subtitle: "Change styles based on screen conditions.",
        explanation: `
Media queries allow CSS to apply different rules depending on conditions
such as viewport width.

They are commonly used to change layouts on smaller screens.

A mobile-first approach usually starts with styles for smaller screens and
then adds enhancements for larger screens.
        `,
        why: "Media queries are one of the main tools for responsive interfaces.",
        syntaxExplanation: "A media query wraps CSS rules that should apply under a specific condition.",
        syntaxCode: `@media (max-width: 700px) {
    .grid {
        grid-template-columns: 1fr;
    }
}`,
        breakdown: [
            { name: "@media", text: "Begins a media query." },
            { name: "max-width", text: "Applies the styles when the viewport is at or below the specified width." },
            { name: "grid-template-columns", text: "Changes the layout at the breakpoint." }
        ],
        tip: "Choose breakpoints based on where your content starts to need adjustment, not only on device names.",
        exampleDescription: "Turn a three-column layout into one column on small screens.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

.card {
    padding: 30px;
    background: #1684ff;
    color: white;
    text-align: center;
}

@media (max-width: 700px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
</style>
</head>
<body>

<div class="grid">
    <div class="card">One</div>
    <div class="card">Two</div>
    <div class="card">Three</div>
</div>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.card {
    padding: 30px;
    background: #7c5cff;
    color: white;
}

@media (max-width: 700px) {

}
</style>
</head>
<body>

<div class="grid">
    <div class="card">1</div>
    <div class="card">2</div>
    <div class="card">3</div>
</div>

</body>
</html>`,
        challenge: "Make the grid become one column below 700px.",
        hint: "Change grid-template-columns inside the media query."
    },

    /* =====================================================
       MODERN CSS
       ===================================================== */

    {
        id: 37,
        category: "Modern CSS",
        title: "CSS Variables",
        subtitle: "Create reusable design values with custom properties.",
        explanation: `
CSS custom properties, commonly called CSS variables, allow you to store
values and reuse them.

Variables are often placed inside :root so they are available throughout
the document.

They are extremely useful for colors, spacing, radii and theme systems.
        `,
        why: "Variables make large stylesheets easier to update and maintain.",
        syntaxExplanation: "Define a variable with two hyphens and retrieve it with var().",
        syntaxCode: `:root {
    --primary: #1684ff;
}

button {
    background: var(--primary);
}`,
        breakdown: [
            { name: "--primary", text: "Defines a custom property." },
            { name: "var()", text: "Reads the stored value." }
        ],
        tip: "Create variables for repeated design decisions instead of copying the same values everywhere.",
        exampleDescription: "Create a small color system using CSS variables.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
:root {
    --primary: #1684ff;
    --dark: #03152d;
    --light: #eef7ff;
}

body {
    background: var(--light);
}

.card {
    border: 2px solid var(--primary);
    padding: 25px;
}

h1 {
    color: var(--dark);
}
</style>
</head>
<body>

<div class="card">
    <h1>CSS Variables</h1>
    <p>Reusable design values make CSS easier to manage.</p>
</div>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
:root {
    --primary: #1684ff;
}

.button {
    background: var(--primary);
    color: white;
    padding: 12px 20px;
    border: none;
}
</style>
</head>
<body>

<button class="button">Variable Button</button>

</body>
</html>`,
        challenge: "Create a --accent variable and use it for the button background.",
        hint: "Define --accent in :root, then use var(--accent)."
    },

    {
        id: 38,
        category: "Modern CSS",
        title: "Pseudo-Classes",
        subtitle: "Style elements based on their state.",
        explanation: `
Pseudo-classes select elements according to a special state.

Common examples include :hover, :focus, :active, :checked, :first-child
and :nth-child().

They are essential for interactive interfaces.
        `,
        why: "Pseudo-classes let your interface react visually to user interaction without JavaScript.",
        syntaxExplanation: "A pseudo-class is written after a selector using a colon.",
        syntaxCode: `button:hover {
    transform: translateY(-2px);
}`,
        breakdown: [
            { name: ":hover", text: "Applies styles when the pointer is over the element." },
            { name: ":focus", text: "Applies styles when an element receives focus." },
            { name: ":active", text: "Applies styles while an element is being activated." }
        ],
        tip: "Always make keyboard focus visible on interactive controls.",
        exampleDescription: "Create an interactive hover button.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
button {
    padding: 14px 24px;
    border: none;
    border-radius: 999px;
    background: #1684ff;
    color: white;
    cursor: pointer;
}

button:hover {
    background: #7c5cff;
    transform: translateY(-2px);
}
</style>
</head>
<body>

<button>Hover Me</button>

</body>
</html>`,
        extraExamples: [
            {
                title: "Focus",
                description: "Focus styles help keyboard users identify the active control.",
                code: `input:focus {
    outline: 3px solid #22dfff;
}`
            }
        ],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
button {
    padding: 15px 25px;
    background: #1684ff;
    color: white;
    border: none;
}

button:hover {

}
</style>
</head>
<body>

<button>Hover Me</button>

</body>
</html>`,
        challenge: "Change the button background to purple when hovered.",
        hint: "Add background inside button:hover."
    },

    {
        id: 39,
        category: "Modern CSS",
        title: "Pseudo-Elements",
        subtitle: "Create visual content with ::before and ::after.",
        explanation: `
Pseudo-elements let you style a specific part of an element or create
generated content.

Two very common pseudo-elements are ::before and ::after.

They are often used for decorative lines, badges, icons, overlays and
visual effects.
        `,
        why: "Pseudo-elements let you create decorative UI without adding unnecessary HTML elements.",
        syntaxExplanation: "Use ::before or ::after with the content property.",
        syntaxCode: `.title::after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background: #22dfff;
}`,
        breakdown: [
            { name: "::after", text: "Creates a generated pseudo-element after the selected element's content." },
            { name: "content", text: "Defines generated content; an empty string is common for decorative elements." },
            { name: "display", text: "Controls how the pseudo-element participates in layout." }
        ],
        tip: "Remember that generated pseudo-elements usually need content, even when the value is an empty string.",
        exampleDescription: "Add a decorative line under a heading.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.title {
    display: inline-block;
}

.title::after {
    content: "";
    display: block;
    width: 60%;
    height: 4px;
    margin-top: 8px;
    background: #22dfff;
    border-radius: 999px;
}
</style>
</head>
<body>

<h1 class="title">ELOMCODE</h1>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.title::after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background: #1684ff;
}
</style>
</head>
<body>

<h1 class="title">CSS Pseudo-Elements</h1>

</body>
</html>`,
        challenge: "Make the decorative line 100px wide and purple.",
        hint: "Change width and background."
    },

    /* =====================================================
       MOTION & EFFECTS
       ===================================================== */

    {
        id: 40,
        category: "Motion",
        title: "Transitions",
        subtitle: "Create smooth changes between CSS states.",
        explanation: `
A transition makes changes between CSS states happen smoothly.

Instead of instantly switching from one value to another, the browser
animates the change over a specified duration.

Transitions are especially useful for hover and focus interactions.
        `,
        why: "Subtle transitions make interfaces feel responsive and polished.",
        syntaxExplanation: "transition specifies which property should animate and how long the change should take.",
        syntaxCode: `button {
    transition: background 0.3s ease, transform 0.3s ease;
}`,
        breakdown: [
            { name: "transition", text: "Defines a smooth change between property values." },
            { name: "0.3s", text: "Defines the duration." },
            { name: "ease", text: "Controls the timing curve." }
        ],
        tip: "Keep interface transitions quick and purposeful. Motion should support the experience, not distract from it.",
        exampleDescription: "Create a smooth button interaction.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
button {
    padding: 15px 28px;
    border: none;
    border-radius: 999px;
    background: #1684ff;
    color: white;
    transition: transform 0.3s ease, background 0.3s ease;
}

button:hover {
    background: #7c5cff;
    transform: translateY(-4px);
}
</style>
</head>
<body>

<button>Hover Me</button>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.button {
    padding: 15px 25px;
    background: #1684ff;
    color: white;
    border: none;
    transition: transform 0.3s ease;
}

.button:hover {
    transform: translateY(-5px);
}
</style>
</head>
<body>

<button class="button">Move Me</button>

</body>
</html>`,
        challenge: "Add a transition for the button background too.",
        hint: "Add background to the transition property."
    },

    {
        id: 41,
        category: "Motion",
        title: "Transforms",
        subtitle: "Move, rotate, scale and skew elements.",
        explanation: `
CSS transforms visually change an element without changing the normal
layout flow.

You can translate, rotate, scale and skew elements.

Transforms are often combined with transitions to create interactive
effects.
        `,
        why: "Transforms are the foundation of many modern micro-interactions and animations.",
        syntaxExplanation: "The transform property accepts functions such as translate, scale and rotate.",
        syntaxCode: `.card:hover {
    transform: translateY(-8px) scale(1.02);
}`,
        breakdown: [
            { name: "translateY", text: "Moves an element vertically." },
            { name: "scale", text: "Changes its visual size." },
            { name: "rotate", text: "Rotates an element." }
        ],
        tip: "Transforms are usually better for movement effects than changing top or left.",
        exampleDescription: "Create a card lift effect.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.card {
    width: 250px;
    padding: 30px;
    background: #eef7ff;
    border-radius: 18px;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-8px) scale(1.02);
}
</style>
</head>
<body>

<div class="card">
    <h2>Hover Effect</h2>
    <p>Move your pointer over the card.</p>
</div>

</body>
</html>`,
        extraExamples: [
            {
                title: "Rotate",
                description: "Rotate an element using degrees.",
                code: `transform: rotate(8deg);`
            }
        ],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
    width: 120px;
    height: 120px;
    background: #7c5cff;
    transition: transform 0.3s ease;
}

.box:hover {

}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>`,
        challenge: "Scale the box to 1.15 when hovered.",
        hint: "Use transform: scale(1.15)."
    },

    {
        id: 42,
        category: "Motion",
        title: "CSS Animations",
        subtitle: "Create multi-step animations with keyframes.",
        explanation: `
CSS animations allow an element to move through multiple visual states.

The @keyframes rule defines the stages of the animation. The animation
property then controls how the animation behaves.

Animations can run automatically without JavaScript.
        `,
        why: "CSS animations are useful for loaders, decorative motion, entrances and subtle visual feedback.",
        syntaxExplanation: "Define @keyframes and assign the animation to an element.",
        syntaxCode: `@keyframes pulse {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.1);
    }
}

.logo {
    animation: pulse 1s infinite alternate;
}`,
        breakdown: [
            { name: "@keyframes", text: "Defines the animation stages." },
            { name: "animation", text: "Assigns the keyframe animation to an element." },
            { name: "infinite", text: "Repeats the animation continuously." }
        ],
        tip: "Use animation responsibly. Respect user preferences such as reduced motion in production interfaces.",
        exampleDescription: "Create a simple pulsing element.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.dot {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #22dfff;
    animation: pulse 1.2s infinite alternate;
}

@keyframes pulse {
    from {
        transform: scale(1);
        opacity: 0.6;
    }

    to {
        transform: scale(1.35);
        opacity: 1;
    }
}
</style>
</head>
<body>

<div class="dot"></div>

</body>
</html>`,
        extraExamples: [],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
    width: 100px;
    height: 100px;
    background: #1684ff;
    animation: move 2s infinite alternate;
}

@keyframes move {
    from {
        transform: translateX(0);
    }

    to {

    }
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>`,
        challenge: "Make the box move 150px to the right.",
        hint: "Use transform: translateX(150px) in the to state."
    },

    {
        id: 43,
        category: "Visual Effects",
        title: "Shadows and Visual Effects",
        subtitle: "Add depth with shadows, opacity, filters and gradients.",
        explanation: `
Modern interfaces often use subtle visual effects to create hierarchy.

box-shadow creates shadows around boxes.
text-shadow creates shadows around text.
opacity controls transparency.
filter can create effects such as blur and brightness.
Gradients can also be combined with these techniques.
        `,
        why: "Visual effects can make interfaces feel layered and polished when used carefully.",
        syntaxExplanation: "box-shadow accepts horizontal offset, vertical offset, blur, spread and color.",
        syntaxCode: `.card {
    box-shadow: 0 20px 50px rgba(3, 21, 45, 0.15);
}`,
        breakdown: [
            { name: "0", text: "Horizontal shadow offset." },
            { name: "20px", text: "Vertical shadow offset." },
            { name: "50px", text: "Blur amount." },
            { name: "rgba(...)", text: "Controls shadow color and transparency." }
        ],
        tip: "Soft, subtle shadows usually look more professional than extremely dark shadows.",
        exampleDescription: "Create a premium-looking card.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.card {
    width: 280px;
    padding: 30px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 50px rgba(3, 21, 45, 0.15);
}
</style>
</head>
<body>

<div class="card">
    <h2>Premium Card</h2>
    <p>Subtle shadows create depth.</p>
</div>

</body>
</html>`,
        extraExamples: [
            {
                title: "Text shadow",
                description: "Add a subtle glow-like shadow to text.",
                code: `text-shadow: 0 4px 20px rgba(34, 223, 255, 0.4);`
            }
        ],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
.card {
    width: 250px;
    padding: 30px;
    background: white;
    border-radius: 18px;

}
</style>
</head>
<body>

<div class="card">
    <h2>Shadow Practice</h2>
</div>

</body>
</html>`,
        challenge: "Add a soft shadow below and around the card.",
        hint: "Use box-shadow with a blur value and a transparent color."
    },

    /* =====================================================
       ADVANCED CSS
       ===================================================== */

    {
        id: 44,
        category: "Advanced CSS",
        title: "Modern Layout Techniques",
        subtitle: "Combine CSS functions and layout systems like a professional.",
        explanation: `
Modern CSS provides powerful functions and layout tools that can make
responsive interfaces easier to build.

Functions such as min(), max() and clamp() allow values to adapt.

For example, clamp() can create fluid typography:

font-size: clamp(2rem, 5vw, 4rem);

The browser chooses a value between the minimum and maximum based on the
preferred middle value.
        `,
        why: "Modern CSS techniques let you create flexible designs with less code and fewer breakpoints.",
        syntaxExplanation: "clamp(minimum, preferred, maximum) creates a bounded fluid value.",
        syntaxCode: `h1 {
    font-size: clamp(2rem, 5vw, 4rem);
}`,
        breakdown: [
            { name: "2rem", text: "Minimum allowed size." },
            { name: "5vw", text: "Preferred fluid value based on viewport width." },
            { name: "4rem", text: "Maximum allowed size." }
        ],
        tip: "Functions such as clamp() are especially useful for responsive typography and spacing.",
        exampleDescription: "Create fluid typography using clamp().",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<style>
.hero {
    min-height: 70vh;
    display: grid;
    place-items: center;
    text-align: center;
    padding: 30px;
    background: linear-gradient(135deg, #03152d, #0b5fc7);
    color: white;
}

h1 {
    font-size: clamp(2.5rem, 8vw, 6rem);
    margin: 0;
}
</style>
</head>
<body>

<section class="hero">
    <h1>Fluid CSS</h1>
</section>

</body>
</html>`,
        extraExamples: [
            {
                title: "Flexible width",
                description: "min() can prevent a container from becoming too wide.",
                code: `width: min(90%, 1100px);`
            },
            {
                title: "Flexible grid",
                description: "auto-fit and minmax can create responsive grids.",
                code: `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));`
            }
        ],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<style>
h1 {
    font-size: clamp(2rem, 6vw, 5rem);
    text-align: center;
}
</style>
</head>
<body>

<h1>Resize the browser</h1>

</body>
</html>`,
        challenge: "Create a heading that never becomes smaller than 2rem or larger than 5rem.",
        hint: "Use clamp(2rem, a fluid value, 5rem)."
    },

    /* =====================================================
       FINAL PROJECT
       ===================================================== */

    {
        id: 45,
        category: "Mastery Project",
        title: "Build a Complete Responsive Page",
        subtitle: "Combine your CSS skills into one polished responsive experience.",
        explanation: `
You have reached the final CSS Masterclass project.

This lesson brings together the major concepts you have learned:
selectors, colors, backgrounds, typography, box model, Flexbox, Grid,
responsive design, media queries, variables, pseudo-classes,
transitions, transforms, animations and visual effects.

The goal is not simply to copy the example. Study how each part works,
then modify it and create your own version.

A strong CSS developer learns to combine small concepts into complete
interfaces.
        `,
        why: `
This final project demonstrates that CSS is not a collection of isolated
properties. It is a system for creating complete visual experiences.

After completing this lesson, you will have completed all 45 lessons of
the ELOMCODE CSS Masterclass.
        `,
        syntaxExplanation: "A real page combines many CSS techniques rather than relying on a single property.",
        syntaxCode: `.page {
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
}

.container {
    width: min(90%, 1100px);
    margin: auto;
}`,
        breakdown: [
            { name: "Grid", text: "Creates the main page structure." },
            { name: "Flexbox", text: "Can organize navigation and component content." },
            { name: "Responsive rules", text: "Adapt the interface to smaller screens." },
            { name: "Variables", text: "Keep the design system consistent." }
        ],
        tip: "Do not be afraid to rewrite the example. Your goal is to understand the decisions behind the design.",
        exampleDescription: "A complete responsive landing page combining the major CSS concepts from this course.",
        exampleCode: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

:root {
    --primary: #1684ff;
    --cyan: #22dfff;
    --dark: #03152d;
    --light: #eef7ff;
    --text: #24344d;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    color: var(--text);
    background: var(--light);
    line-height: 1.6;
}

.page {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
}

header {
    background: var(--dark);
    color: white;
    padding: 18px 5%;
}

nav {
    width: min(1100px, 100%);
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.logo {
    color: var(--cyan);
    font-weight: 800;
    font-size: 24px;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

nav a {
    color: white;
    text-decoration: none;
}

nav a:hover {
    color: var(--cyan);
}

.hero {
    width: min(1100px, 90%);
    margin: auto;
    padding: 80px 0;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 50px;
    align-items: center;
}

.hero h1 {
    font-size: clamp(2.5rem, 7vw, 5.5rem);
    line-height: 1;
    color: var(--dark);
}

.hero h1 span {
    color: var(--primary);
}

.hero p {
    margin-top: 20px;
    font-size: 18px;
    max-width: 600px;
}

.button {
    display: inline-block;
    margin-top: 25px;
    padding: 14px 24px;
    border-radius: 999px;
    background: var(--primary);
    color: white;
    text-decoration: none;
    transition: transform .3s ease, background .3s ease;
}

.button:hover {
    background: #7c5cff;
    transform: translateY(-4px);
}

.preview {
    min-height: 320px;
    border-radius: 30px;
    background:
        radial-gradient(circle at top right, rgba(34,223,255,.35), transparent 35%),
        linear-gradient(135deg, #03152d, #0b5fc7);
    display: grid;
    place-items: center;
    color: white;
    box-shadow: 0 25px 70px rgba(3,21,45,.2);
    animation: floatCard 4s ease-in-out infinite alternate;
}

.preview span {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 900;
}

@keyframes floatCard {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(-12px);
    }
}

.features {
    width: min(1100px, 90%);
    margin: 0 auto 70px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.card {
    background: white;
    padding: 28px;
    border-radius: 20px;
    box-shadow: 0 15px 45px rgba(3,21,45,.08);
    transition: transform .3s ease;
}

.card:hover {
    transform: translateY(-6px);
}

.card h3 {
    color: var(--primary);
    margin-bottom: 10px;
}

footer {
    padding: 25px;
    text-align: center;
    background: var(--dark);
    color: white;
}

@media (max-width: 800px) {

    nav {
        flex-direction: column;
    }

    nav ul {
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero p {
        margin-left: auto;
        margin-right: auto;
    }

    .features {
        grid-template-columns: 1fr;
    }

}

</style>
</head>

<body>

<div class="page">

<header>
    <nav>
        <div class="logo">ELOMCODE</div>

        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Practice</a></li>
        </ul>
    </nav>
</header>

<main>

<section class="hero">

    <div>
        <h1>Build.<br><span>Create.</span><br>Become.</h1>

        <p>
            CSS gives your ideas a visual identity.
            Build beautiful, responsive and interactive experiences.
        </p>

        <a href="#" class="button">Start Building</a>
    </div>

    <div class="preview">
        <span>&lt;/&gt;</span>
    </div>

</section>

<section class="features">

    <article class="card">
        <h3>Responsive</h3>
        <p>
            Create interfaces that adapt beautifully
            across different screen sizes.
        </p>
    </article>

    <article class="card">
        <h3>Creative</h3>
        <p>
            Combine gradients, layouts, effects and
            animation to create unique experiences.
        </p>
    </article>

    <article class="card">
        <h3>Powerful</h3>
        <p>
            Use modern CSS features to transform
            simple HTML into polished interfaces.
        </p>
    </article>

</section>

</main>

<footer>
    ELOMCODE SCHOOL • Learn. Code. Build. Become.
</footer>

</div>

</body>
</html>`,
        extraExamples: [
            {
                title: "Try your own color system",
                description: "Change the CSS variables and watch the entire page theme change.",
                code: `:root {
    --primary: #ff4d8d;
    --cyan: #ffd166;
    --dark: #17121f;
    --light: #fff6fa;
}`
            },
            {
                title: "Make the cards different",
                description: "Experiment with shadows, borders and hover transforms.",
                code: `.card:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 25px 60px rgba(0,0,0,.15);
}`
            }
        ],
        starterCode: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>

:root {
    --primary: #1684ff;
    --dark: #03152d;
    --light: #eef7ff;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: var(--light);
    color: #24344d;
}

.hero {
    min-height: 80vh;
    padding: 60px 8%;
    display: grid;
    place-items: center;
    text-align: center;
    background: linear-gradient(135deg, var(--dark), var(--primary));
    color: white;
}

h1 {
    font-size: clamp(3rem, 8vw, 6rem);
    margin: 0;
}

p {
    max-width: 600px;
    margin: 20px auto;
    font-size: 18px;
}

.button {
    display: inline-block;
    padding: 14px 25px;
    background: white;
    color: var(--primary);
    border-radius: 999px;
    text-decoration: none;
    transition: transform .3s ease;
}

.button:hover {
    transform: translateY(-5px);
}

</style>
</head>

<body>

<section class="hero">

    <div>
        <h1>My CSS Project</h1>

        <p>
            I completed the ELOMCODE CSS Masterclass.
            Now I am building something of my own.
        </p>

        <a href="#" class="button">Explore</a>
    </div>

</section>

</body>
</html>`,
        challenge: "Customize this page. Change the colors, typography, layout and content until it becomes your own responsive website.",
        hint: "Start by changing the CSS variables. Then experiment with the hero, cards, hover effects, spacing and media query."
    }

];

/* =========================================================
   COURSE STATE
   ========================================================= */

let currentLessonIndex = 0;

let savedState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
    completedLessons: [],
    xp: 0,
    currentLesson: 0,
    learnerName: "",
    certificateGenerated: false
};

if (!Array.isArray(savedState.completedLessons)) {
    savedState.completedLessons = [];
}

savedState.completedLessons = savedState.completedLessons
    .map(Number)
    .filter(number => number >= 1 && number <= TOTAL_LESSONS);

savedState.completedLessons = [...new Set(savedState.completedLessons)];

if (typeof savedState.xp !== "number") {
    savedState.xp = savedState.completedLessons.length * XP_PER_LESSON;
}

if (
    typeof savedState.currentLesson !== "number" ||
    savedState.currentLesson < 0 ||
    savedState.currentLesson >= TOTAL_LESSONS
) {
    savedState.currentLesson = 0;
}

currentLessonIndex = savedState.currentLesson;


/* =========================================================
   DOM HELPERS
   ========================================================= */

const $ = selector => document.querySelector(selector);

const lessonList = $("#lessonList");
const experienceLesson = $("#experienceLesson");
const codeEditor = $("#codeEditor");
const previewFrame = $("#previewFrame");

const runButton = $("#runButton");
const resetButton = $("#resetButton");

const previousButton = $("#previousButton");
const completeButton = $("#completeButton");
const nextButton = $("#nextButton");

const progressPercent = $("#progressPercent");
const progressFill = $("#progressFill");
const progressLessons = $("#progressLessons");
const xpText = $("#xpText");
const topXP = $("#topXP");

const certificateButton = $("#certificateButton");
const certificateMainButton = $("#certificateMainButton");
const certificateStatus = $("#certificateStatus");
const certificateCorner = $("#certificateCorner");
const certificateMessage = $("#certificateMessage");

const certificateModal = $("#certificateModal");
const certificateClose = $("#certificateClose");

const certificateNameScreen = $("#certificateNameScreen");
const learnerName = $("#learnerName");
const generateCertificateButton = $("#generateCertificateButton");

const certificatePaper = $("#certificatePaper");
const certificateName = $("#certificateName");
const certificateXP = $("#certificateXP");
const certificateActions = $("#certificateActions");

const printCertificate = $("#printCertificate");
const closeCertificate = $("#closeCertificate");

const xpPopup = $("#xpPopup");


/* =========================================================
   SAVE STATE
   ========================================================= */

function saveState() {
    savedState.currentLesson = currentLessonIndex;

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(savedState)
    );
}


/* =========================================================
   COURSE HELPERS
   ========================================================= */

function getCurrentLesson() {
    return lessons[currentLessonIndex];
}

function isCompleted(id) {
    return savedState.completedLessons.includes(id);
}

function isCourseComplete() {
    return savedState.completedLessons.length === TOTAL_LESSONS;
}

function getProgressPercentage() {
    return Math.round(
        (savedState.completedLessons.length / TOTAL_LESSONS) * 100
    );
}


/* =========================================================
   SIDEBAR
   ========================================================= */

function buildLessonSidebar() {

    if (!lessonList) return;

    lessonList.innerHTML = "";

    const groups = {};

    lessons.forEach((lesson, index) => {

        if (!groups[lesson.category]) {
            groups[lesson.category] = [];
        }

        groups[lesson.category].push({
            ...lesson,
            index
        });

    });

    Object.keys(groups).forEach(category => {

        const groupTitle = document.createElement("div");

        groupTitle.className = "lesson-group-title";
        groupTitle.textContent = category;

        lessonList.appendChild(groupTitle);

        groups[category].forEach(lesson => {

            const item = document.createElement("button");

            item.type = "button";
            item.className = "lesson-item";

            if (lesson.index === currentLessonIndex) {
                item.classList.add("active");
            }

            if (isCompleted(lesson.id)) {
                item.classList.add("completed");
            }

            item.innerHTML = `
                <span class="lesson-number-small">
                    ${String(lesson.id).padStart(2, "0")}
                </span>

                <span class="lesson-item-title">
                    ${lesson.title}
                </span>

                <span class="lesson-check">
                    ${isCompleted(lesson.id) ? "✓" : ""}
                </span>
            `;

            item.addEventListener("click", () => {
                currentLessonIndex = lesson.index;
                saveState();
                renderLesson();
            });

            lessonList.appendChild(item);

        });

    });
}


/* =========================================================
   RENDER LESSON
   ========================================================= */

function renderLesson() {

    const lesson = getCurrentLesson();

    if (!lesson) return;

    /* IMPORTANT:
       Dynamic lesson number.
       01 → 02 → 03 ... → 45
    */

    const lessonNumberElement = $(".lesson-number");

    if (lessonNumberElement) {
        lessonNumberElement.textContent =
            String(currentLessonIndex + 1).padStart(2, "0");
    }

    const categoryElement = $("#lessonCategory");

    if (categoryElement) {
        categoryElement.textContent = lesson.category;
    }

    const titleElement = $("#lessonTitle");

    if (titleElement) {
        titleElement.textContent = lesson.title;
    }

    const subtitleElement = $("#lessonSubtitle");

    if (subtitleElement) {
        subtitleElement.textContent = lesson.subtitle;
    }

    const explanationElement = $("#lessonExplanation");

    if (explanationElement) {
        explanationElement.innerHTML = formatText(lesson.explanation);
    }

    const whyElement = $("#lessonWhy");

    if (whyElement) {
        whyElement.innerHTML = formatText(lesson.why);
    }

    const syntaxExplanationElement = $("#syntaxExplanation");

    if (syntaxExplanationElement) {
        syntaxExplanationElement.innerHTML =
            formatText(lesson.syntaxExplanation);
    }

    const syntaxCodeElement = $("#syntaxCode");

    if (syntaxCodeElement) {
        syntaxCodeElement.textContent = lesson.syntaxCode;
    }

    const syntaxBreakdownElement = $("#syntaxBreakdown");

    if (syntaxBreakdownElement) {

        syntaxBreakdownElement.innerHTML = lesson.breakdown
            .map(item => `
                <div class="breakdown-item">
                    <strong>${escapeHTML(item.name)}</strong>
                    <span>${escapeHTML(item.text)}</span>
                </div>
            `)
            .join("");

    }

    const conceptStrip = $("#conceptStrip");

    if (conceptStrip) {

        const concepts = getConcepts(lesson);

        conceptStrip.innerHTML = concepts
            .map(concept => `<span>${escapeHTML(concept)}</span>`)
            .join("");

    }

    const tipElement = $("#lessonTip");

    if (tipElement) {
        tipElement.textContent = lesson.tip;
    }

    const exampleDescription = $("#exampleDescription");

    if (exampleDescription) {
        exampleDescription.textContent =
            lesson.exampleDescription;
    }

    const exampleCode = $("#exampleCode");

    if (exampleCode) {
        exampleCode.textContent = lesson.exampleCode;
    }

    const extraExamples = $("#extraExamples");

    if (extraExamples) {

        extraExamples.innerHTML = lesson.extraExamples
            .map(example => `
                <article class="extra-example">

                    <div class="extra-example-header">
                        <h4>${escapeHTML(example.title)}</h4>
                    </div>

                    <p>
                        ${escapeHTML(example.description)}
                    </p>

                    <pre><code>${escapeHTML(example.code)}</code></pre>

                </article>
            `)
            .join("");

    }

    if (codeEditor) {
        codeEditor.value = lesson.starterCode;
    }

    const challengeText = $("#challengeText");

    if (challengeText) {
        challengeText.textContent = lesson.challenge;
    }

    const challengeHint = $("#challengeHint");

    if (challengeHint) {
        challengeHint.textContent = lesson.hint;
    }

    updateCompleteButton();
    updateNavigationButtons();
    updateProgressUI();
    updateCertificateUI();
    buildLessonSidebar();

    if (experienceLesson) {
        experienceLesson.scrollTop = 0;
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    runCode(false);
}


/* =========================================================
   TEXT FORMATTER
   ========================================================= */

function formatText(text) {

    if (!text) return "";

    return text
        .trim()
        .split(/\n\s*\n/)
        .map(paragraph => {

            const cleaned = paragraph
                .trim()
                .replace(/\n/g, " ");

            return `<p>${escapeHTML(cleaned)}</p>`;

        })
        .join("");

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   CONCEPT TAGS
   ========================================================= */

function getConcepts(lesson) {

    const categoryMap = {

        "Foundations": [
            "CSS Basics",
            "Syntax",
            "Browser Styling"
        ],

        "Selectors": [
            "Selectors",
            "Targeting",
            "Specificity"
        ],

        "Styling": [
            "Colors",
            "Backgrounds",
            "Visual Design"
        ],

        "Box Model": [
            "Spacing",
            "Dimensions",
            "Box Model"
        ],

        "Typography": [
            "Typography",
            "Fonts",
            "Readability"
        ],

        "Layout": [
            "Layout",
            "Positioning",
            "Display"
        ],

        "Flexbox": [
            "Flexbox",
            "Alignment",
            "Flexible Layout"
        ],

        "CSS Grid": [
            "Grid",
            "Rows",
            "Columns"
        ],

        "Responsive Design": [
            "Responsive",
            "Mobile",
            "Media Queries"
        ],

        "Modern CSS": [
            "Modern CSS",
            "Variables",
            "CSS Functions"
        ],

        "Motion": [
            "Motion",
            "Transitions",
            "Animation"
        ],

        "Visual Effects": [
            "Effects",
            "Shadows",
            "Depth"
        ],

        "Advanced CSS": [
            "Advanced CSS",
            "Fluid Design",
            "Modern Layout"
        ],

        "Mastery Project": [
            "Final Project",
            "Responsive Design",
            "CSS Mastery"
        ]

    };

    return categoryMap[lesson.category] || [
        lesson.category,
        "CSS",
        "Practice"
    ];

}


/* =========================================================
   PROGRESS UI
   ========================================================= */

function updateProgressUI() {

    const completed =
        savedState.completedLessons.length;

    const percentage =
        getProgressPercentage();

    if (progressPercent) {
        progressPercent.textContent =
            `${percentage}%`;
    }

    if (progressFill) {
        progressFill.style.width =
            `${percentage}%`;
    }

    if (progressLessons) {
        progressLessons.textContent =
            `${completed} / ${TOTAL_LESSONS} lessons`;
    }

    if (xpText) {
        xpText.textContent =
            `${savedState.xp} XP`;
    }

    if (topXP) {
        topXP.textContent =
            `${savedState.xp} XP`;
    }

}


/* =========================================================
   COMPLETE BUTTON
   ========================================================= */

function updateCompleteButton() {

    if (!completeButton) return;

    const lesson = getCurrentLesson();

    if (isCompleted(lesson.id)) {

        completeButton.textContent =
            "✓ Lesson Completed";

        completeButton.classList.add("completed");

    } else {

        completeButton.textContent =
            "Complete Lesson";

        completeButton.classList.remove("completed");

    }

}


/* =========================================================
   COMPLETE CURRENT LESSON
   ========================================================= */

function completeCurrentLesson() {

    const lesson = getCurrentLesson();

    if (isCompleted(lesson.id)) {

        goToNextLesson();

        return;

    }

    savedState.completedLessons.push(lesson.id);

    savedState.completedLessons =
        [...new Set(savedState.completedLessons)];

    savedState.xp =
        savedState.completedLessons.length * XP_PER_LESSON;

    saveState();

    showXPPopup();

    updateProgressUI();
    updateCompleteButton();
    updateCertificateUI();
    buildLessonSidebar();

    setTimeout(() => {

        if (currentLessonIndex < TOTAL_LESSONS - 1) {
            goToNextLesson();
        }

    }, 650);

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function updateNavigationButtons() {

    if (previousButton) {
        previousButton.disabled =
            currentLessonIndex === 0;
    }

    if (nextButton) {
        nextButton.disabled =
            currentLessonIndex === TOTAL_LESSONS - 1;
    }

}

function goToPreviousLesson() {

    if (currentLessonIndex <= 0) return;

    currentLessonIndex--;

    saveState();
    renderLesson();

}

function goToNextLesson() {

    if (currentLessonIndex >= TOTAL_LESSONS - 1) return;

    currentLessonIndex++;

    saveState();
    renderLesson();

}


/* =========================================================
   CODE RUNNER
   ========================================================= */

function runCode(showStatus = true) {

    if (!codeEditor || !previewFrame) return;

    const code = codeEditor.value;

    const frameDocument =
        previewFrame.contentDocument ||
        previewFrame.contentWindow.document;

    frameDocument.open();

    frameDocument.write(code);

    frameDocument.close();

    if (showStatus) {
        showEditorStatus("Code executed successfully.");
    }

}

function resetCode() {

    const lesson = getCurrentLesson();

    if (!lesson || !codeEditor) return;

    codeEditor.value =
        lesson.starterCode;

    runCode(true);

    showEditorStatus("Practice area reset.");

}

function showEditorStatus(message) {

    const existing =
        document.querySelector(".editor-status");

    if (existing) {
        existing.remove();
    }

    const status =
        document.createElement("div");

    status.className =
        "editor-status";

    status.textContent =
        message;

    if (codeEditor && codeEditor.parentElement) {

        codeEditor.parentElement.appendChild(status);

        setTimeout(() => {
            status.remove();
        }, 2200);

    }

}


/* =========================================================
   XP POPUP
   ========================================================= */

function showXPPopup() {

    if (!xpPopup) return;

    xpPopup.textContent =
        `+${XP_PER_LESSON} XP`;

    xpPopup.classList.add("show");

    setTimeout(() => {

        xpPopup.classList.remove("show");

    }, 1800);

}


/* =========================================================
   CERTIFICATE SYSTEM
   ========================================================= */

function updateCertificateUI() {

    const complete =
        isCourseComplete();

    if (certificateButton) {

        certificateButton.disabled =
            !complete;

        if (complete) {

            certificateButton.textContent =
                "🏆 Claim Certificate";

            certificateButton.classList.add("unlocked");

        } else {

            certificateButton.textContent =
                "🔒 Certificate Locked";

            certificateButton.classList.remove("unlocked");

        }

    }

    if (certificateMainButton) {

        if (complete) {

            certificateMainButton.textContent =
                "Claim My Certificate";

            certificateMainButton.classList.add("unlocked");

        } else {

            certificateMainButton.textContent =
                "Certificate Locked";

            certificateMainButton.classList.remove("unlocked");

        }

    }

    if (certificateStatus) {

        if (complete) {

            certificateStatus.textContent =
                "Unlocked — 45/45 lessons complete";

        } else {

            certificateStatus.textContent =
                `Complete all ${TOTAL_LESSONS} lessons to unlock your certificate.`;

        }

    }

    if (certificateMessage) {

        if (complete) {

            certificateMessage.textContent =
                "Congratulations! Your CSS Masterclass certificate is ready to claim.";

        } else {

            const remaining =
                TOTAL_LESSONS -
                savedState.completedLessons.length;

            certificateMessage.textContent =
                `${remaining} lesson${remaining === 1 ? "" : "s"} remaining before your certificate unlocks.`;

        }

    }

    if (certificateCorner) {

        certificateCorner.classList.toggle(
            "unlocked",
            complete
        );

    }

}


/* =========================================================
   OPEN CERTIFICATE
   ========================================================= */

function openCertificate() {

    if (!isCourseComplete()) {

        updateCertificateUI();

        alert(
            `Your certificate is still locked.\n\nComplete all ${TOTAL_LESSONS} lessons first.`
        );

        return;

    }

    if (!certificateModal) return;

    certificateModal.classList.add("show");

    document.body.classList.add("certificate-open");

    if (savedState.learnerName) {

        if (learnerName) {
            learnerName.value =
                savedState.learnerName;
        }

    }

    showCertificateNameScreen();

}


/* =========================================================
   NAME SCREEN
   ========================================================= */

function showCertificateNameScreen() {

    if (certificateNameScreen) {
        certificateNameScreen.style.display =
            "block";
    }

    if (certificatePaper) {
        certificatePaper.classList.remove("show");
    }

    if (certificateActions) {
        certificateActions.classList.remove("show");
    }

}


/* =========================================================
   GENERATE CERTIFICATE
   ========================================================= */

function generateCertificate() {

    if (!isCourseComplete()) {
        return;
    }

    const name =
        learnerName
            ? learnerName.value.trim()
            : "";

    if (!name) {

        alert(
            "Please enter your name before generating the certificate."
        );

        if (learnerName) {
            learnerName.focus();
        }

        return;

    }

    savedState.learnerName =
        name;

    savedState.certificateGenerated =
        true;

    savedState.xp =
        TOTAL_XP;

    saveState();

    if (certificateName) {
        certificateName.textContent =
            name;
    }

    if (certificateXP) {
        certificateXP.textContent =
            `${TOTAL_XP.toLocaleString()} XP`;
    }

    addCertificateDate();

    if (certificateNameScreen) {
        certificateNameScreen.style.display =
            "none";
    }

    if (certificatePaper) {
        certificatePaper.classList.add("show");
    }

    if (certificateActions) {
        certificateActions.classList.add("show");
    }

}


/* =========================================================
   CERTIFICATE DATE
   ========================================================= */

function addCertificateDate() {

    if (!certificatePaper) return;

    let dateElement =
        certificatePaper.querySelector(
            ".certificate-completion-date"
        );

    if (!dateElement) {

        dateElement =
            document.createElement("div");

        dateElement.className =
            "certificate-completion-date";

        certificatePaper.appendChild(
            dateElement
        );

    }

    const date =
        new Date();

    dateElement.textContent =
        `Completed: ${date.toLocaleDateString(
            undefined,
            {
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        )}`;

}


/* =========================================================
   CLOSE CERTIFICATE
   ========================================================= */

function closeCertificateModal() {

    if (certificateModal) {
        certificateModal.classList.remove("show");
    }

    document.body.classList.remove(
        "certificate-open"
    );

}


/* =========================================================
   PRINT CERTIFICATE
   ========================================================= */

function printCertificateNow() {

    if (!isCourseComplete()) return;

    window.print();

}


/* =========================================================
   CERTIFICATE EVENT LISTENERS
   ========================================================= */

if (certificateButton) {

    certificateButton.addEventListener(
        "click",
        openCertificate
    );

}

if (certificateMainButton) {

    certificateMainButton.addEventListener(
        "click",
        openCertificate
    );

}

if (certificateClose) {

    certificateClose.addEventListener(
        "click",
        closeCertificateModal
    );

}

if (closeCertificate) {

    closeCertificate.addEventListener(
        "click",
        closeCertificateModal
    );

}

if (generateCertificateButton) {

    generateCertificateButton.addEventListener(
        "click",
        generateCertificate
    );

}

if (printCertificate) {

    printCertificate.addEventListener(
        "click",
        printCertificateNow
    );

}


/* =========================================================
   CLOSE CERTIFICATE WHEN CLICKING BACKDROP
   ========================================================= */

if (certificateModal) {

    certificateModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                certificateModal
            ) {
                closeCertificateModal();
            }

        }
    );

}


/* =========================================================
   ENTER KEY FOR CERTIFICATE NAME
   ========================================================= */

if (learnerName) {

    learnerName.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                event.preventDefault();

                generateCertificate();

            }

        }
    );

}


/* =========================================================
   COURSE BUTTONS
   ========================================================= */

if (runButton) {

    runButton.addEventListener(
        "click",
        () => runCode(true)
    );

}

if (resetButton) {

    resetButton.addEventListener(
        "click",
        resetCode
    );

}

if (previousButton) {

    previousButton.addEventListener(
        "click",
        goToPreviousLesson
    );

}

if (nextButton) {

    nextButton.addEventListener(
        "click",
        goToNextLesson
    );

}

if (completeButton) {

    completeButton.addEventListener(
        "click",
        completeCurrentLesson
    );

}


/* =========================================================
   CTRL + ENTER = RUN CODE
   ========================================================= */

if (codeEditor) {

    codeEditor.addEventListener(
        "keydown",
        event => {

            if (
                event.ctrlKey &&
                event.key === "Enter"
            ) {

                event.preventDefault();

                runCode(true);

            }

        }
    );

}


/* =========================================================
   AUTO-SAVE PRACTICE CODE
   ========================================================= */

let editorSaveTimer;

if (codeEditor) {

    codeEditor.addEventListener(
        "input",
        () => {

            clearTimeout(editorSaveTimer);

            editorSaveTimer =
                setTimeout(() => {

                    localStorage.setItem(
                        "elomcode_css_last_practice",
                        codeEditor.value
                    );

                }, 500);

        }
    );

}


/* =========================================================
   KEYBOARD NAVIGATION
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.target.tagName === "INPUT" ||
            event.target.tagName === "TEXTAREA"
        ) {
            return;
        }

        if (
            event.key === "ArrowLeft" &&
            currentLessonIndex > 0
        ) {

            goToPreviousLesson();

        }

        if (
            event.key === "ArrowRight" &&
            currentLessonIndex <
            TOTAL_LESSONS - 1
        ) {

            goToNextLesson();

        }

    }
);


/* =========================================================
   PARTICLES
   ========================================================= */

function createParticles() {

    const container =
        $("#particles");

    if (!container) return;

    container.innerHTML = "";

    const amount =
        window.innerWidth < 700
            ? 22
            : 42;

    for (let i = 0; i < amount; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            "course-particle";

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.top =
            `${Math.random() * 100}%`;

        particle.style.animationDelay =
            `${Math.random() * 8}s`;

        particle.style.animationDuration =
            `${6 + Math.random() * 8}s`;

        container.appendChild(
            particle
        );

    }

}


/* =========================================================
   PARTICLE RESIZE
   ========================================================= */

let particleResizeTimer;

window.addEventListener(
    "resize",
    () => {

        clearTimeout(
            particleResizeTimer
        );

        particleResizeTimer =
            setTimeout(
                createParticles,
                250
            );

    }
);


/* =========================================================
   PREVIEW FRAME RESIZE SUPPORT
   ========================================================= */

window.addEventListener(
    "message",
    event => {

        if (
            !event.data ||
            event.data.type !==
            "elomcode-preview-height"
        ) {
            return;
        }

        if (previewFrame) {

            previewFrame.style.height =
                `${Math.max(
                    280,
                    event.data.height
                )}px`;

        }

    }
);


/* =========================================================
   COURSE INITIALIZATION
   ========================================================= */

function initializeCourse() {

    /*
       Keep XP synchronized with completed lessons.
       This prevents old inconsistent XP values.
    */

    savedState.xp =
        savedState.completedLessons.length *
        XP_PER_LESSON;

    saveState();

    buildLessonSidebar();
    updateProgressUI();
    updateCertificateUI();
    renderLesson();
    createParticles();

}


/* =========================================================
   START COURSE
   ========================================================= */

initializeCourse();