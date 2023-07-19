'use strict';

const express = require('express');
const app = express();
app.use(express.json());


app.get('/', handelHomePage);
app.get('/api', handelApiPage);


function handelHomePage(req,res){
    res.status(200).json('Welcome To Home Page!!')
}


function handelApiPage(req,res){
    res.status(200).json('Welcome To Api Page!!')
}

 app.listen(4000, ()=> {console.log('Up and running on port: 4000')
})

