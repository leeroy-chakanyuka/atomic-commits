window.PAPERROOM_LIBRARY=window.PAPERROOM_LIBRARY||{};
window.PAPERROOM_LIBRARY["adp-22-1"]={
  "module": "ADP",
  "moduleName": "Application Development",
  "chapter": 22,
  "title": "Spring Security · Paper 2: Authentication, Sessions & CSRF",
  "session": 1,
  "limitSeconds": 1800,
  "version": 3,
  "group": "spring-security",
  "intro": "20 practical Java and web security questions about authentication, passwords, cookies, CSRF, sessions and stateless APIs.",
  "source": "Original Spring Security 6-style revision scenarios, with browser/session threat models stated explicitly.",
  "questions": [
    {
      "id": 1,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A registration endpoint stores user passwords in plaintext so they can be emailed back later. What's the most important correction?",
      "options": [
        "Encrypt with a reversible shared key and print it to logs",
        "Store a one-way adaptive password hash using a PasswordEncoder and never email the original password",
        "Convert password characters to uppercase",
        "Save the password in a second audit table"
      ],
      "correct": "B",
      "memo": "Use adaptive one-way password hashing such as bcrypt/Argon2 via a suitable PasswordEncoder. Reset passwords rather than retrieving them.",
      "marks": 1
    },
    {
      "id": 2,
      "kind": "Multiple choice",
      "prompt": "**Code trace:** A password was stored using BCryptPasswordEncoder. How should a login test compare a submitted password with the stored value?",
      "options": [
        "`encoder.matches(rawPassword, storedHash)`",
        "`encoder.encode(rawPassword).equals(storedHash)`",
        "`rawPassword.equals(storedHash)`",
        "`encoder.decode(storedHash)`"
      ],
      "correct": "A",
      "memo": "BCrypt uses a random salt so independently encoded strings differ. `matches` verifies the raw password against the stored encoded hash.",
      "snippet": "PasswordEncoder encoder = new BCryptPasswordEncoder();\nString storedHash = encoder.encode(\"s3cret\");\nboolean ok = encoder.matches(\"s3cret\", storedHash);",
      "marks": 1
    },
    {
      "id": 3,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A user successfully authenticates with their email and password. Which Spring Security object normally represents the verified identity and authorities for the request?",
      "options": [
        "An Authentication placed in the SecurityContext",
        "The HTML template",
        "A JPA EntityManager transaction",
        "The servlet's URL only"
      ],
      "correct": "A",
      "memo": "Successful authentication is represented by Authentication, typically held in the SecurityContext.",
      "marks": 1
    },
    {
      "id": 4,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** `UserDetailsService.loadUserByUsername` is implemented to fetch users from your database. Does that method itself normally verify a submitted password?",
      "options": [
        "Yes, it must compare raw passwords manually inside SQL",
        "No; it loads user details and a provider, such as DaoAuthenticationProvider, performs password verification using PasswordEncoder",
        "Yes; servlet filters are never involved",
        "No; passwords are never checked by Spring Security"
      ],
      "correct": "B",
      "memo": "UserDetailsService loads the record/authorities; a configured authentication provider performs credential checks.",
      "marks": 1
    },
    {
      "id": 5,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A web app authenticates users with a session cookie. The attacker places a malicious POST form on another website, hoping the browser will submit the victim's authenticated cookie. Which protection addresses this class of attack?",
      "options": [
        "CSRF protection",
        "SQL query caching",
        "Unique indexes",
        "CORS alone"
      ],
      "correct": "A",
      "memo": "CSRF defenses ensure state-changing cookie-authenticated requests have a valid origin/token; CORS is not itself a sufficient CSRF defense.",
      "marks": 1
    },
    {
      "id": 6,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An API accepts JWTs only in manually attached Authorization headers and never authenticates using ambient cookies. Should CSRF be enabled solely because the API accepts POST?",
      "options": [
        "Always; every POST automatically needs CSRF tokens regardless of credentials",
        "The decision depends on whether browsers automatically attach credentials; header-only bearer tokens usually don't create the same CSRF risk",
        "CSRF applies only to GET",
        "CSRF can be replaced by making database tables private"
      ],
      "correct": "B",
      "memo": "The CSRF threat comes from browsers automatically attaching authentication material. A pure Authorization-header bearer API commonly disables CSRF, unlike cookie-backed sessions.",
      "marks": 1
    },
    {
      "id": 7,
      "kind": "Multiple choice",
      "prompt": "**Code spotting:** A session-backed browser login app globally disables CSRF with no alternative protection. What's the concern?",
      "options": [
        "There is no concern, since HTTPS prevents CSRF",
        "Cross-site state-changing requests may exploit automatically sent session cookies",
        "Authentication stops working automatically",
        "All GET requests become SQL injections"
      ],
      "correct": "B",
      "memo": "For browser form/session authentication, disabling CSRF can expose writes to cross-site request forgery.",
      "snippet": "http.csrf(csrf -> csrf.disable());\nhttp.formLogin(Customizer.withDefaults());",
      "marks": 1
    },
    {
      "id": 8,
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
      "id": 9,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A stateless resource server should avoid using HTTP sessions to persist request authentication between API calls. Which setting is commonly used?",
      "options": [
        "`SessionCreationPolicy.STATELESS`",
        "`FetchType.EAGER`",
        "`Propagation.REQUIRES_NEW`",
        "`GenerationType.AUTO`"
      ],
      "correct": "A",
      "memo": "Stateless session policy tells Spring Security not to use an HTTP session to obtain the SecurityContext across requests.",
      "marks": 1
    },
    {
      "id": 10,
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
      "id": 11,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** An authentication cookie has `HttpOnly` set. What security property does this flag provide?",
      "options": [
        "It stops every CSRF attack by itself",
        "It makes the cookie unavailable to JavaScript `document.cookie` access in the browser",
        "It encrypts cookies on the server",
        "It makes the cookie never expire"
      ],
      "correct": "B",
      "memo": "HttpOnly reduces exposure to client-side script cookie reading, but does not by itself prevent CSRF or all XSS impact.",
      "marks": 1
    },
    {
      "id": 12,
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
      "id": 13,
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
      "id": 14,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** A session fixation defense rotates a session ID after successful login. What's the intended result?",
      "options": [
        "A pre-login session ID chosen or known by an attacker should not remain the authenticated session identifier",
        "All database primary keys rotate",
        "Authentication becomes impossible",
        "CSRF tokens are never necessary"
      ],
      "correct": "A",
      "memo": "Changing the session ID on authentication reduces the chance an attacker can reuse a pre-established session identifier.",
      "marks": 1
    },
    {
      "id": 15,
      "kind": "Multiple choice",
      "prompt": "**Scenario:** You want to log out a user in a stateful session-based application. Which behavior is important?",
      "options": [
        "Invalidate the authenticated session and clear appropriate security state",
        "Delete all users from the database",
        "Log the user's plaintext password",
        "Disable all HTTP filters"
      ],
      "correct": "A",
      "memo": "Session logout should terminate the server-side session and remove security context as configured; browser cookie cleanup may also be needed.",
      "marks": 1
    },
    {
      "id": 16,
      "kind": "True or false",
      "prompt": "**True/False:** PasswordEncoder.matches should be used for verifying a raw password against a bcrypt hash.",
      "correct": "true",
      "memo": "BCrypt encodes with salts; verify using `matches` rather than comparing two separately generated encoded strings.",
      "marks": 1
    },
    {
      "id": 17,
      "kind": "True or false",
      "prompt": "**True/False:** Setting a cookie's HttpOnly flag alone makes CSRF impossible.",
      "correct": "false",
      "memo": "HttpOnly affects JavaScript cookie access; cookies are still attached to requests according to browser rules.",
      "marks": 1
    },
    {
      "id": 18,
      "kind": "True or false",
      "prompt": "**True/False:** A stateful browser app using session cookies and a header-only bearer-token API can have different CSRF risk profiles.",
      "correct": "true",
      "memo": "Automatically attached credentials are the key consideration when deciding CSRF defenses.",
      "marks": 1
    },
    {
      "id": 19,
      "kind": "True or false",
      "prompt": "**True/False:** A stateless API normally assumes that authentication from request A persists for request B through the HTTP session.",
      "correct": "false",
      "memo": "A stateless setup requires the second request to authenticate independently, such as with another bearer token.",
      "marks": 1
    },
    {
      "id": 20,
      "kind": "True or false",
      "prompt": "**True/False:** HTTPS protects credentials in transit, but does not justify storing users' passwords in plaintext.",
      "correct": "true",
      "memo": "Transport security and secure at-rest password hashing address different threats.",
      "marks": 1
    }
  ],
  "totalMarks": 20
};
