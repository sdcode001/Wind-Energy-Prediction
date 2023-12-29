import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setmanu } from '../store/data';
const DataForm = () => {

    const { data: formData, error } = useSelector((state) => state.manu);

    const dispatch = useDispatch()

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"

        >
            <div>
                <TextField
                    required
                    id="speed"
                    label="Speed (m/s)"
                    inputProps={{
                        max: 25.5,
                        min: 3,
                        step: 0.01,
                    }}
                    type="number"
                    value={formData.speed}
                    onChange={(e) => { dispatch(setmanu({ speed: e.target.value })) }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                />
                <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
                    <InputLabel id="wind">Wind Direction</InputLabel>
                    <Select
                        required
                        id="wind1"
                        label="wind_direction"
                        value={formData.direction}
                        onChange={(e) => { dispatch(setmanu({ direction: e.target.value })) }}
                    >
                        <MenuItem value={0}>N</MenuItem>
                        <MenuItem value={30}>NNE</MenuItem>
                        <MenuItem value={60}>NEE</MenuItem>
                        <MenuItem value={60}>NEE</MenuItem>
                        <MenuItem value={90}>E</MenuItem>
                        <MenuItem value={120}>SEE</MenuItem>
                        <MenuItem value={150}>SSE</MenuItem>
                        <MenuItem value={180}>S</MenuItem>
                        <MenuItem value={210}>SSW</MenuItem>
                        <MenuItem value={240}>SWW</MenuItem>
                        <MenuItem value={270}>W</MenuItem>
                        <MenuItem value={300}>NWW</MenuItem>
                        <MenuItem value={330}>NNW</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
                    <InputLabel id="month" >Month</InputLabel>
                    <Select
                        required
                        id="month1"
                        label="Month"
                        value={formData.month}
                        onChange={(e) => { dispatch(setmanu({ month: e.target.value })) }}
                    >
                        <MenuItem value={1}>January</MenuItem>
                        <MenuItem value={2}>Feburary</MenuItem>
                        <MenuItem value={3}>March</MenuItem>
                        <MenuItem value={4}>April</MenuItem>
                        <MenuItem value={5}>May</MenuItem>
                        <MenuItem value={6}>June</MenuItem>
                        <MenuItem value={7}>July</MenuItem>
                        <MenuItem value={8}>August</MenuItem>
                        <MenuItem value={9}>September</MenuItem>
                        <MenuItem value={10}>October</MenuItem>
                        <MenuItem value={11}>November</MenuItem>
                        <MenuItem value={12}>December</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    required
                    id="day"
                    label="Day"
                    inputProps={{
                        max: 31,
                        min: 1,
                    }}
                    type="number"
                    value={formData.day}
                    onChange={(e) => { dispatch(setmanu({ day: e.target.value })) }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                />
                <TextField
                    required
                    id="hour"
                    label="Hour"
                    inputProps={{
                        max: 23.59,
                        min: 0.00,
                        step: 0.1,
                    }}
                    type="number"
                    value={formData.hour}
                    onChange={(e) => { dispatch(setmanu({ hour: e.target.value })) }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                />
            </div>
            {error && <Typography color={'error'}>{error.message}</Typography>}
        </Box >
    );
}
export default DataForm