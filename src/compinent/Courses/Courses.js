import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './courses.css'

const Courses = () => {

    const courses = useLoaderData(); 
    return (
        <Container>
          <Row>
            <Col className='col-3 border rounded p-5 h-100'>
        <h2>All Courses</h2>
        <div>
            {
                courses.map(course => <p key={course.id}>
                 
                   <Link to={`/courses/${course.id}`} >
                    {course.course} 
                    </Link>
                   
                </p>)
            }
        </div>
            </Col>
            <Col className='col-9 '>
            <div className='courses-container'>
                {
                    courses.map(course => <Course key={course.id}  coursed={course}></Course>)
                }
            </div>
            </Col>
          </Row>
        </Container>
    );
};

export default Courses;