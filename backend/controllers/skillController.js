import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from '../middleware/async.js';
import Skill from '../models/skillModel.js';

// @desc Get all skills
// @routes GET /api/skills
// @access Public
const getSkills = asyncHandler(async (req, res, next) => {
  const skills = await Skill.find();

  if (skills) {
    res.json(skills);
  } else {
    return next(new ErrorResponse('Skill not found', 404));
  }
});

// @desc Get single skill
// @routes GET /api/skills/:id
// @access Public
const getSkill = asyncHandler(async (req, res, next) => {
  const skill = await Skill.findById(req.params.id);

  if (!skill) {
    return next(
      new ErrorResponse(`Skill not found with id of ${req.params.id}`, 404)
    );
  }

  res.json(skill);
});

// @desc Create a skill
// @routes POST /api/skills
// @access Private/Admin
const createSkill = asyncHandler(async (req, res, next) => {
  const { title, image, description, github, liveUrl, stack } = req.body;

  const skill = new Skill({
    title,
    image,
    description,
    github,
    liveUrl,
    stack,
  });

  const createdSkill = await skill.save();

  res.status(201).json(createdSkill);
});

// @desc Update single skill
// @routes PUT /api/skills/:id
// @access Private/Admin
const updateSkill = asyncHandler(async (req, res, next) => {
  const { name, image } = req.body;

  const skill = await Skill.findById(req.params.id);

  if (skill) {
    (skill.name = name), (skill.image = image);

    const updatedSkill = await skill.save();
    res.json(updatedSkill);
  } else {
    return next(
      new ErrorResponse(`Skill not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: skill });
});

// @desc Delete a skill
// @routes DELETE /api/skills/:id
// @access Private/Admin
const deleteSkill = asyncHandler(async (req, res, next) => {
  const skill = await Skill.findById(req.params.id);
  if (skill) {
    await skill.remove();
    res.json({ message: 'Skill removed' });
  } else {
    return next(
      new ErrorResponse(`Skill not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: {} });
});

export { getSkills, getSkill, createSkill, updateSkill, deleteSkill };
