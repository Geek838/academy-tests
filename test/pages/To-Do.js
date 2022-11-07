class ToDo {
    get plusBtn() { return $('#plus-icon') }
    get input() { return $("//div[@id='container']/input[@type='text']") }
    get list() { return $$("//div[@id='container']/ul/li") }
    get deleteBtn() { return $$(".fa-trash") }

    listItems(){
        return this.list.map(item => item.getText())
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
        for(let i = 0; i < this.list.length; i++){
            await this.deleteBtn[i].click()
        }
    }

    async deleteTask(task){
        let index = await this.list.findIndex(task)
        await this.deleteBtn[index].click()
    }

}

export default new ToDo()