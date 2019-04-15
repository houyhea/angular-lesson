(function () {
  'use strict';

  angular
    .module('demo')
    .factory('Utils', func);

  /** @ngInject */
  function func($log, $http) {
    function _uuid() {
      function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      }

      return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }
    return {
      uuid: _uuid
    }
  }
})();