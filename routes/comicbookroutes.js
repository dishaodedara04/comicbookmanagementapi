const express = require('express');
const router = express.Router();
const {
    createComicBook,
    updateComicBook,
    deleteComicBook,
    getComicBooks,
    getComicBookById
  } = require('../controllers/comicbookcontroller');  // Correct file name
  
router.post('/comics', createComicBook);
router.put('/comics/:id', updateComicBook);
router.delete('/comics/:id', deleteComicBook);
router.get('/comics', getComicBooks);
router.get('/comics/:id', getComicBookById);

module.exports = router;  // Ensure the router is exported correctly
