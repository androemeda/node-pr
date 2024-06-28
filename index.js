const fs = require('fs');

const text = "i wrote this text using node";

fs.writeFile('./file.txt' , text , (err) => {
    if(err){
        console.log(err);
        return;
    }
})

fs.readFile('./file.txt' , 'utf8' , (err , data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})