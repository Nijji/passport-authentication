//dependencies
const express=require('express')
const layout=require('express-ejs-layouts')
const app=express()
const mongoose=require ('mongoose')
const passport= require('passport')
const local=require('passport-local')
const bcrypt=require('bcryptjs')
const session= require('express-session')

//ejs view engine
app.use(layout)
app.set('view engine','ejs')

//routes
app.use('/',require('./routes/index'))
app.use('/users',require('./routes/users'))



//mongoose
mongoose.connect('mongodb://127.0.0.1:27017/Passport')
mongoose.Promise=global.Promise

//ui server
app.listen(5000,()=>{
    console.log('connected to db');
})



