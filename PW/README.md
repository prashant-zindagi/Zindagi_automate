# Zindagi_automat



1. What is the output?

console.log(greet("Alice"));
function greet(name) {
  return `Hello, ${name}!`;
}


a) ReferenceError b) undefined c) "Hello, Alice!" d) TypeError



2. What is the output?

console.log(getStatus(200));
const getStatus = (code) => code >= 200 ? "ok" : "error";


a) "ok" b) "error" c) undefined d) ReferenceError



3. What does this function return?

function analyze(scores = []) {
  return scores.filter(s => s >= 70).length;
}
analyze();


a) undefined b) 0 c) null d) TypeError



4. What is the output?

function makeCounter() {
  let count = 0;
  return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log(counter());


a) 1 b) 2 c) 3 d) 0



5. Which is a pure function? a) function log(msg) { console.log(msg); } b) function add(a, b) { return a + b; } c) function getTime() { return Date.now(); } d) function push(arr, val) { arr.push(val); return arr; }



6. What is the output?

function test(...args) {
  return args.length;
}
test("login", "pass", 200, true);


a) 1 b) undefined c) 4 d) TypeError



7. What is the output?

const obj = {
  env: "staging",
  getEnv: () => {
    return this.env;
  }
};
console.log(obj.getEnv());


a) "staging" b) undefined c) null d) TypeError



8. What does this return?

function double(n) { return n * 2; }
function addOne(n) { return n + 1; }
[1, 2, 3].map(double).map(addOne);


a) [2, 4, 6] b) [3, 5, 7] c) [2, 3, 4] d) [4, 6, 8]



9. What is the output?

function run(fn) {
  return fn("Login");
}
console.log(run(name => `Running: ${name}`));


a) TypeError b) "Running: Login" c) undefined d) "name => Running: name"



10. What is the output?

function outer() {
  let x = 10;
  function inner() {
    let x = 20;
    return x;
  }
  return x + inner();
}
console.log(outer());


a) 20 b) 30 c) 40 d) 10

RICE POT = Role + Intent /Instruction + Context + Expected + Persona + Output + Task
STAR     = Situation + Task + Action + Result
CLEAR    = Context + Language + Examples + Audience + Result
CRISP    = Context + Request + Input + Scope + Parameters




// ✅ Validate URL contains expected environment



let url = "https://staging.myapp.com/dashboard";

url.includes("staging"); //true

url.startsWith("https");  //true

url.endsWith("/dashboard"); //true

—— 

let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";

let status = log.match(/Status: (\d+)/)[1];  //true

—

let env = "staging"; let module = "auth"; let count = 7; let testId = `${env}_${module}_${String(count).padStart(3, "0")}`;



 let actual = " PASS "; let expected = "pass"; actual.trim().toLowerCase() === expected;



let testUrl = "https://app.com/search?query=login&page=2&sort=asc"; let params = Object.fromEntries( testUrl.split("?")[1].split("&").map(p => p.split("=")) );


—- 

let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret"; 
let masked = token.replace(/(?<=Bearer ).+/, "***REDACTED***");