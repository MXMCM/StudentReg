const{Course} = require('../models');

module.exports.viewAll = async function (req, res) {
    const courses = Course.findAll();
    res.render('course/view_all',{courses});
};