import React from 'react';
import { Link } from 'react-router-dom';
import './course.css'

const Course = ({coursed}) => {
    const { course, fee, img, instructor} = coursed
    return (
       <div className='course-container'>
            <div className='course-banner'>
        <img src={img} alt=""  className='bg-dark'/>
            </div>
            <div className='course-detail'>
                <div>
                <h2>{course}</h2>
                </div>
                <div className='course-info row'>
                   <div className='col-7'><h6> Instructor<b> {instructor}</b> </h6></div>
                   <div className='col-5'> <h6>Fee ${fee}</h6></div>
                   
                </div>
            </div>
            <div className='button-container'>
                <div className='btn btn-success'>
                   <Link className='text-light' 
                  to={`/courses/${coursed.id}`} >Course Details
                   </Link>
                </div>
                <div className='btn btn-success'>
                    <Link  className='text-light'>Get premium access</Link>
                </div>
            </div>
        </div>

   
    );
};

export default Course;