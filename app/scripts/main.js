(function() {
  'use strict';
  angular.module('foxApp', [])
    .controller('FoxController', FoxController);

  FoxController.$inject = ['$scope']; //prevents minifiers from breaking the code
  function FoxController ($scope) {
    $scope.active = true;
    $scope.foxes = [
      {
        src: "https://s-media-cache-ak0.pinimg.com/736x/7e/fd/79/7efd7995deb5d88c7baeda5dccd9e31a.jpg"
      },
      {
        src: "https://s-media-cache-ak0.pinimg.com/originals/ac/09/a6/ac09a6c4cf1096277e1295c5db9bc70e.jpg"
      }
    ];
  }
})();
