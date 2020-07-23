import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isLoggedIn,
    component: Component,
    ...rest // resto de propiedades: exact, path, etc
}) => {
   
   /*  const loc = rest.location.pathname;
    const search = rest.location.search; */
    
    /* console.log(rest);
    localStorage.setItem('lastPath', loc )
    localStorage.setItem('lastSearch', search ) */
   
    return (
        <Route {...rest}
            component = { (props) => (
                (isLoggedIn) 
                ? (<Component {...props}/>)
                : (<Redirect to='/auth/login' />)
            )
            }
        />
    )
}

PrivateRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}