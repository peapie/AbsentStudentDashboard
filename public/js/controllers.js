var absentDashboard = angular.module('absentDashboard', []);

absentDashboard.controller('StudentListCtrl', function ($scope, $http) {
  $http.get('https://script.google.com/macros/s/AKfycbxtbtw8aL1oY3eyxjFE98kOCqdaG4T4pWvPbNcEv9PlWHPbHQF_/exec').success(function(data) {
    $scope.students = data;
  });
});
