/* 
PURPOSE:main page, renders editing or display depending on isEditing boolean
LAYOUT:
ACTIONS:
LOADING INDICATOR:
(ERROR)
*/
import { React, useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import ProfileDisplay from './profileDisplay';
import ProfileEditorForm from './profileEditorForm'
import { CircularProgress, Box,Alert,Button, Snackbar } from '@mui/material';
import { fetchProfile,saveProfile } from '../features/profile/profileActions';
import { editProfile, cancelEdit, clearError } from '../features/profile/profileSlice';

function ProfilePage () {
    console.log('profilePage being called')
    const { userProfile, isEditing, isLoading, error} = useSelector((state)=> state.profile) //get updated versions of these state
    const dispatch = useDispatch()
    const currentUserId = 'user123'
    //const [snackbarOpen, setSnackBarOpen ] = useState(false);
    useEffect( () => {
         if(currentUserId && (!userProfile || !userProfile.userId )){
           console.log('dispatching fetchProfile...')
            dispatch(fetchProfile(currentUserId))
        }
    },[dispatch, currentUserId, userProfile]
);

const handleSaveProfile = (profileData) => { 
    dispatch(saveProfile(profileData));
}

const handleCancelEdit = () => {
    dispatch(cancelEdit()); //sets isEdit to false
}

const handleEditProfileClick = () => {
    console.log("handEditClick called from ProfilePage")
    dispatch(editProfile()); //sets isEdit to true
}

// const handleCloseSnackbar = ()=> {
//     if(reason === 'clickaway'){
//         return;
//     }
//     dispatch(clearError())
// }


console.log('isEditing logging', isEditing,'userProfile', userProfile)

if(isLoading && !userProfile.userId) {
    return(
        <Box sx={{ display: 'flex', justifyContent:'center', alignItems: 'center', height: '100vh'}} >
            <CircularProgress />
            <p style={{ marginLeft: '10px'}}>Loading profile...</p>
        </Box>
    )
}
return (
 <Box sx={{ p: 3 }}>
        {/* <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                {error}
            </Alert>
        </Snackbar> */}
    { isEditing ? (
        <ProfileEditorForm 
        initialProfileData={userProfile}
        onSave={handleSaveProfile}
        onCancel={handleCancelEdit}
        isSaving={isLoading}
        saveError={error}
        />
    ):(
        <ProfileDisplay
        userProfile={userProfile}
        onEditClick={handleEditProfileClick}
        /> 
    )
    }
</Box>
)
};
export default ProfilePage
