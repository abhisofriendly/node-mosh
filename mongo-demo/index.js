const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/playground', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch((error) => {
    console.log('could not able to connecto to mongo', error);
  });

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  ispublished: Boolean,
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
  const course1 = new Course({
    // name: 'react course',
    author: 'ab',
    tags: ['node', 'frontend', 'react'],
    ispublished: true,
  });
  try {
    const result = await course1.save();
    console.log(result);
  } catch (ex) {
    console.log('error', ex.message);
  }
}

async function getCourses() {
  //const courses = await Course.find();

  // adding filtering to course
  const courses = await Course.find({ author: 'ab' });
  console.log(courses);
}

createCourse();
// getCourses();
