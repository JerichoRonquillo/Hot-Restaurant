//require express
const express = require("express");
const path = require('path');
const app = express();
//define port
const PORT = 3000;

//routing
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, 'food.html')));

app.get('/waitList', (req, res) => res.sendFile(path.join(__dirname, 'waitList.html')));
app.get('/makeRes', (req, res) => res.sendFile(path.join(__dirname, 'makeRes.html')));

//listen
app.listen(PORT, () => {
    console.log(`Server is listening at: http://localhost:${PORT}/`)
})

let waitingList = [
    {
        table: 1,
        id: "Parth",
        name: "Parth",
        email: "Parth@parth.parth",
        phone: "1238675309"
    }
];

let currentReservations = [
    {
        table: 1,
        id: "Kevin",
        name: "Kevin",
        email: "Kevin@Kevin.Kevin",
        phone: "1238675309"
    }
];





