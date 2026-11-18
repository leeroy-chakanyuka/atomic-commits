window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-25-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 25,
  "title": "Spring Data JPA · Paper 1: Entities, IDs & Lifecycle",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "spring-data-jpa",
  "intro": "20 Java JPA questions on entity annotations, primary keys, persistence state, identity and dirty checking.",
  "source": "Original Jakarta Persistence and Spring Data JPA revision scenarios; database-specific ID behavior is described where relevant.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An entity is annotated `@Entity`, has an identifier, and is persisted through an EntityManager. What does `@Entity` primarily designate?",
      "options": [
        "A class that participates in JPA persistence mapping",
        "A REST controller",
        "A thread pool",
        "A CSS component"
      ],
      "correct": "A",
      "memo": "@Entity marks a persistent domain type managed through JPA mapping; it doesn't make the class a controller or repository.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** A JPA entity has `@Id` on a field. Which annotation is commonly added to use database-generated numeric identifiers?",
      "options": [
        "`@RestController`",
        "`@JsonIgnore`",
        "`@Transactional`",
        "`@GeneratedValue`"
      ],
      "correct": "D",
      "memo": "@GeneratedValue configures a generation strategy for entity primary keys. Its strategy should fit the database.",
      "snippet": "@Entity\nclass Student {\n  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)\n  private Long id;\n}",
      "marks": 1
    },
    {
      "id": 3,
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
      "id": 4,
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
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An entity was loaded in a transaction and is used after its EntityManager is closed. Which lifecycle state best describes it?",
      "options": [
        "Managed by the closed EntityManager",
        "Detached",
        "New, with no identifier",
        "Always removed"
      ],
      "correct": "B",
      "memo": "Once an entity is no longer associated with an active persistence context it is detached, even if it still has an ID.",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A JPA entity omits a no-argument constructor, providing only an arguments-only constructor. What issue can this create?",
      "options": [
        "JPA requires a public or protected no-arg constructor for entity instantiation",
        "All constructors must be static",
        "Entity classes cannot have constructors",
        "It automatically sets @Id"
      ],
      "correct": "A",
      "memo": "The JPA spec requires a public/protected no-argument constructor for entity classes; providers use it when constructing instances.",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** What is missing from the mapping if `username` must be unique in the database?",
      "options": [
        "`@Transient` on the username",
        "`@Lob` on every field",
        "`@OrderBy(\"username\")`",
        "`@Column(unique = true)` or an equivalent table-level uniqueness constraint"
      ],
      "correct": "D",
      "memo": "A database unique constraint must be expressed in DDL/schema generation or a migration; application-level validation alone doesn't enforce concurrency-safe uniqueness.",
      "snippet": "@Entity\nclass Account {\n  @Id private Long id;\n  @Column(nullable = false)\n  private String username;\n}",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A field caches a calculated display string that should never be stored as a database column. Which annotation applies?",
      "options": [
        "`@JoinColumn`",
        "`@ManyToOne`",
        "`@Transient`",
        "`@EmbeddedId`"
      ],
      "correct": "C",
      "memo": "@Transient tells JPA not to persist/map that field. Java's transient keyword also affects serialization but has different broader semantics.",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A Java field is named `postalCode` while the database column is named `postal_code`. Which mapping makes the relationship explicit?",
      "options": [
        "`@Repository` on the field",
        "`@OrderBy(\"postal_code\")`",
        "`@Column(name = \"postal_code\")`",
        "`@Table(name = \"postal_code\")` on the field"
      ],
      "correct": "C",
      "memo": "@Column(name=...) maps a basic attribute to a named column.",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `Product` embeds a reusable `Money` value object consisting of `amount` and `currency` into its own table. What JPA modeling feature fits best?",
      "options": [
        "`@EnableMethodSecurity`",
        "`@Embeddable` on Money and `@Embedded` on Product's property",
        "`@Controller` on Money",
        "`@ManyToMany` on a String"
      ],
      "correct": "B",
      "memo": "Embeddables represent component/value objects stored as part of the owning entity's table by default.",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Two `Student` Java objects are loaded from one persistence context using EntityManager.find with the same type and primary key. What JPA identity behavior is expected?",
      "options": [
        "The same managed entity instance is returned for that identity within the persistence context",
        "JPA always creates unrelated new objects for each find",
        "Two database rows are inserted",
        "Java compares entity objects only by username"
      ],
      "correct": "A",
      "memo": "The persistence context maintains identity: a particular entity identity is represented by one managed Java object in that context.",
      "marks": 1
    },
    {
      "id": 12,
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
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** With `@Id @GeneratedValue(strategy = GenerationType.IDENTITY)`, how is a primary key normally obtained?",
      "options": [
        "By hashing every getter",
        "By choosing a random Spring Bean",
        "From `@RequestParam`",
        "From a database identity/auto-increment mechanism"
      ],
      "correct": "D",
      "memo": "IDENTITY delegates key generation to the database identity mechanism; specific SQL timing differs from sequence-based strategies.",
      "snippet": "@Id\n@GeneratedValue(strategy = GenerationType.IDENTITY)\nprivate Long id;",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A table `courses` should be mapped to a Java `Course` entity. Which annotation specifies the table name explicitly?",
      "options": [
        "`@ResponseBody` on the class",
        "`@NamedQuery(\"courses\")` alone",
        "`@Table(name = \"courses\")` on the entity class",
        "`@Column(name = \"courses\")` on every field"
      ],
      "correct": "C",
      "memo": "@Table names the backing table; @Column names individual columns.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A field `externalCode` must not be null in the database. Which annotation is an appropriate DDL mapping hint, assuming schema generation/migrations honor it?",
      "options": [
        "`@Pageable`",
        "`@Column(nullable = false)`",
        "`@Transient`",
        "`@OneToMany` on String"
      ],
      "correct": "B",
      "memo": "@Column(nullable=false) expresses nullability in the mapping for schema generation; actual database constraints still must exist in production.",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** A transient entity is automatically dirty-checked by the EntityManager as soon as the Java constructor finishes.",
      "correct": "false",
      "memo": "Dirty checking applies to managed entities in a persistence context, not arbitrary new Java objects.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** A JPA entity needs an identifier mapping, typically declared with `@Id` or `@EmbeddedId`.",
      "correct": "true",
      "memo": "JPA entities require a primary key mapping.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** `@Transient` means that JPA must generate a column for the annotated field.",
      "correct": "false",
      "memo": "@Transient explicitly excludes a property from persistence mapping.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** A managed entity can be updated through dirty checking without an explicit save call to the repository after every setter.",
      "correct": "true",
      "memo": "Changes to managed entities in a transactional context can be flushed automatically.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** A detached entity may still have its primary key value in memory.",
      "correct": "true",
      "memo": "Detachment removes persistence context management; it does not erase Java fields or identifiers.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};
