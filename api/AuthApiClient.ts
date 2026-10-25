import { APIRequestContext,APIResponse } from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config()
export class AuthApiClient{
    constructor(private request:APIRequestContext){

    }

    async register(email:string,password:string):Promise<APIResponse>{
        console.log(`email:${email} and password: ${password}`);
        return await this.request.post(`${process.env.API_BASE}/auth/register`,{
            headers:{
                "accept": "application/json",
                "Content-Type": "application/json"
            },
            data:{email,password}
        })
    }

    async login(email:string,password:string):Promise<APIResponse>{
        return await this.request.post(`${process.env.API_BASE}/auth/login`,{
            data:{email,password}
        })
    }
}