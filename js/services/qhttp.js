angular.module('requests').factory('qhttp', function($http,){
	
	return {
		get: qhttp_get,
		post: qhttp_post
	};

	function qhttp_get(url, params, cache) {
        if (!params) {
            params = {};
        }
        var promise = $http({
            method: 'GET',
            url: url,
            params: params,
            cache: cache
        });
        if (setDefaultHandlers)
            setDefaultHandlers(promise, {extra: {url: url, params: params}});
        return promise;
    }

    function qhttp_post(url, params) {
        if (!params) {
            params = {};
        }
        var promise = $http({
            method: 'POST',
            url: url,
            data: $.param(params)
        });
        if (setDefaultHandlers)
            setDefaultHandlers(promise, {extra: {url: url, params: params}});
        return promise;
    }

});