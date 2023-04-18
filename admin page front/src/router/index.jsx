import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../Components/Register";
import Login from "../Components/login";
import Addcategory from "../Components/Addcategory";
import Header from "../Components/Header";




function Router() {
    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route path="register" element={<Register />} />
                        <Route path="login" element={<Login />} />
                        <Route path="addcategory" element={<Addcategory />} />
                    </Route>


                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;