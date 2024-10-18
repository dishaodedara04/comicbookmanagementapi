

const mongoose = require('mongoose');

const comicBookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authorName: {
    type: String,
    required: true
  },
  yearOfPublication: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  condition: {
    type: String,
    required: true
  }
});

const ComicBook = mongoose.model('ComicBook', comicBookSchema);

module.exports = ComicBook;
