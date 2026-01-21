
const lessonsData = {

"intro": {
        title: "Introduction to CSS",
        category: "Basics",
        prev: null,
        next: "selectors",
        content: `
            <p class="lead">CSS (Cascading Style Sheets) is the style sheet language used for describing the presentation of a document written in a markup language such as HTML.</p>

            <p> This lessons will introduce you to the basics of CSS and reinforce your knowledge with quizzes and examples.</p>

            
            <h2>Why use CSS?</h2>
            <p>CSS solves a big problem: <strong>HTML was never intended to contain tags for formatting a web page!</strong></p>
            <p>CSS allows you to create great-looking web pages. It separates the content (HTML) from the presentation (visual design). This means you can change the entire look of a website just by changing one file!</p>

            <h2>CSS Syntax</h2>
            <p>A CSS rule-set consists of a selector and a declaration block:</p>
            
            <div class="code-block" id="intro-1"
                data-html="<h1>Hello CSS</h1>
            <p>Change the CSS values above to see magic!</p>"
                data-css="h1 {
              color: blue;
              font-size: 24px;
            }">
            <pre><code>h1 {
              color: blue;
              font-size: 24px;
            }</code></pre>
            </div>
            
            <p>In this example, <code>h1</code> is the selector, and everything inside the curly braces <code>{}</code> is the declaration block.</p>

            <p>Each CSS rule-set consists of a selector and a declaration block. The selector is the HTML element you want to style, and the declaration block contains one or more declarations separated by semicolons.</p>

            property: value;

            <p>In this example, <code>color</code> is the property, and <code>blue</code> is the value. They are separated by a colon.</p>
            
            <a href="editor.html" class="btn btn-outline open-editor" data-target="intro-1">Open in Live Editor →</a>
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
            
<div class="example-card">

  <h3>Example</h3>
  <p>Here, all &lt;p&gt; elements on the page will be center-aligned, with a red text color:</p>

  <div class="example-code code-block"
       data-html="<p>Every paragraph will be affected by the style.</p>
<p>Me too!</p>
<p>And me!</p>"
       data-css="p { text-align: center; color: red; }">

<pre><code>p {
  text-align: center;
  color: red;
}</code></pre>

  </div>

  <a href="editor.html" class="try-btn open-editor">
    Open live editor »
  </a>

</div>

<h2>2. The Class Selector</h2>
<p>To select elements with a specific class, write a period (.) character, followed by the class name.</p>

<div class="code-block" id="selector-1"
     data-html="<p class='center'>This paragraph will be centered.</p>
<p>This paragraph is not affected.</p>"
     data-css="/* Selects all elements with class=&quot;center&quot; */
.center {
  text-align: center;
  color: orange;
}">

<pre><code>/* Selects all elements with class="center" */
.center {
  text-align: center;
  color: orange;
}</code></pre>

</div>

<p>You can also specify that only specific HTML elements should be affected by a class.</p>

<h2>3. The ID Selector</h2>
<p>
  To select a specific element with a unique id, write a hash (#) character,
  followed by the id name.
</p>

<div class="code-block"
     data-html="<p id='highlight'>This paragraph will be styled.</p>
<p>This paragraph is not affected.</p>"
     data-css="/* Selects the element with id=&quot;highlight&quot; */
#highlight {
  text-align: center;
  color: red;
}">

<pre><code>/* Selects the element with id="highlight" */
#highlight {
  text-align: center;
  color: red;
}</code></pre>

</div>

<p>
  An id name must be unique within a page, meaning it can only be used once.
</p>

<p style="color: blue;">An id name can't start with a number.</p>

<h2>4. The Universal Selector</h2>
<p>
  The universal selector (*) selects <strong>all HTML elements</strong> on the page.
</p>

<div class="code-block"
     data-html="<h3>This is a heading</h3>
<p>This is a paragraph.</p>
<button>A button</button>"
     data-css="/* Selects all elements */
* {
  color: purple;
  font-family: Arial, sans-serif;
}">

<pre><code>/* Selects all elements */
* {
  color: purple;
  font-family: Arial, sans-serif;
}</code></pre>

</div>

<p>
  The universal selector applies the style to every element on the page.
</p>

<p style="color: blue;">
  The universal selector should be used carefully, as it affects all elements.
</p>

<h2>5. The Grouping Selector</h2>
<p>
  The grouping selector allows you to apply the same styles to multiple elements
  by separating them with commas.
</p>

<div class="code-block"
     data-html="<h3>This is a heading</h3>
<p>This is a paragraph.</p>
<div>This is a div element.</div>"
     data-css="/* Selects multiple elements */
h3, p, div {
  color: green;
  text-align: center;
}">

<pre><code>/* Selects multiple elements */
h3, p, div {
  color: green;
  text-align: center;
}</code></pre>

</div>

<p>
  In this example, the same style is applied to all <code>h3</code>,
  <code>p</code>, and <code>div</code> elements.
</p>

<p style="color: blue;">
  Grouping selectors help reduce repetition and keep CSS code cleaner.
</p>

 `
    },

"howto": {
          title: "How to",
          category: "Basics",
          prev: "grouping",
          next: "colors",
          content: `
    <h2>1. How to Add CSS</h2>

    <p>
      CSS can be added to HTML documents in three different ways:
      <strong>External CSS</strong>, <strong>Internal CSS</strong>, and
      <strong>Inline CSS</strong>.
    </p>

    <p style="color: blue;">
      External CSS is the most common and recommended method.
    </p>

    <!-- ===================== -->
    <!-- External CSS -->
    <!-- ===================== -->

    <h3>1. External CSS</h3>
    <p>
      With external CSS, styles are written in a separate <code>.css</code> file
      and linked to the HTML document using the <code>&lt;link&gt;</code> tag.
    </p>

    <div class="code-block"
         data-html="<h3>Hello World</h3>
<p>This page uses external CSS.</p>"
         data-css="h3 {
  color: green;
}

p {
  color: gray;
}">

<pre><code>&lt;!-- HTML file --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot;&gt;

/* styles.css */
h3 {
  color: green;
}

p {
  color: gray;
}</code></pre>

    </div>

    <p>
      External CSS allows you to control the layout of multiple pages
      with a single style sheet.
    </p>

    <!-- ===================== -->
    <!-- Internal CSS -->
    <!-- ===================== -->

    <h3>2. Internal CSS</h3>
    <p>
      Internal CSS is defined inside the <code>&lt;style&gt;</code> tag
      within the <code>&lt;head&gt;</code> section of an HTML page.
    </p>

    <div class="code-block"
         data-html="<h3>Hello World</h3>
<p>This page uses internal CSS.</p>"
         data-css="h3 {
  color: blue;
}

p {
  color: black;
}">

<pre><code>&lt;head&gt;
  &lt;style&gt;
    h3 {
      color: blue;
    }
    p {
      color: black;
    }
  &lt;/style&gt;
&lt;/head&gt;</code></pre>

    </div>

    <p>
      Internal CSS is useful when a single HTML page has a unique style.
    </p>

    <!-- ===================== -->
    <!-- Inline CSS -->
    <!-- ===================== -->

    <h3>3. Inline CSS</h3>
    <p>
      Inline CSS is applied directly to individual HTML elements
      using the <code>style</code> attribute.
    </p>

    <div class="code-block"
         data-html="<h3 style='color: red;'>Hello World</h3>
<p style='color: purple;'>This text uses inline CSS.</p>"
         data-css="">

<pre><code>&lt;h3 style=&quot;color: red;&quot;&gt;Hello World&lt;/h3&gt;
&lt;p style=&quot;color: purple;&quot;&gt;
  This text uses inline CSS.
&lt;/p&gt;</code></pre>

    </div>

    <p>
      Inline CSS should be avoided in most cases, as it mixes content
      with presentation and is harder to maintain.
    </p>

    <p style="color: blue;">
      Best Practice: Use <strong>External CSS</strong> whenever possible.
    </p>
  
    <h2>2. How to add Comments</h2>

    <p>
      Comments are used to explain CSS code and make it easier to understand.
      They are especially helpful when you edit the code later or work in a team.
    </p>

    <p>
      Comments can also be used to temporarily disable parts of CSS code
      without deleting them.
    </p>

    <p style="color: blue;">
      Important: CSS comments are completely ignored by browsers.
    </p>

    <!-- ===================== -->
    <!-- Single-line Comment -->
    <!-- ===================== -->

    <h3>Single-line CSS Comments</h3>
    <p>
      A CSS comment starts with <code>/*</code> and ends with <code>*/</code>.
    </p>

    <div class="code-block"
         data-html="<p>This paragraph is red.</p>"
         data-css="/* This is a single-line comment */
p {
  color: red;
}">

<pre><code>/* This is a single-line comment */
p {
  color: red;
}</code></pre>

    </div>

    <p>
      This comment explains what the CSS rule does, but it does not affect the output.
    </p>

    <!-- ===================== -->
    <!-- Inline Comment -->
    <!-- ===================== -->

    <h3>Inline Comments</h3>
    <p>
      You can place comments at the end of a line to explain a specific property.
    </p>

    <div class="code-block"
         data-html="<p>This paragraph is red.</p>"
         data-css="p {
  color: red;  /* Set text color to red */
}">

<pre><code>p {
  color: red;  /* Set text color to red */
}</code></pre>

    </div>

    <p>
      Inline comments are useful for clarifying individual CSS properties.
    </p>

    <!-- ===================== -->
    <!-- Middle of Line -->
    <!-- ===================== -->

    <h3>Comments Inside a Line</h3>
    <p>
      Comments can even be placed in the middle of a CSS value.
    </p>

    <div class="code-block"
         data-html="<p>This paragraph is blue.</p>"
         data-css="p {
  color: /*red*/ blue;
}">

<pre><code>p {
  color: /*red*/ blue;
}</code></pre>

    </div>

    <p>
      In this example, the browser ignores the commented value and applies the remaining one.
    </p>

    <!-- ===================== -->
    <!-- Multi-line Comment -->
    <!-- ===================== -->

    <h3>Multi-line Comments</h3>
    <p>
      CSS comments can span multiple lines.
      This is useful for longer explanations.
    </p>

    <div class="code-block"
         data-html="<p>This paragraph is red.</p>"
         data-css="/* This is
a multi-line
comment */
p {
  color: red;
}">

<pre><code>/* This is
a multi-line
comment */
p {
  color: red;
}</code></pre>

    </div>

    <!-- ===================== -->
    <!-- HTML + CSS Comments -->
    <!-- ===================== -->

    <h3>HTML and CSS Comments</h3>
    <p>
      HTML and CSS use different comment syntaxes.
    </p>

    <ul>
      <li><strong>HTML comments:</strong> <code>&lt;!-- comment --&gt;</code></li>
      <li><strong>CSS comments:</strong> <code>/* comment */</code></li>
    </ul>

    <div class="code-block"
         data-html="<!-- This is an HTML comment -->
<p>This paragraph is styled with CSS.</p>"
         data-css="/* This is a CSS comment */
p {
  color: green;
}">

<pre><code>&lt;!-- This is an HTML comment --&gt;
p {
  color: green;
}</code></pre>

    </div>

    <p style="color: blue;">
      Best Practice: Use clear and meaningful comments to make your CSS easier to maintain.
    </p>

    `
},

  "colors": {
        title: "CSS Colors",
        category: "Basics",
        prev: "selectors",
        next: "boxmodel",
        content: `
            <h2>CSS Colors</h2>

    <p>
      In CSS, colors can be specified using <strong>color names</strong>,
      <strong>HEX</strong>, <strong>RGB</strong>, <strong>HSL</strong>, and also
      transparent formats like <strong>RGBA</strong> and <strong>HSLA</strong>.
    </p>
    <p style="color: blue;">
      Tip: The <code>color</code> property changes text color, and
      <code>background-color</code> changes the background color.
    </p>

    <!-- ===================== -->
    <!-- 1) Color Names -->
    <!-- ===================== -->
    <h3>1. Color Names</h3>
    <p>
      CSS supports many predefined color names. For example:
      <code>Tomato</code>, <code>DodgerBlue</code>, <code>MediumSeaGreen</code>.
    </p>

    <div class="code-block"
         data-html="<h3 class='t'>Tomato Heading</h3>
<p class='b'>DodgerBlue paragraph</p>
<p class='g'>MediumSeaGreen paragraph</p>"
         data-css=".t { color: Tomato; }
.b { color: DodgerBlue; }
.g { color: MediumSeaGreen; }">

<pre><code>/* Color Names */
.t { color: Tomato; }
.b { color: DodgerBlue; }
.g { color: MediumSeaGreen; }</code></pre>
    </div>

    <!-- ===================== -->
    <!-- 2) HEX -->
    <!-- ===================== -->
    <h3>2. HEX Colors</h3>
    <p>
      HEX colors start with <code>#</code> followed by 6 hexadecimal digits.
      Example: <code>#ff0000</code> is red.
    </p>

    <div class="code-block"
         data-html="<div class='box'>HEX Background</div>"
         data-css=".box {
  background-color: #ffdd57;
  color: #111827;
  padding: 16px;
  border-radius: 10px;
  font-weight: 600;
}">

<pre><code>/* HEX */
.box {
  background-color: #ffdd57;
  color: #111827;
}</code></pre>
    </div>

    <!-- ===================== -->
    <!-- 3) RGB -->
    <!-- ===================== -->
    <h3>3. RGB Colors</h3>
    <p>
      RGB uses the formula <code>rgb(red, green, blue)</code>. Each value ranges
      from <code>0</code> to <code>255</code>.
    </p>

    <div class="code-block"
         data-html="<p class='rgb1'>rgb(255, 0, 0)</p>
<p class='rgb2'>rgb(0, 128, 0)</p>
<p class='rgb3'>rgb(0, 0, 255)</p>"
         data-css=".rgb1 { color: rgb(255, 0, 0); }
.rgb2 { color: rgb(0, 128, 0); }
.rgb3 { color: rgb(0, 0, 255); }">

<pre><code>/* RGB */
.rgb1 { color: rgb(255, 0, 0); }
.rgb2 { color: rgb(0, 128, 0); }
.rgb3 { color: rgb(0, 0, 255); }</code></pre>
    </div>

    <!-- ===================== -->
    <!-- 4) RGBA (opacity) -->
    <!-- ===================== -->
    <h3>4. RGBA Colors (Transparency)</h3>
    <p>
      RGBA adds an alpha channel (opacity) from <code>0.0</code> (transparent)
      to <code>1.0</code> (opaque).
    </p>

    <div class="code-block"
         data-html="<div class='overlay'>RGBA overlay example</div>"
         data-css=".overlay {
  background-color: rgba(255, 0, 0, 0.35);
  padding: 18px;
  border-radius: 10px;
  font-weight: 600;
}">

<pre><code>/* RGBA */
.overlay {
  background-color: rgba(255, 0, 0, 0.35);
}</code></pre>
    </div>

    <!-- ===================== -->
    <!-- 5) HSL -->
    <!-- ===================== -->
    <h3>5. HSL Colors</h3>
    <p>
      HSL stands for <strong>Hue</strong> (0-360), <strong>Saturation</strong> (%),
      and <strong>Lightness</strong> (%).
    </p>

    <div class="code-block"
         data-html="<p class='hsl1'>hsl(0, 100%, 50%)</p>
<p class='hsl2'>hsl(120, 60%, 35%)</p>
<p class='hsl3'>hsl(240, 100%, 60%)</p>"
         data-css=".hsl1 { color: hsl(0, 100%, 50%); }
.hsl2 { color: hsl(120, 60%, 35%); }
.hsl3 { color: hsl(240, 100%, 60%); }">

<pre><code>/* HSL */
.hsl1 { color: hsl(0, 100%, 50%); }
.hsl2 { color: hsl(120, 60%, 35%); }
.hsl3 { color: hsl(240, 100%, 60%); }</code></pre>
    </div>

    <p style="color: blue;">
      Summary: Use color names for quick demos, HEX for design systems, and RGB/HSL when you want precise control.
    </p>
  `
},

"units": {
  title: "CSS Units",
  category: "Basics",
  prev: "counters",
  next: "rwd", // sende yoksa null yap
  content: `
    <h2>CSS Units</h2>

    <p>
      CSS uses different units to express length values (like <code>width</code>, <code>margin</code>,
      <code>padding</code>, <code>font-size</code>, etc.). A length is a number + unit such as
      <code>20px</code>, <code>2rem</code>, <code>50%</code>. :contentReference[oaicite:1]{index=1}
    </p>

    <p style="color: blue;">
      CSS units are grouped into <strong>absolute</strong> and <strong>relative</strong> units. :contentReference[oaicite:2]{index=2}
    </p>

    <!-- ===================== -->
    <!-- 1) Absolute units -->
    <!-- ===================== -->
    <h3>1. Absolute Units</h3>
    <p>
      Absolute units include <code>px</code>, <code>cm</code>, <code>mm</code>, <code>in</code>,
      <code>pt</code>, <code>pc</code>. On screens, <code>px</code> is the most common absolute unit. :contentReference[oaicite:3]{index=3}
    </p>

    <div class="code-block"
         data-html="<div class='abs px'>Width: 240px</div>
<div class='abs pt'>Font: 18pt</div>"
         data-css=".abs{
  border: 2px solid #111827;
  border-radius: 10px;
  padding: 10px 12px;
  margin: 10px 0;
  background: #f9fafb;
}
.px{ width: 240px; }
.pt{ font-size: 18pt; }">

<pre><code>/* absolute units */
.px { width: 240px; }
.pt { font-size: 18pt; }</code></pre>
    </div>

    <p style="color: blue;">
      Note: Physical units (cm, mm, in, pt) are more meaningful for print; for screens, px is common. :contentReference[oaicite:4]{index=4}
    </p>

    <!-- ===================== -->
    <!-- 2) Percent -->
    <!-- ===================== -->
    <h3>2. Percentage (<code>%</code>)</h3>
    <p>
      Percentages are relative to the parent (containing block). Great for responsive widths.
    </p>

    <div class="code-block"
         data-html="<div class='parent'>
  <div class='child'>50% width</div>
</div>"
         data-css=".parent{
  border: 2px dashed #9ca3af;
  padding: 12px;
}
.child{
  width: 50%;
  padding: 10px;
  border-radius: 10px;
  background: #dbeafe;
  border: 2px solid #2563eb;
  font-weight: 700;
}">

<pre><code>/* % is relative to parent */
.child { width: 50%; }</code></pre>
    </div>

    <!-- ===================== -->
    <!-- 3) em -->
    <!-- ===================== -->
    <h3>3. <code>em</code> (Relative to Element Font Size)</h3>
    <p>
      <code>em</code> is relative to the font-size of the element (or its parent, depending on the property).
      Commonly used for spacing around text.
    </p>

    <div class="code-block"
         data-html="<div class='em-wrap'>
  <p class='em-text'>Padding is 1em</p>
</div>"
         data-css=".em-wrap{
  font-size: 20px;
}
.em-text{
  padding: 1em; /* 1em = 20px here */
  border: 2px solid #16a34a;
  border-radius: 10px;
  background: #dcfce7;
  margin: 0;
}">

<pre><code>/* em: based on font-size */
.em-wrap { font-size: 20px; }
.em-text { padding: 1em; }</code></pre>
    </div>

    <!-- ===================== -->
    <!-- 4) rem -->
    <!-- ===================== -->
    <h3>4. <code>rem</code> (Relative to Root Font Size)</h3>
    <p>
      <code>rem</code> is relative to the root element (<code>html</code>) font-size.
      This makes sizing more predictable across a whole page. :contentReference[oaicite:5]{index=5}
    </p>

    <div class="code-block"
         data-html="<div class='rem-card'>
  <h3>Title (1.5rem)</h3>
  <p>Text (1rem)</p>
</div>"
         data-css="html{ font-size: 16px; }

.rem-card{
  border: 2px solid #a855f7;
  border-radius: 12px;
  padding: 1rem;
  background: #faf5ff;
  max-width: 340px;
}
.rem-card h3{
  margin: 0 0 .5rem;
  font-size: 1.5rem; /* 24px if html is 16px */
}
.rem-card p{
  margin: 0;
  font-size: 1rem; /* 16px */
}">

<pre><code>/* rem: based on html font-size */
html { font-size: 16px; }
h3 { font-size: 1.5rem; }
p  { font-size: 1rem; }</code></pre>
    </div>

    <!-- ===================== -->
    <!-- 5) Viewport units -->
    <!-- ===================== -->
    <h3>5. Viewport Units (<code>vw</code>, <code>vh</code>, <code>vmin</code>, <code>vmax</code>)</h3>
    <p>
      Viewport units are based on the browser window size:
      <code>1vw</code> = 1% of viewport width, <code>1vh</code> = 1% of viewport height. :contentReference[oaicite:6]{index=6}
    </p>

    <div class="code-block"
         data-html="<div class='vh-box'>Height: 25vh</div>
<div class='vw-box'>Width: 50vw</div>"
         data-css=".vh-box{
  height: 25vh;
  border-radius: 12px;
  border: 2px solid #0ea5e9;
  background: #ecfeff;
  display: grid;
  place-items: center;
  font-weight: 800;
  margin-bottom: 10px;
}
.vw-box{
  width: 50vw;
  max-width: 520px;
  min-width: 220px;
  padding: 12px;
  border-radius: 12px;
  border: 2px solid #f97316;
  background: #fff7ed;
  font-weight: 800;
}">

<pre><code>/* viewport units */
.vh-box { height: 25vh; }
.vw-box { width: 50vw; }</code></pre>
    </div>

    <!-- ===================== -->
    <!-- 6) Quick guide -->
    <!-- ===================== -->
    <h3>Quick Guide: Which Unit Should I Use?</h3>
    <ul>
      <li><strong>px</strong>: borders, tiny shadows, very precise values</li>
      <li><strong>%</strong>: responsive widths relative to parent</li>
      <li><strong>rem</strong>: typography + spacing system (consistent across site)</li>
      <li><strong>em</strong>: padding/margins that should scale with the element’s text</li>
      <li><strong>vw/vh</strong>: hero sections, fullscreen layouts, responsive sizing tied to viewport</li>
    </ul>

    <p style="color: blue;">
      Tip: Many modern projects use <code>rem</code> for most spacing & typography, and <code>px</code> for borders.
    </p>
  `
},

"inheritance": {
  title: "CSS Inheritance",
  category: "Basics",
  prev: "units",
  next: "cascade", // sende yoksa null yap
  content: `
    <h2>CSS Inheritance</h2>

    <p>
      Inheritance in CSS describes what happens when an element does not have a value
      set for a property. Some properties are <strong>inherited by default</strong>
      (like <code>color</code> and font properties), while others are not (like <code>border</code>). :contentReference[oaicite:1]{index=1}
    </p>

    <p style="color: blue;">
      You can also force inheritance using the <code>inherit</code> keyword for any CSS property. :contentReference[oaicite:2]{index=2}
    </p>

    <!-- ===================== -->
    <!-- 1) Inherited: color -->
    <!-- ===================== -->
    <h3>1. Inherited Example: <code>color</code></h3>
    <p>
      <code>color</code> is inherited, so children usually take the parent's text color
      unless they override it. :contentReference[oaicite:3]{index=3}
    </p>

    <div class="code-block"
         data-html="<div class='parent'>
  Parent text
  <p>Child paragraph</p>
  <p>Another child <span>with span</span></p>
</div>"
         data-css=".parent{
  color: #2563eb;
  font-size: 18px;
  font-family: Arial, sans-serif;
  border: 2px solid #93c5fd;
  padding: 12px;
  border-radius: 12px;
}">

<pre><code>/* inherited properties */
.parent {
  color: #2563eb;
  font-size: 18px;
  font-family: Arial, sans-serif;
}</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 2) Not inherited: border -->
    <!-- ===================== -->
    <h3>2. Not Inherited Example: <code>border</code></h3>
    <p>
      Some properties are not inherited. For example, a parent's border does not
      automatically apply to children. :contentReference[oaicite:4]{index=4}
    </p>

    <div class="code-block"
         data-html="<div class='box'>
  Parent has a border
  <p class='child'>Child paragraph (no border by default)</p>
</div>"
         data-css=".box{
  border: 3px solid #111827;
  padding: 12px;
  border-radius: 12px;
}
.child{
  margin: 10px 0 0;
  padding: 10px;
  background: #f9fafb;
}">

<pre><code>/* non-inherited example */
.box { border: 3px solid #111827; }
/* the child does NOT inherit border */</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 3) Force inheritance: inherit keyword -->
    <!-- ===================== -->
    <h3>3. Forcing Inheritance: <code>inherit</code></h3>
    <p>
      The <code>inherit</code> keyword tells an element to take the computed value
      from its parent for that property. It can be used on any property. :contentReference[oaicite:5]{index=5}
    </p>

    <div class="code-block"
         data-html="<div class='outer'>
  Parent has a dotted border
  <span class='inner'>Child span inherits border</span>
</div>"
         data-css=".outer{
  border: 3px dotted #2563eb;
  padding: 12px;
  border-radius: 12px;
}
.inner{
  border: inherit;  /* inherits parent's border */
  padding: 6px 10px;
  border-radius: 10px;
  margin-left: 6px;
}">

<pre><code>/* inherit keyword */
.outer { border: 3px dotted #2563eb; }
.inner { border: inherit; }</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 4) Practical: make links inherit color -->
    <!-- ===================== -->
    <h3>4. Practical Tip: Make Links Inherit Text Color</h3>
    <p>
      Browsers give links their own default styles. You can make links follow the parent
      text color with <code>color: inherit</code>.
    </p>

    <div class="code-block"
         data-html="<div class='theme'>
  <p>Text in a themed box. <a href='#'>This link inherits color</a></p>
</div>"
         data-css=".theme{
  color: #16a34a;
  border: 2px solid #86efac;
  background: #dcfce7;
  padding: 12px;
  border-radius: 12px;
}
.theme a{
  color: inherit;
  text-decoration: underline;
  font-weight: 700;
}">

<pre><code>/* make link follow the parent's color */
.theme { color: #16a34a; }
.theme a { color: inherit; }</code></pre>

    </div>

    <p style="color: blue;">
      Recap:
      <strong>Inherited</strong> properties flow from parent to child automatically.
      <strong>Non-inherited</strong> properties do not.
      Use <code>inherit</code> to force a property to take the parent's value. :contentReference[oaicite:6]{index=6}
    </p>
  `
},

"boxmodel": {
  title: "CSS Box Model",
  category: "Box Model",
  prev: "dimension",
  next: "display",
  content: `
    <h2>CSS Box Model</h2>

    <p>
      The CSS Box Model describes the design and layout of HTML elements.
      Every element is treated as a rectangular box, and it consists of: 
      <strong>content</strong>, <strong>padding</strong>, <strong>border</strong>, and <strong>margin</strong>.
    </p>

    <p style="color: blue;">
      Tip: Understanding the Box Model is essential for controlling layout and spacing in CSS.
    </p>

    <!-- CONTENT -->
    <h3>1. Content Area</h3>
    <p>
      This is the actual area where text and images appear.
    </p>

    <div class="code-block"
         data-html="<div class='box1'>Content only</div>"
         data-css=".box1 {
  background: #f8f9fa;
  padding: 0;
  border: none;
  margin: 0;
}">

<pre><code>/* content only */
.box1 {
  background: #f8f9fa;
}</code></pre>

    </div>

    <p>
      This box has only content without padding, border, or margin.
    </p>

    <!-- PADDING -->
    <h3>2. Padding</h3>
    <p>
      Padding adds space <strong>inside</strong> the element, around the content.
    </p>

    <div class="code-block"
         data-html="<div class='box2'>Padding only</div>"
         data-css=".box2 {
  padding: 20px;
  background: #e0f7fa;
}">

<pre><code>/* padding example */
.box2 {
  padding: 20px;
  background: #e0f7fa;
}</code></pre>

    </div>

    <p>
      Padding increases the space between the content and the border.
    </p>

    <!-- BORDER -->
    <h3>3. Border</h3>
    <p>
      The border sits between the padding and the margin.
    </p>

    <div class="code-block"
         data-html="<div class='box3'>Border only</div>"
         data-css=".box3 {
  border: 4px solid #00796b;
  padding: 12px;
}">

<pre><code>/* border example */
.box3 {
  border: 4px solid #00796b;
  padding: 12px;
}</code></pre>

    </div>

    <p>
      Borders wrap around the padding and content.
    </p>

    <!-- MARGIN -->
    <h3>4. Margin</h3>
    <p>
      Margin is the outermost layer that creates space between elements.
    </p>

    <div class="code-block"
         data-html="<div class='box4'>Margin only</div>"
         data-css=".box4 {
  margin: 30px;
  padding: 12px;
  background: #ffecb3;
  border: 2px solid #aaa;
}">

<pre><code>/* margin example */
.box4 {
  margin: 30px;
  padding: 12px;
  background: #ffecb3;
  border: 2px solid #aaa;
}</code></pre>

    </div>

    <p>
      Margin adds space outside the border, separating this element from others.
    </p>

    <!-- FULL BOX MODEL -->
    <h3>5. Full Box Model Example</h3>
    <p>
      A combined example showing content, padding, border, and margin.
    </p>

    <div class="code-block"
         data-html="<div class='full-box'>Full Box Model</div>"
         data-css=".full-box {
  margin: 20px;
  padding: 16px;
  border: 3px dotted #3e2723;
  background: #ffe0b2;
}">

<pre><code>/* full box model */
.full-box {
  margin: 20px;
  padding: 16px;
  border: 3px dotted #3e2723;
  background: #ffe0b2;
}</code></pre>

    </div>

    <p style="color: blue;">
      Note: You can inspect the box model in developer tools to see how each part contributes to the total size.
    </p>
  `
},

"dimension": {
  title: "CSS Dimension",
  category: "Box Model",
  prev: "padding",
  next: "display",
  content: `
    <h2>CSS Dimension</h2>

    <p>
      CSS dimensions define the <strong>width</strong> and <strong>height</strong> of elements. 
      These properties control how much horizontal and vertical space an element occupies.
    </p>

    <p style="color: blue;">
      Tip: When setting width and height, consider how padding, border, and margin affect the total size of elements.
    </p>

    <!-- ===================== -->
    <!-- Width Example -->
    <!-- ===================== -->
    <h3>1. Setting Width</h3>
    <p>
      The <code>width</code> property sets the horizontal dimension of an element.
    </p>

    <div class="code-block"
         data-html="<div class='dim1'>Width: 300px</div>"
         data-css=".dim1 {
  width: 300px;
  background: lightblue;
  padding: 12px;
  border: 1px solid #888;
}">

<pre><code>/* width example */
.dim1 {
  width: 300px;
  background: lightblue;
  padding: 12px;
  border: 1px solid #888;
}</code></pre>

    </div>

    <p>
      This box is fixed at 300px wide. If the viewport is narrower, it may overflow.
    </p>

    <!-- ===================== -->
    <!-- Height Example -->
    <!-- ===================== -->
    <h3>2. Setting Height</h3>
    <p>
      The <code>height</code> property sets the vertical dimension of an element.
    </p>

    <div class="code-block"
         data-html="<div class='dim2'>Height: 150px</div>"
         data-css=".dim2 {
  height: 150px;
  background: lightcoral;
  padding: 12px;
  border: 1px solid #888;
}">

<pre><code>/* height example */
.dim2 {
  height: 150px;
  background: lightcoral;
  padding: 12px;
  border: 1px solid #888;
}</code></pre>

    </div>

    <p>
      This box has a fixed height of 150px. If the content is larger, it may overflow.
    </p>

    <!-- ===================== -->
    <!-- Max-Width and Max-Height -->
    <!-- ===================== -->
    <h3>3. Max-Width and Max-Height</h3>
    <p>
      Use <code>max-width</code> and <code>max-height</code> to limit the size
      without strictly fixing it.
    </p>

    <div class="code-block"
         data-html="<div class='dim3'>Max width 400px</div>"
         data-css=".dim3 {
  max-width: 400px;
  padding: 12px;
  background: lightgreen;
  border: 1px solid #888;
}">

<pre><code>/* max-width example */
.dim3 {
  max-width: 400px;
  padding: 12px;
  background: lightgreen;
  border: 1px solid #888;
}</code></pre>

    </div>

    <p>
      The element can shrink smaller than 400px, but will never stretch wider than that.
    </p>

    <!-- ===================== -->
    <!-- Min-Width and Min-Height -->
    <!-- ===================== -->
    <h3>4. Min-Width and Min-Height</h3>
    <p>
      Use <code>min-width</code> and <code>min-height</code> to ensure a minimum size.
    </p>

    <div class="code-block"
         data-html="<div class='dim4'>Min width 250px</div>"
         data-css=".dim4 {
  min-width: 250px;
  min-height: 100px;
  background: lightgoldenrodyellow;
  padding: 12px;
  border: 1px solid #888;
}">

<pre><code>/* min-width and min-height example */
.dim4 {
  min-width: 250px;
  min-height: 100px;
  padding: 12px;
  background: lightgoldenrodyellow;
  border: 1px solid #888;
}</code></pre>

    </div>

    <p style="color: blue;">
      Tip: Min and Max dimension properties help make responsive layouts more flexible.
    </p>
  `
},

"margin": {
  title: "CSS Margin",
  category: "Box Model",
  prev: "borders",
  next: "padding",
  content: `
    <h2>CSS Margin</h2>

    <p>
      The CSS <code>margin</code> property is used to create space around elements.
      Margin pushes other elements away by adding space outside of the element’s border.
    </p>

    <p style="color: blue;">
      Margin does not affect the element’s content area, only the spacing around it.
    </p>

    <!-- ===================== -->
    <!-- Individual Sides -->
    <!-- ===================== -->
    <h3>1. Margin on One Side</h3>
    <p>
      You can set margin for a single side using properties such as
      <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>,
      and <code>margin-left</code>.
    </p>

    <div class="code-block"
         data-html="<div class='m1'>Margin top 50px</div>"
         data-css=".m1 {
  margin-top: 50px;
  background: lightyellow;
  padding: 12px;
  border: 1px solid #888;
}">

<pre><code>/* margin-top example */
.m1 {
  margin-top: 50px;
  background: lightyellow;
  padding: 12px;
  border: 1px solid #888;
}</code></pre>

    </div>

    <p>
      Only the top margin changes in this example, spacing the element downward.
    </p>

    <!-- ===================== -->
    <!-- Margin All Sides -->
    <!-- ===================== -->
    <h3>2. Margin on All Sides</h3>
    <p>
      The <code>margin</code> shorthand lets you set all margins at once.
    </p>

    <div class="code-block"
         data-html="<div class='m2'>Margins on all sides</div>"
         data-css=".m2 {
  margin: 40px;
  background: lightcoral;
  padding: 12px;
  color: white;
}">

<pre><code>/* margin all sides */
.m2 {
  margin: 40px;
  background: lightcoral;
  padding: 12px;
  color: white;
}</code></pre>

    </div>

    <p>
      Setting a single value for <code>margin</code> applies the same spacing
      on all four sides.
    </p>

    <!-- ===================== -->
    <!-- Different Margins -->
    <!-- ===================== -->
    <h3>3. Different Margins</h3>
    <p>
      You can specify different values for top, right, bottom, and left margins.
    </p>

    <div class="code-block"
         data-html="<div class='m3'>Top, Right, Bottom, Left</div>"
         data-css=".m3 {
  margin: 10px 30px 50px 70px;
  background: lightseagreen;
  padding: 12px;
  color: white;
}">

<pre><code>/* margin: top right bottom left */
.m3 {
  margin: 10px 30px 50px 70px;
  background: lightseagreen;
  padding: 12px;
  color: white;
}</code></pre>

    </div>

    <p>
      The values are applied in the order: top → right → bottom → left.
    </p>

    <!-- ===================== -->
    <!-- Auto Margin (Centering) -->
    <!-- ===================== -->
    <h3>4. Auto Margin (Centering)</h3>
    <p>
      If you give an element a fixed width, <code>margin: auto</code> will
      center the element horizontally.
    </p>

    <div class="code-block"
         data-html="<div class='center'>Centered box</div>"
         data-css=".center {
  margin: auto;
  width: 220px;
  background: mediumslateblue;
  padding: 16px;
  color: white;
}">

<pre><code>/* auto margin to center */
.center {
  margin: auto;
  width: 220px;
  background: mediumslateblue;
  padding: 16px;
  color: white;
}</code></pre>

    </div>

    <p style="color: blue;">
      This is a common technique to center fixed-width elements horizontally.
    </p>
  `
},

"padding": {
  title: "CSS Padding",
  category: "Box Model",
  prev: "margin",
  next: "display",
  content: `
    <h2>CSS Padding</h2>

    <p>
      The CSS <code>padding</code> property is used to create space
      <strong>inside</strong> an element between the content and the border.
      Padding increases the element’s internal space.
    </p>

    <p style="color: blue;">
      Note: Padding affects only the inside space — it does not move other elements away (like margin does).
    </p>

    <!-- ===================== -->
    <!-- Padding on All Sides -->
    <!-- ===================== -->
    <h3>1. Padding on All Sides</h3>
    <p>
      You can set padding on all four sides at once using the shorthand
      <code>padding</code> property.
    </p>

    <div class="code-block"
         data-html="<div class='p1'>Box with padding</div>"
         data-css=".p1 {
  padding: 30px;
  background: lightgoldenrodyellow;
  border: 1px solid #888;
}">

<pre><code>/* padding all sides */
.p1 {
  padding: 30px;
  background: lightgoldenrodyellow;
  border: 1px solid #888;
}</code></pre>

    </div>

    <p>
      This example shows space added around the content inside the box.
    </p>

    <!-- ===================== -->
    <!-- Padding on Individual Sides -->
    <!-- ===================== -->
    <h3>2. Padding for Each Side</h3>
    <p>
      You can set padding for each side of an element individually:
      <code>padding-top</code>, <code>padding-right</code>,
      <code>padding-bottom</code>, <code>padding-left</code>.
    </p>

    <div class="code-block"
         data-html="<div class='p2'>Different padding</div>"
         data-css=".p2 {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
  background: lightcyan;
  border: 1px solid #888;
}">

<pre><code>/* padding on individual sides */
.p2 {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
  background: lightcyan;
  border: 1px solid #888;
}</code></pre>

    </div>

    <p>
      Values are written in this order:
      <code>top → right → bottom → left</code>.
    </p>

    <!-- ===================== -->
    <!-- Shorthand Multiple Values -->
    <!-- ===================== -->
    <h3>3. Padding Shorthand (Multiple Values)</h3>
    <p>
      You can also write multiple values in a single line:
      <code>padding: top right bottom left;</code>
    </p>

    <div class="code-block"
         data-html="<div class='p3'>Padding shorthand</div>"
         data-css=".p3 {
  padding: 10px 20px 30px 40px;
  background: lightpink;
  border: 1px solid #888;
}">

<pre><code>/* padding shorthand */
.p3 {
  padding: 10px 20px 30px 40px;
  background: lightpink;
  border: 1px solid #888;
}</code></pre>

    </div>

    <p style="color: blue;">
      Tip: Using shorthand makes your CSS cleaner and easier to read.
    </p>
  `
},

"borders": {
  title: "CSS Borders",
  category: "Box Model",
  prev: "backgrounds",
  next: "boxmodel",
  content: `
    <h2>CSS Borders</h2>

    <p>
      Borders in CSS are used to define the outer edges of elements.
      You can control the <strong>width</strong>, <strong>style</strong>, and <strong>color</strong> of borders.
    </p>

    <p style="color: blue;">
      Tip: Borders can help visually separate content and improve layout.
    </p>

    <!-- ===================== -->
    <!-- Simple Border -->
    <!-- ===================== -->
    <h3>1. Simple Border</h3>
    <p>
      The <code>border</code> shorthand property can set width, style, and color all at once.
    </p>

    <div class="code-block"
         data-html="<div class='box1'>Box with simple border</div>"
         data-css=".box1 {
  border: 3px solid black;
  padding: 16px;
}">

<pre><code>/* Simple border */
.box1 {
  border: 3px solid black;
  padding: 16px;
}</code></pre>

    </div>

    <p>
      This example uses a solid black line as a border around the element.
    </p>

    <!-- ===================== -->
    <!-- Colored Border -->
    <!-- ===================== -->
    <h3>2. Colored Border</h3>
    <p>
      Border colors can be added just like text colors.
    </p>

    <div class="code-block"
         data-html="<div class='box2'>Colored border</div>"
         data-css=".box2 {
  border: 4px solid crimson;
  padding: 16px;
}">

<pre><code>/* Border with color */
.box2 {
  border: 4px solid crimson;
  padding: 16px;
}</code></pre>

    </div>

    <p>
      You can combine any valid CSS color value with your border style.
    </p>

    <!-- ===================== -->
    <!-- Different Border Styles -->
    <!-- ===================== -->
    <h3>3. Border Styles</h3>
    <p>
      CSS supports many border styles, such as <code>dashed</code>, <code>dotted</code>, and <code>double</code>.
    </p>

    <div class="code-block"
         data-html="<div class='box3a'>Dashed border</div>
<div class='box3b'>Dotted border</div>
<div class='box3c'>Double border</div>"
         data-css=".box3a {
  border: 2px dashed #0077cc;
  padding: 8px;
}
.box3b {
  border: 2px dotted #cc7700;
  padding: 8px;
}
.box3c {
  border: 4px double #337733;
  padding: 8px;
}">

<pre><code>/* Different border styles */
.box3a {
  border: 2px dashed #0077cc;
  padding: 8px;
}
.box3b {
  border: 2px dotted #cc7700;
  padding: 8px;
}
.box3c {
  border: 4px double #337733;
  padding: 8px;
}</code></pre>

    </div>

    <p>
      These styles show how you can change the visual look of a border easily.
    </p>

    <!-- ===================== -->
    <!-- Border Radius -->
    <!-- ===================== -->
    <h3>4. Rounded Corners</h3>
    <p>
      You can make border corners rounded using <code>border-radius</code>.
    </p>

    <div class="code-block"
         data-html="<div class='box4'>Rounded border</div>"
         data-css=".box4 {
  border: 3px solid #444;
  border-radius: 12px;
  padding: 16px;
}">

<pre><code>/* Rounded corners */
.box4 {
  border: 3px solid #444;
  border-radius: 12px;
  padding: 16px;
}</code></pre>

    </div>

    <p style="color: blue;">
      Rounded borders create a softer look and are great for buttons and cards.
    </p>
  `
},

"outline": {
  title: "CSS Outline",
  category: "Box Model",
  prev: "boxmodel",
  next: "margin", // istersen kendi sırana göre değiştir
  content: `
    <h2>CSS Outline</h2>

    <p>
      The <code>outline</code> property draws a line around an element,
      outside the border. Unlike borders, outlines do <strong>not</strong>
      take up space, so they don't affect layout.
    </p>

    <p style="color: blue;">
      Tip: Outlines are often used for focus states (keyboard navigation).
    </p>

    <!-- ===================== -->
    <!-- 1) Basic outline -->
    <!-- ===================== -->
    <h3>1. Basic Outline</h3>
    <p>
      You can set outline width, style, and color using the shorthand:
      <code>outline: width style color;</code>
    </p>

    <div class="code-block"
         data-html="<div class='o1'>Outline example</div>"
         data-css=".o1 {
  padding: 16px;
  border: 2px solid #999;
  outline: 4px solid #04AA6D;
}">

<pre><code>/* outline shorthand */
.o1 {
  border: 2px solid #999;
  outline: 4px solid #04AA6D;
}</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 2) Outline styles -->
    <!-- ===================== -->
    <h3>2. Outline Styles</h3>
    <p>
      Outline supports styles like <code>dotted</code>, <code>dashed</code>,
      <code>solid</code>, and <code>double</code>.
    </p>

    <div class="code-block"
         data-html="<div class='o2a'>dotted</div>
<div class='o2b'>dashed</div>
<div class='o2c'>double</div>"
         data-css=".o2a, .o2b, .o2c {
  padding: 12px;
  margin: 10px 0;
  border: 2px solid #bbb;
}

.o2a { outline: 4px dotted #2563eb; }
.o2b { outline: 4px dashed #ea580c; }
.o2c { outline: 5px double #16a34a; }">

<pre><code>/* outline styles */
.o2a { outline: 4px dotted #2563eb; }
.o2b { outline: 4px dashed #ea580c; }
.o2c { outline: 5px double #16a34a; }</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 3) Outline offset -->
    <!-- ===================== -->
    <h3>3. Outline Offset</h3>
    <p>
      Use <code>outline-offset</code> to create space between the border and the outline.
    </p>

    <div class="code-block"
         data-html="<button class='o3'>Focus-like outline</button>"
         data-css=".o3 {
  padding: 12px 16px;
  border: 2px solid #111827;
  background: white;
  cursor: pointer;

  outline: 3px solid #3b82f6;
  outline-offset: 6px;
}">

<pre><code>/* outline-offset */
.o3 {
  outline: 3px solid #3b82f6;
  outline-offset: 6px;
}</code></pre>

    </div>

    <p style="color: blue;">
      Note: Outline is drawn outside the border and does not change element size.
    </p>
  `
},

"text": {
  title: "CSS Text",
  category: "Typography",
  prev: "outline",
  next: "fonts", // sende yoksa null yapabilirsin
  content: `
    <h2>CSS Text</h2>

    <p>
      CSS text properties are used to style and format text. You can control
      alignment, decoration, spacing, and even add effects like shadows.
    </p>

    <p style="color: blue;">
      Tip: The most common text properties are <code>color</code>, <code>text-align</code>,
      <code>text-decoration</code>, and <code>text-transform</code>.
    </p>

    <!-- ===================== -->
    <!-- 1) color -->
    <!-- ===================== -->
    <h3>1. Text Color</h3>
    <p>
      The <code>color</code> property sets the color of text.
    </p>

    <div class="code-block"
         data-html="<p class='t1'>This text is colored.</p>"
         data-css=".t1 { color: #e11d48; font-weight: 700; }">

<pre><code>/* text color */
.t1 {
  color: #e11d48;
  font-weight: 700;
}</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 2) text-align -->
    <!-- ===================== -->
    <h3>2. Text Alignment</h3>
    <p>
      Use <code>text-align</code> to align text inside an element.
    </p>

    <div class="code-block"
         data-html="<p class='a1'>Left aligned</p>
<p class='a2'>Center aligned</p>
<p class='a3'>Right aligned</p>"
         data-css=".a1 { text-align: left; }
.a2 { text-align: center; }
.a3 { text-align: right; }">

<pre><code>/* text-align */
.a1 { text-align: left; }
.a2 { text-align: center; }
.a3 { text-align: right; }</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 3) text-decoration -->
    <!-- ===================== -->
    <h3>3. Text Decoration</h3>
    <p>
      <code>text-decoration</code> is often used to underline links or remove underlines.
    </p>

    <div class="code-block"
         data-html="<a class='d1' href='#'>Underlined link</a><br><br>
<a class='d2' href='#'>No underline</a><br><br>
<p class='d3'>Line-through text</p>"
         data-css=".d1 { text-decoration: underline; }
.d2 { text-decoration: none; color: #2563eb; font-weight: 600; }
.d3 { text-decoration: line-through; }">

<pre><code>/* text-decoration */
.d1 { text-decoration: underline; }
.d2 { text-decoration: none; }
.d3 { text-decoration: line-through; }</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 4) text-transform -->
    <!-- ===================== -->
    <h3>4. Text Transform</h3>
    <p>
      <code>text-transform</code> changes text case without editing the HTML.
    </p>

    <div class="code-block"
         data-html="<p class='tr1'>this will be uppercase</p>
<p class='tr2'>THIS WILL BE lowercase</p>
<p class='tr3'>this will be capitalized</p>"
         data-css=".tr1 { text-transform: uppercase; }
.tr2 { text-transform: lowercase; }
.tr3 { text-transform: capitalize; }">

<pre><code>/* text-transform */
.tr1 { text-transform: uppercase; }
.tr2 { text-transform: lowercase; }
.tr3 { text-transform: capitalize; }</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 5) spacing: indent, letter, word, line-height -->
    <!-- ===================== -->
    <h3>5. Text Spacing</h3>
    <p>
      You can control indentation and spacing using <code>text-indent</code>,
      <code>letter-spacing</code>, <code>word-spacing</code>, and <code>line-height</code>.
    </p>

    <div class="code-block"
         data-html="<p class='sp'>
This paragraph demonstrates spacing properties. It has an indent, larger letter spacing, larger word spacing, and comfortable line height.
</p>"
         data-css=".sp {
  text-indent: 30px;
  letter-spacing: 1px;
  word-spacing: 3px;
  line-height: 1.8;
}">

<pre><code>/* spacing */
.sp {
  text-indent: 30px;
  letter-spacing: 1px;
  word-spacing: 3px;
  line-height: 1.8;
}</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 6) text-shadow -->
    <!-- ===================== -->
    <h3>6. Text Shadow</h3>
    <p>
      <code>text-shadow</code> adds shadow effects to text.
    </p>

    <div class="code-block"
         data-html="<h3 class='sh'>Shadow Text</h3>"
         data-css=".sh {
  font-size: 40px;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.35);
}">

<pre><code>/* text-shadow: x y blur color */
.sh {
  text-shadow: 2px 2px 6px rgba(0,0,0,0.35);
}</code></pre>

    </div>

    <p style="color: blue;">
      Mini recap: Use <code>text-align</code> for alignment, <code>text-decoration</code> for lines,
      and spacing properties to improve readability.
    </p>
  `
},

"fonts": {
  title: "CSS Fonts",
  category: "Typography",
  prev: "text",
  next: "text_align", // istersen sonraki dersi buna bağla
  content: `
    <h2>CSS Fonts</h2>

    <p>
      CSS font properties let you control the look and feel of text.
      You can choose font families, change font size, font weight, and more.
    </p>

    <p style="color: blue;">
      Tip: Using font stacks (multiple fonts) helps maintain design if one font is unavailable.
    </p>

    <!-- ===================== -->
    <!-- 1) font-family -->
    <!-- ===================== -->
    <h3>1. Font Family</h3>
    <p>
      The <code>font-family</code> property defines which font a text should use.
      You can give a list of fonts (a font stack).
    </p>

    <div class="code-block"
         data-html="<p class='ff1'>This uses Arial</p>
<p class='ff2'>This uses Georgia</p>
<p class='ff3'>This uses a fallback stack</p>"
         data-css=".ff1 { font-family: Arial, sans-serif; }
.ff2 { font-family: Georgia, serif; }
.ff3 { font-family: 'Comic Sans MS', cursive, sans-serif; }">

<pre><code>/* font-family examples */
.ff1 { font-family: Arial, sans-serif; }
.ff2 { font-family: Georgia, serif; }
.ff3 { font-family: 'Comic Sans MS', cursive, sans-serif; }</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 2) font-size -->
    <!-- ===================== -->
    <h3>2. Font Size</h3>
    <p>
      The <code>font-size</code> property sets the size of the text.
      You can use pixels, percentages, ems, rems, etc.
    </p>

    <div class="code-block"
         data-html="<p class='fs1'>Small text</p>
<p class='fs2'>Medium text</p>
<p class='fs3'>Large text</p>"
         data-css=".fs1 { font-size: 12px; }
.fs2 { font-size: 18px; }
.fs3 { font-size: 28px; }">

<pre><code>/* font-size examples */
.fs1 { font-size: 12px; }
.fs2 { font-size: 18px; }
.fs3 { font-size: 28px; }</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 3) font-weight -->
    <!-- ===================== -->
    <h3>3. Font Weight</h3>
    <p>
      The <code>font-weight</code> property sets the thickness of the text.
      Bold text uses larger font weight.
    </p>

    <div class="code-block"
         data-html="<p class='fw1'>Normal weight</p>
<p class='fw2'>Bold weight</p>"
         data-css=".fw1 { font-weight: 400; }
.fw2 { font-weight: 700; }">

<pre><code>/* font-weight examples */
.fw1 { font-weight: 400; }
.fw2 { font-weight: 700; }</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 4) line-height -->
    <!-- ===================== -->
    <h3>4. Line Height</h3>
    <p>
      The <code>line-height</code> property sets the spacing between lines of text.
    </p>

    <div class="code-block"
         data-html="<p class='lh'>This is a line-height example. Notice how spacing changes between lines compared to normal text. More space makes text easier to read.</p>"
         data-css=".lh { line-height: 1.8; font-size: 18px; }">

<pre><code>/* line-height example */
.lh { line-height: 1.8; font-size: 18px; }</code></pre>

    </div>

    <p style="color: blue;">
      Summary: Choose font family for style, font-size for size, font-weight for emphasis, and line-height for readability.
    </p>
  `
},

"links": {
  title: "CSS Links",
  category: "Typography",
  prev: "fonts",
  next: "text_shadow",
  content: `
    <h2>CSS Links</h2>

    <p>
      In CSS, you can style hyperlinks (<code>&lt;a&gt;</code> elements) to change how they look in different states,
      such as normal, hovered, clicked (active), and visited.
    </p>

    <p style="color: blue;">
      Tip: The order of link pseudo-classes is important: <code>:link → :visited → :hover → :active</code>.
    </p>

    <!-- ===================== -->
    <!-- 1) Link Colors -->
    <!-- ===================== -->
    <h3>1. Link Colors</h3>
    <p>
      You can change link colors in different states using CSS pseudo-classes.
    </p>

    <div class="code-block"
         data-html="<p>
  <a href='#' class='ln1'>Normal link</a><br>
  <a href='#' class='ln2 visited'>Visited link</a><br>
  <a href='#' class='ln3'>Hover me</a><br>
  <a href='#' class='ln4'>Click me</a>
</p>"
         data-css="a.ln1 { color: blue; }
a.ln2:visited { color: purple; }
a.ln3:hover { color: orange; }
a.ln4:active { color: red; }">

<pre><code>/* link states */
a.ln1 { color: blue; }
a.ln2:visited { color: purple; }
a.ln3:hover { color: orange; }
a.ln4:active { color: red; }</code></pre>

    </div>

    <p>
      Here we show link colors in each state:
      - <strong>Normal</strong> (ln1),
      - <strong>Visited</strong> (ln2),
      - <strong>Hover</strong> (ln3),
      - <strong>Active/Clicked</strong> (ln4).
    </p>

    <!-- ===================== -->
    <!-- 2) Text Decoration -->
    <!-- ===================== -->
    <h3>2. Text Decoration</h3>
    <p>
      You can remove or change underlines and other decorations on links.
    </p>

    <div class="code-block"
         data-html="<p>
  <a href='#' class='dec1'>Underlined link</a><br>
  <a href='#' class='dec2'>No underline</a>
</p>"
         data-css="a.dec1 { text-decoration: underline; }
a.dec2 { text-decoration: none; color: teal; }">

<pre><code>/* text-decoration */
a.dec1 { text-decoration: underline; }
a.dec2 { text-decoration: none; color: teal; }</code></pre>

    </div>

    <p>
      Use <code>text-decoration</code> to control underlines, overlines, or remove them completely.
    </p>

    <!-- ===================== -->
    <!-- 3) Font Weight & Hover -->
    <!-- ===================== -->
    <h3>3. Font Weight & Hover Styles</h3>
    <p>
      You can also change font weight, background, etc., when hovering over a link.
    </p>

    <div class="code-block"
         data-html="<p>
  <a href='#' class='hw1'>Hover Style Example</a>
</p>"
         data-css="a.hw1 {
  color: #444;
  font-weight: 400;
  padding: 4px;
}
a.hw1:hover {
  color: white;
  background: #444;
  font-weight: 600;
}">

<pre><code>/* hover with decoration */
a.hw1 {
  color: #444;
  font-weight: 400;
  padding: 4px;
}
a.hw1:hover {
  color: white;
  background: #444;
  font-weight: 600;
}</code></pre>

    </div>

    <p style="color: blue;">
      Summary: Use pseudo-classes like <code>:hover</code> and <code>:active</code> to make links interactive and visually responsive.
    </p>
  `
},

"icons": {
  title: "CSS Icons",
  category: "Typography",
  prev: "fonts",
  next: "text_align", // update to the next lesson you want
  content: `
    <h2>CSS Icons</h2>

    <p>
      CSS can be used to style icons as well as text. Many sites use icon fonts
      (like Font Awesome) or CSS generated content with Unicode icons.
    </p>

    <p style="color: blue;">
      Tip: Icons are usually text characters styled with CSS — this makes them scalable and flexible.
    </p>

    <!-- ===================== -->
    <!-- 1) Using Unicode Icons -->
    <!-- ===================== -->
    <h3>1. Using Unicode Icons</h3>
    <p>
      CSS can insert Unicode symbols using <code>content</code> and
      <code>:before</code> or <code>:after</code> pseudo-elements.
    </p>

    <div class="code-block"
         data-html="<p class='icon-star'>Star icon example</p>"
         data-css=".icon-star:before {
  content: '\\2605'; /* ★ Unicode star */
  color: gold;
  font-size: 24px;
  margin-right: 8px;
}">

<pre><code>/* CSS with Unicode icon */
.icon-star:before {
  content: '\\2605'; /* ★ */
  color: gold;
  font-size: 24px;
  margin-right: 8px;
}</code></pre>

    </div>

    <p>
      The Unicode <code>\\2605</code> code produces a star symbol ★ before the text.
    </p>

    <!-- ===================== -->
    <!-- 2) Icon Fonts (Example) -->
    <!-- ===================== -->
    <h3>2. Icon Fonts Example</h3>
    <p>
      Many libraries like Font Awesome provide icons as font characters. You add
      the library and use classes to display icons.
    </p>

    <div class="code-block"
         data-html="<!-- Link to Font Awesome (this must be included) -->
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'>
<p class='fa-icon'><i class='fas fa-heart'></i> Heart Icon</p>"
         data-css=".fa-icon i {
  color: crimson;
  font-size: 28px;
  margin-right: 6px;
}">

<pre><code>&lt;!-- HTML --&gt;
&lt;link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'&gt;
&lt;p class='fa-icon'&gt;&lt;i class='fas fa-heart'&gt;&lt;/i&gt; Heart Icon&lt;/p&gt;

/* CSS */
.fa-icon i {
  color: crimson;
  font-size: 28px;
  margin-right: 6px;
}</code></pre>

    </div>

    <p>
      This example uses a linked icon font. When added to a real page, the
      heart icon displays next to the text.
    </p>

    <!-- ===================== -->
    <!-- 3) CSS Shape Icons -->
    <!-- ===================== -->
    <h3>3. CSS Shape Icons</h3>
    <p>
      You can create simple shape “icons” using only CSS and borders/backgrounds.
    </p>

    <div class="code-block"
         data-html="<div class='css-circle'></div>"
         data-css=".css-circle {
  width: 32px;
  height: 32px;
  background: orange;
  border-radius: 50%; /* makes circle */
}">

<pre><code>/* Simple CSS circle icon */
.css-circle {
  width: 32px;
  height: 32px;
  background: orange;
  border-radius: 50%;
}</code></pre>

    </div>

    <p style="color: blue;">
      CSS alone can produce simple shape icons such as circles, squares, or even triangles with clever use of borders.
    </p>
  `
},

"lists": {
  title: "CSS Lists",
  category: "Typography",
  prev: "links",
  next: "tables",  // istersen burayı sonraki derse göre değiştir
  content: `
    <h2>CSS Lists</h2>

    <p>
      CSS provides properties to style HTML lists. You can control the
      list marker type, position, and spacing.
    </p>

    <p style="color: blue;">
      Tip: Lists can be styled to look like menus, navigation, or custom bullets.
    </p>

    <!-- ===================== -->
    <!-- 1) list-style-type -->
    <!-- ===================== -->
    <h3>1. list-style-type</h3>
    <p>
      The <code>list-style-type</code> property sets the marker type
      for list items.
    </p>

    <div class="code-block"
         data-html="<ul class='lst1'>
  <li>Circle bullet</li>
  <li>Circle bullet</li>
  <li>Circle bullet</li>
</ul>"
         data-css=".lst1 {
  list-style-type: circle;
}">

<pre><code>/* list-style-type example */
.lst1 {
  list-style-type: circle;
}</code></pre>

    </div>

    <p>
      You can change the bullets to <code>square</code>, <code>disc</code>,
      <code>none</code>, <code>decimal</code>, and more.
    </p>

    <!-- ===================== -->
    <!-- 2) list-style-position -->
    <!-- ===================== -->
    <h3>2. list-style-position</h3>
    <p>
      The <code>list-style-position</code> property controls whether
      the marker is inside or outside the list box.
    </p>

    <div class="code-block"
         data-html="<ul class='lst2'>
  <li>Marker outside</li>
  <li>Marker outside</li>
  <li>Marker outside</li>
</ul>"
         data-css=".lst2 {
  list-style-type: square;
  list-style-position: outside;
}">

<pre><code>/* list-style-position outside */
.lst2 {
  list-style-type: square;
  list-style-position: outside;
}</code></pre>

    </div>

    <p>
      You can also set <code>list-style-position: inside</code>.
      This will indent the text along with the marker.
    </p>

    <!-- ===================== -->
    <!-- 3) Custom spacing -->
    <!-- ===================== -->
    <h3>3. Custom Spacing</h3>
    <p>
      You can adjust <code>margin</code> and <code>padding</code> to space lists.
    </p>

    <div class="code-block"
         data-html="<ul class='lst3'>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>"
         data-css=".lst3 {
  list-style-type: disc;
  margin-left: 30px;
  padding-left: 20px;
}">

<pre><code>/* custom spacing */
.lst3 {
  list-style-type: disc;
  margin-left: 30px;
  padding-left: 20px;
}</code></pre>

    </div>

    <p>
      Adjusting margins and padding is useful when customizing menus or navigation lists.
    </p>

    <!-- ===================== -->
    <!-- 4) Horizontal list -->
    <!-- ===================== -->
    <h3>4. Horizontal List (Navigation)</h3>
    <p>
      You can make lists horizontal (like menus) by removing default markers
      and using inline display.
    </p>

    <div class="code-block"
         data-html="<ul class='nav'>
  <li><a href='#'>Home</a></li>
  <li><a href='#'>About</a></li>
  <li><a href='#'>Contact</a></li>
</ul>"
         data-css=".nav {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav li {
  display: inline;
  margin-right: 15px;
}
.nav a {
  text-decoration: none;
  color: #2563eb;
}">

<pre><code>/* horizontal list */
.nav {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav li {
  display: inline;
  margin-right: 15px;
}
.nav a {
  text-decoration: none;
  color: #2563eb;
}</code></pre>

    </div>

    <p style="color: blue;">
      Horizontal lists are commonly used for navigation menus at the top of pages.
    </p>
  `
},

"tables": {
  title: "CSS Tables",
  category: "Typography",
  prev: "lists",
  next: "display",  // İstersen bunu kendi sırana göre değiştir
  content: `
    <h2>CSS Tables</h2>

    <p>
      CSS can be used to style HTML tables. You can control borders, spacing,
      text alignment, background colors, and more.
    </p>

    <p style="color: blue;">
      Tip: Tables are often used to display tabular data, and CSS makes them neat.
    </p>

    <!-- ===================== -->
    <!-- 1) Basic Table Style -->
    <!-- ===================== -->
    <h3>1. Basic Table Styling</h3>
    <p>
      You can apply borders and padding to table cells for better readability.
    </p>

    <div class="code-block"
         data-html="<table class='tb1'>
  <tr><th>Name</th><th>Age</th><th>City</th></tr>
  <tr><td>Ali</td><td>23</td><td>Ankara</td></tr>
  <tr><td>Ayşe</td><td>19</td><td>İzmir</td></tr>
  <tr><td>Selim</td><td>30</td><td>İstanbul</td></tr>
</table>"
         data-css=".tb1, .tb1 th, .tb1 td {
  border: 1px solid #444;
  border-collapse: collapse;
}
.tb1 th, .tb1 td {
  padding: 8px 12px;
}">

<pre><code>/* basic table border and padding */
.tb1, .tb1 th, .tb1 td {
  border: 1px solid #444;
  border-collapse: collapse;
}
.tb1 th, .tb1 td {
  padding: 8px 12px;
}</code></pre>

    </div>

    <p>
      This example shows table rows with cell borders and spacing.
    </p>

    <!-- ===================== -->
    <!-- 2) Alternating Row Colors -->
    <!-- ===================== -->
    <h3>2. Alternating Row Colors</h3>
    <p>
      You can use <code>nth-child</code> selectors to style alternating rows.
    </p>

    <div class="code-block"
         data-html="<table class='tb2'>
  <tr><th>Product</th><th>Price</th></tr>
  <tr><td>Pen</td><td>$1.20</td></tr>
  <tr><td>Notebook</td><td>$3.40</td></tr>
  <tr><td>Ruler</td><td>$0.90</td></tr>
  <tr><td>Bag</td><td>$15.00</td></tr>
</table>"
         data-css=".tb2 {
  border-collapse: collapse;
  width: 100%;
}
.tb2 th, .tb2 td {
  border: 1px solid #888;
  padding: 8px;
}
.tb2 tr:nth-child(even) {
  background: #f2f2f2;
}">

<pre><code>/* alternating row colors */
.tb2 {
  border-collapse: collapse;
  width: 100%;
}
.tb2 th, .tb2 td {
  border: 1px solid #888;
  padding: 8px;
}
.tb2 tr:nth-child(even) {
  background: #f2f2f2;
}</code></pre>

    </div>

    <p>
      Alternating row colors make table data easier to read, especially on wide tables.
    </p>

    <!-- ===================== -->
    <!-- 3) Center Text & Header Background -->
    <!-- ===================== -->
    <h3>3. Center Text & Header Background</h3>
    <p>
      You can center the table text and give a background to the header.
    </p>

    <div class="code-block"
         data-html="<table class='tb3'>
  <tr><th>Team</th><th>Points</th></tr>
  <tr><td>Team A</td><td>42</td></tr>
  <tr><td>Team B</td><td>38</td></tr>
</table>"
         data-css=".tb3 {
  border-collapse: collapse;
}
.tb3 th {
  background: #2563eb;
  color: white;
  padding: 10px 14px;
  text-align: center;
}
.tb3 td {
  border: 1px solid #444;
  padding: 8px 12px;
  text-align: center;
}">

<pre><code>/* header background & center text */
.tb3 {
  border-collapse: collapse;
}
.tb3 th {
  background: #2563eb;
  color: white;
  padding: 10px 14px;
  text-align: center;
}
.tb3 td {
  border: 1px solid #444;
  padding: 8px 12px;
  text-align: center;
}</code></pre>

    </div>

    <p style="color: blue;">
      Header backgrounds help visually separate header cells from data cells.
    </p>
  `
},

"backgrounds": {
  title: "CSS Backgrounds",
  category: "Visual Styling",
  prev: "colors",
  next: "borders",
  content: `
    <h2>CSS Backgrounds</h2>

    <p>
      CSS provides several properties for setting the background of an element.
      The most common ones include <code>background-color</code>,
      <code>background-image</code>, <code>background-repeat</code>, and
      <code>background-size</code>.
    </p>

    <p style="color: blue;">
      The <code>background</code> shorthand can also set multiple background properties at once.
    </p>

    <!-- ===================== -->
    <!-- background-color -->
    <!-- ===================== -->

    <h3>1. Background Color</h3>
    <p>
      The <code>background-color</code> property sets the background color of an element.
    </p>

    <div class="code-block"
         data-html="<div class='bg1'>Box with background color</div>"
         data-css=".bg1 {
  background-color: lightblue;
  padding: 16px;
  border-radius: 8px;
}">

<pre><code>/* background-color example */
.bg1 {
  background-color: lightblue;
  padding: 16px;
  border-radius: 8px;
}</code></pre>

    </div>

    <p>
      Use <code>background-color</code> to add solid color backgrounds to elements.
    </p>

    <!-- ===================== -->
    <!-- background-image -->
    <!-- ===================== -->

    <h3>2. Background Image</h3>
    <p>
      The <code>background-image</code> property sets an image as the background.
    </p>

    <div class="code-block"
         data-html="<div class='bg2'>Hello with image</div>"
         data-css=".bg2 {
  background-image: url('https://www.w3schools.com/css/img_lights.jpg');
  padding: 36px;
  color: white;
  text-shadow: 1px 1px #000;
}">

<pre><code>/* background-image example */
.bg2 {
  background-image: url('https://www.w3schools.com/css/img_lights.jpg');
  padding: 36px;
  color: white;
  text-shadow: 1px 1px #000;
}</code></pre>

    </div>

    <p>
      Replace the URL with your own image path to change the background image.
    </p>

    <!-- ===================== -->
    <!-- background-repeat -->
    <!-- ===================== -->

    <h3>3. Background Repeat</h3>
    <p>
      By default, background images repeat. You can control this with
      <code>background-repeat</code>.
    </p>

    <div class="code-block"
         data-html="<div class='bg3'>No repeat</div>"
         data-css=".bg3 {
  background-image: url('https://www.w3schools.com/css/img_forest.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px;
  color: white;
  text-shadow: 1px 1px #000;
}">

<pre><code>/* background-repeat example */
.bg3 {
  background-image: url('https://www.w3schools.com/css/img_forest.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}</code></pre>

    </div>

    <p>
      Use <code>no-repeat</code> and <code>background-size</code> to control how the image fills the element.
    </p>

    <!-- ===================== -->
    <!-- background shorthand -->
    <!-- ===================== -->

    <h3>4. Background Shorthand</h3>
    <p>
      The <code>background</code> shorthand can set multiple background properties at once.
    </p>

    <div class="code-block"
         data-html="<div class='bg4'>Shorthand Example</div>"
         data-css=".bg4 {
  background: lightgreen url('https://www.w3schools.com/css/img_mountains.jpg') no-repeat center/cover;
  padding: 40px;
  color: white;
  text-shadow: 1px 1px #000;
}">

<pre><code>/* background shorthand */
.bg4 {
  background: lightgreen url('https://www.w3schools.com/css/img_mountains.jpg')
              no-repeat center/cover;
}</code></pre>

    </div>

    <p style="color: blue;">
      Tip: Using shorthand saves space and can make CSS cleaner.
    </p>
  `
},

"image_transparency": {
  title: "CSS Image Transparency (Opacity)",
  category: "Visual Styling",
  prev: "pseudo",
  next: "filters", // sende yoksa null yap
  content: `
    <h2>CSS Image Transparency (Opacity)</h2>

    <p>
      The <code>opacity</code> property controls how transparent an element is.
      It accepts values from <code>0.0</code> (fully transparent) to <code>1.0</code> (fully visible). :contentReference[oaicite:1]{index=1}
    </p>

    <p style="color: blue;">
      Important: <code>opacity</code> affects the whole element (including its text and children).
      If you only want a transparent background, use <code>rgba()</code> instead.
    </p>

    <!-- ===================== -->
    <!-- 1) Basic opacity -->
    <!-- ===================== -->
    <h3>1. Basic Opacity</h3>
    <p>
      Lower opacity makes the image more transparent.
    </p>

    <div class="code-block"
         data-html="<img class='op1' src='https://www.w3schools.com/css/img_forest.jpg' alt='Forest'>
<img class='op2' src='https://www.w3schools.com/css/img_forest.jpg' alt='Forest'>
<img class='op3' src='https://www.w3schools.com/css/img_forest.jpg' alt='Forest'>"
         data-css="img{
  width: 170px;
  height: 110px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 10px;
  border: 2px solid #111827;
}
.op1{ opacity: 0.2; }
.op2{ opacity: 0.5; }
.op3{ opacity: 1; }">

<pre><code>/* opacity examples */
.op1 { opacity: 0.2; }
.op2 { opacity: 0.5; }
.op3 { opacity: 1; }</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 2) Opacity + hover -->
    <!-- ===================== -->
    <h3>2. Opacity and <code>:hover</code></h3>
    <p>
      A common effect is “fade in” on hover:
    </p>

    <div class="code-block"
         data-html="<img class='hover-fade' src='https://www.w3schools.com/css/img_mountains.jpg' alt='Mountains'>
<img class='hover-fade' src='https://www.w3schools.com/css/img_5terre.jpg' alt='Italy'>"
         data-css=".hover-fade{
  width: 180px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid #111827;
  opacity: 0.55;
  transition: opacity 0.2s ease;
  margin-right: 10px;
}
.hover-fade:hover{
  opacity: 1;
}">

<pre><code>/* hover opacity */
.hover-fade {
  opacity: 0.55;
}
.hover-fade:hover {
  opacity: 1;
}</code></pre>

    </div>

    <p style="color: blue;">
      This pattern is shown commonly for image galleries. :contentReference[oaicite:2]{index=2}
    </p>

    <!-- ===================== -->
    <!-- 3) Transparent Box: rgba instead of opacity -->
    <!-- ===================== -->
    <h3>3. Transparent Box (Keep Text Solid)</h3>
    <p>
      If you set <code>opacity</code> on a container, the text also becomes transparent.
      To make only the background transparent, use <code>rgba()</code>.
    </p>

    <div class="code-block"
         data-html="<div class='card'>
  <h3>Transparent background</h3>
  <p>Text stays fully visible ✅</p>
</div>"
         data-css=".card{
  padding: 16px;
  border-radius: 12px;
  border: 2px solid #111827;
  /* only background is transparent */
  background: rgba(59,130,246,0.18);
}
.card h3{ margin: 0 0 6px; }">

<pre><code>/* use rgba for transparent background */
.card {
  background: rgba(59,130,246,0.18);
}</code></pre>

    </div>

    <p style="color: blue;">
      Recap: Use <code>opacity</code> for whole-element transparency; use <code>rgba()</code> when you want only the background to be transparent.
    </p>
  `
},

"forms": {
  title: "CSS Forms",
  category: "Visual Styling",
  prev: "attribute_selectors",
  next: "buttons", // sende yoksa null yap
  content: `
    <h2>CSS Forms</h2>

    <p>
      CSS can make form elements (inputs, textareas, selects, and buttons)
      look cleaner and more modern. In this lesson, we will style a simple form
      and learn common patterns like focus styles and full-width inputs.
    </p>

    <p style="color: blue;">
      Tip: A good form has clear spacing, readable labels, and a visible focus state.
    </p>

    <!-- ===================== -->
    <!-- 1) Basic input styling -->
    <!-- ===================== -->
    <h3>1. Basic Input Styling</h3>
    <p>
      Use padding, borders, and border-radius to improve input appearance.
    </p>

    <div class="code-block"
         data-html="<label class='lbl'>Email</label>
<input class='in1' type='email' placeholder='example@mail.com'>
<label class='lbl'>Password</label>
<input class='in1' type='password' placeholder='••••••••'>"
         data-css=".lbl{
  display:block;
  margin: 10px 0 6px;
  font-weight: 600;
}
.in1{
  width: 100%;
  max-width: 360px;
  padding: 10px 12px;
  border: 2px solid #cbd5e1;
  border-radius: 10px;
  outline: none;
}">

<pre><code>/* basic input */
.in1 {
  padding: 10px 12px;
  border: 2px solid #cbd5e1;
  border-radius: 10px;
}</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 2) Focus styles -->
    <!-- ===================== -->
    <h3>2. Focus Styles</h3>
    <p>
      <code>:focus</code> styles help users see which field is active (important for keyboard users).
    </p>

    <div class="code-block"
         data-html="<label class='lbl'>Name</label>
<input class='in2' type='text' placeholder='Your name'>
<label class='lbl'>Message</label>
<textarea class='in2' rows='3' placeholder='Write something...'></textarea>"
         data-css=".lbl{
  display:block;
  margin: 10px 0 6px;
  font-weight: 600;
}
.in2{
  width: 100%;
  max-width: 420px;
  padding: 10px 12px;
  border: 2px solid #cbd5e1;
  border-radius: 10px;
  outline: none;
  transition: border-color .15s ease, box-shadow .15s ease;
}
.in2:focus{
  border-color: #2563eb;
  box-shadow: 0 0 0 4px rgba(37,99,235,0.18);
}">

<pre><code>/* focus style */
.in2:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 4px rgba(37,99,235,0.18);
}</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 3) Select styling -->
    <!-- ===================== -->
    <h3>3. Styling a Select Menu</h3>
    <p>
      You can style <code>&lt;select&gt;</code> similarly to inputs.
    </p>

    <div class="code-block"
         data-html="<label class='lbl'>Country</label>
<select class='sel'>
  <option>Türkiye</option>
  <option>Germany</option>
  <option>France</option>
</select>"
         data-css=".lbl{
  display:block;
  margin: 10px 0 6px;
  font-weight: 600;
}
.sel{
  width: 100%;
  max-width: 280px;
  padding: 10px 12px;
  border: 2px solid #cbd5e1;
  border-radius: 10px;
  background: white;
}">

<pre><code>/* select style */
.sel {
  padding: 10px 12px;
  border: 2px solid #cbd5e1;
  border-radius: 10px;
}</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 4) Button styling -->
    <!-- ===================== -->
    <h3>4. Styling Buttons</h3>
    <p>
      Buttons look better with padding, a clear background, and hover feedback.
    </p>

    <div class="code-block"
         data-html="<button class='btn'>Send Message</button>
<button class='btn ghost'>Cancel</button>"
         data-css=".btn{
  border: none;
  border-radius: 10px;
  padding: 10px 14px;
  font-weight: 700;
  cursor: pointer;
  background: #04AA6D;
  color: white;
  transition: transform .08s ease, opacity .15s ease;
  margin-right: 8px;
}
.btn:hover{ opacity: .92; }
.btn:active{ transform: translateY(1px); }

.btn.ghost{
  background: transparent;
  color: #111827;
  border: 2px solid #111827;
}">

<pre><code>/* button style */
.btn {
  background: #04AA6D;
  color: white;
}
.btn.ghost {
  background: transparent;
  border: 2px solid #111827;
}</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 5) Complete form card -->
    <!-- ===================== -->
    <h3>5. A Complete Form Card</h3>
    <p>
      Here is a complete example: labels, inputs, spacing, and a button.
    </p>

    <div class="code-block"
         data-html="<form class='card'>
  <h3>Contact</h3>

  <label>Full Name</label>
  <input type='text' placeholder='Your name'>

  <label>Email</label>
  <input type='email' placeholder='example@mail.com'>

  <label>Message</label>
  <textarea rows='3' placeholder='Write your message...'></textarea>

  <button type='button'>Send</button>
</form>"
         data-css=".card{
  max-width: 420px;
  padding: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 14px;
  background: white;
}
.card h3{
  margin: 0 0 12px;
}
.card label{
  display:block;
  margin: 10px 0 6px;
  font-weight: 650;
}
.card input, .card textarea{
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #cbd5e1;
  border-radius: 10px;
  outline: none;
  resize: vertical;
}
.card input:focus, .card textarea:focus{
  border-color: #2563eb;
  box-shadow: 0 0 0 4px rgba(37,99,235,0.18);
}
.card button{
  margin-top: 12px;
  width: 100%;
  padding: 10px 14px;
  border: none;
  border-radius: 10px;
  font-weight: 800;
  background: #111827;
  color: white;
  cursor: pointer;
}
.card button:hover{ opacity: .92; }">

<pre><code>/* full form card */
.card input, .card textarea {
  width: 100%;
}
.card input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 4px rgba(37,99,235,0.18);
}</code></pre>

    </div>

    <p style="color: blue;">
      Recap: Use padding + border-radius for shape, <code>:focus</code> for accessibility,
      and consistent spacing for a clean layout.
    </p>
  `
},

"display": {
  title: "CSS Display & Visibility",
  category: "Layout",
  prev: "tables",
  next: "position", 
  content: `
    <h2>CSS Display & Visibility</h2>

    <p>
      The <code>display</code> property controls how an element is displayed on the page.
      The <code>visibility</code> property controls whether an element is visible or hidden.
    </p>

    <p style="color: blue;">
      Key idea: <code>display: none</code> removes the element from the layout, but
      <code>visibility: hidden</code> hides it while keeping its space.
    </p>

    <!-- ===================== -->
    <!-- 1) display: none -->
    <!-- ===================== -->
    <h3>1. display: none</h3>
    <p>
      <code>display: none</code> completely removes the element (it takes no space).
    </p>

    <div class="code-block"
         data-html="<p>Visible paragraph 1</p>
<p class='gone'>This paragraph is removed</p>
<p>Visible paragraph 2</p>"
         data-css=".gone { display: none; }">

<pre><code>/* display: none */
.gone {
  display: none;
}</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 2) visibility: hidden -->
    <!-- ===================== -->
    <h3>2. visibility: hidden</h3>
    <p>
      <code>visibility: hidden</code> hides the element but keeps its space.
    </p>

    <div class="code-block"
         data-html="<p>Visible paragraph 1</p>
<p class='hidden'>This paragraph is hidden (space stays)</p>
<p>Visible paragraph 2</p>"
         data-css=".hidden {
  visibility: hidden;
  background: #ffe4e6;
}">

<pre><code>/* visibility: hidden */
.hidden {
  visibility: hidden;
}</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 3) block vs inline -->
    <!-- ===================== -->
    <h3>3. Block vs Inline</h3>
    <p>
      Block elements start on a new line and take full width.
      Inline elements stay in the same line and take only as much width as needed.
    </p>

    <div class="code-block"
         data-html="<div class='b'>I am block</div>
<div class='b'>I am block</div>

<span class='i'>I am inline</span>
<span class='i'>I am inline</span>"
         data-css=".b {
  background: #e0f2fe;
  padding: 10px;
  margin: 6px 0;
  border: 1px solid #93c5fd;
}

.i {
  background: #dcfce7;
  padding: 6px 10px;
  border: 1px solid #86efac;
}">

<pre><code>/* block vs inline */
.b { /* block default */ }
.i { /* inline default */ }</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 4) display: inline-block -->
    <!-- ===================== -->
    <h3>4. display: inline-block</h3>
    <p>
      <code>inline-block</code> stays in the same line like inline, but you can set
      width/height like block.
    </p>

    <div class="code-block"
         data-html="<span class='ib'>Box 1</span>
<span class='ib'>Box 2</span>
<span class='ib'>Box 3</span>"
         data-css=".ib {
  display: inline-block;
  width: 120px;
  padding: 10px;
  margin: 6px;
  background: #fef9c3;
  border: 1px solid #facc15;
  text-align: center;
}">

<pre><code>/* inline-block */
.ib {
  display: inline-block;
  width: 120px;
}</code></pre>

    </div>

    <p style="color: blue;">
      Quick summary:
      <code>display</code> changes layout behavior, <code>visibility</code> only hides/shows.
    </p>
  `
},

"position": {
  title: "CSS Positioning",
  category: "Layout",
  prev: "display_visibility",
  next: "zindex", // sende yoksa null yap
  content: `
    <h2>CSS Positioning</h2>

    <p>
      CSS positioning controls where elements appear on the page. With positioning,
      you can override the normal document flow.
    </p>

    <p style="color: blue;">
      The <code>position</code> property can be:
      <code>static</code>, <code>relative</code>, <code>absolute</code>, <code>fixed</code>, <code>sticky</code>.
      Elements are then moved using <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>.
    </p>

    <!-- ===================== -->
    <!-- 1) static -->
    <!-- ===================== -->
    <h3>1. position: static (default)</h3>
    <p>
      Static positioned elements follow the normal flow. The properties
      <code>top/right/bottom/left</code> do not affect them.
    </p>

    <div class="code-block"
         data-html="<div class='pbox static'>Static (top/left won't move me)</div>"
         data-css=".pbox{
  border: 2px solid #73AD21;
  padding: 12px;
  margin: 10px 0;
  background: #f6fff2;
}
.static{
  position: static;
  top: 30px;
  left: 30px;
}">

<pre><code>/* static: default (offsets won't move it) */
.static {
  position: static;
  top: 30px;
  left: 30px;
}</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 2) relative -->
    <!-- ===================== -->
    <h3>2. position: relative</h3>
    <p>
      Relative positioning keeps the element in the normal flow, but shifts it visually
      using offsets like <code>left</code> or <code>top</code>.
    </p>

    <div class="code-block"
         data-html="<div class='pbox'>Normal box</div>
<div class='pbox relative'>Relative: moved 30px right</div>
<div class='pbox'>Another normal box</div>"
         data-css=".pbox{
  border: 2px solid #73AD21;
  padding: 12px;
  margin: 10px 0;
  background: #f6fff2;
}
.relative{
  position: relative;
  left: 30px;
}">

<pre><code>/* relative: moves from its normal position */
.relative {
  position: relative;
  left: 30px;
}</code></pre>

    </div>

    <p style="color: blue;">
      Notice: The element moves, but it still keeps its original space in the layout. :contentReference[oaicite:1]{index=1}
    </p>

    <!-- ===================== -->
    <!-- 3) absolute -->
    <!-- ===================== -->
    <h3>3. position: absolute</h3>
    <p>
      Absolute positioned elements are removed from the normal flow and positioned
      relative to the nearest ancestor that is not <code>static</code>.
      If none exists, it positions relative to the page (document body).
    </p>

    <div class="code-block"
         data-html="<div class='container'>
  This is the relative container.
  <div class='abs'>Absolute box</div>
</div>"
         data-css=".container{
  position: relative;
  height: 160px;
  border: 2px solid #0ea5e9;
  padding: 12px;
  background: #eff6ff;
}
.abs{
  position: absolute;
  top: 12px;
  right: 12px;
  width: 170px;
  padding: 10px;
  border: 2px solid #ef4444;
  background: #fff1f2;
}">

<pre><code>/* absolute: positioned inside nearest positioned ancestor */
.container { position: relative; }

.abs {
  position: absolute;
  top: 12px;
  right: 12px;
}</code></pre>

    </div>

    <p style="color: blue;">
      Absolute elements can overlap other content because they are removed from normal flow. :contentReference[oaicite:2]{index=2}
    </p>

    <!-- ===================== -->
    <!-- 4) fixed -->
    <!-- ===================== -->
    <h3>4. position: fixed</h3>
    <p>
      Fixed elements are positioned relative to the viewport, so they stay in the same
      place even when the page is scrolled.
    </p>

    <div class="code-block"
         data-html="<div class='demo-area'>
  <p>Scroll inside this box to see the fixed badge stay put.</p>
  <div class='fixed-badge'>Fixed</div>
  <div class='filler'></div>
</div>"
         data-css=".demo-area{
  position: relative;
  height: 170px;
  overflow: auto;
  border: 2px solid #111827;
  padding: 12px;
  background: #f9fafb;
}
.filler{ height: 420px; }
.fixed-badge{
  position: fixed;
  bottom: 18px;
  right: 18px;
  padding: 10px 12px;
  background: #111827;
  color: white;
  border-radius: 10px;
  font-weight: 700;
}">

<pre><code>/* fixed: pinned to the viewport */
.fixed-badge {
  position: fixed;
  bottom: 18px;
  right: 18px;
}</code></pre>

    </div>

    <p style="color: blue;">
      Note: Fixed elements also do not leave a gap where they would normally be. :contentReference[oaicite:3]{index=3}
    </p>

    <!-- ===================== -->
    <!-- 5) sticky -->
    <!-- ===================== -->
    <h3>5. position: sticky</h3>
    <p>
      Sticky elements behave like <code>relative</code> until a scroll threshold is reached,
      then they “stick” like <code>fixed</code>.
    </p>

    <div class="code-block"
         data-html="<div class='sticky-wrap'>
  <div class='sticky-head'>I stick to the top</div>
  <p>Scroll inside this box...</p>
  <p>More content...</p>
  <p>More content...</p>
  <p>More content...</p>
  <p>More content...</p>
  <p>More content...</p>
</div>"
         data-css=".sticky-wrap{
  height: 180px;
  overflow: auto;
  border: 2px solid #a855f7;
  background: #faf5ff;
}
.sticky-head{
  position: sticky;
  top: 0;
  padding: 10px 12px;
  background: #a855f7;
  color: white;
  font-weight: 700;
}">

<pre><code>/* sticky: sticks after you scroll */
.sticky-head {
  position: sticky;
  top: 0;
}</code></pre>

    </div>

    <p style="color: blue;">
      Summary:
      <code>relative</code> = moves but keeps space,
      <code>absolute/fixed</code> = removed from flow,
      <code>sticky</code> = relative then fixed. :contentReference[oaicite:4]{index=4}
    </p>
  `
},

"float": {
  title: "CSS Float (Clear, Overflow, z-index)",
  category: "Layout",
  prev: "positioning",
  next: "flexbox", // sende yoksa null yap
  content: `
    <h2>CSS Float (Clear, Overflow, z-index)</h2>

    <p>
      <code>float</code> was originally designed to let text wrap around images,
      but it was also used for page layouts before Flexbox and Grid.
      In this lesson, we'll learn float basics, clearing floats, using overflow to fix layouts,
      and a quick intro to <code>z-index</code> for overlapping elements.
    </p>

    <p style="color: blue;">
      Tip: Today, use <strong>Flexbox/Grid</strong> for layouts. Use <strong>float</strong> mostly for text wrapping.
    </p>

    <!-- ===================== -->
    <!-- 1) Basic Float -->
    <!-- ===================== -->
    <h3>1. Basic Float (Text Wrap)</h3>
    <p>
      Floating an element moves it to the left or right, and the content wraps around it.
    </p>

    <div class="code-block"
         data-html="<div class='wrap'>
  <div class='img'>IMG</div>
  <p>
    This text wraps around the floated box. Float is very common for placing images
    inside articles so that text flows nicely next to them.
  </p>
</div>"
         data-css=".wrap{
  border: 2px solid #ddd;
  padding: 12px;
}
.img{
  float: left;
  width: 90px;
  height: 90px;
  background: #fde68a;
  border: 2px solid #f59e0b;
  display: grid;
  place-items: center;
  font-weight: 800;
  margin: 0 12px 8px 0;
}">

<pre><code>/* float for text wrapping */
.img {
  float: left;
}</code></pre>
    </div>

    <!-- ===================== -->
    <!-- 2) The "Collapse" Problem -->
    <!-- ===================== -->
    <h3>2. Float Problem: Parent Collapses</h3>
    <p>
      A floated element is removed from normal flow, so the parent may collapse (lose height).
      In this demo, the parent border looks too small.
    </p>

    <div class="code-block"
         data-html="<div class='parent bad'>
  <div class='box'>Floated</div>
</div>
<p class='note'>The border above collapses because the floated box doesn't stretch the parent.</p>"
         data-css=".parent{
  border: 3px solid #ef4444;
  padding: 10px;
  margin: 10px 0;
}
.box{
  float: left;
  width: 140px;
  height: 70px;
  background: #bfdbfe;
  border: 2px solid #2563eb;
  display: grid;
  place-items: center;
  font-weight: 700;
}
.note{ margin-top: 6px; }">

<pre><code>/* common float issue: parent collapses */
.parent { border: 3px solid #ef4444; }
.box { float: left; }</code></pre>
    </div>

    <!-- ===================== -->
    <!-- 3) Clearfix -->
    <!-- ===================== -->
    <h3>3. Clearing Floats (clearfix)</h3>
    <p>
      One classic solution is a clearfix using a pseudo-element.
      This makes the parent wrap the floated children again.
    </p>

    <div class="code-block"
         data-html="<div class='parent cf'>
  <div class='box'>Floated</div>
</div>
<p class='note'>Now the parent border wraps the floated box.</p>"
         data-css=".parent{
  border: 3px solid #16a34a;
  padding: 10px;
  margin: 10px 0;
}
.box{
  float: left;
  width: 140px;
  height: 70px;
  background: #bfdbfe;
  border: 2px solid #2563eb;
  display: grid;
  place-items: center;
  font-weight: 700;
}
/* clearfix */
.cf::after{
  content: '';
  display: block;
  clear: both;
}">

<pre><code>/* clearfix */
.cf::after {
  content: '';
  display: block;
  clear: both;
}</code></pre>
    </div>

    <!-- ===================== -->
    <!-- 4) Overflow "fix" + Overflow concept -->
    <!-- ===================== -->
    <h3>4. Using Overflow (and Overflow Basics)</h3>
    <p>
      Another common trick is setting <code>overflow: auto</code> (or <code>hidden</code>) on the parent.
      This creates a new block formatting context so it contains floats.
      Also, overflow controls what happens when content is too large for a box.
    </p>

    <div class="code-block"
         data-html="<div class='parent ov'>
  <div class='box'>Floated</div>
  <p>Parent contains float using overflow.</p>
</div>

<div class='overflow-demo'>
  This is a long line of text that will not fit in the box and shows overflow behavior...
</div>"
         data-css=".parent{
  border: 3px solid #7c3aed;
  padding: 10px;
  margin: 10px 0;
}
.box{
  float: left;
  width: 140px;
  height: 70px;
  background: #bfdbfe;
  border: 2px solid #2563eb;
  display: grid;
  place-items: center;
  font-weight: 700;
  margin-right: 12px;
}
/* contains float */
.ov{ overflow: auto; }

.overflow-demo{
  width: 260px;
  height: 70px;
  border: 2px solid #111827;
  padding: 10px;
  overflow: auto;
  white-space: nowrap;
  margin-top: 12px;
}">

<pre><code>/* contains floats */
.parent { overflow: auto; }

/* overflow basics */
.overflow-demo {
  height: 70px;
  overflow: auto;
}</code></pre>
    </div>

    <!-- ===================== -->
    <!-- 5) z-index -->
    <!-- ===================== -->
    <h3>5. z-index (Overlapping Elements)</h3>
    <p>
      <code>z-index</code> controls which positioned element appears on top.
      It works only on elements with a <code>position</code> value other than <code>static</code>.
    </p>

    <div class="code-block"
         data-html="<div class='stack'>
  <div class='card one'>Box 1</div>
  <div class='card two'>Box 2</div>
  <div class='card three'>Box 3</div>
</div>"
         data-css=".stack{
  position: relative;
  height: 160px;
  border: 2px dashed #9ca3af;
  padding: 10px;
}
.card{
  position: absolute;
  width: 140px;
  height: 90px;
  display: grid;
  place-items: center;
  font-weight: 800;
  border: 2px solid #111827;
}
.one{ top: 20px; left: 20px; background: #fecaca; z-index: 1; }
.two{ top: 40px; left: 60px; background: #bbf7d0; z-index: 3; }
.three{ top: 60px; left: 100px; background: #bfdbfe; z-index: 2; }">

<pre><code>/* z-index works with positioned elements */
.two { z-index: 3; } /* on top */</code></pre>
    </div>

    <p style="color: blue;">
      Summary:
      <strong>float</strong> wraps content,
      <strong>clear/clearfix</strong> fixes float layout issues,
      <strong>overflow</strong> manages content overflow and can contain floats,
      <strong>z-index</strong> controls stacking order for positioned elements.
    </p>
  `
},

"align": {
  title: "CSS Align",
  category: "Layout",
  prev: "float",
  next: "flexbox", // sende yoksa null yapabilirsin
  content: `
    <h2>CSS Align</h2>

    <p>
      CSS alignment properties are used to align text, inline elements, block elements,
      and boxes. The most common alignment properties include
      <code>text-align</code>, <code>vertical-align</code>, and flexbox/grid alignment.
    </p>

    <p style="color: blue;">
      Tip: Proper alignment improves readability and layout structure.
    </p>

    <!-- ===================== -->
    <!-- 1) Text Alignment -->
    <!-- ===================== -->
    <h3>1. Text Alignment</h3>
    <p>
      The <code>text-align</code> property aligns inline content (like text) horizontally
      within a parent block.
    </p>

    <div class="code-block"
         data-html="<div class='txt1'>Left aligned text</div>
<div class='txt2'>Center aligned text</div>
<div class='txt3'>Right aligned text</div>"
         data-css=".txt1 { text-align: left; border: 1px solid #888; padding: 8px; }
.txt2 { text-align: center; border: 1px solid #888; padding: 8px; }
.txt3 { text-align: right; border: 1px solid #888; padding: 8px; }">

<pre><code>/* text-align */
.txt1 { text-align: left; }
.txt2 { text-align: center; }
.txt3 { text-align: right; }</code></pre>

    </div>

    <p>
      Text alignment is very useful for headings and paragraphs to control horizontal flow.
    </p>

    <!-- ===================== -->
    <!-- 2) Vertical Align (inline/inline-block) -->
    <!-- ===================== -->
    <h3>2. Vertical Align</h3>
    <p>
      The <code>vertical-align</code> property aligns inline or inline-block elements
      relative to the baseline.
    </p>

    <div class="code-block"
         data-html="<span class='va1'>A</span>
<span class='va2'>B</span>
<span class='va3'>C</span>"
         data-css=".va1 { font-size: 32px; vertical-align: baseline; }
.va2 { font-size: 20px; vertical-align: middle; }
.va3 { font-size: 14px; vertical-align: top; }">

<pre><code>/* vertical-align */
.va1 { vertical-align: baseline; }
.va2 { vertical-align: middle; }
.va3 { vertical-align: top; }</code></pre>

    </div>

    <p>
      Often used with icons or inline boxes next to text.
    </p>

    <!-- ===================== -->
    <!-- 3) Aligning Boxes with margin auto -->
    <!-- ===================== -->
    <h3>3. Horizontal Box Centering</h3>
    <p>
      You can center a block-level box by using <code>margin: auto</code> if a width is set.
    </p>

    <div class="code-block"
         data-html="<div class='boxcenter'>Centered box</div>"
         data-css=".boxcenter {
  width: 240px;
  margin: auto;
  padding: 12px;
  background: #c7d2fe;
  text-align: center;
}">

<pre><code>/* center block */
.boxcenter {
  width: 240px;
  margin: auto;
}</code></pre>

    </div>

    <p>
      This technique works well for fixed-width boxes in layouts.
    </p>

    <!-- ===================== -->
    <!-- 4) Flexbox Align Items (bonus modern) -->
    <!-- ===================== -->
    <h3>4. Flexbox Alignment (Modern)</h3>
    <p>
      With Flexbox you can align items horizontally and vertically using
      <code>justify-content</code> and <code>align-items</code>.
    </p>

    <div class="code-block"
         data-html="<div class='flex'>
  <div class='fx1'>Item 1</div>
  <div class='fx2'>Item 2</div>
  <div class='fx3'>Item 3</div>
</div>"
         data-css=".flex {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background: #e5e7eb;
}
.flex div {
  padding: 8px 12px;
  border: 1px solid #4b5563;
  margin: 0 6px;
}">

<pre><code>/* flexbox alignment */
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}</code></pre>

    </div>

    <p style="color: blue;">
      Flexbox alignment is now the most common way to align elements.
    </p>
  `
},

"website_layout": {
  title: "CSS Website Layout",
  category: "Layout",
  prev: "inheritance",
  next: "media_queries", // sonraki ders varsa değiştirebilirsin
  content: `
    <h2>CSS Website Layout</h2>

    <p>
      A website layout controls how content and sections are arranged on a page.
      There are several layout methods in CSS — from old float-based layouts to
      modern Flexbox and Grid techniques.
    </p>

    <p style="color: blue;">
      Tip: Modern CSS layouts (Flexbox & Grid) handle alignment, space distribution,
      and responsiveness better than float alone.
    </p>

    <!-- ===================== -->
    <!-- 1) Float-Based Layout -->
    <!-- ===================== -->
    <h3>1. Float-Based Two-Column Layout</h3>
    <p>
      In traditional CSS, floats were used to build multi-column layouts.
    </p>

    <div class="code-block"
         data-html="<div class='layout-old'>
  <div class='sidebar'>Sidebar</div>
  <div class='main'>Main Content</div>
  <div style='clear: both;'></div>
</div>"
         data-css=".layout-old {
  padding: 12px;
}
.layout-old .sidebar {
  float: left;
  width: 28%;
  padding: 12px;
  background: #e0e7ff;
}
.layout-old .main {
  float: left;
  width: 68%;
  padding: 12px;
  background: #fef3c7;
}
.layout-old .sidebar, .layout-old .main {
  border: 2px solid #444;
}">

<pre><code>/* float layout */
.sidebar { float: left; width: 28%; }
.main { float: left; width: 68%; }</code></pre>

    </div>

    <p>
      Note: We often added a clearing element (or used a clearfix) to wrap floats.
      This layout works, but has limitations especially with responsive design.
    </p>

    <!-- ===================== -->
    <!-- 2) Flexbox One-Dimensional Layout -->
    <!-- ===================== -->
    <h3>2. Flexbox Layout (Horizontal)</h3>
    <p>
      Flexbox was created for flexible one-dimensional layouts. It makes equal
      spacing and alignment easier.
    </p>

    <div class="code-block"
         data-html="<div class='layout-flex'>
  <div class='flex-box'>Box 1</div>
  <div class='flex-box'>Box 2</div>
  <div class='flex-box'>Box 3</div>
</div>"
         data-css=".layout-flex{
  display: flex;
  gap: 12px;
  background: #f3f4f6;
  padding: 12px;
}
.layout-flex .flex-box{
  flex: 1;
  padding: 16px;
  background: #d1fae5;
  text-align: center;
  font-weight: 700;
  border: 2px solid #10b981;
}">

<pre><code>/* flexbox layout */
.layout-flex { display: flex; gap: 12px; }
.layout-flex .flex-box { flex: 1; }</code></pre>

    </div>

    <p>
      Flexbox distributes space evenly and adapts to available width without floats.
    </p>

    <!-- ===================== -->
    <!-- 3) Grid Two-Dimensional Layout -->
    <!-- ===================== -->
    <h3>3. CSS Grid Layout</h3>
    <p>
      Grid is ideal for two-dimensional layouts (columns and rows). It offers
      powerful alignment and overlapping capabilities.
    </p>

    <div class="code-block"
         data-html="<div class='layout-grid'>
  <div class='g-header'>Header</div>
  <div class='g-nav'>Navigation</div>
  <div class='g-main'>Main Content</div>
  <div class='g-aside'>Sidebar</div>
  <div class='g-footer'>Footer</div>
</div>"
         data-css=".layout-grid{
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  gap: 12px;
  background: #fafafa;
}
.g-header{ grid-column: 1 / -1; background: #2563eb; color: white; padding: 10px; }
.g-footer{ grid-column: 1 / -1; background: #111827; color: white; padding: 10px; }
.g-nav{ background: #fdba74; padding: 10px; }
.g-main{ background: #bbf7d0; padding: 10px; }
.g-aside{ background: #bfdbfe; padding: 10px; }">

<pre><code>/* grid layout */
.layout-grid {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
}</code></pre>

    </div>

    <p>
      In this example:
      <strong>Header</strong> and <strong>Footer</strong> span full width,
      the middle area has 2 columns (nav/main + sidebar).
    </p>

    <!-- ===================== -->
    <!-- 4) Responsive Considerations -->
    <!-- ===================== -->
    <h3>4. Responsive Basics</h3>
    <p>
      Use flexible units, media queries, and modern layout systems to adapt to
      different screen sizes.
    </p>

    <div class="code-block"
         data-html="<div class='resp-flex'>
  <div class='box'>1</div>
  <div class='box'>2</div>
  <div class='box'>3</div>
</div>"
         data-css=".resp-flex{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.resp-flex .box{
  flex: 1 1 220px;
  padding: 14px;
  background: #e0f2fe;
  text-align: center;
  border: 2px solid #0284c7;
}">

<pre><code>/* responsive flex */
.resp-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.resp-flex .box { flex: 1 1 220px; }</code></pre>

    </div>

    <p style="color: blue;">
      Summary: Layout can be built with floats, but modern CSS (Flexbox & Grid) offers more control,
      easier alignment, and responsiveness.
    </p>
  `
},

"flexbox_intro": {
        title: "Introduction to Flexbox",
        category: "Flexbox",
        content: `
            <p class="lead">Flexbox (Flexible Box Layout) is a revolution in modern web design, used to align elements in a single dimension (row or column).</p>

            <h2>Why Flexbox?</h2>
            <p>Before Flexbox, we used <code>float</code> or <code>position</code> to create layouts. However, these methods had serious limitations:</p>
            <ul>
                <li>Vertical centering was difficult.</li>
                <li>Making adjacent boxes equal height was hard.</li>
                <li>Adapting to mobile devices (Responsive) was complex.</li>
            </ul>
            <p>Flexbox solves all these problems with just a few lines of code!</p>

            <h2>Understanding the Flex Model</h2>
            <p>There are two key concepts in Flexbox:</p>
            <ol>
                <li><strong>Flex Container (Parent):</strong> The wrapper element.</li>
                <li><strong>Flex Items (Children):</strong> The direct children inside the wrapper.</li>
            </ol>

            <p style="color: blue;">The magic starts with: <code>display: flex;</code></p>

            <div class="code-block"
                 data-html="<div class='container'>
  <div class='box'>1</div>
  <div class='box'>2</div>
  <div class='box'>3</div>
</div>

<p>The boxes above align side-by-side the moment 'display: flex' is applied to the container.</p>"
                 data-css=".container {
  display: flex; /* This is where the magic happens! */
  background: #e0e7ff;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid #325dff;
}

.box {
  background: #325dff;
  color: white;
  width: 60px;
  height: 60px;
  margin: 5px;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 6px;
}">
                 <pre><code>.container {
  display: flex; /* Aligns children side-by-side */
}</code></pre>
            </div>

            <h2>Flexbox Axes</h2>
            <p>When working with Flexbox, you need to think in terms of two imaginary lines:</p>
            <ul>
                <li><strong>Main Axis:</strong> The direction items are laid out (Default: Left to Right).</li>
                <li><strong>Cross Axis:</strong> The direction perpendicular to the main axis (Default: Top to Bottom).</li>
            </ul>
            
            <p>In the next lessons, we will learn how to align items using these axes.</p>
        `
},

"flex_container": {
        title: "Flex Container (Direction & Wrap)",
        category: "Flexbox",
        content: `
            <p class="lead">The first step in Flexbox is managing the container. This determines whether items align horizontally or vertically, and what happens when they run out of space.</p>

            <h2>1. Flex Direction</h2>
            <p>The <code>flex-direction</code> property defines the direction of the items. The default is <code>row</code>.</p>

            <div class="code-block"
                 data-html="<div class='container row'>
  <div class='box'>1</div>
  <div class='box'>2</div>
  <div class='box'>3</div>
</div>

<div class='container col'>
  <div class='box'>1</div>
  <div class='box'>2</div>
  <div class='box'>3</div>
</div>"
                 data-css=".container {
  display: flex;
  background: #f0f2f5;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
}
.row { flex-direction: row; } /* Side by Side */
.col { flex-direction: column; } /* Stacked */

.box {
  background: #325dff;
  color: white;
  padding: 15px;
  margin: 5px;
  width: 50px;
  text-align: center;
}">
                 <pre><code>/* Side by side (Default) */
.row { flex-direction: row; }

/* Vertical Stack */
.col { flex-direction: column; }</code></pre>
            </div>

            <h2>2. Flex Wrap</h2>
            <p>By default, Flexbox tries to fit all items onto one line. If you use <code>flex-wrap: wrap</code>, items that don't fit will move to the next line.</p>

            <div class="code-block"
                 data-html="<div class='container wrap'>
  <div class='box'>1</div><div class='box'>2</div><div class='box'>3</div>
  <div class='box'>4</div><div class='box'>5</div><div class='box'>6</div>
</div>"
                 data-css=".container {
  display: flex;
  width: 200px; /* Narrow space */
  border: 2px solid red;
  background: #fff;
}
.wrap {
  flex-wrap: wrap; /* Drop to next line if needed */
}
.box {
  width: 60px;
  height: 60px;
  background: orange;
  margin: 5px;
  display: grid;
  place-items: center;
  font-weight: bold;
}">
                 <pre><code>.container {
  display: flex;
  flex-wrap: wrap; /* Handle overflow */
}</code></pre>
            </div>

            <h2>3. Gap</h2>
            <p>Instead of using margins, the <code>gap</code> property is the modern way to create equal spacing between items.</p>
             <div class="code-block"
                 data-html="<div class='container gap'>
  <div class='box'>A</div>
  <div class='box'>B</div>
  <div class='box'>C</div>
</div>"
                 data-css=".container {
  display: flex;
  gap: 20px; /* 20px space between items */
}
.box { padding: 20px; background: rebeccapurple; color: white; }">
                 <pre><code>.container {
  display: flex;
  gap: 20px;
}</code></pre>
            </div>
        `
},

"flex_align": {
        title: "Flex Alignment (Justify & Align)",
        category: "Flexbox",
        content: `
            <p class="lead">The superpower of Flexbox is alignment. You can easily center or distribute items horizontally and vertically.</p>

            <h2>1. Justify Content (Main Axis)</h2>
            <p><code>justify-content</code> aligns items along the main axis (usually horizontally).</p>

            <div class="code-block"
                 data-html="<p>center:</p>
<div class='flex center'>
  <div class='item'>1</div><div class='item'>2</div><div class='item'>3</div>
</div>

<p>space-between (Most common):</p>
<div class='flex between'>
  <div class='item'>1</div><div class='item'>2</div><div class='item'>3</div>
</div>"
                 data-css=".flex {
  display: flex;
  background: #e0e7ff;
  padding: 10px;
  margin-bottom: 20px;
}
.center { justify-content: center; }
.between { justify-content: space-between; }

.item {
  width: 40px; height: 40px;
  background: #4f46e5; color: white;
  display: grid; place-items: center;
}">
                 <pre><code>/* Center items */
.center { justify-content: center; }

/* Push items to edges */
.between { justify-content: space-between; }</code></pre>
            </div>

            <h2>2. Align Items (Cross Axis)</h2>
            <p><code>align-items</code> aligns items along the cross axis (usually vertically).</p>

            <div class="code-block"
                 data-html="<div class='flex-v center-v'>
  <div class='item' style='height:40px'>Short</div>
  <div class='item' style='height:80px'>Tall</div>
  <div class='item' style='height:60px'>Medium</div>
</div>"
                 data-css=".flex-v {
  display: flex;
  height: 120px; /* Height is required */
  background: #dcfce7;
  border: 1px solid #86efac;
}
.center-v {
  align-items: center; /* Center vertically */
}
.item {
  background: #16a34a; color: white;
  padding: 5px; margin: 0 5px;
  display: flex; align-items: center; justify-content: center;
}">
                 <pre><code>.container {
  display: flex;
  height: 120px;
  align-items: center; /* Vertical centering */
}</code></pre>
            </div>

            <p style="color: blue;">Pro Tip: To place something exactly in the center of the page: <br>Use <code>justify-content: center;</code> AND <code>align-items: center;</code>.</p>
        `
},

"flex_sizing": {
        title: "Flex Items (Grow, Shrink, Basis)",
        category: "Flexbox",
        content: `
            <p class="lead">These properties apply directly to the <strong>items (children)</strong>, not the container. They determine how items grow or shrink to fit the space.</p>

            <h2>1. flex-grow</h2>
            <p>This defines how much an item will grow relative to the rest of the flexible items. If you set <code>flex-grow: 1</code>, the item will take up all remaining space.</p>

            <div class="code-block"
                 data-html="<div class='cont'>
  <div class='fixed'>Logo</div>
  <div class='grow'>Search Bar (flex-grow: 1)</div>
  <div class='fixed'>Menu</div>
</div>"
                 data-css=".cont {
  display: flex;
  gap: 10px;
  background: #eee; padding: 10px;
}
.fixed {
  background: #aaa; padding: 10px;
}
.grow {
  background: #3b82f6; color: white; padding: 10px;
  flex-grow: 1; /* Eat up all remaining space */
}">
                 <pre><code>.grow {
  flex-grow: 1;
}</code></pre>
            </div>

            <h2>2. The 'flex' Shorthand</h2>
            <p>Usually, we don't write grow, shrink, and basis separately. We use the <code>flex</code> shorthand.</p>
            <ul>
                <li><code>flex: 1;</code> -> Grow to fill space evenly.</li>
                <li><code>flex: initial;</code> -> Only take up necessary space (default).</li>
            </ul>
        `
},

"flex_project": {
        title: "Project: Responsive Navbar",
        category: "Flexbox",
        content: `
            <p class="lead">One of the most common uses of Flexbox is navigation menus. Let's build a simple, modern header.</p>

            <h3>The Goal</h3>
            <p>Logo on the left, links on the right. Equal spacing between links.</p>

            <div class="code-block"
                 data-html="<nav class='navbar'>
  <div class='logo'>MyBrand</div>
  <ul class='nav-links'>
    <li><a href='#'>Home</a></li>
    <li><a href='#'>About</a></li>
    <li><a href='#'>Contact</a></li>
  </ul>
</nav>"
                 data-css="/* 1. Container Settings */
.navbar {
  display: flex;
  justify-content: space-between; /* Logo left, links right */
  align-items: center; /* Center vertically */
  padding: 1rem 2rem;
  background: #111827;
  color: white;
}

.logo { font-weight: bold; font-size: 1.2rem; }

/* 2. Links List Settings */
.nav-links {
  display: flex; /* Align links side-by-side */
  gap: 20px; /* Space between links */
  list-style: none;
  margin: 0; padding: 0;
}

.nav-links a {
  color: #d1d5db;
  text-decoration: none;
}
.nav-links a:hover { color: white; }">
                 <pre><code>.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 20px;
}</code></pre>
            </div>
            
            <p>This structure is the foundation of responsive web design.</p>
        `
},

"grid_intro": {
        title: "Introduction to CSS Grid",
        category: "CSS Grid",
        content: `
            <p class="lead">CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows, unlike Flexbox which is largely 1-dimensional.</p>

            <h2>1. Defining a Grid Container</h2>
            <p>Like Flexbox, you start by setting <code>display: grid</code> on the container. This enables grid properties for all direct children.</p>

            <div class="code-block"
                 data-html="<div class='grid-container'>
  <div class='item'>1</div>
  <div class='item'>2</div>
  <div class='item'>3</div>
  <div class='item'>4</div>
  <div class='item'>5</div>
  <div class='item'>6</div>
</div>"
                 data-css=".grid-container {
  display: grid;
  /* Define Columns: 3 columns of equal width */
  grid-template-columns: auto auto auto;
  gap: 10px;
  background: #f3f4f6;
  padding: 10px;
}

.item {
  background: #2563eb;
  color: white;
  padding: 20px;
  font-size: 20px;
  text-align: center;
}">
                 <pre><code>.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
}</code></pre>
            </div>

            <h2>2. The 'fr' Unit</h2>
            <p>CSS Grid introduced a new unit called <code>fr</code> (fraction). It represents a fraction of the available space in the grid container.</p>

            <div class="code-block"
                 data-html="<div class='grid-fr'>
  <div class='item'>1fr</div>
  <div class='item'>2fr</div>
  <div class='item'>1fr</div>
</div>"
                 data-css=".grid-fr {
  display: grid;
  /* Middle column is twice as wide */
  grid-template-columns: 1fr 2fr 1fr;
  gap: 10px;
  background: #e5e7eb;
  padding: 10px;
}
.item { background: #7c3aed; color: white; padding: 20px; text-align: center; }">
                 <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}</code></pre>
            </div>
        `
},


  "grid_placement": {
        title: "Grid Placement (Spanning)",
        category: "CSS Grid",
        content: `
            <p class="lead">The real power of Grid comes from placing items exactly where you want them. You can make an item span across multiple columns or rows.</p>

            <h2>1. Spanning Columns</h2>
            <p>Use <code>grid-column</code> to define how many columns an item should take up.</p>

            <div class="code-block"
                 data-html="<div class='layout'>
  <div class='header'>Header</div>
  <div class='sidebar'>Sidebar</div>
  <div class='content'>Main Content</div>
  <div class='footer'>Footer</div>
</div>"
                 data-css=".layout {
  display: grid;
  grid-template-columns: 1fr 3fr; /* Sidebar & Content */
  gap: 10px;
  background: #ddd;
  padding: 10px;
}

.header {
  grid-column: 1 / -1; /* Span from start to end */
  background: #111827; color: white; padding: 20px;
}

.sidebar { background: #3b82f6; color: white; padding: 20px; }
.content { background: #ffffff; padding: 20px; }

.footer {
  grid-column: 1 / span 2; /* Span 2 columns */
  background: #1f2937; color: white; padding: 20px;
}">
                 <pre><code>.header {
  /* Start at line 1, end at the last line (-1) */
  grid-column: 1 / -1;
}

.footer {
  /* Start at current line, span 2 columns */
  grid-column: span 2;
}</code></pre>
            </div>

            <h2>2. Spanning Rows</h2>
            <p>Similarly, <code>grid-row</code> is used to make an item span multiple vertical rows.</p>
        `
},

  "grid_responsive": {
        title: "Responsive Grid (Auto-fit & Minmax)",
        category: "CSS Grid",
        content: `
            <p class="lead">With Grid, you can create responsive layouts without even using Media Queries! The magic combination is <code>repeat</code>, <code>auto-fit</code>, and <code>minmax</code>.</p>

            <h2>The Magic Formula</h2>
            <p>This single line of CSS creates a responsive card layout that automatically adjusts the number of columns based on the screen width.</p>

            <div class="code-block"
                 data-html="<div class='magic-grid'>
  <div class='card'>Card 1</div>
  <div class='card'>Card 2</div>
  <div class='card'>Card 3</div>
  <div class='card'>Card 4</div>
</div>"
                 data-css=".magic-grid {
  display: grid;
  /* The Magic Line */
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  background: #f0fdf4;
  padding: 1rem;
  border: 1px solid #4ade80;
}

.card {
  background: #15803d;
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}">
                 <pre><code>.container {
  display: grid;
  /* Creates as many columns as fit */
  /* Each column is at least 150px wide */
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}</code></pre>
            </div>

            <p style="color: blue;">Resize the editor window to see the cards rearrange automatically!</p>
        `
},

  "grid_project": {
        title: "Project: Image Gallery",
        category: "CSS Grid",
        content: `
            <p class="lead">Let's build a modern "Masonry-style" image gallery where some images are larger than others, creating an interesting layout.</p>

            <h3>The Layout</h3>
            <p>We will use a 4-column grid and make some images span 2 columns or 2 rows to break the monotony.</p>

            <div class="code-block"
                 data-html="<div class='gallery'>
  <div class='img wide'>Wide Img</div>
  <div class='img'>Img</div>
  <div class='img'>Img</div>
  <div class='img tall'>Tall Img</div>
  <div class='img'>Img</div>
  <div class='img wide'>Wide Img</div>
</div>"
                 data-css=".gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px; /* Base height for rows */
  gap: 10px;
  padding: 10px;
  background: #111;
}

.img {
  background: #333;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: bold;
}

/* Specific Spans */
.wide {
  grid-column: span 2;
  background: #3b82f6; color: white;
}
.tall {
  grid-row: span 2;
  background: #ef4444; color: white;
}">
                 <pre><code>.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
}

.wide { grid-column: span 2; }
.tall { grid-row: span 2; }</code></pre>
            </div>
            
            <p>This technique is widely used in portfolio websites and photography blogs.</p>
        `
},



"combinators": {
  title: "CSS Combinators",
  category: "Advanced Selectors",
  prev: "grouping",
  next: "comments",
  content: `
    <h2>CSS Combinators</h2>

    <p>
      CSS combinators allow you to combine selectors to target elements based on their
      relationship in the document tree.
    </p>

    <p style="color: blue;">
      These include:
      <code>descendant</code>,
      <code>child</code>,
      <code>adjacent sibling</code>,
      and <code>general sibling</code> combinators.
    </p>

    <!-- ===================== -->
    <!-- 1) Descendant Combinator (space) -->
    <!-- ===================== -->
    <h3>1. Descendant Combinator</h3>
    <p>
      The space combinator selects elements that are descendants of another selector.
      It matches children, grandchildren, etc.
    </p>

    <div class="code-block"
         data-html="<div class='parent'>
  <p>This is a child &lt;p&gt;</p>
  <div class='inner'>
    <p>This is a nested child &lt;p&gt;</p>
  </div>
</div>"
         data-css=".parent p {
  color: red;
}">

<pre><code>/* Descendant combinator */
.parent p {
  color: red;
}</code></pre>

    </div>

    <p>
      In this example, both paragraphs inside <code>.parent</code> turn red.
    </p>

    <!-- ===================== -->
    <!-- 2) Child Combinator (>) -->
    <!-- ===================== -->
    <h3>2. Child Combinator</h3>
    <p>
      The child combinator (<code>&gt;</code>) selects only direct children.
    </p>

    <div class="code-block"
         data-html="<div class='parent2'>
  <p>Direct child &lt;p&gt;</p>
  <div class='inner'>
    <p>Nested child &lt;p&gt; (not styled)</p>
  </div>
</div>"
         data-css=".parent2 &gt; p {
  color: green;
}">

<pre><code>/* Child combinator */
.parent2 > p {
  color: green;
}</code></pre>

    </div>

    <p>
      Only the direct paragraph inside <code>.parent2</code> becomes green.
    </p>

    <!-- ===================== -->
    <!-- 3) Adjacent Sibling (+) -->
    <!-- ===================== -->
    <h3>3. Adjacent Sibling Combinator</h3>
    <p>
      The adjacent sibling combinator (<code>+</code>) selects an element that comes
      immediately after another element.
    </p>

    <div class="code-block"
         data-html="<h3>Header</h3>
<p class='adj'>This paragraph follows the header directly.</p>
<p>This paragraph does not get styled.</p>"
         data-css="h3 + p {
  color: blue;
}">

<pre><code>/* Adjacent sibling combinator */
h3 + p {
  color: blue;
}</code></pre>

    </div>

    <p>
      Only the first <code>&lt;p&gt;</code> that **immediately follows** the <code>&lt;h3&gt;</code> is blue.
    </p>

    <!-- ===================== -->
    <!-- 4) General Sibling (~) -->
    <!-- ===================== -->
    <h3>4. General Sibling Combinator</h3>
    <p>
      The general sibling combinator (<code>~</code>) selects all siblings after an element.
    </p>

    <div class="code-block"
         data-html="<h3>Header</h3>
<p class='gen'>First following sibling</p>
<p class='gen'>Second following sibling</p>"
         data-css="h3 ~ p {
  color: purple;
}">

<pre><code>/* General sibling combinator */
h3 ~ p {
  color: purple;
}</code></pre>

    </div>

    <p style="color: blue;">
      In this example, both paragraphs that come after the <code>&lt;h3&gt;</code> are purple.
    </p>
  `
},

"pseudo": {
  title: "CSS Pseudo-Classes & Pseudo-Elements",
  category: "Advanced Selectors",
  prev: "combinators",
  next: "howto",
  content: `
    <h2>CSS Pseudo-Classes & Pseudo-Elements</h2>

    <p>
      CSS pseudo-classes and pseudo-elements let you style elements based on their
      state or specific parts of the element. They enhance regular selectors
      without extra HTML.
    </p>

    <p style="color: blue;">
      Tip: Pseudo-classes use a single colon (<code>:</code>), pseudo-elements use a double colon (<code>::</code>).
    </p>

    <!-- ===================== -->
    <!-- 1) Pseudo-Classes: :hover, :active -->
    <!-- ===================== -->
    <h3>1. Pseudo-Classes (<code>:hover</code>, <code>:active</code>)</h3>
    <p>
      Pseudo-classes target elements based on interaction or state.
    </p>

    <div class="code-block"
         data-html="<p><a href='#' class='btn1'>Hover me</a> or <a href='#' class='btn2'>Click me</a></p>"
         data-css=".btn1:hover {
  color: white;
  background: #2563eb;
}
.btn2:active {
  color: white;
  background: #dc2626;
}">

<pre><code>/* pseudo-classes */
.btn1:hover {
  background: #2563eb;
  color: white;
}
.btn2:active {
  background: #dc2626;
  color: white;
}</code></pre>

    </div>

    <p>
      With <code>:hover</code>, styles apply when the mouse is over the element.
      <code>:active</code> applies during clicking.
    </p>

    <!-- ===================== -->
    <!-- 2) Pseudo-Class: :first-child, :last-child -->
    <!-- ===================== -->
    <h3>2. <code>:first-child</code> & <code>:last-child</code></h3>
    <p>
      These select only the first or last child of a parent.
    </p>

    <div class="code-block"
         data-html="<ul class='fc'>
  <li>First</li><li>Middle</li><li>Last</li>
</ul>"
         data-css=".fc li:first-child {
  color: green;
}
.fc li:last-child {
  color: red;
}">

<pre><code>/* first & last child */
.fc li:first-child {
  color: green;
}
.fc li:last-child {
  color: red;
}</code></pre>

    </div>

    <p>
      This is useful for highlighting specific list items without extra classes.
    </p>

    <!-- ===================== -->
    <!-- 3) Pseudo-Elements: ::before -->
    <!-- ===================== -->
    <h3>3. Pseudo-Element <code>::before</code></h3>
    <p>
      <code>::before</code> inserts content before an element’s content.
    </p>

    <div class="code-block"
         data-html="<p class='pb'>This paragraph</p>"
         data-css=".pb::before {
  content: '🌟 ';
  color: gold;
}">

<pre><code>/* pseudo-element before */
.pb::before {
  content: '🌟 ';
  color: gold;
}</code></pre>

    </div>

    <p>
      Use <code>content</code> to add icons, quotes, or extra text without changing HTML.
    </p>

    <!-- ===================== -->
    <!-- 4) Pseudo-Elements: ::after -->
    <!-- ===================== -->
    <h3>4. Pseudo-Element <code>::after</code></h3>
    <p>
      <code>::after</code> adds content after the element.
    </p>

    <div class="code-block"
         data-html="<p class='pa'>Styled with after</p>"
         data-css=".pa::after {
  content: ' ✓';
  color: green;
  font-weight: bold;
}">

<pre><code>/* pseudo-element after */
.pa::after {
  content: ' ✓';
  color: green;
  font-weight: bold;
}</code></pre>

    </div>

    <p>
      This is often used to mark completion, decorations, or effects.
    </p>

    <!-- ===================== -->
    <!-- 5) Pseudo-Element: ::first-letter -->
    <!-- ===================== -->
    <h3>5. <code>::first-letter</code></h3>
    <p>
      <code>::first-letter</code> applies styles to the first character of a block.
    </p>

    <div class="code-block"
         data-html="<p class='fl'>Fancy first letter</p>"
         data-css=".fl::first-letter {
  font-size: 2.2em;
  color: #8b5cf6;
  font-weight: bold;
}">

<pre><code>/* pseudo-element first-letter */
.fl::first-letter {
  font-size: 2.2em;
  color: #8b5cf6;
  font-weight: bold;
}</code></pre>

    </div>

    <p style="color: blue;">
      Quick recap:
      <code>:hover</code>, <code>:active</code>, <code>:first-child</code> are pseudo-classes;
      <code>::before</code>, <code>::after</code>, <code>::first-letter</code> are pseudo-elements.
    </p>
  `
},

"attribute_selectors": {
  title: "CSS Attribute Selectors",
  category: "Advanced Selectors",
  prev: "pseudo",
  next: "howto",
  content: `
    <h2>CSS Attribute Selectors</h2>

    <p>
      Attribute selectors allow you to select elements based on their attributes
      or attribute values. This is very powerful for forms, links, and dynamic content.
    </p>

    <p style="color: blue;">
      Tip: Attribute selectors are written using square brackets <code>[]</code>.
    </p>

    <!-- ===================== -->
    <!-- 1) [attribute] -->
    <!-- ===================== -->
    <h3>1. Select by Attribute Presence</h3>
    <p>
      Selects all elements that have a specific attribute.
    </p>

    <div class="code-block"
         data-html="<input type='text' placeholder='Your name'>
<input type='password' placeholder='Password'>"
         data-css="input[placeholder] {
  border: 2px solid #2563eb;
  padding: 6px;
}">

<pre><code>/* has attribute */
input[placeholder] {
  border: 2px solid #2563eb;
}</code></pre>

    </div>

    <p>
      Both inputs are selected because they have the <code>placeholder</code> attribute.
    </p>

    <!-- ===================== -->
    <!-- 2) [attribute=value] -->
    <!-- ===================== -->
    <h3>2. Select by Exact Value</h3>
    <p>
      Selects elements with an exact attribute value.
    </p>

    <div class="code-block"
         data-html="<input type='text' value='Text field'>
<input type='password' value='Secret'>"
         data-css="input[type='password'] {
  background: #fee2e2;
  border: 2px solid #dc2626;
}">

<pre><code>/* exact value */
input[type='password'] {
  background: #fee2e2;
  border: 2px solid #dc2626;
}</code></pre>

    </div>

    <p>
      Only the password input is styled.
    </p>

    <!-- ===================== -->
    <!-- 3) [attribute^=value] -->
    <!-- ===================== -->
    <h3>3. Starts With (<code>^=</code>)</h3>
    <p>
      Selects elements whose attribute value starts with a specific string.
    </p>

    <div class="code-block"
         data-html="<a href='https://google.com'>Google</a><br>
<a href='http://example.com'>Example</a>"
         data-css="a[href^='https'] {
  color: green;
  font-weight: bold;
}">

<pre><code>/* starts with */
a[href^='https'] {
  color: green;
}</code></pre>

    </div>

    <p>
      Only secure (https) links become green.
    </p>

    <!-- ===================== -->
    <!-- 4) [attribute$=value] -->
    <!-- ===================== -->
    <h3>4. Ends With (<code>$=</code>)</h3>
    <p>
      Selects elements whose attribute value ends with a specific string.
    </p>

    <div class="code-block"
         data-html="<img src='photo.jpg'>
<img src='icon.png'>"
         data-css="img[src$='.png'] {
  border: 3px solid orange;
}">

<pre><code>/* ends with */
img[src$='.png'] {
  border: 3px solid orange;
}</code></pre>

    </div>

    <p>
      Only PNG images get an orange border.
    </p>

    <!-- ===================== -->
    <!-- 5) [attribute*=value] -->
    <!-- ===================== -->
    <h3>5. Contains (<code>*=</code>)</h3>
    <p>
      Selects elements whose attribute value contains a specific substring.
    </p>

    <div class="code-block"
         data-html="<a href='profile-user.html'>User Profile</a><br>
<a href='admin-panel.html'>Admin Panel</a>"
         data-css="a[href*='admin'] {
  color: red;
  font-weight: bold;
}">

<pre><code>/* contains */
a[href*='admin'] {
  color: red;
}</code></pre>

    </div>

    <p style="color: blue;">
      Recap:
      <code>[attr]</code>,
      <code>[attr=value]</code>,
      <code>[attr^=value]</code>,
      <code>[attr$=value]</code>,
      <code>[attr*=value]</code>
    </p>
  `
},

"counters": {
  title: "CSS Counters",
  category: "Advanced Selectors",
  prev: "forms",
  next: null, // sende sonraki konu varsa yaz
  content: `
    <h2>CSS Counters</h2>

    <p>
      CSS counters let you create automatic numbering (headings, sections, lists)
      without JavaScript. Counters are like CSS-managed variables. :contentReference[oaicite:1]{index=1}
    </p>

    <p style="color: blue;">
      Main tools: <code>counter-reset</code>, <code>counter-increment</code>, and
      inserting the value using <code>content</code> + <code>counter()</code>/<code>counters()</code>. :contentReference[oaicite:2]{index=2}
    </p>

    <!-- ===================== -->
    <!-- 1) Basic heading counter -->
    <!-- ===================== -->
    <h3>1. Numbering Headings</h3>
    <p>
      Create a counter on the page, then increment it for each heading and print it using <code>::before</code>.
    </p>

    <div class="code-block"
         data-html="<h2>HTML Tutorial</h2>
<p>Some text...</p>
<h2>CSS Tutorial</h2>
<p>Some text...</p>
<h2>JavaScript Tutorial</h2>
<p>Some text...</p>"
         data-css="body{
  counter-reset: section;
}
h2::before{
  counter-increment: section;
  content: 'Section ' counter(section) ': ';
  font-weight: 800;
  color: #2563eb;
}">

<pre><code>body { counter-reset: section; }

h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
}</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 2) Nested counters with counters() -->
    <!-- ===================== -->
    <h3>2. Nested Numbering (1, 1.1, 1.2...)</h3>
    <p>
      Use nested counters and the <code>counters()</code> function to build multi-level numbers. :contentReference[oaicite:3]{index=3}
    </p>

    <div class="code-block"
         data-html="<ol class='toc'>
  <li>Intro</li>
  <li>Selectors
    <ol>
      <li>Class</li>
      <li>ID</li>
    </ol>
  </li>
  <li>Colors</li>
</ol>"
         data-css=".toc{
  counter-reset: item;
  list-style: none;
  padding-left: 0;
}
.toc li{
  counter-increment: item;
  margin: 8px 0;
}
.toc li::before{
  content: counters(item,'.') ' ';
  font-weight: 800;
  color: #111827;
}
.toc ol{
  counter-reset: item;
  list-style: none;
  padding-left: 18px;
  margin-top: 6px;
}">

<pre><code>/* nested counters */
ol { counter-reset: item; list-style: none; }
li { counter-increment: item; }
li::before { content: counters(item, ".") " "; }</code></pre>

    </div>

    <!-- ===================== -->
    <!-- 3) Styling the counter like a badge -->
    <!-- ===================== -->
    <h3>3. Counter as a Badge</h3>
    <p>
      You can style the generated number like a small badge.
    </p>

    <div class="code-block"
         data-html="<h3 class='badge'>Lesson</h3>
<h3 class='badge'>Practice</h3>
<h3 class='badge'>Quiz</h3>"
         data-css="body{ counter-reset: step; }

.badge{
  counter-increment: step;
  margin: 12px 0;
  padding-left: 48px;
  position: relative;
  line-height: 1.2;
}
.badge::before{
  content: counter(step);
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 34px;
  height: 34px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  font-weight: 900;
  color: white;
  background: #04AA6D;
}">

<pre><code>body { counter-reset: step; }

.badge { counter-increment: step; }
.badge::before {
  content: counter(step);
}</code></pre>

    </div>

    <p style="color: blue;">
      Recap:
      <code>counter-reset</code> starts/reset the counter,
      <code>counter-increment</code> adds to it,
      and <code>content</code> prints it using <code>counter()</code>/<code>counters()</code>. :contentReference[oaicite:4]{index=4}
    </p>
  `
},
};