import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'))

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
