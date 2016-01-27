
angular.module('app', [])

  .controller('AppCtrl', ['$http', function ($http) {
    var vm = this;

    vm.expanded = false;

    vm.toggleExpanded = function () {
      vm.expanded = !vm.expanded;
    };

    function fetchData() {
      $http.get('data/blank.json')
        .then(function (response) {
          vm.blankData = response.data;
        });

      $http.get('data/data.json')
        .then(function (response) {
          vm.data = response.data;
        });
    }

    fetchData();

  }])