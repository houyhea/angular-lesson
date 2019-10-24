(function () {
  'use strict';

  angular
    .module('demo')
    .controller('angularController', angularController);

  /** @ngInject */
  function angularController($rootScope,$scope,$timeout, webDevTec, toastr, $http,$state,$cookies) {
    
    $scope.com={
      name:""
    };  

    /**
     * 这里切换com.name参数，触发angular.html模板里dynamic-dir指令的动态编译。
     */
    $scope.changeDir=function(dir){
        $scope.com.name=dir;
    }
  }
})();
