'use strict';

var app = angular.module('helloWordApp', [ 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute' ]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
app.run(function($rootScope) {
  $rootScope.logged_in = true;
  $rootScope.user = {
    logged_in: {
      name: "Jason"
    },
    logged_out: {
      name: "Anon"
    }
  };
});
