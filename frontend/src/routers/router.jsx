import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import ErrorPage from "../pages/ErrorPage"
import Student from "../pages/Student"
import College from "../pages/College"

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
                path: "student",
                element: <Student />
            },
            {
                path: "college",
                element: <College />
            }
        ]
    }
]);

export default router;
