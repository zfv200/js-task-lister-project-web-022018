describe("task.js", () => {
  describe("Task Class", () => {
    const newTask = new Task(1, "Eat Pizza Hut", "High");

    it("should initialize with an autoincremented id", () => {
      expect(newTask.id).to.eq(1)
    });

    it("should initialize with a description", () => {
      expect(newTask.description).to.eq("Eat Pizza Hut")
    });

    it("should initialize with a priority", () => {
      expect(newTask.priority).to.eq("High")
    });

    it("should have a render method", () => {
      expect(newTask.render).to.be.a("function")
    });

  });
});
