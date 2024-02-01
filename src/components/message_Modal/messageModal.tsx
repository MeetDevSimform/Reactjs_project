import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import React from 'react'
import Button from '../button'


type MessageModal={
message:string,
open:boolean,
handleClose:()=>void;
onConfirm:()=>void;
}

const MessageBox = ({message,open=false,handleClose,onConfirm}:MessageModal) => {
  return (
    <>
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={onConfirm} >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
       
    </>
  )
}

export default MessageBox