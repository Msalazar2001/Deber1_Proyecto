// Controllers
//Index controller

const index = (req, res, next) =>{
    res.render('index', { title: 'Express' });
  }

  module.exports = {
    index
  };