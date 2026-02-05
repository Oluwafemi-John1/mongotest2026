const studentModel = require("../models/studentModel");

const saveStudent = (req,res)=>{
        const big = new studentModel({
            name: 'Abobs',
            email: 'victory@gmail.com',
            age: 78,
            course: "Software Engineering",
            gender: "male",
            isGraduate: false
        })
        big.save();
}

const getAllStudents = (req, res) => {
    res.send({message: 'Students'})
}

module.exports = {saveStudent, getAllStudents}