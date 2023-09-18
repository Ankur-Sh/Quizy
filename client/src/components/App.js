import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/*importing Components*/
import Main from "./Main";
import Quiz from "./Quiz";
import Result from "./Result";
import Login from "./Login";
import { CheckUserExist } from "../helper/helper";

/*React Routes*/
const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/main",
        element: <Main />,
    },
    {
        path: "/main/quiz",
        element: (
            <CheckUserExist>
                <Quiz />
            </CheckUserExist>
        ),
    },
    {
        path: "/result",
        element: (
            <CheckUserExist>
                <Result />
            </CheckUserExist>
        ),
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
