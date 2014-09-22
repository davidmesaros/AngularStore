module.controller('ItemsCtrl', function ($scope) {
    $scope.items = [];
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
    };

    $scope.removeItem = function (itemIndex) {
        $scope.items.splice(itemIndex, 1);
    };
});