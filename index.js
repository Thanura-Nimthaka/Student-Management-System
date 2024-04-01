import express, { response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import "./db.js"
import { AdminRouter } from './routes/auth.js'
import { courseRouter } from './routes/course.js'
import { studentRouter } from './routes/student.js'
import { Student } from './models/student.js'
import { Course } from './models/course.js'

const app = express ()
app.use(express.json())
app.use(cors({ 
    origin: ['http://localhost:5173'],
    credentials : true
}))
app.use(cookieParser())
dotenv.config()
app.use('/auth', AdminRouter)
app.use('/course', courseRouter)
app.use('/student', studentRouter)

app.get('/home', async (req, res) => {
    try {
        const student = await Student.countDocuments()
        const course = await Course.countDocuments()

        return res.json({ok: true, student, course})

    } catch (error) {
        return res.json(error)
    }
})


app.listen(process.env.PORT, () => {
    console.log("Server is Running");

})