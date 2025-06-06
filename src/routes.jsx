import path from "path";
import { AboutUsPage } from "./pages/aboutUs/AboutUsPage";
import { NotFoudPage } from "./pages/NotFoudPage";
import { RegisterPage } from "./pages/Register/RegisterPage";

export const routes = [
    {path:'/', element:<AboutUsPage/>},
    {path:'/register', element:<RegisterPage/>},
    {path:'*', element:<NotFoudPage/>}
]