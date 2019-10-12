"use strict";

angular
  .module("Personal")
  // Configuring the routing
  // The config method must have an array as the parameter. The array contains two elements, $routeProvider (as a string) and an arrow function with $routeProvider as a parameter
  .config(["$routeProvider", ($routeProvider) => {
    $routeProvider
      // When the user visits the display route...
      .when("/", {
        // Load the about component
        template: "<home></home>"
      })
      .otherwise( {
        //otherwise, take me home
        redirectTo: "/home"
      })
    
    }]);