const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let books = [{ id: 1, title: "The Alchemist" }];

app.get('/books', (req, res) => res.json(books));
app.post('/books', (req, res) => {
  books.push(req.body);
  res.status(201).json({ message: "Book added" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
