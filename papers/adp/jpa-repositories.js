window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-28-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 28,
  "title": "Spring Data JPA · Paper 4: Repositories, JPQL & Pagination",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "spring-data-jpa",
  "intro": "20 Java and Spring Data JPA questions on derived queries, Page/Slice, JPQL, binding, projections, bulk updates and N+1 trade-offs.",
  "source": "Original Spring Data JPA / JPQL exam-style questions; standard Spring Data pagination and entity query semantics assumed.",
  "questions": [
    {
      "id": 1,
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
      "id": 2,
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
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** You need the total number of rows matching a query, the number of pages, and the current page content. Which Spring Data return type is most suitable?",
      "options": [
        "`EntityManagerFactory`",
        "`Page<T>`",
        "`Optional<T>`",
        "`void`"
      ],
      "correct": "B",
      "memo": "Page includes page content and count metadata, often requiring a separate count query.",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** You only need the next chunk of records and whether more exist; an expensive total count is unnecessary. Which return type can avoid Page's total-count query?",
      "options": [
        "`Slice<T>`",
        "`Page<T>` always",
        "`Long`",
        "`@Id`"
      ],
      "correct": "A",
      "memo": "Slice provides content and whether a subsequent slice exists, typically without a total-count query.",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A repository method `findByEmail(String email)` has no explicit `@Query`. How can Spring Data JPA implement it?",
      "options": [
        "By deriving a query from the recognized method name and entity property",
        "By matching a JavaScript regex",
        "It requires an SQL file for every method",
        "It automatically searches every String column"
      ],
      "correct": "A",
      "memo": "Spring Data supports derived queries following method name conventions, such as findByEmail.",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An entity has a Java property `createdAt`. You want newest records first. Which derived method name expresses that intent?",
      "options": [
        "`findBySQLCreatedAtLatest()`",
        "`selectNewestCreatedAt()`",
        "`createdAtSortedByDatabaseAlways()`",
        "`findByOrderByCreatedAtDesc()`"
      ],
      "correct": "D",
      "memo": "findByOrderByCreatedAtDesc is a supported method-name query derivation style.",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** What is wrong with this JPQL query if `Student` is the entity name and `name` is its Java property?",
      "options": [
        "JPQL never supports WHERE",
        "JPQL must use SELECT *",
        "JPQL usually refers to entity types and mapped properties, not raw SQL table/column names",
        "JPQL can only run with JDBC"
      ],
      "correct": "C",
      "memo": "JPQL is based on the entity model. Prefer `select s from Student s where s.name = :name` rather than SQL table identifiers.",
      "snippet": "@Query(\"select * from students where student_name = :name\")\nList<Student> byName(@Param(\"name\") String name);",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A query must filter on `Student.name` using named parameter `:name`. Which JPQL fragment is appropriate?",
      "options": [
        "`@Entity name = :name`",
        "`select s from Student s where s.name = :name`",
        "`select * from students where student_name = :name` is always JPQL",
        "`SELECT TABLE Student`"
      ],
      "correct": "B",
      "memo": "JPQL queries mapped entities and their properties, with parameters safely bound through JPA.",
      "marks": 1
    },
    {
      "id": 9,
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
      "id": 10,
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
      "id": 11,
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
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A product listing API only needs name and price, not full entity graphs. What can improve efficiency and API separation?",
      "options": [
        "Serialize EntityManager itself",
        "Mark every entity @Transient",
        "Use a DTO projection query selecting the needed fields",
        "Return all entity relations eagerly regardless of need"
      ],
      "correct": "C",
      "memo": "DTO projections avoid loading unnecessary fields/relations and avoid exposing persistence entities directly.",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `findAll()` returns 5,000,000 rows. The UI needs 25 rows at a time. Which change is most appropriate?",
      "options": [
        "Convert all rows into one giant String",
        "Replace repositories with a single Entity field",
        "Use Pageable and request pages rather than loading all rows",
        "Store 5,000,000 entity instances in a static variable"
      ],
      "correct": "C",
      "memo": "Pagination reduces transfer, serialization and memory work for large result sets.",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A service needs students ordered by surname ascending, with a stable tie-breaker for equal surnames. What should the query do?",
      "options": [
        "Use `findAll()` with no Sort",
        "Order by surname then a unique secondary field such as ID",
        "Depend on database row insertion order",
        "Sort only in an unordered HashSet"
      ],
      "correct": "B",
      "memo": "Stable ordering is important for deterministic pagination and consistent user experience.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An application fetches an Order collection and its several bag-valued child collections using one massive JOIN FETCH, producing duplicates and huge row multiplication. What's a sensible response?",
      "options": [
        "Review fetch design: use targeted projections, batching or separate queries instead of assuming every relationship should be join-fetched",
        "Always add more joins until SQL has no WHERE clause",
        "Remove primary keys",
        "Force every association EAGER"
      ],
      "correct": "A",
      "memo": "Fetching multiple collections in one join can create a cartesian product and provider limitations; choose workload-appropriate fetching.",
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
      "kind": "True or false",
      "prompt": "**True/False:** JPQL commonly uses Java entity names and mapped attributes instead of database table and column names.",
      "correct": "true",
      "memo": "JPQL works with the persistent object model.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** Named parameters make it safe to concatenate arbitrary user input directly into the JPQL query string.",
      "correct": "false",
      "memo": "Named parameter binding is safe; string concatenation with untrusted input still risks query injection.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** A bulk JPQL UPDATE may leave already-loaded managed entities with stale values until synchronized.",
      "correct": "true",
      "memo": "Bulk updates bypass per-entity state synchronization in the persistence context.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** Returning every entity relationship eagerly is always the fastest solution to N+1 queries.",
      "correct": "false",
      "memo": "Overfetching and join multiplication can be worse. Choose fetch strategies according to actual query needs.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};
