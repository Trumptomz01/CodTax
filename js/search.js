import {htmlSections} from "../js/html.js";
import {cssSections} from "../js/css.js";
import { sections } from "../js/Javascript.js";
import {  javaCheatSheet } from "../js/java.js";
import { pythonCheat } from "../js/python.js";

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
         <a href="#${section.id}" class="list-link">
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

const debouncedSearch = debounce(performSearch, 800);

searchInput.addEventListener("input", (e) => {
   e.preventDefault();
   // show resultDiv
   ResultsDiv();
   // 400ms delay before searching
   debouncedSearch();
   document.body.addEventListener("click", (e) => {
      if (!searchResultsDiv.contains(e.target) && e.target !== searchInput) {
         searchResultsDiv.classList.remove("fade-in");
         searchResultsDiv.classList.add("slide-out");
         hideAnimation();
         searchInput.value = ""
      }
   });
});