window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-34-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 34,
  "title": "ADP372S · Mock Exam 04",
  "session": 1,
  "limitSeconds": 7200,
  "version": 3,
  "group": "adp-mock",
  "intro": "100-mark ADP372S-style practice examination: 9 true/false, 11 short fill-in terms and 30 MCQs, mixed across Java design patterns, SOLID, Spring Security, JPA and REST.",
  "source": "New exam-style questions aligned with the structure and topics of the user's sample mock, not a reproduction of its question text.",
  "questions": [
    {
      "kind": "True or false",
      "prompt": "**Q01.** Simple Factory is one of the original 23 Gang of Four patterns, alongside Abstract Factory and Factory Method.",
      "correct": "false",
      "memo": "**Correct answer: FALSE.** Simple Factory is a common creation idiom but is not a separate one of the original GoF 23 patterns.",
      "marks": 2,
      "truthOnly": true,
      "id": 1,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q02.** In modern Spring Security 6 configuration, an application can declare a `SecurityFilterChain` bean instead of extending the removed WebSecurityConfigurerAdapter.",
      "correct": "true",
      "memo": "**Correct answer: TRUE.** SecurityFilterChain bean configuration is the modern approach in Spring Security 6.",
      "marks": 2,
      "truthOnly": true,
      "id": 2,
      "section": "SECTION ONE · TRUE OR FALSE",
      "snippet": "@Bean\nSecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n  http.authorizeHttpRequests(a -> a\n    .requestMatchers(\"/status\").permitAll()\n    .anyRequest().authenticated());\n  return http.build();\n}"
    },
    {
      "kind": "True or false",
      "prompt": "**Q03.** Strategy can vary an object's algorithm by injecting a different implementation of a common strategy interface.",
      "correct": "true",
      "memo": "**Correct answer: TRUE.** The context delegates to an interchangeable algorithm object.",
      "marks": 2,
      "truthOnly": true,
      "id": 3,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q04.** The JPA default fetch type for a `@ManyToOne` relationship is LAZY.",
      "correct": "false",
      "memo": "**Correct answer: FALSE.** @ManyToOne defaults to EAGER by the JPA specification, though explicit LAZY is common.",
      "marks": 2,
      "truthOnly": true,
      "id": 4,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q05.** The Open/Closed Principle says that adding a new class that implements an existing interface is always forbidden.",
      "correct": "false",
      "memo": "**Correct answer: FALSE.** OCP encourages extensibility through suitable interfaces, new subclasses and other extension points.",
      "marks": 2,
      "truthOnly": true,
      "id": 5,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q06.** Each Observer must hold references to all other observers before the subject can notify its subscribers.",
      "correct": "false",
      "memo": "**Correct answer: FALSE.** The subject maintains subscribers; observers need not know one another.",
      "marks": 2,
      "truthOnly": true,
      "id": 6,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q07.** A Bridge abstraction typically holds a reference to an implementation interface rather than inheriting from each concrete implementation.",
      "correct": "true",
      "memo": "**Correct answer: TRUE.** Bridge uses composition to separate abstraction and implementation hierarchies.",
      "marks": 2,
      "truthOnly": true,
      "id": 7,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q08.** Applying `@RequestBody` to a DTO parameter automatically enforces every Bean Validation constraint even when validation was never activated.",
      "correct": "false",
      "memo": "**Correct answer: FALSE.** Validation normally requires @Valid/@Validated or appropriate activation; @RequestBody alone maps the body.",
      "marks": 2,
      "truthOnly": true,
      "id": 8,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q09.** The Visitor pattern's `element.accept(visitor)` followed by `visitor.visit(this)` supports type-specific operation dispatch.",
      "correct": "true",
      "memo": "**Correct answer: TRUE.** This two-stage process is commonly called double dispatch.",
      "marks": 2,
      "truthOnly": true,
      "id": 9,
      "section": "SECTION ONE · TRUE OR FALSE",
      "snippet": "class VideoFile implements FileElement {\n  @Override public void accept(FileVisitor visitor) {\n    visitor.visit(this);\n  }\n}"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q10.** A global settings service uses a private constructor and exposes a single shared instance through a static method. This is the __________ pattern.",
      "blanks": 1,
      "accepted": [
        [
          "Singleton",
          "Singleton pattern"
        ]
      ],
      "memo": "**Correct answer: `Singleton`.** Singleton manages access to a single shared instance.",
      "marks": 2,
      "id": 10,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q11.** The Spring annotation for enabling a controller or handler to permit browser cross-origin requests from configured origins is __________.",
      "blanks": 1,
      "accepted": [
        [
          "@CrossOrigin",
          "CrossOrigin"
        ]
      ],
      "memo": "**Correct answer: `@CrossOrigin`.** @CrossOrigin supplies CORS policy for a controller or method.",
      "marks": 2,
      "id": 11,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q12.** The SOLID principle declaring that software should be extensible without modifying stable consumer code is abbreviated __________.",
      "blanks": 1,
      "accepted": [
        [
          "OCP",
          "Open Closed Principle",
          "Open/Closed Principle",
          "Open-Closed Principle"
        ]
      ],
      "memo": "**Correct answer: `OCP`.** OCP is Open/Closed Principle.",
      "marks": 2,
      "id": 12,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q13.** The Spring MVC annotation that obtains a query parameter such as `?sort=recent` is __________.",
      "blanks": 1,
      "accepted": [
        [
          "@RequestParam",
          "RequestParam"
        ]
      ],
      "memo": "**Correct answer: `@RequestParam`.** @RequestParam binds request parameters, including query-string values.",
      "marks": 2,
      "id": 13,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q14.** The Jakarta Persistence identifier annotation is __________.",
      "blanks": 1,
      "accepted": [
        [
          "@Id",
          "Id"
        ]
      ],
      "memo": "**Correct answer: `@Id`.** @Id marks the primary key attribute.",
      "marks": 2,
      "id": 14,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q15.** The pattern where `accept()` delegates to a concrete visitor's overload for the element type is __________.",
      "blanks": 1,
      "accepted": [
        [
          "Visitor",
          "Visitor pattern"
        ]
      ],
      "memo": "**Correct answer: `Visitor`.** Visitor separates operations from an element hierarchy through accept/visit.",
      "marks": 2,
      "id": 15,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q16.** The pattern that reduces memory by sharing immutable state across many lightweight objects is __________.",
      "blanks": 1,
      "accepted": [
        [
          "Flyweight",
          "Flyweight pattern"
        ]
      ],
      "memo": "**Correct answer: `Flyweight`.** Flyweight caches shared intrinsic state and keeps per-object state elsewhere.",
      "marks": 2,
      "id": 16,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q17.** A Spring Security 6 `@Bean` returns a __________ object after configuring `HttpSecurity` and calling `http.build()`.",
      "blanks": 1,
      "accepted": [
        [
          "SecurityFilterChain",
          "SecurityFilterChain bean"
        ]
      ],
      "memo": "**Correct answer: `SecurityFilterChain`.** http.build() returns the configured SecurityFilterChain.",
      "marks": 2,
      "id": 17,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q18.** The HTTP method used in a REST API when requesting that `/api/products/9` be removed is __________.",
      "blanks": 1,
      "accepted": [
        [
          "DELETE",
          "HTTP DELETE"
        ]
      ],
      "memo": "**Correct answer: `DELETE`.** DELETE requests deletion of the identified resource.",
      "marks": 2,
      "id": 18,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q19.** The JPA annotation used when many CartItem rows refer to one Cart is __________.",
      "blanks": 1,
      "accepted": [
        [
          "@ManyToOne",
          "ManyToOne"
        ]
      ],
      "memo": "**Correct answer: `@ManyToOne`.** Each CartItem has one cart; the owning side is commonly @ManyToOne.",
      "marks": 2,
      "id": 19,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q20.** The pattern used to assemble an object with many optional fields through readable chained construction methods is __________.",
      "blanks": 1,
      "accepted": [
        [
          "Builder",
          "Builder pattern"
        ]
      ],
      "memo": "**Correct answer: `Builder`.** Builder supports stepwise construction of complex objects.",
      "marks": 2,
      "id": 20,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q21.** A newsfeed supports HTMLRenderer and PdfRenderer, while articles and newsletters are separate types. The API needs combinations without subclasses such as HtmlArticle and PdfNewsletter. Choose:",
      "options": [
        "Decorator",
        "Observer",
        "Bridge",
        "Flyweight"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** Bridge separates document abstractions from output renderer implementations.",
      "marks": 2,
      "id": 21,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q22.** A developer defines a Product interface and a separate `createProduct()` method overridden by specialized creator subclasses. This is:",
      "options": [
        "Factory Method",
        "Interpreter",
        "Adapter",
        "Singleton"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** Factory Method uses polymorphic product creation through creator implementations.",
      "marks": 2,
      "id": 22,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q23.** A deployment wizard constructs a complex ServerConfig in steps for region, disk size, VM type and firewall rules. Which pattern?",
      "options": [
        "Iterator",
        "Builder",
        "Visitor",
        "Observer"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** Builder helps create objects through an ordered or fluent sequence of configuration steps.",
      "marks": 2,
      "id": 23,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q24.** What prints from this `Notification` decorator chain?",
      "options": [
        "EMAIL",
        "LOG EMAIL",
        "LOG",
        "EMAIL LOG"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** Outer LogDecorator prints LOG before delegating to Email's send, printing EMAIL.",
      "snippet": "interface Notification { void send(); }\nclass Email implements Notification { public void send(){System.out.print(\"EMAIL\");} }\nclass LogDecorator implements Notification {\n  Notification n;\n  LogDecorator(Notification n){this.n=n;}\n  public void send(){System.out.print(\"LOG \");n.send();}\n}\nnew LogDecorator(new Email()).send();",
      "marks": 2,
      "id": 24,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q25.** An editor stores operations as objects so the user can undo drawing, moving and deleting shapes. Which interface is central?",
      "options": [
        "Command",
        "Visitor",
        "Iterable",
        "Observer"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** Command objects encapsulate operations and may carry undo state.",
      "marks": 2,
      "id": 25,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q26.** A user switches between alphabetical, chronological and relevance sorting without changing the containing list's client code. Which pattern best models the algorithms?",
      "options": [
        "Strategy",
        "Singleton",
        "Decorator",
        "Bridge"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** Strategy packages interchangeable algorithms behind a common interface.",
      "marks": 2,
      "id": 26,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q27.** Several student-screen components independently register to receive enrolment-status updates. The publisher should not need concrete screen classes. Which pattern?",
      "options": [
        "Builder",
        "Interpreter",
        "Observer",
        "Factory Method"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** Observer decouples a subject from a set of subscribed dependents.",
      "marks": 2,
      "id": 27,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q28.** A catalogue has 100,000 icons but only eight immutable icon styles. Reusing eight style objects is:",
      "options": [
        "Simple Factory",
        "Flyweight",
        "Visitor",
        "Adapter"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** Flyweight shares intrinsic appearance objects by configuration key.",
      "marks": 2,
      "id": 28,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q29.** A calculator constructs an expression AST representing `A AND (B OR C)`. The `AND` and `OR` nodes are:",
      "options": [
        "Terminal expressions",
        "Nonterminal expressions",
        "Iterators",
        "Observers"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** Composite expression nodes have child expressions and are nonterminal.",
      "marks": 2,
      "id": 29,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q30.** A client loops with `while (it.hasNext()) it.next()`. What is the important abstraction?",
      "options": [
        "Every element must implement Iterator",
        "The client controls memory allocation",
        "The collection's internal storage need not be exposed",
        "Iterator always sorts collections"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** Iterator exposes a traversal protocol that hides collection representation.",
      "marks": 2,
      "id": 30,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q31.** An existing XML library exposes `readXml()`; the app expects `DocumentReader.read()`. A wrapper delegates and converts outputs. Which pattern?",
      "options": [
        "Visitor",
        "Singleton",
        "Builder",
        "Adapter"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** Adapter implements the expected interface and delegates to the existing incompatible component.",
      "marks": 2,
      "id": 31,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q32.** A cross-platform GUI factory makes families of MacButton/MacMenu or WindowsButton/WindowsMenu. Use:",
      "options": [
        "Flyweight",
        "Abstract Factory",
        "Interpreter",
        "Observer"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** Abstract Factory ensures related products come from the same family.",
      "marks": 2,
      "id": 32,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q33.** A `Configuration` class guarantees exactly one shared object. Which implementation detail commonly prevents callers from invoking its constructor?",
      "options": [
        "Protected static fields only",
        "Implementing Iterable",
        "A private constructor",
        "Calling a Visitor"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** A private constructor blocks ordinary external construction for Singleton.",
      "marks": 2,
      "id": 33,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q34.** `PriceVisitor` and `TaxVisitor` both implement `visit(Food)` and `visit(Electronics)`. Which new feature is easiest?",
      "options": [
        "Changing the abstract Element contract for all classes",
        "A new third element type",
        "A new Electronics subclass requiring visitor changes",
        "Another operation through a new visitor"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** Visitor is most extensible along the operation dimension.",
      "marks": 2,
      "id": 34,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q35.** A full `TaskService` validates tasks, persists records, renders PDFs and sends notifications. Which improvement is most aligned with SRP?",
      "options": [
        "Keep adding methods to TaskService",
        "Delegate independent tasks to focused collaborators",
        "Make every method static",
        "Use multiple inheritance"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** SRP encourages extracting responsibilities with separate reasons to change.",
      "marks": 2,
      "id": 35,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q36.** A `ReportExporter` interface allows adding `MarkdownExporter` without editing a reporting client. Which principle is helped?",
      "options": [
        "SRP means one method per class",
        "Open/Closed",
        "Dependency inversion is impossible",
        "Liskov prohibits any new implementation"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** OCP is supported when new implementations extend behavior without rewriting the consumer.",
      "marks": 2,
      "id": 36,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q37.** A subclass implements every Java method, but its `save()` method silently ignores valid input that the base contract promises to persist. Which principle is violated?",
      "options": [
        "ISP",
        "SRP",
        "OCP",
        "LSP"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** Behavioural substitution requires honoring the base contract, not merely compiling.",
      "marks": 2,
      "id": 37,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q38.** A payment client needs only `pay()` but must depend on a Provider interface exposing `refund`, `audit`, `settle` and `configure`. What redesign helps?",
      "options": [
        "Move payment code into UI",
        "A singleton provider",
        "A bigger interface",
        "A focused Payment interface for the caller"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** Interface Segregation reduces a client's dependencies on unused operations.",
      "marks": 2,
      "id": 38,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q39.** A service accepts `MessageSender` but, inside `notify()`, directly creates a new concrete SmsSender ignoring its constructor dependency. What's wrong?",
      "options": [
        "The class has too few fields",
        "The service bypasses the abstraction, undermining DIP",
        "It automatically satisfies DIP",
        "It makes compilation impossible"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** Depending on an interface helps only if business code actually uses that injected contract.",
      "marks": 2,
      "id": 39,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q40.** Which relationship best models a high-level use case calling a storage port implemented by MySQL and an in-memory fake?",
      "options": [
        "Every storage port must be a Singleton",
        "The fake must implement SQL syntax inside the use case",
        "The use case must extend MySQL",
        "Both implementations and the use case depend on an abstraction"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** DIP supports dependencies directed at contracts shared by high- and low-level modules.",
      "marks": 2,
      "id": 40,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q41.** A team gives its `Employee` entity one method for validating names, one for setting email and one for changing status. Is SRP necessarily violated?",
      "options": [
        "Yes, more than one method is prohibited",
        "Yes, because it is an entity",
        "No, cohesive domain behaviours can belong to one responsibility",
        "No, because @Entity means all SOLID rules are ignored"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** SRP measures reasons to change rather than counting methods.",
      "marks": 2,
      "id": 41,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q42.** Given `.requestMatchers(\"/api/public/**\").permitAll().anyRequest().authenticated()`, what is true for `/api/public/ping`?",
      "options": [
        "It is allowed without authentication by this authorization configuration",
        "It must send a JWT",
        "The request cannot pass any filter",
        "It must have the ADMIN role"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** The specific permitted route precedes the authenticated catch-all.",
      "marks": 2,
      "id": 42,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "snippet": "http.authorizeHttpRequests(a -> a\n  .requestMatchers(\"/api/public/**\").permitAll()\n  .anyRequest().authenticated());"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q43.** What is the usual role of a `SecurityFilterChain` bean in Spring Security 6?",
      "options": [
        "Configure the servlet request-security chain",
        "Map entity identifiers",
        "Generate SQL repositories",
        "Send Observer updates"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** SecurityFilterChain configures servlet request filtering and security rules.",
      "marks": 2,
      "id": 43,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q44.** An API expects users with ROLE_MODERATOR. Under default role prefix conventions, which expression checks for it?",
      "options": [
        "hasRole(\"MODERATOR\")",
        "permitAll()",
        "hasRole(\"ROLE_MODERATOR\") always",
        "hasAuthority(\"MODERATOR\") always"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** hasRole(\"MODERATOR\") checks the ROLE_MODERATOR authority by convention.",
      "marks": 2,
      "id": 44,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q45.** A signed JWT has been decoded but the client tries to alter its scope claim. Which verification detects tampering?",
      "options": [
        "Signature verification against trusted key material",
        "Header parsing alone",
        "HTTP GET's method name",
        "A JPA entity annotation"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** Signature validation checks signed token integrity and authenticity.",
      "marks": 2,
      "id": 45,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q46.** A browser from `http://localhost:4200` makes a request to a Spring Boot API at port 8080 and encounters CORS errors. What's the most relevant solution?",
      "options": [
        "Make requests from an entity constructor",
        "Use eager fetching for entities",
        "Allow the required origin/method/header through the API's CORS configuration",
        "Disable all HTTP authentication permanently"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** Server-side CORS configuration must grant access to the frontend's origin and request characteristics.",
      "marks": 2,
      "id": 46,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q47.** A POST request from a browser is authenticated by a cookie but fails CSRF validation. Which claim is correct?",
      "options": [
        "A valid session does not replace a required CSRF token",
        "The user's password must be wrong",
        "JWT is always disabled",
        "CSRF applies only to public websites"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** State-changing cookie-authenticated requests may need CSRF protection independent of user identity.",
      "marks": 2,
      "id": 47,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q48.** A `StudentRepository extends JpaRepository<Student, Long>`. What does `Student` specify?",
      "options": [
        "The SQL table name must be Student",
        "The ID generation strategy",
        "The transaction isolation level",
        "The managed entity type"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** JpaRepository<T,ID> uses the entity type and primary-key type as generic parameters.",
      "marks": 2,
      "id": 48,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q49.** When an Order owns its `@ManyToOne` association to Customer, which annotation names the FK column?",
      "options": [
        "@RequestParam",
        "@PreAuthorize",
        "@JoinColumn",
        "@Version"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** @JoinColumn maps the foreign-key join column on an owning association.",
      "marks": 2,
      "id": 49,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "snippet": "class CartItem {\n  @ManyToOne(fetch = FetchType.LAZY)\n  @JoinColumn(name = \"cart_id\")\n  private Cart cart;\n}"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q50.** Which HTTP status is most suitable when a REST API successfully creates a new resource, including the new resource URI if available?",
      "options": [
        "409 by definition",
        "403",
        "404",
        "201 Created"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** 201 Created indicates a created resource and can include a Location header.",
      "marks": 2,
      "id": 50,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    }
  ],
  "totalMarks": 100
};
