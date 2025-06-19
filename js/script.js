import {htmlSections} from "../js/html.js";
import {cssSections} from "../js/css.js";
import {  javaCheatSheet } from "../js/java.js";
import { sections } from "../js/javascript.js";
import { pythonCheat } from "../js/python.js";
const quickSnippets = [
  {
    icon: "fa-brands fa-html5",
    programmingLanguage: "HTML",
    topic: "How to create a form?",
    link:"/app/html.html#form-syntax"
  },
  {
    icon: "fa-brands fa-css3",
    programmingLanguage: "CSS",
    topic: "How to center a div?",
    link:"/app/css.html#center-element"
  },
  {
    icon: "fa-brands fa-js",
    programmingLanguage: "JavaScript",
    topic: "How to create a function?",
    link:"app/javaScript.html#js-function-declare"

  },
  {
    icon: "fa-brands fa-python",
    programmingLanguage: "Python",
    topic: "How to create a list?",
    link:"/app/python.html#create-list"
  },
  {
    icon: "fa-brands fa-java",
    programmingLanguage: "Java",
    topic: "How to create a class?",
    link:"/app/java.html#create-class"

  },
];
const snippetContents = [
  {
    name: "HTML",
    description: "HTML is the structure of web pages.",
    exampleHeading: "",
    snippetLink: "/app/html.html",
    codeSnippet: `
    &lt;!DOCTYPE html&gt;
    &lt;html lang=&quot;en&quot;&gt;
    &lt;head&gt;
       &lt;meta charset=&quot;UTF-8&quot; /&gt;
       &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
       &lt;title&gt;Page Title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
 
       &lt;!-- Content goes here --&gt;
 
    &lt;/body&gt;
    &lt;/html&gt;
   `,
    linkToLearn: "https://www.w3schools.com/html/default.asp",
    Reference: "https://www.w3schools.com/tags/",
  },

  {
    name: "CSS",
    description: "CSS styles the look of web pages.",
    exampleHeading: "Centering a Div",
    snippetLink: "/app/css.html",
    codeSnippet: `
    /* common way*/
    .container {
       display: flex;
       justify-content: center; /* Horizontal */
       align-items: center;     /* Vertical */
       height: 100vh;           /* Full viewport height */
    }
    `,
    linkToLearn: "https://web.dev/learn/css",
    Reference: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  
  {
    name: "JavaScript",
    description: "JavaScript adds interactivity to websites.",
    exampleHeading: "",
    snippetLink: "/app/javaScript.html",
    codeSnippet: `
    <script>
       function greet(name) {
          console.log("Hello, " + name + "!");
          document.getElementById("output").textContent = "Hello, " + name + "!";
       }
 
       document.getElementById("btn").addEventListener("click", function () {
          const name = document.getElementById("nameInput").value || "World";
          greet(name);
       });
    </script>
    `,
    linkToLearn: "https://javascript.info/",
    Reference: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",
  },
  {
    name: "PYTHON",
    description: "Python is a simple, powerful programming language.",
    exampleHeading: "",
    snippetLink: "/app/python.html",
    codeSnippet: `
  def greet_user():
    name= input('enter your name? : ')
    name_output = name.replace(' ','')
    print(f"Hello, {name_output}!")
    print(f"Your name has {len(name_output)} characters.")
  greet_user()
    `,
    linkToLearn: "https://www.learnpython.org/",
    Reference: "https://docs.python.org/3/reference/index.html",
  },
  {
    name: "JAVA",
    description:
      "Java is a versatile language used in apps and enterprise software.",
    exampleHeading: "",
    snippetLink: "/app/java.html",
    codeSnippet: `
    import java.util.Scanner;
    public class GreetUser {
       public static void main(String[] args) {
          System.out.print("Name? ");
          String name = new Scanner(System.in).nextLine().trim();
          name = name.isEmpty() ? "World" : name;
          System.out.printf("Hello, %s!%nLength: %d%n", name, name.length());
       }
    }
    `,
    linkToLearn: "https://www.w3schools.com/java/",
    Reference: "https://www.w3schools.com/java/java_ref_reference.asp",
  },
];
const communityHighlights = [
  {
    icon: "fas fa-code-branch",
    heading: "Collaborate",
    paragraph: "Work on open-source projects with community members",
  },
  {
    icon: "fa-bolt",
    heading: "Learn Fast",
    paragraph: "Weekly coding challenges to sharpen your skills",
  },
  {
    icon: "fa-user-friends",
    heading: "Network",
    paragraph: "Connect with developers at all experience levels",
  },
];

const cardContainer = document.querySelector("#card-container");
let languageCard = "";
quickSnippets.map((card) => {
  languageCard += `
      <div class="card">
         <div class="program-icon"><i class="${card.icon}"></i></div>
         <h2>${card.programmingLanguage}</h2>
         <p>${card.topic}</p>
         <button>
            <a href="${card.link}"><i class="fa-solid fa-code"></i>View Code</a>
         </button>
      </div>
   `;
}).join("");
cardContainer.innerHTML = languageCard;

const snippetContainer = document.querySelector("#snippets-section");
let snippetCards = "";
snippetContents.map((cards) => {
  snippetCards += `
      <div class="snippet-div">
         <div class="snippets-section-content">
            <h1>${cards.name}</h1>
            <p>${cards.description}</p>
            <div class="links">
               <a href="${cards.snippetLink}">View Cheat Sheet <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
               <a href="${cards.linkToLearn}">Learn ${cards.name}</a>
               <a href="${cards.Reference}">${cards.name} Reference</a>   
            </div>
         </div>
         <div class="snippets-code-block">
            <h3>${cards.name} Example: ${cards.exampleHeading}</h3>
            <pre><code class="language-${cards.name}">
                  ${cards.codeSnippet}</code>
            </pre>
         </div>
      </div>
   `;
}).join("");
snippetContainer.innerHTML = snippetCards;

const HighlightContainer = document.querySelector("#community-highlights");
let highlight = "";
communityHighlights.map((boxes) => {
  highlight += `
      <div class="highlight-card">
         <div class="icon-circle">
            <i class="fas ${boxes.icon}"></i>
         </div>
         <h2>${boxes.heading}</h2>
         <br>
         <p>${boxes.paragraph}</p>
      </div>
   `;
}).join("");
HighlightContainer.innerHTML = highlight;

// footer section
const footerLinks = [
  {
    type: "Cheats",
    head: "Our Cheats",
    links: {
      html: "/app/html.html",
      css: "/app/css.html",
      javascript: "app/javaScript.html",
      python: "/app/python.html",
      java: "/app/java.html"
    }
  },
  {
    type: "tutorials",
    head: "Top Tutorials",
    links: {
      html: "https://w3schools.com/html/default.asp",
      css: "https://w3schools.com/css/default.asp",
      javascript: "https://w3schools.com/js/default.asp",
      python: "https://w3schools.com/python/default.asp",
      java: "https://w3schools.com/java/default.asp"
    }
  },
  {
    type: "Guides",
    head: "Top Guides",
    links: {
      html: "https://developer.mozilla.org/en-US/docs/Web/HTML#guides",
      css: "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides",
      javascript:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
      python: "https://pythonguides.com/",
      java: "https://www.javaguides.net/"
    }
  },
  {
    type: "References",
    head: "Top References",
    links: {
      html: "https://w3schools.com/tags/default.asp",
      css: "https://w3schools.com/cssref/default.asp",
      javascript: "https://w3schools.com/jsref/default.asp",
      python: "https://w3schools.com/python/python_reference.asp",
      java: "https://www.w3schools.com/java/java_ref_reference.asp"
    }
  }
];
 
const footerContent = document.querySelector("#footer-content");
const footerChild = footerLinks.map((section) =>`
   <div class="footer-child">
     <h2>${section.head}</h2>
     <ul>
       <li><a target="_blank" rel="noopener noreferrer" href="${section.links.html}">HTML ${section.type}</a></li>
       <li><a target="_blank" rel="noopener noreferrer" href="${section.links.css}">CSS ${section.type}</a></li>
       <li><a target="_blank" rel="noopener noreferrer" href="${section.links.javascript}">JavaScript ${section.type}</a></li>
       <li><a target="_blank" rel="noopener noreferrer" href="${section.links.python}">Python ${section.type}</a></li>
       <li><a target="_blank" rel="noopener noreferrer" href="${section.links.java}">Java ${section.type}</a></li>
     </ul>
   </div> 
`).join("");
if (footerContent){
  footerContent.innerHTML = footerChild;
}

const yearElement = document.querySelector("#live-year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
};

// search codes
const searchButton = document.querySelector("#searchButton");
const allSections = [...htmlSections, ...cssSections, ...sections, ...pythonCheat, ...javaCheatSheet];
let searchInput = document.querySelector("#searchInput" );
const searchResultsDiv = document.querySelector("#searchResults");
const searchLists = document.querySelector("#searchLists");

function  hideAnimation(){
   searchResultsDiv.addEventListener("animationend", function handler(e) {
      if (searchResultsDiv.classList.contains("slide-out")) {
         searchResultsDiv.style.display = "none";
         searchResultsDiv.removeEventListener("animationend", handler);
      }
   });
};

function ResultsDiv(){
   const searchQuery = searchInput.value.trim();
   if (searchQuery.length == 0) {
      searchResultsDiv.classList.add("slide-out");
      searchResultsDiv.classList.remove("fade-in");
      // Hide after animation
      hideAnimation();
   } else {
      searchResultsDiv.style.display = "flex";
      searchResultsDiv.classList.remove("slide-out");
      searchResultsDiv.classList.add("fade-in");
   }
};


function debounce(func, delay) {
   let timeoutId;
   return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
         func.apply(this, args);
      }, delay);
   };
};

function performSearch(){
   const searchQuery = searchInput.value.trim().toLowerCase();
      // Clear previous results
      searchLists.innerHTML = "";
      // Filter sections based on search query
      const filteredSections = allSections.filter(section =>
      section.heading.toLowerCase().includes(searchQuery) ||section.paragraph.toLowerCase().includes(searchQuery) || section.id.toLowerCase().includes(searchQuery)
      );
      if (filteredSections.length === 0) {
      searchLists.innerHTML = `<li class="no-results">No results found.</li>`;
      return;
      }
      // Render filtered results
      filteredSections.forEach(section => {
      const li = document.createElement("li");
      li.className = "list-li";
      li.innerHTML = `
         <a href="/app/${section.language}.html#${section.id}" class="list-link">
         <div class="search-head">
            <div class="search-id"><h3>${section.id.toUpperCase()}</h3></div>
            <div class="seperator"><i class="fa-solid fa-arrow-right-long"></i></div>
               <div class="search-header"><p>${section.heading}</p></div>
            </div>
            <div class="search-p">
               <p class="search-paragraph">
                ${section.paragraph.replace(/<[^>]+>/g, "").slice(0, 150)}<span class="">...</span>
               </p>
            </div>
         </a>
      `;
      searchLists.appendChild(li);
   });
};
document.querySelector("#searchButton").addEventListener("click", (e)=>{
   e.preventDefault();
   performSearch();
});
const debouncedSearch = debounce(performSearch, 800);
searchInput.addEventListener("input", (e) => {
   e.preventDefault();
   // show resultDiv
   ResultsDiv();
   // 400ms delay before searching
   debouncedSearch();
   document.body.addEventListener("click", (e) => {
      if (!searchResultsDiv.contains(e.target) && e.target !== searchInput && e.target !== searchButton && !searchButton.contains(e.target)){
         searchResultsDiv.classList.remove("fade-in");
         searchResultsDiv.classList.add("slide-out");
         hideAnimation();
         searchInput.value = ""
      };
   });
});

// search
document.getElementById('mobile-search-btn').addEventListener('click', function() {
   const searchInput = document.getElementById('searchInput');
   if (searchInput) {
      searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      searchInput.focus();
   }
});

// aside
document.querySelectorAll('.toggle-btn').forEach((btn) => {
   btn.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = btn.parentElement;
      parent.classList.toggle('active');
   });
});

const menuBtn = document.querySelector('#mobile-nav-btn');
const asideSection = document.querySelector('#aside-section');

if (menuBtn && asideSection){
   menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (asideSection.style.display === 'flex') {
         asideSection.style.display = 'none';
         document.body.style.overflow = '';
      } else {
         asideSection.style.display = 'flex';
         document.body.style.overflow = 'hidden';
      };
   });
};

// Helper function to hide mobile nav
function hideMobileNav() {
   if (asideSection && asideSection.style.display === 'flex') {
      asideSection.style.display = 'none';
      document.body.style.overflow = '';
   }
}; 

document.body.addEventListener('click', (e) => {
   // Only hide if asideSection is open and click is outside
   if (asideSection && asideSection.style.display === 'flex' && !asideSection.contains(e.target) && e.target !== menuBtn) {
      hideMobileNav();
   }
});
document.querySelector('#cancel-btn').addEventListener('click', ()=>{
   hideMobileNav();
});



