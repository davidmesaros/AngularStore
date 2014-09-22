module.controller('ListsCtrl', ['$scope', 'ListSrv', function ($scope, ListSrv) {
	function updateLists() {
		ListSrv.getLists(function (lists) {
			$scope.$apply(function () {
				$scope.lists = lists;
				$scope.listName = '';
				$scope.createListForm.$setPristine();
			});
		});
	};

	$scope.createList = function () {
		ListSrv.createList($scope.listName);
		updateLists();
	};

	$scope.deleteList = function (name) {
		ListSrv.removeList(name, function () {
			updateLists();
		});
	};

	updateLists();
}]);