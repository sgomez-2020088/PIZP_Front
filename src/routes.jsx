import path from "path";
import { AboutUsPage } from "./pages/aboutUs/AboutUsPage";
import { NotFoudPage } from "./pages/NotFoudPage";
import { RegisterPage } from "./pages/Register/RegisterPage";
import { LoginPage } from "./pages/Login/LoginPage";
import { ReportsPage } from "./pages/Reports/ReportsPage";
import { ReportPage } from "./pages/Report/ReportPage";

export const routes = [
    {path:'/', element:<AboutUsPage/>},
    {path:'/register', element:<RegisterPage/>},
    {path:'/login', element:<LoginPage/>},
    {path:'/reports', element:<ReportsPage/>},
    {path:'/report', element:<ReportPage/>},
    {path:'*', element:<NotFoudPage/>}
]