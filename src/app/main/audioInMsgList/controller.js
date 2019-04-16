'use strict';

angular.module('demo')
  .controller('audioInMsgListController', ['$scope',  '$timeout', '$interval', '$rootScope', 
    function ($scope, $timeout, $interval, $rootScope) {
      
      $scope.playing = true;
      
      $scope.play = function () {
        if ($scope.pTimer) {
          $interval.cancel(scope.pTimer);
          $scope.pTimer = null;
        }

        $scope.playing = true;
        
        $scope.playTime = 0;
        $scope.audio[0].play();

      };
      $scope.stop = function () {

        //$scope.audio[0].load();
        $scope.audio[0].pause();
        $scope.playing = false;
        
      };

      $scope.clickAudio=function(){
        if ($scope.playing) {
          $scope.stop();
        }
        else {
          $rootScope.$broadcast("audio.msg.before.play", {uuidAudio: $scope.uuidAudio});
          $scope.play();
        }
      };
      
      $scope.$on('audio.msg.before.play', function (e, data) {
        if ($scope.uuidAudio != data.uuidAudio) {
          $scope.stop();
        }

      });
    }]);
