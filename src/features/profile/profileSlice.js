import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userProfile: {
    userId:null,
    name:null,
    email:null,
    bio:null,
    avatar:''  //?
    
    },
    isEditing: false, //display form for editing
    isLoading: false,
    error: '' //can also be null
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        requestProfile: ( state, action) => {
            const { userId } = action.payload
            state.isLoading = true
            state.error = '' // clear prev errors
            state.userProfile.userId = userId

        },
        profileRequestSuccess:(state, action ) =>{
            const {userId, name, email, bio,avatarUrl} = action.payload
            state.isLoading = false
            state.error = ''
            state.userProfile = {userId, name, email, bio,avatarUrl}
            // or state.userProfile = action.payload
        },
        profileRequestFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload || 'Error has occurred'
            state.userProfile = null //do i need this
        },
        cancelEdit: (state) => {
            state.isEditing = false //cancel button (next to edit button) is pressed 
        },
        clearError: (state)=> {
            state.error = ''
        },
        // REDUCERS FOR SAVING
        editProfile: (state) => {
            //no payload yet
            state.error = ''
            state.isEditing =  true //form is visible

        },
        saveProfileRequest: (state, action) => {
            //DOES THIS actually need a payload
            const {userId, name, email, bio,avatarUrl} = action.payload
            state.isLoading = true
            state.error = ''
            state.userProfile = {userId, name, email, bio,avatarUrl}
        },
        saveProfileRequestSuccess: (state, action) => {
           //confirmed loaded payload from api
            const {userId, name, email, bio,avatarUrl} = action.payload
        //do i need the payload line?
            state.error = ''
            state.isLoading = false
            state.isEditing = false
            state.userProfile = {userId, name, email, bio,avatarUrl}
            //or just action.payload

        },
        saveProfileRequestFailure: (state,action) => {
            state.isLoading = false
            state.error = action.payload || "An Error occurred"
            state.isEditing = true //form still viable so user can edit 
        }

    } 
})
export const {requestProfile,
            profileRequestSuccess,
            profileRequestFailure,
            editProfile,
            cancelEdit,
            clearError,
            saveProfileRequest,
            saveProfileRequestSuccess,
            saveProfileRequestFailure

} = profileSlice.actions
export default profileSlice.reducer;