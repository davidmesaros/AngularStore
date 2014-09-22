function SignupCtrl ($scope) {
    $scope.signup = function () {
        console.log('Submit: ' + $scope.userName + ', ' + $scope.userPhone + ', ' + $scope.userEmail);
        $scope.userName = '';
        $scope.userPhone = '';
        $scope.userEmail = '';
        $scope.signupForm.$setPristine();
    };
};