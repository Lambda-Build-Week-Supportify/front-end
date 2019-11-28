import React from 'react'
import { connect } from 'react-redux'

import {
    fetchComments,
    postComment, 
    updateComment

} from '../../actions'


function AddCommentForm(props){

    const handleNewComment = e => {
        props.updateComment(e.target.value)
        //props.fetchComments() //NOT HERE
    }


    return (


        <div>
           <form  >
                <label name='comment' >Comment Box:</label>
                <input type="text" name='comment' value={props.comment} onChange={handleNewComment}/>

                <button type="button" onClick={()=> props.postComment(
                    props.comment,
                    props.userID, 
                    props.id
                    )}>Comment</button>
            </form>
        </div>
    )
}

const mapDispatchToProps ={
    fetchComments,
    postComment,
    updateComment
}

export default connect(state => state, mapDispatchToProps)(AddCommentForm)