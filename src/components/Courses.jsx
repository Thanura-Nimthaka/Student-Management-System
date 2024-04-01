import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CourseCard } from './CourseCard';
import '../css/Course.css';

export const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/course/courses')
            .then(res => {
                setCourses(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='course-list'>
            {courses.map(course => (
                <CourseCard key={course._id} course={course} />
            ))}
        </div>
    );
}
