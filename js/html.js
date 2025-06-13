export const htmlSections = [
   {
      heading: "Basic HTML Structure",          
      id: "html-structure",               
      paragraph:`Every HTML document starts with a standard structure including
            <code class="bold language-html">&lt;!DOCTYPE html&gt;</code>,
            <code class="bold language-html">&lt;html&gt;</code>,
            <code class="bold language-html">&lt;head&gt;</code>, and
            <code class="bold language-html">&lt;body&gt;</code> tags.`,               
      code: `    
   &lt;!DOCTYPE html&gt;
   &lt;html lang="en"&gt;
     &lt;head&gt;
       &lt;meta charset="UTF-8"&gt;
       &lt;title&gt;Document&lt;/title&gt;
     &lt;/head&gt;
     &lt;body&gt;
       &lt;h1&gt;Hello, world!&lt;/h1&gt;
     &lt;/body&gt;
   &lt;/html&gt;`,             
   },
   {
      heading: "How to create a form?",          
      id: "form-syntax",               
      paragraph:`In HTML, a form is a section of a webpage that allows users to input
            and submit data. It's created using the
            <b><code class="bold language-html"> &lt;form&gt;</code></b> tag and can contain
            various interactive elements.`,               
      code: `    
   &lt;form action="submit_url" method="POST"&gt;
      &lt;label for="username"&gt;Username:&lt;/label&gt;
      &lt;input type="text" id="username" name="username" placeholder="Enter your username" required&gt;

      &lt;label for="password"&gt;Password:&lt;/label&gt;
      &lt;input type="password" id="password" name="password" placeholder="Enter your password" required&gt;

      &lt;button type="submit"&gt;Submit&lt;/button&gt;
   &lt;/form&gt;`,             
   },
   {
      heading: "HTML Headings",          
      id: "headings",               
      paragraph:`HTML provides six levels of headings, from
            <code class="bold language-html">&lt;h1&gt;</code> (most important) to
            <code class="bold language-html">&lt;h6&gt;</code> (least important).`,
      code:`
   &lt;h1&gt;Heading 1&lt;/h1&gt;
   &lt;h2&gt;Heading 2&lt;/h2&gt;
   &lt;h3&gt;Heading 3&lt;/h3&gt;
   &lt;h4&gt;Heading 4&lt;/h4&gt;
   &lt;h5&gt;Heading 5&lt;/h5&gt;
   &lt;h6&gt;Heading 6&lt;/h6&gt`,             
   },
   {
      heading:"Creating Links",
      id:"links",
      paragraph:`Use the <code class="language-html">&lt;a&gt;</code> tag to create hyperlinks in HTML. Use
            <code class ="language-html">target="_blank"</code> to open in a new tab.`,
      code:`&lt;a href="https://example.com" target="_blank"&gt;Visit Example&lt;/a&gt;`
   },
   {
      heading:"Adding Images",
      id:"images",
      paragraph:`The <code class="language-html">&lt;img&gt;</code> tag is used to embed images. Always use the <code class ="language-html">alt</code> attribute for accessibility.`,
      code:` &lt;img src="image.jpg" alt="Description" width="300"&gt;`
   },
   {
      heading:"HTML Lists",
      id:"lists",
      paragraph:`Use <code class="language-html">&lt;ul&gt;</code> for unordered lists and <code class="language-html">&lt;ol&gt;</code> for ordered lists. List items use <code class="language-html">&lt;li&gt;</code>.`,
      code:`  
   &lt;!-- Unordered List --&gt;
   &lt;ul&gt;
      &lt;li&gt;Item 1&lt;/li&gt;
      &lt;li&gt;Item 2&lt;/li&gt;
   &lt;/ul&gt;
   
   &lt;!-- Ordered List --&gt;
   &lt;ol&gt;
      &lt;li&gt;First&lt;/li&gt;
      &lt;li&gt;Second&lt;/li&gt;
   &lt;/ol&gt;`
   },
   {
      heading:"Creating Tables",
      id:"tables",
      paragraph:`Tables are created using <code class="language-html">&lt;table&gt;</code>, <code class="language-html">&lt;tr&gt;</code>, <code class="language-html">&lt;th&gt;</code>, and <code class="language-html">&lt;td&gt;</code>.`,
      code:`
   &lt;table border="1"&gt;
      &lt;tr&gt;
         &lt;th&gt;Name&lt;/th&gt;
         &lt;th&gt;Age&lt;/th&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
         &lt;td&gt;Alice&lt;/td&gt;
         &lt;td&gt;24&lt;/td&gt;
      &lt;/tr&gt;
   &lt;/table&gt;`
   },
   {
      heading:"Adding Comments",
      id:"comments",
      paragraph:`Comments in HTML do not display in the browser and are used to explain code`,
      code:`&lt;!-- This is a comment in HTML --&gt;

   &lt;!-- You write comments inside here --&gt;`
   },
   {
      heading:"How to create a navbar",
      id:"div-span",
      paragraph:`The <code class="language-html">&lt;ul&gt;</code> element creates an <strong>unordered list</strong> (bullet points) for navigation items. Each <code class="language-html">&lt;li&gt;</code> (list item) contains:  
         <br><br>
         <code class="language-html">&lt;a href="default.asp"&gt;Home&lt;/a&gt;</code> - Link to homepage (<code>default.asp</code>)<br>  
         <code class="language-html">&lt;a href="news.asp"&gt;News&lt;/a&gt;</code> - Link to news section<br>  
         <code class="language-html">&lt;a href="contact.asp"&gt;Contact&lt;/a&gt;</code> - Link to contact page<br>  
         <code class="language-html">&lt;a href="about.asp"&gt;About&lt;/a&gt;</code> - Link to about page  
         <br><br>
         Together they create a <strong>navigation menu</strong> where:<br>  
         - <code class="language-html">&lt;ul&gt;</code> wraps all menu items<br>  
         - <code class="language-html">&lt;li&gt;</code> groups each link<br>  
         - <code class="language-html">&lt;a&gt;</code> defines clickable links using the <code>href</code> attribute `,
      code:`
   &lt;ul&gt;
      &lt;li&gt;&lt;a href="default.asp"&gt;Home&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="news.asp"&gt;News&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="contact.asp"&gt;Contact&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="about.asp"&gt;About&lt;/a&gt;&lt;/li&gt;
   &lt;/ul&gt;`
   },
    {
      heading:"&lt;div&gt; and &lt;span&gt;",
      id:"navbar",
      paragraph:`<code class="language-html">&lt;div&gt;</code> is a block-level container, while <code class="language-html">&lt;span&gt;</code> is inline. Useful for grouping elements.`,
      code:`  
      &lt;div&gt;This is a block&lt;/div&gt;
   &lt;p&gt;This is &lt;span style="color: red;"&gt;inline text&lt;/span&gt;&lt;/p&gt;`
   },
   {
      heading:"Creating Buttons",
      id:"buttons",
      paragraph:`Use <code class="language-html">&lt;button&gt;</code> or <code class ="language-html">&lt;input type="button"&gt;</code> to create clickable buttons.`,
      code:`
   &lt;button&gt;Click Me&lt;/button&gt;
      &lt;!-- you can also use input --&gt;
   &lt;input type="button" value="Click Me Too"&gt;`
   },
   {
      heading:"Embedding Video",
      id:"video-html",
      paragraph:`Use the <code class="language-html">&lt;video&gt;</code> tag with <code>controls</code> to add video playback support.`,
      code:`
   &lt;video width="320" height="240" controls&gt;
      &lt;source src="movie.mp4" type="video/mp4"&gt;
      Your browser does not support the video tag.
   &lt;/video&gt;`
   },
   {
      heading:"HTML Formatting Elements",
      id:"html-formatting",
      paragraph:`HTML formatting elements allow developers to style text with specific visual and semantic meanings.<br> Basic text styling includes <code class="language-html">&lt;b&gt;</code> for <b>bold</b> and <code class="language-html">&lt;i&gt;</code> for <i>italic</i> text, while semantic alternatives like <code class="language-html">&lt;strong&gt;</code> (for important content) and <code class="language-html">&lt;em&gt;</code> (for emphasized phrases) improve accessibility. For modifications, <code class="language-html">&lt;del&gt;</code> creates <del>strikethrough text</del>, <code class="language-html">&lt;ins&gt;</code> shows <ins>inserted content</ins>, and <code class="language-html">&lt;mark&gt;</code> <mark>highlights</mark> key sections. Technical content uses <code class="language-html">&lt;code&gt;</code> for <code>inline code</code>, <code class="language-html">&lt;pre&gt;</code> for preformatted blocks, and <code class="language-html">&lt;kbd&gt;</code> for keyboard inputs e.g<kbd> F5, alt + shift</kbd>`,
      code:`
   &lt;!-- Basic Text Styling --&gt;<br>
   &lt;b&gt;Bold Text&lt;/b&gt;<br>
   &lt;i&gt;Italic Text&lt;/i&gt;<br>
   &lt;strong&gt;Important Content&lt;/strong&gt;<br>
   &lt;em&gt;Emphasized Phrases&lt;/em&gt;<br><br>

   &lt;!-- Text Modifications --&gt;<br>
   &lt;del&gt;Strikethrough Text&lt;/del&gt;<br>
   &lt;ins&gt;Inserted Content&lt;/ins&gt;<br>
   &lt;mark&gt;Highlighted Section&lt;/mark&gt;<br><br>

   &lt;!-- Technical Formatting --&gt;<br>
   &lt;code&gt;Inline Code&lt;/code&gt;<br>
   &lt;pre&gt;Preformatted Block&lt;/pre&gt;<br>
   Press &lt;kbd&gt;F5&lt;/kbd&gt; or &lt;kbd&gt;Alt&lt;/kbd&gt; + &lt;kbd&gt;Shift&lt;/kbd&gt;`
   },
   {
      heading:"Semantic HTML Template",
      id:"semantic-temp",
      paragraph:`Semantic HTML uses meaningful tags like <code class="language-html">&lt;header&gt;</code>, <code class="language-html"> &lt;nav&gt;</code>, and <code class="language-html">&lt;article&gt;</code> to clearly define the structure and purpose of web content. This approach enhances accessibility for assistive technologies, improves SEO by helping search engines understand page content, and makes code more readable and maintainable for developers. Unlike generic tags such as <code class="language-html"> &lt;div&gt;</code> and <code class="language-html"> &lt;span&gt;</code>, semantic elements provide context, leading to better user experiences and more efficient web development.`,
      code:`
   &lt;!DOCTYPE html&gt;
   &lt;html lang="en"&gt;
   &lt;head&gt;
   &lt;meta charset="UTF-8" /&gt;
   &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
   &lt;title&gt;Semantic HTML Template&lt;/title&gt;
   &lt;!-- The &lt;head&gt; element contains metadata about the document, such as its title and character encoding --&gt;
   &lt;/head&gt;
   &lt;body&gt;

      &lt;!-- The &lt;header&gt; element represents introductory content, typically a group of introductory or navigational aids --&gt;
      &lt;header&gt;
         &lt;!-- The &lt;h1&gt; element represents the main heading of the page --&gt;
         &lt;h1&gt;Website Title&lt;/h1&gt;

         &lt;!-- The &lt;nav&gt; element represents a section of the page that links to other pages or to parts within the page --&gt;
         &lt;nav&gt;
            &lt;!-- Navigation links are typically organized in a list --&gt;
            &lt;ul&gt;
            &lt;li&gt;&lt;a href="#home"&gt;Home&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#services"&gt;Services&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
         &lt;/nav&gt;
      &lt;/header&gt;

      &lt;!-- The &lt;main&gt; element represents the dominant content of the &lt;body&gt; --&gt;
      &lt;main&gt;
         &lt;!-- The &lt;section&gt; element represents a standalone section of content which doesn't have a more specific semantic element to represent it --&gt;
         &lt;section&gt;
            &lt;!-- Content for this section would go here --&gt;
         &lt;/section&gt;

         &lt;!-- The &lt;article&gt; element represents a self-contained piece of content that could be distributed and reused independently --&gt;
         &lt;article&gt;
            &lt;!-- Content for this article would go here --&gt;
         &lt;/article&gt;

         &lt;!-- The &lt;aside&gt; element represents content that is tangentially related to the content around it --&gt;
         &lt;aside&gt;
            &lt;!-- Supplementary content, such as sidebars or call-out boxes, would go here --&gt;
         &lt;/aside&gt;
      &lt;/main&gt;

      &lt;!-- The &lt;footer&gt; element represents a footer for its nearest sectioning content or root element --&gt;
      &lt;footer&gt;
         &lt;!-- Footer content, such as contact information or links, would go here --&gt;
      &lt;/footer&gt;

   &lt;/body&gt;
   &lt;/html&gt;
   `
   },
];

const main = document.querySelector("#page-content");
let mainContainer = "";
htmlSections.map((contents) => {
   mainContainer += `
      <section class="section" id="${contents.id}">
         <div>
            <h2>${contents.heading}</h2>
            <p>${contents.paragraph}</p>
         </div>
         <br>
         <div class="code-div">
         <button id="button" title="Copy" class="copy-btn"><i class="fa-regular fa-copy"></i>copy code</button>
         <pre><code class="language-html">
   ${contents.code.trim()}</code></pre>
         </div>
      </section>
   `
}).join("");
if (main) {
   main.innerHTML = mainContainer;
};