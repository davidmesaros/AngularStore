module.config(['$routeProvider', function () 
    $routeProvider){
		$routeProvider
        .when("/signup", {
            templateUrl: 'signup.html',
            controller: 'SignupCtrl' })
        .when("/items", {
        		templateUrl: 'items.html',
        		controller: 'itemsCtrl'
        })
        .otherwise({ redirectTo: "/items" });
}]);