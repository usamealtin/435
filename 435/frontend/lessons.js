const lessonsData = {
    
    "intro": {
        title: "Introduction to CSS",
        category: "Basics",
        prev: null,
        next: "selectors",
        content: `
            <p class="lead">CSS (Cascading Style Sheets) is the style sheet language used for describing the presentation of a document written in a markup language such as HTML.</p>
            
            <h2>Why use CSS?</h2>
            <p>CSS solves a big problem: <strong>HTML was never intended to contain tags for formatting a web page!</strong></p>
            <p>CSS allows you to create great-looking web pages. It separates the content (HTML) from the presentation (visual design). This means you can change the entire look of a website just by changing one file!</p>

            <h2>CSS Syntax</h2>
            <p>A CSS rule-set consists of a selector and a declaration block:</p>
            
            <div class="code-block">
h1 {
  color: blue;
  font-size: 12px;
}
            </div>
            
            <p>In this example, <code>h1</code> is the selector, and everything inside the curly braces <code>{}</code> is the declaration block.</p>
            
            <a href="editor.html" class="btn btn-outline" style="margin-top:1rem">Open in Live Editor →</a>
        `
    },

    "selectors": {
        title: "CSS Selectors",
        category: "Basics",
        prev: "intro",
        next: "colors",
        content: `
            <p class="lead">Selectors are the heart of CSS. They are patterns used to select the element(s) you want to style.</p>
            
            <h2>1. The Element Selector</h2>
            <p>The element selector selects HTML elements based on the element name.</p>
            
            <div class="code-block">
/* Selects all <p> elements */
p {
  text-align: center;
  color: red;
}
            </div>

            <h2>2. The Class Selector</h2>
            <p>To select elements with a specific class, write a period (.) character, followed by the class name.</p>
             <div class="code-block">
/* Selects all elements with class="center" */
.center {
  text-align: center;
  color: red;
}
            </div>
            
            <p>You can also specify that only specific HTML elements should be affected by a class.</p>
        `
    },

    "colors": {
        title: "Colors & Backgrounds",
        category: "Styling",
        prev: "selectors",
        next: "boxmodel",
        content: `
            <p>Colors in CSS are most often specified by:</p>
            <ul>
                <li>a valid color name - like "red"</li>
                <li>a HEX value - like "#ff0000"</li>
                <li>an RGB value - like "rgb(255,0,0)"</li>
            </ul>

            <h2>Background Color</h2>
            <p>You can set the background color for any HTML element:</p>
            <div class="code-block">
body {
  background-color: #f0f0f0;
}
            </div>
        `
    },
    
    "boxmodel": {
        title: "The Box Model",
        category: "Layout",
        prev: "colors",
        next: "flexbox",
        content: `
            <p>All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.</p>
            <p>The CSS box model is essentially a box that wraps around every HTML element. It consists of:</p>
            <ul>
                <li><strong>Margins:</strong> Clears an area outside the border.</li>
                <li><strong>Borders:</strong> A border that goes around the padding.</li>
                <li><strong>Padding:</strong> Clears an area around the content.</li>
                <li><strong>Content:</strong> The content of the box (text, images).</li>
            </ul>
        `
    },

    "flexbox": {
        title: "Flexbox Layout",
        category: "Layout",
        prev: "boxmodel",
        next: "grid",
        content: `
            <p class="lead">The Flexbox Layout (Flexible Box) module aims at providing a more efficient way to lay out, align and distribute space among items in a container.</p>
            
            <h2>Flex Container</h2>
            <p>To start using the Flexbox model, you need to first define a flex container.</p>
            <div class="code-block">
.container {
  display: flex;
  justify-content: center;
}
            </div>
        `
    },

    "grid": {
        title: "CSS Grid Layout",
        category: "Layout",
        prev: "flexbox",
        next: null,
        content: `
            <p>CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer.</p>
            <p>Like tables, grid layout enables an author to align elements into columns and rows.</p>
             <div class="code-block">
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
}
            </div>
        `
    }
};