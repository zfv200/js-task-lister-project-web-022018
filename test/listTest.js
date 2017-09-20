describe("list.js", () => {
  describe("List Class", () => {
    const newList = new List(1, "Food");

    it("should initialize with an autoincremented id", () => {
      expect(newList.id).to.eq(1)
    });

    it("should initialize with an array of tasks", () => {
      expect(newList.tasks).to.be.a("array")
    });

    it("should have a render method", () => {
      expect(newList.render).to.be.a("function")
    });

  });
});
