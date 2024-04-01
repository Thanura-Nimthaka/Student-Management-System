import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StudentCard } from './StudentCard';
import '../css/Course.css';

export const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/student/student')
            .then(res => {
                setStudents(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='student-list'>
            {students.map(student => (
                <StudentCard key={student._id} student={student} />
            ))}
        </div>
    );
}
