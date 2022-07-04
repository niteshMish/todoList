const express = require('express');
// port
const port = process.env.PORT||8000;

const path = require('path');

const app = express();

const db = require('./config/mongoose');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname , 'views'));
app.use(express.static('assets'));
app.use(express.urlencoded());

app.use('/',require('./routes/index'));

// start server
app.listen(port , function(err){
    if(err){
        console.log(`Error sever is not up!!!! ${err}`);
        return;
    }
    console.log(`server is up on the port ${port}`);
});