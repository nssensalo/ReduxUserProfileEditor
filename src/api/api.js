// Simulating delayed network response for n milliseconds before Promise resolves
const delay = (ms) => new Promise((res)=> setTimeout(res,ms))

const userDataStore = {
    'user123':{
        userId: 'user123',
        name: 'Sally Brown',
        email: 'sally.br@gmail.com',
        bio: 'Engineer with a passion for data',
        avatarUrl:'https://via.placeholder.com/150/0000FF/FFFFFF?text=JD'
    },
    'user124':{
        userId: 'user124',
        name:'Eric Williams',
        email: 'er.w@gmail.com',
        bio: 'UX designer focused on intuitive design',
        avatarUrl:'https://via.placeholder.com/150/FF0000/FFFFFF?text=JD'
    },
}

export const getUserProfile = async (userId) => {
    await delay(10000);

    if(userDataStore[userId]) {
        console.log(`Starting API fetch for userId ${userId}`)
        return { ok: true, json: ()=> Promise.resolve(userDataStore[userId])}

    }else {
        console.log(`API fetch not found for ${userId}`)
        return { ok:false, json: ()=> Promise.resolve({message:'Profile not found'})
    }
    }
};

export const saveUserProfile = async (profileData) => {
    await delay(10000);

    //database update would go here

    if(profileData.userId && userDataStore[userId]) {
        userDataStore[profileData.userId] = {
        ...userDataStore[profileData.userId],
        ...profileData
    }
    console.log(`API: following data saved for userId ${profileData.userId}`, userDataStore[userId])
    return {ok:true, json:()=>Promise.resolve(userDataStore[userId])}

    }else{
          console.log(`API: Failed to save profile - user not found or invalid data`)
        return {ok: false, json:()=> Promise.resolve({message:'Failed to save profile'})}
    }
    
}
