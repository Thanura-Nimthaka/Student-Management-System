import React from 'react';
import '../css/Course.css';
import { Link } from 'react-router-dom';

export const StudentCard = ({ student }) => {
    const { fname, lname, regno, gender, age, bday, intake, address, mnumber, degree } = student;

    return (
        <div className='student-card'>
            <div className="details">
                <h3>{fname}<br></br>{lname}</h3><br></br>
                <p>Reg Number: {regno}<br></br><br></br>Age: {age}
                    <br></br><br></br>Birthday: {bday}<br></br><br></br>Intake: {intake}<br></br><br></br>Address: {address}<br></br>
                    <br></br>Mobile Number:{mnumber}<br></br><br></br>Courses: {degree} </p>
            </div>
            <div className="course-action">
                <button className='btn'>
                    <Link to={`/student/${student._id}`} className='edit-link'>Edit</Link>
                </button>
                <button className='delbtn'>
                    <Link to={`/change/${student._id}`} className='edit-link'>Delete</Link>
                </button>
            </div>
        </div>
    )
}