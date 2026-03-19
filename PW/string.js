// ✅ Validate URL contains expected environment



let url = "https://staging.myapp.com/dashboard";

url.includes("staging"); //true

url.startsWith("https");  //true

url.endsWith("/dashboard"); //true

—— 

let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";

let status = log.match(/Status: (\d+)/)[1];  //500

—

let env = "staging"; 
let module = "auth"; 
let count = 7; 
let testId = `${env}_${module}_${String(count).padStart(3, "0")}`;



let actual = " PASS "; let expected = "pass"; actual.trim().toLowerCase() === expected;  //true



let testUrl = "https://app.com/search?query=login&page=2&sort=asc"; 
let params = Object.fromEntries( testUrl.split("?")[1].split("&").map(p => p.split("=")) );



let token = "Bearer eyJhbGciOiJIUzI1NiJ9.secret"; 
let masked = token.replace(/(?<=Bearer ).+/, "***REDACTED***");
console.log(masked); // Bearer ***REDACTED***

