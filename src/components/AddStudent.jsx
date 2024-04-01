// AddStudent.jsx
import '../css/Addstudent.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

const AddStudent = () => {

    const [fname, setFirstName] = useState('')
    const [lname, setLastName] = useState('')
    const [regno, setRegNo] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [bday, setBirthday] = useState('')
    const [intake, setIntake] = useState('')
    const [address, setAddress] = useState('')
    const [mnumber, setMobNum] = useState('')
    const [degree, setDegree] = useState('')
    const navigate = useNavigate()


    const handleSubmit = (e) => {

        e.preventDefault()
        axios.post('http://localhost:3001/student/addstudent', { fname, lname, regno, gender, age, bday, intake, address, mnumber, degree })
            .then(res => {
                console.log(res)
                if (res.data.registered) {
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
                    <h2>Add New Student</h2>
                    <form className="two-column-form">
                        <div className="left-column">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name:</label>
                                <input type="text" id="firstName" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name:</label>
                                <input type="text" id="lastName" name="lastName" onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="regNumber">Registration Number:</label>
                                <input type="text" id="regNumber" name="regNumber" onChange={(e) => setRegNo(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="gender">Gender:</label>
                                <select id="gender" name="gender" onChange={(e) => setGender(e.target.value)}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="age">Age:</label>
                                <input type="number" id="age" name="age" onChange={(e) => setAge(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="birthday">Birthday:</label>
                                <input type="date" id="birthday" name="birthday" onChange={(e) => setBirthday(e.target.value)} />
                            </div>
                        </div>
                        <div className="right-column">
                            <div className="form-group">
                                <label htmlFor="intake">Intake:</label>
                                <input type="text" id="intake" name="intake" onChange={(e) => setIntake(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address:</label>
                                <input type="text" id="address" name="address" onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobileNumber">Mobile Number:</label>
                                <input type="tel" id="mobileNumber" name="mobileNumber" onChange={(e) => setMobNum(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="degreeProgram">Courses :</label>
                                <input type="text" id="degreeProgram" name="degreeProgram" onChange={(e) => setDegree(e.target.value)} />
                            </div>
                            <div className="button-row">
                                <button className="button" type="submit" onClick={handleSubmit}>Add Student</button>
                                <button className="button" onClick={handleCancel}>Cancel</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default AddStudent;