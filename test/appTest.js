const expect = chai.expect;

describe("app.js", () => {
  describe("App Class", () => {

    it("should initialize with an array of lists", () => {
      expect(App.constructor).to.be.a("function");
    });

    it("should have a render method", () => {
      expect(App.prototype.render).to.be.a("function");
    });

    it("should have a deleteList method", () => {
      expect(App.prototype.deleteList).to.be.a("function");
    });

  });
});
