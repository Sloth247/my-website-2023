import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
      maxlength: [50, 'Company name can not be more than 50 characters'],
    },

    image: {
      type: String,
      required: [true, 'Please add a image'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
      maxlength: [1000, 'Description can not be more than 100 characters'],
    },
    github: {
      type: String,
      required: true,
    },
    liveUrl: {
      type: String,
      required: true,
    },
    stack: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', ProjectSchema);

export default Project;
