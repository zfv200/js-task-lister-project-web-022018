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


/*

describe("Task Model", function() {

  describe("Instance Properties", function() {

    var list, task;
    beforeEach(function() {
      list = new List("Jon's List");
      task = new Task("Walk the dog", "high", list);
    });

    describe("description", function() {

      it("should take a description when the task is created", function() {
        expect(task.description).toBe("Walk the dog");
      });
    });

    describe("priority", function() {

      it("should be assigned a priority when a new Task is created", function() {
        expect(task.priority).toBe("high");
      });
    });

    describe("id", function() {

      it("should be assigned an autoincremented id when a new Task is created", function() {
        expect(task.id).toBe(0);
      });
    });

    describe("list", function() {

      it("should be assigned to a list when a new Task is created", function() {
        expect(task.list.title).toBe("Jon's List");
      });
    });

  }); //end Instance Properties

}); //end Task model tests


*/
