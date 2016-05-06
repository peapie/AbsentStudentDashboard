var absentDashboard = angular.module('absentDashboard', []);

absentDashboard.controller('StudentListCtrl', function ($scope) {
  $scope.students = [
    {'name': 'Mickey Mouse',
     'schoolName': 'Disney',
     'attendanceYtd': '10',
    },
    {'name': 'Minnie Mouse',
     'schoolName': 'Disney',
     'attendanceYtd': '1',
    },
    {'name': 'Mike Wazowski',
     'schoolName': 'Monsters U',
     'attendanceYtd': '2'}
  ];
});
