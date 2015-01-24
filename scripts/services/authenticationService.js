stockApp.factory('authService', function ($http, baseServiceUrl) {
    return {

        login: function (userData, success, error) {
            var request = {
                method: 'GET',
                contentType: 'application/json',
                url: baseServiceUrl + '/1/login?username=' + userData.username + "&password=" + userData.password
            };
            $http(request).success(function (data) {
                sessionStorage['currentUser'] = JSON.stringify(data);
                success(data);
            }).error(error);
        },
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