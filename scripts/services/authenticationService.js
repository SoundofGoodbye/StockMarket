stockApp.factory('authService', function ($http, baseServiceUrl) {
    return {

        register: function (userData, success, error) {
            var request = {
                method: 'POST',
                url: baseServiceUrl + '/1/classes/_User',
                data: userData
            };
            $http(request).success(function (data) {
                sessionStorage['currentUser'] = JSON.stringify(data);
                success(data);
            }).error(error);
        }
    };
});