const express = require('express');
const app = express();
const cors = require('cors');
const testRoute = require('./routes/test');

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use('/test', testRoute);

app.get('/', (req, res) => {
    res.status(200).json({message: "You have reached advance express vercel template"});
});

app.get('/main', (req, res) => {
    res.status(200).json({message: "You have reached main route of advance express vercel template"});
});



app.listen(PORT, () => {
    console.log("Server Started");
})