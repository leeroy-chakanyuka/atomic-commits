window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-12-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 12,
  "title": "Flyweight Pattern",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "design-patterns",
  "intro": "20 Flyweight objective questions on intrinsic vs extrinsic state, reusable Java objects, caching and subtle bugs. Fully automatic marking.",
  "source": "Original Java design-pattern practice using maps, games, editors and rendering examples.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A map draws 100,000 trees, but only four species have distinct textures and colors. Each tree has its own x/y coordinates. Which design most directly matches **Flyweight**?",
      "options": [
        "Create 100,000 separate immutable copies of every texture",
        "Share four immutable TreeType objects and store per-tree positions separately",
        "Use a Visitor solely to change tree coordinates",
        "Make all trees occupy the same x/y location"
      ],
      "correct": "B",
      "memo": "Flyweight shares reusable intrinsic data (TreeType, texture/color) while keeping per-instance extrinsic x/y coordinates separate.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A game uses a shared `BulletStyle` containing sprite and color, while each bullet has position and velocity. Which values belong in **extrinsic state**?",
      "options": [
        "Sprite only",
        "Color and texture",
        "Position and velocity",
        "The shared BulletStyle cache key alone"
      ],
      "correct": "C",
      "memo": "Each bullet's position and velocity vary per occurrence; only stable reusable state should be intrinsic/shared.",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A text editor represents a million characters but only a few font styles. Where should font style and glyph shape usually be stored when using Flyweight?",
      "options": [
        "In a reusable shared glyph/style object",
        "In a new font image for every character",
        "As one global cursor position",
        "In the command that deletes a user"
      ],
      "correct": "A",
      "memo": "Stable appearance/glyph information can be cached/shared; character positions and document-specific contexts remain external.",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** A Flyweight factory caches TreeType by species. What does `a == b` print for identical keys?",
      "options": [
        "false, because new is called twice by the caller",
        "true, because the factory returns the same cached instance",
        "false, because equals() always compares references",
        "Compilation fails because maps cannot contain objects"
      ],
      "correct": "B",
      "memo": "computeIfAbsent creates and caches one TreeType per key, so both references point to the same instance.",
      "snippet": "class TreeType {\n final String species;\n TreeType(String species) { this.species = species; }\n}\nclass TreeTypeFactory {\n private final Map<String, TreeType> cache = new HashMap<>();\n TreeType get(String species) {\n  return cache.computeIfAbsent(species, TreeType::new);\n }\n}\nTreeTypeFactory f = new TreeTypeFactory();\nTreeType a = f.get(\"oak\");\nTreeType b = f.get(\"oak\");\nSystem.out.println(a == b);",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Spot the design bug:** Every tree gets the same shared TreeType, but TreeType stores a mutable `x` position. Why is this wrong?",
      "options": [
        "An object cannot have any fields",
        "Moving one tree can appear to move all trees using that shared object",
        "Java automatically clones TreeType when x changes",
        "Flyweight forbids rendering methods"
      ],
      "correct": "B",
      "memo": "x is extrinsic per-tree state and should be passed into draw(x,y) or stored in each Tree context rather than in shared TreeType.",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A Flyweight factory uses `Map<String, IconStyle>` to cache icons by category. The icon's color also varies independently and is stored in the shared style. What must the cache key account for?",
      "options": [
        "Only the number of icon instances",
        "All intrinsic values that determine the shared style, such as category and color",
        "Only a random UUID per icon",
        "Nothing, one object must be used for all icons"
      ],
      "correct": "B",
      "memo": "Distinct intrinsic configurations must have distinct keys, otherwise the cache may incorrectly share an incompatible style.",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A million particle instances share a `ParticleType` object but each stores its own position. What is the main memory benefit?",
      "options": [
        "There are no particle objects anymore",
        "Large repeated immutable type data is stored once per type, rather than once per particle",
        "Every position can be deduplicated regardless of value",
        "The GPU memory requirement becomes zero"
      ],
      "correct": "B",
      "memo": "Flyweight reduces duplication of heavyweight state; per-particle extrinsic state still consumes memory.",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** The same flyweight draws twice with different caller-supplied coordinates. What prints?",
      "options": [
        "oak at 1,2 then oak at 5,8",
        "oak at 5,8 twice",
        "oak at 1,2 twice",
        "The compiler rejects passing coordinates"
      ],
      "correct": "A",
      "memo": "The flyweight uses supplied extrinsic coordinates per call; shared species stays constant.",
      "snippet": "class TreeType {\n private final String name;\n TreeType(String name){this.name=name;}\n String draw(int x,int y){return name+\" at \"+x+\",\"+y;}\n}\nTreeType oak = new TreeType(\"oak\");\nSystem.out.println(oak.draw(1,2));\nSystem.out.println(oak.draw(5,8));",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A renderer needs to draw 100 icons, but it only has two icon styles. Should the same Flyweight object necessarily also store each icon's screen position?",
      "options": [
        "Yes, all positions must become one shared field",
        "No, position belongs to each occurrence or to the draw() call",
        "Yes, because Flyweight copies state automatically",
        "No, because position can never be represented in Java"
      ],
      "correct": "B",
      "memo": "The per-icon x/y position is extrinsic; storing it in a shared flyweight would cause cross-instance interference.",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer introduces Flyweight for a list containing only three tiny, distinct objects, each with unique data. What is a realistic trade-off?",
      "options": [
        "Caching/lookup complexity may outweigh negligible memory savings",
        "Flyweight always halves latency",
        "Flyweight requires all data to be static",
        "Flyweight is required for every Java List"
      ],
      "correct": "A",
      "memo": "The pattern is most useful with numerous repeated intrinsic states; caches, lookups and lifetimes have costs.",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** Which version avoids accidental shared position state?",
      "options": [
        "`TreeType` contains mutable `int x,y` used by all trees",
        "`TreeType.draw(int x,int y)` receives coordinates from individual Tree objects",
        "`TreeType` stores one static `lastX` for all uses",
        "Every TreeType must extend Tree"
      ],
      "correct": "B",
      "memo": "External coordinates allow one immutable shared TreeType to represent many positioned trees.",
      "snippet": "final class TreeType {\n private final String texture;\n TreeType(String texture) { this.texture = texture; }\n void draw(int x, int y) { /* render texture at x,y */ }\n}",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `HashMap.computeIfAbsent()` is used to cache reusable font styles. Multiple threads can call the factory simultaneously. What should the implementation consider?",
      "options": [
        "HashMap is automatically safe for concurrent writes",
        "Use suitable synchronization or ConcurrentHashMap to protect shared cache access",
        "Make each glyph's x position static",
        "Prevent styles from being immutable"
      ],
      "correct": "B",
      "memo": "Shared mutable caches require thread-safe access. A ConcurrentHashMap can coordinate map operations, but side effects in mapping functions still need care.",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A shared TreeType instance is referenced by all trees of its species. The last tree is removed. Which statement is correct about memory lifetime?",
      "options": [
        "Flyweight must disappear immediately",
        "It may remain alive while the factory cache still holds a strong reference",
        "Removing one tree always empties the cache",
        "Java cannot reclaim Tree objects"
      ],
      "correct": "B",
      "memo": "The cache owns its references until eviction/clear or factory collection. Cache lifetime/eviction can matter.",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Compare:** A `TextureFactory` caches shared immutable textures, while a `ModelDecorator` adds logging around a model. Which distinction is accurate?",
      "options": [
        "Flyweight shares intrinsic state; Decorator adds optional behavior through wrappers",
        "Flyweight always implements Decorator",
        "Decorator is required for memory-sharing",
        "Both necessarily create a subclass per tree"
      ],
      "correct": "A",
      "memo": "Flyweight addresses memory usage through shared state; Decorator adds layered responsibilities around a component.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A game engine uses a pool of exactly identical reusable sprites. Which test most directly checks Flyweight sharing without assuming any render position?",
      "options": [
        "Request the same key twice and check that the returned references are identical",
        "Render every sprite at the same x,y location",
        "Test that each call creates a fresh style object",
        "Check that TreeType stores mutable x and y"
      ],
      "correct": "A",
      "memo": "Identity equality for the same immutable intrinsic key verifies caching/reuse. Different keys should also be tested for correct distinction.",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** Flyweight can reduce memory use by sharing immutable intrinsic state among many logical objects.",
      "correct": "true",
      "memo": "True. Share stable repeated state while retaining per-occurrence data separately.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** Each logical tree must have its own private copy of the same texture for Flyweight to work.",
      "correct": "false",
      "memo": "False. Reusing the same texture/TreeType is the purpose of Flyweight.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** Putting user-specific mutable details inside a shared flyweight can cause one user's changes to affect others.",
      "correct": "true",
      "memo": "True. Per-client data is extrinsic and should not be mutated on the common shared object.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** A Flyweight factory may use a cache indexed by the intrinsic properties that define a reusable object.",
      "correct": "true",
      "memo": "True. The cache maps an appropriate intrinsic-state key to a shared object.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** Flyweight guarantees better performance in all programs regardless of how many objects share state.",
      "correct": "false",
      "memo": "False. Sharing helps when duplicated heavy state is substantial; lookup/synchronization/cache overhead may outweigh benefits elsewhere.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};
