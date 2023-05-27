const getAllToDoItems = (request,response)=>{
    response.send('list of all to do items')
}

const createANewToDoItem = (request,response)=>{
    // response.send('Creating New ToDo Item')
    response.json(request.body)
}

const getAToDoItem = (request,response)=>{
    response.send(`Displaying item with id ${request.params.id}`)
}

const updateToDoItem = (request,response)=>{
    response.send(`Update item with id ${request.params.id}`)
}

const deleteToDoItem = (request,response)=>{
    response.send(`Delete item with id ${request.params.id}`)
}

module.exports = {
    getAllToDoItems, 
    createANewToDoItem, 
    getAToDoItem, 
    updateToDoItem, 
    deleteToDoItem,
}
