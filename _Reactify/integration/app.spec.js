describe("App", () => {
    beforeEach(async () => {
        await page.goto("http://localhost:5000");
    });

    it("should display the title", async () => {
        await expect(page).toMatchElement('h1', {text: 'Recommendations'})
    });
});