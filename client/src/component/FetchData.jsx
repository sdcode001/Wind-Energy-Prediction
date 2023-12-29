import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';
const FetchData = () => {
  const [open, setOpen] = React.useState(false);

  const {fetch} = useSelector((state) => state.fetch)
  const handleClickOpen = () => {
    setOpen(true);
  };

  if(fetch !== null){
    handleClickOpen()
  }


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Evaluated wind energy:"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h1>Output Energy in KW/h : {fetch.output_power_prediction}</h1>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}


