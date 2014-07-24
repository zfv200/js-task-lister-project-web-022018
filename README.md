---
languages: javascript
tags: js, classical, oo, object oriented, task list, advanced
resources: 2
type: lab
---

# JS Test Driven Task List

Create an object oriented task list.  You're going to need to build a basic all front end app.  There will be no persitence.  However, you will need two models, one for List(s) and Task(s).  These models will need autoincrementing IDs as well as some "class" methods.  These models will talk to their matching controllers, ListController and TaskController.  The controllers job is to interact with the DOM (think jQuery and rails controllers that make instances to help the views).  However your controllers will be adding the elements themselves to the DOM instead of the views.

## Steps

1. Fork this repository.
2. Clone your fork locally.
3. cd into the local repos folder.
4. Open SpecRunner.html in your browser to see the tests.
5. Open index.html in your browser to see the functionality. Don't forget to have dev tools debugger / console open as well to see errors.
6. Make the tests pass in js/spec/ by writing the code neccesary in js/models and js/controllers.

For comparison here is a live example of the finished app [linked here](http://flatiron-school-curriculum.github.io/js-oo-task-list/).

## Resources

 * [Jasmine 2.0 Documentation](http://jasmine.github.io/2.0/introduction.html)
 * [Finshed Example of App Here](http://flatiron-school-curriculum.github.io/js-oo-task-list/)