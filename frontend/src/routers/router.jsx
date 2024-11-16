import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import ErrorPage from "../pages/ErrorPage"
import  Services from '../pages/Services'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import Ask from "../pages/Ask"
import College from '../pages/college/College'
import Student from '../pages/student/Student'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: 'services',
                element: <Services />
            },
            {
                path: 'about',
                element: <AboutUs />
            },
            {
                path: 'contact-us',
                element: <ContactUs />
            },
            {
                path: 'ask',
                element: <Ask />
            },
            {
                path: 'college',
                element: <College />
            },
            {
                path: 'student',
                element: <Student />
            }
        ],
    }
]);

export default router;
