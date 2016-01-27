
angular.module('app', [])

  .controller('AppCtrl', [function () {
    var vm = this;

    vm.blankData = [
      {
        value: 'Строка 1'
      },
      {
        value: 'Строка 2'
      },
      {
        value: 'Строка 3'
      }
    ]

    vm.data = [
      {
        value: 'Данные 1'
      },
      {
        value: 'Данные 2'
      },
      {
        value: 'Данные 3'
      }
    ]

  }])