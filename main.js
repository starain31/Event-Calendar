var app = angular.module('calendar', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
    $scope.year = 1989;
    $scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    $scope.currentMonth = 10;
    $scope.weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    $scope.startDay = new Date($scope.year, $scope.currentMonth, 1).getDay();
    $scope.blank = new Array($scope.startDay);
    $scope.days = Array.from({length: new Date($scope.year, $scope.currentMonth+1, 0).getDate()}, (v, i) => {
        return {
            number:i+1,
            events:null,
        };
    });

    $scope.changeMonth = function (offset) {
        $scope.currentMonth += offset;
        if($scope.currentMonth < 0) {
            $scope.year--;
            $scope.currentMonth = 11;
        } else if( 11 < $scope.currentMonth) {
            $scope.year++;
            $scope.currentMonth = 0;
        }

        $scope.days = Array.from({length: new Date($scope.year, $scope.currentMonth+1, 0).getDate()}, (v, i) => {
            return {
                number:i+1,
                events:null,
            };
        });
        $scope.startDay = new Date($scope.year, $scope.currentMonth, 1).getDay();
    };
}]);
