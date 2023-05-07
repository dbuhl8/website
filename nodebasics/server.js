// server.js
const express = require('express');
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hey look! I\'ve changed the message!')
})

let counter = 0;
app.get('/visits', (req, res) => {
	counter += 1
      // Text formatting from ‘text formatting’ JavaScript prelab section
	res.send(`There have been ${counter} visits to this session`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/`);
});

app.get(`/rock`, (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1
    console.log(rndInt)
    if (rndInt == 3) {
        console.log("Rock WINS!, Scissors loses");
    } else if (rndInt == 2) {
        console.log("Paper WINS, Rock loses :'(");
    } else {
        console.log("TIE!, both players played rock :O!")
    }
});
app.get(`/paper`, (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1
    console.log(rndInt)
    if (rndInt == 1) {
        console.log("Paper WINS!, Rock loses");
    } else if (rndInt == 3) {
        console.log("Scissors WINS, Paper loses :'(");
    } else {
        console.log("TIE!, both players played paper :O!")
    }
});
app.get(`/scissors`, (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1
    console.log(rndInt)
    if (rndInt == 2) {
        console.log("Scissors WINS!, Paper loses");
    } else if (rndInt == 1) {
        console.log("Rock WINS, Scissors loses :'(");
    } else {
        console.log("TIE!, both players played scissors :O!")
    }
});