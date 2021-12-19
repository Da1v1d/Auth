import Main from "../main"
import Home from "../components/Home/Home"
import CustomPaper from '../components/reuzable-components/Card/BaseCard'
import { routeUrls } from "./routeUrls"
import PostPage from "../components/PostPage/PostPage"

export const routes=[
    {
        exact:true,
        component:<Main />,
        path:routeUrls.Main
    },
    {
        exact:true,
        component:<Home />,
        path:routeUrls.Home()
    },
    {
        exact:true,
        component:<Home />,
        path:routeUrls.Home('posts')
    },
]