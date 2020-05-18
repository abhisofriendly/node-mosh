const express = require('express');
const router = express.Router();

const courses = [
  {
    id: 1,
    name: 'course 1',
  },
  {
    id: 2,
    name: 'course 2',
  },
  {
    id: 3,
    name: 'course 3',
  },
];

router.get('/', (req, res) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  const result = Joi.validate(req.body, schema);
  console.log(result);
  res.send(courses);
});

router.put('/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).send('the course is not given in the list');
  }
  course.name = req.body.name;
  res.send(course);
});

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send('the course not found');
  }
  if (course) {
    res.send(course);
  }
});

router.delete('/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(courses);
});

router.post('/api/courses', (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

module.exports = router;
