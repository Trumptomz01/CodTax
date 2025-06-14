export const pythonCheat = [
  {
    language: "python",
    heading: "Variables and Data Types",
    id: "variables-data-types",
    paragraph: `Variables store values of different types. Python is dynamically typed, so you don’t declare types explicitly. Common types include integers, floats, strings, and booleans.`,
    code: `
x = 10          # integer
y = 3.14        # float
name = "Alice"  # string
is_active = True  # boolean

print(x, y, name, is_active)`
  },
  {
    language: "python",
    heading: "Numbers and Arithmetic",
    id: "numbers-arithmetic",
    paragraph: `Python supports standard arithmetic operators like <code class="language-js">+</code>, <code class="language-js">-</code>, <code class="language-js">*</code>, <code class="language-js">/</code>, <code class="language-js">//</code> (integer division), <code class="language-js">%</code> (remainder), and <code class="language-js">**</code> (power). It handles integer and float operations automatically.`,
    code: `
a = 7
b = 3

print(a + b)   # 10
print(a - b)   # 4
print(a * b)   # 21
print(a / b)   # 2.3333333333333335
print(a // b)  // 2
print(a % b)   # 1
print(a ** b)  # 343`
  },
  {
    language: "python",
    heading: "Strings",
    id: "strings",
    paragraph: `Strings are sequences of characters. Use quotes to define them. They support indexing, slicing, and many methods like <code class="language-js">.upper()</code>, <code class="language-js">.lower()</code>, <code class="language-js">.replace()</code>, <code class="language-js">.split()</code>, and <code class="language-js">.join()</code>.`,
    code: `
text = "Hello, World!"

print(text.upper())                  # "HELLO, WORLD!"
print(text.replace("World", "Python"))  # "Hello, Python"
print(len(text))                     # 13
print(text[7:12])                    # "World"`
  },
  {
    language: "python",
    heading: "String Formatting",
    id: "string-formatting",
    paragraph: `Insert variables into strings using <code class="language-js">f-strings</code> or the <code class="language-js">format()</code> method. This helps build dynamic text.`,
    code: `
name = "Alice"
age = 30

print(f"{name} is {age} years old")               # Alice is 30 years old
print("{} is {} years old".format(name, age))     # Alice is 30 years old`
  },
  {
    language: "python",
    heading: "Lists",
    id: "create-list",
    paragraph: `Lists are ordered, mutable collections defined with square brackets. Use <code class="language-js">.append()</code> to add items and access elements by index.`,
    code: `
numbers = [1, 2, 3]
numbers.append(4)
print(numbers)     # [1, 2, 3, 4]
print(numbers[1])  # 2
numbers[0] = 10
print(numbers)     # [10, 2, 3, 4]`
  },
  {
    language: "python",
    heading: "Tuples",
    id: "tuples",
    paragraph: `Tuples are similar to lists but immutable (cannot change). They use parentheses. You can index and unpack tuples.`,
    code: `
coords = (10, 20)
print(coords[0])   # 10

# coords[0] = 5   # Error: can't change tuple

x, y = coords
print(x, y)        # 10 20`
  },
  {
    language: "python",
    heading: "Dictionaries",
    id: "dictionaries",
    paragraph: `Dictionaries store key:value pairs. Keys are unique. Use curly braces. You can add or access values by keys, and loop through items.`,
    code: `
student = {"name": "Alice", "age": 25}
student["grade"] = "A"    # add new key

print(student["name"])    # Alice
print(student.keys())       # dict_keys(['name', 'age', 'grade'])
print(student.values())     # dict_values(['Alice', 25, 'A'])`
  },
  {
    language: "python",
    heading: "Sets",
    id: "sets",
    paragraph: `Sets are unordered collections of unique items. Use curly braces or <code class="language-js">set()</code>. They support <code class="language-js">add()</code> and membership checks.`,
    code: `
s = {1, 2, 3, 3}
print(s)        # {1, 2, 3}
s.add(4)
print(s)        # {1, 2, 3, 4}
print(2 in s)   # True`
  },
  {
    language: "python",
    heading: "If Statements",
    id: "if-statements",
    paragraph: `Use <code class="language-js">if</code>, <code class="language-js">elif</code>, and <code class="language-js">else</code> to control flow. Conditions don’t need parentheses.`,
    code: `
x = 10
if x > 0:
    print("Positive")
elif x == 0:
    print("Zero")
else:
    print("Negative")`
  },
  {
    language: "python",
    heading: "For Loops",
    id: "for-loops",
    paragraph: `For loops iterate over items of a sequence like a list or range. Use <code class="language-js">for item in sequence</code>.`,
    code: `
for i in range(3):
    print(i)

fruits = ["apple", "banana"]
for fruit in fruits:
    print(fruit)`
  },
  {
    language: "python",
    heading: "While Loops",
    id: "while-loops",
    paragraph: `While loops repeat as long as a condition is True. Be careful to avoid infinite loops.`,
    code: `
count = 0
while count < 3:
    print(count)
    count += 1`
  },
  {
    language: "python",
    heading: "Check for Prime Number",
    id: "check-prime",
    paragraph: `Check if a number is prime by testing divisibility from 2 up to its square root.`,
    code: `
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return False
    return True

print(is_prime(7))  # True` 
  },
  {
    language: "python",
    heading: "Swap Two Variables",
    id: "swap-variables",
    paragraph: `Python allows swapping variables in one line without a temp variable.`,
    code: `
a, b = 5, 10
a, b = b, a
print(a, b)  # 10 5`
  },
  {
    language: "python",
    heading: "Find Factorial",
    id: "factorial",
    paragraph: `You can use recursion to calculate factorial.`,
    code: `
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n-1)

print(factorial(5))  # 120`
  },
  {
    language: "python",
    heading: "List Comprehension",
    id: "list-comprehension",
    paragraph: `Python offers concise syntax to create lists using a single line.`,
    code: `
squares = [x**2 for x in range(6)]
print(squares)  # [0, 1, 4, 9, 16, 25]`
  },
  {
    language: "python",
    heading: "Check Palindrome",
    id: "check-palindrome",
    paragraph: `Check if a string is the same forwards and backwards.`,
    code: `
def is_palindrome(s):
    return s == s[::-1]

print(is_palindrome("madam"))  # True`
  },
  {
    language: "python",
    heading: "Sum of Digits",
    id: "sum-of-digits",
    paragraph: `Find the sum of all digits in a number using a while loop and modulo operator.`,
    code: `
def sum_of_digits(n):
    total = 0
    while n > 0:
        total += n % 10
        n //= 10
    return total

print(sum_of_digits(1234))  # 10`
  },
  {
    language: "python",
    heading: "Find GCD",
    id: "find-gcd",
    paragraph: `Use the Euclidean algorithm to find the greatest common divisor (GCD) of two numbers.`,
    code: `
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

print(gcd(48, 18))  # 6`
  },
  {
    language: "python",
    heading: "Decorator Basics",
    id: "decorator-basics",
    paragraph: `Use decorators to wrap functions and modify their behavior without changing their code.`,
    code: `
def debug(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with {args}, {kwargs}")
        return func(*args, **kwargs)
    return wrapper

@debug
def say_hi(name):
    print(f"Hi {name}")

say_hi("Alice")`  
  },
  {
    language: "python",
    heading: "Context Managers",
    id: "context-managers",
    paragraph: `Create context managers with the <code class="language-js">with</code> statement by defining __enter__ and __exit__ methods.`,
    code: `
class MyResource:
    def __enter__(self):
        print("Acquire resource")
        return self

    def __exit__(self, exc_type, exc, tb):
        print("Release resource")

with MyResource() as r:
    print("Using resource")`  
  },
  {
    language: "python",
    heading: "Map and Filter",
    id: "map-filter",
    paragraph: `Use <code class="language-js">map()</code> to apply a function to each item and <code class="language-js">filter()</code> to select items.`,
    code: `
numbers = [1, 2, 3, 4]
squared = list(map(lambda x: x**2, numbers))
even = list(filter(lambda x: x % 2 == 0, numbers))
print(squared, even)`  
  },
  {
    language: "python",
    heading: "Reduce",
    id: "reduce",
    paragraph: `Use functools.reduce to aggregate values.`,
    code: `
from functools import reduce
sum_all = reduce(lambda a, b: a + b, [1, 2, 3, 4])
print(sum_all)  # 10`  
  },
  {
    language: "python",
    heading: "Enumerate",
    id: "enumerate",
    paragraph: `Use <code class="language-js">enumerate()</code> to loop with index and value.`,
    code: `
for idx, val in enumerate(['a', 'b', 'c']):
    print(idx, val)`  
  },
  {
    language: "python",
    heading: "Zip",
    id: "zip",
    paragraph: `Use <code class="language-js">zip()</code> to iterate multiple sequences in parallel.`,
    code: `
for x, y in zip([1, 2], ['a', 'b']):
    print(x, y)`  
  },
  {
    language: "python",
    heading: "Defaultdict",
    id: "defaultdict",
    paragraph: `Use collections.defaultdict to provide default values for missing keys.`,
    code: `
from collections import defaultdict
d = defaultdict(int)
d['a'] += 1
print(d['a'], d['b'])  # 1 0`  
  },
  {
    language: "python",
    heading: "Counter",
    id: "counter",
    paragraph: `Use collections.Counter for counting hashable items quickly.`,
    code: `
from collections import Counter
c = Counter(['a', 'b', 'a', 'c', 'b'])
print(c)  # Counter({'a': 2, 'b': 2, 'c': 1})`  
  },
  {
    language: "python",
    heading: "Deque",
    id: "deque",
    paragraph: `Use collections.deque for efficient FIFO/LIFO operations.`,
    code: `
from collections import deque
dq = deque([1, 2, 3])
dq.appendleft(0)
print(dq)`  
  },
  {
    language: "python",
    heading: "Namedtuple",
    id: "namedtuple",
    paragraph: `Use namedtuple from collections for lightweight object-like tuples.`,
    code: `
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(1, 2)
print(p.x, p.y)`  
  },
  {
    language: "python",
    heading: "Pathlib",
    id: "pathlib",
    paragraph: `Use pathlib for object-oriented filesystem paths.`,
    code: `
from pathlib import Path
p = Path('.')
print(list(p.iterdir()))`  
  },
  {
    language: "python",
    heading: "JSON Handling",
    id: "json-handling",
    paragraph: `Use json module to parse and dump JSON data.`,
    code: `
import json
data = {'a': 1}
js = json.dumps(data)
print(json.loads(js))`  
  },
  {
    language: "python",
    heading: "HTTP Requests",
    id: "http-requests",
    paragraph: `Use requests library for HTTP operations (install via pip).`,
    code: `
import requests
resp = requests.get('https://api.github.com')
print(resp.status_code)`  
  },
  {
    language: "python",
    heading: "Regex",
    id: "regex",
    paragraph: `Use re module for regular expressions.`,
    code: `
import re
match = re.search(r"\d+", "abc123")
print(match.group())  # 123`  
  },
  {
    language: "python",
    heading: "Logging",
    id: "logging",
    paragraph: `Use logging module for configurable logging.`,
    code: `
import logging
logging.basicConfig(level=logging.INFO)
logging.info("Info message")`  
  },
  {
    language: "python",
    heading: "Argparse",
    id: "argparse",
    paragraph: `Use argparse for command-line argument parsing.`,
    code: `
import argparse
parser = argparse.ArgumentParser()
parser.add_argument('--name')
args = parser.parse_args()
print(args.name)`  
  },
  {
    language: "python",
    heading: "Decorators with Arguments",
    id: "decorator-args",
    paragraph: `Create decorators that accept arguments by adding another layer of function.`,
    code: `
def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(n): func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def hello(): print("Hello")

hello()`  
  },
  {
    language: "python",
    heading: "Dataclasses",
    id: "dataclasses",
    paragraph: `Use @dataclass for boilerplate-free classes.`,
    code: `
from dataclasses import dataclass

@dataclass
class User:
    name: str
    age: int

u = User('Alice', 30)
print(u)`  
  },
  {
    language: "python",
    heading: "Type Hints",
    id: "type-hints",
    paragraph: `Use typing module for function annotations and type hints.`,
    code: `
from typing import List

def greet_all(names: List[str]) -> None:
   for name in names:
        print(f"Hello {name}")

    # print demonstration omitted
  }`
   }
];


const main = document.querySelector("#page-content");
let mainContainer = "";
pythonCheat.map((cheats) => {
   mainContainer += `
      <section class="section" id="${cheats.id}">
         <div>
            <h2>${cheats.heading}</h2>
            <p>${cheats.paragraph}</p>
         </div>
         <br>
         <div class="code-div">
         <button id="button" title="Copy" class="copy-btn"><i class="fa-regular fa-copy"></i>copy code</button>
         <pre><code class="language-python">
   ${cheats.code}</code></pre>
         </div>
      </section>
   `
}).join("");
if (main) {
   main.innerHTML = mainContainer;
}