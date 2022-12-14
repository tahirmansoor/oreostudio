import {  BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from '../Containers/Home/index';
import Slider from "../Containers/Slider";
import Login from "../Containers/Login";
import Register from "../Containers/Register";
import SignUp from "../Containers/SignUp";




function AppRouter(){
return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element= { <Home />} />
                    <Route path="/Slider" element= { <Slider />} />
                    <Route path="/Login" element= { <Login />} />
                    <Route path="/register" element= { <Register />} />
                    <Route path="/SignUp" element= { <SignUp />} />
                </Routes>
            </BrowserRouter>,
        </>
)
};

export default AppRouter;
