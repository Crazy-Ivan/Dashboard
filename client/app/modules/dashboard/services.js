angular.module('dashboard')
    .provider('widgetService', function(){

        var widgetList = [];

        return {
            register: function(channel, widget) {
                widget.channel = channel;
                widget.col = 0;
                widget.row = 0;
                widgetList.push(widget);
            },
            $get: function() {

                return {
                    getWidgetList: function() {
                        return widgetList;
                    }
                }
            }
        }
    })
    .factory('widgetManager', function() {

        var _widgetsInUse = [];

        function _load(widget){

        }

        var widgetManager = {

            saveAllWidgets: function() {
                localStorage.widgets = angular.toJson(_widgetsInUse);
            },

            loadAllWidgets: function() {
                var storage = angular.fromJson(localStorage.widgets);

                if(storage === undefined) {
                    return;
                }

                _widgetsInUse.length = 0;
                angular.forEach(storage, function(value) {
                    this.addWidget(value);
                }, widgetManager);
            },

            getAllWidgets: function() {
                return _widgetsInUse;
            },

            updateWidgetsPosition: function(data) {
                angular.forEach(data, function(value, key) {
                    this[key].col = value.col;
                    this[key].row = value.row;
                }, _widgetsInUse);
            },

            addWidget: function(widget) {
                var widget = angular.copy(widget);

                widget.data = 'data from socket.io - use _load method to bind ';
                _widgetsInUse.push(widget);
            },

            removeWidget: function(index) {
                _widgetsInUse.splice(index, 1);
            }
        };

        return widgetManager;


    });
