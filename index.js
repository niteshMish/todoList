const express = require('express');

const port = 8000;

const app = express();

app.listen(port , function(err){
    if(err){
        console.log(`Error sever is not up!!!! ${err}`);
        return;
    }
    console.log(`seever is up on the port ${port}`);
});