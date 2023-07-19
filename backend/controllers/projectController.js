import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from '../middleware/async.js';
import Project from '../models/projectModel.js';

// @desc Get all projects
// @routes GET /api/projects
// @access Public
const getProjects = asyncHandler(async (req, res, next) => {
  const projects = await Project.find();

  if (projects) {
    res.json(projects);
  } else {
    return next(new ErrorResponse('Project not found', 404));
  }
});

// @desc Get single project
// @routes GET /api/projects/:id
// @access Public
const getProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(
      new ErrorResponse(`Project not found with id of ${req.params.id}`, 404)
    );
  }

  res.json(project);
});

// @desc Create a project
// @routes POST /api/projects
// @access Private/Admin
const createProject = asyncHandler(async (req, res, next) => {
  const { title, image, description, github, liveUrl, stack } = req.body;

  const project = await Project.create({
    title,
    image,
    description,
    github,
    liveUrl,
    stack,
  });

  res.status(201).json({
    sucess: true,
    data: {
      id: project._id,
      title: project.title,
      image: project.image,
      description: project.description,
      github: project.github,
      liveUrl: project.liveUrl,
      stack: project.stack,
    },
  });
});

// @desc Update single project
// @routes PUT /api/projects/:id
// @access Private/Admin
const updateProject = asyncHandler(async (req, res, next) => {
  const { title, image, description, github, liveUrl, stack } = req.body;

  const project = await Project.findById(req.params.id);

  if (project) {
    (project.title = title),
      (project.image = image),
      (project.description = description),
      (project.github = github),
      (project.liveUrl = liveUrl),
      (project.stack = stack);

    const updatedProject = await project.save();
    res.json(updatedProject);
  } else {
    return next(
      new ErrorResponse(`Project not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: project });
});

// @desc Delete a project
// @routes DELETE /api/projects/:id
// @access Private/Admin
const deleteProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);
  if (project) {
    await project.remove();
    res.json({ message: 'Project removed' });
  } else {
    return next(
      new ErrorResponse(`Project not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: {} });
});

export { getProjects, getProject, createProject, updateProject, deleteProject };
