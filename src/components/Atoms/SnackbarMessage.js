import React from 'react'

import {connect} from 'react-redux'

//////ACTIONS
import {updateSnackbar} from '../../actions'

////MATERIAL UI
import {Snackbar} from '@material-ui/core'
import {SnackbarContent} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles'

// const useStyles = makeStyles(theme => {
//     root: {
//         backgroundColor:   state.editButtonArea ? "CEE08F" :                                        (state.deleteButtonArea ? "#D03840" : 
//                 (state.createButtonArea ? "#FDC543": "#C2C2C2"))//these props need to happen on mouseenter over these buttons and change back on mouseleave
//     }

// })

function SnackbarMessage(props){


    const handleClose = (e, action)=> {//will onClose work for this or do I have to do a onClick
        if(action === 'clickaway'){//is cklickaway built in?
            return
        }

        updateSnackbar(false)
    }

    // let classes = useStyles()


    // props.editButtonArea ? "CEE08F" :                               
    //     (props.deleteButtonArea ? "#D03840" : 
    //             (props.createButtonArea ? "#FDC543": "#C2C2C2"))//these props need to happen on mouseenter over these buttons and change back on mouseleave



    

    return(


        <Snackbar
            anchorOrgin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}    
            open={props.open}
            autoHideDuration={3000}
            onClose={handleClose}
            backgroundColor={   props.editButtonArea ? "CEE08F" :               (props.deleteButtonArea ? "#D03840" : 
                    (props.createButtonArea ? "#FDC543": "#C2C2C2"))}
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

//BROKE LOGIN AGAIN SOMEHOW ARGHHH!