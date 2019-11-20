import React from 'react'

import {connect} from 'react-redux'

import SnackbarMessage from './SnackbarMessage'

import {updateSnackbar} from "../../actions"

function SnackbarOpen(props){//should not happen unless axios call was successful on C,U, or D - happens on .then. also, error

  let modalStatus = () =>{ 
      
      if(props.success == true && props.editButtonArea == true){
        updateSnackbar(true)
        return <SnackbarMessage message={props.editMessageSuccess}/>
    } else if (props.success == true && props.deleteButtonArea == true){
        updateSnackbar(true)
        return <SnackbarMessage message={props.deleteMessageSuccess}/>
    }else if (props.success == true && props.deleteButtonArea == true){
        updateSnackbar(true)
        return <SnackbarMessage message={props.createMessageSuccess}/>
    }else if(props.success == true){
        return <SnackbarMessage message={props.messageSuccess}/>
    }else {
        updateSnackbar(true)
        return <SnackbarMessage message={props.failMessage}/>
    }
}

    return (
        <div>
        {modalStatus}
        </div>
        )

    
}

const mapDispatchToProps ={
    updateSnackbar
}

export default connect(state => state, mapDispatchToProps)(SnackbarOpen)