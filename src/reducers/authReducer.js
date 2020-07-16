import { types } from "../types/types";
/* {
    uid: '123fjdfj2133'
    name: 'Seb"
} */

//inicializamos state como objeto vacío, cuando no estoy autenticado
export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logout:
            return {}
        
    
        default:
            return state; // por defecto, devuelve un objeto vacío
    }

}