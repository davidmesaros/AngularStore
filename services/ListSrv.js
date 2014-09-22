module.service('ListSrv', function () {
	var lists = new Firebase('https://torid-inferno-1081.firebaseio.com//lists');

	this.getLists = function (callback) {
		lists.once('value', function (result) {
			return callback(result.val());
		});
	};

	this.createList = function (name) {
		lists.child(name).set('');
	};

	this.removeList = function (name, callback) {
		lists.child(name).remove(function () {
			callback();
		});
	};

	this.getList = function (list, callback) {
		lists.child(list).once('value', function (result) {
			return callback(result.val());
		});
	};

    this.saveList = function (listName, list) {
        lists.child(listName).set(list, function (err, msg) {
        	if (err) return console.log(msg);
        });
    };

    this.getList = function (list, callback) {
        lists.child(list).once('value', function (result) {
        	return callback(result.val());
        });
    };
});