stockApp.controller('UserController', function ($scope, $location, authService, notifyService) {

    $scope.userData = {};

    $scope.callLoginService = function () {
        authService.login($scope.userData,
            function success(data) {
                notifyService.showInfo("Login successful.");
                $location.path('/');
            },
            function error(error) {
                notifyService.showError("Login failed.", error);
            });
    };

    $scope.callRegisterService = function () {
        authService.register($scope.userData,
            function success(data) {
                notifyService.showInfo("Successfully registered.");
                $location.path('/');
            },
            function error(error) {
                notifyService.showError("Registration failed.", error);
                $scope.userData.password = "";
                $scope.userData.confirmPass = "";
            });
    };

    $scope.logout = function () {
        if (sessionStorage['currentUser']) {
            sessionStorage.removeItem('currentUser');
        }
        $location.path('/');
    };
});