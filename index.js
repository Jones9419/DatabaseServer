const express = require('express');
const pgp = require('pg-promise')();
const server = express();

const port = 3000;


const cn = {
  host: 'localhost',
  port: 5432,
  database: 'test',
  user: 'jones9419',
  password: '',
  allowExitOnIdle: true
};

const db = pgp(cn);

server.get('/heartbeat', (req, res) => {
  res.send('heartbeat');
});

server.get('/students', async (req,res) => {
  const students = await getStudents();
  res.json({
    students
  })
});


async function getStudents() {
  const students = await db.any('select * from "Students"', [true])
}

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});