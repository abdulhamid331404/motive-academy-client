import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CoursesDetails.css'

const CoursesDetails = () => {
    const courseData = useLoaderData();
    const {instructor, course, fee, rating, img, description
} = courseData;

    return (
        <div className='course-containers'>
            <div  >
            <div className='course-img'>
                <img src={img} alt="" className='bg-dark' />
            </div>
            </div>
            <div className='course-details'>
           
                <h1>{course}</h1>
                <h6><u> <b>Instructor: </b> </u>  <strong> {instructor}</strong> </h6>
                <p> <b>Course Details:</b> {description}</p>
    
            </div>
        </div>
    );
};

export default CoursesDetails;