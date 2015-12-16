var app = angular.module("myApp", ["ngRoute"]);

// var personalization = [
//   {
//     name: "Ariella Centlivre",
//     id: "",
//     favRoutes: ["farmtopicnic", "beersgears"],
//     badges: ["new", "farmfresh"]
//   },
//   {
//     name: "Blake DeBaske",
//     id: "",
//     favRoutes: ["farmtopicnic"],
//     badges: ["new", "farmfresh"]
//   },
//   {
//     name: "Ellen Zimmer",
//     id: "",
//     favRoutes: ["farmtopicnic", "beersgears", "trailscocktails"],
//     badges: ["new", "farmfresh", "over21", "liqrlovr"]
//   },
// ];

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "partials/rideinfo.html",
      controller: "maincontroller"
    })
    .when("/rideinfo", {
      templateUrl: "partials/rideinfo.html",
      controller: "maincontroller"
    })
    .when("/ride1", {
      templateUrl: "partials/ride1.html",
      controller: "ride1control"
    })
    .when("/ride2", {
      templateUrl: "partials/ride2.html",
      controller: "ride2control"
    })
    .otherwise({
      templateUrl: "partials/404.html",
      controller: "maincontroller"
    });

  $locationProvider.html5Mode(true);
});
