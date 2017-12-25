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
      template: '<div class="container" ui-view></div>',
      controller: 'AppController',
      controllerAs: 'app'
    })
      .state('app.main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).state('app.detail', {
        url: '/detail?id',
        templateUrl: 'app/detail/detail.html',
        controller: 'DetailController',
        controllerAs: 'detail'
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
