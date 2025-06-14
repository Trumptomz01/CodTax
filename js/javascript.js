export const sections = [
  {
    heading: "Variables in JavaScript",
    id: "js-variables",
    language: "javaScript",
    paragraph: `In JavaScript, variables are used to store data values. There are three ways to declare variables: <code class="language-js"> var</code>, <code class="language-js">let</code>, and <code class="language-js">const</code>.<code class="language-js"> var</code> is function-scoped and can be redeclared and reassigned. <code class="language-js"> let</code> is block-scoped and can be reassigned but not redeclared. <code class="language-js">const</code> is block-scoped and cannot be reassigned or redeclared; it must be initialized at declaration.`,
    code: `
  var x = 10;
  let y = 20;
  const z = 30;`
  },
  {
    heading: "Data Types in JavaScript",
    id: "js-data-types",
    language: "javaScript",
    paragraph: `JavaScript has several data types, including <code class="language-js">number</code>, <code class="language-js">string</code>,<code class="language-js"> boolean</code>, <code class="language-js"> null</code>, <code class="language-js"> undefined</code>, <code class="language-js"> objects</code>, and <code class="language-js">array</code>. Numbers can be integers or floats. Strings are sequences of characters. Booleans are true or false. Null represents the intentional absence of any object value. Undefined means a variable has been declared but has not yet been assigned a value. Objects are collections of key-value pairs, and arrays are ordered lists of values.`,
    code: `
let num = 42;
let str = 'Hello';
let bool = true;
let nul = null;
let und;
let obj = { key: 'value' };
let arr = [1, 2, 3];`
  },
  {
    heading: "Operators in JavaScript",
    id: "js-operators",
    language: "javaScript",
    paragraph: `Operators are symbols that perform operations on one, two, or three operands and return a result. JavaScript has various types of operators, including arithmetic, comparison, and logical operators. Arithmetic operators include +, -, *, /, %. Comparison operators include <code class="language-js"> ==</code>, <code class="language-js"> ===</code>, <code class="language-js"> !=</code>, !==, <, >, <=, >=. Logical operators include &&, ||, !.`,
    code: `
let a = 5;
let b = 10;
console.log(a + b); // 15
console.log(a == b); // false
console.log(a < b); // true
console.log(a && b); // 5`
  },
  {
    heading: "Control Structures in JavaScript",
    id: "js-control-structures",
    language: "javaScript",
    paragraph: `Control structures allow you to control the flow of your program. Common control structures in JavaScript include <code class="language-js"> if-else statement</code>, <code class="language-js"> switch statements</code>, <code class="language-js"> for loops</code>, and <code class="language-js"> while</code> loops. If-else statements execute different blocks of code based on whether a condition is <code class="language-js"> true</code> or <code class="language-js"> false</code>. <code class="language-js"> switch</code> statements evaluate an expression and execute different blocks based on the value of that expression. <code class="language-js"> for</code> loops iterate over a block of code a specified number of times. <code class="language-js"> while</code> loops iterate as long as a specified condition is true.`,
    code: `
let age = 25;
if (age >= 18) {
  console.log('Adult');
} else {
  console.log('Minor');
}

for (let i = 0; i < 3; i++) {
  console.log(i);
}`
  },
  {
    heading: "Functions in JavaScript",
    id: "js-functions",
    language: "javaScript",
    paragraph: "Functions are blocks of code that perform a specific task. They can be declared using function declarations, function expressions, or arrow functions. Functions can take parameters and return values. Function declarations are hoisted, while function expressions are not. Arrow functions provide a more concise syntax and lexically bind the this value.",
    code: `
function add(a, b) {
  return a + b;
}

const subtract = function(a, b) {
  return a - b;
};

const multiply = (a, b) => a * b;`
  },
  {
    heading: "Objects in JavaScript",
    id: "js-objects",
    language: "javaScript",
    paragraph: "Objects are collections of key-value pairs. They are used to store and organize data. Properties can be accessed using dot notation or bracket notation. Objects can also have methods, which are functions associated with the object.",
    code: `
  const person = {
    name: 'John',
    age: 30,
    greet: function() {
      console.log('Hello');
    }
  };
  console.log(person.name); // John
  person.greet(); // Hello`
  },
  {
    heading: "Arrays in JavaScript",
    id: "js-arrays",
    language: "javaScript",
    paragraph: `Arrays are ordered lists of values. They can hold elements of different data types. Arrays have various methods to manipulate and access their elements, such as <code class="language-js"> push()</code>,<code class="language-js"> pop()</code>, <code class="language-js"> map()</code>, <code class="language-js"> filter()</code>, etc.`,
    code: `
  const numbers = [1, 2, 3, 4, 5];
  numbers.push(6);
  console.log(numbers); // [1, 2, 3, 4, 5, 6]
  const doubled = numbers.map(x => x * 2);
  console.log(doubled); // [2, 4, 6, 8, 10, 12]`
  },
  {
    heading: "Scope in JavaScript",
    id: "js-scope",
    language: "javaScript",
    paragraph: "Scope refers to the visibility of variables. JavaScript has global scope, function scope, and block scope. Variables declared with var are function-scoped, while let and const are block-scoped. Variables declared outside any function are in the global scope.",
    code: `
  let globalVar = 'I am global';
  function myFunction() {
    let localVar = 'I am local';
    console.log(globalVar); // I am global
    console.log(localVar); // I am local
  }
  myFunction();
  // console.log(localVar); // ReferenceError: localVar is not defined`
  },
  {
    heading: "Hoisting in JavaScript",
    id: "js-hoisting",
    language: "javaScript",
    paragraph: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. This applies to variables declared with var, let, const, and function declarations. However, only var and function declarations are initialized during hoisting; let and const are not.",
    code: `
  console.log(x); // undefined
  var x = 10;

  // console.log(y); // ReferenceError: Cannot access 'y' before initialization
  let y = 20;`
  },
  {
    heading: "Closures in JavaScript",
    id: "js-closures",
    language: "javaScript",
    paragraph: "A closure is a function that has access to its own scope, the outer function's scope, and the global scope. Closures allow functions to remember their lexical scope even when they are executed outside that scope.",
    code: `
  function outer() {
    let counter = 0;
    return function inner() {
      counter++;
      console.log(counter);
    };
  }
  const fn = outer();
  fn(); // 1
  fn(); // 2`
  },
  {
  heading: "Debounce Function",
  id: "debounce-function",
  language: "javaScript",
  paragraph: `Debounce ensures a function only runs after it has stopped being called for a specified time. It's useful for rate-limiting events like <code class="language-js">keypress</code> or <code class="language-js">scroll</code> handlers.`,
  code: `
const debounce = (fn, ms) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), ms);
  };
};
`
},
{
  heading: "Throttle Function",
  id: "throttle-function",
  language: "javaScript",
  paragraph: `Throttle ensures a function runs at most once per given time interval. It's useful for handling events like <code class="language-js">scroll</code> or <code class="language-js">resize</code> without calling the handler too often.`,
  code: `
const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
`
},
{
  heading: "Reverse a String",
  id: "reverse-a-string",
  language: "javaScript",
  paragraph: `Reverse a string by splitting it into an array of characters, using <code class="language-js">reverse()</code>, and joining back. This returns a new string that is the reverse of the input.`,
  code: `
const reverseString = str => str.split('').reverse().join('');
`
},
{
  heading: "Shuffle Array",
  id: "shuffle-array",
  language: "javaScript",
  paragraph: `Randomly shuffle the elements of an array using the Fisher-Yates algorithm. The example below creates a copy of the original array and then swaps elements randomly, returning a new shuffled array.`,
  code: `
const shuffle = arr => {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};
`
},
{
  heading: "Flatten Arrays",
  id: "flatten-arrays",
  language: "javaScript",
  paragraph: `Flatten nested arrays into a single array. The example below uses <code class="language-js">flat()</code> with <code class="language-js">Infinity</code> to flatten any level of nesting. For one level, you can use <code class="language-js">flat()</code> without arguments.`,
  code: `
const arr = [1, [2, [3, 4]], 5];
const flattened = arr.flat(Infinity);
`
},
{
  heading: "Check Palindrome",
  id: "check-palindrome",
  language: "javaScript",
  paragraph: `Check if a string reads the same forwards and backwards, ignoring case and non-alphanumeric characters. The example below cleans the string and then compares it to its reverse.`,
  code: `
const isPalindrome = str => {
  const s = str.toLowerCase().replace(/[\\W_]/g, '');
  return s === s.split('').reverse().join('');
};
`
},
{
  heading: "Remove Duplicates",
  id: "remove-duplicates",
  language: "javaScript",
  paragraph: `Remove duplicate values from an array by using a <code class="language-js">Set</code>, which only keeps unique values. The spread operator then converts the set back into an array of unique items.`,
  code: `
const arr = [1, 2, 2, 3, 4, 4];
const unique = [...new Set(arr)];
`
},
{
  heading: "Working with localStorage",
  id: "working-with-localstorage",
  language: "javaScript",
  paragraph: `Store and retrieve data in the browser using <code class="language-js">localStorage</code>. When saving objects or arrays, serialize them with <code class="language-js">JSON.stringify</code>. Parse back with <code class="language-js">JSON.parse</code> when retrieving.`,
  code: `
const user = { name: 'Alice', age: 25 };
localStorage.setItem('user', JSON.stringify(user));
const retrieved = JSON.parse(localStorage.getItem('user'));
`
},
{
  heading: "Dispatch Custom Events",
  id: "dispatch-custom-events",
  language: "javaScript",
  paragraph: `Create and dispatch a custom event to communicate within your application. The example below creates a <code class="language-js">CustomEvent</code> with detail data and dispatches it on the document.`,
  code: `
const event = new CustomEvent('userLoggedIn', { detail: { username: 'Alice' } });
document.dispatchEvent(event);
`
},
{
  heading: "Parse URL Query Parameters",
  id: "parse-url-query-parameters",
  language: "javaScript",
  paragraph: `Use the <code class="language-js">URL</code> and <code class="language-js">URLSearchParams</code> APIs to easily parse query parameters from a URL. The example below gets the <code class="language-js">name</code> parameter from a sample URL.`,
  code: `
const url = 'https://example.com?name=John&age=30';
const params = new URL(url).searchParams;
console.log(params.get('name')); // "John"
`
},
{
  heading: "Escape HTML",
  id: "escape-html",
  language: "javaScript",
  paragraph: `Escape special HTML characters to prevent XSS or HTML injection. The function below replaces characters like <code class="language-js">&amp;</code>, <code class="language-js">&lt;</code>, <code class="language-js">&gt;</code>, <code class="language-js">&quot;</code>, and <code class="language-js">&#39;</code> with their HTML entity equivalents.`,
  code: `
const escapeHTML = str =>
  str.replace(/[&<>"']/g, tag =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[tag])
  );
`
},
{
  heading: "Validate Email",
  id: "validate-email",
  language: "javaScript",
  paragraph: `Quickly check if a string looks like a valid email address using a regular expression. The example below tests if an email has the general format <code class="language-js">something@domain.tld</code>.`,
  code: `
const isValidEmail = email => /\S+@\S+.\S+/.test(email);
`
},
{
  heading: "Get Variable Type",
  id: "get-variable-type",
  language: "javaScript",
  paragraph: `Identify the type of a variable, including arrays and objects. The example below uses <code class="language-js">Object.prototype.toString</code> to get the internal [[Class]] of the value.`,
  code: `
const getType = value =>
  Object.prototype.toString.call(value).slice(8, -1);
`
},
{
  heading: "Sort Objects by Property",
  id: "sort-objects-by-property",
  language: "javaScript",
  paragraph: `Sort an array of objects by a specific property. The example below sorts an array of objects by their <code class="language-js">value</code> property in ascending order. Modify the comparator for strings or other criteria as needed.`,
  code: `
const items = [{ value: 10 }, { value: 5 }];
items.sort((a, b) => a.value - b.value);
`
},
{
  heading: "Random Array Element",
  id: "random-array-element",
  language: "javaScript",
  paragraph: `Select a random element from an array. This one-liner returns a randomly chosen element by generating a random index.`,
  code: `
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];
`
},
{
  heading: "Array Intersection",
  id: "array-intersection",
  language: "javaScript",
  paragraph: `Find common elements between two arrays. The example below returns a new array of values that exist in both <code class="language-js">a</code> and <code class="language-js">b</code>.`,
  code: `
const intersection = (a, b) => a.filter(value => b.includes(value));
`
},
{
  heading: "Array Difference",
  id: "array-difference",
  language: "javaScript",
  paragraph: `Get elements that are in one array but not in another. The example below returns values from <code class="language-js">a</code> that are not present in <code class="language-js">b</code>.`,
  code: `
const difference = (a, b) => a.filter(value => !b.includes(value));
`
},
{
  heading: "Chunk Array into Subarrays",
  id: "chunk-array-into-subarrays",
  language: "javaScript",
  paragraph: `Split an array into smaller arrays (chunks) of a given size. The example below loops through the array, slicing off chunks of the specified size.`,
  code: `
const chunk = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};
`
},
{
  heading: "Capitalize First Letter",
  id: "capitalize-first-letter",
  language: "javaScript",
  paragraph: `Uppercase the first character of a string and leave the rest unchanged. The example below works even if the string is empty.`,
  code: `
const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);
`
},
{
  heading: "Random Integer in Range",
  id: "random-integer-in-range",
  language: "javaScript",
  paragraph: `Generate a random integer between two values (inclusive). The example below uses <code class="language-js">Math.random()</code> scaled to the range <code class="language-js">[min, max]</code>.`,
  code: `
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
`
},
{
  heading: "Generate Unique ID",
  id: "generate-unique-id",
  language: "javaScript",
  paragraph: `Create a simple random string ID. The example below uses <code class="language-js">Math.random()</code> and <code class="language-js">toString(36)</code> to generate a short alphanumeric ID (not guaranteed unique for many calls).`,
  code: `
const uniqueId = () => Math.random().toString(36).slice(2);
`
},
{
  heading: "Copy to Clipboard",
  id: "copy-to-clipboard",
  language: "javaScript",
  paragraph: `Copy a string to the clipboard programmatically using the Clipboard API. The example below writes the given text to the clipboard. Note that this may require user interaction or permission in some browsers.`,
  code: `
const copyToClipboard = text => navigator.clipboard.writeText(text);
`
},
{
  heading: "Safe Property Access",
  id: "safe-property-access",
  language: "javaScript",
  paragraph: `Safely access nested object properties without errors if intermediate values are <code class="language-js">null</code> or <code class="language-js">undefined</code>. The example below uses a dot-separated path and optional chaining in reduce.`,
  code: `
const get = (obj, path) =>
  path.split('.').reduce((o, key) => o?.[key], obj);
`
},
{
  heading: "Random Hex Color",
  id: "random-hex-color",
  language: "javaScript",
  paragraph: `Generate a random hexadecimal color code. The example below creates a 6-digit hex string by converting a random number and padding with zeros if necessary.`,
  code: `
const randomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
`
},
{
  heading: "Check if Element Exists",
  id: "check-exist",
  language: "javaScript",
  paragraph: `Safely check if an element exists before acting on it to avoid errors in JavaScript.`,
  code: `
const el = document.querySelector(".maybe-there");
   if (el) {
   el.textContent = "It exists!";
}`
},
{
  heading: "Loop Through NodeList",
  id: "loop-nodelist",
  language: "javaScript",
  paragraph: `Use <code class="language-js">forEach</code> to loop through all selected elements with <code class="language-js">querySelectorAll</code>.`,
  code: `
document.querySelectorAll(".item").forEach(el => {
  el.style.border = "1px solid red";
});`
},
{
  heading: "Get Text From Multiple Elements",
  id: "get-texts",
  language: "javaScript",
  paragraph: `Collect and store the text content of all matching elements into an array.`,
  code: `
const items = document.querySelectorAll(".item");
const texts = Array.from(items, el => el.textContent);`
},
{
  heading: "Toggle Text on Click",
  id: "toggle-text",
  language: "javaScript",
  paragraph: `
Switch text content back and forth on each click using a ternary operator.`,
  code: `
const toggleBtn = document.querySelector("#toggle");
toggleBtn.addEventListener("click", () => {
  toggleBtn.textContent = toggleBtn.textContent === "Show" ? "Hide" : "Show";
});`
},
{
  heading: "Insert HTML at Position",
  id: "insert-html",
  language: "javaScript",
  paragraph: `Add new HTML content relative to an existing element using <code class="language-js">insertAdjacentHTML</code>.`,
  code: `const container = document.querySelector(".box");
container.insertAdjacentHTML("beforeend", "<p>New Paragraph</p>");`
},
{
  heading: "Scroll to Element Smoothly",
  id: "scroll-into",
  language: "javaScript",
  paragraph: `Scroll to a specific element using <code class="language-js">scrollIntoView</code> with smooth behavior.`,
  code: `document.querySelector("#target").scrollIntoView({
  behavior: "smooth"
});`
},
{
  heading: "Check if Element is in Viewport",
  id: "in-viewport",
  language: "javaScript",
  paragraph: `Detect if an element is visible in the current viewport using <code class="language-js">getBoundingClientRect</code>.`,
  code: `function isInView(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}`
},
{
  heading: "Content Editable Change Listener",
  id: "editable-change",
  language: "javaScript",
  paragraph: `Track changes on a <code class="language-js">contenteditable</code> element using the <code class="language-js">input</code> event.`,
  code: `const editable = document.querySelector("[contenteditable]");
editable.addEventListener("input", () => {
  console.log("Content changed:", editable.textContent);
});`
},
{
  heading: "Set Multiple Styles at Once",
  id: "set-multi-style",
  language: "javaScript",
  paragraph: `Apply several inline styles at once using <code class="language-js">Object.assign</code>.`,
  code: `
Object.assign(document.body.style, {
  backgroundColor: "#f0f0f0",
  fontSize: "18px",
  padding: "20px"
});`
},
{
  heading: "Creating a Function",
  id: "js-function-declare",
  language: "javaScript",
  paragraph: `Functions in JavaScript are reusable blocks of code designed to perform a task. 
  They are defined using the 'function' keyword or arrow syntax. Functions can take parameters, 
  and they may return a value using the 'return' statement.`,
  code: `
  // Function Declaration
  function greet(name) {
    return "Hello, " + name + "!";
  }

  // Function Expression
  const add = function(x, y) {
    return x + y;
  };

  // Arrow Function
  const square = n => n * n;
  `
},
{
  heading: "Get and Set Data Attributes",
  id: "data-attr",
  language: "javaScript",
  paragraph: `Access and modify custom <code class="language-js">data-*</code> attributes using the <code class="language-js">dataset</code> property.`,
  code: `
const card = document.querySelector(".card");
const userId = card.dataset.userId;
card.dataset.status = "active";
  `
},
{
  heading: "Check if Element Has a Class",
  id: "has-class",
  language: "javaScript",
  paragraph: `Use <code class="language-js">classList.contains()</code> to check if an element has a specific class.`,
  code: `
const box = document.querySelector(".box");
if (box.classList.contains("highlight")) {
  console.log("Box is highlighted");
}
  `
},
{
  heading: "Add Multiple Classes",
  id: "add-classes",
  language: "javaScript",
  paragraph: `Add multiple classes to an element using <code class="language-js">classList.add()</code>.`,
  code: `
const button = document.querySelector("button");
button.classList.add("btn", "btn-primary", "active");
  `
},
{
  heading: "Remove Multiple Classes",
  id: "remove-classes",
  language: "javaScript",
  paragraph: `Remove multiple classes from an element using <code class="language-js">classList.remove()</code>.`,
  code: `
const button = document.querySelector("button");
button.classList.remove("btn", "btn-primary", "active");
  `
},
{
  heading: "Toggle Multiple Classes",
  id: "toggle-classes",
  language: "javaScript",
  paragraph: `Toggle multiple classes on an element using <code class="language-js">classList.toggle()</code> in a loop.`,
  code: `
const button = document.querySelector("button");
["btn", "btn-primary", "active"].forEach(cls => button.classList.toggle(cls));
  `
},
{
  heading: "Check if Element Matches Selector",
  id: "matches-selector",
  language: "javaScript",
  paragraph: `Use <code class="language-js">matches()</code> to check if an element matches a specific CSS selector.`,
  code: `
const link = document.querySelector("a");
if (link.matches(".external-link")) {
  console.log("This is an external link");
}
  `
},
{
  heading: "Find Closest Ancestor Matching Selector",
  id: "closest-ancestor",
  language: "javaScript",
  paragraph: `Use <code class="language-js">closest()</code> to find the nearest ancestor that matches a selector.`,
  code: `
const item = document.querySelector(".item");
const list = item.closest("ul");
  `
},
{
  heading: "Insert HTML Adjacent to Element",
  id: "insert-adjacent-html",
  language: "javaScript",
  paragraph: `Use <code class="language-js">insertAdjacentHTML()</code> to insert HTML at a specific position relative to an element.`,
  code: `
const list = document.querySelector("ul");
list.insertAdjacentHTML("beforeend", "<li>New Item</li>");
  `
},
{
  heading: "Insert Text Adjacent to Element",
  id: "insert-adjacent-text",
  language: "javaScript",
  paragraph: `Use <code class="language-js">insertAdjacentText()</code> to insert text at a specific position relative to an element.`,
  code: `
const paragraph = document.querySelector("p");
paragraph.insertAdjacentText("afterbegin", "Note: ");
  `
},
{
  heading: "Insert Element Adjacent to Another",
  id: "insert-adjacent-element",
  language: "javaScript",
  paragraph: `Use <code class="language-js">insertAdjacentElement()</code> to insert an element at a specific position relative to another element.`,
  code: `
const reference = document.querySelector(".reference");
const newDiv = document.createElement("div");
newDiv.textContent = "Inserted Div";
reference.insertAdjacentElement("afterend", newDiv);
  `
},
{
  heading: "Replace Child Node",
  id: "replace-child",
  language: "javaScript",
  paragraph: `Use <code class="language-js">replaceChild()</code> to replace a child node with a new node.`,
  code: `
const parent = document.querySelector(".parent");
const oldChild = parent.querySelector(".old-child");
const newChild = document.createElement("div");
newChild.textContent = "New Child";
parent.replaceChild(newChild, oldChild);
  `
},
{
  heading: "Remove Child Node",
  id: "remove-child",
  language: "javaScript",
  paragraph: `Use <code class="language-js">removeChild()</code> to remove a child node from its parent.`,
  code: `
const parent = document.querySelector(".parent");
const child = parent.querySelector(".child");
parent.removeChild(child);
  `
},
{
  heading: "Check if Element Has Attribute",
  id: "has-attribute",
  language: "javaScript",
  paragraph: `Use <code class="language-js">hasAttribute()</code> to check if an element has a specific attribute.`,
  code: `
const input = document.querySelector("input");
if (input.hasAttribute("required")) {
  console.log("Input is required");
}
  `
},
{
  heading: "Get All Attributes of an Element",
  id: "get-attributes",
  language: "javaScript",
  paragraph: `Use <code class="language-js">attributes</code> property to get all attributes of an element.`,
  code: `
const element = document.querySelector(".element");
for (let attr of element.attributes) {
  console.log(\`\${attr.name} = \${attr.value}\`);
}
  `
},
{
  heading: "Scroll to Element",
  id: "scroll-to-element",
  language: "javaScript",
  paragraph: `Use <code class="language-js">scrollIntoView()</code> to scroll to an element.`,
  code: `
const section = document.querySelector("#section");
section.scrollIntoView({ behavior: "smooth" });
  `
},
{
  heading: "Focus on Input Field",
  id: "focus-input",
  language: "javaScript",
  paragraph: `Use <code class="language-js">focus()</code> to set focus on an input field.`,
  code: `
const input = document.querySelector("input");
input.focus();
  `
},
{
  heading: "Blur Input Field",
  id: "blur-input",
  language: "javaScript",
  paragraph: `Use <code class="language-js">blur()</code> to remove focus from an input field.`,
  code: `
const input = document.querySelector("input");
input.blur();
  `
},
{
  heading: "Disable and Enable Button",
  id: "toggle-button",
  language: "javaScript",
  paragraph: `Use <code class="language-js">disabled</code> property to disable or enable a button.`,
  code: `
const button = document.querySelector("button");
button.disabled = true; // Disable
button.disabled = false; // Enable
  `
},
{
  heading: "Set Tab Index",
  id: "set-tabindex",
  language: "javaScript",
  paragraph: `Use <code class="language-js">tabIndex</code> property to set the tab order of elements.`,
  code: `
const div = document.querySelector("div");
div.tabIndex = 0;
  `
},
{
  heading: "Create Document Fragment",
  id: "document-fragment",
  language: "javaScript",
  paragraph: `Use <code class="language-js">DocumentFragment</code> to create a lightweight container for DOM nodes.`,
  code: `
const fragment = document.createDocumentFragment();
["Item 1", "Item 2", "Item 3"].forEach(text => {
  const li = document.createElement("li");
  li.textContent = text;
  fragment.appendChild(li);
});
document.querySelector("ul").appendChild(fragment);
  `
}
]
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
         <pre><code class="language-js">
   ${contents.code}</code></pre>
         </div>
      </section>
   `
}).join("");
if (main) {
  main.innerHTML = mainContainer;
};