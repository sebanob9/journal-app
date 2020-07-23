import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true); // si está en checking, no se muestra nada de la app, hasta comprobar que el usuario esta autenticado 
    const [isLoggedIn, setIsLoggedIn] = useState(false)// al entrar siempre en falso

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            if( user?.uid) { // cuando se detecta el cambio en auth, hay que hacer el dispatch del login
                dispatch(login(user.uid, user.displayName ));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
           
        });
    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={ AuthRouter }
                        isLoggedIn= {isLoggedIn}
                    />
                    
                    <PrivateRoute
                        exact
                        path="/"
                        component={ JournalScreen }
                        isLoggedIn= {isLoggedIn}
                    />
                </Switch>
            </div>
        </Router>
    )
}
