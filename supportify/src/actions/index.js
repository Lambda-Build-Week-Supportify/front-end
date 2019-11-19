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