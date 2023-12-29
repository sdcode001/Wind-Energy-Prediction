import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
        speed: '',
        day: '',
        hour: '',
        month: '',
        direction: ''
    },
    error: null,
    result: null,
}
const createmanu = createSlice({
    name: 'manu',
    initialState,
    reducers: {
        setmanu(state, action) {
            for (const key in action.payload) {
                state.data[key] = action.payload[key];
                console.log(state.data[key])
            }
        },
        setResult(state, action) {
            state.result = action.payload
        },
        setError(state, action) {
            state.error = action.payload
        }
    }
});

export const submitData = (data) => {
    return async (dispatch) => {
        const validspeed = data.speed.trim() !== ''
        const validdirection = data.direction !== ''
        const validmonth = data.month !== ''
        const validday = data.day !== ''
        const validhour = data.hour !== ''
        if (! (validday && validdirection && validspeed && validhour && validmonth)) {
            return dispatch(setError({ message: 'All fields are required' }))
        }
        try {
        const formattedData = {
            WindDirection: parseFloat(data.speed), 
            month : parseFloat(data.month),
            day : parseFloat(data.day),
            Hour : parseFloat(data.hour),
            meanSpeed : parseFloat(data.speed)
        }
            console.log(formattedData)
            const response = await fetch("https://wind-energy-prediction.onrender.com/wind_power_predict", {
                method: "POST",
                body: JSON.stringify(formattedData),
                headers: {
                    "Content-type": "application/json"
                }
            })
            const ans = await response.json()
            console.log(ans)
            dispatch(setResult(ans))
        }
        catch (error) {
            dispatch(setError(error))
        }
    }

}

export const { setmanu, setError, setResult } = createmanu.actions

export default createmanu