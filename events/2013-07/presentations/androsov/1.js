(function() {

    function log(data) {
        var props = [];
        for (var prop in data) {
            var value = encodeURIComponent(data[prop]);
            props.push(encodeURIComponent(prop) + '=' + value)
        }

        new Image().src = '/monitoring?' + props.join('&');
    }

    log({a: 1});

})();
