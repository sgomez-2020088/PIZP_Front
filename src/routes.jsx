import path from "path";
import { AboutUsPage } from "./pages/aboutUs/AboutUsPage";
import { NotFoudPage } from "./pages/NotFoudPage";

export const routes = [
    {path:'/', element:<AboutUsPage/>},
    {path:'*', element:<NotFoudPage/>}
]