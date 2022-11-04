class Click {
    get webClick() { return $("/html/body/div[@class=\'container\']/div[2]/div/div[@class=\'row\']/div[1]/div[@class=\'thumbnail\']/div[@class=\'caption\']/span[@class=\'btn btn-default btn-lg dropdown-toggle\']/p[.=\'CLICK ME!\']") }
    get jsClick() { return $("/html/body/div[@class='container']/div[2]/div/div[@class='row']/div[2]/div[@class='thumbnail']/div[@class='caption']/span[@class='btn btn-default btn-lg dropdown-toggle']")}
    get moveClick() {return $("/html/body/div[@class='container']/div[2]/div/div[@class='row']/div[3]/div[@class='thumbnail']/div[@class='caption']/span[@class='btn btn-default btn-lg dropdown-toggle']")}
    get messageWeb() {return $("/html//div[@id='myModalClick']//p")}
    get messageJS() {return $("/html//div[@id='myModalJSClick']//p")}
    get messageMove() {return $("/html//div[@id='myModalMoveClick']//p")}
    get closeWeb() {return $("/html//div[@id='myModalClick']//button[@class='btn btn-default']")}
    get closeJS() {return $("/html//div[@id='myModalJSClick']//button[@class='btn btn-default']")}
    get closeMove() {return $("/html//div[@id='myModalMoveClick']//button[@class='btn btn-default']")}


    async clickWeb() {
       await this.webClick.click();
         await this.messageWeb.waitForDisplayed();
            await this.closeWeb.click();
    }
    async clickJS() {
       await this.jsClick.click()
        await this.messageJS.waitForDisplayed();
                await this.closeJS.click();
    }
    async clickMove() {
        await this.moveClick.moveTo();
            await this.moveClick.click()
                await this.messageMove.waitForDisplayed();
                    await this.closeMove.click();
    }

}

export default new Click()