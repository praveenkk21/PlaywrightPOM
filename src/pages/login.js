const { expect } = require("@playwright/test")

exports.LoginPage= class LoginPage{

    constructor(page){
        this.page=page
        this.username_textbox=page.getByLabel('Username')
        this.password_textbox=page.getByLabel('Password')
        this.login_button=page.getByRole('button', { name: ' Login' })
    }

    async login(username,password){
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
        .catch((error)=>{
            console.error('error clicking login button: ${error}');
            throw error;
        })
        await expect(this.page).toHaveText('You logged into a secure area!')    
    }
    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
        await expect(this.page).toHaveTitle('The Internet');
    }
}