import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const courseData = useLoaderData();
    const {} = courseData;
    return (
        <div>
            <h1>This is Courses Details</h1>
        </div>
    );
};

export default CoursesDetails;