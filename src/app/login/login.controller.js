(function () {
  'use strict';

  angular
    .module('demo')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($rootScope,$scope,$timeout, webDevTec, toastr, $http,$state,$cookies) {
      $scope.input={
        userName:"",
        pwd:""
      };
      $scope.clickLogin=function(){
        var ret=checkInput();
        if(ret){
          toastr.error(ret,null,{preventDuplicates:false});

          return;
        }
        $cookies.put("token","xxxx");
        $rootScope.user={
          userName:$scope.input.userName
        };
        $state.go("app.main");
      }
      function checkInput(){
        if(!$scope.input.userName){
          return "请输入用户名";
        }
        if(!$scope.input.pwd){
          return "请输入密码";
        }
        return "";
      }
  }
})();
