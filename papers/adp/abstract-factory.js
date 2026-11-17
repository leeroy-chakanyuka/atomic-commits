window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-6-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 6,
  "title": "Abstract Factory",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "design-patterns",
  "intro": "20 short, automatically marked Abstract Factory questions on product families, Java code and provider compatibility.",
  "source": "Original Java teaching examples; cloud resource wrappers do not necessarily provision real cloud resources.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A cloud service must create a matched VM and object-storage resource. For AWS it uses EC2 and S3; for Azure it uses Azure VM and Blob Storage. Which arrangement best matches Abstract Factory?",
      "options": [
        "A separate `new` call at each deployment step",
        "CloudFactory with `createVM()` and `createStorage()` implemented by AWSFactory and AzureFactory",
        "A subclass of S3 that creates VMs",
        "One factory method that changes a text label"
      ],
      "correct": "B",
      "memo": "Abstract Factory provides an interface for creating a related family of products; each concrete provider factory returns matching VM and storage products.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** In a Java interface `CloudFactory`, which method pair best expresses two separate abstract products?",
      "options": [
        "`Object createAnything()` only",
        "`VirtualMachine createVM()` and `CloudStorage createStorage()`",
        "`String getProviderName()` alone",
        "`void logMessage()` and `void close()`"
      ],
      "correct": "B",
      "memo": "Create methods return different product interfaces, one for compute and one for object storage.",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `AWSFactory.createVM()` returns an EC2Instance, while `AWSFactory.createStorage()` returns S3Bucket. What is the corresponding Azure family?",
      "options": [
        "EC2Instance and BlobContainer",
        "AzureVM and AzureBlobContainer",
        "AzureVM and S3Bucket",
        "S3Bucket and AzureBlobContainer"
      ],
      "correct": "B",
      "memo": "A coherent Azure product family pairs the Azure compute resource with Azure Blob Storage.",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer argues an Abstract Factory requires `VMFactory` and `StorageFactory` per provider as separate mandatory types. Is that right?",
      "options": [
        "Yes, one factory per product is mandatory",
        "No, one provider factory can create several kinds of related products",
        "Yes, inheritance cannot be used",
        "No, Abstract Factory can create only VMs"
      ],
      "correct": "B",
      "memo": "A concrete AWSFactory can expose both createVM() and createStorage(), and AzureFactory can do the same.",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** What prints when a CloudFactory is an AWSFactory?",
      "options": [
        "EC2 then S3",
        "AzureVM then Blob",
        "S3 then EC2",
        "Compiler error because interfaces cannot be references"
      ],
      "correct": "A",
      "memo": "AWSFactory.createVM() returns EC2 and createStorage() returns S3, and each product dispatches its name() method.",
      "snippet": "interface VM { String name(); }\ninterface Storage { String name(); }\ninterface CloudFactory { VM createVM(); Storage createStorage(); }\nclass EC2 implements VM { public String name(){return \"EC2\";} }\nclass S3 implements Storage { public String name(){return \"S3\";} }\nclass AWSFactory implements CloudFactory {\n public VM createVM(){return new EC2();}\n public Storage createStorage(){return new S3();}\n}\nCloudFactory f = new AWSFactory();\nSystem.out.println(f.createVM().name());\nSystem.out.println(f.createStorage().name());",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Spot the bug:** `AWSFactory` returns an AzureBlobContainer for storage. Both AzureBlobContainer and S3Bucket implement Storage. What is true?",
      "options": [
        "The compiler always rejects it",
        "It may compile but violates the intended provider family",
        "Java automatically transforms Azure storage into S3",
        "The return type must be Object"
      ],
      "correct": "B",
      "memo": "The type contract Storage doesn't inherently encode provider compatibility; tests/stronger types catch mismatches.",
      "snippet": "class AWSFactory implements CloudFactory {\n public VM createVM(){return new EC2();}\n public Storage createStorage(){return new AzureBlobContainer();}\n}",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A deployment client receives `CloudFactory f` and calls `f.createVM()`, `f.createStorage()`, then `provision()` on both. Why is the client less coupled?",
      "options": [
        "It needs no reference to concrete resource classes",
        "It receives all credentials automatically",
        "It can only deploy AWS",
        "It no longer needs error handling"
      ],
      "correct": "A",
      "memo": "The client uses only the abstract factory and product contracts; provider specifics reside in concrete implementations.",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** You add a new product category, `LoadBalancer`, that every provider factory must support. What usually must change?",
      "options": [
        "Only one concrete VM class",
        "CloudFactory contract and all existing concrete provider factories",
        "Only the UI color palette",
        "None of the existing factories"
      ],
      "correct": "B",
      "memo": "Adding a new product type changes the abstract factory interface and obliges existing implementations to add a creator.",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** You add an entirely new provider, GCP, but the abstract factory's product interfaces remain stable. What is the most direct extension?",
      "options": [
        "Replace AWSFactory with switch statements everywhere",
        "Add GCPFactory and GCP concrete VM/storage products",
        "Change `VM` into a String",
        "Recompile Java with a new keyword"
      ],
      "correct": "B",
      "memo": "A new family is commonly added as a new concrete factory and corresponding concrete products.",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** The interface says `VirtualMachine createVM()`. A concrete factory overrides with `EC2 createVM()`, and `EC2 implements VirtualMachine`. Is it legal?",
      "options": [
        "Yes, Java supports covariant return types",
        "No, return types must always be identical",
        "No, interfaces cannot declare return types",
        "Only if the method is static"
      ],
      "correct": "A",
      "memo": "An overriding method can narrow its return type to a subtype of the declared contract.",
      "snippet": "interface CloudFactory { VirtualMachine createVM(); }\nclass AWSFactory implements CloudFactory {\n public EC2 createVM(){ return new EC2(); }\n}",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A cloud API wrapper is created with `new EC2Resource()`. No SDK call occurs inside the constructor. Is the real VM already launched?",
      "options": [
        "Yes, the type name EC2 is sufficient",
        "No; provisioning requires an actual cloud API operation",
        "Yes, if Factory was used",
        "Cloud creation is impossible from Java"
      ],
      "correct": "B",
      "memo": "Instantiating a Java object is not the same as provisioning infrastructure.",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A deployment needs both AWS and Azure. The user chooses Azure once at startup. Where should the concrete AzureFactory normally be selected?",
      "options": [
        "Inside every provider-neutral resource method",
        "At an application/composition boundary before passing CloudFactory to deployment code",
        "Inside an EC2 constructor",
        "Inside the CloudStorage interface"
      ],
      "correct": "B",
      "memo": "The caller/composition root picks a family; deployment logic uses CloudFactory polymorphically.",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Some Azure resources are configured but the final storage provisioning fails. What should the deployment workflow do?",
      "options": [
        "Assume everything succeeded",
        "Report the failure and apply appropriate cleanup/rollback for partially created resources",
        "Ignore the failure because Abstract Factory guarantees success",
        "Create AWS storage to compensate automatically"
      ],
      "correct": "B",
      "memo": "A creation pattern doesn't remove runtime failure handling; deployment workflows need error reporting and compensating cleanup.",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A single creator subclass chooses only one Payment implementation, while a different factory creates several matching UI widgets. Which pattern best describes the latter?",
      "options": [
        "Factory Method only",
        "Abstract Factory",
        "Observer",
        "Command"
      ],
      "correct": "B",
      "memo": "Abstract Factory covers families of related product kinds rather than just one overridable creation decision.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Java product interfaces are `VM` and `Storage`, with EC2 and S3 as AWS products. Which test most directly detects provider-family mixing?",
      "options": [
        "Assert that createStorage() is non-null",
        "Assert an AWSFactory returns AWS VM AND AWS storage types/identities",
        "Assert the factory's file name is correct",
        "Assert both types implement `toString()`"
      ],
      "correct": "B",
      "memo": "A family-consistency test checks both products, not simply interface conformance.",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** Abstract Factory can internally use polymorphic factory methods.",
      "correct": "true",
      "memo": "True. Factory Method can be used to implement each creation operation exposed by Abstract Factory.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** A factory with `createVM()` and `createStorage()` must return the exact same Java class for both methods.",
      "correct": "false",
      "memo": "False. Different abstract product interfaces represent different kinds of resources.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** Adding a third provider can often be done with a new concrete factory without changing the provider-neutral deployment workflow.",
      "correct": "true",
      "memo": "True, provided the new family satisfies the existing factory/product interfaces.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** Java interfaces automatically prevent an AWSFactory from accidentally returning an Azure storage object that implements the Storage interface.",
      "correct": "false",
      "memo": "False. Provider-family consistency needs correct implementation and tests or stronger type-level constraints.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** Abstract Factory ensures cloud SDK requests always succeed once all classes compile.",
      "correct": "false",
      "memo": "False. It structures object creation; network failures, access permissions and cleanup remain separate concerns.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};
