// AddStudent.jsx
import '../css/Addstudent.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

const AddCourse = () => {

    const [cname, setCourseName] = useState('')
    const [cID, setCourseID] = useState('')
    const [semester, setSemester] = useState('')
    const navigate = useNavigate()


    const handleSubmit = (e) => {

        e.preventDefault()
        axios.post('http://localhost:3001/course/addcourse', { cname, cID, semester })
            .then(res => {
                console.log(res)
                if (res.data.registered){
                    navigate('/home')
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
                    <h2>Add New Course</h2>
                    <form className="two-column-form" on onSubmit={handleSubmit}>
                        <div className="left-column">
                            <div className="form-group">
                                <label htmlFor="firstName">Course Name:</label>
                                <input type="text" id="cname" name="courseName" onChange={(e) => setCourseName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Course ID:</label>
                                <input type="text" id="cID" name="courseID" onChange={(e) => setCourseID(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="regNumber">Semester:</label>
                                <input type="text" id="semester" name="semester" onChange={(e) => setSemester(e.target.value)} />
                            </div>

                            <div className="button-row">
                                <button className="button" type='submit' onClick={handleSubmit}>Add Course</button>
                                <button className="button" onClick={handleCancel} >Cancel</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default AddCourse;
