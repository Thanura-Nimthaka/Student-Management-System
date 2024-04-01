import React, { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"


const DeleteStudent = () => {

    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios.delete(`http://localhost:3001/student/student/`+id)
            .then(res => {
                if(res.data.deleted){
                    navigate('/student')
                }
            })
            .catch(err => console.log(err));
    }, [])
}

export default DeleteStudent