const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/playgroundtest')
  .then(() => console.log('connected to database'))
  .catch((error) => console.log('error ', error));

const AuthorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});

const CourseSchema = new mongoose.Schema({
  name: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
  },
});

const Author = mongoose.model('Author', AuthorSchema);

const Course = mongoose.model('Course', CourseSchema);

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website,
  });
  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {
  const course = new Course({
    name,
    author,
  });
  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find().populate('author');
  console.log('courses ', courses);
}

//createAuthor('abhishek', 'developer', 'full stack development dot com');

//createCourse('ab', '5ec0521020ef2504d08d6790');

listCourses();
