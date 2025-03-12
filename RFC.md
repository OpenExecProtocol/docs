If the `requirements` field is not present, the server MUST allow the tool to be executed without passing any additional information.

### 5.3

## 6. Security and Authorization

Security is a critical component of the Open Tool Calling standard.

### Server Authentication

Server authentication describes how the server authenticates the client: which clients are allowed to make OTC protocol requests to the Tool Server.

Servers that are internet-facing SHOULD require authentication.

#### No Authentication

If a server is configured to not require authentication, the server MUST ignore the `Authorization` header.

#### API Key Authentication

A static API key is a simple shared secret that both the client and server know. This method provides simple authentication with minimal implementation complexity.

Requirements:

- The client MUST include the API key in the `X-API-Key` HTTP header with each request.
- Servers that support this authentication method MUST validate the API key against their stored value.
- Clients and servers MUST transmit API keys only over secure connections (HTTPS).
- Servers MUST reject requests with missing or invalid API keys with a 401 Unauthorized HTTP response.
- API keys SHOULD be generated with sufficient entropy (recommended minimum 32 bytes) and SHOULD be treated as sensitive information.

**Non-Normative Example: API Key**

```http
GET /tools HTTP/1.1
Host: api.example.com
X-API-Key: ahf62jd81hdk19akqnd62hdka
```

#### JWT Bearer Token Authentication

JSON Web Tokens (JWT) as described in [RFC 7519](https://www.rfc-editor.org/rfc/rfc7519) provide a more secure authentication mechanism that doesn't require sending the shared secret with each request.

Requirements:

- The client MUST include a valid JWT in the `Authorization` HTTP header using the Bearer scheme.
- The client MUST sign the JWT using the shared secret key using the HS256 algorithm.
- The server MUST validate the JWT signature using the shared secret key.
- The JWT MUST include the `exp` claim, which SHOULD be no more than 15 minutes in the future.
- The JWT MAY include the `aud` claim. If the `aud` claim is present, the server MUST validate it against the server's allowed client list.
- Servers MUST reject requests with missing, invalid, or expired JWTs with a 401 Unauthorized HTTP response.
- Servers SHOULD enforce a reasonably short expiration time for JWTs to limit potential damage from token exposure.

**Non-Normative Example: JWT Bearer Token**

```http
GET /tools HTTP/1.1
Host: api.example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJvdGNzZXJ2ZXIiLCJleHAiOjE3NDE3MjQyMTl9.FPIFSSUmngbyePKghI54zUJ-dUxCrh4ZnP9TId5zk34
```

#### Selecting an Authentication Method

Servers MUST document which authentication methods they support. Servers MAY support multiple authentication methods simultaneously.

Clients SHOULD prefer JWT Bearer token authentication over static API key authentication when both are available, due to its enhanced security properties.

For highly sensitive operations or production environments, servers SHOULD consider implementing additional security measures beyond these basic authentication methods, such as IP allowlisting, rate limiting, or more sophisticated authentication protocols.

### Tool Authorization

Tool authorization describes how the server authorizes the tool call: given a tool's definition, whether the client needs to authorize the user before calling the tool.

Tools MAY require token-based or other forms of authorization, as specified in the `requirements.authorization` field of the Tool Definition schema.

When a given tool describes authorization requirements in the `requirements.authorization` field, the client MUST resolve (or delegate to a trusted intermediary) the authorization requirements and provide the necessary credentials (e.g. a token) in the Tool Call Request, before calling the tool.

If the client does not provide a valid token in the Tool Call Request for a tool that requires authorization, the server MUST return a 400 Bad Request response as described in the Tool Execution (Server Errors) section.

#### Non-Normative Example: Tool Authorization Flow

```mermaid
sequenceDiagram
    participant U as User
    participant C as Client
    participant AS as Authorization Server
    participant S as Tool Server
    participant T as Tool

    U->>C: Input: "Read my recent emails"<br/>user_id: bob@example.com
    Note over C: Tool Gmail.GetEmails has an authorization requirement:<br/>id: google<br/>scopes: [https://www.googleapis.com/auth/gmail.readonly]
    C-->>AS: OAuth 2.0 request
    AS-->>C: Scoped token for user
    C->>S: Call tool Gmail.GetEmails with token
    S->>T: Run tool (function)
    T->>S: Return tool response
    S->>C: Return tool response

```

### Tool Secrets Management

Tool secrets are sensitive information that is required to call a tool, such as API keys, passwords, and other credentials.

Tools MAY require secrets, as specified in the `requirements.secrets` field of the Tool Definition schema.

When a tool requires secrets, the client MUST retrieve the secrets (itself or via a trusted intermediary) and provide them in the Tool Call Request, before calling the tool.

If the client does not provide a secret in the Tool Call Request for a tool that requires a secret, the server MUST return a 400 Bad Request response as described in the Tool Execution (Server Errors) section.

#### Non-Normative Example: Tool Secrets Management Flow

```mermaid
sequenceDiagram
    participant U as User
    participant C as Client
    participant SM as Secrets Manager
    participant S as Tool Server
    participant T as Tool

    U->>C: Input: "Send an SMS to +15556051234567"<br/>user_id: bob@example.com
    Note over C: Tool SMS.Send has a secret requirement:<br/>id: TWILIO_API_KEY
    C-->>SM: Get secret TWILIO_API_KEY
    SM-->>C: TWILIO_API_KEY=abc123...
    C->>S: Call tool SMS.Send with TWILIO_API_KEY=abc123...
    S->>T: Run tool (function)
    T->>S: Return tool response
    S->>C: Return tool response
```

## 7. Extensibility and Versioning

- **Extensibility:**
  The Open Tool Calling standard is designed to be extensible.

  - New parameters or response types can be added as additional properties in the respective schemas.
  - The use of JSON-Schema allows for backward-compatible extensions.

- **Versioning:**
  - Each server response must include a `$schema` field that references the version of the Open Tool Calling standard that was used to generate the response.

Proper versioning guarantees that changes to the standard do not disrupt existing implementations.

## 8. Conclusion

The Open Tool Calling standard provides a robust framework for client-to-tool communications. By standardizing tool definitions, request formats, and response structures, this standard promotes interoperability, consistency, and security in distributed systems. Adoption of this standard will facilitate seamless integration between diverse clients and tools across multiple platforms.
