const getAllToDoItems = (request,response)=>{
    response.send('list of all to do items')
}

const createANewToDoItem = (request,response)=>{
    // response.send('Creating New ToDo Item')
    response.json(request.body)
}

module.exports = {getAllToDoItems,createANewToDoItem}
