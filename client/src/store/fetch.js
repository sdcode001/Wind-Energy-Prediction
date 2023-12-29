import { createSlice} from "@reduxjs/toolkit";

const initialState={
    fetch:null
}
const createfetch=createSlice({
    name:'fetch',
    initialState:initialState,
    reducers:{
        setfetch(state,action){
            state.fetch=action.payload
        }
    }
})

export const { setfetch } = createfetch.actions

export default createfetch