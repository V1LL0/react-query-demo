const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const app = express();
app.use(bodyParser.json());

// Enable CORS for all methods
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const port = 8080;
let db;

open({
  filename: ':memory:',
  driver: sqlite3.Database,
}).then(async (openDb) => {
  db = openDb;
  try {
    await db.run('DROP TABLE notes;');
  } catch (e) {
    // no problem if it doesn't exist yet
  }
  await db.run(` 
    CREATE TABLE notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      text TEXT
    );`);
  return db.run(`
    INSERT INTO notes(title, text) VALUES ('Amazing title', 'amazing description!'), ('Second title', 'Remember to buy milk and eggs!');
  `);
});

const sendError = (err, res) => res.status(500).json({
  success: false,
  payload: {},
  error: {
    name: err.name,
    message: err.message,
  },
});

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

app.get('/notes', async (req, res) => {
  // await sleep(2000);
  const result = await db.all('SELECT * FROM notes');
  return res.json(result);
});

app.post('/notes', async (req, res) => {
  const { title, text } = req.body;
  if (!title && !text) {
    return sendError(new Error('Send me a note'), res);
  }

  try {
    const result = await db.run(
      'INSERT INTO notes(title, text) VALUES (:title, :text)',
      {
        ':title': title,
        ':text': text,
      }
    );
    return res.json(result);
  } catch (err) {
    return sendError(err, res);
  }
});

app.put('/notes/:id', async (req, res) => {
  const { id } = req.params;
  const { title, text } = req.body;

  if (!title && !text) {
    return sendError(new Error('Send me a note'));
  }

  try {
    const result = await db.run(
      'UPDATE notes SET title = ?, text = ? WHERE id = ?',
      title,
      text,
      id
    );
    return res.json(result);
  } catch (err) {
    return sendError(err, res);
  }
});

app.delete('/notes/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.run('DELETE FROM notes WHERE id = ?', id);
    return res.json(result);
  } catch (err) {
    return sendError(err, res);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
