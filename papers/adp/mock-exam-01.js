window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-31-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 31,
  "title": "ADP372S · Mock Exam 01",
  "session": 1,
  "limitSeconds": 7200,
  "version": 3,
  "group": "adp-mock",
  "intro": "100 marks, 50 questions in the same structure as the supplied ADP372S November mock: 9 true/false, 11 fill-in, 30 multiple choice. Includes Java patterns, SOLID, Spring Security, JPA and REST.",
  "source": "Original practice questions modeled on the user-supplied ADP372S November Mock Exam section structure; these are new questions, not a reproduced exam.",
  "questions": [
    {
      "kind": "True or false",
      "prompt": "**Q01.** In Factory Method, the creator defines a factory method that its subclasses can override to supply different concrete products.",
      "correct": "true",
      "memo": "**Correct answer: TRUE.** Factory Method defines creation through a polymorphic method on a creator hierarchy.",
      "marks": 2,
      "truthOnly": true,
      "id": 1,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q02.** Flyweight works best when every shared flyweight stores each individual object's changing screen coordinates.",
      "correct": "false",
      "memo": "**Correct answer: FALSE.** Coordinates vary per object and are typically extrinsic state supplied by clients; intrinsic state is shared.",
      "marks": 2,
      "truthOnly": true,
      "id": 2,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q03.** The Open/Closed Principle guarantees that an application's existing source code must never be edited for any future requirement.",
      "correct": "false",
      "memo": "**Correct answer: FALSE.** OCP encourages deliberate extension points; bug fixes and new requirements beyond the abstraction can still require modifications.",
      "marks": 2,
      "truthOnly": true,
      "id": 3,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q04.** JPA's `@Entity` annotation identifies a Java type as a mapped persistent entity.",
      "correct": "true",
      "memo": "**Correct answer: TRUE.** @Entity marks a persistent class; an identifier is also required for a valid entity mapping.",
      "marks": 2,
      "truthOnly": true,
      "id": 4,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q05.** When Spring Security authorizes an endpoint with `permitAll()`, every security filter is automatically skipped.",
      "correct": "false",
      "memo": "**Correct answer: FALSE.** permitAll allows the authorization decision; authentication and other filters in the selected chain may still run.",
      "marks": 2,
      "truthOnly": true,
      "id": 5,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q06.** A Decorator normally implements the same component abstraction as the object it wraps.",
      "correct": "true",
      "memo": "**Correct answer: TRUE.** Sharing a common component contract lets the decorator transparently wrap and delegate while adding behavior.",
      "marks": 2,
      "truthOnly": true,
      "id": 6,
      "section": "SECTION ONE · TRUE OR FALSE",
      "snippet": "interface Logger { void log(String text); }\nclass ConsoleLogger implements Logger {\n  public void log(String text) { System.out.println(text); }\n}\nclass TimestampLogger implements Logger {\n  private final Logger next;\n  TimestampLogger(Logger next) { this.next = next; }\n  public void log(String text) { next.log(\"TIME \" + text); }\n}"
    },
    {
      "kind": "True or false",
      "prompt": "**Q07.** In a bidirectional JPA association, the value of `mappedBy` is the SQL foreign-key column name.",
      "correct": "false",
      "memo": "**Correct answer: FALSE.** mappedBy names the owning-side Java property, not the physical database column.",
      "marks": 2,
      "truthOnly": true,
      "id": 7,
      "section": "SECTION ONE · TRUE OR FALSE",
      "snippet": "class Team {\n  @OneToMany(mappedBy = \"team\")\n  private List<Player> players;\n}\nclass Player {\n  @ManyToOne @JoinColumn(name = \"team_id\")\n  private Team team;\n}"
    },
    {
      "kind": "True or false",
      "prompt": "**Q08.** A Strategy implementation can be exchanged at runtime when the context delegates behavior through a common strategy interface.",
      "correct": "true",
      "memo": "**Correct answer: TRUE.** Strategy encapsulates interchangeable algorithms and commonly uses composition.",
      "marks": 2,
      "truthOnly": true,
      "id": 8,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q09.** Bridge separates an abstraction hierarchy from an implementation hierarchy so that they can develop independently within their contracts.",
      "correct": "true",
      "memo": "**Correct answer: TRUE.** Bridge composes an abstraction with an implementation interface instead of multiplying cross-product subclasses.",
      "marks": 2,
      "truthOnly": true,
      "id": 9,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q10.** The __________ pattern controls access to exactly one instance and normally exposes a global access point.",
      "blanks": 1,
      "accepted": [
        [
          "Singleton",
          "Singleton pattern"
        ]
      ],
      "memo": "**Correct answer: `Singleton`.** Singleton restricts object creation to one instance per the intended scope and offers an access method.",
      "marks": 2,
      "id": 10,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q11.** A class converts calls to an old library's incompatible interface into the interface your application expects. This is the __________ pattern.",
      "blanks": 1,
      "accepted": [
        [
          "Adapter",
          "Adapter pattern"
        ]
      ],
      "memo": "**Correct answer: `Adapter`.** Adapter translates one interface into another, allowing existing incompatible components to collaborate.",
      "marks": 2,
      "id": 11,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q12.** The Jakarta Persistence annotation placed on an entity's primary-key field is __________.",
      "blanks": 1,
      "accepted": [
        [
          "@Id",
          "Id"
        ]
      ],
      "memo": "**Correct answer: `@Id`.** @Id identifies the entity's primary key.",
      "marks": 2,
      "id": 12,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q13.** The SOLID principle that organizes a class around one cohesive reason to change is abbreviated __________.",
      "blanks": 1,
      "accepted": [
        [
          "SRP",
          "Single Responsibility Principle",
          "Single Responsibility"
        ]
      ],
      "memo": "**Correct answer: `SRP`.** SRP stands for Single Responsibility Principle.",
      "marks": 2,
      "id": 13,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q14.** Complete the Spring Security rule that checks the `ROLE_ADMIN` authority by convention: `.__________(\"ADMIN\")`.",
      "blanks": 1,
      "accepted": [
        [
          "hasRole",
          "hasRole()"
        ]
      ],
      "memo": "**Correct answer: `hasRole`.** hasRole(\"ADMIN\") typically checks for ROLE_ADMIN with the default role prefix.",
      "marks": 2,
      "id": 14,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q15.** In a Spring MVC handler, the annotation for binding `{orderId}` from a request URL to a Java parameter is __________.",
      "blanks": 1,
      "accepted": [
        [
          "@PathVariable",
          "PathVariable"
        ]
      ],
      "memo": "**Correct answer: `@PathVariable`.** @PathVariable binds a path-template variable such as /orders/{orderId}.",
      "marks": 2,
      "id": 15,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q16.** The __________ pattern defines small expression objects representing grammar rules that can be combined and evaluated.",
      "blanks": 1,
      "accepted": [
        [
          "Interpreter",
          "Interpreter pattern"
        ]
      ],
      "memo": "**Correct answer: `Interpreter`.** Interpreter models terminal and nonterminal expressions to evaluate a defined language.",
      "marks": 2,
      "id": 16,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q17.** The interface whose Java methods include `hasNext()` and `next()` is __________.",
      "blanks": 1,
      "accepted": [
        [
          "Iterator",
          "Iterator<T>",
          "java.util.Iterator"
        ]
      ],
      "memo": "**Correct answer: `Iterator`.** Iterator<T> traverses a sequence while retaining iteration state.",
      "marks": 2,
      "id": 17,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q18.** Each Invoice has exactly one Customer, but a Customer can have many invoices. The annotation on `Invoice.customer` is __________.",
      "blanks": 1,
      "accepted": [
        [
          "@ManyToOne",
          "ManyToOne"
        ]
      ],
      "memo": "**Correct answer: `@ManyToOne`.** The owning side on Invoice is typically a @ManyToOne association to Customer.",
      "marks": 2,
      "id": 18,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q19.** The pattern in which an element calls `visitor.visit(this)` is __________.",
      "blanks": 1,
      "accepted": [
        [
          "Visitor",
          "Visitor pattern"
        ]
      ],
      "memo": "**Correct answer: `Visitor`.** Visitor uses accept/visit to dispatch a separate operation according to the concrete element type.",
      "marks": 2,
      "id": 19,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q20.** The HTTP method normally used when requesting that a REST resource be removed is __________.",
      "blanks": 1,
      "accepted": [
        [
          "DELETE",
          "HTTP DELETE"
        ]
      ],
      "memo": "**Correct answer: `DELETE`.** DELETE requests removal of the resource identified by the URI.",
      "marks": 2,
      "id": 20,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q21.** A cloud provisioning app must create matching AWSCompute and AWSStorage objects, or matching AzureCompute and AzureStorage objects, without mixing providers. Which pattern best models this?",
      "options": [
        "Abstract Factory",
        "Command",
        "Iterator",
        "Strategy"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** Abstract Factory creates related product families behind a common factory interface.",
      "marks": 2,
      "id": 21,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q22.** A drawing app supports Rectangle, Circle and Polygon abstractions and separately supports SVG and Canvas renderers. You want to avoid one subclass for every shape–renderer combination. Use:",
      "options": [
        "Bridge",
        "Observer",
        "Builder",
        "Adapter"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** Bridge composes a shape abstraction with a renderer interface and allows each family to vary independently.",
      "marks": 2,
      "id": 22,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q23.** A chat tool needs a toolbar that queues `SendMessage`, `DeleteMessage` and `RetryMessage` operations without knowing each receiver's implementation. The best fit is:",
      "options": [
        "Singleton",
        "Command",
        "Visitor",
        "Decorator"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** Command encapsulates requests as objects that can be passed, stored and executed by an invoker.",
      "marks": 2,
      "id": 23,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q24.** Study the expression tree: `AND(IsActive, OR(IsAdmin, IsOwner))`. Which node is nonterminal?",
      "options": [
        "IsOwner",
        "OR",
        "IsActive",
        "IsAdmin"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** OR combines child expressions and therefore represents a nonterminal production in the expression tree.",
      "marks": 2,
      "id": 24,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q25.** You have 14 document classes and routinely add new operations such as analytics and export reports. Which approach minimizes edits to those document classes?",
      "options": [
        "Iterator, because hasNext performs reports",
        "Singleton, with one global document",
        "Observer, with one subject per operation",
        "Visitor, with one new visitor per operation"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** Visitor separates new operations from a stable hierarchy of elements.",
      "marks": 2,
      "id": 25,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q26.** A weather station changes temperature and must notify dashboards, recorders and alert systems without importing their concrete classes. Choose:",
      "options": [
        "Strategy",
        "Observer",
        "Flyweight",
        "Builder"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** Observer provides a subject/subscriber update mechanism and decouples the producer from subscribers.",
      "marks": 2,
      "id": 26,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q27.** This design allows a printer to switch at runtime between FastCompression and MaximumCompression. What relationship is central?",
      "options": [
        "The context holds a CompressionStrategy reference",
        "Every algorithm registers as an Observer",
        "The compression algorithms must be static",
        "The context inherits both compression classes"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** Strategy uses a HAS-A relationship to the algorithm interface, not multiple inheritance.",
      "marks": 2,
      "id": 27,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q28.** What is printed by the following Java fragment?",
      "options": [
        "A",
        "AB",
        "BA",
        "B"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** Outer.send first calls Inner.send, which prints A; then it prints B, resulting in AB.",
      "snippet": "interface N { void send(); }\nclass Inner implements N { public void send(){ System.out.print(\"A\"); } }\nclass Outer implements N {\n private final N n;\n Outer(N n){ this.n=n; }\n public void send(){ n.send(); System.out.print(\"B\"); }\n}\nnew Outer(new Inner()).send();",
      "marks": 2,
      "id": 28,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q29.** Two independent `Iterator<String>` objects are created from the same list `[\"a\", \"b\"]`. Iterator x calls next() twice, then iterator y calls next() once. What is the last value?",
      "options": [
        "a",
        "null",
        "NoSuchElementException",
        "b"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** Each iterator has its own cursor, so y.next() returns the first element, a.",
      "marks": 2,
      "id": 29,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q30.** A game renders 25,000 drones of six hardware types. Shared immutable models are stored once; each drone retains its own ID and position. Which pattern is indicated?",
      "options": [
        "Bridge",
        "Flyweight",
        "Visitor",
        "Abstract Factory"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** Flyweight shares intrinsic state such as model meshes or configurations and leaves unique state per drone.",
      "marks": 2,
      "id": 30,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q31.** A complex `CourseConfig` has required title but optional lecturer, venue, duration, language and assessment rules. Developers want readable chained construction. Choose:",
      "options": [
        "Visitor",
        "Observer",
        "Singleton",
        "Builder"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** Builder constructs complex objects step-by-step and is useful with many optional parameters.",
      "marks": 2,
      "id": 31,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q32.** A creator class defines `createReport()` and its subclasses produce PDFReport and CSVReport respectively. Which design?",
      "options": [
        "Flyweight",
        "Factory Method",
        "Iterator",
        "Decorator"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** Factory Method delegates product selection/creation to overriding creator subclasses.",
      "marks": 2,
      "id": 32,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q33.** A single `FileConverter.create(\"CSV\")` routine returns the corresponding concrete converter. No creator subclasses are involved. Which name best fits?",
      "options": [
        "Bridge",
        "Factory Method only",
        "Abstract Factory",
        "Simple Factory"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** A central creation function choosing a concrete type is conventionally called Simple Factory.",
      "marks": 2,
      "id": 33,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q34.** An external SMS library provides `submitSms(number, body)` but the app expects `Notifier.send(message)`. You cannot edit the library. Use:",
      "options": [
        "Adapter",
        "Flyweight",
        "Observer",
        "Command"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** An adapter implements the expected Notifier contract and translates calls to the legacy API.",
      "marks": 2,
      "id": 34,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q35.** A legacy system must expose the same one instance of `ConfigurationRegistry` to all callers. Which implementation detail is common?",
      "options": [
        "One subclass per request",
        "No fields",
        "Private constructor and static access point",
        "A public constructor"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** A private constructor limits external construction; a static accessor exposes the shared singleton.",
      "marks": 2,
      "id": 35,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q36.** `ReceiptService` both calculates tax, writes to the database, produces HTML and sends emails. Which SOLID principle is most visibly at risk?",
      "options": [
        "Liskov Substitution",
        "Interface Segregation",
        "Dependency Inversion",
        "Single Responsibility"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** Unrelated responsibilities have separate change pressures, so the class lacks one cohesive reason to change.",
      "marks": 2,
      "id": 36,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q37.** `Checkout` receives an `FeePolicy` interface. Adding `HolidayFeePolicy` requires no changes to `Checkout`. This most directly supports:",
      "options": [
        "SRP only",
        "LSP only",
        "ISP",
        "OCP"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** Checkout is closed to provider-specific modification yet open to new policy implementations.",
      "marks": 2,
      "id": 37,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q38.** A `Vehicle` base class contract allows `refuel()` for every vehicle, but ElectricVehicle overrides it to throw UnsupportedOperationException. The main behavioral problem is:",
      "options": [
        "DIP",
        "SRP",
        "OCP only",
        "LSP"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** ElectricVehicle does not honor a valid operation promised by Vehicle. Use capabilities or a better abstraction.",
      "marks": 2,
      "id": 38,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q39.** A printer-only client depends on an OfficeDevice interface exposing `print`, `scan`, `fax`, `staple` and `bind`. What is the clearest improvement?",
      "options": [
        "Subclass the printer five times",
        "One giant abstract class",
        "Depend on a focused Printer interface",
        "More methods"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** ISP advocates small client-specific contracts instead of depending on unrelated operations.",
      "marks": 2,
      "id": 39,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q40.** An OrderService creates `new MySqlOrderRepository()` inside the constructor. You want business rules independent from persistence. Which change is strongest?",
      "options": [
        "Add more MySQL-specific fields",
        "Move business logic into SQL strings",
        "Make OrderService a singleton",
        "Inject OrderRepository interface"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** DIP puts high-level and low-level code behind an appropriate abstraction.",
      "marks": 2,
      "id": 40,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q41.** A Spring endpoint has `.requestMatchers(\"/api/admin/**\").hasRole(\"ADMIN\")`. Which default authority is checked?",
      "options": [
        "ROLE_ADMIN",
        "JWT_ADMIN",
        "SCOPE_ADMIN",
        "ADMIN with no prefix"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** Under default Spring Security semantics, hasRole(\"ADMIN\") checks the ROLE_ADMIN authority.",
      "marks": 2,
      "id": 41,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "snippet": "http.authorizeHttpRequests(auth -> auth\n    .requestMatchers(\"/api/admin/**\").hasRole(\"ADMIN\")\n    .anyRequest().authenticated());",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q42.** A signed JWT is received from a frontend. Which part is used to check that its signed content has not been modified?",
      "options": [
        "Header only",
        "Expires claim",
        "Signature",
        "Audience"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** The signature is verified against trusted signing material. Claims also need their own validation.",
      "marks": 2,
      "id": 42,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q43.** A React app at `http://localhost:5173` is blocked from reading an API response served by `http://localhost:8080` due to browser cross-origin rules. Which configuration is relevant?",
      "options": [
        "Flyweight cache",
        "Appropriate CORS policy on the API",
        "EntityManager flush",
        "Transaction isolation"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** The server must permit the requesting origin and relevant methods/headers through CORS configuration.",
      "marks": 2,
      "id": 43,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q44.** A browser sends a state-changing form to a session-authenticated site from an attacker-controlled origin. Which defense directly addresses this threat?",
      "options": [
        "@GeneratedValue",
        "CSRF token or equivalent effective CSRF defense",
        "Iterator cursor",
        "@ManyToOne"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** Cross-site request forgery exploits automatically attached browser authentication, such as session cookies.",
      "marks": 2,
      "id": 44,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q45.** A validly authenticated user lacks the ADMIN authority for `/api/admin/reports`. Which response is typical for an API?",
      "options": [
        "301 Moved Permanently",
        "201 Created",
        "403 Forbidden",
        "200 OK"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** Access is forbidden to an authenticated principal without required authorization.",
      "marks": 2,
      "id": 45,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q46.** A JPA application loads a Student entity using its ID. Which annotation tells JPA which property is the primary key?",
      "options": [
        "@Column",
        "@Transient",
        "@Id",
        "@GetMapping"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** @Id identifies the entity's primary key.",
      "marks": 2,
      "id": 46,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q47.** In a bidirectional relationship, `Order.customer` owns the association. What should `Customer.orders` usually declare?",
      "options": [
        "@OneToMany(mappedBy=\"customer\")",
        "@JoinColumn on every item",
        "@ManyToOne",
        "@Column(name=\"customer_id\")"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** The inverse side uses mappedBy pointing to the owning-side Java association property.",
      "marks": 2,
      "id": 47,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q48.** Looping over 500 Orders, then triggering one extra SQL query per Order to load its Customer, illustrates:",
      "options": [
        "N+1 selects",
        "Dependency inversion",
        "Double dispatch",
        "Simple Factory"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** N+1 occurs when an initial list fetch is followed by many per-item associated fetches.",
      "marks": 2,
      "id": 48,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "snippet": "List<Order> orders = orderRepository.findAll();\nfor (Order order : orders) {\n    System.out.println(order.getCustomer().getName());\n}",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q49.** Which Spring MVC annotation maps HTTP GET requests to a Java handler method?",
      "options": [
        "@Entity",
        "@GeneratedValue",
        "@GetMapping",
        "@RequestBody"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** @GetMapping maps GET requests to controller handler methods.",
      "marks": 2,
      "id": 49,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q50.** In a REST API, which annotation binds a JSON request body to a Java DTO parameter?",
      "options": [
        "@ManyToOne",
        "@Column",
        "@RequestBody",
        "@Id"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** @RequestBody reads and converts the request body into the handler's parameter type.",
      "marks": 2,
      "id": 50,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    }
  ],
  "totalMarks": 100
};
