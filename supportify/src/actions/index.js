import axios from "axios"

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

//////////////////////////////////////////

export const memberSuccess = (data) => 
({type: LOAD_MEMBER_SUCCESS, payload: data})


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
//////////////////////////////////////////////


export const fetchMembers = () => dispatch => {
    dispatch(memberLoading())
    axios
        .get('http://localhost:3333/members')
        .then(res => {
            console.log("this is response.data", res.data)
            dispatch(memberSuccess(res.data))
        })
        .catch(error => {
           //console.log("this is error", error.message)
           dispatch(memberFailure(error.message))
        })

}

export const postMember = (nameMember, cityMember, emailMember, lastnameMember, roleMember) => dispatch => {
    dispatch(memberLoading())
    axios
        .post('http://localhost:3333/members', 
        { name: nameMember,
            lastname: lastnameMember,
            city: cityMember,
            email: emailMember,
            role: roleMember
        }
        )
        .then(res => {
            //console.log("this is response.data", res.data)
            dispatch(memberMaking(res.data))
        })
        .catch(error => {
           console.log("this is error", error.message)
           dispatch(memberFailure(error.message))
        })

}

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