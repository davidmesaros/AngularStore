module.config(['$routeProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/signup", {
            templateUrl: 'signup.html',
            controller: 'SignupCtrl' })
        .when("/lists", {
            templateUrl: 'list.html',
            controller: 'ListsCtrl' })
        .when("/lists/list/:list", {
            templateUrl: 'itme.html',
            controller: 'ItemsCtrl' })
        .otherwise({ redirectTo: "/lists" });
}]);