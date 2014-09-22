module.controller('ItemsCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    var list = $routeParams.list;

    ListSrv.getList(list, function (items) {
        $scope.items = items || []; // initialize
        $scope.$apply();
    });

    $scope.types = [
        { name: 'Fruit & Veg', label: 'fv' },
        { name: 'Bakery', label: 'bakery' },
        { name: 'Grocery', label: 'grocery' },
        { name: 'Frozen Food', label: 'frozen' },
        { name: 'Deli', label: 'deli' }
    ];

    $scope.addItem = function () {
        $scope.items.push({item: $scope.itemText, type: $scope.itemType});
        $scope.itemText = '';
        $scope.itemType = null;
        ListSrv.saveList(list, $scope.item);
    };

    $scope.removeItem = function (itemIndex) {
        var updatedList;

        $scope.items.splice(itemIndex, 1);

        updatedList = $scope.items.length ? $scope.items : '';
        ListSrv.saveList(list, updatedList);
    };
}]);