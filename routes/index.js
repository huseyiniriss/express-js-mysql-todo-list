var express = require('express');
var { connection } = require('../bootstrap')

var router = express.Router();

function getTodoList(){
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM todolist', function(err, results) {
            if (err) {
                resolve(err);
            }
            resolve(results);
        });
    })
}

router.get('/', async function (req, res, next) {
    const todos = await getTodoList();
    var data = {title: 'Todo List' , todos: todos}
    res.render('index', data)
});

router.get('/add/:todo', async function (req, res, next) {
    var todo = req.params.todo;
    connection.query(`INSERT INTO todolist (description) VALUES ('${todo}')`);
    res.redirect('/')
});

router.get('/delete/:id', function (req, res, next) {
    var id = req.params.id;
    connection.query(`DELETE FROM todolist WHERE id = ${id}`);
    res.redirect('/')
});

router.get('/update/:id/:todo', function (req, res, next) {
    var id = req.params.id;
    var todo = req.params.todo;
    connection.query(`UPDATE todolist SET description = ' ${todo}' WHERE id =  ${id}`);
    res.redirect('/')
});

router.get('/complete/:id/:complete', function (req, res, next) {
    var id = req.params.id;
    var completed = req.params.complete === 'true' ? 1 : 0;
    connection.query(`UPDATE todolist SET completed = ${completed} WHERE id =  ${id}`);
    res.redirect('/')
});

module.exports = router;
