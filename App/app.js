const express = require('express');
const path = require('path');
const db = require("./public/db/db_connection.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/styles')));

app.use(express.static(__dirname + '/img'));

const views = path.join(__dirname, 'views');

app.get('/', (req, res) => res.sendFile(path.join(views, 'home.html')));
app.get('/apparel', (req, res) => res.sendFile(path.join(views, 'apparel.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(views, 'contact.html')));
app.get('/calendar', (req, res) => res.sendFile(path.join(views, 'calendar.html')));
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

const create_question_sql = `
  INSERT INTO Question(question)
  VALUES (?);
`;

app.post("/contact", (req, res) => {
  console.log(req);
  db.execute(
    create_question_sql,
    [req.body.question],
    (error, results) => {
      console.log(error ? error : results);
      if (error) res.status(500).send(error);
      else {
        console.log(results);
        res.redirect("/contact");
      }
    }
  );
});

const create_order_sql = `
  INSERT INTO Orders(clothing, size, color, quantity)
  VALUES (?, ?, ?, ?);
`;

app.post("/t-shirt-expand", (req, res) => {
  console.log(req);
  db.execute(
    create_order_sql,
    ["T-Shirt", req.body.size, req.body.color, req.body.quantity],
    (error, results) => {
      console.log(error ? error : results);
      if (error) res.status(500).send(error);
      else {
        console.log(results);
        res.redirect("/apparel");
      }
    }
  );
});

app.post("/hoodie-expand", (req, res) => {
  console.log(req);
  db.execute(
    create_order_sql,
    ["Hoodie", req.body.size, req.body.color, req.body.quantity],
    (error, results) => {
      console.log(error ? error : results);
      if (error) res.status(500).send(error);
      else {
        console.log(results);
        res.redirect("/apparel");
      }
    }
  );
});

app.post("/beanie-expand", (req, res) => {
  console.log(req);
  db.execute(
    create_order_sql,
    ["Beanie", req.body.size, req.body.color, req.body.quantity],
    (error, results) => {
      console.log(error ? error : results);
      if (error) res.status(500).send(error);
      else {
        console.log(results);
        res.redirect("/apparel");
      }
    }
  );
});

app.post("/cap-expand", (req, res) => {
  console.log(req);
  db.execute(
    create_order_sql,
    ["Cap", req.body.size, req.body.color, req.body.quantity],
    (error, results) => {
      console.log(error ? error : results);
      if (error) res.status(500).send(error);
      else {
        console.log(results);
        res.redirect("/apparel");
      }
    }
  );
});

app.post("/crewneck-expand", (req, res) => {
  console.log(req);
  db.execute(
    create_order_sql,
    ["Crewneck", req.body.size, req.body.color, req.body.quantity],
    (error, results) => {
      console.log(error ? error : results);
      if (error) res.status(500).send(error);
      else {
        console.log(results);
        res.redirect("/apparel");
      }
    }
  );
});

app.post("/crewneck-vol-2-expand", (req, res) => {
  console.log(req);
  db.execute(
    create_order_sql,
    ["Crewneck Vol. 2", req.body.size, req.body.color, req.body.quantity],
    (error, results) => {
      console.log(error ? error : results);
      if (error) res.status(500).send(error);
      else {
        console.log(results);
        res.redirect("/apparel");
      }
    }
  );
});

app.post("/shorts-expand", (req, res) => {
  console.log(req);
  db.execute(
    create_order_sql,
    ["Shorts", req.body.size, req.body.color, req.body.quantity],
    (error, results) => {
      console.log(error ? error : results);
      if (error) res.status(500).send(error);
      else {
        console.log(results);
        res.redirect("/apparel");
      }
    }
  );
});

app.post("/shorts-vol-2-expand", (req, res) => {
  console.log(req);
  db.execute(
    create_order_sql,
    ["Shorts Vol. 2", req.body.size, req.body.color, req.body.quantity],
    (error, results) => {
      console.log(error ? error : results);
      if (error) res.status(500).send(error);
      else {
        console.log(results);
        res.redirect("/apparel");
      }
    }
  );
});

// maybe we can display the stuff on the database (ln 190 and 192)
const get_question_sql = `SELECT * FROM Question`;

const get_orders_sql = `SELECT * FROM Orders`;

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));