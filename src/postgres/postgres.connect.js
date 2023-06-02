import pkg from 'pg'
const {Client} = pkg;
// import {Client}  from "pg";
import dotenv from 'dotenv';

dotenv.config();
const client = new Client({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,

});
 export const connect = async()=>{
    try{
      await client.connect()
    return console.log('Database connected successfully')
}catch(err){
    return console.log(err.message)

}}

    // .then(()=>{
//     console.log("Databse connected successfullly")
// }).catch((err)=>{
//     console.log(err.message)
// })};