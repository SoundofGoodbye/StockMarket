stockApp.controller('UserController', function ($scope, $location, authService, notifyService) {

    $scope.userData = {};

    $scope.callLoginService = function () {

    };

    $scope.callRegisterService = function () {
        authService.register($scope.userData,
            function success(data) {
                notifyService.showInfo("Successfully registered.");
                $location.path('/');
            },
            function error(error) {
                notifyService.showError("Registration failed", error);
                $scope.userData.password = "";
                $scope.userData.confirmPass = "";
            });
    };
});