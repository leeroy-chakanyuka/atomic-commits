window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-30-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 30,
  "title": "Spring Data JPA · Mega Paper",
  "session": 1,
  "limitSeconds": 7200,
  "version": 3,
  "group": "spring-data-jpa",
  "intro": "80 challenging mixed Spring Data JPA questions from four sets: entities, mappings, relations, transactions, repositories, JPQL and performance.",
  "source": "Original 80 questions reused and interleaved from the four topic papers in this section; option order rebalanced.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An entity is annotated `@Entity`, has an identifier, and is persisted through an EntityManager. What does `@Entity` primarily designate?",
      "options": [
        "A thread pool",
        "A CSS component",
        "A class that participates in JPA persistence mapping",
        "A REST controller"
      ],
      "correct": "C",
      "memo": "@Entity marks a persistent domain type managed through JPA mapping; it doesn't make the class a controller or repository.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Each `Order` belongs to exactly one `Customer`, while a customer has many orders. Which mapping belongs on `Order.customer`?",
      "options": [
        "`@ElementCollection`",
        "`@ManyToOne`",
        "`@OneToMany`",
        "`@ManyToMany`"
      ],
      "correct": "B",
      "memo": "Each order references one customer, and many orders may reference the same customer. The many-to-one side typically holds the FK.",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A service method needs to update two entities atomically. What Spring annotation commonly defines the transaction boundary?",
      "options": [
        "`@Transactional`",
        "`@GeneratedValue`",
        "`@PathVariable`",
        "`@RestController`"
      ],
      "correct": "A",
      "memo": "@Transactional defines a Spring-managed transaction boundary when transaction management is configured and the method is intercepted.",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `StudentRepository extends JpaRepository<Student, Long>`. What does `Long` represent?",
      "options": [
        "The database page size",
        "The HTTP response code",
        "The repository name",
        "The entity primary-key type"
      ],
      "correct": "D",
      "memo": "JpaRepository<T, ID> uses the entity type and identifier type as generic parameters.",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "True or false",
      "prompt": "**True/False:** A transient entity is automatically dirty-checked by the EntityManager as soon as the Java constructor finishes.",
      "correct": "false",
      "memo": "Dirty checking applies to managed entities in a persistence context, not arbitrary new Java objects.",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** `Order` has `@ManyToOne @JoinColumn(name=\"customer_id\") Customer customer`. What does the join-column name refer to?",
      "options": [
        "A Java package name",
        "A new servlet endpoint",
        "The Customer entity's class name",
        "The foreign key column on the Order table (under ordinary mapping)"
      ],
      "correct": "D",
      "memo": "The owning many-to-one association typically maps a foreign-key column in the Order table.",
      "snippet": "@ManyToOne(fetch = FetchType.LAZY)\n@JoinColumn(name = \"customer_id\")\nprivate Customer customer;",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "True or false",
      "prompt": "**True/False:** Calling EntityManager.flush() is identical to committing the enclosing transaction.",
      "correct": "false",
      "memo": "Flush writes pending SQL but does not commit; a later rollback can still undo it.",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Code tracing:** A Spring Data repository receives `PageRequest.of(0, 10)`. Which page is being requested?",
      "options": [
        "Page 1 using a one-based index",
        "All rows regardless of size",
        "The first page, containing up to 10 results",
        "The tenth page, containing zero results"
      ],
      "correct": "C",
      "memo": "Spring Data pagination uses zero-based page indexes; PageRequest.of(0,10) requests the first page of size 10.",
      "snippet": "Pageable pageable = PageRequest.of(0, 10);\nPage<Student> page = repository.findAll(pageable);",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** A JPA entity has `@Id` on a field. Which annotation is commonly added to use database-generated numeric identifiers?",
      "options": [
        "`@Transactional`",
        "`@GeneratedValue`",
        "`@RestController`",
        "`@JsonIgnore`"
      ],
      "correct": "B",
      "memo": "@GeneratedValue configures a generation strategy for entity primary keys. Its strategy should fit the database.",
      "snippet": "@Entity\nclass Student {\n  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)\n  private Long id;\n}",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** In a bidirectional Customer/Order one-to-many relationship, `Order.customer` owns the FK mapping. What should Customer.orders use?",
      "options": [
        "`@OneToMany(mappedBy = \"customer\")`",
        "`@ManyToOne(mappedBy = \"orders\")`",
        "`@Column(unique = true)`",
        "`@Transient`"
      ],
      "correct": "A",
      "memo": "mappedBy names the owning property on Order. It prevents a second independently owned association mapping.",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Code reasoning:** A managed account's balance changes inside a read-write transaction without a repository.save call. At commit, how might JPA write the new value?",
      "options": [
        "Through dirty checking and flush",
        "It can't without explicitly calling save in all cases",
        "Through HTTP CSRF protection",
        "By updating a JavaScript cache"
      ],
      "correct": "A",
      "memo": "JPA tracks managed entity state changes and generates updates at flush/commit.",
      "snippet": "@Transactional\npublic void rename(Long id) {\n  Student student = repository.findById(id).orElseThrow();\n  student.setName(\"Updated\");\n}",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** You need the total number of rows matching a query, the number of pages, and the current page content. Which Spring Data return type is most suitable?",
      "options": [
        "`Optional<T>`",
        "`void`",
        "`EntityManagerFactory`",
        "`Page<T>`"
      ],
      "correct": "D",
      "memo": "Page includes page content and count metadata, often requiring a separate count query.",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A fresh `Student` object created with `new Student()` has not been persisted or loaded. What lifecycle state is it in?",
      "options": [
        "Managed",
        "Detached",
        "New / transient",
        "Removed"
      ],
      "correct": "C",
      "memo": "A new entity instance is transient until it becomes managed through persist or related operations.",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "True or false",
      "prompt": "**True/False:** The `mappedBy` attribute on the inverse side refers to the owning-side Java field/property, not a raw SQL column name.",
      "correct": "true",
      "memo": "mappedBy targets an entity attribute such as Order.customer.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** One application writes two rows within a transaction. The second operation throws an unchecked RuntimeException that escapes the method. With default Spring declarative transaction behavior, what usually happens?",
      "options": [
        "Only the new object becomes detached",
        "Transaction rolls back",
        "Both rows must remain committed",
        "The exception is silently ignored"
      ],
      "correct": "B",
      "memo": "Default Spring @Transactional rolls back on unchecked exceptions (RuntimeException and Error), absent custom rules.",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** `PageRequest.of(0, 10)` uses a zero-based first-page index.",
      "correct": "true",
      "memo": "The first page is index 0 in Spring Data Pageable.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A managed entity is loaded in a transaction. A setter changes its name, and the transaction commits without calling repository.save on that object again. Why can the update reach the database?",
      "options": [
        "Changes persist only when the garbage collector runs",
        "JPA dirty checking detects changes to managed entities and flushes them",
        "Java automatically updates every String in a database",
        "A servlet filter saves entities"
      ],
      "correct": "B",
      "memo": "Within a suitable transactional persistence context, dirty checking synchronizes managed entity state during flush/commit.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** A developer writes `@OneToMany(mappedBy=\"customer_id\")` on Customer.orders while Order's Java association field is named `customer`. What's wrong?",
      "options": [
        "mappedBy references the Java association property name, not the database column",
        "mappedBy can only be used on basic Strings",
        "mappedBy must be a table name",
        "There is no error"
      ],
      "correct": "A",
      "memo": "In bidirectional mapping, mappedBy names the owning-side entity attribute: customer, not its database FK column.",
      "snippet": "class Customer {\n  @OneToMany(mappedBy = \"customer_id\")\n  private List<Order> orders;\n}\nclass Order {\n  @ManyToOne @JoinColumn(name = \"customer_id\")\n  private Customer customer;\n}",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A checked exception escapes a `@Transactional` method. No rollbackFor is configured. What is the typical Spring default?",
      "options": [
        "It stops the JVM",
        "The compiler converts the exception to a String",
        "It always rolls back on all checked exceptions",
        "Checked exceptions do not trigger rollback by default, unless explicitly configured"
      ],
      "correct": "D",
      "memo": "Default Spring declarative transactions roll back on unchecked exceptions, not every checked exception; rollbackFor can change this.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** You only need the next chunk of records and whether more exist; an expensive total count is unnecessary. Which return type can avoid Page's total-count query?",
      "options": [
        "`Long`",
        "`@Id`",
        "`Slice<T>`",
        "`Page<T>` always"
      ],
      "correct": "C",
      "memo": "Slice provides content and whether a subsequent slice exists, typically without a total-count query.",
      "marks": 1
    },
    {
      "id": 21,
      "kind": "True or false",
      "prompt": "**True/False:** A JPA entity needs an identifier mapping, typically declared with `@Id` or `@EmbeddedId`.",
      "correct": "true",
      "memo": "JPA entities require a primary key mapping.",
      "marks": 1
    },
    {
      "id": 22,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A parent `Order` and its child OrderLines should be persisted together when a new Order is persisted. Which cascade option is most relevant?",
      "options": [
        "FetchType.LAZY",
        "LockModeType.READ",
        "CascadeType.PERSIST",
        "CascadeType.REMOVE only"
      ],
      "correct": "C",
      "memo": "Cascade PERSIST propagates persistence of a new parent to new children reachable through the annotated association.",
      "marks": 1
    },
    {
      "id": 23,
      "kind": "True or false",
      "prompt": "**True/False:** Spring's default @Transactional rollback rules usually cover unchecked RuntimeException failures.",
      "correct": "true",
      "memo": "RuntimeException and Error normally cause rollback unless customized.",
      "marks": 1
    },
    {
      "id": 24,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A repository method `findByEmail(String email)` has no explicit `@Query`. How can Spring Data JPA implement it?",
      "options": [
        "It automatically searches every String column",
        "By deriving a query from the recognized method name and entity property",
        "By matching a JavaScript regex",
        "It requires an SQL file for every method"
      ],
      "correct": "B",
      "memo": "Spring Data supports derived queries following method name conventions, such as findByEmail.",
      "marks": 1
    },
    {
      "id": 25,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An entity was loaded in a transaction and is used after its EntityManager is closed. Which lifecycle state best describes it?",
      "options": [
        "Detached",
        "New, with no identifier",
        "Always removed",
        "Managed by the closed EntityManager"
      ],
      "correct": "A",
      "memo": "Once an entity is no longer associated with an active persistence context it is detached, even if it still has an ID.",
      "marks": 1
    },
    {
      "id": 26,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Removing an `OrderLine` from `Order.lines` should delete that now-unowned row when the parent relationship is correctly maintained. Which mapping option is designed for that behavior?",
      "options": [
        "`fetch = FetchType.EAGER`",
        "`@Transient` on parent",
        "`@Version` on the child",
        "`orphanRemoval = true`"
      ],
      "correct": "D",
      "memo": "orphanRemoval triggers removal for an entity orphaned from the relevant relationship, distinct from cascading parent deletes.",
      "marks": 1
    },
    {
      "id": 27,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer marks a service with `@Transactional(readOnly=true)` and then writes data. Which statement is most accurate?",
      "options": [
        "It guarantees writes cause compilation errors",
        "It makes entity identifiers null",
        "It creates a new transaction for every repository method",
        "readOnly expresses intent/optimization and is not a universal database-enforced prohibition on all writes"
      ],
      "correct": "D",
      "memo": "readOnly can influence flush behavior and hints, but should not be treated as a guaranteed write-protection mechanism.",
      "marks": 1
    },
    {
      "id": 28,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An entity has a Java property `createdAt`. You want newest records first. Which derived method name expresses that intent?",
      "options": [
        "`selectNewestCreatedAt()`",
        "`createdAtSortedByDatabaseAlways()`",
        "`findByOrderByCreatedAtDesc()`",
        "`findBySQLCreatedAtLatest()`"
      ],
      "correct": "C",
      "memo": "findByOrderByCreatedAtDesc is a supported method-name query derivation style.",
      "marks": 1
    },
    {
      "id": 29,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A JPA entity omits a no-argument constructor, providing only an arguments-only constructor. What issue can this create?",
      "options": [
        "It automatically sets @Id",
        "JPA requires a public or protected no-arg constructor for entity instantiation",
        "All constructors must be static",
        "Entity classes cannot have constructors"
      ],
      "correct": "B",
      "memo": "The JPA spec requires a public/protected no-argument constructor for entity classes; providers use it when constructing instances.",
      "marks": 1
    },
    {
      "id": 30,
      "kind": "True or false",
      "prompt": "**True/False:** `CascadeType.REMOVE` and `orphanRemoval = true` always mean exactly the same thing.",
      "correct": "false",
      "memo": "Cascade REMOVE acts on parent removal; orphanRemoval reacts to a child removed from its parent relationship.",
      "marks": 1
    },
    {
      "id": 31,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `save()` is called on a Spring Data JPA repository with a new entity, then another find query is executed. Does calling save guarantee SQL INSERT was already sent in every JPA configuration?",
      "options": [
        "No; persistence may be deferred until flush/commit, subject to ID strategy and provider behavior",
        "Yes; SQL executes during Java compilation",
        "No; Spring Data repositories never write",
        "Yes; save always forces flush immediately"
      ],
      "correct": "A",
      "memo": "save generally persist/merges; flushing governs synchronization timing. saveAndFlush forces a flush where provided.",
      "marks": 1
    },
    {
      "id": 32,
      "kind": "True or false",
      "prompt": "**True/False:** JPQL commonly uses Java entity names and mapped attributes instead of database table and column names.",
      "correct": "true",
      "memo": "JPQL works with the persistent object model.",
      "marks": 1
    },
    {
      "id": 33,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** What is missing from the mapping if `username` must be unique in the database?",
      "options": [
        "`@Column(unique = true)` or an equivalent table-level uniqueness constraint",
        "`@Transient` on the username",
        "`@Lob` on every field",
        "`@OrderBy(\"username\")`"
      ],
      "correct": "A",
      "memo": "A database unique constraint must be expressed in DDL/schema generation or a migration; application-level validation alone doesn't enforce concurrency-safe uniqueness.",
      "snippet": "@Entity\nclass Account {\n  @Id private Long id;\n  @Column(nullable = false)\n  private String username;\n}",
      "marks": 1
    },
    {
      "id": 34,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A Catalog/Product relationship uses `cascade = CascadeType.REMOVE` from Product to a shared Catalog. Why is this risky?",
      "options": [
        "It will always speed up SELECT",
        "It adds an index automatically",
        "It removes lazy loading",
        "Deleting a product could propagate removal to a catalog used by other products"
      ],
      "correct": "D",
      "memo": "Remove cascade on many-to-one references to shared parents can delete shared data or fail due to FK constraints.",
      "marks": 1
    },
    {
      "id": 35,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A repository uses `@Version` on an integer field. Two transactions read version 3, and both try to update the same row. What is the intended concurrency effect?",
      "options": [
        "The database deletes the version field",
        "`@Version` changes HTTP caching",
        "A later conflicting update is detected and fails optimistic locking rather than silently overwriting",
        "Both updates must be silently combined"
      ],
      "correct": "C",
      "memo": "Optimistic locking checks version changes to detect conflicting updates.",
      "marks": 1
    },
    {
      "id": 36,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** What is wrong with this JPQL query if `Student` is the entity name and `name` is its Java property?",
      "options": [
        "JPQL must use SELECT *",
        "JPQL usually refers to entity types and mapped properties, not raw SQL table/column names",
        "JPQL can only run with JDBC",
        "JPQL never supports WHERE"
      ],
      "correct": "B",
      "memo": "JPQL is based on the entity model. Prefer `select s from Student s where s.name = :name` rather than SQL table identifiers.",
      "snippet": "@Query(\"select * from students where student_name = :name\")\nList<Student> byName(@Param(\"name\") String name);",
      "marks": 1
    },
    {
      "id": 37,
      "kind": "True or false",
      "prompt": "**True/False:** `@Transient` means that JPA must generate a column for the annotated field.",
      "correct": "false",
      "memo": "@Transient explicitly excludes a property from persistence mapping.",
      "marks": 1
    },
    {
      "id": 38,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer assumes `@ManyToOne` is LAZY by default. What's the JPA specification default?",
      "options": [
        "DETACHED",
        "EAGER",
        "LAZY",
        "NEVER"
      ],
      "correct": "B",
      "memo": "The JPA default for @ManyToOne is EAGER (although explicit LAZY is often desirable to control performance).",
      "marks": 1
    },
    {
      "id": 39,
      "kind": "True or false",
      "prompt": "**True/False:** An `@Version` field can help detect concurrent writes to the same entity.",
      "correct": "true",
      "memo": "Version values allow optimistic locking conflicts to be detected.",
      "marks": 1
    },
    {
      "id": 40,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A query must filter on `Student.name` using named parameter `:name`. Which JPQL fragment is appropriate?",
      "options": [
        "`select s from Student s where s.name = :name`",
        "`select * from students where student_name = :name` is always JPQL",
        "`SELECT TABLE Student`",
        "`@Entity name = :name`"
      ],
      "correct": "A",
      "memo": "JPQL queries mapped entities and their properties, with parameters safely bound through JPA.",
      "marks": 1
    },
    {
      "id": 41,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A field caches a calculated display string that should never be stored as a database column. Which annotation applies?",
      "options": [
        "`@EmbeddedId`",
        "`@JoinColumn`",
        "`@ManyToOne`",
        "`@Transient`"
      ],
      "correct": "D",
      "memo": "@Transient tells JPA not to persist/map that field. Java's transient keyword also affects serialization but has different broader semantics.",
      "marks": 1
    },
    {
      "id": 42,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer assumes `@OneToMany` is EAGER by default. What's the JPA specification default?",
      "options": [
        "AUTO",
        "EAGER",
        "LAZY",
        "ALWAYS"
      ],
      "correct": "C",
      "memo": "The JPA default fetch type for @OneToMany is LAZY.",
      "marks": 1
    },
    {
      "id": 43,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** Which field annotation supports version-based optimistic locking?",
      "options": [
        "`@Column(updatable = false)` alone",
        "`@SequenceGenerator` alone",
        "`@Version`",
        "`@Embedded`"
      ],
      "correct": "C",
      "memo": "@Version marks the entity version attribute tracked for optimistic concurrency.",
      "snippet": "@Entity\nclass InventoryItem {\n @Id Long id;\n @Version Long version;\n int stock;\n}",
      "marks": 1
    },
    {
      "id": 44,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A team writes JPQL by concatenating untrusted user input into the query string. What should they do instead?",
      "options": [
        "Turn the entire query into a comment",
        "Use bound parameters to separate data from query structure",
        "Escape only the apostrophe in the browser",
        "Trust the UI to validate input"
      ],
      "correct": "B",
      "memo": "Parameter binding prevents untrusted values from changing query syntax and typically improves query-plan reuse.",
      "marks": 1
    },
    {
      "id": 45,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A Java field is named `postalCode` while the database column is named `postal_code`. Which mapping makes the relationship explicit?",
      "options": [
        "`@Column(name = \"postal_code\")`",
        "`@Table(name = \"postal_code\")` on the field",
        "`@Repository` on the field",
        "`@OrderBy(\"postal_code\")`"
      ],
      "correct": "A",
      "memo": "@Column(name=...) maps a basic attribute to a named column.",
      "marks": 1
    },
    {
      "id": 46,
      "kind": "True or false",
      "prompt": "**True/False:** A to-one association can be configured LAZY explicitly instead of accepting the JPA default EAGER fetching.",
      "correct": "true",
      "memo": "Using fetch=LAZY expresses intent; behavior may require proxies/enhancement for some relationships.",
      "marks": 1
    },
    {
      "id": 47,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Two people place orders for the final unit of stock. The developer uses plain read-modify-write in separate transactions and both see stock 1. What risk is present without suitable concurrency control?",
      "options": [
        "A CSS race only",
        "An SQL syntax error on every SELECT",
        "All rows become detached automatically",
        "Lost updates or overselling due to concurrent writes"
      ],
      "correct": "D",
      "memo": "Concurrent read-modify-write flows can overwrite updates or oversell; enforce consistency with appropriate locking/conditional updates.",
      "marks": 1
    },
    {
      "id": 48,
      "kind": "True or false",
      "prompt": "**True/False:** Named parameters make it safe to concatenate arbitrary user input directly into the JPQL query string.",
      "correct": "false",
      "memo": "Named parameter binding is safe; string concatenation with untrusted input still risks query injection.",
      "marks": 1
    },
    {
      "id": 49,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `Product` embeds a reusable `Money` value object consisting of `amount` and `currency` into its own table. What JPA modeling feature fits best?",
      "options": [
        "`@Controller` on Money",
        "`@ManyToMany` on a String",
        "`@EnableMethodSecurity`",
        "`@Embeddable` on Money and `@Embedded` on Product's property"
      ],
      "correct": "D",
      "memo": "Embeddables represent component/value objects stored as part of the owning entity's table by default.",
      "marks": 1
    },
    {
      "id": 50,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Code loops over 100 orders and accesses `order.customer.name` after initially loading orders. Many separate customer queries execute. What performance issue is likely?",
      "options": [
        "CSRF failure",
        "A missing @Id on Customer",
        "N+1 selects",
        "Optimistic locking"
      ],
      "correct": "C",
      "memo": "Fetching a list plus per-row relationship queries leads to the N+1 select problem. Consider appropriate join fetch, entity graphs or DTO queries.",
      "marks": 1
    },
    {
      "id": 51,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer calls a `@Transactional` method from another method within the same object. With default proxy-based Spring AOP, why may the inner method's transactional advice not run?",
      "options": [
        "A Java class cannot have two public methods",
        "Self-invocation bypasses the proxy",
        "JPA doesn't permit nested method calls",
        "Transactions only apply to controllers"
      ],
      "correct": "B",
      "memo": "Default proxy interception applies to calls through the proxy, not direct this.method self-invocation.",
      "marks": 1
    },
    {
      "id": 52,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** A repository method annotated `@Modifying` executes an UPDATE JPQL query. Why is `@Transactional` usually needed for execution?",
      "options": [
        "Updating queries require a suitable transactional context to execute and commit reliably",
        "Java must run SQL on the frontend",
        "@Modifying is the same as @Entity",
        "All SELECT queries need @Modifying"
      ],
      "correct": "A",
      "memo": "Bulk writes require a transaction. @Modifying marks a query as changing data; transaction boundaries must be provided.",
      "snippet": "@Modifying\n@Query(\"update Student s set s.active = false where s.lastSeen < :cutoff\")\nint deactivateBefore(@Param(\"cutoff\") Instant cutoff);",
      "marks": 1
    },
    {
      "id": 53,
      "kind": "True or false",
      "prompt": "**True/False:** A managed entity can be updated through dirty checking without an explicit save call to the repository after every setter.",
      "correct": "true",
      "memo": "Changes to managed entities in a transactional context can be flushed automatically.",
      "marks": 1
    },
    {
      "id": 54,
      "kind": "Multiple choice",
      "prompt": "**Code reasoning:** A JPQL query uses `select o from Order o join fetch o.customer` to load Order entities and their Customer association. What is the purpose of `join fetch`?",
      "options": [
        "Load the associated customer as part of the query to avoid later lazy loads for it",
        "Replace the Order's primary key with Customer's",
        "Force a database INSERT",
        "Disable all transactions"
      ],
      "correct": "A",
      "memo": "JOIN FETCH instructs the provider to initialize the chosen relationship alongside the root entity.",
      "snippet": "@Query(\"select o from Order o join fetch o.customer\")\nList<Order> findWithCustomer();",
      "marks": 1
    },
    {
      "id": 55,
      "kind": "True or false",
      "prompt": "**True/False:** A detached JPA entity is guaranteed to become managed simply because you call a Java setter on it.",
      "correct": "false",
      "memo": "Setters alter in-memory state; a detached object isn't managed until attached/merged through persistence operations.",
      "marks": 1
    },
    {
      "id": 56,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A JPQL bulk update changes student status directly in the database, while managed Student objects are already loaded. What is the risk?",
      "options": [
        "Every managed object is always updated in memory automatically",
        "Bulk updates always throw UnsupportedOperationException",
        "JPQL bulk writes cannot affect multiple rows",
        "The persistence context may still hold stale entity state until cleared/refreshed"
      ],
      "correct": "D",
      "memo": "Bulk JPQL updates bypass normal dirty checking/state synchronization of already managed entities; clear or refresh appropriately.",
      "marks": 1
    },
    {
      "id": 57,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Two `Student` Java objects are loaded from one persistence context using EntityManager.find with the same type and primary key. What JPA identity behavior is expected?",
      "options": [
        "Two database rows are inserted",
        "Java compares entity objects only by username",
        "The same managed entity instance is returned for that identity within the persistence context",
        "JPA always creates unrelated new objects for each find"
      ],
      "correct": "C",
      "memo": "The persistence context maintains identity: a particular entity identity is represented by one managed Java object in that context.",
      "marks": 1
    },
    {
      "id": 58,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A bidirectional association is updated only by `customer.getOrders().add(order)` but `order.setCustomer(customer)` is never called. With Order.customer as the owning side, what is the likely issue?",
      "options": [
        "The customer field becomes @Transient",
        "The foreign key association may not be persisted correctly because the owning side was not synchronized",
        "Both sides are always automatically synchronized by Java",
        "A new database is created"
      ],
      "correct": "B",
      "memo": "The owning side controls the FK mapping. Keep both sides of bidirectional associations consistent in application helper methods.",
      "marks": 1
    },
    {
      "id": 59,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A `@Transactional(propagation=REQUIRES_NEW)` method is invoked from another transactional method *through the proxy*. What is the intended behavior?",
      "options": [
        "Disable transaction management forever",
        "Suspend the existing transaction and start a separate independent transaction",
        "Always join the current transaction",
        "Commit every open transaction immediately"
      ],
      "correct": "B",
      "memo": "REQUIRES_NEW creates an independent physical transaction when properly intercepted; outer work is suspended.",
      "marks": 1
    },
    {
      "id": 60,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A product listing API only needs name and price, not full entity graphs. What can improve efficiency and API separation?",
      "options": [
        "Use a DTO projection query selecting the needed fields",
        "Return all entity relations eagerly regardless of need",
        "Serialize EntityManager itself",
        "Mark every entity @Transient"
      ],
      "correct": "A",
      "memo": "DTO projections avoid loading unnecessary fields/relations and avoid exposing persistence entities directly.",
      "marks": 1
    },
    {
      "id": 61,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** You persist a new entity using EntityManager.persist. What does this operation usually do?",
      "options": [
        "Immediately delete the row",
        "Guarantee a SQL INSERT was already sent before the method returns in every strategy",
        "Merge all detached objects",
        "Make the entity managed and schedule insertion according to flush/generation behavior"
      ],
      "correct": "D",
      "memo": "Persist makes a transient entity managed. When INSERT executes depends on flush, generation strategy and provider behavior.",
      "marks": 1
    },
    {
      "id": 62,
      "kind": "True or false",
      "prompt": "**True/False:** Adding elements to the inverse side of a bidirectional association always updates the owning FK even if the owning side is left unchanged.",
      "correct": "false",
      "memo": "The owning side determines persistence of the foreign key; application code should synchronize both directions.",
      "marks": 1
    },
    {
      "id": 63,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A service publishes an external email inside a transaction and later rolls back the DB write. What inconsistency is possible?",
      "options": [
        "Java automatically deletes email from recipients",
        "The database transaction becomes read-only",
        "Email has already been sent even though the database changes rolled back",
        "Email is rolled back automatically by JPA"
      ],
      "correct": "C",
      "memo": "Database transaction rollback doesn't undo side effects such as emails. Consider outbox/events-after-commit for reliable integration.",
      "marks": 1
    },
    {
      "id": 64,
      "kind": "True or false",
      "prompt": "**True/False:** A bulk JPQL UPDATE may leave already-loaded managed entities with stale values until synchronized.",
      "correct": "true",
      "memo": "Bulk updates bypass per-entity state synchronization in the persistence context.",
      "marks": 1
    },
    {
      "id": 65,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** With `@Id @GeneratedValue(strategy = GenerationType.IDENTITY)`, how is a primary key normally obtained?",
      "options": [
        "By choosing a random Spring Bean",
        "From `@RequestParam`",
        "From a database identity/auto-increment mechanism",
        "By hashing every getter"
      ],
      "correct": "C",
      "memo": "IDENTITY delegates key generation to the database identity mechanism; specific SQL timing differs from sequence-based strategies.",
      "snippet": "@Id\n@GeneratedValue(strategy = GenerationType.IDENTITY)\nprivate Long id;",
      "marks": 1
    },
    {
      "id": 66,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Two users can be assigned to many projects, and each project can have multiple users. Which basic relationship fits conceptually?",
      "options": [
        "`@Column` on a List<User>",
        "`@ManyToMany` (often explicit join entity for association attributes)",
        "`@OneToOne`",
        "`@EmbeddedId` on a String"
      ],
      "correct": "B",
      "memo": "Many-to-many maps a join table; a dedicated join entity is preferable when membership itself has attributes.",
      "marks": 1
    },
    {
      "id": 67,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A code path calls EntityManager.flush() then the transaction later rolls back. Does flush make the updates durable despite the rollback?",
      "options": [
        "No; flush synchronizes pending SQL in the ongoing transaction, but does not itself commit it",
        "Flush is a synonym for detach",
        "Flush permanently closes the EntityManager",
        "Yes, every flush permanently commits"
      ],
      "correct": "A",
      "memo": "Flush issues pending SQL but isn't a database COMMIT. A later rollback can undo those writes.",
      "marks": 1
    },
    {
      "id": 68,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `findAll()` returns 5,000,000 rows. The UI needs 25 rows at a time. Which change is most appropriate?",
      "options": [
        "Store 5,000,000 entity instances in a static variable",
        "Convert all rows into one giant String",
        "Replace repositories with a single Entity field",
        "Use Pageable and request pages rather than loading all rows"
      ],
      "correct": "D",
      "memo": "Pagination reduces transfer, serialization and memory work for large result sets.",
      "marks": 1
    },
    {
      "id": 69,
      "kind": "True or false",
      "prompt": "**True/False:** A detached entity may still have its primary key value in memory.",
      "correct": "true",
      "memo": "Detachment removes persistence context management; it does not erase Java fields or identifiers.",
      "marks": 1
    },
    {
      "id": 70,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A project membership must store `joinedAt` and `role`. Why might a `Membership` entity be preferable to a direct `@ManyToMany`?",
      "options": [
        "Many-to-many cannot express any relation",
        "A Membership entity prevents all SQL queries",
        "Only Java records support associations",
        "The association has its own data and lifecycle"
      ],
      "correct": "D",
      "memo": "Promoting the association to an entity allows attached attributes, constraints and explicit lifecycle rules.",
      "marks": 1
    },
    {
      "id": 71,
      "kind": "True or false",
      "prompt": "**True/False:** A transaction rolling back database changes also reliably unsends emails already dispatched through an external mail server.",
      "correct": "false",
      "memo": "External effects aren't automatically part of a local database transaction.",
      "marks": 1
    },
    {
      "id": 72,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A service needs students ordered by surname ascending, with a stable tie-breaker for equal surnames. What should the query do?",
      "options": [
        "Sort only in an unordered HashSet",
        "Use `findAll()` with no Sort",
        "Order by surname then a unique secondary field such as ID",
        "Depend on database row insertion order"
      ],
      "correct": "C",
      "memo": "Stable ordering is important for deterministic pagination and consistent user experience.",
      "marks": 1
    },
    {
      "id": 73,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A table `courses` should be mapped to a Java `Course` entity. Which annotation specifies the table name explicitly?",
      "options": [
        "`@NamedQuery(\"courses\")` alone",
        "`@Table(name = \"courses\")` on the entity class",
        "`@Column(name = \"courses\")` on every field",
        "`@ResponseBody` on the class"
      ],
      "correct": "B",
      "memo": "@Table names the backing table; @Column names individual columns.",
      "marks": 1
    },
    {
      "id": 74,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A controller returns a detached Order object, and its lazy `lines` collection was never initialized. Accessing the collection later without an open persistence context may cause what?",
      "options": [
        "A LazyInitializationException with Hibernate or similar provider-specific lazy access failure",
        "Automatic load without any persistence context",
        "The database commits a transaction",
        "Deletion of all rows"
      ],
      "correct": "A",
      "memo": "Uninitialized proxies/collections need a suitable context to load. Prefer fetching required data and returning DTOs within the service transaction.",
      "marks": 1
    },
    {
      "id": 75,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A detached Student object is passed to EntityManager.merge(). Which result is generally returned?",
      "options": [
        "A managed instance with merged state, which need not be the same Java object passed in",
        "A String SQL statement",
        "The original object is guaranteed to become managed in place",
        "A deleted database row"
      ],
      "correct": "A",
      "memo": "merge copies state into/returns a managed instance; the argument remains detached.",
      "marks": 1
    },
    {
      "id": 76,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An application fetches an Order collection and its several bag-valued child collections using one massive JOIN FETCH, producing duplicates and huge row multiplication. What's a sensible response?",
      "options": [
        "Always add more joins until SQL has no WHERE clause",
        "Remove primary keys",
        "Force every association EAGER",
        "Review fetch design: use targeted projections, batching or separate queries instead of assuming every relationship should be join-fetched"
      ],
      "correct": "D",
      "memo": "Fetching multiple collections in one join can create a cartesian product and provider limitations; choose workload-appropriate fetching.",
      "marks": 1
    },
    {
      "id": 77,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A field `externalCode` must not be null in the database. Which annotation is an appropriate DDL mapping hint, assuming schema generation/migrations honor it?",
      "options": [
        "`@OneToMany` on String",
        "`@Pageable`",
        "`@Column(nullable = false)`",
        "`@Transient`"
      ],
      "correct": "C",
      "memo": "@Column(nullable=false) expresses nullability in the mapping for schema generation; actual database constraints still must exist in production.",
      "marks": 1
    },
    {
      "id": 78,
      "kind": "True or false",
      "prompt": "**True/False:** A many-to-many association with extra attributes such as membership roles often benefits from being modeled as an explicit join entity.",
      "correct": "true",
      "memo": "A join entity allows those extra fields and a clear lifecycle for the association.",
      "marks": 1
    },
    {
      "id": 79,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer needs to prevent concurrent edits from silently overwriting changes and prefers conflict detection to holding locks for every read. Which mechanism fits?",
      "options": [
        "permitAll on API",
        "Optimistic locking via @Version",
        "@Transient on all fields",
        "CascadeType.REMOVE"
      ],
      "correct": "B",
      "memo": "Optimistic version checking detects concurrent conflicting writes with minimal locking of ordinary reads.",
      "marks": 1
    },
    {
      "id": 80,
      "kind": "True or false",
      "prompt": "**True/False:** Returning every entity relationship eagerly is always the fastest solution to N+1 queries.",
      "correct": "false",
      "memo": "Overfetching and join multiplication can be worse. Choose fetch strategies according to actual query needs.",
      "marks": 1
    }
  ],
  "totalMarks": 80
};
