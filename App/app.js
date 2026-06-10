const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/styles')));

app.use(express.static(__dirname + '/img'));

const views = path.join(__dirname, 'views');

app.get('/', (req, res) => res.sendFile(path.join(views, 'home.html')));
app.get('/apparel', (req, res) => res.sendFile(path.join(views, 'apparel.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(views, 'contact.html')));
app.get('/hours', (req, res) => res.sendFile(path.join(views, 'hours.html')));
app.get('/location', (req, res) => res.sendFile(path.join(views, 'location.html')));
app.get('/status', (req, res) => {
    res.json({ status: 'Running', timestamp: new Date().toISOString() });
});

app.get('/t-shirt-expand', (req, res) => res.sendFile(path.join(views, 't-shirt-expand.html')));
app.get('/hoodie-expand', (req, res) => res.sendFile(path.join(views, 'hoodie-expand.html')));
app.get('/beanie-expand', (req, res) => res.sendFile(path.join(views, 'beanie-expand.html')));
app.get('/cap-expand', (req, res) => res.sendFile(path.join(views, 'cap-expand.html')));
app.get('/crewneck-expand', (req, res) => res.sendFile(path.join(views, 'crewneck-expand.html')));
app.get('/crewneck-vol-2-expand', (req, res) => res.sendFile(path.join(views, 'crewneck-vol-2-expand.html')));
app.get('/shorts-expand', (req, res) => res.sendFile(path.join(views, 'shorts-expand.html')));
app.get('/shorts-vol-2-expand', (req, res) => res.sendFile(path.join(views, 'shorts-vol-2-expand.html')));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
