import { createBrowserRouter } from "react-router-dom";
import Blog from "../compinent/Blog/Blog";
import Courses from "../compinent/Courses/Courses";
import FAQ from "../compinent/FAQ/FAQ";
import Home from "../compinent/Home/Home";
import LogIn from "../compinent/LogIn/LogIn";
import Register from "../compinent/Register/Register";
import Main from "../layout/Main";
import CoursesDetails from "../compinent/CoursesDetails/CoursesDetails"

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/courses',
                loader: async ()=> {
                    return fetch ('https://web-server-eight.vercel.app/courses')
            
                  },
                element:<Courses></Courses>
            },
            {
                path:'/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/courses/:coursesId',
                loader: async ({params})=> {
                    return fetch (`https://web-server-eight.vercel.app/courses/${params.coursesId}`)
            
                  },
                element:<CoursesDetails></CoursesDetails>
            }
            
        ]
    }
]);