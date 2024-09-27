import { UserInfo } from "os";
import { userFormData } from "./user";

export interface PostTypes {
    _id?: string;
    content?: string;
    userId?: userFormData;
    image?: string[];
    video?: string[];
    createdAt?: string;
    updatedAt?: string;
    like?: string[];
}

export interface commentTypes {
    _id?: string;
    comment?: string;
    userId?: userFormData;
    postId?: PostTypes;
}

export interface ProfileTypes {
    user : userFormData | null
    post : PostTypes[]
}