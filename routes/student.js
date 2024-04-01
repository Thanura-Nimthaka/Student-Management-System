import express from 'express';
import { Student } from '../models/student.js';

const router = express.Router();

router.post('/addstudent', async (req, res) =>{
    
    try {
        const { fname, lname, regno, gender, age, bday, intake, address, mnumber, degree } = req.body;
        const student = await Student.findOne({regno})
        if (student){
            return res.json({message: 'student already Exist'})
        }
        const newstudent = new Student({
            fname, 
            lname, 
            regno, 
            gender, 
            age, 
            bday, 
            intake, 
            address, 
            mnumber, 
            degree
        })

        await newstudent.save()
        return res.json({registered: true})

    } catch (err) {
        return res.json({message: 'Error in registring student' })
    }

})

router.get('/student', async (req, res) =>{
    
    try {
        const students = await Student.find()
        return res.json(students)

    } catch (err) {
        return res.json({message: 'Error in viewing Course' })
    }

})

router.get('/student/:id', async (req, res) =>{
    try {
        const id = req.params.id;
        const students = await Student.findById({_id: id})
        return res.json(students)
    } catch (err) {
        return res.json(err)
    }
})


router.put('/student/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const students = await Student.findByIdAndUpdate({_id: id}, req.body)
        return res.json({updated: true, students})

    } catch (error) {
        return res.json(error)

    }
    
})


router.delete('/student/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const students = await Student.findByIdAndDelete({_id: id})
        return res.json({deleted: true, students})

    } catch (error) {
        return res.json(error)

    }
})

router.get('/student/:name', async (req, res) =>{
    try {
        const name = req.params.name;
        const students = await Student.findByName({_name: name})
        return res.json(students)
    } catch (err) {
        return res.json(err)
    }
})

export { router as studentRouter };