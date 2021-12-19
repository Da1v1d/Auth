import Home from "../components/Home/Home"
import { routeUrls } from "./routeUrls"
import Login from "../Login/Login"
import Registration from "../Registration/Registration"

export const routes=[
    {
        component:<Home />,
        path:routeUrls.Home()
    },
    // {
    //     component:<Login />,
    //     path:routeUrls.Login
    // },
    // {
    //     component:<Registration />,
    //     path:routeUrls.Registration
    // },
]