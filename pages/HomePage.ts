import { Page,Locator } from "@playwright/test";

export class HomePage{
    readonly page:Page
    readonly logOutBtn:Locator
    readonly userEmailDisplay:Locator

    constructor(page:Page){
        this.page = page
        this.logOutBtn = page.getByTestId("logout-btn")
        this.userEmailDisplay = page.getByTestId("user-email-display")
    }
}