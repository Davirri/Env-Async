require('dotenv').config();

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const sectionOneData = JSON.parse(fs.readFileSync(path.join(__dirname, 'mockdata', 'sectionOneData.json')));
const sectionThreeData = JSON.parse(fs.readFileSync(path.join(__dirname, 'mockdata', 'sectionThreeData.json')));
const sectionHeroData = JSON.parse(fs.readFileSync(path.join(__dirname, 'mockdata', 'sectionHeroData.json')));

app.get('/api/section-one', (req, res) => {
  res.json(sectionOneData);
});

app.get('/api/section-three', (req, res) => {
  res.json(sectionThreeData);
});
app.get('/api/section-hero', (req, res) => {
  res.json(sectionHeroData);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
