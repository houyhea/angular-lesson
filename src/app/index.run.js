(function () {
  'use strict';

  angular
    .module('demo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $log,$state) {

    $log.debug('runBlock end');
    $rootScope.$on('$stateChangeError',
      function (event, toState, toParams, fromState, fromParams, error) {
        switch (error.type) {
          case "token-invalid":
            $state.go("login");
            break;
        }
      })
  }

})();