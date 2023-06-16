
const path = require('path');
const express = require('express');
const titleModels = require('../models/title');


const router = express.Router();

//рендеримо нашу сторінку
const createPath = (page) => path.resolve(__dirname, '../views', `${page}.ejs`);
router.get('/veiw', (req, res) => {
  res.render(createPath('pageView'))
})




router.post('/view', (req, res) => {

  const getList = async () => {
    const titles = await titleModels.find({})
    .populate('author')
    .exec()
    console.log('titles:', titles)
    res.json(titles);
}
getList()



});


module.exports = router;