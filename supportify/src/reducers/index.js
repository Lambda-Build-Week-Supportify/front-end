

import {
    LOAD_MEMBER_SUCCESS,
    LOAD_MEMBER_FAILURE,
    LOADING_MEMBER,
    MAKE_MEMBER,
    NAME_MEMBER,
    CITY_MEMBER,
    EMAIL_MEMBER,
    LAST_NAME_MEMBER,
    ROLE_MEMBER,
    USERNAME_MEMBER,
    USERBOARD_MEMBER,
    NOT_ADMIN,
    ADMIN,
    PASSBOARD_MEMBER,
    PASSWORD_MEMBER,
    SNACKBAR_OPEN,
    EDIT_AREA,
    CREATE_AREA,
    DELETE_AREA,
    BOARD_ROLE_ACCESS,
    PRIMARY_ROLE_ACCESS,
    SEC_ROLE_ACCESS,
    SIGNUP_USERNAME,
    SIGNUP_PASSWORD,
    STATE_MEMBER,
    SCHOOL_NAME,
    NUM_ISSUES_SCHOOLS,
    NUM_STUDENTS_SCHOOLS,
    EST_COSTS_SCHOOLS,
    SCHOOL_STREET,
    SCHOOL_CITY,
    SCHOOL_STATE,
    POST_CODE,
    PHONE_NUM_SCHOOLS,
    GRADE_LEVEL_SCHOOLS,
    DESCRIPTION_SCHOOLS,
    SUCCESS
                } from "../actions"



const initialState = {
    members: [
       //{"name":"Brainey","city":200,"email":"5cm","id":0} BIG ISSUE #1
    ],
    isFetching: false,
    error: null,
    ///////////USER
    name: "hi",
    lastname: "bye",
    city: "",
    email: "",
    role: "",
    ////////////////ADMIN
    userInput: {
        username: "Example username",
        password: "Example password"
    },
    ////////////////////////
    admin: true,
    ///////////////BOARD
    userInputBoard: {
        username: "Example username",
        password: "Example password"
    },
    ////////////////SNACKBAR
    open: false,
    editButtonArea: false,
    deleteButtonArea: false,
    createButtonArea: false,
    //////////////////USER(cont.)
    board: false,
    primary_admin: false,
    sec_admin: false,
    signupUsername: "",
    signupPassword: "",
    province: "",
    /////////////////SCHOOLS
    schoolName: " ",
    numIssues: " ",
    numStudents: " ",
    estCosts: " ",
    schoolStreet: " ",
    schoolCity: " ",
    schoolState: " ",
    postCode: " ",
    phoneNumber: " ",
    gradeLevel: " ",
    description: " ",
    success: false,
    editMessageSuccess: "You successfully edited!",
    deleteMessageSuccess: "You successfully deleted!",
    createMessageSuccess: "You successfully created an entry!",
    failMessage: "Attempt Failed!",
    messageSuccess: "Data Successfully Loaded"
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
        case SUCCESS:
            return {
                ...state,
                success: true
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
        case USERNAME_MEMBER:
                return{
                    ...state,
                    userInput:{
                        username: action.payload,
                        password: state.userInput.password
                    }
                }
        case USERBOARD_MEMBER:
                return{
                    ...state,
                    userInputBoard:{
                        username: action.payload,
                        password: state.userInputBoard.password
                    }
                }
        case NOT_ADMIN:
                return{
                    ...state,
                    admin: false
                }
        case ADMIN:
                return{
                    ...state,
                    admin: true
                }
        case PASSWORD_MEMBER:
                return{
                    ...state,
                    userInput:{
                        username: state.userInput.username,
                        password: action.payload
                    }
                }
        case PASSBOARD_MEMBER:
                return{
                    ...state,
                    userInputBoard:{
                        username: state.userInputBoard.username,
                        password: action.payload
                    }
                }
        case SNACKBAR_OPEN:
                return{
                    ...state,
                    open: action.payload
                }
        case EDIT_AREA:
                return{
                    ...state,
                    editButtonArea: action.payload,
                    createButtonArea: false,
                    deleteButtonArea: false
                }
        case CREATE_AREA:
                return{
                    ...state,
                    createButtonArea: action.payload,
                    editButtonArea: false,
                    deleteButtonArea:false
                }
        case DELETE_AREA:
                return{
                    ...state,
                    deleteButtonArea: action.payload,
                    editButtonArea: false,
                    createButtonArea: false
                }
        case BOARD_ROLE_ACCESS:
                return{
                    ...state,
                    board: true,
                    primary_admin: false,
                    sec_admin: false
                }
        case PRIMARY_ROLE_ACCESS:
                return{
                    ...state,
                    board: false,
                    primary_admin: true,
                    sec_admin: false
                }
        case SEC_ROLE_ACCESS:
                return{
                    ...state,
                    board: false,
                    primary_admin: false,
                    sec_admin: true
                }
        case SIGNUP_USERNAME:
                  
                        return {
                            ...state,
                            signupUsername: action.payload
                        }
         case SIGNUP_PASSWORD:
            
            return {
                ...state,
                signupPassword: action.payload
            }
         case STATE_MEMBER:
        
            return {
                ...state,
                province: action.payload
            }
        case SCHOOL_NAME:
            return{
                ...state,
                schoolName: action.payload
            }
        case NUM_ISSUES_SCHOOLS:
                return{
                    ...state,
                    numIssues: action.payload
                }
        case NUM_STUDENTS_SCHOOLS:
                return{
                    ...state,
                    numStudents: action.payload
                }
        case EST_COSTS_SCHOOLS:
                return{
                    ...state,
                    estCosts: action.payload
                }
        case SCHOOL_STREET:
                return{
                    ...state,
                    schoolStreet: action.payload
                }
        case SCHOOL_CITY:
                return{
                    ...state,
                    schoolCity: action.payload
                }
        case SCHOOL_STATE:
                return{
                    ...state,
                    schoolState: action.payload
                }
        case POST_CODE:
                return{
                    ...state,
                    postCode: action.payload
                }
        case PHONE_NUM_SCHOOLS:
                return{
                    ...state,
                    phoneNumber: action.payload
                }
        case GRADE_LEVEL_SCHOOLS:
                return{
                    ...state,
                    gradeLevel: action.payload
                }
        case DESCRIPTION_SCHOOLS:
                return{
                    ...state,
                    description: action.payload
                }
        default:
            return state
    }


}