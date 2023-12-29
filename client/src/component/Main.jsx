import * as React from 'react';
import { useState, forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/material';
import DataForm from './DataForm';


import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { submitData } from '../store/data';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Main = () => {
    const [open, setOpen] = useState(false);
    const {data ,result } = useSelector((state) => state.manu)
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const submitForm = () => {
        dispatch(submitData(data))
    };

    return (
        
        <Box height={'100%'}>
            <Box sx={{ display: 'flex', margin: 0, alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Button variant="contained" onClick={handleClickOpen}>
                    Predict Wind Power Output
                </Button>
            </Box>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Input parameters for wind power prediction"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <DataForm />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={submitForm}>Predict Wind Power</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
export default Main