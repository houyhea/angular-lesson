
(function () {
  'use strict';

  angular
    .module('demo')
    .controller('colorController', colorController);

  /** @ngInject */
  function colorController($rootScope,$scope,$timeout, webDevTec, toastr, $http,$state,$cookies) {
    $scope.input={
      color:""
    };  
    
  }
})();
