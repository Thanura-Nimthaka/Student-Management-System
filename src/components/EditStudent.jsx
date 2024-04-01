// EditStudent.jsx
import '../css/Addstudent.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

const EditStudent = () => {

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

    const { id } = useParams()

    useEffect(() => {
      axios.get(`http://localhost:3001/student/student/`+id)
          .then(res => {
              console.log(res)
              setFirstName(res.data.fname)
              setLastName(res.data.lname)
              setRegNo(res.data.regno)
              setGender(res.data.gender)
              setAge(res.data.age)
              setBirthday(res.data.bday)
              setIntake(res.data.intake)
              setAddress(res.data.address)
              setMobNum(res.data.mnumber)
              setDegree(res.data.degree)
          })
          .catch(err => console.log(err))
  }, [])


    const handleSubmit = (e) => {

        e.preventDefault()
        axios.put(`http://localhost:3001/student/student/`+id, { fname, lname, regno, gender, age, bday, intake, address, mnumber, degree })
            .then(res => {
                console.log(res)
                if (res.data.updated){
                    navigate('/student')
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
                    <h2>Edit Student</h2>
                    <form className="two-column-form" onSubmit={handleSubmit}>
                        <div className="left-column">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name:</label>
                                <input type="text" id="firstName" name="firstName" value={fname} onChange={(e) => setFirstName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name:</label>
                                <input type="text" id="lastName" name="lastName" value={lname} onChange={(e) => setLastName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="regNumber">Registration Number:</label>
                                <input type="text" id="regNumber" name="regNumber" value={regno} onChange={(e) => setRegNo(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="gender">Gender:</label>
                                <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="age">Age:</label>
                                <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="birthday">Birthday:</label>
                                <input type="date" id="birthday" name="birthday" value={bday} onChange={(e) => setBirthday(e.target.value)}/>
                            </div>
                        </div>
                        <div className="right-column">
                            <div className="form-group">
                                <label htmlFor="intake">Intake:</label>
                                <input type="text" id="intake" name="intake" value={intake} onChange={(e) => setIntake(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address:</label>
                                <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobileNumber">Mobile Number:</label>
                                <input type="tel" id="mobileNumber" name="mobileNumber" value={mnumber} onChange={(e) => setMobNum(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="degreeProgram">Courses :</label>
                                <input type="text" id="degreeProgram" name="degreeProgram" value={degree} onChange={(e) => setDegree(e.target.value)}/>
                            </div>
                            <div className="button-row">
                                <button className="button" type="submit" onClick={handleSubmit}>Update </button>
                                <button className="button" onClick={handleCancel}>Cancel</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default EditStudent;