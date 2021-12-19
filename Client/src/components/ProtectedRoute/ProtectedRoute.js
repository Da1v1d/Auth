import React from 'react'
import { withRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { useUserData } from '../../customHooks/useUserData'
import { routeUrls } from '../../Routes/routeUrls'



const ProtectedRoute = ({Component, history , ...rest})=>{
    const { isLogined } = useUserData()
    const renderProtectedComponent = () => {
        if(isLogined){
            return Component
        }
        else history.push(routeUrls.Login)
    }

    return (
        <Route
            {...rest}
            render={()=>renderProtectedComponent()}
        >
            {}
        </Route>
    )
    
}

export default withRouter(ProtectedRoute)