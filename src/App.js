import {
    createBrowserRouter, RouterProvider,
} from "react-router-dom";
import SignupPage from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([{
    path: '/', element: <HomePage/>
}, {
    path: "/signup", element: <SignupPage/>,
},]);

function App() {
    return (<div className="App">
        <RouterProvider router={router}/>
    </div>);
}

export default App;
