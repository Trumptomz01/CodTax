export const javaCheatSheet= [
  { 
    heading: "Hello World", 
    id: "hello-world", 
    paragraph: `Print a simple greeting message to the console to demonstrate the basic syntax of Java programs.`, 
    code: `
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}` 
  },

  { 
    heading: "Variables and Types", 
    id: "variables-types", 
    paragraph: `Declare and initialize variables using primitive data types like int and double, and reference types such as String, which holds sequences of characters.`, 
    code: `
int x = 10;
double pi = 3.14;
String s = "Java";` 
  },

  { 
    heading: "If-Else Statement", 
    id: "if-else", 
    paragraph: `Use if-else statements to perform conditional logic where the program decides between two paths based on whether a boolean expression evaluates to true or false.`, 
    code: `
if (x > 0) {
    System.out.println("Positive");
} else {
    System.out.println("Non-positive");
}` 
  },

  { 
    heading: "Switch Case", 
    id: "switch-case", 
    paragraph: `Select one code block to execute out of many possible options based on the value of a variable using the switch statement, improving readability over multiple if-else checks.`, 
    code: `
switch(day) {
    case 1: System.out.println("Mon"); break;
    default: System.out.println("Other");
}` 
  },

  { 
    heading: "For Loop", 
    id: "for-loop", 
    paragraph: `Repeat a block of code a specific number of times using a for loop with initialization, condition, and increment/decrement steps.`, 
    code: `
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}` 
  },

  { 
    heading: "Enhanced For Loop", 
    id: "enhanced-for", 
    paragraph: `Iterate over elements in arrays or collections easily without manual indexing, using the enhanced for-each loop syntax.`, 
    code: `
for (String name : names) {
    System.out.println(name);
}` 
  },

  { 
    heading: "While Loop", 
    id: "while-loop", 
    paragraph: `Execute a block of code repeatedly as long as a specified condition remains true, useful when the number of iterations is not known beforehand.`, 
    code: `
while (count < 5) {
    count++;
}` 
  },

  { 
    heading: "Do-While Loop", 
    id: "do-while", 
    paragraph: `Similar to the while loop, but guarantees the loop body executes at least once before checking the condition at the end of the iteration.`, 
    code: `
do {
    count++;
} while (count < 5);` 
  },

  { 
    heading: "Arrays", 
    id: "arrays", 
    paragraph: `Create fixed-size collections of elements of the same type, accessed by index starting from zero. Arrays hold primitives or objects.`, 
    code: `
int[] arr = {1,2,3};
System.out.println(arr[0]);` 
  },

  { 
    heading: "ArrayList", 
    id: "arraylist", 
    paragraph: `Use ArrayList for dynamic arrays that can grow or shrink during runtime, offering convenient methods to add, remove, or search elements.`, 
    code: `
List<String> list = new ArrayList<>();
list.add("A");` 
  },

  { 
    heading: "HashMap", 
    id: "hashmap", 
    paragraph: `Store key-value pairs efficiently with HashMap, enabling fast retrieval, insertion, and deletion based on unique keys.`, 
    code: `
Map<String,Integer> map = new HashMap<>();
map.put("a",1);` 
  },

  { 
    heading: "Method Definition", 
    id: "method-definition", 
    paragraph: `Define reusable blocks of code called methods, which may accept parameters, perform operations, and return results to avoid repetition.`, 
    code: `
public int add(int a,int b){ return a+b; }` 
  },
  
  { 
    heading: "Static Method", 
    id: "static-method", 
    paragraph: `Declare static methods that belong to the class itself rather than instances, callable without creating an object of the class.`, 
    code: `
public static void greet(){ System.out.println("Hi"); }` 
  },

  { 
    heading: "Constructors", 
    id: "constructors", 
    paragraph: `Initialize new objects with constructors, special methods that have the same name as the class and set initial values for fields.`, 
    code: `
public class Car{ public Car(String c){ this.color=c;} }` 
  },

  { 
    heading: "Inheritance", 
    id: "inheritance", 
    paragraph: `Create new classes that inherit fields and methods from existing ones using extends, promoting code reuse and polymorphism.`, 
    code: `
class Dog extends Animal {}` 
  },

  { 
    heading: "Interfaces", 
    id: "interfaces", 
    paragraph: `Define abstract contracts that classes can implement, specifying method signatures without providing implementations to enforce certain behaviors.`, 
    code: `
interface Speaker{ void speak(); }` 
  },

  { 
    heading: "Anonymous Class", 
    id: "anonymous-class", 
    paragraph: `Create a one-time class implementation inline without naming it, typically for quick implementation of interfaces or abstract classes.`, 
    code: `
Speaker s = new Speaker(){ public void speak(){ } };` 
  },

  { 
    heading: "Lambda Expressions", 
    id: "lambda", 
    paragraph: `Provide concise, functional-style implementations of interfaces with a single abstract method, improving code readability and brevity.`, 
    code: `
Runnable r = () -> System.out.println("Run");` 
  },
  {
  "heading": "How to Create a Class in Java",
  "id": "create-class",
  "paragraph": "In Java, a class is a blueprint for creating objects. It defines the data (fields) and behavior (methods) that the objects created from the class can have. To create a class, you use the `class` keyword followed by the class name and a pair of curly braces enclosing its body. Classes can include fields, methods, constructors, and inner classes.",
  "code": "public class Car {\n    // Fields (attributes)\n    private String model;\n    private int year;\n\n    // Constructor\n    public Car(String model, int year) {\n        this.model = model;\n        this.year = year;\n    }\n\n    // Method\n    public void displayInfo() {\n        System.out.println(\"Model: \" + model + \", Year: \" + year);\n    }\n}"
  },
  { 
    heading: "Streams API", 
    id: "streams", 
    paragraph: `Process collections in a functional manner using streams, enabling operations like filtering, mapping, and collecting results efficiently.`, 
    code: `
list.stream().filter(x->x.startsWith("A")).collect(Collectors.toList());` 
  },

  { 
    heading: "Optional", 
    id: "optional", 
    paragraph: `Use Optional to represent potentially absent values explicitly, avoiding null pointer exceptions by providing methods to safely handle missing data.`, 
    code: `
Optional<String> opt = Optional.ofNullable(name);` 
  },

  { 
    heading: "Generics", 
    id: "generics", 
    paragraph: `Write classes and methods with type parameters to enable type safety and reduce casting by allowing code to operate on various data types.`, 
    code: `
class Box<T>{ T value; }` 
  },

  { 
    heading: "Exception Handling", 
    id: "exception-handling", 
    paragraph: `Handle runtime errors using try-catch blocks to gracefully recover or log issues without crashing the program.`, 
    code: `
try{ } catch(Exception e){ e.printStackTrace(); }` 
  },

  { 
    heading: "Custom Exception", 
    id: "custom-exception", 
    paragraph: `Define your own exception classes by extending Exception, enabling specific error handling tailored to your application logic.`, 
    code: `
class MyEx extends Exception{} ` 
  },

  { 
    heading: "File I/O", 
    id: "file-io", 
    paragraph: `Read from and write to files using the java.nio.file package, which provides efficient and modern APIs for file operations.`, 
    code: `
Files.readAllLines(Paths.get("file.txt"));` 
  },

  { 
    heading: "Serialization", 
    id: "serialization", 
    paragraph: `Convert objects into a byte stream to save their state or send over networks by implementing Serializable interface, allowing later reconstruction.`, 
    code: `
public class User implements Serializable{}` 
  },

  { 
    heading: "Thread Creation", 
    id: "thread-creation", 
    paragraph: `Create and start new threads for concurrent execution by instantiating Thread objects and calling start(), enabling multitasking.`, 
    code: `
new Thread(() -> {}).start();` 
  },

  { 
    heading: "Runnable", 
    id: "runnable", 
    paragraph: `Implement the Runnable interface to define tasks that can be executed by threads, often used with lambda expressions for brevity.`, 
    code: `
Runnable task = () -> {};` 
  },

  { 
    heading: "Synchronization", 
    id: "synchronization", 
    paragraph: `Prevent concurrent access issues by locking critical sections with the synchronized keyword, ensuring thread safety when modifying shared data.`, 
    code: `
public synchronized void inc(){ }` 
  },

  { 
    heading: "ExecutorService", 
    id: "executor-service", 
    paragraph: `Manage a pool of threads to efficiently handle asynchronous tasks, controlling thread lifecycle and resource allocation.`, 
    code: `
ExecutorService ex = Executors.newFixedThreadPool(4);` 
  },

  { 
    heading: "Future", 
    id: "future", 
    paragraph: `Represent the result of an asynchronous computation, allowing retrieval once the task completes or checking task status.`, 
    code: `
Future<Integer> f = ex.submit(() -> 1);` 
  },

  { 
    heading: "Streams Collectors", 
    id: "collectors", 
    paragraph: `Aggregate and transform stream elements into collections, strings, or other data structures using built-in collectors.`, 
    code: `
list.stream().collect(Collectors.joining(","));` 
  },

  { 
    heading: "Date/Time API", 
    id: "date-time-api", 
    paragraph: `Use the modern java.time package for representing, manipulating, and formatting dates and times in a thread-safe and clear manner.`, 
    code: `
LocalDate.now();` 
  },

  { 
    heading: "Regex", 
    id: "regex-java", 
    paragraph: `Use Pattern and Matcher classes to define and search text with regular expressions, enabling complex pattern matching and extraction.`, 
    code: `
Pattern p = Pattern.compile("\\d+");` 
  },

  { 
    heading: "Reflection", 
    id: "reflection", 
    paragraph: `Inspect and manipulate classes, methods, and fields at runtime dynamically, allowing for advanced behaviors like dependency injection and frameworks.`, 
    code: `
Class<?> c = Class.forName("MyClass");` 
  },

  { 
    heading: "Annotations", 
    id: "annotations", 
    paragraph: `Add metadata to code elements like classes and methods with annotations, which can be processed by compilers or runtime tools for various purposes.`, 
    code: `
@interface MyAnno{} ` 
  },

  { 
    heading: "JDBC Connection", 
    id: "jdbc-connection", 
    paragraph: `Establish connections to relational databases using JDBC API, enabling execution of SQL queries and data retrieval within Java applications.`, 
    code: `
Connection c = DriverManager.getConnection(url);` 
  },

  { 
    heading: "PreparedStatement", 
    id: "prepared-statement", 
    paragraph: `Use PreparedStatement to safely execute parameterized SQL queries, preventing SQL injection and improving performance with query precompilation.`, 
    code: `
PreparedStatement ps = c.prepareStatement(sql);` 
  },

  { 
    heading: "Logging with SLF4J", 
    id: "slf4j", 
    paragraph: `Use the SLF4J facade to write log messages that can be routed to different logging frameworks, enabling configurable and consistent logging.`, 
    code: `
Logger logger = LoggerFactory.getLogger(Class.class);` 
  },

  { 
    heading: "Maven Dependency", 
    id: "maven-dependency", 
    paragraph: `Declare external libraries or dependencies in a Maven project's pom.xml file to manage build automation and library versions easily.`, 
    code: `
<dependency>...</dependency>` 
  },

  { 
    heading: "Gradle Dependency", 
    id: "gradle-dependency", 
    paragraph: `Add dependencies to a Gradle build script using implementation or other configurations to automate project builds and dependency management.`, 
    code: `
implementation 'group:artifact:version'` 
  },

  { 
    heading: "JUnit Test", 
    id: "junit-test", 
    paragraph: `Write unit tests with JUnit framework to verify that your code behaves as expected and to support test-driven development.`, 
    code: `
@Test public void test(){}` 
  },

  { 
    heading: "Mockito Mocking", 
    id: "mockito-mocking", 
    paragraph: `Create mock objects with Mockito to isolate unit tests by simulating behavior of complex dependencies or external systems.`, 
    code: `
Mockito.mock(MyClass.class);` 
  },

  { 
    heading: "JSON Parsing", 
    id: "json-parsing-java", 
    paragraph: `Parse and serialize JSON data easily with the Jackson library’s ObjectMapper for converting between JSON and Java objects.`, 
    code: `
new ObjectMapper().readValue(json, MyClass.class);` 
  },

  { 
    heading: "HTTP Client", 
    id: "http-client", 
    paragraph: `Send HTTP requests and handle responses using the modern java.net.http.HttpClient introduced in Java 11 for easier network communication.`, 
    code: `
HttpClient.newHttpClient().send(req, BodyHandlers.ofString());` 
  },

  { 
    heading: "Custom Thread Pool", 
    id: "custom-thread-pool", 
    paragraph: `Create and configure your own thread pools using ThreadPoolExecutor for fine-grained control over thread lifecycle and task execution.`, 
    code: `
new ThreadPoolExecutor(...);` 
  },

  { 
    heading: "ByteBuffer", 
    id: "bytebuffer", 
    paragraph: `Use ByteBuffer from java.nio for efficient, low-level manipulation of byte arrays, often in IO operations and network programming.`, 
    code: `
ByteBuffer.allocate(1024);` 
  },

  { 
    heading: "CompletableFuture", 
    id: "completable-future", 
    paragraph: `Build asynchronous, non-blocking workflows that can be composed, chained, and combined using CompletableFuture API introduced in Java 8.`, 
    code: `
CompletableFuture.supplyAsync(() -> 1);` 
  },

  { 
    heading: "Streams Parallel", 
    id: "streams-parallel", 
    paragraph: `Process stream pipelines concurrently in parallel to utilize multiple CPU cores and improve performance on large datasets.`, 
    code: `
list.parallelStream();` 
  },

  { 
    heading: "Collectors toMap", 
    id: "collectors-tomap", 
    paragraph: `Convert a stream of elements into a Map by specifying key and value mapping functions using Collectors.toMap.`, 
    code: `
list.stream().collect(Collectors.toMap(k->k,id->id));` 
  },

  { 
    heading: "Files Walk", 
    id: "files-walk", 
    paragraph: `Traverse a directory tree recursively using Files.walk to access all files and directories under a given path.`, 
    code: `
Files.walk(Paths.get("."));` 
  },

  { 
    heading: "System Properties", 
    id: "system-properties", 
    paragraph: `Access system-level properties such as OS name, Java version, or user directory via System.getProperty for configuration or diagnostics.`, 
    code: `
System.getProperty("os.name");` 
  },

  { 
    heading: "Environment Variables", 
    id: "env-variables", 
    paragraph: `Read environment variables from the operating system to configure behavior based on deployment environment using System.getenv.`, 
    code: `
System.getenv("HOME");` 
  },

  { 
    heading: "Sealed Classes", 
    id: "sealed-classes", 
    paragraph: `Restrict which classes or interfaces can extend or implement a given class by declaring it sealed, improving control over inheritance hierarchies.`, 
    code: `
public sealed class Shape permits Circle, Rectangle {}` 
  },

  { 
    heading: "Record Class", 
    id: "record-class", 
    paragraph: `Define compact, immutable data carrier classes called records that automatically provide equals, hashCode, and toString implementations.`, 
    code: `
record Point(int x, int y) {}` 
  },

  { 
    heading: "Pattern Matching", 
    id: "pattern-matching", 
    paragraph: `Simplify type checking and casting using pattern matching for instanceof, allowing concise and safe extraction of variables.`, 
    code: `
if (obj instanceof String s) { ... }` 
  },

  { 
    heading: "Text Blocks", 
    id: "text-blocks", 
    paragraph: `Write multi-line string literals more readably using text blocks introduced in Java 13 with triple quotes syntax.`, 
    code: `
String json = """
{
  "name": "Java"
}
""";` 
  },

  {
    "heading": "Java Memory Management & Garbage Collection",
    "id": "memory-gc",
    "paragraph": "Java automatically manages memory allocation and deallocation through its Garbage Collector (GC). This means developers don't need to manually free memory; the JVM identifies and removes objects that are no longer in use, optimizing application memory and preventing memory leaks. Understanding how GC works helps improve performance and troubleshoot memory issues.",
    "code": "// No direct code example; GC runs automatically."
  },
  {
    "heading": "Java Modules (JPMS)",
    "id": "java-modules",
    "paragraph": "Introduced in Java 9, the Java Platform Module System (JPMS) allows developers to modularize applications. Modules explicitly declare dependencies and exports, improving encapsulation and reducing application complexity. It enhances maintainability and security by controlling which parts of the code are accessible externally.",
    "code": "module com.example.myapp {\n    requires java.base;\n    exports com.example.myapp.utils;\n}"
  },
  {
    "heading": "Java Native Interface (JNI)",
    "id": "jni",
    "paragraph": "JNI allows Java code to interact with native applications or libraries written in languages like C or C++. This is useful for performance-critical operations or leveraging existing native code. JNI bridges Java and native code but requires careful handling to avoid memory and security issues.",
    "code": "// Java method declaration for native method\npublic native void nativeMethod();"
  },
  {
    "heading": "JavaFX",
    "id": "javafx",
    "paragraph": "JavaFX is a powerful framework for building modern, rich client desktop applications. It supports advanced GUI controls, animations, media playback, and CSS styling, enabling developers to create visually appealing and interactive user interfaces beyond what standard Swing offers.",
    "code": "import javafx.application.Application;\nimport javafx.scene.Scene;\nimport javafx.scene.control.Button;\nimport javafx.stage.Stage;\n\npublic class MyApp extends Application {\n    public void start(Stage stage) {\n        Button btn = new Button(\"Click Me\");\n        Scene scene = new Scene(btn, 300, 200);\n        stage.setScene(scene);\n        stage.show();\n    }\n}"
  },
  {
    "heading": "JDBC Transactions",
    "id": "jdbc-transactions",
    "paragraph": "JDBC transactions let you group multiple database operations into a single unit of work. This ensures atomicity, meaning all operations succeed or fail together, preserving data integrity. Transactions can be committed or rolled back to maintain consistency especially when dealing with multiple related updates.",
    "code": "Connection conn = DriverManager.getConnection(url);\ntry {\n    conn.setAutoCommit(false);\n    // perform DB operations\n    conn.commit();\n} catch(SQLException e) {\n    conn.rollback();\n}"
  },
  {
    "heading": "Security Manager & Access Control",
    "id": "security-manager",
    "paragraph": "Java's Security Manager enforces runtime access controls for applications, especially useful for sandboxing untrusted code. It restricts file, network, or system access based on configured policies, helping prevent malicious or accidental harmful actions within the JVM environment.",
    "code": "// Enable Security Manager\nSystem.setSecurityManager(new SecurityManager());"
  },
  {
    "heading": "Internationalization and Localization",
    "id": "i18n-l10n",
    "paragraph": "Java provides APIs to support multiple languages and regions, enabling applications to adapt to different locales. Classes like Locale and ResourceBundle help load locale-specific data such as messages, dates, and currency formats, improving user experience globally.",
    "code": "Locale locale = new Locale(\"fr\", \"FR\");\nResourceBundle bundle = ResourceBundle.getBundle(\"Messages\", locale);\nSystem.out.println(bundle.getString(\"greeting\"));"
  },
  {
    "heading": "JIT Compiler and JVM Tuning",
    "id": "jit-jvm-tuning",
    "paragraph": "Java uses a Just-In-Time (JIT) compiler that compiles bytecode to native machine code at runtime, improving performance over time. JVM tuning involves adjusting memory, GC behavior, and other parameters to optimize application throughput and latency based on workload needs.",
    "code": "// JVM options example for tuning\n// java -Xms512m -Xmx2048m -XX:+UseG1GC MyApp"
  },
  {
    "heading": "Serialization Filtering & Security",
    "id": "serialization-filtering",
    "paragraph": "Java serialization allows objects to be converted to a byte stream for storage or transfer. Filtering controls which classes can be deserialized to prevent security risks like deserialization attacks. Developers should implement validation and filters to enhance security.",
    "code": "ObjectInputFilter filter = ObjectInputFilter.Config.createFilter(\"com.example.*;!*\\\");\nObjectInputStream in = new ObjectInputStream(inputStream);\nin.setObjectInputFilter(filter);"
  },
  {
    "heading": "Java EE / Jakarta EE",
    "id": "java-ee",
    "paragraph": "Java EE (now Jakarta EE) provides a set of specifications and APIs for building large-scale, multi-tier enterprise applications. It includes technologies like Servlets, JSP, JMS, and JPA, facilitating web services, messaging, persistence, and dependency injection to build scalable, robust systems.",
    "code": "// Example: Servlet\n@WebServlet(\"/hello\")\npublic class HelloServlet extends HttpServlet {\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {\n        resp.getWriter().write(\"Hello, Java EE\");\n    }\n}"
  },
  {
    "heading": "Reactive Programming with Project Reactor",
    "id": "reactive-programming",
    "paragraph": "Project Reactor enables reactive, asynchronous, and non-blocking programming in Java. It allows developers to write efficient, scalable applications that can handle many concurrent operations without blocking threads, improving resource usage and responsiveness.",
    "code": "Flux.just(\"A\", \"B\", \"C\")\n    .filter(s -> s.startsWith(\"A\"))\n    .subscribe(System.out::println);"
  },
  {
    "heading": "Native Image Compilation (GraalVM)",
    "id": "native-image",
    "paragraph": "GraalVM allows ahead-of-time compilation of Java applications into native executables. These native images start up faster and use less memory than traditional JVM-based apps, making them ideal for microservices and serverless environments.",
    "code": "// Build command example\n// native-image --no-fallback -jar myapp.jar"
  },
  {
    "heading": "Internationalization APIs",
    "id": "internationalization-apis",
    "paragraph": "Java's Locale and ResourceBundle classes facilitate the development of applications that adapt their messages, formats, and resources to the user's language and region. This supports creating globally usable software without rewriting code.",
    "code": "Locale locale = new Locale(\"es\", \"ES\");\nResourceBundle bundle = ResourceBundle.getBundle(\"Messages\", locale);\nSystem.out.println(bundle.getString(\"welcome\"));"
  },
  {
    "heading": "Java Debugging and Profiling Tools",
    "id": "debugging-profiling",
    "paragraph": "Java offers tools like jdb (Java Debugger) and VisualVM to inspect running applications, debug issues, and profile performance. These help identify bottlenecks, memory leaks, and threading problems for better application reliability.",
    "code": "// Use jdb from command line\n// jdb -classpath classes MyApp"
  },
  {
    "heading": "Annotations Processing and Code Generation",
    "id": "annotation-processing",
    "paragraph": "Annotation processors run at compile-time to generate additional source code or metadata based on annotations in your Java code. This reduces boilerplate code and integrates with frameworks like Lombok or Dagger for dependency injection.",
    "code": "@SupportedAnnotationTypes(\"com.example.MyAnnotation\")\npublic class MyProcessor extends AbstractProcessor { ... }"
  },
  {
    "heading": "Java Persistence API (JPA)",
    "id": "jpa",
    "paragraph": "JPA simplifies database operations by mapping Java objects (entities) to database tables. It provides an abstraction over SQL and supports powerful querying with JPQL, transactions, and caching for efficient data management in applications.",
    "code": "@Entity\npublic class User {\n    @Id\n    private Long id;\n    private String name;\n}"
  },
  {
    "heading": "Web Services (REST and SOAP)",
    "id": "web-services",
    "paragraph": "Java supports building and consuming web services using APIs like JAX-RS (for REST) and JAX-WS (for SOAP). This enables integration between distributed systems over HTTP, essential for modern microservices and enterprise applications.",
    "code": "@Path(\"/users\")\npublic class UserService {\n    @GET\n    public List<User> getUsers() { ... }\n}"
  },
  {
    "heading": "Java Messaging Service (JMS)",
    "id": "jms",
    "paragraph": "JMS provides a standard API for sending and receiving messages asynchronously between different parts of an application or across applications. It's useful for decoupling components and building scalable, event-driven systems.",
    "code": "ConnectionFactory factory = new ActiveMQConnectionFactory();\nConnection conn = factory.createConnection();\nSession session = conn.createSession(false, Session.AUTO_ACKNOWLEDGE);"
  },
  {
    "heading": "Concurrency Utilities (java.util.concurrent)",
    "id": "concurrency-utils",
    "paragraph": "Java offers a rich set of concurrency utilities such as thread pools, locks, atomic variables, and concurrent collections. These simplify writing safe and efficient multi-threaded applications by managing synchronization and thread lifecycle.",
    "code": "ExecutorService pool = Executors.newFixedThreadPool(4);\npool.submit(() -> System.out.println(\"Task\"));"
  },
  {
    "heading": "Java Cryptography Architecture (JCA)",
    "id": "cryptography",
    "paragraph": "JCA provides APIs for encryption, decryption, digital signatures, and key management. It supports various cryptographic algorithms and providers, allowing developers to build secure applications that protect data confidentiality and integrity.",
    "code": "Cipher cipher = Cipher.getInstance(\"AES\");\ncipher.init(Cipher.ENCRYPT_MODE, secretKey);"
  },
  {
    "heading": "Dependency Injection (Spring, CDI)",
    "id": "dependency-injection",
    "paragraph": "Dependency Injection frameworks automate object creation and wiring dependencies, promoting loose coupling and easier testing. Spring and CDI are popular frameworks that support declarative configuration and lifecycle management.",
    "code": "@Autowired\nprivate UserService userService;"
  },
  {
    "heading": "Unit Testing Frameworks (JUnit, TestNG)",
    "id": "unit-testing",
    "paragraph": "JUnit and TestNG are frameworks for writing automated tests. Unit testing verifies small code parts work correctly, improving code quality, reducing bugs, and facilitating refactoring by providing quick feedback during development.",
    "code": "@Test\npublic void testAddition() {\n    assertEquals(5, add(2, 3));\n}"
  },
  {
    "heading": "Build Tools (Maven, Gradle, Ant)",
    "id": "build-tools",
    "paragraph": "Build tools automate compiling, packaging, dependency management, and deployment. Maven and Gradle are widely used for their powerful dependency resolution and plugin ecosystems, enabling smooth CI/CD pipelines.",
    "code": "<dependency>\n  <groupId>org.springframework</groupId>\n  <artifactId>spring-core</artifactId>\n  <version>5.3.20</version>\n</dependency>"
  },
  {
    "heading": "Java Module System (JPMS)",
    "id": "jpms",
    "paragraph": "JPMS improves application structure by defining explicit module boundaries and dependencies. This allows better encapsulation, smaller runtime images, and improved security by limiting access between modules.",
    "code": "module com.myapp {\n    requires java.sql;\n    exports com.myapp.api;\n}"
  },
  {
    "heading": "Records & Pattern Matching",
    "id": "records-pattern-matching",
    "paragraph": "Records provide a compact syntax for immutable data carrier classes, reducing boilerplate code. Pattern matching simplifies type checks and casts, making code more readable and less error-prone.",
    "code": "record Point(int x, int y) {}\n\nif (obj instanceof String s) {\n    System.out.println(s.toUpperCase());\n}"
  },
//   {
//     "heading": "Text Blocks",
//     "id": "text-blocks",
//     "paragraph": "Text blocks allow multi-line string literals using triple quotes (\"\"\"), making it easier to embed JSON, XML, or SQL in code without escape sequences, improving readability.",
//     "code": "String json = \"\"\"\n{\n  \"name\": \"John\",\n  \"age\": 30\n}\
//   }
]
const main = document.querySelector("#page-content");
let mainContainer = "";
javaCheatSheet.map((contents) => {
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
}
