angular.module('dashboard')

    .controller('weatherEditCtrl', ['$scope', '$collection', function($scope, $collection) {
        var cityCollection = $collection.getInstance();

        cityCollection.addAll([
            {city: 'Kraków', 'url': 'http://api.openweathermap.org/data/2.5/weather?id=3094802&units=metric'},
            {city: 'Oslo', 'url': 'http://api.openweathermap.org/data/2.5/weather?id=3143244&units=metric'}
        ]);

        $scope.city = cityCollection.find('url', $scope.options.dataBind.source);

        $scope.cities = cityCollection.all();

        $scope.save = function() {
            $scope.options.dataBind.source = $scope.city.url;
            $scope.options.getData().then(function() {
                $scope.options.flip = false;
            });
        };
    }]);