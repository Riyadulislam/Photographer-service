import Addservice from "../../Pages/Home/Addservice/Addservice";
import Blog from "../../Pages/Home/Blog/Blog";
import Myreviews from "../../Pages/Home/Myreviews/Myreviews";
import Details from "../../Pages/Home/Services/Details";
import Login from "../../Pages/Login/Login";
import Service from "../../Pages/Service/Service";
import Singup from "../../Pages/Singup/Singup";
import Privateroute from "../PrivateRoute/Privateroute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

  const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[{
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/singup',
            element:<Singup></Singup>
        },
        {
            path:'/service',
            element:<Service> </Service>
        },
        {
            path:'/details/:id',
            element:<Details></Details>,
            loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/review',
            element:<Privateroute><Myreviews></Myreviews></Privateroute>
        },
        {
            path:'/addservice',
            element:<Privateroute><Addservice></Addservice></Privateroute>
        }
       
    ]
    }
])
export default router;