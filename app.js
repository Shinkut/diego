const express = require('express')
const morgan = require('morgan')
const app = express()
const path = require ('path')
const mysql =require('mysql')
const conexsql = require('express-myconnection')
const crouter = require('./routes/client')


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

app.use(morgan('dev'))
app.use(conexsql(mysql,
{
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'prospectos'
}, 'single' ))



app.use(express.urlencoded({extended:true}))

app.use(express.static('public'))
app.use('/', crouter) 






app.listen(3000,() =>{
    console.log('Servidor establecido')
})

