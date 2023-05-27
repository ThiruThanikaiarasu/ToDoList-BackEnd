const express = require('express')
const app = express()
const PORT = 3500
const todo_items = require('./routes/todo_items')

app.use(express.urlencoded({extended:true}))
app.use(express.json())    // only apply for json inputs

app.get('/',(request,response)=>{
    response.status(200).send('working')
})

app.use('/api/v1/todo_items',todo_items)

app.listen(PORT, console.log("Server is running at http://localhost:3500"))



// following REST rules

// app.get('/api/v1/tasks')
// app.push('api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('api/v1/tasks/:id')
// app.delete('api/v1/tasks/:id')