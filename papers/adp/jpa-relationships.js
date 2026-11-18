window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-26-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 26,
  "title": "Spring Data JPA · Paper 2: Relationships, Cascades & Fetching",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "spring-data-jpa",
  "intro": "20 scenario-based Java JPA questions on foreign keys, ownership, cascade, orphan removal, fetch modes and N+1.",
  "source": "Original Jakarta Persistence mapping questions, with Hibernate-specific exception behavior identified.",
  "questions": [
    {
      "id": 1,
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
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** `Order` has `@ManyToOne @JoinColumn(name=\"customer_id\") Customer customer`. What does the join-column name refer to?",
      "options": [
        "The foreign key column on the Order table (under ordinary mapping)",
        "A Java package name",
        "A new servlet endpoint",
        "The Customer entity's class name"
      ],
      "correct": "A",
      "memo": "The owning many-to-one association typically maps a foreign-key column in the Order table.",
      "snippet": "@ManyToOne(fetch = FetchType.LAZY)\n@JoinColumn(name = \"customer_id\")\nprivate Customer customer;",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** In a bidirectional Customer/Order one-to-many relationship, `Order.customer` owns the FK mapping. What should Customer.orders use?",
      "options": [
        "`@ManyToOne(mappedBy = \"orders\")`",
        "`@Column(unique = true)`",
        "`@Transient`",
        "`@OneToMany(mappedBy = \"customer\")`"
      ],
      "correct": "D",
      "memo": "mappedBy names the owning property on Order. It prevents a second independently owned association mapping.",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** A developer writes `@OneToMany(mappedBy=\"customer_id\")` on Customer.orders while Order's Java association field is named `customer`. What's wrong?",
      "options": [
        "mappedBy must be a table name",
        "There is no error",
        "mappedBy references the Java association property name, not the database column",
        "mappedBy can only be used on basic Strings"
      ],
      "correct": "C",
      "memo": "In bidirectional mapping, mappedBy names the owning-side entity attribute: customer, not its database FK column.",
      "snippet": "class Customer {\n  @OneToMany(mappedBy = \"customer_id\")\n  private List<Order> orders;\n}\nclass Order {\n  @ManyToOne @JoinColumn(name = \"customer_id\")\n  private Customer customer;\n}",
      "marks": 1
    },
    {
      "id": 5,
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
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Removing an `OrderLine` from `Order.lines` should delete that now-unowned row when the parent relationship is correctly maintained. Which mapping option is designed for that behavior?",
      "options": [
        "`@Version` on the child",
        "`orphanRemoval = true`",
        "`fetch = FetchType.EAGER`",
        "`@Transient` on parent"
      ],
      "correct": "B",
      "memo": "orphanRemoval triggers removal for an entity orphaned from the relevant relationship, distinct from cascading parent deletes.",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A Catalog/Product relationship uses `cascade = CascadeType.REMOVE` from Product to a shared Catalog. Why is this risky?",
      "options": [
        "Deleting a product could propagate removal to a catalog used by other products",
        "It will always speed up SELECT",
        "It adds an index automatically",
        "It removes lazy loading"
      ],
      "correct": "A",
      "memo": "Remove cascade on many-to-one references to shared parents can delete shared data or fail due to FK constraints.",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer assumes `@ManyToOne` is LAZY by default. What's the JPA specification default?",
      "options": [
        "LAZY",
        "NEVER",
        "DETACHED",
        "EAGER"
      ],
      "correct": "D",
      "memo": "The JPA default for @ManyToOne is EAGER (although explicit LAZY is often desirable to control performance).",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer assumes `@OneToMany` is EAGER by default. What's the JPA specification default?",
      "options": [
        "ALWAYS",
        "AUTO",
        "EAGER",
        "LAZY"
      ],
      "correct": "D",
      "memo": "The JPA default fetch type for @OneToMany is LAZY.",
      "marks": 1
    },
    {
      "id": 10,
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
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Code reasoning:** A JPQL query uses `select o from Order o join fetch o.customer` to load Order entities and their Customer association. What is the purpose of `join fetch`?",
      "options": [
        "Disable all transactions",
        "Load the associated customer as part of the query to avoid later lazy loads for it",
        "Replace the Order's primary key with Customer's",
        "Force a database INSERT"
      ],
      "correct": "B",
      "memo": "JOIN FETCH instructs the provider to initialize the chosen relationship alongside the root entity.",
      "snippet": "@Query(\"select o from Order o join fetch o.customer\")\nList<Order> findWithCustomer();",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A bidirectional association is updated only by `customer.getOrders().add(order)` but `order.setCustomer(customer)` is never called. With Order.customer as the owning side, what is the likely issue?",
      "options": [
        "The foreign key association may not be persisted correctly because the owning side was not synchronized",
        "Both sides are always automatically synchronized by Java",
        "A new database is created",
        "The customer field becomes @Transient"
      ],
      "correct": "A",
      "memo": "The owning side controls the FK mapping. Keep both sides of bidirectional associations consistent in application helper methods.",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Two users can be assigned to many projects, and each project can have multiple users. Which basic relationship fits conceptually?",
      "options": [
        "`@ManyToMany` (often explicit join entity for association attributes)",
        "`@OneToOne`",
        "`@EmbeddedId` on a String",
        "`@Column` on a List<User>"
      ],
      "correct": "A",
      "memo": "Many-to-many maps a join table; a dedicated join entity is preferable when membership itself has attributes.",
      "marks": 1
    },
    {
      "id": 14,
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
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A controller returns a detached Order object, and its lazy `lines` collection was never initialized. Accessing the collection later without an open persistence context may cause what?",
      "options": [
        "The database commits a transaction",
        "Deletion of all rows",
        "A LazyInitializationException with Hibernate or similar provider-specific lazy access failure",
        "Automatic load without any persistence context"
      ],
      "correct": "C",
      "memo": "Uninitialized proxies/collections need a suitable context to load. Prefer fetching required data and returning DTOs within the service transaction.",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** The `mappedBy` attribute on the inverse side refers to the owning-side Java field/property, not a raw SQL column name.",
      "correct": "true",
      "memo": "mappedBy targets an entity attribute such as Order.customer.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** `CascadeType.REMOVE` and `orphanRemoval = true` always mean exactly the same thing.",
      "correct": "false",
      "memo": "Cascade REMOVE acts on parent removal; orphanRemoval reacts to a child removed from its parent relationship.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** A to-one association can be configured LAZY explicitly instead of accepting the JPA default EAGER fetching.",
      "correct": "true",
      "memo": "Using fetch=LAZY expresses intent; behavior may require proxies/enhancement for some relationships.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** Adding elements to the inverse side of a bidirectional association always updates the owning FK even if the owning side is left unchanged.",
      "correct": "false",
      "memo": "The owning side determines persistence of the foreign key; application code should synchronize both directions.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** A many-to-many association with extra attributes such as membership roles often benefits from being modeled as an explicit join entity.",
      "correct": "true",
      "memo": "A join entity allows those extra fields and a clear lifecycle for the association.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};
