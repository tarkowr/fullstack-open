# Full Stack Open

## Part 0 - Fundamentals of Web Apps

Open chrome developer tools with `option-cmd-i`  
Traditional web app builds the HTML on the server and returns it to the client  
Single page app has a single html page returned from server that is manipulated by javascript

0.4: Traditional web app handles form submission

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note

    activate server
    server-->>browser: Status 302 (Redirect)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: main.css
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: main.js
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server
```

0.5: SPA loads resources

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server


    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: main.css
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: main.js
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server
```

0.6: SPA handles form submission

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Status
    deactivate server
```

## Part 1 - Introduction to React

Vite is a build tool (like webpack) to provide a faster web development experience  
JSX is returned from React components and it is compiled to JavaScript (this compilation is handled by Babel)  
Edit eslintrc.cjs to silence/add ESLint warnings

ECMAScript: the JavaScript standard so that web pages work across multiple browsers  
NodeJS: JavaScript runtime engine so that js can be run anywhere  
concat(x) returns array with new item (x) added to it  
Use destructuring to assign values of obj/arr to variables  
Ex: `const { name, age } = props` grabs `props.name` and `props.age` and assigns them to `name` and `age`

React hooks allow us to use stateful logic in our React functions  
Best practice: lift shared state up to the closest common ancestor  
Calling a function that changes state causes the component to rerender

State update in React happens async... not immediately but sometime before the component is rendered again  
Hooks must ALWAYS be called in the same order on each render (no hooks in loops, conditions, etc)  
Best practice: do not define a component within another component

## Part 2 - Communicating with the server

If you plan on modifying a js array that you map to jsx element, it is an anti-pattern to use map `index` as element `key`
