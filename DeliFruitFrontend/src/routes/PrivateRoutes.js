import React from 'react'
import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateRoutes = (props) => {
    const user = useSelector((state) => state.user)

    if (user && user.isAuthenticated === true) {
        return (
            <>
                <Route path={props.path} component={props.component} />
            </>
        )
    } else {
        return <Redirect to='/login'></Redirect>
    }
}

export default PrivateRoutes