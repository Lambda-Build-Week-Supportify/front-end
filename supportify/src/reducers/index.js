

import {
    LOAD_MEMBER_SUCCESS,
    LOAD_MEMBER_FAILURE,
    LOADING_MEMBER,
    MAKE_MEMBER,
    NAME_MEMBER,
    CITY_MEMBER,
    EMAIL_MEMBER,
    LAST_NAME_MEMBER,
    ROLE_MEMBER
                } from "../actions"



const initialState = {
    members: [
       //{"name":"Brainey","city":200,"email":"5cm","id":0} BIG ISSUE #1
    ],
    isFetching: false,
    error: null,
    name: "hi",
    lastname: "bye",
    city: "",
    email: "",
    role: ""
}



export function reducer(state = initialState, action){
    switch(action.type){
        case LOAD_MEMBER_SUCCESS:
            // let noDoubles = action.payload
            //     console.log("this is noDoubles", noDoubles)
            return {
                members: action.payload,
                // [...state.members].concat(noDoubles) BIG ISSUE #2
                isFetching: false,
                error: null
            }
         case LOAD_MEMBER_FAILURE:
            return {
                members: [...state.members],
                isFetching:false,
                error: action.payload
            }
         case LOADING_MEMBER:
            return {
                members: [...state.members],
                isFetching: true,
                error: null
            }
        case MAKE_MEMBER:
            return {
                members: [...state.members].concat(action.payload),
                isFetching: false,
                error: null,

            }
        case NAME_MEMBER:
            console.log("this is state.name",state.name)
            return {
                ...state,
                name: action.payload
            }
        case LAST_NAME_MEMBER:
                console.log("this is state.lastname",state.lastname)
                return {
                    ...state,
                    lastname: action.payload
                }   
        case CITY_MEMBER:
            return{
                ...state,
                city: action.payload
            }
        case EMAIL_MEMBER:
            return{
                ...state,
                email: action.payload
            }
        case ROLE_MEMBER:
                return{
                    ...state,
                    role: action.payload
                }
        default:
            return state
    }


}