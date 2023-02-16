const express = require('express')
const routes = express.Router()

routes.get('/', (req,res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM pendientes', (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)

        })
    })
})

routes.post('/', (req,res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('INSERT INTO pendientes set ?', [req.body] , (err, rows) => {
            if(err) return res.send(err)

            res.send('El pendiente ha sido agregado')

        })
    })
})

routes.delete('/:id', (req,res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('DELETE FROM pendientes WHERE id = ?', [req.params.id] , (err, rows) => {
            if(err) return res.send(err)

            res.send('El pendiente ha sido eliminado')

        })
    })
})

routes.put('/:id', (req,res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('UPDATE pendientes set ? WHERE id = ?', [req.body, req.params.id] , (err, rows) => {
            if(err) return res.send(err)

            res.send('El pendiente ha sido actualizado')

        })
    })
})


module.exports = routes