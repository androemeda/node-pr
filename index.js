const fs = require('fs');

// const text = "i wrote this text using node";

// fs.writeFileSync('./file.txt' , text , (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
// })

// fs.appendFileSync('./file.txt' , text , (err) => {
//     if(err){
//         console.log(err);
//     }
// })

// /* reading asynchonously 
// fs.readFile('./file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });
//  */

// // reading synchronously
// try{
//     const data = fs.readFileSync('./file.txt' , 'utf8');
//     console.log(data);
// } catch(err){
//     console.log(err);
// }

// fs.rmSync('dir1' , {recursive : true , force : true});

// fs.mkdir('dir1' , (err) => {
//     if(err) console.log(err);
//     else console.log("directory formed");
// })

// fs.rename('file.txt' , 'newFile.txt' , (err) => {
//     if(err) console.log(err);
// })

// const p = "/home/kartik/Desktop/node-pr/newFile.txt"

const path = require('path');

// const dirName = path.dirname(p);
// const extName = path.extname(p);

// console.log(dirName , " " , extName);


//move newFile.txt inside the dir1
//get path of the folder , get path of the file , copy the file from source to destination
const dir1Path = '/home/kartik/Desktop/node-pr/dir1';
const filePath = '/home/kartik/Desktop/node-pr/newFile.txt';
const fileName = path.basename(filePath);

//move file
// fs.rename(filePath , dir1Path+"/"+fileName , (err) => {
//     if(err){
//         console.log(err);
//     }
//     else console.log("file moved inside directory");
// })

//copy file
// fs.copyFile(filePath , dir1Path+"/copiedFile.txt" , (err) => {
//     if(err) console.log(err);
//     else console.log("file copied");
// })


const http = require('http');

const server = http.createServer((req , res) => {
    res.setHeader('Content-Type' , 'text/html');

    res.write('<html> <head> <title> node js class </title> </head> <body>');
    res.write('<h1>Hello , World </h1>');
    res.write('</body></html>');

    res.end();
})

const port = 3000;
const host = 'localhost';

server.listen(port , host , () => {
    console.log(`server is listening on http://${host}:${port}`);
})