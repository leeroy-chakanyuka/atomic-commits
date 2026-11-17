window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-14-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 14,
  "title": "Iterator Pattern",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "design-patterns",
  "intro": "20 Java Iterator questions including cursor behavior, `Iterable`, list traversal, custom iterators, fail-fast modification and mistakes.",
  "source": "Original Java pattern practice using collection and tree traversal examples.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A university app holds students in an ArrayList today but may switch to a tree-backed collection. Clients should visit each student without knowing the storage structure. Which pattern best fits?",
      "options": [
        "Factory Method",
        "Iterator",
        "Visitor",
        "Bridge"
      ],
      "correct": "B",
      "memo": "Iterator exposes sequential traversal through a common cursor interface while hiding aggregate representation.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A Java `Iterator<Student>` is returned from an enrolled-students collection. Which pair of operations advances the traversal?",
      "options": [
        "`observe()` and `notify()`",
        "`create()` and `clone()`",
        "`size()` and `clear()`",
        "`hasNext()` and `next()`"
      ],
      "correct": "D",
      "memo": "hasNext() checks availability; next() returns the next item and advances the cursor.",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** Given the following List and Iterator, what prints?",
      "options": [
        "A then A",
        "No output because an Iterator is a class",
        "A then B",
        "B then A"
      ],
      "correct": "C",
      "memo": "Calling next() advances from the first item to the second; the code prints A and then B.",
      "snippet": "List<String> names = List.of(\"A\", \"B\", \"C\");\nIterator<String> it = names.iterator();\nSystem.out.println(it.next());\nSystem.out.println(it.next());",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A student collection wants to support Java enhanced for-loops (`for (Student s : students)`). Which interface should its collection class usually implement?",
      "options": [
        "Iterable<Student> with iterator() returning an Iterator<Student>",
        "Observer",
        "Runnable",
        "Iterator<Student> only"
      ],
      "correct": "A",
      "memo": "The enhanced-for statement expects an array or an Iterable; Iterable.iterator() returns an Iterator.",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** A developer repeatedly calls `it.next()` but never checks `it.hasNext()`. What happens after all list items are consumed?",
      "options": [
        "The iterator automatically restarts",
        "Java compiles a new List",
        "next() always returns null",
        "next() typically throws NoSuchElementException"
      ],
      "correct": "D",
      "memo": "Iterator.next() throws NoSuchElementException when there are no more elements, per its contract.",
      "snippet": "Iterator<Integer> it = List.of(10).iterator();\nSystem.out.println(it.next());\nSystem.out.println(it.next());",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Two clients iterate the same immutable list using two separately acquired iterators. One client consumes two items. What should happen to the other iterator?",
      "options": [
        "It also advances automatically",
        "It keeps its independent cursor position",
        "Both are invalidated just because next() was called",
        "They must share a static index"
      ],
      "correct": "B",
      "memo": "Separate Iterator objects have independent traversal state; one iterator advancing should not move another's cursor.",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** What does this simple traversal print?",
      "options": [
        "4",
        "5",
        "2",
        "3"
      ],
      "correct": "A",
      "memo": "The while loop consumes 1, 2, 3 and 4, incrementing count four times.",
      "snippet": "Iterator<Integer> it = List.of(1,2,3,4).iterator();\nint count = 0;\nwhile (it.hasNext()) { it.next(); count++; }\nSystem.out.println(count);",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A custom `TreeCollection` offers both depth-first and breadth-first exploration without exposing Node links publicly. Which implementation approach best matches Iterator?",
      "options": [
        "Require Visitor for every iteration",
        "Expose the entire Node hierarchy to callers",
        "Provide separate DFSIterator and BFSIterator implementations behind Iterator<Node>",
        "Copy the tree to SQL for every traversal"
      ],
      "correct": "C",
      "memo": "Different traversal algorithms can be encapsulated as iterators sharing a common interface.",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** An Iterator over an array has index 0 and length 3. What is wrong with `hasNext()`?",
      "options": [
        "It uses <= instead of < and can attempt to access beyond the end",
        "A boolean cannot be returned",
        "index should always start at 3",
        "The last valid index is 3"
      ],
      "correct": "A",
      "memo": "Valid indices are 0..2, so hasNext() should return index < data.length.",
      "snippet": "class ArrayIterator<T> implements Iterator<T> {\n private final T[] data;\n private int index = 0;\n ArrayIterator(T[] data){this.data=data;}\n public boolean hasNext(){ return index <= data.length; } // bug\n public T next(){ return data[index++]; }\n}",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A Java ArrayList is structurally modified through `list.add()` while its existing iterator is active. What is often the outcome on subsequent iteration in single-threaded code?",
      "options": [
        "Java silently creates an iterator over a snapshot",
        "Every Iterator automatically updates safely",
        "Its fail-fast iterator may throw ConcurrentModificationException",
        "The list becomes immutable"
      ],
      "correct": "C",
      "memo": "ArrayList iterators are generally fail-fast on detected structural modification outside iterator operations, though fail-fast isn't a correctness guarantee.",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A collection's Iterator has a `remove()` method but its implementation does not support removal. What is a valid Java behavior?",
      "options": [
        "Silently remove all remaining items",
        "Return a boolean always",
        "`remove()` must always succeed",
        "Throw UnsupportedOperationException"
      ],
      "correct": "D",
      "memo": "Iterator.remove() is optional; unsupported implementations may throw UnsupportedOperationException.",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** Two iterators are acquired from the same list. What prints?",
      "options": [
        "1 and 2",
        "1 and 1",
        "2 and 2",
        "A ConcurrentModificationException"
      ],
      "correct": "B",
      "memo": "Each iterator begins at the first element and has its own cursor; both first next() calls return 1.",
      "snippet": "List<Integer> xs = List.of(1,2,3);\nIterator<Integer> a = xs.iterator();\nIterator<Integer> b = xs.iterator();\nSystem.out.println(a.next());\nSystem.out.println(b.next());",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Compare:** What is the difference between Iterator and Visitor when working with a tree of expression nodes?",
      "options": [
        "They are identical patterns",
        "Iterator primarily controls how nodes are traversed; Visitor defines operations across differing node types",
        "Visitor is required to move an iterator's cursor",
        "Iterator adds a new operation to every node type through double dispatch"
      ],
      "correct": "B",
      "memo": "Iterator encapsulates traversal; Visitor dispatches node-specific operations using visitor methods, often after traversal selects nodes.",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A service should expose orders in chronological order without leaking whether they live in an array or linked list. Which element should callers rely on?",
      "options": [
        "A shared Iterator<Order> contract",
        "A public Node.next pointer",
        "The exact ArrayList index layout",
        "A factory that returns Strings instead of orders"
      ],
      "correct": "A",
      "memo": "Iterator decouples clients from the data structure and defines a sequence of elements.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A mutable collection supports live iterators and an alternative snapshot iterator. Which trade-off is accurate?",
      "options": [
        "Snapshot iterators must expose private data structures",
        "Snapshot iterators see every future mutation instantly",
        "A snapshot gives a stable view but may require memory/copying and not reflect later changes",
        "Live iterators always ignore concurrent modifications safely"
      ],
      "correct": "C",
      "memo": "Snapshot traversal stabilizes the sequence at a chosen time, at possible memory/time cost; live iterators have different change semantics.",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** An Iterator stores or otherwise manages traversal progress separately from the collection's public element representation.",
      "correct": "true",
      "memo": "True. It usually owns cursor/traversal state and hides collection internals.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** The Java Iterator.next() method is required to return null at the end of iteration.",
      "correct": "false",
      "memo": "False. next() throws NoSuchElementException when no next element exists.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** An enhanced for-loop can work with an object implementing Iterable<T> and returning an Iterator<T>.",
      "correct": "true",
      "memo": "True. Iterable supplies the iterator used by the loop.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** Every Java Iterator implementation guarantees that modifying its underlying collection concurrently is safe.",
      "correct": "false",
      "memo": "False. Many iterators are fail-fast or require defined synchronization/snapshot semantics.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** Two independent Iterator objects can walk the same collection at different positions.",
      "correct": "true",
      "memo": "True. Each iterator can maintain its own cursor state.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};
