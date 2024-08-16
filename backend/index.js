const express = require('express');
// const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
// const router = express.Router();

dotenv.config();

const app = express();
const port = process.env.PORT || 8888;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());  

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  url: String,
  image: String,
  technologies: [String],
});


const SkillSchema = new mongoose.Schema({
  name: String,
  image: String,
});

const Project = mongoose.model('Project', ProjectSchema);
const Skill = mongoose.model('Skill', SkillSchema);


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.get('/api/projects', async (req, res) => {
      const projects = await Project.find();
      res.json(projects);
    });
    

app.get('/api/skills', async (req, res) => {
      const skills = await Skill.find();
      res.json(skills);
    });

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
