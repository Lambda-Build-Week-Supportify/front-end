import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#25408F",
    color: "white"
  },
  input: {
    display: "none"
  }
}));

function CreateButton() {
  const classes = useStyles();
  return (
    <Button variant="contained" color="secondary" className={classes.button}>
      DELETE
    </Button>
  );
}

export default CreateButton;
