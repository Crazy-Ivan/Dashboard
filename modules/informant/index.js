module.exports = function setup(options, imports, register) {
    var websocket = imports['websocket'],
        data = imports['data'];

    data.on('newData', function(key, value) {
        websocket.emit(key, value);
    });

    register(null,{});
}