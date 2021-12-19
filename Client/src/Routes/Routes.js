import { Route, Switch } from "react-router"
import { routes } from "./routesConfig"
import Login from "../Login/Login"
import Registration from "../Registration/Registration"
import { routeUrls } from "./routeUrls"
import AccesControl from "../components/AccesControl/AccesControl"
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute"


const Routes = () =>{
    return (
        <Switch>
            <Route exact={true} path={routeUrls.Login}> <Login /> </Route>
            <Route path={routeUrls.Registration}> <Registration /> </Route>
            {/* <AccesControl> */}
                {routes.map((route,id)=>
                    // <Route 
                    //     key={id} 
                    //     path={route.path} 
                    //     exact={route.exact}
                    // >
                    //     {route.component}
                    // </Route>
                <ProtectedRoute 
                    Component={route.component} 
                    key={id}
                    path={route.path}    
                >
                </ProtectedRoute>
                )}
            {/* </AccesControl> */}
        </Switch>
    )
}

export default Routes