app.directive('navigation', function() {
  return {
    restrict: 'E',
    scope: false,
    templateUrl: 'views/nav.html',
    controller: function($scope, $element, $attrs, $rootScope) {
      $scope.getNavTemplate = function() {
          var path = 'views/nav/';
            if ($scope.logged_in) {
              path += "logged-in";
            } else {
              path += "logged-out";
            }
        path += '.html';
        return path;
      };
      var predicate = ($rootScope.logged_in)? 'logged_in' : 'logged_out';
      $scope.user = $rootScope.user[predicate];
    }
  };
});