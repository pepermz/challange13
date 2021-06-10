const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: Product
  })
  .then(categories => {
    res.json(categories)
  })
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // id is a request parameter
  const id = req.params.id
  Category.findByPk(id,{
    include: Product
  })
  .then(category => {
    res.json(category)
  })
  // find one category by its `id` value

  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
