// EditCourse.jsx
import '../css/Addstudent.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

const EditCourse = () => {
    const [cname, setCourseName] = useState('')
    const [cID, setCourseID] = useState('')
    const [semester, setSemester] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3001/course/course/`+id)
            .then(res => {
                console.log(res)
                setCourseName(res.data.cname)
                setCourseID(res.data.cID)
                setSemester(res.data.semester)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3001/course/course/`+id, { cname, cID, semester })
            .then(res => {
                console.log(res)
                if (res.data.updated) {
                    navigate('/course')
                }
            })
            .catch(err => console.log(err))
    }

    const handleCancel = () => {
        navigate('/home')
    }

    return (
        <div>
            <div className="stu">
                <div className="card-body">
                    <h2>Edit Course</h2>
                    <form className="two-column-form" onSubmit={handleSubmit}>
                        <div className="left-column">
                            <div className="form-group">
                                <label htmlFor="cname">Course Name:</label>
                                <input type="text" id="cname" name="courseName" value={cname} onChange={(e) => setCourseName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cID">Course ID:</label>
                                <input type="text" id="cID" name="courseID" value={cID} onChange={(e) => setCourseID(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="semester">Semester:</label>
                                <input type="text" id="semester" name="semester" value={semester} onChange={(e) => setSemester(e.target.value)} />
                            </div>

                            <div className="button-row">
                                <button className="button" type='submit' onClick={handleSubmit} >Update Course</button>
                                <button className="button" onClick={handleCancel}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditCourse;
