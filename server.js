// const EventEmitter = require('events');
// const fs = require('fs');
// const zlib = require('zlib');
// const http = require('http');
// const express = require('express');
// const { url } = require('inspector');
// const emitter = new EventEmitter();

// emitter.on('greet',
//     (name)=>{
//     console.log(`Hello, ${name}! Welcome to Node.js!`);
//     }
// )

// emitter.emit('greet', 'Alice');

// function greet(name){
//     console.log(`Hello, ${name}! Welcome to Node.js!`);
// }
// const greet = (name) => {
//     console.log(`Hello, ${name}! Welcome to Node.js!`);
// }

// const greet = function(name){
//     console.log(`Hello, ${name}! Welcome to Node.js!`);
// }

// setTimeout(() => {
//     console.log('This message is displayed after 2 seconds');
// }, 2000);

// const id = setInterval(() => console.log("Hi"), 500);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("Stopped");
// }, 5000);rn

// function hello(name, callback){
//     console.log(`Hello, ${name}! Welcome to Node.js!`);
//     callback();
// }

// hello('bob',() => {
//     console.log("This is the next function.");
// })


// setTimeout(() => {
//     console.log('This message is displayed after 2 seconds');
// }, 2000);

// console.log('This message is displayed immediately');




// let arr= [1, 2, 3, 4, 5];

// for(let element of arr){
//     console.log(element);
// }

// let obj={
//     name:'alex',
//     age: 30,
//     city: 'New York',
//     greet : ()=>{
//         console.log(`Hello, my name is ${obj.name} and I am ${obj.age} years old. I live in ${obj.city}.`);
//     }
// }
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.city);
// obj.greet();


//========================================================
//                        FILES
//========================================================
//READFILES
//--------------------------------------------------------
// fs.readFile('rndm.txt', 'utf-8', (err,data) => {
//     if(err){
//         console.log(err)
//     } else {
//     console.log('File contents:', data);
//     }
// });
// const data= fs.readFileSync('rndm.txt');
// console.log('File contents:', data.toString());
// console.log('This message is displayed immediately');

//WRITE
//----------------------------------------------------------

// fs.writeFile('output.txt','this is the content in a file named output.txt', (err) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log('File written successfully!');
//     }
// })
// fs.appendFile('output.txt', '\nThis is the appended content.', (err) => {
//     if(err){
//         console.log(err)    
//     } else {
//         console.log('Content appended successfully!');
//     }
// })

//WORKING WITH JSON
//----------------------------------------------------------

// const object={
//     name: 'Alice',
//     age: 30,
//     city: 'New York'
// }
// console.log(object.name);
// const jsonString = JSON.stringify(object);  //converts a JavaScript object into a JSON string
// console.log(jsonString);


// const json = '{"name":"Bob","age":25,"city":"Los Angeles"}';
// const parsedObject = JSON.parse(json); //converts a JSON string back into a JavaScript object
// console.log(parsedObject.name);

// fs.readFile('data.json','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//         const parsedData = JSON.parse(data);
//         console.log(parsedData.name);
//     }
// })
// fs.writeFile('data.json', JSON.stringify({name: 'Charlie', age: 35, city: 'Chicago'}, null, 2), (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log('JSON data written successfully!');
//     }
// })
// const buffer = Buffer.from('Hello, World!');
// console.log(buffer);

// const buffer=Buffer.from('Hello, World!');

// console.log(buffer);


//readfile 3 arg at max 1 min (file name)

// fs.readFile('output.txt',(err,data)=>{
//     console.log('File contents:', data.toString());
// })

// const readStream = fs.createReadStream('output.txt', 'utf-8');
// readStream.on('data', (chunk) => {
//     console.log('Received chunk:', chunk);
// });
 
// const data=fs.readFileSync('output.txt', 'utf-8');
// console.log('File contents:', data);

// const writeStream = fs.createWriteStream('output.txt');
// writeStream.write('This is the first line.\n');
// writeStream.write('This is the second line.\n');


// const read = fs.createReadStream('input.txt');
// const write = fs.createWriteStream('output.txt');

// read.pipe(write);



// const req={
//   url:'sdcjs',
//   method:'POST'
//   cookies:'iuedudc'
// }




// const free3 = http.createServer((req, res)=>{
//   if(req.url=='/:id'){
//     res.end(``);
//   }else if(req.url=='/app' && req.method=="POST"){
//     res.end("This is a postmessage bitch");
//   }
// })

// free3.listen(3000,()=>{
//     console.log("Server is running on port 3000");
// });
// const app=express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.post('/', (req, res)=>{
//     res.send(req.body);
// });
// app.get('/:id', (req, res)=>{
//     res.send(`You requested ID: ${req.params.id} ${req.query.name} ${req.query.age}`);
// });



//https://localhost:3000/123?name=Alice&age=30

// //2 parts for /:id
// //1. path parameters (/123) - accessed via req.params
// //2. query parameters (?name=Alice&age=30) - accessed via req.query


// //middlewares


// const app=express();

// const midd= (req, res, next)=>{
    
//     next();
// }

// app.get('/', midd, (req,res)=>{
//     res.send("This is get fucntion");
// })

// app.use(midd);

// app.get('/app', (req, res)=>{
//     res.send('This is app');
// })

// app.listen(3000);

// const express = require("express");

// const cookieParser = require("cookie-parser");

// const app = express();

// app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.cookie("user", "Alice");
//   res.send("Cookie has been set!");
// });

// app.get("/get-cookie", (req, res) => {
//   res.send(req.cookies);
// });
// app.listen(3000);


// const express = require("express");
// const cookieSession = require("cookie-session");

// const app = express();

// app.use(cookieSession({
//     name: "sukdcgkjsdgcvgsudgvudgckuzdgvc",
//     keys: ["secret123"]
// }));

// const session = require("express-session");

// app.use(session({
//     secret: "mysecret",
//     resave: false,
//     saveUninitialized: true
// }));

// session={
//     user:"aryan",
//     isChanged:true,
// }
// app.get("/login", (req, res) => {
//     req.session.user = "Aryan";
//     req.session.isChanged = true;
//     res.send(req.session);
// });

// app.get("/profile", (req, res) => {
//     res.send(req.session.user || "No user");
// });

// app.listen(3000);
const express = require("express");
const app = express();

app.all('/', (req, res) => {
    res.send(`You made a ${req.method} request`);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});