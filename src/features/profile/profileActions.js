import {fetchUserFromAPI, saveUserToAPI} from './api';
import {
    requestProfile,
    profileRequestSuccess,
    profileRequestFailure,
    saveProfileRequest,
    saveProfileRequestSuccess,
    saveProfileRequestFailure
} from './profileSlice';

export const fetchProfile = (userId) => async(dispatch)=>{

try{
    dispatch(requestProfile());//dispatch action
    
    const userProfile = await fetchUserFromAPI(userId);//api call of success and failure

    dispatch(profileRequestSuccess(userProfile));


} catch (error) {
    dispatch(profileRequestFailure(error.message));
}


};

export const  saveProfile = (profileData) => async (dispatch)=> {
try {
    dispatch(saveProfileRequest(profileData));

    const confirmedProfile = await saveUserToAPI(profileData);

    dispatch(saveProfileRequestSuccess(confirmedProfile));
} catch(error){
    dispatch(saveProfileRequestFailure(error.message));
}



};