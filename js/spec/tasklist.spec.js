describe("Task List App", function() {

  describe("List Model", function() {

    describe("Constructor Properties", function() {

      describe("all", function() {

        it("should have an 'all' property to hold instances", function() {
          expect(List.all).toEqual([]);
        });
      });

    }); //end Constructor Properties


    describe("Instance Properties", function() {

      var list;
      beforeEach(function() {
        list = new List("Jon's List");
      });

      describe("title", function() {

        it("should be assigned when a new List is created", function() {
          expect(list.title).toBe("Jon's List");
        });
      });

      describe("id", function() {

        it("should be assigned when a new List is created", function() {
          expect(list.id).toBe(1);
        });    
      });

      describe("tasks", function() {

        it("should be assigned when a new List is created", function() {
          expect(list.tasks).toEqual([]);
        });      
      });

    }); //Instance Properties

  }); //end List Model tests

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

});