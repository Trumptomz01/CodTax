
































const main = document.querySelector("#page-content");
let mainContainer = "";
sections.map((contents) => {
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
main.innerHTML = mainContainer;