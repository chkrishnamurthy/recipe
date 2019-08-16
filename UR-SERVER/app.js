//packages
import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

//congif
import {APPLICATION_PORT} from './api/config/data/app';
import db from './api/config/common/mongoose';
import {development} from './api/config/data/db'

// routes
import {router} from './api/routes';

const app = express();

//setup express application
const server = http.createServer(app);
//log requests to the console
app.use(logger('dev'));
//Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Allow header for cross origin
app.use(function(req,res,next){
     res.header("Access-Control-Allow-Origin","*");
     res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization");
     next();
});
// bind routes
// routes(app);
app.use(router);

// wild routes
app.get("*",(req,res)=>res.status(200).send({message:"Welcome to the Defaults API",}));
server.listen(APPLICATION_PORT,development.host,()=>{console.log(`Server running at http://${development.host}:${APPLICATION_PORT}`);})
// db connection
db.then(
     ()=>{console.log("MongoDB Ready to Use");},
     err =>{console.log("handle intial connection error")}
);


