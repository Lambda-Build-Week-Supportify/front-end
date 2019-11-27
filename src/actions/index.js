import axios from "axios"
import axiosWithAuth from '../axios/axiosWithAuth'
import { BottomNavigationAction } from "@material-ui/core"

export const TRIGGER_ID = "TRIGGER_ID"

export const LOAD_MEMBER_SUCCESS = "LOAD_MEMBER_SUCCESS"

export const LOAD_MEMBER_FAILURE = "LOAD_MEMBER_FAILURE"

export const LOADING_MEMBER = "LOADING_MEMBER"

export const SUCCESS = "SUCCESS"

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

//////////////////FOR USER's SCHOOLS
export const SET_USER_ID = "SET_USER_ID"
export const SET_USER_SCHOOLS = "SET_USER_SCHOOLS"

///////////////////////SCHOOLS

export const LOAD_SCHOOL_SUCCESS = "LOAD_SCHOOL_SUCCESS"
export const LOAD_SCHOOL_FAILURE = "LOAD_SCHOOL_FAILURE"
export const LOADING_SCHOOL = "LOADING_SCHOOL"

export const SCHOOL_NAME = "SCHOOL_NAME"
export const NUM_ISSUES_SCHOOLS = "NUM_ISSUES_SCHOOLS"
export const NUM_STUDENTS_SCHOOLS = "NUM_STUDENTS_SCHOOLS"
export const EST_COSTS_SCHOOLS = "EST_COSTS_SCHOOLS"
export const SCHOOL_STREET = "SCHOOL_STREET"
export const SCHOOL_CITY = "SCHOOL_CITY"
export const SCHOOL_STATE = "SCHOOL_STATE"
export const POST_CODE = "POST_CODE"
export const PHONE_NUM_SCHOOLS = "PHONE_NUM_SCHOOLS"
export const GRADE_LEVEL_SCHOOLS = "GRADE_LEVEL_SCHOOLS"
export const DESCRIPTION_SCHOOLS = "DESCRIPTION_SCHOOLS"

////////////////////////ISSUES

export const LOAD_ISSUE_SUCCESS = "LOAD_ISSUE_SUCCESS"
export const LOAD_ISSUE_FAILURE = "LOAD_ISSUE_FAILURE"
export const LOADING_ISSUE = "LOADING_ISSUE"

export const ISSUE_PRIORITY = "ISSUE_PRIORITY"
export const ISSUE_TITLE = "ISSUE_TITLE"
export const DESCRIPTION_ISSUE = "DESCRIPTION_ISSUE"
export const EQUIPMENT_ISSUE = "EQUIPMENT_ISSUE"
export const GENERAL_ISSUE = "GENERAL_ISSUE"
export const EST_COSTS_ISSUE = "EST_COSTS_ISSUE"
export const ISSUE_COMPLETION_STATUS = "ISSUE_COMPLETION_STATUS"
export const ISSUE_ATTENTION_STATUS = "ISSUE_ATTENTION_STATUS"
export const ISSUE_SCHEDULE_STATUS = "ISSUE_SCHEDULE_STATUS"

export const ISSUE_COMPLETION = "ISSUE_COMPLETION"
export const ISSUE_ATTENTION = "ISSUE_ATTENTION"
export const ISSUE_SCHEDULE = "ISSUE_SCHEDULE"

//////////////////////////

export const CRAZY_DAISY = "CRAZY_DAISY"
export const CRAZY_DAZEY = "CRAZY_DAZEY"

//////////////////////////////////////////

export const specifyId = id => ({type: TRIGGER_ID, payload: id})

export const memberSuccess = (data) => ({type: LOAD_MEMBER_SUCCESS, payload: data})


export const memberFailure = (error) => ({type: LOAD_MEMBER_FAILURE, payload: error})


export const memberLoading = () => ({type: LOADING_MEMBER})

export const successGeneral = () => ({type: SUCCESS})

export const setUserId = (data) => ({type: SET_USER_ID, payload: data})


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

export const setMemberSchools = data => ({type: SET_USER_SCHOOLS, payload: data})


////////////////SCHOOLS

export const schoolSuccess = (data) => ({type: LOAD_SCHOOL_SUCCESS, payload: data})
export const schoolFailure = (error) => ({type: LOAD_SCHOOL_FAILURE, payload: error})
export const schoolLoading = () => ({type: LOADING_SCHOOL})

//

export const schoolNaming = data => ({type: SCHOOL_NAME, payload: data})
export const schoolIssuesNum = data => ({type: NUM_ISSUES_SCHOOLS, payload: data})
export const schoolStudentsNum = data => ({type: NUM_STUDENTS_SCHOOLS, payload: data})
export const schoolEstCosting = data => ({type: EST_COSTS_SCHOOLS, payload: data})
export const schoolStreeting = data => ({type: SCHOOL_STREET, payload: data})
export const schoolCitying = data => ({type: SCHOOL_CITY, payload: data})
export const schoolStateing = data => ({type: SCHOOL_STATE, payload: data})
export const schoolPostCoding = data => ({type: POST_CODE, payload: data})
export const schoolPhoning = data => ({type: PHONE_NUM_SCHOOLS, payload: data})
export const gradeLeveling = data => ({type: GRADE_LEVEL_SCHOOLS, payload: data})
export const schoolDescribing = data => ({type: DESCRIPTION_SCHOOLS, payload: data})

///////////////////////////ISSUES
export const issueSuccess = (data) => ({type: LOAD_ISSUE_SUCCESS, payload: data})
export const issueFailure = (error) => ({type: LOAD_ISSUE_FAILURE, payload: error})
export const issueLoading = () => ({type: LOADING_ISSUE})

export const issuePrioritizing = data => ({type: ISSUE_PRIORITY, payload: data})
export const issueTitling = data => ({type: ISSUE_TITLE, payload: data})
export const issueDescribing = data => ({type: DESCRIPTION_ISSUE, payload: data})
export const issueEquipmenter = data => ({type: EQUIPMENT_ISSUE, payload: data})
export const issueGeneralizing = data => ({type: GENERAL_ISSUE, payload: data})
export const issueCostEstimater = data => ({type: EST_COSTS_ISSUE, payload: data})

export const issueCompleteStatus = data => ({type: ISSUE_COMPLETION_STATUS, payload: data})

export const issueScheduleStatus = data => ({type: ISSUE_SCHEDULE_STATUS, payload: data})

export const issueAttentionStatus = data => ({type: ISSUE_ATTENTION_STATUS, payload: data})


///CREATE ISSUE
export const issueCompleter = () => ({type: ISSUE_COMPLETION})
export const issueScheduler = () => ({type: ISSUE_SCHEDULE})
export const issueAttention = () => ({type: ISSUE_ATTENTION})


//////////////////////////////////////////////USER ENDPOINT

const authAxios = axiosWithAuth()

export const fetchMembers = () => dispatch => {
    dispatch(memberLoading())
    authAxios
        .get('/users')
        .then(res => {
            console.log("this is members response.data", res)
            dispatch(memberSuccess(res.data))
            //successGeneral()
        })
        .catch(error => {
           console.log("this is error", error.message)
           dispatch(memberFailure(error.message))
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
        {   
            username: signupUsername,
            password: signupPassword,
            first_name: nameMember,
            last_name: lastnameMember,
            email: emailMember,
            city: cityMember,
            state: stateMember,
            board: boardMember, 
            primary_admin: primMember,
            sec_admin: secMember,


        }
        )
        .then(res => {
            console.log("this is postMember response.data", res)
            localStorage.setItem('token', res.data.token)
           // dispatch(memberMaking(res.data))
           //successGeneral()
        })
        .catch(error => {
           console.log("this is error", error.message)
           //dispatch(memberFailure(error.message))
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
    stateMember,
    id
    ) => dispatch => {
    dispatch(memberLoading())

    authAxios
        .put(`/users/${id}`, ///DO I NEED TO ENTER THE SPECIFIC ID?
        {
            username: signupUsername,
            password: signupPassword,
            first_name: nameMember,
            last_name: lastnameMember,
            email: emailMember,
            city: cityMember,
            state: stateMember,
            board: boardMember, 
            primary_admin: primMember,
            sec_admin: secMember


        }
        )
        .then(res => {
            console.log("this is putMember response.data", res)
           // dispatch(memberMaking(res.data))
           //successGeneral()
        })
        .catch(error => {
           console.log("this is error", error.message)
           //dispatch(memberFailure(error.message))
        })

}

export const deleteMember = (id) => dispatch =>{
    authAxios
        .delete(`users/${id}`)
        .then(res => {
            console.log("this is delete user res", res)
            //fetchMembers()
        }
        )
        .catch(err => console.log("this is delete user error", err))
        
}
///////////////////////////////////SCHOOL INFO

export const fetchSchools = () => dispatch => {
    //dispatch(memberLoading()) //change to schools
    authAxios
        .get('/schools')
        .then(res => {
            console.log("this is response.data", res)
            dispatch(schoolSuccess(res.data))
           // successGeneral()
        })
        .catch(error => {
           console.log("this is error", error.message)
           dispatch(schoolFailure(error.message))
        })

}

export const postSchool = (
schoolName,
numIssues,
numStudents,
estCosts,
schoolStreet,
schoolCity,
schoolState,
postCode,
phoneNumber,
gradeLevel,
description
) => dispatch => {
    dispatch(memberLoading())

    authAxios
        .post('/schools', 
        {          
        school_name: schoolName,
        num_issues: numIssues,
        num_students: numStudents,
        est_costs: estCosts,
        school_street: schoolStreet,
        school_city: schoolCity,
        school_state: schoolState,
        post_code: postCode,
        phone: phoneNumber,
        grade_level: gradeLevel,
        about: description
        }
        )
        .then(res => {
            console.log("this is postSchool response.data", res)
           // dispatch(memberMaking(res.data))
           //successGeneral()
        })
        .catch(error => {
           console.log("this is error", error.message)
           //dispatch(memberFailure(error.message))
        })

}

export const putSchool= (
    schoolName,
numIssues,
numStudents,
estCosts,
schoolStreet,
schoolCity,
schoolState,
postCode,
phoneNumber,
gradeLevel,
description,
id
) => dispatch => {
    dispatch(memberLoading())

    authAxios
        .put(`/schools/${id}`, ///DO I NEED TO ENTER THE SPECIFIC ID?
        {       
            school_id: Number(id),    
            school_name: schoolName,
            num_issues: numIssues, //requires numbers (should have form validation on forms)
            num_students: numStudents,
            est_costs: estCosts,
            school_street: schoolStreet,
            school_city: schoolCity,
            school_state: schoolState,
            post_code: postCode,
            phone: phoneNumber,
            grade_level: gradeLevel,
            about: description
        }
        )
        .then(res => {
            console.log("this is putSchool response", res)
           // dispatch(memberMaking(res.data))
           //successGeneral()
        })
        .catch(error => {
           console.log("this is school put error", error.message)
          // dispatch(memberFailure(error.message))
        })

}

export const deleteSchool = (id) => dispatch =>{
    authAxios
        .delete(`/schools/${id}`)
        .then(res => console.log("this is delete school res", res)
       //.catch(err => console.log("this is delete school error", err))
        )
}
///////////////////////////////////USER SCHOOLS

export const fetchMemberSchools =(id) => dispatch => {

    authAxios
        .get(`/users-schools/user/${id}`)
        .then(res => {
            console.log('This is user-schools fetch', res.data)
            //need to set member schools here
            dispatch(setMemberSchools(res.data))
        })
        .catch(err => console.log("this is user-schools err", err))
}

export const postMemberSchool = (
    userID,
    schoolID
    ) => dispatch => {
        dispatch(memberLoading())
    
        authAxios
            .post('/schools', 
            {          
           user_id: userID,
           school_id: schoolID
            }
            )
            .then(res => {
                console.log("this is postUserSchool response.data", res)
               // dispatch(memberMaking(res.data))
               //successGeneral()
            })
            .catch(error => {
               console.log("this is error", error.message)
               //dispatch(memberFailure(error.message))
            })
    
    }


///////////////////////////////////ISSUE ENDPOINT
export const fetchIssues = () => dispatch => {
    dispatch(issueLoading()) //change to schools
    authAxios
        .get('/issues')
        .then(res => {
            console.log("this is all issues response", res)
            dispatch(issueSuccess(res.data))
            //successGeneral()
        })
        .catch(error => {
           console.log("this is issues error", error.message)
           dispatch(issueFailure(error.message))
        })

}

export const postIssue = (
    priority,
    title,
    description_issue, //should just be description for endpoint obj
    equipment,
    general_issues,
    estimated_cost_issues, //should just be estimated_cost for endpoint obj
    completed,
    needs_attention,
    scheduled,
    id
) => dispatch => {
    dispatch(issueLoading())

    authAxios
        .post('/issues', 
        {          
            priority: priority,
            title: title,
            description: description_issue,
            equipment: equipment,
            general_issues: general_issues,
            estimated_cost: estimated_cost_issues, 
            completed: completed,
            needs_attention: needs_attention,
            scheduled: scheduled,
            user_id: id
        }
        )
        .then(res => {
            console.log("this is postIssue response.data", res)
           // dispatch(issueMaking(res.data))
           //successGeneral()
        })
        .catch(error => {
           console.log("this is postIssue error", error.message)
           //dispatch(issueFailure(error.message))
        })

}

export const putIssue= (
    priority,
    title,
    description_issue, //should just be description for endpoint obj
    equipment,
    general_issues,
    estimated_cost_issues, //should just be estimated_cost for endpoint obj
    completed,
    id
) => dispatch => {
    dispatch(memberLoading())

    authAxios
        .put(`/issues/${id}`, ///DO I NEED TO ENTER THE SPECIFIC ID???????????
        {           
            priority: priority,
            title: title,
            description: description_issue,
            equipment: equipment,
            general_issues: general_issues,
            estimated_cost: estimated_cost_issues, 
            completed: completed
        }
        )
        .then(res => {
            console.log("this is putIssue response", res)
           // dispatch(issueMaking(res.data))
          // successGeneral()
        })
        .catch(error => {
           console.log("this is putIssue error", error.message)
           //dispatch(issueFailure(error.message))
        })

}

//BOARD SIDE EDITING

//on the Board side we need an edit button that updates the endpoint only for the completed, needs attention, scheduled properties (need these 2 other properties on the endpoint)

export const putIssueBoard= (

    completed,
    scheduled, //needs creation
    needs_attention,//needs creation
    id
) => dispatch => {
    dispatch(memberLoading())

    authAxios
        .post(`/issues/${id}`, ///DO I NEED TO ENTER THE SPECIFIC ID???????????
        {           
            completed: completed,
            scheduled: scheduled,
            needs_attention: needs_attention
        }
        )
        .then(res => {
            console.log("this is putIssueBoard response", res)
           // dispatch(memberMaking(res.data))
          // successGeneral()
        })
        .catch(error => {
           console.log("this is putIssueBoard error", error.message)
           //dispatch(memberFailure(error.message))
        })

}

export const deleteIssue = (id) => dispatch => {
    authAxios
        .delete(`issues/${id}`)
        .then(res => console.log("this is delete user res", res)
        .catch(err => console.log("this is delete user error", err))
        )
}

/////////////////////////////////////


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


/////////////////////SNACKBAR//////////////////////////////
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
///////////////////////////////////////////////////////////



export const updateSignupUser = data => dispatch => {
    dispatch(signupUser(data))
}
export const updateSignupPass = data => dispatch => {
    dispatch(signupPass(data))
}

export const updateProvince = data => dispatch => {
    dispatch(memberState(data))
}



///////////////////SCHOOLS

export const updateSchoolName = data => dispatch => {
    dispatch(schoolNaming(data))
}

export const updateSchoolIssuesNum = data => dispatch => {
    dispatch(schoolIssuesNum(data))
}

export const updateSchoolStudentsNum = data => dispatch => {
    dispatch(schoolStudentsNum(data))
}

export const updateSchoolEstCosts = data => dispatch => {
    dispatch(schoolEstCosting(data))

}

export const updateSchoolStreet = data => dispatch => {
    dispatch(schoolStreeting(data))
}

export const updateSchoolCity = data => dispatch => {
    dispatch(schoolCitying(data))
}

export const updateSchoolState = data => dispatch => {
    dispatch(schoolStateing(data))
}

export const updateSchoolPostalCode = data => dispatch => {
    dispatch(schoolPostCoding(data))
}

export const updateSchoolPhoneNum = data => dispatch => {
    dispatch(schoolPhoning(data))
}
export const updateSchoolGradeLevel = data => dispatch => {
    dispatch(gradeLeveling(data))
}

export const updateSchoolDesc = data => dispatch => {
    dispatch(schoolDescribing(data))
}

/////////////////////ISSUES

export const singleIssueStateMaker = ( title, priority, description, equipment, general_issues, estimated_cost, completed, needs_attention, scheduled)=> dispatch =>{
    dispatch(issuePrioritizing(priority))
    dispatch(issueTitling(title))
    dispatch(issueDescribing(description))
    dispatch(issueEquipmenter(equipment))
    dispatch(issueGeneralizing(general_issues))
    dispatch(issueCostEstimater(estimated_cost))
    dispatch(issueCompleteStatus(completed))
    dispatch(issueAttentionStatus(needs_attention))
    dispatch(issueScheduleStatus(scheduled))
    
    console.log("setting issue props on redux store to", title, priority, description, equipment, general_issues, estimated_cost, completed, needs_attention, scheduled)
}

export const updateIssuePriority = data => dispatch => {
    dispatch(issuePrioritizing(data))
}

export const updateIssueTitle= data => dispatch => {
    dispatch(issueTitling(data))
}
export const updateIssueDesc = data => dispatch => {
    dispatch(issueDescribing(data))
}
export const updateIssueEquip = data => dispatch => {
    dispatch(issueEquipmenter(data))
}

export const updateIssueGeneral = data => dispatch => {
    dispatch(issueGeneralizing(data))
}

export const updateIssueCosts = data => dispatch => {
    dispatch(issueCostEstimater(data))
}
export const updateIssueCompletion = () => dispatch => {
    dispatch(issueCompleter())
}


export const updateIssueAttention = () => dispatch => {
    dispatch(issueAttention())
}

export const updateIssueSchedule = () => dispatch => {
    dispatch(issueScheduler())
}



export const singleSchoolStateMaker = (school_name,
    num_issues,
    num_students,
    est_costs,
   school_street,
    school_city,
    school_state,
    post_code,
    phone,
    grade_level,
    about,
    id) => ({type: CRAZY_DAISY, payload: {
   school_name: school_name,
   num_issues: num_issues,
   num_students: num_students,
   est_costs: est_costs,
   school_street: school_street,
   school_city: school_city,
   school_state: school_state,
   post_code: post_code,
   phone: phone,
   grade_level: grade_level,
   about: about,
   id: id
}})

export const singleUserStateMaker = (
    first_name,
    last_name,
    city,
    email,
    board,
    primary_admin,
    sec_admin,
    state,
    id) => ({type: CRAZY_DAZEY, payload: {
        first_name: first_name,
        last_name: last_name,
        city: city,
        email: email,
        board: board,
        primary_admin: primary_admin,
        sec_admin: sec_admin,
        state: state,
        id: id
}})