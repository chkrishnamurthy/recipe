import {development} from '../data/db';
import mongoose from 'mongoose';

const {database,host,dialect,port} = development;
const connectionURL = `${dialect}://${host}:${port}/${database}`;

export default mongoose.connect(connectionURL,{
     useNewUrlParser:true,
     useCreateIndex:true,
     useFindAndModify:false
});