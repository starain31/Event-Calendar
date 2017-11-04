var app = angular.module('calendar', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope){
        $scope.year = 2017;
        $scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        $scope.currentMonth = 10;
        $scope.weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        $scope.startDay = new Date($scope.year, $scope.currentMonth, 1).getDay();
        $scope.endDate = new Date($scope.year, $scope.currentMonth+1, 0).getDate();
        $scope.days = Array.from({length: 42}, (v, i) => {
            if(i < $scope.startDay || $scope.endDate < (i - $scope.startDay + 1)  ) {
                return {
                    number: null,
                    events:null
                }
            }
            return {
                number:i - $scope.startDay + 1,
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

            $scope.startDay = new Date($scope.year, $scope.currentMonth, 1).getDay();
            $scope.endDate = new Date($scope.year, $scope.currentMonth+1, 0).getDate();
            $scope.days = Array.from({length: 42}, (v, i) => {
                // console.log("day", i);
                if(i < $scope.startDay || $scope.endDate < (i - $scope.startDay + 1)  ) {
                    // console.log("out");
                    return {
                        number: null,
                        events:null
                    }
                }
                // console.log("in");
                return {
                    number:i - $scope.startDay + 1,
                    events:null,
                };
            });
        };
    }]);
