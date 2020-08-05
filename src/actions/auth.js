import { types } from "../types/types";
import Swal from 'sweetalert2';
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { startLoading, finishLoading } from "./ui";

// funcion que devuelve un callback. // dispatch lo ofrece thunk // ESTA ES LA FUNCIÓN ASINCRONA
export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({user}) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            }).catch(
                e => {
                    console.log(e);
                    dispatch(finishLoading());
                    Swal.fire('Error', e.message, 'error')
                }
            )
    }
} 

export const startRegisterWithEmailPassName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async ({user}) => {
                await user.updateProfile({displayName: name});
                console.log(user)
                dispatch(login(user.uid, user.displayName))
            }).catch(
                e => {
                    console.log(e)
                }
            )
    }
}


export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(resp => {
                console.log(resp)
                dispatch(
                    login(resp.user.uid, resp.user.displayName)
                )
            }); // user mediante desestructuracion (tambien está credential, operationType, etc..)
    }
} // una vez que se consigue la respuesta, se hace el dispatch de la acción definida


export const startLogout = () => { // es asincrono porque el logout se hace en firebase
    return async ( dispatch ) => {
        await firebase.auth().signOut();

        dispatch( logout() ) // llamo al logout de debaje, que a su vez apunta al authreducer, devolviendo un objeto vacío    
    }
}



// accion que se llama cuando tenga el uid y el displayName // ESTA ES LA ACCION
export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid, 
        displayName
    }
})

export const logout = () => ({
    type: types.logout,

})