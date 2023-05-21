const express = require('express');
//const cors = require('cors');

const app = express();
//app.use(express.urlencoded({ extended: true })); -body parser
app.use(express.static('static'));
app.use(express.json());
//app.use(cors());


const items = [
    {
        id: 1,
        name: 'Item 1',
        price: 10
    },
    {
        id: 2,
        name: 'Item 2',
        price: 20
    },
    {
        id: 3,
        name: 'Item 3',
        price: 30
    }
];
let id = 4;

app.get('/data', (req, res) => {
    //console.log('Request made!');
    res.json(items);
});

app.post('/data', (req, res) => {
    const name = req.body.name;
    const price = Number(req.body.price);
    const newItem = { name, price, id };
    items.push(newItem);
    id++;
    res.status(201).json(newItem);
});

app.delete('/data/:id', (req, res) => {
    const id = req.params.id;
    const itemIndex = items.findIndex(x => x.id == id);
    items.splice(itemIndex, 1);
    res.status(202).end();
}); 

app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    const item = items.find(x => x.id == id);
    res.status(200).json(item);
}); 

app.put('/data/:id', (req, res) => {
    const id = req.params.id;
    const item = items.find(x => x.id == id);
    item.name = req.body.name; 
    item.price = Number(req.body.price);
    res.status(202).end();
});


app.listen(3000, () => console.log('Listening on port 3000...'));