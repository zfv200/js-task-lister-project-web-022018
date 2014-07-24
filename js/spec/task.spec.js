describe("Task Model", function() {

  describe("Instance Properties", function() {

    var list, task;
    beforeEach(function() {
      list = new List("Jon's List");
      task = new Task("Walk the dog", "high", list);
    });

    describe("description", function() {

      it("should be assigned when a new Task is created", function() {
        expect(task.description).toBe("Walk the dog");
      });
    });

    describe("priority", function() {

      it("should be assigned when a new Task is created", function() {
        expect(task.priority).toBe("high");
      });
    });

    describe("id", function() {

      it("should be assigned when a new Task is created", function() {
        expect(task.id).toBe(0);
      });
    });

    describe("list", function() {

      it("should be assigned when a new Task is created", function() {
        expect(task.list.title).toBe("Jon's List");
      });
    });

  }); //end Instance Properties

}); //end Task model tests