'use strict'

var gProjects
var gNumOfProjects = 7

function createProject(id, name, title, desc,url, publishedAt, labels) {
    const proj = {
        id,
        name,
        title,
        desc,
        url,
        publishedAt,
        labels,
    }
    return proj
}

function createProjects() {
    var proj1 = createProject('minesweeper', 'Minesweeper', 'Mines are everywere', 'To win a round of Minesweeper, you must click on the board every square that doesn\'t have a mine under it. Once you\'ve done so, the game will be over. If you accidentally click a square that has a mine beneath it, the game will be over.','https://shaulgabrieli.github.io/Minesweeper/',1669413600000, ['Matrixes', 'Mouse events'])
    var proj2 = createProject('inpicture', 'In Picture', 'Mind test', 'Click on the right answer and you will continue to the next question.','https://shaulgabrieli.github.io/in-picture/', 1670260356649, ['Sounds', 'Mouse events'])
    var proj3 = createProject('touchnums', 'Touch Numbers', 'Move with the order', 'Click on the numbers in ascending order, while each step grows by one.','https://shaulgabrieli.github.io/touch-nums/',1670260356649, ['Sounds', 'Mouse events'])
    var proj4 = createProject('bookshop', 'Bookshop', 'manage your shop', 'This is your bookshop, here you can add a new book, change the price, delete and rate each book.','https://shaulgabrieli.github.io/bookshop/',1670260356649, ['Tables', 'Modal'])
    var proj5 = createProject('pacman', 'Pacman', 'eat them all', 'Eat all the cookies and beware of the spiders, if you eat Pizza you have a few seconds to eat the spiders and be unstoppable. cookie gives 1 point, and cherry gives 10 points.','https://shaulgabrieli.github.io/pacman/',1670260356649, ['Matrixes', 'keyboard events'])
    var proj6 = createProject('todo', 'Todo', 'help you remember', 'Manage a To Do list','https://shaulgabrieli.github.io/todo/', 1670260356649, ['Local Storage', 'Mouse events'])
    var proj7 = createProject('ballboard', 'Ball Board', 'look for the ball', 'Eat the balls and beware of the candy, it will stick you.','https://shaulgabrieli.github.io/ball-board/', 1670260356649, ['Matrixes', 'keyboard events'])

    gProjects = [proj1, proj2, proj3, proj4, proj5, proj6, proj7]
}


function getProjById(projId) {
    const proj = gProjects.find((proj) => projId === proj.id)
    return proj
}

