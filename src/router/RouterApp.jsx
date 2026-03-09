import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { RouteProtected } from "../components/RouteProtected"

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RouteProtected><Home /></RouteProtected>} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export { RouterApp }