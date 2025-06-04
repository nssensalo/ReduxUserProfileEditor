import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userProfile: null, // only use empty array if loading multiple profiles at one
    isEditing: false,
    isLoading: false,
    error: '' //can also be null
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        workSpaceProfileRequest: ( state, action) => {
            const { userId } = action.payload
            state.isLoading = true
            state.error = null
            // store the id here ////

        }
    } 
})
export const {workSpaceProfileRequest} = profileSlice.actions
export default profileSlice.reducer;