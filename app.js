var app = angular.module('plunker', ['envoc.simpleCalendar']);

app.controller('MainCtrl', function($scope, simpleCalendarConfig) {
  
  simpleCalendarConfig.weekStart = 0;
  
  $scope.date = moment().toDate();

  $scope.monthName = function monthName(date){
    var months = [
      'January','February','March',
      'April','May','June',
      'July','August','September',
      'October','November','December',
    ];
    return months[date.getMonth()];
  }
  
  $scope.changeMonth = function changeMonth(offset){
    $scope.date = moment($scope.date).add(offset, 'month').toDate();
  }
});