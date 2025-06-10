/* 
PURPOSE:main page, renders editing or diplay depending on isEditing boolean
LAYOUT:
ACTIONS:
LOADING INDICATOR:
(ERROR)
*/
import { React, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import ProfileDisplay from './profileDisplay';
import ProfileEditorForm from './profileEditorForm'
import { CircularProgress, Box,Alert,Button, Snackbar } from '@mui/material';
import {
     fetchProfile,
     saveProfile,
    // editProfile,
    // requestProfile,
    // profileRequestSuccess,
    // profileRequestFailure,
    // editProfile,
    // saveProfileRequest,
    // saveProfileRequestSuccess,
    // saveProfileRequestFailure

} from './profileSlice';

function ProfilePage () {
    const { userProfile, isEditing, isLoading, error} = useSelector((state)=> state.profile) //get updated versions of these state
    const dispatch = useDispatch()
    const currentUserId = 'user123'

    useEffect( () => {
         if(currentUserId && !userProfile.userId) {
           
            dispatch(fetchProfile(currentUserId))
        }
    },[dispatch, currentUserId, userProfile.userId]
);

const handleSaveProfile = (profileData) => { 
    dispatch(saveProfile(profileData));
}

const handleCancelEdit = () => {
    dispatch(cancelEdit);
}

const handleEditProfileClick = () => {
    dispatch(editProfile);
}

dispatch(clearError());
};

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
        <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                {error}
            </Alert>
        </Snackbar>
    { isEditing ? (
        <ProfileEditorForm />
    ):(
        <ProfileDisplay
        userProfile={userProfile}
        onEditClick={onEditClick}
        /> 
    )
    }
</Box>
)
export default ProfilePage
// ----------------------

// return (
//     <Box sx={{ p: 3 }}>
//       {/* Global error display (e.g., from fetch failure) */}    
//       <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseSnackbar}> {/* SEE WHAT happens WITHOUT THIS CODE, AND TRY WITHOUT ALERT*/}
//         <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
//           {error}
//         </Alert>
//       </Snackbar>

//       {/* Render based on isEditing state */}
//       {isEditing ? (
//         <ProfileEditorForm
//           initialProfileData={userProfile}
//           onSave={handleSaveProfile}
//           onCancel={handleCancelEdit}
//           isSaving={isLoading} // isLoading also covers saving status now
//           saveError={error}    // Pass error to form for display there
//         />
//       ) : (
//         <ProfileDisplay
//           userProfile={userProfile}
//           onEditClick={handleEditClick}
//         />
//       )}
//     </Box>
//   );
// }

// export default ProfilePage;








// // use effect to fetch profile with dispatch and useffect array
// // --- Conditional Rendering Logic ---
//   if (isLoading && !userProfile.userId) { // Show full page loader only on initial fetch
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <CircularProgress />
//         <p style={{ marginLeft: '10px' }}>Loading profile...</p>
//       </Box>
//     );
//   }


// function ProfilePage() {
//   const dispatch = useDispatch();
//   const { userProfile, isLoading, isEditing, error } = useSelector(state => state.profile); // <-- STATE.PROFILE IS THE WHOLE REDUCER!! EVERYTHING FROM INITIAL STATE

//   // Hardcoded for demonstration. In a real app, get this from auth context/slice.
//   const currentUserId = 'user123'; // or 'user456' to test different profiles

//   // Fetch profile when the component mounts or userId changes
//   useEffect(() => {
//     if (currentUserId && !userProfile.userId) { 
//       dispatch(fetchProfile(currentUserId)); //fetchProfile
//     }
//   }, [dispatch, currentUserId, userProfile.userId]); //SO IF USERID BUT NO USERPROFILE.USERID. WHAT HAPPENS IF NO USE EFFECT?? TRY

//   const handleEditClick = () => {
//     dispatch(editProfile()); // Set isEditing to true
//   };

//   const handleCancelEdit = () => {
//     dispatch(cancelEdit()); // Set isEditing to false
//   };

//   const handleSaveProfile = (formData) => { //(profileData )
//     dispatch(saveProfile(formData)); // Dispatch the thunk to save profile
//   };

//   const handleCloseSnackbar = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     dispatch(clearError()); // Clear the error message
//   };

//   // --- Conditional Rendering Logic ---
//   if (isLoading && !userProfile.userId) { // Show full page loader only on initial fetch
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <CircularProgress />
//         <p style={{ marginLeft: '10px' }}>Loading profile...</p>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ p: 3 }}>
//       {/* Global error display (e.g., from fetch failure) */}    
//       <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseSnackbar}> {/* SEE WHAT AHPPEND WITHOUT THIS CODE, AND TRY WITHOUT ALERT*/}
//         <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
//           {error}
//         </Alert>
//       </Snackbar>

//       {/* Render based on isEditing state */}
//       {isEditing ? (
//         <ProfileEditorForm
//           initialProfileData={userProfile}
//           onSave={handleSaveProfile}
//           onCancel={handleCancelEdit}
//           isSaving={isLoading} // isLoading also covers saving status now
//           saveError={error}    // Pass error to form for display there
//         />
//       ) : (
//         <ProfileDisplay
//           userProfile={userProfile}
//           onEditClick={handleEditClick}
//         />
//       )}
//     </Box>
//   );
// }

// export default ProfilePage;
