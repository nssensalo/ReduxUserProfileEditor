/* 
PURPOSE:
    Display user info
LAYOUT: 
    header - name avatar
    body - bio, email, EDIT PROFILE button
ACTIONS:
    edit button - take you to edit form view

    


*/
import React from 'react';
import { Typography, Button, Stack, Avatar } from '@mui/material';

function ProfileDisplay({ userProfile, onEditClick}){
    if(!userProfile || !userProfile.userId){
        return(
             <Stack spacing={2} alignItems="center">
                    <Typography variant="h6" color="textSecondary">
                    No profile data to display.
                    </Typography>
                    
                    <Button variant="contained" onClick={onEditClick}>
                    Create Profile
                    </Button>
            </Stack>
    );

        
    }

    return(
         <Stack spacing={2} alignItems="center">
            <Avatar
                src={userProfile.avatarUrl || 'https://via.placeholder.com/150'} // Fallback for no avatar
                alt={userProfile.name || 'User Avatar'}
                sx={{ width: 100, height: 100, mb: 2 }}
            />
            
            <Typography variant="h4">{userProfile.name}</Typography>
            
            <Typography variant="body1" color="textSecondary">
                {userProfile.email}
            </Typography>
            
            <Typography variant="body2" sx={{ textAlign: 'center', maxWidth: 400 }}>
                {userProfile.bio || 'No bio provided.'}
            </Typography>
            
            <Button variant="contained" onClick={onEditClick}>
                Edit Profile
            </Button>
        </Stack>



    );
}
export default ProfileDisplay;