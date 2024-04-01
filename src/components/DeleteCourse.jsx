import React, { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"


const DeleteCourse = () => {

    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios.delete(`http://localhost:3001/course/course/`+id)
            .then(res => {
                if(res.data.deleted){
                    navigate('/course')
                }
            })
            .catch(err => console.log(err));
    }, [])
}

export default DeleteCourse