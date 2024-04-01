import React from 'react';
import '../css/Course.css';
import { Link } from 'react-router-dom';

export const CourseCard = ({ course }) => {
    const { cID, cname, semester } = course;

    return (
        <div className='course-card'>
            <div className="details">
                <h3>{cname}</h3><br></br>
                <p>Course ID: {cID}<br></br><br></br>Semester: {semester}</p>
            </div>
            <div className="course-action">
            <button className='btn'>
                        <Link to={`/course/${course._id}`} className='edit-link'>Edit</Link>
                    </button>
                    <button className='delbtn'>
                        <Link to={`/delete/${course._id}`} className='edit-link'>Delete</Link>
                    </button>  
            </div>
        </div>
    )
}
