(function() {
  'use strict';

  angular
    .module('demo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    });

    $stateProvider.state('app', {
      abstract:true,
      url: '/app',
      templateUrl: 'app/app.html',
      controller: 'AppController',
      resolve:{
        
        login: function ($cookies,$rootScope,$state,toastr) { 
          if(!$rootScope.user)
          {
            toastr.info("登录失效，请重新登录");
            throw {type:"token-invalid"};
          }
          return true;
        } 
    
      }
    })
      .state('app.main', {
        url: '/main',
        views:{
          top:{
            templateUrl: 'app/main/top.html',
            controller: 'TopController',
            
          },
          left:{
            templateUrl: 'app/main/left.html',
            controller: 'LeftController',
            
          },
          chatList:{
            templateUrl: 'app/main/chatList.html',
            controller: 'ChatListController',
          },
          sendBox:{
            templateUrl: 'app/main/sendBox.html',
            controller: 'SendBoxController',
          },
        }
        
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
