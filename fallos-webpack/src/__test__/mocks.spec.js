describe("Mocks", () => {
    it("should work", () => {
        const increment = jest.fn( x => x+1 );
        const arr = [1,2];
        arr.forEach(increment);

        expect(increment).toHaveBeenCalled();
        expect(increment.mock.results[0].value).toBe(2);
    })
})