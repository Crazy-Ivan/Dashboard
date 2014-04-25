angular.module('dashboard')
    .config(function(widgetServiceProvider) {
        widgetServiceProvider.register('weather', {
            sizex: 1,
            sizey: 1,
            color: '#2a6c62',
            template: 'weather.html',
            editTemplate: 'weatherEdit.html',
            dataBind: {
                type: 'external',
                source: 'http://api.openweathermap.org/data/2.5/weather?id=3094802&units=metric',
                interval: 60000
            }
        });
    });