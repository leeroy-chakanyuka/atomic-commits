window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-33-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 33,
  "title": "ADP372S · Mock Exam 03",
  "session": 1,
  "limitSeconds": 7200,
  "version": 3,
  "group": "adp-mock",
  "intro": "100 marks with the ADP372S three-section format: 9 true/false, 11 fill-in, 30 MCQ. Mixed Java design patterns, SOLID, Spring, JPA, REST and code-tracing.",
  "source": "Original questions using the supplied mock PDF only as a blueprint for sections, marks and exam style.",
  "questions": [
    {
      "kind": "True or false",
      "prompt": "**Q01.** A Java Singleton with lazy initialization but no synchronization is guaranteed to create exactly one object even when several threads race to initialize it.",
      "correct": "false",
      "memo": "Naïve lazy initialization can create duplicate instances under concurrency; thread-safe initialization is required.",
      "marks": 2,
      "truthOnly": true,
      "id": 1,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q02.** The Liskov Substitution Principle concerns runtime behavioural contracts, not merely whether a subclass compiles.",
      "correct": "true",
      "memo": "Subtypes should preserve the promises expected by users of the base abstraction.",
      "marks": 2,
      "truthOnly": true,
      "id": 2,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q03.** In Spring Data JPA, `PageRequest.of(1, 20)` selects the first page of 20 results.",
      "correct": "false",
      "memo": "PageRequest uses zero-based page numbers; index 1 is the second page.",
      "marks": 2,
      "truthOnly": true,
      "id": 3,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q04.** Visitor can add a new operation across a stable family of elements by introducing a concrete visitor.",
      "correct": "true",
      "memo": "Operations move to visitor classes, although adding new element types generally requires updates to existing visitors.",
      "marks": 2,
      "truthOnly": true,
      "id": 4,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q05.** CSRF attacks can be relevant to browser requests using automatically attached session cookies, even when the connection uses HTTPS.",
      "correct": "true",
      "memo": "HTTPS encrypts the connection but does not prevent a malicious origin from causing a victim browser to submit state-changing requests.",
      "marks": 2,
      "truthOnly": true,
      "id": 5,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q06.** In Bridge, a concrete abstraction normally needs to extend each concrete implementation class separately to support new combinations.",
      "correct": "false",
      "memo": "Bridge composes an abstraction with an implementation interface so combinations do not require one subclass each.",
      "marks": 2,
      "truthOnly": true,
      "id": 6,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q07.** The output ordering of two nested decorators can differ depending on which decorator is outermost.",
      "correct": "true",
      "memo": "Wrapper order determines call and delegation order, which can change the result.",
      "marks": 2,
      "truthOnly": true,
      "id": 7,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q08.** SRP is equivalent to the rule that every class may contain at most one public method.",
      "correct": "false",
      "memo": "A cohesive responsibility may require multiple methods; SRP is about reasons for change.",
      "marks": 2,
      "truthOnly": true,
      "id": 8,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q09.** A JWT's signature can be verified without granting the user ADMIN; authentication and authorization are separate decisions.",
      "correct": "true",
      "memo": "Signature validation helps establish token trust; permissions still need appropriate claim-to-authority mapping and authorization.",
      "marks": 2,
      "truthOnly": true,
      "id": 9,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q10.** In JPA, the annotation used to map a Java property to an explicitly named database column is __________.",
      "blanks": 1,
      "accepted": [
        [
          "@Column",
          "Column"
        ]
      ],
      "memo": "@Column(name=\"...\") explicitly sets the database column mapped to a basic attribute.",
      "marks": 2,
      "id": 10,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q11.** The Spring annotation typically placed on a service method to declare its database transaction boundary is __________.",
      "blanks": 1,
      "accepted": [
        [
          "@Transactional",
          "Transactional"
        ]
      ],
      "memo": "@Transactional is used for Spring-managed transaction demarcation when properly intercepted.",
      "marks": 2,
      "id": 11,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q12.** The design pattern where registered subscribers receive state-change notifications from a subject is __________.",
      "blanks": 1,
      "accepted": [
        [
          "Observer",
          "Observer pattern"
        ]
      ],
      "memo": "Observer defines a one-to-many notification relationship between subject and observers.",
      "marks": 2,
      "id": 12,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q13.** A centralized `ParserFactory.create(format)` chooses XMLParser or JsonParser. The common informal name for this creation design is __________.",
      "blanks": 1,
      "accepted": [
        [
          "Simple Factory",
          "Simple Factory pattern"
        ]
      ],
      "memo": "Simple Factory centralizes concrete object creation in a selection method.",
      "marks": 2,
      "id": 13,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q14.** The Spring MVC annotation for mapping an HTTP GET endpoint to a controller handler method is __________.",
      "blanks": 1,
      "accepted": [
        [
          "@GetMapping",
          "GetMapping"
        ]
      ],
      "memo": "@GetMapping maps GET requests.",
      "marks": 2,
      "id": 14,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q15.** The Java traversal interface that provides `hasNext()` and `next()` is __________.",
      "blanks": 1,
      "accepted": [
        [
          "Iterator",
          "Iterator<T>",
          "java.util.Iterator"
        ]
      ],
      "memo": "Iterator allows traversal without exposing a collection's representation.",
      "marks": 2,
      "id": 15,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q16.** The annotation Spring Security uses to specify a pre-invocation authorization condition on a method is __________.",
      "blanks": 1,
      "accepted": [
        [
          "@PreAuthorize",
          "PreAuthorize"
        ]
      ],
      "memo": "@PreAuthorize executes security expression checks with method security enabled.",
      "marks": 2,
      "id": 16,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q17.** The SOLID principle about behavioural substitutability of derived types is called the __________ principle.",
      "blanks": 1,
      "accepted": [
        [
          "Liskov Substitution",
          "Liskov Substitution Principle",
          "LSP"
        ]
      ],
      "memo": "LSP requires subtypes to honor the base type's contract.",
      "marks": 2,
      "id": 17,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q18.** JPA's optimistic-locking annotation is __________.",
      "blanks": 1,
      "accepted": [
        [
          "@Version",
          "Version"
        ]
      ],
      "memo": "@Version supports version checking to detect concurrent updates.",
      "marks": 2,
      "id": 18,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q19.** The pattern that lets an object with one API be used where a different API is expected is __________.",
      "blanks": 1,
      "accepted": [
        [
          "Adapter",
          "Adapter pattern"
        ]
      ],
      "memo": "Adapter translates calls between incompatible interfaces.",
      "marks": 2,
      "id": 19,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q20.** A creational pattern providing interfaces for whole families of related products, such as themed buttons and text fields, is __________.",
      "blanks": 1,
      "accepted": [
        [
          "Abstract Factory",
          "Abstract Factory pattern"
        ]
      ],
      "memo": "Abstract Factory creates consistent families of related products.",
      "marks": 2,
      "id": 20,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q21.** A code editor needs Undo, Redo and Save actions to be stored and executed later. What is a central role of the Command object?",
      "options": [
        "It acts only as a database entity",
        "It packages a requested operation and receiver as an object",
        "It always implements a Collection",
        "It detects syntax errors automatically"
      ],
      "correct": "B",
      "memo": "Command encapsulates request details, allowing an invoker to queue, execute or potentially undo actions.",
      "marks": 2,
      "id": 21,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q22.** Study the code. What prints after invoking `run()`?",
      "options": [
        "A",
        "B",
        "AB",
        "Nothing"
      ],
      "correct": "B",
      "memo": "The injected algorithm is Beta, so Work.run delegates to Beta.go and prints B.",
      "snippet": "interface Action { void go(); }\nclass Alpha implements Action { public void go(){System.out.print(\"A\");} }\nclass Beta implements Action { public void go(){System.out.print(\"B\");} }\nclass Work {\n  Action action;\n  Work(Action a){action=a;}\n  void run(){action.go();}\n}\nnew Work(new Beta()).run();",
      "marks": 2,
      "id": 22,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q23.** A media viewer exposes `open()` for all video formats. A legacy FLV component only has `playFlv()`. A wrapper lets the viewer use it. Which UML relation is likely?",
      "options": [
        "Adapter implements VideoPlayer and contains LegacyFlvPlayer",
        "LegacyFlvPlayer extends every viewer subclass",
        "Viewer implements a Builder",
        "FlvPlayer inherits all Observer classes"
      ],
      "correct": "A",
      "memo": "An object adapter normally implements the target interface and delegates to the adaptee.",
      "marks": 2,
      "id": 23,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q24.** A class `ArchiveJob` delegates output rendering to either PdfRenderer or HtmlRenderer, while export job types evolve separately. What's being decoupled?",
      "options": [
        "Two unrelated databases",
        "The client and a list index",
        "An abstraction from its implementation",
        "A subject from its observers"
      ],
      "correct": "C",
      "memo": "Bridge separates an abstraction hierarchy from its implementation hierarchy using delegation.",
      "marks": 2,
      "id": 24,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q25.** A UI subscribes to `InventoryChanged` events. `WarehouseScreen` can unsubscribe without changing Inventory. What pattern?",
      "options": [
        "Interpreter",
        "Factory Method",
        "Flyweight",
        "Observer"
      ],
      "correct": "D",
      "memo": "Observer supports attach/detach and notifications while reducing coupling.",
      "marks": 2,
      "id": 25,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q26.** How many objects of `MeshType` does an ideal Flyweight factory create for 2,000 independent meshes if all have the same immutable configuration key?",
      "options": [
        "One shared MeshType object, plus per-instance state elsewhere",
        "One MeshType per mesh, because each is rendered separately",
        "Zero, because Flyweight prohibits objects",
        "Two thousand singleton classes"
      ],
      "correct": "A",
      "memo": "A flyweight factory caches one intrinsic configuration per key; unique per-instance state is not shared.",
      "marks": 2,
      "id": 26,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q27.** The `FactoryMethod` creator class returns a Product interface from `createProduct()`. Why is this preferable to calling `new ConcreteProduct()` in the business flow?",
      "options": [
        "It prohibits adding new product types",
        "The workflow depends on a product abstraction and subclasses choose creation",
        "It stores every product as a static singleton",
        "It automatically serializes results"
      ],
      "correct": "B",
      "memo": "The base creator's business flow delegates concrete creation to overridable factory methods.",
      "marks": 2,
      "id": 27,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q28.** Which statement correctly distinguishes Builder from Abstract Factory?",
      "options": [
        "They always produce the same number of classes",
        "Builder swaps algorithms while Abstract Factory observes events",
        "Builder assembles a complex object stepwise; Abstract Factory creates related product families",
        "Builder is a behavioural pattern while Abstract Factory is structural"
      ],
      "correct": "C",
      "memo": "Builder focuses on constructing one potentially complex object; Abstract Factory builds consistent families of related products.",
      "marks": 2,
      "id": 28,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q29.** You need to traverse a linked-list-based student collection sorted by performance without exposing node links. Choose:",
      "options": [
        "Singleton",
        "Decorator",
        "Visitor",
        "A custom Iterator implementation"
      ],
      "correct": "D",
      "memo": "A custom iterator encapsulates cursor and traversal order independent of representation.",
      "marks": 2,
      "id": 29,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q30.** A grammar interpreter has leaf `Value(4)` and composite `Multiply(Value(4),Value(3))`. The latter is called:",
      "options": [
        "A nonterminal expression",
        "A flyweight cache",
        "A ConcreteFactory",
        "A singleton"
      ],
      "correct": "A",
      "memo": "Composite grammar rules combine child expressions and are nonterminal expression nodes.",
      "marks": 2,
      "id": 30,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q31.** A `Visitor` interface provides `visit(MusicFile)` and `visit(ImageFile)`, but the app adds `TextFile`. Which change is normally needed?",
      "options": [
        "Nothing anywhere, Visitor handles types automatically",
        "Add a visit(TextFile) overload and implement it in each concrete visitor",
        "Make TextFile extend MusicFile",
        "Remove all accept methods"
      ],
      "correct": "B",
      "memo": "Classic Visitor is easy to extend with operations but costly to extend with new element types.",
      "marks": 2,
      "id": 31,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q32.** The object `new EncryptionDecorator(new CompressionDecorator(new FileStore()))` receives a call `save()`. Which implementation receives the call first?",
      "options": [
        "FileStore",
        "CompressionDecorator",
        "EncryptionDecorator",
        "All simultaneously"
      ],
      "correct": "C",
      "memo": "The outermost wrapper receives the call first and can delegate inward.",
      "marks": 2,
      "id": 32,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q33.** A game has 10 gun types. `RecoilVisitor` and `SoundVisitor` each contain one visit overload per gun. What is the primary benefit?",
      "options": [
        "It eliminates recoil calculations",
        "It makes each gun class a Singleton",
        "It removes all type-dependent code",
        "New operations are grouped into new visitors, not added to all gun classes"
      ],
      "correct": "D",
      "memo": "Visitor reorganizes operations by feature rather than scattering them across the element types.",
      "marks": 2,
      "id": 33,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q34.** What SOLID principle is violated when a derived `SafeAccount.withdraw(amount)` unexpectedly requires an extra code even when the base contract permits withdrawal with sufficient funds?",
      "options": [
        "LSP",
        "DIP",
        "SRP",
        "OCP"
      ],
      "correct": "A",
      "memo": "A subtype strengthens a precondition that base-type clients did not agree to.",
      "marks": 2,
      "id": 34,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q35.** Several classes all use a `DocumentPrinter` interface. One needs printing only, but the interface also forces sign(), upload() and delete(). Which principle points to an improved API?",
      "options": [
        "OCP",
        "ISP",
        "Singleton",
        "Observer"
      ],
      "correct": "B",
      "memo": "ISP discourages forcing clients to depend on unrelated interface methods.",
      "marks": 2,
      "id": 35,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q36.** A service calls `new OracleBillingRepository()` and must be edited every time the storage provider changes. Which SOLID change is most relevant?",
      "options": [
        "Put all logic in OracleBillingRepository",
        "Add a new if/else for each database",
        "Introduce a BillingRepository port and inject an implementation",
        "Make service methods private"
      ],
      "correct": "C",
      "memo": "DIP helps high-level billing logic depend on a stable repository contract rather than the concrete adapter.",
      "marks": 2,
      "id": 36,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q37.** `ExportService` needs to support Markdown without modifying its existing format-switching logic. Which design fits OCP?",
      "options": [
        "One `if` per supported exporter",
        "Remove polymorphism",
        "Store file extensions in public static fields",
        "An Exporter interface and a new MarkdownExporter implementation"
      ],
      "correct": "D",
      "memo": "An extension point allows a new implementation without editing stable consuming code.",
      "marks": 2,
      "id": 37,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q38.** A `UserService` handles account registration, email HTML templates, and currency exchange rates. What is the SRP concern?",
      "options": [
        "It has unrelated reasons to change",
        "It creates too few objects",
        "It contains too many private methods by definition",
        "It uses SQL"
      ],
      "correct": "A",
      "memo": "SRP targets cohesive responsibility; authentication, templating and exchange logic change separately.",
      "marks": 2,
      "id": 38,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q39.** Which of the following is an example of an extension point that helps OCP rather than a hardcoded branch in the caller?",
      "options": [
        "`if(type.equals(\"CARD\"))` repeated in every method",
        "`PaymentProcessor` polymorphic interface injected into Checkout",
        "`instanceof` tests for every subtype",
        "A new exception for each type"
      ],
      "correct": "B",
      "memo": "Polymorphism delegates behavior through a stable abstraction.",
      "marks": 2,
      "id": 39,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q40.** What output is expected for this two-iterator Java sequence?",
      "options": [
        "5, 10, 10",
        "5, 5, 10",
        "5, 10, 5",
        "10, 10, 5"
      ],
      "correct": "C",
      "memo": "Iterator x advances twice (5 then 10); iterator y starts independently at 5.",
      "snippet": "List<Integer> xs = List.of(5, 10, 15);\nIterator<Integer> x = xs.iterator();\nIterator<Integer> y = xs.iterator();\nSystem.out.println(x.next());\nSystem.out.println(x.next());\nSystem.out.println(y.next());",
      "marks": 2,
      "id": 40,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q41.** A React frontend needs browser access to a Spring API across origins. Which server-side capability must be configured?",
      "options": [
        "Transaction propagation",
        "EntityGraph mapping",
        "@Version fields",
        "CORS allowances for the frontend origin and needed methods/headers"
      ],
      "correct": "D",
      "memo": "CORS policies determine whether browsers permit cross-origin script access.",
      "marks": 2,
      "id": 41,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q42.** A POST with a session cookie but no valid CSRF token is rejected, despite correct user credentials. This primarily demonstrates:",
      "options": [
        "CSRF defense is independent from password verification",
        "JWT signatures cannot be checked",
        "A unique index violation",
        "Observer event dispatch"
      ],
      "correct": "A",
      "memo": "Authenticated identity does not automatically satisfy request forgery protections.",
      "marks": 2,
      "id": 42,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q43.** `.requestMatchers(\"/public/**\").permitAll().anyRequest().authenticated()` is configured. Which request is allowed without logging in, assuming no other restrictions?",
      "options": [
        "GET /orders",
        "GET /public/notice",
        "POST /admin/delete",
        "GET /profile"
      ],
      "correct": "B",
      "memo": "The /public/** matcher permits anonymous access; the catch-all requires authentication.",
      "marks": 2,
      "id": 43,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q44.** A JWT arrives with matching issuer and valid signature but was issued for another resource (audience). What is the prudent API behavior when audience is configured?",
      "options": [
        "Accept the token if it has a username",
        "Ignore the audience and grant permissions",
        "Reject the token for the wrong audience",
        "Write the token to application logs"
      ],
      "correct": "C",
      "memo": "Audience validation prevents use of tokens intended for other resources.",
      "marks": 2,
      "id": 44,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q45.** Which status would typically indicate an unauthenticated API client needs to present valid credentials?",
      "options": [
        "500",
        "204",
        "201",
        "401"
      ],
      "correct": "D",
      "memo": "401 Unauthorized is conventionally the authentication challenge/failure status for APIs.",
      "marks": 2,
      "id": 45,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q46.** A `@ManyToOne` field references a shared Customer. Why should `CascadeType.REMOVE` on that association be approached carefully?",
      "options": [
        "Deleting one order could remove a shared customer referenced by other orders",
        "It disables foreign keys",
        "It forces all fields @Transient",
        "It automatically changes IDs"
      ],
      "correct": "A",
      "memo": "REMOVE cascade can accidentally delete shared parent data when configured on a child-to-parent association.",
      "marks": 2,
      "id": 46,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q47.** A service loads 60 Book entities and then lazily fetches each Book.author separately. Which JPA problem is illustrated?",
      "options": [
        "Optimistic locking",
        "N+1 queries",
        "CSRF",
        "Abstract Factory"
      ],
      "correct": "B",
      "memo": "An initial list query plus individual association queries is an N+1 access pattern.",
      "marks": 2,
      "id": 47,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q48.** Two transactions update the same entity with `@Version`. One commits first. What should the other do when it detects a stale version?",
      "options": [
        "Always overwrite the first one",
        "Retry forever with no constraints",
        "Raise an optimistic-lock conflict under the provider/transaction framework",
        "Delete the entity"
      ],
      "correct": "C",
      "memo": "Optimistic locking guards against lost updates via version comparisons.",
      "marks": 2,
      "id": 48,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q49.** What does `@Transient` on a calculated field instruct JPA to do?",
      "options": [
        "Always create a unique index",
        "Fetch it eagerly",
        "Cascade its value",
        "Do not map the field for persistence"
      ],
      "correct": "D",
      "memo": "@Transient excludes a field or property from JPA persistence mapping.",
      "marks": 2,
      "id": 49,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q50.** A REST endpoint needs to read an `id` from `/courses/8` rather than from a JSON body. Which parameter annotation fits?",
      "options": [
        "@PathVariable",
        "@RequestBody",
        "@Version",
        "@Bean"
      ],
      "correct": "A",
      "memo": "@PathVariable binds the URI path segment to a handler argument.",
      "marks": 2,
      "id": 50,
      "section": "SECTION THREE · MULTIPLE CHOICE"
    }
  ],
  "totalMarks": 100
};
