import React from 'react'

import {connect} from 'react-redux'

//////ACTIONS
import {updateSnackbar} from '../../actions'

////MATERIAL UI
import Snackbar from '@material-ui/core'
import SnackbarContent from "@material-ui/core"
import { makeStyles } from '@material-ui/styles'



function SnackbarMessage(props){

    const handleClick = () => {//should not happen unless axios call was successful on C,U, or D - happens on .then. also, error
        updateSnackbar(true)
    }

    const handleClose = (e, action)=> {//will onClose work for this or do I have to do a onClick
        if(action === 'clickaway'){//is cklickaway built in?
            return
        }

        updateSnackbar(false)
    }

    const snackColor = 
    props.editButtonArea ? "CEE08F" :                               
        (props.deleteButtonArea ? "#D03840" : 
                (props.createButtonArea ? "#FDC543": "#C2C2C2"))//these props need to happen on mouseenter over these buttons and change back on mouseleave

    const useStyles = makeStyles(theme => {
        root: {
            backgroundColor: snackColor
        }

    })

    const classes = useStyles()

    return(


        <Snackbar
            anchorOrgin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}    
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            className={classes.root}
        >
            <SnackbarContent
                    aria-describedby="pop-up message"
                    message={
                        <span>
                            {props.message}
                        </span>
                    }
                    onClose={handleClose}
            />
        </Snackbar>
    )
}

const mapDispatchToProps ={
    updateSnackbar
}

export default connect(state => state, mapDispatchToProps)(SnackbarMessage)