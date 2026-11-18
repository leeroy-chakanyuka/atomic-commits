window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-29-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 29,
  "title": "Spring Security · Mega Paper",
  "session": 1,
  "limitSeconds": 7200,
  "version": 3,
  "group": "spring-security",
  "intro": "80 challenging mixed Spring Security questions from four sets: authorization, authentication, CSRF, sessions, OAuth2, JWT, testing and security mistakes.",
  "source": "Original 80 questions reused and interleaved from the four topic papers in this section; option order rebalanced.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A Spring Boot 3 API has `@RestController` endpoints and Spring Security on the classpath. What typically handles a request's security before it reaches the controller?",
      "options": [
        "A `@ResponseBody` serializer",
        "A servlet filter chain managed by Spring Security",
        "Only controller constructors",
        "A SQL trigger"
      ],
      "correct": "B",
      "memo": "Spring Security operates primarily through its servlet filter chain, before the request reaches MVC controllers.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A registration endpoint stores user passwords in plaintext so they can be emailed back later. What's the most important correction?",
      "options": [
        "Store a one-way adaptive password hash using a PasswordEncoder and never email the original password",
        "Convert password characters to uppercase",
        "Save the password in a second audit table",
        "Encrypt with a reversible shared key and print it to logs"
      ],
      "correct": "A",
      "memo": "Use adaptive one-way password hashing such as bcrypt/Argon2 via a suitable PasswordEncoder. Reset passwords rather than retrieving them.",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A browser sends a JWT in `Authorization: Bearer <token>` to a Spring OAuth2 resource server. Which activity is required before trusting the token's claims?",
      "options": [
        "Ask the controller to compare Strings",
        "Parse it as SQL",
        "Decode its Base64URL payload only",
        "Validate its signature, expiry, and relevant issuer/audience constraints as configured"
      ],
      "correct": "D",
      "memo": "JWT payloads are merely encoded, not inherently trustworthy. The resource server must validate the cryptographic signature and relevant registered claims.",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A protected Spring MVC endpoint works when called normally but your `MockMvc` test expects a 200 with no credentials and receives 401 or a redirect. What's the most likely explanation?",
      "options": [
        "GET always requires CSRF tokens",
        "The test method must be static",
        "Security is active and the test needs an appropriate authenticated principal or must expect an unauthenticated response",
        "JPA entities cannot be tested"
      ],
      "correct": "C",
      "memo": "A secured endpoint may respond with 401 or an authentication redirect when no principal is provided. Match the test to the authorization contract.",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "True or false",
      "prompt": "**True/False:** `permitAll()` means an endpoint cannot pass through Spring Security filters.",
      "correct": "false",
      "memo": "permitAll grants access at the authorization stage; earlier security filters may still execute.",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** A password was stored using BCryptPasswordEncoder. How should a login test compare a submitted password with the stored value?",
      "options": [
        "`rawPassword.equals(storedHash)`",
        "`encoder.decode(storedHash)`",
        "`encoder.matches(rawPassword, storedHash)`",
        "`encoder.encode(rawPassword).equals(storedHash)`"
      ],
      "correct": "C",
      "memo": "BCrypt uses a random salt so independently encoded strings differ. `matches` verifies the raw password against the stored encoded hash.",
      "snippet": "PasswordEncoder encoder = new BCryptPasswordEncoder();\nString storedHash = encoder.encode(\"s3cret\");\nboolean ok = encoder.matches(\"s3cret\", storedHash);",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "True or false",
      "prompt": "**True/False:** Base64URL-decoding a JWT and reading its claims is sufficient to prove that the token was issued by your trusted provider.",
      "correct": "false",
      "memo": "Encoded claims are untrusted until cryptographic and relevant claim validation succeeds.",
      "marks": 1
    },
    {
      "id": 8,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** A MockMvc POST to a session-authenticated, CSRF-protected endpoint returns 403 despite an authenticated test user. What should the test add?",
      "options": [
        "`.with(user(\"admin\").roles(\"ADMIN\"))` is enough to bypass CSRF",
        "`.with(csrf())` to the request where appropriate",
        "`.with(anonymous())`",
        "`.accept(\"image/jpeg\")`"
      ],
      "correct": "B",
      "memo": "An authenticated user is not enough for CSRF-protected state-changing requests; add a CSRF token in test requests.",
      "snippet": "mockMvc.perform(post(\"/profile\")\n  .with(user(\"alice\").roles(\"USER\"))\n  .with(csrf()))\n  .andExpect(status().isOk());",
      "marks": 1
    },
    {
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** Which rule allows public access to `/health` while requiring authentication for all other requests?",
      "options": [
        "Use `requestMatchers(\"/health\").permitAll()` before `anyRequest().authenticated()`",
        "Use `requestMatchers(\"/health\").denyAll()`",
        "Remove the SecurityFilterChain bean",
        "Put `anyRequest().authenticated()` first"
      ],
      "correct": "A",
      "memo": "Authorization rules are evaluated by match order; the more specific public matcher should precede a catch-all.",
      "snippet": "http.authorizeHttpRequests(auth -> auth\n    .requestMatchers(\"/health\").permitAll()\n    .anyRequest().authenticated()\n);",
      "marks": 1
    },
    {
      "id": 10,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A user successfully authenticates with their email and password. Which Spring Security object normally represents the verified identity and authorities for the request?",
      "options": [
        "The HTML template",
        "A JPA EntityManager transaction",
        "The servlet's URL only",
        "An Authentication placed in the SecurityContext"
      ],
      "correct": "D",
      "memo": "Successful authentication is represented by Authentication, typically held in the SecurityContext.",
      "marks": 1
    },
    {
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A client obtains an access token from an authorization server, then calls a protected API. Which role does the API usually perform?",
      "options": [
        "JPA entity manager",
        "OAuth2 authorization server automatically",
        "CSS rendering service",
        "OAuth2 resource server"
      ],
      "correct": "D",
      "memo": "The API consuming and validating bearer access tokens is a resource server, separate from the issuer/authorization server.",
      "marks": 1
    },
    {
      "id": 12,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A `@PreAuthorize` rule reads `#id`, but the Java method parameter is named `recordId` and no suitable parameter metadata/annotation maps it to `id`. What is the probable failure?",
      "options": [
        "The database renames the parameter",
        "Spring converts it to a CSS class",
        "The SpEL parameter reference may not resolve as intended, causing authorization failure",
        "Method-security expressions ignore parameter names"
      ],
      "correct": "C",
      "memo": "Method-security expressions need valid parameter references. Match the actual parameter or use an explicit naming mechanism.",
      "marks": 1
    },
    {
      "id": 13,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A controller is guarded by `.anyRequest().authenticated()`. A logged-in user without any admin role calls `/admin`. If no additional admin rule exists, what does this configuration alone guarantee?",
      "options": [
        "The user is automatically denied",
        "Only authentication; it does not enforce an ADMIN role",
        "Automatic CSRF protection on all GET routes only",
        "A 404 response"
      ],
      "correct": "B",
      "memo": "authenticated() checks that the principal is authenticated, not whether they have a particular role. Add a suitable authorization rule.",
      "marks": 1
    },
    {
      "id": 14,
      "kind": "True or false",
      "prompt": "**True/False:** PasswordEncoder.matches should be used for verifying a raw password against a bcrypt hash.",
      "correct": "true",
      "memo": "BCrypt encodes with salts; verify using `matches` rather than comparing two separately generated encoded strings.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Code reasoning:** Which Spring Security configuration is typically used to validate JWT bearer tokens on a resource server?",
      "options": [
        "`.oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()))`",
        "`.formLogin(form -> form.disable())` alone",
        "`.authorizeHttpRequests(a -> a.anyRequest().permitAll())` only",
        "`.rememberMe(Customizer.withDefaults())`"
      ],
      "correct": "A",
      "memo": "oauth2ResourceServer().jwt() activates JWT resource-server authentication; appropriate issuer/jwk configuration is also required.",
      "snippet": "http.oauth2ResourceServer(o -> o.jwt(Customizer.withDefaults()));",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** Mocking an authenticated principal automatically provides a valid CSRF token for every state-changing MockMvc request.",
      "correct": "false",
      "memo": "Authentication and CSRF are separate filters/requirements; tests may need to supply both.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "Multiple choice",
      "prompt": "**Code tracing:** Which request is blocked by these authorization rules, assuming no other filters or security constraints?",
      "options": [
        "An anonymous GET to `/orders`",
        "An authenticated GET to `/public/status`",
        "An anonymous GET to `/public/status`",
        "An authenticated GET to `/orders`"
      ],
      "correct": "A",
      "memo": "The public URL is permitted. Everything else requires authentication, so anonymous `/orders` requests are denied.",
      "snippet": "http.authorizeHttpRequests(a -> a\n  .requestMatchers(\"/public/**\").permitAll()\n  .anyRequest().authenticated()\n);",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `UserDetailsService.loadUserByUsername` is implemented to fetch users from your database. Does that method itself normally verify a submitted password?",
      "options": [
        "Yes; servlet filters are never involved",
        "No; passwords are never checked by Spring Security",
        "Yes, it must compare raw passwords manually inside SQL",
        "No; it loads user details and a provider, such as DaoAuthenticationProvider, performs password verification using PasswordEncoder"
      ],
      "correct": "D",
      "memo": "UserDetailsService loads the record/authorities; a configured authentication provider performs credential checks.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A JWT is syntactically well-formed and not expired, but its issuer is not the trusted issuer configured for your API. What should happen?",
      "options": [
        "Grant ROLE_ADMIN",
        "Accept it because it has three dot-separated sections",
        "Reject it if issuer validation is required by the configured resource server",
        "Convert it to a session cookie automatically"
      ],
      "correct": "C",
      "memo": "A token may be correctly formatted yet untrusted. Validate issuer according to your authorization-server configuration.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A service method annotated `@PreAuthorize` is called from another method inside the same instance via `this.protectedMethod()`. With proxy-based interception, why may the check not execute?",
      "options": [
        "JVM always interprets `this` as anonymous",
        "Self-invocation bypasses the proxy boundary",
        "Java will not compile two methods in the same class",
        "Security only executes for GET requests"
      ],
      "correct": "B",
      "memo": "Spring AOP proxy advice typically applies to calls crossing the proxy, not direct self-invocation.",
      "marks": 1
    },
    {
      "id": 21,
      "kind": "True or false",
      "prompt": "**True/False:** A secured request may be rejected before Spring MVC invokes its controller.",
      "correct": "true",
      "memo": "Servlet security filters run in the request pipeline before controller execution.",
      "marks": 1
    },
    {
      "id": 22,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A web app authenticates users with a session cookie. The attacker places a malicious POST form on another website, hoping the browser will submit the victim's authenticated cookie. Which protection addresses this class of attack?",
      "options": [
        "CORS alone",
        "CSRF protection",
        "SQL query caching",
        "Unique indexes"
      ],
      "correct": "B",
      "memo": "CSRF defenses ensure state-changing cookie-authenticated requests have a valid origin/token; CORS is not itself a sufficient CSRF defense.",
      "marks": 1
    },
    {
      "id": 23,
      "kind": "True or false",
      "prompt": "**True/False:** A validly signed JWT may still be unacceptable to an API because its `aud` audience is wrong.",
      "correct": "true",
      "memo": "Resource servers should validate audience where appropriate to prevent cross-resource token use.",
      "marks": 1
    },
    {
      "id": 24,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A controller catches every AuthenticationException and always returns HTTP 200 with `{error:'invalid'}`. What's the API concern?",
      "options": [
        "It makes success and failure indistinguishable through HTTP status codes, breaking standard client handling",
        "Returning JSON is forbidden",
        "All browsers erase failed responses",
        "It prevents controller mapping"
      ],
      "correct": "A",
      "memo": "Use appropriate status codes, e.g., 401 for unauthenticated access; do not disguise authentication failure as success.",
      "marks": 1
    },
    {
      "id": 25,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** You configure two `SecurityFilterChain` beans with different security matchers. Which chain handles an incoming servlet request?",
      "options": [
        "The chain with the fewest rules regardless of order",
        "The controller selects its favorite chain",
        "All chains always apply fully",
        "The first matching chain in chain order"
      ],
      "correct": "D",
      "memo": "FilterChainProxy selects the first SecurityFilterChain whose matcher matches, according to configured ordering.",
      "marks": 1
    },
    {
      "id": 26,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An API accepts JWTs only in manually attached Authorization headers and never authenticates using ambient cookies. Should CSRF be enabled solely because the API accepts POST?",
      "options": [
        "CSRF can be replaced by making database tables private",
        "Always; every POST automatically needs CSRF tokens regardless of credentials",
        "The decision depends on whether browsers automatically attach credentials; header-only bearer tokens usually don't create the same CSRF risk",
        "CSRF applies only to GET"
      ],
      "correct": "C",
      "memo": "The CSRF threat comes from browsers automatically attaching authentication material. A pure Authorization-header bearer API commonly disables CSRF, unlike cookie-backed sessions.",
      "marks": 1
    },
    {
      "id": 27,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A JWT header says `alg=none` while the API expects signed tokens from a trusted authority. Which behavior is safe?",
      "options": [
        "Call the authorization server's logout endpoint",
        "Accept it if the username claim is present",
        "Reject unsigned tokens in a signed-token validation flow",
        "Treat it as a password hash"
      ],
      "correct": "C",
      "memo": "An unsigned token must not bypass signature validation; trust only configured token algorithms and keys.",
      "marks": 1
    },
    {
      "id": 28,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer tests an admin endpoint using `@WithMockUser(roles=\"ADMIN\")`. Which authority is typically granted to that test user?",
      "options": [
        "Every role in the application",
        "`ROLE_ADMIN`",
        "`ADMIN` without prefix",
        "`SCOPE_ADMIN` only"
      ],
      "correct": "B",
      "memo": "WithMockUser roles commonly map to ROLE_-prefixed GrantedAuthority values.",
      "marks": 1
    },
    {
      "id": 29,
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
      "id": 30,
      "kind": "True or false",
      "prompt": "**True/False:** Setting a cookie's HttpOnly flag alone makes CSRF impossible.",
      "correct": "false",
      "memo": "HttpOnly affects JavaScript cookie access; cookies are still attached to requests according to browser rules.",
      "marks": 1
    },
    {
      "id": 31,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A user has `ROLE_ADMIN` authority, but Spring's default JWT resource server maps scopes to `SCOPE_...` authorities. What do you need before `hasRole(\"ADMIN\")` will work with those tokens?",
      "options": [
        "Disable all signature verification",
        "Rename the endpoint to /admin",
        "Nothing, because `scope` always means role",
        "Map the relevant token claim into the expected role authority, or authorize using the actual `SCOPE_...` values"
      ],
      "correct": "D",
      "memo": "By default scopes appear as SCOPE_ authorities, not ROLE_ authorities. Configure appropriate converters or use hasAuthority for scopes.",
      "marks": 1
    },
    {
      "id": 32,
      "kind": "True or false",
      "prompt": "**True/False:** Spring's proxy-based method-security interception may be bypassed by direct self-invocation.",
      "correct": "true",
      "memo": "Calling the secured method through `this` can avoid the proxy and its advice.",
      "marks": 1
    },
    {
      "id": 33,
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
      "id": 34,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** A session-backed browser login app globally disables CSRF with no alternative protection. What's the concern?",
      "options": [
        "All GET requests become SQL injections",
        "There is no concern, since HTTPS prevents CSRF",
        "Cross-site state-changing requests may exploit automatically sent session cookies",
        "Authentication stops working automatically"
      ],
      "correct": "C",
      "memo": "For browser form/session authentication, disabling CSRF can expose writes to cross-site request forgery.",
      "snippet": "http.csrf(csrf -> csrf.disable());\nhttp.formLogin(Customizer.withDefaults());",
      "marks": 1
    },
    {
      "id": 35,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An access token has scopes `read:orders` but not `write:orders`. What is the clearest way to protect a read-only endpoint?",
      "options": [
        "Allow all authenticated callers to write",
        "Require a corresponding scope authority such as `SCOPE_read:orders`",
        "Trust the token's email domain alone",
        "Demand a browser session regardless of the API design"
      ],
      "correct": "B",
      "memo": "Method or request authorization may target mapped SCOPE_ authorities. Scope strings are independent of roles.",
      "marks": 1
    },
    {
      "id": 36,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** A test request uses `@WithMockUser(username=\"jo\", roles=\"USER\")`. The controller is guarded by `hasRole('ADMIN')`. What result should a correctly configured method-security test expect?",
      "options": [
        "Access is denied",
        "Access is granted because the user exists",
        "The controller is skipped only for anonymous users",
        "ROLE_USER is automatically promoted to ROLE_ADMIN"
      ],
      "correct": "A",
      "memo": "The authenticated mock principal has ROLE_USER, not ROLE_ADMIN, so the admin rule denies access.",
      "snippet": "@PreAuthorize(\"hasRole('ADMIN')\")\npublic String restricted() { return \"secret\"; }",
      "marks": 1
    },
    {
      "id": 37,
      "kind": "True or false",
      "prompt": "**True/False:** `.authenticated()` and `.hasRole(\"ADMIN\")` express the same authorization condition.",
      "correct": "false",
      "memo": "The first requires authentication; the second checks for a role-related authority.",
      "marks": 1
    },
    {
      "id": 38,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A developer says CORS and CSRF are identical: enabling CORS with one allowed origin prevents fraudulent POST submissions. What's correct?",
      "options": [
        "CORS controls cross-origin browser access to responses and some requests; it does not replace CSRF defenses for cookie-authenticated actions",
        "CORS verifies password hashes",
        "Both technologies are JPA annotations",
        "CSRF only changes MIME types"
      ],
      "correct": "A",
      "memo": "CORS and CSRF solve different problems. Simple cross-origin form submissions can happen without reading the response.",
      "marks": 1
    },
    {
      "id": 39,
      "kind": "True or false",
      "prompt": "**True/False:** Spring Security's default scope-based JWT authorities commonly use an `SCOPE_` prefix.",
      "correct": "true",
      "memo": "The default resource-server authorities converter prefixes mapped scopes with SCOPE_.",
      "marks": 1
    },
    {
      "id": 40,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Your logging filter records the complete `Authorization` header for every request. What's the most important security flaw?",
      "options": [
        "It improves encryption",
        "Authorization headers cannot contain secrets",
        "It forces 404 responses",
        "It may leak bearer tokens into log systems"
      ],
      "correct": "D",
      "memo": "Bearer tokens are credentials. Logging them can expose authenticated access via logs and monitoring systems.",
      "marks": 1
    },
    {
      "id": 41,
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
      "id": 42,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A stateless resource server should avoid using HTTP sessions to persist request authentication between API calls. Which setting is commonly used?",
      "options": [
        "`GenerationType.AUTO`",
        "`SessionCreationPolicy.STATELESS`",
        "`FetchType.EAGER`",
        "`Propagation.REQUIRES_NEW`"
      ],
      "correct": "B",
      "memo": "Stateless session policy tells Spring Security not to use an HTTP session to obtain the SecurityContext across requests.",
      "marks": 1
    },
    {
      "id": 43,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A stolen bearer token remains valid until expiry. Which architectural limitation explains this risk?",
      "options": [
        "Bearer tokens can only be used in browsers",
        "Bearer possession is sufficient to act as the holder unless additional protections exist",
        "JPA indexes automatically revoke tokens",
        "JWTs cannot have expiry claims"
      ],
      "correct": "B",
      "memo": "Bearer tokens are proof-of-possession-free credentials; short expiry, transport security, audience restriction and revocation mechanisms may mitigate risk.",
      "marks": 1
    },
    {
      "id": 44,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An API stores the login user's numeric ID in a request query parameter and trusts it to select whose records to edit. What is the main authorization risk?",
      "options": [
        "IDOR / broken object-level authorization: an attacker can change the ID to target someone else's records",
        "SQL is always executed twice",
        "Spring's role prefix is doubled",
        "GET endpoints cannot have parameters"
      ],
      "correct": "A",
      "memo": "Bind authorization to the authenticated principal and resource ownership rather than trusting caller-supplied object IDs.",
      "marks": 1
    },
    {
      "id": 45,
      "kind": "Multiple choice",
      "prompt": "**Code reasoning:** A configuration has `.requestMatchers(\"/**\").permitAll()` before `.requestMatchers(\"/admin/**\").hasRole(\"ADMIN\")`. What is the practical issue?",
      "options": [
        "Specific matchers are always automatically reordered",
        "permitAll() implicitly requires admin",
        "Java method chaining evaluates from right to left",
        "The `/admin/**` rule is shadowed by the broader first matcher (and this ordering can be rejected as unreachable in validation)"
      ],
      "correct": "D",
      "memo": "Broad catch-all rules before specific ones prevent the intended specific authorization from taking effect; Spring may detect invalid/unreachable ordering.",
      "snippet": ".requestMatchers(\"/**\").permitAll()\n.requestMatchers(\"/admin/**\").hasRole(\"ADMIN\")",
      "marks": 1
    },
    {
      "id": 46,
      "kind": "True or false",
      "prompt": "**True/False:** A stateful browser app using session cookies and a header-only bearer-token API can have different CSRF risk profiles.",
      "correct": "true",
      "memo": "Automatically attached credentials are the key consideration when deciding CSRF defenses.",
      "marks": 1
    },
    {
      "id": 47,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** Your API serves two audiences: a public website and an internal back-office. A JWT intended for the public site's API is presented to the back-office API. What should be validated?",
      "options": [
        "The first character of the token",
        "Whether it contains the word 'JWT'",
        "The back-office resource server's expected `aud` audience",
        "Only the token's display name"
      ],
      "correct": "C",
      "memo": "Audience validation helps reject tokens issued for a different resource.",
      "marks": 1
    },
    {
      "id": 48,
      "kind": "True or false",
      "prompt": "**True/False:** Authorization must be checked on a server even when the frontend hides buttons for unauthorized users.",
      "correct": "true",
      "memo": "Client-side UI is not a security boundary. Backend authorization is required.",
      "marks": 1
    },
    {
      "id": 49,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A team moves from a monolithic MVC app with sessions to an API protected by bearer tokens. What should they revisit rather than blindly copying defaults?",
      "options": [
        "Database auto-commit settings",
        "The Java file encoding",
        "HTTP session policy and CSRF threat model",
        "Only the CSS stylesheet"
      ],
      "correct": "C",
      "memo": "Session creation and CSRF requirements depend on how clients authenticate. A token in an Authorization header differs from an automatically sent session cookie.",
      "marks": 1
    },
    {
      "id": 50,
      "kind": "Multiple choice",
      "prompt": "**Code tracing:** With `SessionCreationPolicy.STATELESS`, a client authenticates with a valid bearer token on one request, then sends a second request with no token. What should it expect for an otherwise protected endpoint?",
      "options": [
        "Second request inherits the previous authentication from session",
        "Second request is unauthenticated because credentials must be supplied again",
        "The database deletes the user",
        "Second request always succeeds because the first request did"
      ],
      "correct": "B",
      "memo": "No session-based authentication is retained; each request must present credentials in the chosen stateless architecture.",
      "snippet": "http.sessionManagement(s ->\n    s.sessionCreationPolicy(SessionCreationPolicy.STATELESS));",
      "marks": 1
    },
    {
      "id": 51,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An authorization server rotates signing keys and publishes JWKS. What is the resource server's relationship to JWKS?",
      "options": [
        "It can use trusted published public keys to validate signed tokens and accommodate key rotation",
        "It should download private signing keys into every client",
        "It must store plaintext passwords in JWKS",
        "It ignores JWT signatures when keys rotate"
      ],
      "correct": "A",
      "memo": "JWKS exposes public key material for verifying signatures. A configured JWK source can accommodate rotating public keys.",
      "marks": 1
    },
    {
      "id": 52,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A security policy permits public access to `/api/items/*` but assumes that wildcard includes `/api/items/2026/photos/1`. What should the team verify?",
      "options": [
        "`*` always matches every nested path",
        "All routes share identical patterns across matcher implementations",
        "The JPA transaction timeout",
        "Path-matcher semantics: a single-segment wildcard may not match nested paths"
      ],
      "correct": "D",
      "memo": "Matcher semantics vary; a single `*` generally matches a segment, while `**` commonly covers multiple path segments. Validate actual chosen matcher behavior.",
      "marks": 1
    },
    {
      "id": 53,
      "kind": "True or false",
      "prompt": "**True/False:** A good fallback for an API that should expose only explicitly listed routes can be `.anyRequest().denyAll()`.",
      "correct": "true",
      "memo": "An explicit deny-all fallback can enforce a conservative allowlist of endpoints.",
      "marks": 1
    },
    {
      "id": 54,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An authentication cookie has `HttpOnly` set. What security property does this flag provide?",
      "options": [
        "It encrypts cookies on the server",
        "It makes the cookie never expire",
        "It stops every CSRF attack by itself",
        "It makes the cookie unavailable to JavaScript `document.cookie` access in the browser"
      ],
      "correct": "D",
      "memo": "HttpOnly reduces exposure to client-side script cookie reading, but does not by itself prevent CSRF or all XSS impact.",
      "marks": 1
    },
    {
      "id": 55,
      "kind": "True or false",
      "prompt": "**True/False:** `hasAuthority(\"ADMIN\")` and `hasRole(\"ADMIN\")` are always interchangeable under the default role prefix.",
      "correct": "false",
      "memo": "hasAuthority checks exactly ADMIN; hasRole typically expects ROLE_ADMIN.",
      "marks": 1
    },
    {
      "id": 56,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A user is authenticated, but a controller action is forbidden by authorization rules. The application responds 403. What should the developer inspect first?",
      "options": [
        "JPA generation strategy",
        "File upload multipart size",
        "Assigned authorities and the applicable authorization matcher or method rule",
        "CSS media queries"
      ],
      "correct": "C",
      "memo": "An authenticated user's 403 usually points to missing authority, ownership, CSRF, or another authorization failure.",
      "marks": 1
    },
    {
      "id": 57,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A request's authentication has succeeded, but its principal lacks the authority required for `/reports/private`. Which HTTP status normally represents this authorization failure?",
      "options": [
        "302 Found",
        "403 Forbidden",
        "500 Internal Server Error",
        "201 Created"
      ],
      "correct": "B",
      "memo": "An authenticated principal lacking permission normally gets 403; unauthenticated access typically results in an authentication entry point such as 401 or a redirect.",
      "marks": 1
    },
    {
      "id": 58,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** The server sets `Secure` on a session cookie. What does that indicate?",
      "options": [
        "The browser should send it only over secure HTTPS connections",
        "It will automatically have SameSite=Strict",
        "The stored password is hashed",
        "The cookie is immune to session fixation"
      ],
      "correct": "A",
      "memo": "The Secure attribute tells supporting browsers to send the cookie only over secure connections.",
      "marks": 1
    },
    {
      "id": 59,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An API endpoint is public and accepts optional bearer authentication. A malformed bearer token is submitted. Why might the request still be rejected even though the endpoint has permitAll()?",
      "options": [
        "Authentication filters may reject invalid presented credentials before the authorization decision",
        "permitAll disables all authentication filters",
        "The controller creates a session automatically",
        "Malformed JSON always means SQL injection"
      ],
      "correct": "A",
      "memo": "PermitAll controls authorization; presenting invalid bearer credentials can still fail authentication during the filter chain.",
      "marks": 1
    },
    {
      "id": 60,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A POST protected by session authentication fails with 403 even for an admin. Which cause is worth checking before assuming role mapping is broken?",
      "options": [
        "Whether the application has an index on the user table",
        "Whether the request uses DTOs",
        "Whether there is a favicon",
        "A missing or invalid CSRF token"
      ],
      "correct": "D",
      "memo": "CSRF checks can reject POST before authorization outcomes; investigate error details and the security filter chain.",
      "marks": 1
    },
    {
      "id": 61,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A client sends no credentials to an API secured with HTTP Basic and requests a protected endpoint. Which status does an API-style Basic authentication entry point normally return?",
      "options": [
        "204 No Content",
        "200 OK",
        "401 Unauthorized with a WWW-Authenticate challenge",
        "403 Forbidden by definition"
      ],
      "correct": "C",
      "memo": "HTTP Basic authentication challenges unauthenticated clients with 401 and a WWW-Authenticate header.",
      "marks": 1
    },
    {
      "id": 62,
      "kind": "True or false",
      "prompt": "**True/False:** A stateless API normally assumes that authentication from request A persists for request B through the HTTP session.",
      "correct": "false",
      "memo": "A stateless setup requires the second request to authenticate independently, such as with another bearer token.",
      "marks": 1
    },
    {
      "id": 63,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** A developer writes `hasAuthority(\"ADMIN\")` but authentication grants `ROLE_ADMIN`. Why is access denied?",
      "options": [
        "Authority names are ignored by Spring",
        "hasAuthority checks for the exact authority String; ADMIN differs from ROLE_ADMIN",
        "hasAuthority automatically adds ROLE_",
        "Java compares Strings ignoring prefixes"
      ],
      "correct": "B",
      "memo": "hasAuthority checks an exact authority, unlike hasRole with its default ROLE_ convention.",
      "snippet": ".requestMatchers(\"/ops/**\").hasAuthority(\"ADMIN\")",
      "marks": 1
    },
    {
      "id": 64,
      "kind": "True or false",
      "prompt": "**True/False:** Logging bearer tokens in plaintext is safe whenever the log directory is not publicly browsable.",
      "correct": "false",
      "memo": "Credentials can leak through log storage, access, retention, or incidents; avoid recording bearer tokens.",
      "marks": 1
    },
    {
      "id": 65,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** Why might a method annotated `@PreAuthorize(\"hasRole('ADMIN')\")` not be protected in a project that has servlet security but no method-security activation?",
      "options": [
        "`@PreAuthorize` only works in C++",
        "Method security must be enabled (for example `@EnableMethodSecurity`) to enforce the annotation",
        "Controller methods cannot have annotations",
        "The annotation always applies without any infrastructure"
      ],
      "correct": "B",
      "memo": "Method-security interception requires the corresponding configuration, such as @EnableMethodSecurity.",
      "marks": 1
    },
    {
      "id": 66,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A login endpoint returns the exact same response to an invalid username and an invalid password. Why might this be desirable?",
      "options": [
        "To reduce user-enumeration information leakage",
        "To bypass rate limiting",
        "To avoid hashing passwords",
        "To store anonymous cookies forever"
      ],
      "correct": "A",
      "memo": "Uniform failure messages can avoid revealing which accounts exist. Combine with sensible rate limiting and logging.",
      "marks": 1
    },
    {
      "id": 67,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A refresh token is used to obtain a new access token. Should a normal resource server generally treat a refresh token as authorization to access `/orders`?",
      "options": [
        "Yes, because it expires later",
        "Only if the request is GET",
        "Yes, all OAuth2 token types are interchangeable",
        "No; refresh tokens are ordinarily submitted to the authorization server's token endpoint, not used as resource-server access tokens"
      ],
      "correct": "D",
      "memo": "Access and refresh tokens have distinct purposes. Resource servers ordinarily authorize requests using access tokens.",
      "marks": 1
    },
    {
      "id": 68,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A CORS preflight OPTIONS request contains an Origin and Access-Control-Request-Method but no session cookie. Why may correct CORS processing order matter?",
      "options": [
        "CSRF tokens must be in preflight bodies",
        "Origin header proves authentication",
        "Preflight typically lacks credentials and should be handled by appropriate CORS processing before security rules deny it as unauthenticated",
        "OPTIONS always bypasses all servlet filters automatically"
      ],
      "correct": "C",
      "memo": "Proper CORS integration can handle preflight requests without requiring user credentials and avoid accidental 401/403 responses.",
      "marks": 1
    },
    {
      "id": 69,
      "kind": "True or false",
      "prompt": "**True/False:** A user who has authenticated successfully may still receive HTTP 403 for an endpoint.",
      "correct": "true",
      "memo": "403 is commonly returned when an authenticated user is not authorized for a protected resource.",
      "marks": 1
    },
    {
      "id": 70,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A session fixation defense rotates a session ID after successful login. What's the intended result?",
      "options": [
        "Authentication becomes impossible",
        "CSRF tokens are never necessary",
        "A pre-login session ID chosen or known by an attacker should not remain the authenticated session identifier",
        "All database primary keys rotate"
      ],
      "correct": "C",
      "memo": "Changing the session ID on authentication reduces the chance an attacker can reuse a pre-established session identifier.",
      "marks": 1
    },
    {
      "id": 71,
      "kind": "True or false",
      "prompt": "**True/False:** OAuth2 scopes describe delegated permissions, while application roles may be modeled independently.",
      "correct": "true",
      "memo": "Roles and scopes are distinct concepts, even when both are mapped to GrantedAuthority objects.",
      "marks": 1
    },
    {
      "id": 72,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A team adds a password reset token to a URL and records full URLs in analytics. What should be addressed?",
      "options": [
        "Passwords should be embedded in token URLs",
        "Secret reset tokens can leak through logs, referrers, and analytics; minimize exposure and use short-lived one-time tokens",
        "Logging secrets is harmless behind HTTPS",
        "Reset tokens should be valid forever"
      ],
      "correct": "B",
      "memo": "Reset URLs often carry sensitive temporary credentials; protect against disclosure, replay and persistence.",
      "marks": 1
    },
    {
      "id": 73,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A single endpoint `GET /products` is public, but `POST /products` should require admin authority. What is the clearest authorization approach?",
      "options": [
        "Match both the path and HTTP method in authorization rules",
        "Use one String comparison inside every entity",
        "Delete the POST endpoint",
        "Make all `/products` requests public"
      ],
      "correct": "A",
      "memo": "Security authorization can distinguish methods: GET permitAll and POST hasRole(ADMIN), ordered before the catch-all.",
      "marks": 1
    },
    {
      "id": 74,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** You want to log out a user in a stateful session-based application. Which behavior is important?",
      "options": [
        "Delete all users from the database",
        "Log the user's plaintext password",
        "Disable all HTTP filters",
        "Invalidate the authenticated session and clear appropriate security state"
      ],
      "correct": "D",
      "memo": "Session logout should terminate the server-side session and remove security context as configured; browser cookie cleanup may also be needed.",
      "marks": 1
    },
    {
      "id": 75,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A customer consents to a third-party app reading their profile without handing the app their password. Which OAuth2 benefit is illustrated?",
      "options": [
        "Hashing passwords at every API",
        "Relational joins",
        "Java inheritance",
        "Delegated authorization with scoped access"
      ],
      "correct": "D",
      "memo": "OAuth2 facilitates scoped delegated access through tokens instead of distributing account passwords.",
      "marks": 1
    },
    {
      "id": 76,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A project implements custom authentication but stores password hashes using fast SHA-256 without a work factor or per-password salt. Which security improvement is most appropriate?",
      "options": [
        "Remove all authentication error handling",
        "Replace hashes with Base64 strings",
        "Use an adaptive password hashing algorithm supported by PasswordEncoder, e.g. bcrypt/Argon2 where available",
        "Double the password length by repetition only"
      ],
      "correct": "C",
      "memo": "Generic fast hashes are inappropriate for password storage. Adaptive, salted password hashing increases resistance to offline cracking.",
      "marks": 1
    },
    {
      "id": 77,
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
      "id": 78,
      "kind": "True or false",
      "prompt": "**True/False:** HTTPS protects credentials in transit, but does not justify storing users' passwords in plaintext.",
      "correct": "true",
      "memo": "Transport security and secure at-rest password hashing address different threats.",
      "marks": 1
    },
    {
      "id": 79,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A frontend app uses Authorization Code with PKCE. What attack does PKCE primarily help prevent?",
      "options": [
        "An intercepted authorization code being redeemed by an unauthorized party that lacks the code verifier",
        "XSS from any source on all pages",
        "SQL injection in every JDBC query",
        "Duplicate JPA results"
      ],
      "correct": "A",
      "memo": "PKCE binds the authorization request to a secret code verifier, reducing authorization-code interception/replay by a different party.",
      "marks": 1
    },
    {
      "id": 80,
      "kind": "True or false",
      "prompt": "**True/False:** A correctly authenticated user can still fail a POST because of CSRF checks unrelated to their role.",
      "correct": "true",
      "memo": "A POST may require a valid CSRF token independent of the user's authorization roles.",
      "marks": 1
    }
  ],
  "totalMarks": 80
};
