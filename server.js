//require express
const express = require("express");
const app = express();
//define port
const PORT = 3000;

//listen
app.listen(PORT, () => {
    console.log(`Server is listening at: https://localhost:${PORT}/`)
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
]