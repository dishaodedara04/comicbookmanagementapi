const ComicBook = require('../models/comicbook');

// Create a Comic Book

exports.createComicBook = async (req, res) => {
  try {
    const comicBook = new ComicBook(req.body);
    await comicBook.save();
    res.status(201).json(comicBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Edit a Comic Book
exports.updateComicBook = async (req, res) => {
  try {
    const comicBook = await ComicBook.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!comicBook) return res.status(404).json({ message: 'Comic Book not found' });
    res.json(comicBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a Comic Book
exports.deleteComicBook = async (req, res) => {
  try {
    const comicBook = await ComicBook.findByIdAndDelete(req.params.id);
    if (!comicBook) return res.status(404).json({ message: 'Comic Book not found' });
    res.json({ message: 'Comic Book deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch Inventory List
exports.getComicBooks = async (req, res) => {
  try {
    const { authorName, yearOfPublication, price, condition } = req.query;
    const query = {};

    if (authorName) query.authorName = authorName;
    if (yearOfPublication) query.yearOfPublication = yearOfPublication;
    if (price) query.price = { $lte: price };
    if (condition) query.condition = condition;

    const comicBooks = await ComicBook.find(query)
      .sort(req.query.sort)
      .skip(parseInt(req.query.skip))
      .limit(parseInt(req.query.limit));

    res.json(comicBooks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Comic Book Details
exports.getComicBookById = async (req, res) => {
  try {
    const comicBook = await ComicBook.findById(req.params.id);
    if (!comicBook) return res.status(404).json({ message: 'Comic Book not found' });
    res.json(comicBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
