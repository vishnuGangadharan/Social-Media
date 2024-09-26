import Api from "../services/axios";
import errorHandler from "./error";
import userRoutes from "../services/endpoints/userEndPoints";
import { userFormData } from "../services/interface/user";
import { commentTypes } from "@/services/interface/post";



export const signUp  = async (userData: userFormData) => {
    try {        
        const response = await Api.post(userRoutes.signup, userData);
        return response;
        
    } catch (error) {
        const err:Error = error as Error;
        errorHandler(err);
    }
}


export const verifyOtp = async(otp:number ,email:string)=>{
    try{
        const response = await Api.post(userRoutes.userOtpVerify ,{otp,email})
        return response
    }catch(error){
        const err:Error = error as Error;
        errorHandler(err);
    }   
}

export const resendOtp = async(userData : userFormData)=>{
    try{
        const response = await Api.post(userRoutes.resendOtp ,{userData})
        return response
    }catch(error){
        const err:Error = error as Error;
        errorHandler(err);
    }   
}

export const login= async(userData: userFormData) => {
    try {
        const response = await Api.post(userRoutes.login, userData);
        return response;

    } catch (error) {
        const err:Error = error as Error;
        errorHandler(err);
    }
}

export const addPost = async(postData: FormData) => {
    try {

        const response = await Api.post(userRoutes.addPost,postData);
        return response;    
    } catch (error) {
        const err:Error = error as Error;
        errorHandler(err);
    }
}

export const postData = async()=>{
    try {
        const response = await Api.get(userRoutes.postData)
        return response.data;
    } catch (error) {
        const err:Error = error as Error;
        errorHandler(err);
    }
}

export const postComment = async(data : commentTypes) => {
    try {
        const response = await Api.post(userRoutes.postComment, {data})
        return response.data
    }catch(error){
        const err:Error = error as Error
        errorHandler(err)
    }
}