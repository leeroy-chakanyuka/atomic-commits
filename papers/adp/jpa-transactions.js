window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-27-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 27,
  "title": "Spring Data JPA · Paper 3: Transactions & Concurrency",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "spring-data-jpa",
  "intro": "20 Java JPA questions on @Transactional, dirty checking, rollback, flushing, optimistic locking and concurrency.",
  "source": "Original Spring transaction and Jakarta Persistence revision questions; default Spring rollback behavior is assumed.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A service method needs to update two entities atomically. What Spring annotation commonly defines the transaction boundary?",
      "options": [
        "`@PathVariable`",
        "`@RestController`",
        "`@Transactional`",
        "`@GeneratedValue`"
      ],
      "correct": "C",
      "memo": "@Transactional defines a Spring-managed transaction boundary when transaction management is configured and the method is intercepted.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Code reasoning:** A managed account's balance changes inside a read-write transaction without a repository.save call. At commit, how might JPA write the new value?",
      "options": [
        "By updating a JavaScript cache",
        "Through dirty checking and flush",
        "It can't without explicitly calling save in all cases",
        "Through HTTP CSRF protection"
      ],
      "correct": "B",
      "memo": "JPA tracks managed entity state changes and generates updates at flush/commit.",
      "snippet": "@Transactional\npublic void rename(Long id) {\n  Student student = repository.findById(id).orElseThrow();\n  student.setName(\"Updated\");\n}",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** One application writes two rows within a transaction. The second operation throws an unchecked RuntimeException that escapes the method. With default Spring declarative transaction behavior, what usually happens?",
      "options": [
        "Transaction rolls back",
        "Both rows must remain committed",
        "The exception is silently ignored",
        "Only the new object becomes detached"
      ],
      "correct": "A",
      "memo": "Default Spring @Transactional rolls back on unchecked exceptions (RuntimeException and Error), absent custom rules.",
      "marks": 1
    },
    {
      "id": 4,
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
      "id": 5,
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
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `save()` is called on a Spring Data JPA repository with a new entity, then another find query is executed. Does calling save guarantee SQL INSERT was already sent in every JPA configuration?",
      "options": [
        "No; Spring Data repositories never write",
        "Yes; save always forces flush immediately",
        "No; persistence may be deferred until flush/commit, subject to ID strategy and provider behavior",
        "Yes; SQL executes during Java compilation"
      ],
      "correct": "C",
      "memo": "save generally persist/merges; flushing governs synchronization timing. saveAndFlush forces a flush where provided.",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A repository uses `@Version` on an integer field. Two transactions read version 3, and both try to update the same row. What is the intended concurrency effect?",
      "options": [
        "`@Version` changes HTTP caching",
        "A later conflicting update is detected and fails optimistic locking rather than silently overwriting",
        "Both updates must be silently combined",
        "The database deletes the version field"
      ],
      "correct": "B",
      "memo": "Optimistic locking checks version changes to detect conflicting updates.",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** Which field annotation supports version-based optimistic locking?",
      "options": [
        "`@Version`",
        "`@Embedded`",
        "`@Column(updatable = false)` alone",
        "`@SequenceGenerator` alone"
      ],
      "correct": "A",
      "memo": "@Version marks the entity version attribute tracked for optimistic concurrency.",
      "snippet": "@Entity\nclass InventoryItem {\n @Id Long id;\n @Version Long version;\n int stock;\n}",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Two people place orders for the final unit of stock. The developer uses plain read-modify-write in separate transactions and both see stock 1. What risk is present without suitable concurrency control?",
      "options": [
        "Lost updates or overselling due to concurrent writes",
        "A CSS race only",
        "An SQL syntax error on every SELECT",
        "All rows become detached automatically"
      ],
      "correct": "A",
      "memo": "Concurrent read-modify-write flows can overwrite updates or oversell; enforce consistency with appropriate locking/conditional updates.",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer calls a `@Transactional` method from another method within the same object. With default proxy-based Spring AOP, why may the inner method's transactional advice not run?",
      "options": [
        "JPA doesn't permit nested method calls",
        "Transactions only apply to controllers",
        "A Java class cannot have two public methods",
        "Self-invocation bypasses the proxy"
      ],
      "correct": "D",
      "memo": "Default proxy interception applies to calls through the proxy, not direct this.method self-invocation.",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A `@Transactional(propagation=REQUIRES_NEW)` method is invoked from another transactional method *through the proxy*. What is the intended behavior?",
      "options": [
        "Commit every open transaction immediately",
        "Disable transaction management forever",
        "Suspend the existing transaction and start a separate independent transaction",
        "Always join the current transaction"
      ],
      "correct": "C",
      "memo": "REQUIRES_NEW creates an independent physical transaction when properly intercepted; outer work is suspended.",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A service publishes an external email inside a transaction and later rolls back the DB write. What inconsistency is possible?",
      "options": [
        "The database transaction becomes read-only",
        "Email has already been sent even though the database changes rolled back",
        "Email is rolled back automatically by JPA",
        "Java automatically deletes email from recipients"
      ],
      "correct": "B",
      "memo": "Database transaction rollback doesn't undo side effects such as emails. Consider outbox/events-after-commit for reliable integration.",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A code path calls EntityManager.flush() then the transaction later rolls back. Does flush make the updates durable despite the rollback?",
      "options": [
        "Yes, every flush permanently commits",
        "No; flush synchronizes pending SQL in the ongoing transaction, but does not itself commit it",
        "Flush is a synonym for detach",
        "Flush permanently closes the EntityManager"
      ],
      "correct": "B",
      "memo": "Flush issues pending SQL but isn't a database COMMIT. A later rollback can undo those writes.",
      "marks": 1
    },
    {
      "id": 14,
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
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer needs to prevent concurrent edits from silently overwriting changes and prefers conflict detection to holding locks for every read. Which mechanism fits?",
      "options": [
        "@Transient on all fields",
        "CascadeType.REMOVE",
        "permitAll on API",
        "Optimistic locking via @Version"
      ],
      "correct": "D",
      "memo": "Optimistic version checking detects concurrent conflicting writes with minimal locking of ordinary reads.",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** Calling EntityManager.flush() is identical to committing the enclosing transaction.",
      "correct": "false",
      "memo": "Flush writes pending SQL but does not commit; a later rollback can still undo it.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** Spring's default @Transactional rollback rules usually cover unchecked RuntimeException failures.",
      "correct": "true",
      "memo": "RuntimeException and Error normally cause rollback unless customized.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** An `@Version` field can help detect concurrent writes to the same entity.",
      "correct": "true",
      "memo": "Version values allow optimistic locking conflicts to be detected.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** A detached JPA entity is guaranteed to become managed simply because you call a Java setter on it.",
      "correct": "false",
      "memo": "Setters alter in-memory state; a detached object isn't managed until attached/merged through persistence operations.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** A transaction rolling back database changes also reliably unsends emails already dispatched through an external mail server.",
      "correct": "false",
      "memo": "External effects aren't automatically part of a local database transaction.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};
