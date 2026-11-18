window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-32-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 32,
  "title": "ADP372S · Mock Exam 02",
  "session": 1,
  "limitSeconds": 7200,
  "version": 3,
  "group": "adp-mock",
  "intro": "100-mark integrated mock built to mirror the supplied ADP372S exam: 9 true/false, 11 fill-ins and 30 mixed MCQs. Covers patterns, SOLID, Security, JPA and REST.",
  "source": "New original practice questions following the structure and difficulty of the user's ADP372S November mock PDF, not a verbatim copy.",
  "questions": [
    {
      "kind": "True or false",
      "prompt": "**Q01.** In Observer, one subject can keep references to multiple subscribed observers and notify them when its state changes.",
      "correct": "true",
      "memo": "**Correct answer: TRUE.** Observer models subject-to-subscriber notification, commonly a one-to-many relationship.",
      "marks": 2,
      "truthOnly": true,
      "id": 1,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q02.** Builder requires all optional object properties to be supplied in a single positional constructor call.",
      "correct": "false",
      "memo": "**Correct answer: FALSE.** Builder commonly supports incremental and readable configuration, avoiding long positional constructors.",
      "marks": 2,
      "truthOnly": true,
      "id": 2,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q03.** In nested decorators, reversing the order of wrappers can change the behaviour of the final object.",
      "correct": "true",
      "memo": "**Correct answer: TRUE.** Wrappers execute in a nesting order; changing the order can alter logging, transformations or other effects.",
      "marks": 2,
      "truthOnly": true,
      "id": 3,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q04.** Dependency Inversion recommends that high-level business modules import concrete infrastructure classes instead of abstractions.",
      "correct": "false",
      "memo": "**Correct answer: FALSE.** High- and low-level modules should depend on stable abstractions; low-level implementation details should not control policy.",
      "marks": 2,
      "truthOnly": true,
      "id": 4,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q05.** With a suitable active transaction, JPA can persist changes to a managed entity through dirty checking.",
      "correct": "true",
      "memo": "**Correct answer: TRUE.** Changes to managed entities are normally synchronized during flush/commit.",
      "marks": 2,
      "truthOnly": true,
      "id": 5,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q06.** Reading a JWT's payload without verifying its signature proves the token is authentic.",
      "correct": "false",
      "memo": "**Correct answer: FALSE.** Decoded JWT claims can be forged; signature and claim validation establish trust.",
      "marks": 2,
      "truthOnly": true,
      "id": 6,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q07.** Two iterators created for the same collection can track different current positions.",
      "correct": "true",
      "memo": "**Correct answer: TRUE.** Each iterator normally owns its own cursor/traversal state.",
      "marks": 2,
      "truthOnly": true,
      "id": 7,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "True or false",
      "prompt": "**Q08.** A subclass may reject valid inputs guaranteed by its superclass without affecting Liskov Substitution.",
      "correct": "false",
      "memo": "**Correct answer: FALSE.** Strengthening preconditions breaks the guarantees expected by clients of the base type.",
      "marks": 2,
      "truthOnly": true,
      "id": 8,
      "section": "SECTION ONE · TRUE OR FALSE",
      "snippet": "class BaseStore {\n  void save(String value) { /* records all valid values */ }\n}\nclass LimitedStore extends BaseStore {\n  @Override void save(String value) {\n    if (value.length() > 5) throw new IllegalArgumentException();\n  }\n}"
    },
    {
      "kind": "True or false",
      "prompt": "**Q09.** The default fetch type for a JPA `@OneToMany` association is LAZY.",
      "correct": "true",
      "memo": "**Correct answer: TRUE.** JPA defines LAZY as the default for one-to-many collections.",
      "marks": 2,
      "truthOnly": true,
      "id": 9,
      "section": "SECTION ONE · TRUE OR FALSE"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q10.** The creational pattern where subclasses can override a method to decide which concrete product is instantiated is __________.",
      "blanks": 1,
      "accepted": [
        [
          "Factory Method",
          "Factory Method pattern"
        ]
      ],
      "memo": "**Correct answer: `Factory Method`.** Factory Method defines a product-creation method whose implementation may vary in subclasses.",
      "marks": 2,
      "id": 10,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q11.** The Spring MVC mapping annotation for a controller method responding to HTTP POST requests is __________.",
      "blanks": 1,
      "accepted": [
        [
          "@PostMapping",
          "PostMapping"
        ]
      ],
      "memo": "**Correct answer: `@PostMapping`.** @PostMapping is a specialized mapping annotation for POST handlers.",
      "marks": 2,
      "id": 11,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q12.** The SOLID principle saying derived objects must be safely substitutable for base objects is abbreviated __________.",
      "blanks": 1,
      "accepted": [
        [
          "LSP",
          "Liskov Substitution Principle",
          "Liskov Substitution"
        ]
      ],
      "memo": "**Correct answer: `LSP`.** LSP is the Liskov Substitution Principle.",
      "marks": 2,
      "id": 12,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q13.** For a `Department` with many `Employee` objects, the annotation typically placed on `Department.employees` is __________.",
      "blanks": 1,
      "accepted": [
        [
          "@OneToMany",
          "OneToMany"
        ]
      ],
      "memo": "**Correct answer: `@OneToMany`.** The collection-valued side of a one-to-many association is annotated @OneToMany.",
      "marks": 2,
      "id": 13,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q14.** The pattern that translates a legacy interface into one expected by a new client is __________.",
      "blanks": 1,
      "accepted": [
        [
          "Adapter",
          "Adapter pattern"
        ]
      ],
      "memo": "**Correct answer: `Adapter`.** An Adapter converts interface calls without modifying the existing dependency.",
      "marks": 2,
      "id": 14,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q15.** Method-level Spring Security authorization expressions can be declared using the annotation __________.",
      "blanks": 1,
      "accepted": [
        [
          "@PreAuthorize",
          "PreAuthorize"
        ]
      ],
      "memo": "**Correct answer: `@PreAuthorize`.** @PreAuthorize evaluates an authorization expression prior to method invocation when method security is enabled.",
      "marks": 2,
      "id": 15,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q16.** The pattern that encapsulates different pricing algorithms behind a common interface for switching at runtime is __________.",
      "blanks": 1,
      "accepted": [
        [
          "Strategy",
          "Strategy pattern"
        ]
      ],
      "memo": "**Correct answer: `Strategy`.** Strategy encapsulates interchangeable algorithms in separate implementations.",
      "marks": 2,
      "id": 16,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q17.** The JPA annotation used on an association to name its foreign-key column explicitly is __________.",
      "blanks": 1,
      "accepted": [
        [
          "@JoinColumn",
          "JoinColumn"
        ]
      ],
      "memo": "**Correct answer: `@JoinColumn`.** @JoinColumn specifies the join column for an owning association.",
      "marks": 2,
      "id": 17,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q18.** The behavioural pattern that packages a request as an object so a menu button can queue or undo it is __________.",
      "blanks": 1,
      "accepted": [
        [
          "Command",
          "Command pattern"
        ]
      ],
      "memo": "**Correct answer: `Command`.** Command stores a receiver, an operation and sometimes undo information as an executable object.",
      "marks": 2,
      "id": 18,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q19.** The HTTP method commonly used to replace the complete representation of a REST resource is __________.",
      "blanks": 1,
      "accepted": [
        [
          "PUT",
          "HTTP PUT"
        ]
      ],
      "memo": "**Correct answer: `PUT`.** PUT commonly creates or replaces the representation at the specified URI; semantics depend on endpoint design.",
      "marks": 2,
      "id": 19,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Fill in the blanks",
      "prompt": "**Q20.** The JPA option `__________ = true` deletes eligible child entities removed from their parent's owning association.",
      "blanks": 1,
      "accepted": [
        [
          "orphanRemoval",
          "orphanRemoval()"
        ]
      ],
      "memo": "**Correct answer: `orphanRemoval`.** orphanRemoval removes child entities orphaned from a configured parent association.",
      "marks": 2,
      "id": 20,
      "section": "SECTION TWO · FILL IN THE BLANKS"
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q21.** A game supports three distinct weapon types. The design adds a `SoundVisitor` with `visit(Uzi)`, `visit(Shotgun)` and `visit(Pistol)` without editing each weapon class. What makes this possible?",
      "options": [
        "Double dispatch through each gun's accept(visitor) method",
        "A single global weapon class",
        "Automatic event notification",
        "SQL inheritance"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** Each element's accept calls visitor.visit(this), selecting the appropriate type-specific overload.",
      "marks": 2,
      "id": 21,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q22.** The team then adds a new LaserGun type to the same Visitor hierarchy. What maintenance cost is typical?",
      "options": [
        "The visitor becomes a Factory Method",
        "All visitors disappear automatically",
        "All existing guns must be rewritten",
        "The visitor contract and existing concrete visitors need to handle LaserGun"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** Adding an element type generally requires a new visit overload and updates to existing concrete visitors.",
      "marks": 2,
      "id": 22,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q23.** A map component has `.iterator()` but the UI cannot safely assume its data storage is an indexed array. What is Iterator's main benefit?",
      "options": [
        "Forces a fixed sorting algorithm",
        "Changes every element's class",
        "Lets callers traverse through a stable interface independent of storage details",
        "Automatically makes the collection thread-safe"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** Iterator separates traversal from the concrete representation of the collection.",
      "marks": 2,
      "id": 23,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q24.** A robot simulation shares immutable model textures between 10,000 instances while keeping per-instance coordinates outside the shared type. Which state is intrinsic?",
      "options": [
        "The shared model texture",
        "Each robot's current owner",
        "Each robot's unique serial number",
        "Each robot's current position"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** Intrinsic state is shared, stable data such as common assets/configuration; unique positions and IDs remain extrinsic.",
      "marks": 2,
      "id": 24,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q25.** A parser creates `AndExpression(FlagIsEnabled, NotExpression(IsSuspended))`. Why is `FlagIsEnabled` a terminal expression?",
      "options": [
        "It evaluates a basic condition without recursively evaluating other Expression nodes",
        "It holds a list of Expression children",
        "It is the only nonterminal",
        "It creates an SQL table"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** Terminals evaluate leaf-level grammar constructs; composite expressions combine child nodes.",
      "marks": 2,
      "id": 25,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q26.** A `Meal` interface is wrapped by `ExtraCheese`, then `GiftWrap`, each adding to `price()`. Which design is this?",
      "options": [
        "Decorator",
        "Bridge",
        "Singleton",
        "Abstract Factory"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** Decorators implement the same component interface and wrap another component to add behavior.",
      "marks": 2,
      "id": 26,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q27.** What prints when this example executes?",
      "options": [
        "one/two",
        "two/one",
        "one/one",
        "two/two"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** The outermost PrefixDecorator runs first and then delegates to the wrapped decorator.",
      "snippet": "interface Step { String run(); }\nclass Base implements Step { public String run(){return \"one\";} }\nclass Prefix implements Step {\n  private final Step s;\n  Prefix(Step s){this.s=s;}\n  public String run(){return \"two/\" + s.run();}\n}\nSystem.out.println(new Prefix(new Base()).run());",
      "marks": 2,
      "id": 27,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q28.** A `TaskManager` has `StartButton` and `StopButton` UI controls that invoke independently queued operations on a server task. Which decoupling belongs to Command?",
      "options": [
        "Each command must be a Singleton",
        "Receiver never performs operations",
        "Invokers depend on a Command interface, not concrete operation details",
        "Invokers know the task receiver's concrete fields"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** Invoker controls when to execute but depends only on Command.execute rather than receiver details.",
      "marks": 2,
      "id": 28,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q29.** A device supports several protocols and models. The product's high-level remote-control API and low-level device-driver API vary separately. Which pattern is best suited?",
      "options": [
        "Bridge",
        "Builder",
        "Strategy only",
        "Visitor"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** Bridge composes the remote abstraction with a device implementation hierarchy.",
      "marks": 2,
      "id": 29,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q30.** A `SceneFactory` exposes `createButton()` and `createCheckbox()` for two consistent visual themes. Choose:",
      "options": [
        "Command",
        "Abstract Factory",
        "Iterator",
        "Simple Factory only"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** Abstract Factory creates related products from consistent families.",
      "marks": 2,
      "id": 30,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q31.** A legacy parser requires `load(String)` while a new API requires `parse(InputStream)`. A wrapper translates one to the other. Which pattern?",
      "options": [
        "Adapter",
        "Decorator",
        "Interpreter",
        "Observer"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** Adapter changes the interface expected by a client while reusing the old code.",
      "marks": 2,
      "id": 31,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q32.** A production app needs one shared `SettingsManager`. A naïve `static SettingsManager instance;` is created lazily without synchronization on multiple threads. What's the danger?",
      "options": [
        "All methods become synchronized automatically",
        "Object creation becomes compile-time only",
        "Settings are always immutable",
        "Two threads may create separate instances during a race"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** Unsafe lazy initialization can race, violating intended singleton uniqueness. Use safe initialization strategies.",
      "marks": 2,
      "id": 32,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q33.** Why can making a single `Customer` class handle CSV import, PDF export, validation and emailing be troublesome?",
      "options": [
        "Java requires one method per class",
        "Unrelated responsibilities can change for independent reasons",
        "It automatically improves reusability",
        "It ensures OCP"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** SRP is about cohesive responsibilities/reasons for change.",
      "marks": 2,
      "id": 33,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q34.** You add `BankTransferProcessor` implementing `PaymentProcessor` while `Checkout` depends only on the interface. Which principle does this primarily facilitate?",
      "options": [
        "ISP requires twenty methods",
        "SRP forbids this",
        "OCP",
        "LSP is impossible"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** New implementations extend behavior without editing stable checkout decision logic.",
      "marks": 2,
      "id": 34,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q35.** Suppose a `Bird` base type exposes `fly()` as a guaranteed operation but a `Penguin` subtype throws whenever it is called. Which principle is violated?",
      "options": [
        "LSP",
        "ISP only",
        "OCP only",
        "DIP only"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** Penguin cannot satisfy the behavior guaranteed by the general Bird contract.",
      "marks": 2,
      "id": 35,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q36.** The `Printable` interface has `print()`, `scan()` and `fax()`; a thermal label printer throws for the latter two. What is the best redesign?",
      "options": [
        "Require all printers to fax",
        "Remove all interfaces",
        "Add an `unsupported` flag to every caller",
        "Split focused Printer/Scanner/Fax capabilities"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** ISP lets clients depend only on supported operations; LSP problems from throwing unsupported methods are reduced.",
      "marks": 2,
      "id": 36,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q37.** `ReportService` directly initializes `new S3Uploader()`. Which change best applies DIP?",
      "options": [
        "Move the constructor into the controller",
        "Create one subclass for every report",
        "Make S3Uploader static",
        "Inject a Uploader interface, implemented by S3Uploader"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** High-level report logic should depend on a stable abstraction supplied by configuration.",
      "marks": 2,
      "id": 37,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "snippet": "interface MessageSender { void send(String text); }\nclass AlertService {\n  private final MessageSender sender;\n  AlertService(MessageSender sender) { this.sender = sender; }\n  void alert(String text) { sender.send(text); }\n}",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q38.** Which code correctly configures public access to `/health` and authentication for other requests?",
      "options": [
        "`.requestMatchers(\"/health\").hasRole(\"ADMIN\")`",
        "`.anyRequest().denyAll()`",
        "`.requestMatchers(\"/health\").permitAll().anyRequest().authenticated()`",
        "`.anyRequest().permitAll().requestMatchers(\"/health\").authenticated()`"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** Specific public matcher before the authenticated catch-all implements the stated policy.",
      "marks": 2,
      "id": 38,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q39.** With session-based browser login, why is CSRF protection still relevant even when passwords are hashed and TLS is enabled?",
      "options": [
        "Browsers automatically attach session cookies to some cross-site requests",
        "Hashed passwords are transmitted in every request",
        "CSRF is part of a password encoding algorithm",
        "TLS turns unsafe POST into GET"
      ],
      "correct": "A",
      "memo": "**Correct answer: A.** CSRF targets an authenticated browser's ambient session cookie, not password hashing or transport encryption.",
      "marks": 2,
      "id": 39,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q40.** A resource-server API accepts signed JWTs. Which validation is critical before trusting a claim such as `scope`?",
      "options": [
        "Decode Base64 and ignore the signature",
        "Compare token length to ID size",
        "Read it as an unauthenticated String only",
        "Validate signature and relevant expiry/issuer/audience rules"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** Token authenticity and valid claims must be established before using its authorities.",
      "marks": 2,
      "id": 40,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q41.** A `SecurityFilterChain` uses `.anyRequest().authenticated()`. What requirement does this enforce by itself?",
      "options": [
        "Every user must be ADMIN",
        "Only POST is permitted",
        "An authenticated principal is required, not a particular role",
        "Requests are denied without HTTPS by definition"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** authenticated() checks the authentication status; add role/authority rules separately.",
      "marks": 2,
      "id": 41,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q42.** A `@PreAuthorize(\"hasRole('ADMIN')\")` annotation is present but method security was never enabled. What should be checked?",
      "options": [
        "Replace hasRole with SQL",
        "Enable method security, e.g. @EnableMethodSecurity",
        "Call EntityManager.flush",
        "Add @Entity to the controller"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** Method security needs the corresponding advice/interceptor infrastructure.",
      "marks": 2,
      "id": 42,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q43.** A Spring app receives an Authorization header containing a bearer token but no cookies. Which token-related header format is conventional?",
      "options": [
        "Content-Type: TOKEN xyz",
        "Authorization: Bearer xyz",
        "Origin: Bearer xyz",
        "Accept: Bearer xyz"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** Bearer access tokens are commonly supplied using the Authorization header.",
      "marks": 2,
      "id": 43,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "snippet": "http.authorizeHttpRequests(auth -> auth\n  .requestMatchers(\"/public/**\").permitAll()\n  .anyRequest().authenticated());",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q44.** In a JPA bidirectional association, which side determines the foreign-key mapping?",
      "options": [
        "The Java class with more methods",
        "Always the @OneToMany side",
        "The side whose field name is alphabetically first",
        "The owning association side, often the @ManyToOne field"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** JPA ownership determines updates to the underlying join column/association mapping.",
      "marks": 2,
      "id": 44,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "snippet": "class Order {\n  @ManyToOne\n  @JoinColumn(name = \"customer_id\")\n  private Customer customer;\n}",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q45.** `@ManyToOne` has which default fetch behavior under the JPA specification?",
      "options": [
        "LAZY",
        "EAGER",
        "NEVER",
        "DETACHED"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** The JPA default for @ManyToOne is EAGER; many projects choose explicit LAZY for performance.",
      "marks": 2,
      "id": 45,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q46.** A service loads an Order entity in a transaction, changes `status`, then commits without another save. What mechanism can persist the change?",
      "options": [
        "Simple Factory",
        "Observer subscription",
        "@CrossOrigin",
        "Dirty checking"
      ],
      "correct": "D",
      "memo": "**Correct answer: D.** JPA dirty checking syncs managed entity changes at flush or transaction commit.",
      "marks": 2,
      "id": 46,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q47.** A JPA entity field uses `@Version`. What is its main purpose?",
      "options": [
        "Enable automatic JWT rotation",
        "Detect conflicting concurrent updates (optimistic locking)",
        "Guarantee faster page queries",
        "Select the primary key"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** Version fields support optimistic concurrency control.",
      "marks": 2,
      "id": 47,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q48.** What does `PageRequest.of(0, 25)` request?",
      "options": [
        "All results",
        "Items starting at index 25 only",
        "First zero-based page, up to 25 results",
        "Twenty-five pages of one item"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** Spring Data Pageable page numbering is zero based.",
      "marks": 2,
      "id": 48,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q49.** A Spring MVC endpoint maps `GET /orders/{id}`. Which annotation binds `{id}` to a method argument?",
      "options": [
        "@RequestBody",
        "@PathVariable",
        "@Table",
        "@GeneratedValue"
      ],
      "correct": "B",
      "memo": "**Correct answer: B.** @PathVariable reads a URI-template path parameter.",
      "marks": 2,
      "id": 49,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    },
    {
      "kind": "Multiple choice",
      "prompt": "**Q50.** A REST API wants to replace an existing order resource at a known URI using the client's complete representation. Which HTTP method commonly expresses this intent?",
      "options": [
        "TRACE",
        "OPTIONS",
        "PUT",
        "HEAD"
      ],
      "correct": "C",
      "memo": "**Correct answer: C.** PUT is commonly used for full resource replacement at a known URI.",
      "marks": 2,
      "id": 50,
      "section": "SECTION THREE · MULTIPLE CHOICE",
      "fullMarksOnCorrect": true
    }
  ],
  "totalMarks": 100
};
