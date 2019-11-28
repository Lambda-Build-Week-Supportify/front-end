import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import {Link} from 'react-router-dom'

import {
    fetchComments,
    postComment, 
    updateComment,
    updateReload

} from '../../actions'


function AddCommentForm(props){

    const handleNewComment = e => {
        props.updateComment(e.target.value)
        //props.fetchComments() //NOT HERE
        
    }

    //useEffect(() => {props.updateReload()}, [])

    return (


        <div>
           <form >
                <label name='comment' >Comment Box:</label>
                <input type="text" name='comment' value={props.comment} onChange={handleNewComment}/>

               
                <button type="button" onClick={
                    ()=> {props.postComment( //this also triggers a should reload slice of state that triggers the issue comment page to refresh so comments can be seen in real time (window.location.reload() was creating crazy loops so I had to go about this in a round about way)
                    props.comment,
                    props.userID, 
                    props.id
                    )} }>Comment</button>
                
            </form>
        </div>
    )
}

const mapDispatchToProps ={
    fetchComments,
    postComment,
    updateComment,
    updateReload
}

export default connect(state => state, mapDispatchToProps)(AddCommentForm)