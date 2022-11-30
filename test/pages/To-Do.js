class ToDo {
    get plusBtn() { return $('#plus-icon') }
    get input() { return $("//div[@id='container']/input[@type='text']") }
    get list() { return $$("//div[@id='container']/ul/li") }
    get deleteBtn() { return $$(".fa-trash") }

    async listItems(){
        return await this.list.map(item => item.getText())
    }
    async addTask(task) {
        if(await this.input.isDisplayed() === false) {
            await this.plusBtn.click()
            await this.input.setValue(task)
            await browser.keys('Enter')
        }
        else {
            await this.input.setValue(task)
            await browser.keys('Enter')
        }

    }

    async deleteAllTasks(){
        const allItems = await this.list.map(item => item.getText())
        for(let i = 0; i < allItems.length; i++){
        await this.deleteBtn[i].moveTo().then(this.deleteBtn[i].click())
    }
    }

    async deleteTask(task){
        const allItems = await this.list.map(item => item.getText())
        const index = allItems.indexOf(task)
        await this.deleteBtn[index].moveTo().then(this.deleteBtn[index].click())
    }

}

export default new ToDo()