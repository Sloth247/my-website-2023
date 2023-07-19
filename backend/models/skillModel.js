import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: [50, 'name can not be more than 50 characters'],
    },

    image: {
      type: String,
      required: [true, 'Please add a image'],
    },
  },
  { timestamps: true }
);

const Skill = mongoose.model('Skill', SkillSchema);

export default Skill;
