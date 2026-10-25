import { Page,Locator } from "@playwright/test";

export class LoginPage{
    readonly page:Page
    readonly emailInput:Locator
    readonly passwordInput:Locator
    readonly loginBtn:Locator

    constructor(page:Page){
        this.page = page
        this.emailInput = page.getByRole("textbox",{name:/email/i})
        this.passwordInput = page.getByRole("textbox",{name:/password/i})
        this.loginBtn = page.getByRole("button",{name:/Sign In/i})
    }

    async navigate():Promise<void>{
        await this.page.goto("https://eventhub.rahulshettyacademy.com/login")
    }

    async navigateToHome():Promise<void>{
        await this.page.goto("https://eventhub.rahulshettyacademy.com/")
    }
    async login(username:string,password:string):Promise<void>{
        await this.emailInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginBtn.click()
    }

    async setAuthToken(token:string):Promise<void>{
        await this.page.evaluate((jwt:string)=>{
            localStorage.setItem("eventhub_token",jwt)
        },token)
        }

    async getLocalStorage(name:string):Promise<string | null>{
        return await this.page.evaluate((key:string)=>{
            return localStorage.getItem(key)
        },name)
    }
    }