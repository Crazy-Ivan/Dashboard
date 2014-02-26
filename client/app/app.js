angular.module('app', ['dashboard', 'ngAnimate'])
    .controller('AppCtrl', ['$scope','$location', function($scope, $location) {
        $scope.$watch(function() {
            return $location.path();
        }, function(path) {
           if(path === '/config') {
               $scope.configuration = true;
           } else {
               $scope.configuration = false;
           }
        });
    }])
    .controller('ConfigurationCtrl', ['$scope', 'widgetService', function($scope, widgetService) {
        var widgetList = widgetService.getWidgetList();

        $scope.widgets = widgetList;
        $scope.addWidget = function(index) {
            widgetService.addWidget(index);
        }
    }]);