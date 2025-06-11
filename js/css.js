export const cssSections = [
   {
      heading:"Basic CSS Syntax",
      id:"css-syntax",
      paragraph:`CSS rules consist of a selector and a declaration block.`,
      code:` 
   selector {
      property: value;
   }`
   },
   {
      heading:"CSS Selectors",
      id:"css-selectors",
      paragraph:`Selectors target elements for styling.`,
      code:`
    /* Element */
   p { 
     color: green; 
   }    

   /* Class */    
   .box { 
     border: 1px solid;
   } 

   /* ID */
   #main { 
     background: yellow; 
   } `
   },
   {
      heading:"CSS Colors",
      id:"css-colors",
      paragraph:`Colors can be set using names, hex, RGB, or HSL values.`,
      code:`
    h1 {
     color: red;
     color: #ff0000;
     color: rgb(255, 0, 0);
     color: hsl(0, 100%, 50%);
   }`
   },
   {
      heading:"Font Styling",
      id:"css-fonts",
      paragraph:`Use CSS properties to customize font appearance.`,
      code:` 
   p {
     font-family: Arial, sans-serif;
     font-size: 18px;
     font-weight: bold;
     font-style: italic;
   }`
   },
   {
      heading:"CSS Box Model",
      id:"box-model",
      paragraph:`Every HTML element is a box: content, padding, border, margin.`,
      code:`  
   div {
     padding: 20px;
     border: 2px solid black;
     margin: 10px;
   }`
   },
   {
      heading:"FlexBox Layout",
      id:"flex-box",
      paragraph:`Flexbox makes it easier to align items in a row or column.`,
      code:`  
   .container {
     display: flex;
     justify-content: center;
     align-items: center;
   }`
   },
   {
      heading:"CSS Grid Layout",
      id:"css-grid",
      paragraph:`CSS Grid allows two-dimensional layout control.`,
      code:`
   .grid {
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     gap: 10px;
   }`
   },
   {
      heading:"Hover Effects",
      id:"hover",
      paragraph:`Use the <code class="language-css">:hover</code> pseudo-class to apply styles when hovering over an element.`,
      code:`  
   button:hover {
     background-color: blue;
     color: white;
   }`
   },
   {
      heading:"CSS Transitions",
      id:"transitions",
      paragraph:`ohh! you forgot how to write it😂? copy!!.
      Transitions animate property changes over time.`,
      code:` 
   /* set transition*/
   .box {
     transition: background-color 0.3s ease;
   }

   /* hover to see transition */
   .box:hover {
     background-color: orange;
   }`
   },
   {
      heading:"Text Alignment",
      id:"text-align",
      paragraph:`Align text horizontally using <code class="language-css">text-align</code>.`,
      code:`  
   p {
     text-align: center;
   }`
   },
   {
      heading:"Background Styling",
      id:"background",
      paragraph:`Customize backgrounds with color, image, and more.`,
      code:` 
   div {
     background-color: lightblue;
     background-image: url("image.jpg");
     background-size: cover;
     background-position: center;
   }`
   },
   {
      heading:"Border Styling",
      id:"border",
      paragraph:`Add and customize borders around elements.`,
      code:` 
    img {
     border: 2px solid black;
     border-radius: 10px;
   }`
   },
   {
      heading:"Display Property",
      id:"display",
      paragraph:`Control the display behavior of elements.`,
      code:`
   span {
     display: block;  /* Makes &lt;span&gt behave like a block: takes full width, breaks line */
   }
   
   div {
     display: inline;  /* Makes &lt;div&gt behave like inline: no line break, fits content width */
   }`
   },
   {
      heading:"Positioning Elements",
      id:"positioning",
      paragraph:`Control element position with CSS <code class = "language-css">position</code>.<br>
      This code places the <code class = "language-css">.box</code> at a fixed spot (50px from the <code class= "language-">top</code> and 100px from the <code class= "language-">left</code> ) within its nearest positioned ancestor (or the page if none).`,
      code:`  
   .box {
     position: absolute;   /* Positions .box relative to nearest positioned ancestor */
     top: 50px;  /* Moves 50px down from the top */
     left: 100px;   /* Moves 100px from the left */
   }`
   },
   {
      heading:"Z-Index",
      id:"z-index",
      paragraph:`Wondering why your element doesn't show or seems hidden behind others? 
   It's probably a z-index issue. Elements with lower z-index can be overlapped 
   by those with higher ones. Set a higher z-index (like 10) to bring your popup 
   or overlay above other content.`,
      code:` 
   .popup {
     position: absolute;
     z-index: 10; /* Makes sure the popup stays on top of other elements */
   }`
   },
   {
      heading:"Overflow in CSS",
      id:"overflow",
      paragraph:`Control how content is displayed when it overflows. <br>
      Use <code class= "language-">overflow: scroll</code> to add scrollbars when content exceeds the container’s size, 
   allowing users to scroll to see the rest of the content.`,
      code:`
   .container {
     width: 200px;
     height: 100px;
     overflow: scroll;
   }` 
   },
   {
      heading:"Hide Elements",
      id:"visibility",
      paragraph:`<code class = "language-css">.hidden</code> completely removes the element from the layout (it won't take up space).<br> 
      <code class = "language-css">.invisible</code> hides the element, but it still takes up space in the layout.`,
      code:` 
   .hidden {
     display: none;
   }

   .invisible {
     visibility: hidden;
   }`
   },
   {
      heading:"Responsive Media Queries",
      id:"media-queries",
      paragraph:`Use media queries to adapt layout on different screen sizes.
      Use <code class = "language-css">@media</code> queries to apply different styles based on the screen width.
   <code class = "language-css">max-width</code> applies styles for smaller screens,<br> while <code class = "language-css">min-width</code> applies styles for larger ones.`,
      code:`
   @media (max-width: 600px) {
      body {
         background-color: #000000; /* Changes background color for screens <= 600px wide */
      }
   }

   @media (min-width: 601px) {
      body {
         background-color: #ffffff; /* Changes background color for screens > 600px wide */
      }
   }
      `
   },
   {
      heading:"CSS Variables",
      id:"css-variables",
      paragraph:`Define and reuse custom property values.`,
       code:`
   :root {
     --main-color: #3498db; /* Primary color */
     --secondary-color: #2ecc71; /* Secondary color */
   }

   h1 {
     color: var(--main-color); /* Main color for heading */
   }

   p {
     color: var(--secondary-color); /* Secondary color for paragraphs */ 
   }`
   },
   {
      heading:"Centering an Element(div)",
      id:"center-element",
      paragraph:`Center a <code class="language-html">&lt;div class ="centered"&gt;</code> both vertically and horizontally.`,
      code:`
      /* Centers an element both vertically and horizontally using absolute positioning and transform */
   .centered {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
   }`
   },
   {
      heading:"Clearfix Hack",
      id:"css-clearfix",
      paragraph:`Ensure a container wraps floated children elements.`,
      code:`
      /* Adds a clearfix to a container to clear floated child elements */
   .clearfix::after {
      content: "";
      display: table;
      clear: both;
   }`
   },
   {
      heading:"Responsive Font Size",
      id:"css-responsive-font",
      paragraph:`Adjust font size based on the viewport width.`,
      code:`
      body {
      font-size: 4vw;
      /* Sets font size to 4% of the viewport width */
   }`
   },
     {
      heading:"Sticky Header",
      id:"css-sticky-header",
      paragraph:`Keep the header fixed at the top when scrolling.`,
      code:`
      /* Makes the header sticky at the top of the page */
   header {
        position: sticky;
        top: 0;
        z-index: 1000;
   }`
   },
   {
      heading:"Tooltip",
      id:"",
      paragraph:`Display additional information when hovering over an element.<br>
      Creates a tooltip that appears when hovering over an element `,
      code:`
      .tooltip {
      position: relative;
      display: inline-block;
   }

   .tooltip .tooltiptext {
      visibility: hidden;
      width: 120px;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 5px;
      padding: 5px 0;
      position: absolute;
      z-index: 1;
      bottom: 125%;
      left: 50%;
      margin-left: -60px;
      opacity: 0;
      transition: opacity 0.3s;
   }

   .tooltip:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
   }`
   },
]





const main = document.querySelector("#page-content");
let mainContainer = "";
cssSections.map((contents) => {
   mainContainer += `
      <section class="section" id="${contents.id}">
         <div>
            <h2>${contents.heading}</h2>
            <p>${contents.paragraph}</p>
         </div>
         <br>
         <div class="code-div">
            <button id="button" title="Copy" class="copy-btn"><i class="fa-regular fa-copy"></i>copy code</button>
            <pre><code class="language-css">
   ${contents.code.trim()}</code></pre>
         </div>
      </section>
   `
}).join("");
if (main) {
   main.innerHTML = mainContainer;
}