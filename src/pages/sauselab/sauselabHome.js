export class SauselabHomePage{

    constructor(page){
        this.page = page;
        this.addToCartButton = page.locator("button:has-text('Add to cart')");
        this.shoppingCartLink = page.locator('.shopping_cart_link');
        this.checkoutButton = page.locator('#checkout');
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.BikeLight = page.locator('#add-to-cart-sauce-labs-bike-light');
        this.finishButton = page.locator('#finish');
    }

    async addAllToCartButtons(){
        const count = await this.addToCartButton.count();
        console.log(count);
        for (let i = 0; i < count; i++) {
        const button = this.addToCartButton.nth(i);
        if (await button.isVisible() && !(await button.isDisabled())) {
                await button.click();
            } else {
                console.log(`Button ${i} is not clickable.`);
            }
        }
        }

    async addToCartButtons(productName){
        switch (productName) {
            case 'Bike Light':
                await this.BikeLight.click();
                break;
            default:
                break;
        }
    }
    
    async clickShoppingCartLink(){
        await this.shoppingCartLink.click();
        await this.checkoutButton.click();
    }

    async checkOutInformation(firstName, lastName, postalCode){
        await this.firstName.click();
        await this.firstName.fill(firstName);
        await this.lastName.click();
        await this.lastName.fill(lastName);
        await this.postalCode.click();
        await this.postalCode.fill(postalCode);
        await this.continueButton.click();
        await this.finishButton.click();
    }
}