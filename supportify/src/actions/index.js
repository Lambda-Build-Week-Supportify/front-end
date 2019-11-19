import axios from "axios"
import axiosWithAuth from '../axios/axiosWithAuth'

export const LOAD_MEMBER_SUCCESS = "LOAD_MEMBER_SUCCESS"

export const LOAD_MEMBER_FAILURE = "LOAD_MEMBER_FAILURE"

export const LOADING_MEMBER = "LOADING_MEMBER"

export const MAKE_MEMBER = "MAKE_MEMBER"

export const NAME_MEMBER = "NAME_MEMBER"

export const CITY_MEMBER = "CITY_MEMBER"

export const EMAIL_MEMBER = "EMAIL_MEMBER"

export const LAST_NAME_MEMBER = "LAST_NAME_MEMBER"

export const ROLE_MEMBER = "ROLE_MEMBER"

export const USERNAME_MEMBER = "USERNAME_MEMBER"

export const USERBOARD_MEMBER = "USERBOARD_MEMBER"

export const NOT_ADMIN = "NOT_ADMIN"

export const ADMIN = "ADMIN"

export const PASSWORD_MEMBER = "PASSWORD_MEMBER"

export const PASSBOARD_MEMBER = "PASSBOARD_MEMBER"

export const SNACKBAR_OPEN = "SNACKBAR_OPEN"

export const EDIT_AREA = "EDIT_AREA"

export const DELETE_AREA = "DELETE_AREA"

export const CREATE_AREA = "CREATE_AREA"

export const BOARD_ROLE_ACCESS = "BOARD_ROLE_ACCESS"
export const PRIMARY_ROLE_ACCESS = "PRIMARY_ROLE_ACCESS"
export const SEC_ROLE_ACCESS = "SEC_ROLE_ACCESS"

export const SIGNUP_USERNAME = "SIGNUP_USERNAME"
export const SIGNUP_PASSWORD = "SIGNUP_PASSWORD"
export const STATE_MEMBER = "STATE_MEMBER"

//////////////////////////////////////////

export const memberSuccess = (data) => ({type: LOAD_MEMBER_SUCCESS, payload: data})


export const memberFailure = (error) => ({type: LOAD_MEMBER_FAILURE, payload: error})


export const memberLoading = () => ({type: LOADING_MEMBER})

export const memberMaking = (data) => ({type: MAKE_MEMBER, payload: data })

export const memberNaming = (data) => ({type: NAME_MEMBER, payload: data})

export const memberLastNaming = (data) => ({type: LAST_NAME_MEMBER, payload: data})

export const memberCity = (data) => ({type: CITY_MEMBER, payload: data})

export const memberEmailing = (data) => ({type: EMAIL_MEMBER, payload: data})

export const memberRole = (data) => ({type: ROLE_MEMBER, payload: data})

export const memberUserName = (data) => ({type: USERNAME_MEMBER, payload: data})

export const memberUserBoard = (data) => ({type: USERBOARD_MEMBER, payload: data})

export const memberBoard = () => ({type: NOT_ADMIN})

export const memberAdmin = () => ({type: ADMIN})

export const memberPassWord = (data) => ({type: PASSWORD_MEMBER, payload: data})

export const memberPassBoard = (data) => ({type: PASSBOARD_MEMBER, payload: data})

export const snackBarStatus = (data) => ({type: SNACKBAR_OPEN, payload: data})

export const editAreaStatus = (data) => ({type: EDIT_AREA, payload: data})

export const createAreaStatus = (data) => ({type: CREATE_AREA, payload: data})

export const deleteAreaStatus = (data) => ({type: DELETE_AREA, payload: data})

export const setBoardMemberTrue = () => ({type: BOARD_ROLE_ACCESS})
export const setPrimMemberTrue = () => ({type: PRIMARY_ROLE_ACCESS})
export const setSecMemberTrue = () => ({type: SEC_ROLE_ACCESS})

export const signupUser = data => ({type: SIGNUP_USERNAME, payload: data})
export const signupPass = data => ({type: SIGNUP_PASSWORD, payload: data})
export const memberState = data => ({type: STATE_MEMBER, payload: data})
//////////////////////////////////////////////USER ENDPOINT

const authAxios = axiosWithAuth()

export const fetchMembers = () => dispatch => {
    dispatch(memberLoading())
    authAxios
        .get('/users')
        .then(res => {
            console.log("this is response.data", res)
            //dispatch(memberSuccess(res.data))
        })
        .catch(error => {
           console.log("this is error", error.message)
           //dispatch(memberFailure(error.message))
        })

}

export const postMember = (nameMember, 
    cityMember, 
    emailMember, 
    lastnameMember, 
    boardMember, 
    primMember, 
    secMember, 
    signupUsername, 
    signupPassword, 
    stateMember) => dispatch => {
    dispatch(memberLoading())

    authAxios
        .post('/auth/register', 
        {   first_name: nameMember,
            last_name: lastnameMember,
            city: cityMember,
            email: emailMember,
            board: boardMember, 
            primary_admin: primMember,
            sec_admin: secMember,
            username: signupUsername,
            password: signupPassword,
            state: stateMember
        }
        )
        .then(res => {
            console.log("this is postMember response.data", res)
           // dispatch(memberMaking(res.data))
        })
        .catch(error => {
           console.log("this is error", error.message)
           dispatch(memberFailure(error.message))
        })

}

export const putMember = (nameMember, 
    cityMember, 
    emailMember, 
    lastnameMember, 
    boardMember, 
    primMember, 
    secMember, 
    signupUsername, 
    signupPassword, 
    stateMember) => dispatch => {
    dispatch(memberLoading())

    authAxios
        .post('/users/:id', ///DO I NEED TO ENTER THE SPECIFIC ID?
        {   first_name: nameMember,
            last_name: lastnameMember,
            city: cityMember,
            email: emailMember,
            board: boardMember, 
            primary_admin: primMember,
            sec_admin: secMember,
            username: signupUsername,
            password: signupPassword,
            state: stateMember
        }
        )
        .then(res => {
            console.log("this is postMember response.data", res)
           // dispatch(memberMaking(res.data))
        })
        .catch(error => {
           console.log("this is error", error.message)
           dispatch(memberFailure(error.message))
        })

}

///////////////////////////////////


///////////////////////////////////


export const updateName = (name) =>dispatch =>{
    dispatch(memberNaming(name))
}

export const updateLastName = (name) =>dispatch =>{
    dispatch(memberLastNaming(name))
}


export const updateCity = (city) =>dispatch =>{
    dispatch(memberCity(city))
}

export const updateEmail = (email) =>dispatch =>{
    dispatch(memberEmailing(email))
}

export const updateRole = (role) =>dispatch =>{
    dispatch(memberRole(role))
}

export const updateUserName = (username) =>dispatch =>{
    dispatch(memberUserName(username))
}

export const updateUserBoard= (username) =>dispatch =>{
    dispatch(memberUserBoard(username))
}

export const adminToFalse = () => dispatch => {
    dispatch(memberBoard())
}

export const adminToTrue = () => dispatch => {
    dispatch(memberAdmin())
}


export const updatePassWord = (password) =>dispatch =>{
    dispatch(memberPassWord(password))
}

export const updatePassBoard= (password) =>dispatch =>{
    dispatch(memberPassBoard(password))
}

export const updateSnackbar = (data) => dispatch => {
    dispatch(snackBarStatus(data))
}

export const updateEditArea = (data) => dispatch => {
    dispatch(editAreaStatus(data))//trigger on edit form
}

export const updateCreateArea = (data) => dispatch => {
    dispatch(createAreaStatus(data))//trigger on create form
}

export const updateDeleteArea = (data) => dispatch => {
    dispatch(deleteAreaStatus(data))//trigger on delete button mouseenter?
}

export const updateSignupUser = data => dispatch => {
    dispatch(signupUser(data))
}
export const updateSignupPass = data => dispatch => {
    dispatch(signupPass(data))
}

export const updateProvince = data => dispatch => {
    dispatch(memberState(data))
}