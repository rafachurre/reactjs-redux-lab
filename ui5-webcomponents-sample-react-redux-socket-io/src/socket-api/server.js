const axios = require('axios');
const DB_HOST = 'http://localhost:3001';

/**
 * Socket.io
 */
const io = require('socket.io')();

// Config
const port = 8000;
io.listen(port);
console.log('listening on port ', port);

// Events
io.on('connection', (client) => {
    //Get Todos
    client.on('getTodos', () => {
        axios.get(DB_HOST+'/todos')
        .then(response => {
            client.emit('newTodosData', response.data);
        })
        .catch(error => {
            console.log(error);
        });
    });
    //Delete one Todo
    client.on('deleteTodo', (data) => {
        axios.delete(DB_HOST+'/todos/'+data.id)
        .then(response => {
            //Get all todos again
            axios.get(DB_HOST+'/todos')
            .then(response => {
                client.emit('newTodosData', response.data);
            })
            .catch(error => {
                console.log(error);
            });
        })
        .catch(error => {
            console.log(error);
        });
    });
    //Create one Todo
    client.on('createTodo', (data) => {
        axios.post(DB_HOST+'/todos/', data.todo)
        .then(response => {
            //Get all todos again
            axios.get(DB_HOST+'/todos')
            .then(response => {
                client.emit('newTodosData', response.data);
            })
            .catch(error => {
                console.log(error);
            });
        })
        .catch(error => {
            console.log(error);
        });
    });
    //Create one Todo
    client.on('editTodo', (data) => {
        axios.patch(DB_HOST+'/todos/'+data.id, data.newData)
        .then(response => {
            //Get all todos again
            axios.get(DB_HOST+'/todos')
            .then(response => {
                client.emit('newTodosData', response.data);
            })
            .catch(error => {
                console.log(error);
            });
        })
        .catch(error => {
            console.log(error);
        });
    });
});