import dotenv from 'dotenv';
export interface LoginUser{
    username:string,
    password:string
}

export const invalidUser:LoginUser={
    username:"invalid@example.com",
    password:"invalid@123"
}

export const validUser:LoginUser={
    username:process.env.EVENTHUB_EMAIL ?? '',
    password:process.env.EVENTHUB_PASSWORD ?? ''
}