import ToDo from "../pages/To-Do";

describe('To-Do page navigation', function () {
    it('should navigate to To-Do list page ', async function () {
        await browser.url("To-Do-List/index.html")
        expect(await browser.getUrl()).toEqual('https://www.webdriveruniversity.com/To-Do-List/index.html')
        expect(await browser.getTitle()).toEqual("WebDriver | To Do List")
    });
});

describe('Perform verifications', function () {
    it('should verify default tasks',async function () {
        const defaultTasks = ['Go to potion class', 'Buy new robes', 'Practice magic']
        expect(defaultTasks).toEqual(await ToDo.listItems())
    });
    it('should add new task', async function () {
       await ToDo.addTask('New task')
        expect(await ToDo.listItems()).toContain('New task')
    });
});