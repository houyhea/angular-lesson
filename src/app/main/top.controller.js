(function () {
  'use strict';

  angular
    .module('demo')
    .controller('TopController', ctrl);
  /** @ngInject */
  function ctrl($scope,$state,$cookies) {
    
      $scope.logout=function(){
        if(confirm("确认退出？")){
          $cookies.remove("token");
          $state.go("login");
        }
      }

  }
})();
