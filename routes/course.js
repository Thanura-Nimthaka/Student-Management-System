import express from 'express';
import { Course } from '../models/course.js';

const router = express.Router();

router.post('/addcourse', async (req, res) =>{
    
    try {
        const { cname, cID, semester } = req.body;
        const course = await Course.findOne({cID})
        if (course){
            return res.json({message: 'Course already Exist'})
        }
        const newcourse = new Course({
            cname,
            cID,
            semester
        })

        await newcourse.save()
        return res.json({registered: true})

    } catch (err) {
        return res.json({message: 'Error in registring Course' })
    }

})

router.get('/courses', async (req, res) =>{
    
    try {
        const courses = await Course.find()
        return res.json(courses)

    } catch (err) {
        return res.json({message: 'Error in viewing Course' })
    }

})

router.get('/course/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const courses = await Course.findById({_id: id})
        return res.json(courses)

    } catch (error) {
        return res.json(error)

    }
    
})


router.put('/course/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const courses = await Course.findByIdAndUpdate({_id: id}, req.body)
        return res.json({updated: true, courses})

    } catch (error) {
        return res.json(error)

    }
    
})


router.delete('/course/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const courses = await Course.findByIdAndDelete({_id: id})
        return res.json({deleted: true, courses})

    } catch (error) {
        return res.json(error)

    }
})


export { router as courseRouter };