describe("List Model", function() {

  describe("Constructor Properties", function() {


    describe("all", function() {

      it("should have an 'all' property to hold instances of each list created", function() {
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

      it("should be have a title when a new List is created", function() {
        expect(list.title).toBe("Jon's List");
      });
    });

    describe("id", function() {

      it("should be assigned an autoincrementing id when a new List is created", function() {
        expect(list.id).toBe(1);
      });    
    });

    describe("tasks", function() {

      it("should be assigned an empty array when a new List is created", function() {
        expect(list.tasks).toEqual([]);
      });      
    });

  }); //Instance Properties

}); //end List Model tests