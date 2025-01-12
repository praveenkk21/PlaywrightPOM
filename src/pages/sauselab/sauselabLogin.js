export class SauselabLoginPage{

    constructor(page) {
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.addToCartButton = page.locator("button:has-text('Add to cart')");
    }

    async gotoLoginPage(username, password) {
        await this.page.goto('https://www.saucedemo.com/');
        await this.username.click();
        await this.username.fill(username);
        await this.password.click();
        await this.password.fill(password);
        await this.loginButton.click();
    }

}