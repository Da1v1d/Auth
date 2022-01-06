import React from 'react'
import { withRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { useUserData } from '../../customHooks/useUserData'
import { routeUrls } from '../../Routes/routeUrls'



const ProtectedRoute = ({Component, history , ...rest})=>{
    const { data } = useUserData()
    const renderProtectedComponent = () => {
        if(data?.isLogined || localStorage.getItem('isLogined')){
            return Component
        }
        else history.push(routeUrls.Login)
    }

    return (
        <Route
            {...rest}
            render={()=>renderProtectedComponent()}
        />
    )
    
}

export default withRouter(ProtectedRoute)