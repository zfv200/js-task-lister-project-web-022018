const expect = chai.expect;

describe("app.js", () => {
  describe("App Class", () => {
    const app = new App();

    it("should initialize with an array of lists", () => {
      expect(app.lists).to.be.a("array");
    });

    it("should have a render method", () => {
      expect(app.render).to.be.a("function");
    });

    it("should have a deleteList method", () => {
      expect(app.deleteList).to.be.a("function");
    });

  });
});
