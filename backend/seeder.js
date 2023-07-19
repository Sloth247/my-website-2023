import dotenv from 'dotenv';
import connectDB from './config/db.js';
import projects from './_data/projects.js';
import users from './_data/users.js';
import skills from './_data/skills.js';

import Project from './models/projectModel.js';
import User from './models/userModel.js';
import Skill from './models/skillModel.js';

// Load env vars
dotenv.config();

connectDB();

// Import into DB
const importData = async () => {
  try {
    await Project.deleteMany();
    await User.deleteMany();
    await Skill.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProjects = projects.map((project) => {
      return { ...project, user: adminUser };
    });

    await Project.insertMany(sampleProjects);

    const sampleSkills = skills.map((skill) => {
      return { ...skill, user: adminUser };
    });

    await Skill.insertMany(sampleSkills);

    console.log('Data Imported...');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// Delete data
const destroyData = async () => {
  try {
    await Skill.deleteMany();
    await Project.deleteMany();
    await User.deleteMany();
    console.log('Data Destroyed...');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
