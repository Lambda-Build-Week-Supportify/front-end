import React from 'react'


function UserSchoolList(props){

console.log("this is user school list", props.userOwned)

    return(
        <div> 
       {props.schoolList.map(school => {
        console.log("this is school name on list", school.school_name)
        return <p>{school.school_name}</p>
        }
        ) 
}


        </div>
    
)

}
export default UserSchoolList