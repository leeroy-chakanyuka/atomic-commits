window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-21-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 21,
  "title": "Spring Security · Paper 1: Filter Chain & Authorization",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "spring-security",
  "intro": "20 Java Spring Security questions on servlet filters, URL authorization, roles, method rules and HTTP outcomes.",
  "source": "Original questions using Spring Boot 3 / Spring Security 6-style servlet configuration. Assumes default role prefix unless stated.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A Spring Boot 3 API has `@RestController` endpoints and Spring Security on the classpath. What typically handles a request's security before it reaches the controller?",
      "options": [
        "A servlet filter chain managed by Spring Security",
        "Only controller constructors",
        "A SQL trigger",
        "A `@ResponseBody` serializer"
      ],
      "correct": "A",
      "memo": "Spring Security operates primarily through its servlet filter chain, before the request reaches MVC controllers.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** Which rule allows public access to `/health` while requiring authentication for all other requests?",
      "options": [
        "Use `requestMatchers(\"/health\").denyAll()`",
        "Remove the SecurityFilterChain bean",
        "Put `anyRequest().authenticated()` first",
        "Use `requestMatchers(\"/health\").permitAll()` before `anyRequest().authenticated()`"
      ],
      "correct": "D",
      "memo": "Authorization rules are evaluated by match order; the more specific public matcher should precede a catch-all.",
      "snippet": "http.authorizeHttpRequests(auth -> auth\n    .requestMatchers(\"/health\").permitAll()\n    .anyRequest().authenticated()\n);",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A controller is guarded by `.anyRequest().authenticated()`. A logged-in user without any admin role calls `/admin`. If no additional admin rule exists, what does this configuration alone guarantee?",
      "options": [
        "A 404 response",
        "The user is automatically denied",
        "Only authentication; it does not enforce an ADMIN role",
        "Automatic CSRF protection on all GET routes only"
      ],
      "correct": "C",
      "memo": "authenticated() checks that the principal is authenticated, not whether they have a particular role. Add a suitable authorization rule.",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Code tracing:** Which request is blocked by these authorization rules, assuming no other filters or security constraints?",
      "options": [
        "An authenticated GET to `/orders`",
        "An anonymous GET to `/orders`",
        "An authenticated GET to `/public/status`",
        "An anonymous GET to `/public/status`"
      ],
      "correct": "B",
      "memo": "The public URL is permitted. Everything else requires authentication, so anonymous `/orders` requests are denied.",
      "snippet": "http.authorizeHttpRequests(a -> a\n  .requestMatchers(\"/public/**\").permitAll()\n  .anyRequest().authenticated()\n);",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** You configure two `SecurityFilterChain` beans with different security matchers. Which chain handles an incoming servlet request?",
      "options": [
        "All chains always apply fully",
        "The first matching chain in chain order",
        "The chain with the fewest rules regardless of order",
        "The controller selects its favorite chain"
      ],
      "correct": "B",
      "memo": "FilterChainProxy selects the first SecurityFilterChain whose matcher matches, according to configured ordering.",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer uses `.requestMatchers(\"/api/**\").authenticated()` inside `authorizeHttpRequests`. Does that matcher itself restrict *which requests the SecurityFilterChain applies to*?",
      "options": [
        "No, it declares an authorization rule within a matched filter chain; `securityMatcher` controls chain matching",
        "Yes, it changes the servlet context root",
        "Only if method security is enabled",
        "Yes, it turns off Spring Security for every other path"
      ],
      "correct": "A",
      "memo": "Security-chain selection (`securityMatcher`) differs from authorization-rule matching (`requestMatchers` inside authorization configuration).",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** You want `/admin/**` to be accessible only to users with `ROLE_ADMIN`. Which matcher expression is the conventional choice?",
      "options": [
        "`.hasRole(\"ROLE_ADMIN\")` because hasRole adds no prefix",
        "`.permitAll()`",
        "`.anonymous()`",
        "`.hasRole(\"ADMIN\")`"
      ],
      "correct": "D",
      "memo": "hasRole(\"ADMIN\") checks the ROLE_ADMIN authority by default. Supplying ROLE_ADMIN to hasRole is generally incorrect with default role prefix behavior.",
      "snippet": ".requestMatchers(\"/admin/**\").hasRole(\"ADMIN\")",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An API has rules for `/admin/**` and `/api/**`, followed by `anyRequest().denyAll()`. What happens to an unmatched `/diagnostics` route?",
      "options": [
        "It's allowed only on Fridays",
        "It's automatically public",
        "It's denied by the final fallback rule",
        "It's handled by the database"
      ],
      "correct": "C",
      "memo": "A deny-all catch-all makes unexpected endpoints inaccessible unless explicitly allowed.",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Code reasoning:** A configuration has `.requestMatchers(\"/**\").permitAll()` before `.requestMatchers(\"/admin/**\").hasRole(\"ADMIN\")`. What is the practical issue?",
      "options": [
        "permitAll() implicitly requires admin",
        "Java method chaining evaluates from right to left",
        "The `/admin/**` rule is shadowed by the broader first matcher (and this ordering can be rejected as unreachable in validation)",
        "Specific matchers are always automatically reordered"
      ],
      "correct": "C",
      "memo": "Broad catch-all rules before specific ones prevent the intended specific authorization from taking effect; Spring may detect invalid/unreachable ordering.",
      "snippet": ".requestMatchers(\"/**\").permitAll()\n.requestMatchers(\"/admin/**\").hasRole(\"ADMIN\")",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A team moves from a monolithic MVC app with sessions to an API protected by bearer tokens. What should they revisit rather than blindly copying defaults?",
      "options": [
        "The Java file encoding",
        "HTTP session policy and CSRF threat model",
        "Only the CSS stylesheet",
        "Database auto-commit settings"
      ],
      "correct": "B",
      "memo": "Session creation and CSRF requirements depend on how clients authenticate. A token in an Authorization header differs from an automatically sent session cookie.",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A request's authentication has succeeded, but its principal lacks the authority required for `/reports/private`. Which HTTP status normally represents this authorization failure?",
      "options": [
        "403 Forbidden",
        "500 Internal Server Error",
        "201 Created",
        "302 Found"
      ],
      "correct": "A",
      "memo": "An authenticated principal lacking permission normally gets 403; unauthenticated access typically results in an authentication entry point such as 401 or a redirect.",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A client sends no credentials to an API secured with HTTP Basic and requests a protected endpoint. Which status does an API-style Basic authentication entry point normally return?",
      "options": [
        "403 Forbidden by definition",
        "204 No Content",
        "200 OK",
        "401 Unauthorized with a WWW-Authenticate challenge"
      ],
      "correct": "D",
      "memo": "HTTP Basic authentication challenges unauthenticated clients with 401 and a WWW-Authenticate header.",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** Why might a method annotated `@PreAuthorize(\"hasRole('ADMIN')\")` not be protected in a project that has servlet security but no method-security activation?",
      "options": [
        "Controller methods cannot have annotations",
        "The annotation always applies without any infrastructure",
        "`@PreAuthorize` only works in C++",
        "Method security must be enabled (for example `@EnableMethodSecurity`) to enforce the annotation"
      ],
      "correct": "D",
      "memo": "Method-security interception requires the corresponding configuration, such as @EnableMethodSecurity.",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A single endpoint `GET /products` is public, but `POST /products` should require admin authority. What is the clearest authorization approach?",
      "options": [
        "Delete the POST endpoint",
        "Make all `/products` requests public",
        "Match both the path and HTTP method in authorization rules",
        "Use one String comparison inside every entity"
      ],
      "correct": "C",
      "memo": "Security authorization can distinguish methods: GET permitAll and POST hasRole(ADMIN), ordered before the catch-all.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A service decides whether a user may edit a record based on whether the record belongs to them. Why can a path-only rule such as `/records/** authenticated()` be insufficient?",
      "options": [
        "Security filters cannot run on POST",
        "The record ownership is domain data not captured by authentication alone",
        "It always denies all users",
        "Spring cannot read path variables"
      ],
      "correct": "B",
      "memo": "Ownership is contextual authorization. Authentication alone doesn't guarantee access to a specific record; enforce ownership in application or method-level authorization.",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** `permitAll()` means an endpoint cannot pass through Spring Security filters.",
      "correct": "false",
      "memo": "permitAll grants access at the authorization stage; earlier security filters may still execute.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** A secured request may be rejected before Spring MVC invokes its controller.",
      "correct": "true",
      "memo": "Servlet security filters run in the request pipeline before controller execution.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** `.authenticated()` and `.hasRole(\"ADMIN\")` express the same authorization condition.",
      "correct": "false",
      "memo": "The first requires authentication; the second checks for a role-related authority.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** A good fallback for an API that should expose only explicitly listed routes can be `.anyRequest().denyAll()`.",
      "correct": "true",
      "memo": "An explicit deny-all fallback can enforce a conservative allowlist of endpoints.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** A user who has authenticated successfully may still receive HTTP 403 for an endpoint.",
      "correct": "true",
      "memo": "403 is commonly returned when an authenticated user is not authorized for a protected resource.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};
