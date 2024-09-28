import { postData } from '@/api/user';
import { createSlice } from '@reduxjs/toolkit'
import { json } from 'stream/consumers';

const getPostedData = () =>{
    const postData = localStorage.getItem('postData');
    try{
        return postData ? JSON.parse(postData) : null;

    }catch(error){
        console.log("Error in parsing stored postData info",error);
        localStorage.removeItem("postData");
        return null;
    }
}


const initialState ={
    postData : getPostedData()
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPostData :(state , action) =>{
            state.postData  = action.payload;
            localStorage.setItem('postData' , JSON.stringify(action.payload))
        },
        deletePostData : (state) => {
            state.postData = null;
            localStorage.removeItem('postData')
        },
    }
})

export const {setPostData , deletePostData} = postSlice.actions
export default postSlice.reducer