/* 
PURPOSE: edit the profile page?
LAYOUT: form - of user profile objects and validation underneath if wanted
ACTIONS: save profile button, cancel button
LOADING INDICATOR:
loading indicator, error message

*/
import React, {useState, useEffect} from 'react';
import { Typography,TextField,Button,Stack,Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { saveProfile } from '../features/profile/profileActions';




function ProfileEditorForm({ initialProfileData, onSave, onCancel, isSaving, saveError}) {
 const [formData, setFormData] = useState({
    userId: initialProfileData?.userId || '',
    name: initialProfileData?.name || '',
    email: initialProfileData?.email || '',
    bio: initialProfileData?.bio || '',
    avatarUrl: initialProfileData?.avatarUrl || ''
});
    //add validation error handling

useEffect( () => {
    setFormData({
        userId: initialProfileData?.userId || '',
        name: initialProfileData?.name || '',
        email: initialProfileData?.email || '',
        bio: initialProfileData?.bio || '',
        avatarUrl: initialProfileData?.avatarUrl || ''
    })
}, [initialProfileData]);

    const handleChange= (e) => {
        const { name, value } = e.target;
        setFormData( prevData => ({
            ...prevData,
            [name]:value,
        }))
    };

// add validation code here


    const handleSubmit =(e) => {
        e.preventdefault();
        onSave(formData)
    }


return (
    <div>
        <Stack>
                <Typography>
                Edit Profile
                </Typography>

                <TextField 
                label="Name"
                name="name"
                value={formData.name}
                onchange={handleChange}
                fullWidth
                required
                //error
                //helperText
                />

                <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                //error={!!validationErrors.email}
                //helperText={validationErrors.email}
                />

                <TextField
                label="Bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
                />

                <TextField
                label="Avatar URL"
                name="avatarUrl"
                value={formData.avatarUrl}
                onChange={handleChange}
                fullWidth
                />

                <Stack>
                        <button variant="outlines" onClick={onCancel} disabled={isSaving}> {/* isSaving=isLoading */}
                        Cancel    
                        </button>
                        <LoadingButton 
                        type="submit"
                        variant="contained"
                        loading={isSaving}
                        loadingIndicator="Saving..."
                        >
                        Save Changes
                        </LoadingButton>
                </Stack>
            </Stack>
    </div>
)






}
export default ProfileEditorForm;
