const{Student} = require('../models');

module.exports.viewAll = async function (req, res) {
    const students = await Student.findAll();
    res.render('student/view_all',{students});
};
module.exports.viewProfile= async function (req,res){
    const student = await Student.findByPk(req.params.id);
    res.render('student/profile',{student});
};
module.exports.renderEditForm = async function(req,res){
    const student = await Student.findByPk(req.params.id);
    res.render('student/edit', {student});
};
module.exports.updateStudent = async function (req,res) {
    const student = await Student.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        grade_level: req.body.grade_level
    },{
        where: {
            id: req.params.id
        }
    });
    res.redirect(`/students/profile/${req.params.id}`);
};
module.exports.renderAddForm= function (req, res) {
    const course = {
        name: '',
        department: departments[0],
        instructor_name: '',
        description: ''
    };
    res.render('course/add',{course,departments});
};
module.exports.addStudent = async function (req, res) {
    const course = await Course.create({
        name: req.body.name,
        department: req.body.department,
        instructor_name: req.body.instructor_name,
        description: req.body.description
    });
    res.redirect(`/courses/profile/${course.id}`);
};
module.exports.deleteStudent = async function (req, res) {
    await Course.destroy({
        where: {
            id:req.params.id
        }
    });
    res.redirect('/courses');
};