

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
    SUCCESS,
    ISSUE_PRIORITY,
    ISSUE_TITLE,
    DESCRIPTION_ISSUE,
    EQUIPMENT_ISSUE,
    GENERAL_ISSUE,
    EST_COSTS_ISSUE,
    ISSUE_COMPLETION,
    TRIGGER_ID,
    LOAD_SCHOOL_SUCCESS,
    LOAD_SCHOOL_FAILURE,
    LOADING_SCHOOL,
    CRAZY_DAISY,
    CRAZY_DAZEY,
    SET_USER_ID,
    SET_USER_SCHOOLS,
    ISSUE_ATTENTION,
    ISSUE_SCHEDULE
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
        username: "",
        password: ""
    },
    ////////////////////////
    admin: true,
    ///////////////BOARD
    userInputBoard: {
        username: "",
        password: ""
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
    offices: [],
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
    ////////////////MODAL
    success: false,
    editMessageSuccess: "You successfully edited!",
    deleteMessageSuccess: "You successfully deleted!",
    createMessageSuccess: "You successfully created an entry!",
    failMessage: "Attempt Failed!",
    messageSuccess: "Data Successfully Loaded",
    ///////////ISSUE
    priority: "",
    title: "",
    description_issue: "", //should just be description for endpoint
    equipment: "",
    general_issues: "",
    estimated_cost: "",
    completed: false,
    needs_attention: false,
    scheduled: false,
    ///////////
    id: "",
    singleSchool: {},
    singleUser: {},
    userID: "",
    userOwned: []
}



export function reducer(state = initialState, action){
    switch(action.type){
        case SET_USER_ID: //this is used to tell backend to connect items to user with this id
            return {
                ...state,
                userID: action.payload
            }
        case SET_USER_SCHOOLS:
            return{
                ...state,
                userOwned: action.payload
            }
        case TRIGGER_ID: ///this tells PUTS what to edit
            return{
                ...state,
                id: action.payload
            }
        case LOAD_MEMBER_SUCCESS:
            // let noDoubles = action.payload
            //     console.log("this is noDoubles", noDoubles)
            return {
                ...state,
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
                ...state,
                members: [...state.members],
                isFetching:false,
                error: action.payload
            }
         case LOADING_MEMBER:
            return {
                ...state,
                members: [...state.members],
                isFetching: true,
                error: null
            }
        case MAKE_MEMBER:
            return {
                ...state,
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
         case CRAZY_DAZEY:
            return{
                ...state,
                singleUser: action.payload
            }
/////////////////////SCHOOLS
        case LOAD_SCHOOL_SUCCESS:

            return {
                ...state,
                offices: action.payload,
                isFetching: false,
                error: null
            }

         case LOAD_SCHOOL_FAILURE:
            return {
                ...state,
                offices: [...state.offices],
                isFetching:false,
                error: action.payload
            }
         case LOADING_SCHOOL:
            return {
                ...state,
                offices: [...state.offices],
                isFetching: true,
                error: null
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

        case CRAZY_DAISY:
            return{
                ...state,
                singleSchool: action.payload
            }
        //////////////ISSUES


        case ISSUE_PRIORITY:
                return{
                    ...state,
                    priority: action.payload
                }
        case ISSUE_TITLE:
                return{
                    ...state,
                    title: action.payload
                }
        case DESCRIPTION_ISSUE:
                return{
                    ...state,
                    description_issue: action.payload
                }
        case EQUIPMENT_ISSUE:
                return{
                    ...state,
                    equipment: action.payload
                }
        case GENERAL_ISSUE:
                return{
                    ...state,
                    general_issues: action.payload
                }
        case EST_COSTS_ISSUE:
                return{
                    ...state,
                    estimated_cost: action.payload
                }
        case ISSUE_COMPLETION:
                return{
                    ...state,
                    completed: true,
                    scheduled: false,
                    needs_attention: false
                }
        case ISSUE_SCHEDULE:
                return{
                    ...state,
                    completed: false,
                    needs_attention: false,
                    scheduled: true
                }
        case ISSUE_ATTENTION:
                return{
                    ...state,
                    completed: false,
                    scheduled: false,
                    needs_attention: true
                }
        default:
            return state
    }


}