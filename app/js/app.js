
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

      $http.get('data/data_backend.json')
        .then(function (response) {
          massageBackendData(response.data);
        })
    }

    function massageBackendData(data) {
      var day = data[0];
      var marks2d = [];
      day.visits.forEach(function (visit, i) {
        marks2d[i] = [];
        visit.marks.forEach(function (mark, j) {
          marks2d[i][j] = mark.value;
        })
      });
      // transpose array
      marks2d = _.zip.apply(_, marks2d);
      console.log(marks2d);
    }

    fetchData();

  }])