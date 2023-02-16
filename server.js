const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: 'password',
    database: 'agendadetareas'
}

//middleware---------------------------------------------------
app.use(myconn(mysql,dbOptions,'single'))
app.use(express.json())
app.use(cors())


app.get('/', (req,res)=>{
    res.send('Bienvenido a mi API')
})

app.use('/api', routes)

// Server running --------------------------------------------
app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'))
})