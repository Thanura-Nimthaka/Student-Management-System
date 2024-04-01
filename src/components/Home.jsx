import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import axios from 'axios';

const Home = () => {

  const [students, setStudents] = useState(0)
  const [courses, setCourses] = useState(0)

  useEffect(() => {
    axios.get(`http://localhost:3001/home`)
      .then(res => {

        setStudents(res.data.student)
        setCourses(res.data.course)

      }).catch(err => console.log(err))

  })
  return (
    <div className="home-page">
      {/* First Card */}
      <div className="card">
        <h2 style={{ textAlign: 'center', marginBottom: '10px', fontFamily: 'cursive' }}>Student Count</h2>
        <h3 style={{ textAlign: 'center', fontFamily: 'cursive', fontSize: '40px' }}>{students}</h3>
      </div>
      {/* Second Card */}
      <div className="card">
        <h2 style={{ textAlign: 'center', marginBottom: '10px', fontFamily: 'cursive' }}>Course Count</h2>
        <h3 style={{ textAlign: 'center', fontFamily: 'cursive', fontSize: '40px' }}>{courses}</h3>
      </div>
      {/* Third Card */}
      <div className="card">
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontFamily: 'cursive' }}>Manage Students</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/add-student" className="link">Add Student</Link>
          <Link to="/student" className="link">Student Actions</Link>
        </div>
      </div>
      {/* Fourth Card */}
      <div className="card">
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontFamily: 'cursive' }}>Manage Courses</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/add-course" className="link">Add Course</Link>
          <Link to="/course" className="link">Course Settings</Link>
        </div>
      </div>
      {/* Fifth Card - Positioned to the Right */}
      <div className="card-right">
        <div style={{ padding: '20px', marginBottom: '40px', marginTop: '70px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '60px', fontFamily: 'cursive' }}>Student Details</h2>
          <div style={{ marginBottom: '20px' }}>
            {/* Search bar */}
            <input type="text" placeholder="Search" style={{ width: '69%', padding: '10px' }} />
            {/* Button */}
            <Link to="/search" className="search-link" style={{ marginLeft: '10px' }}>Search</Link>
          </div>
          {/* Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 50, marginBottom: 40 }}>
            <Link to="/intake38" className="details-link">Intake38</Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, marginBottom: 40 }}>
            <Link to="/intake39" className="details-link">Intake39</Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, marginBottom: 40 }}>
            <Link to="/intake40" className="details-link">Intake40</Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, marginBottom: 40 }}>
            <Link to="/intake41" className="details-link">Intake41</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

