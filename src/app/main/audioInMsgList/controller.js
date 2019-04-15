'use strict';

angular.module('demo')
  .controller('audioInMsgListController', ['$scope',  '$timeout', '$interval', '$rootScope', 
    function ($scope, $timeout, $interval, $rootScope) {
      $scope.maxWidth = 400;
      $scope.getWidth = function () {
        var width = $scope.options.time * $scope.maxWidth / 60;//最长60秒
        return Math.min(400, Math.max(50, width));
      }
      $scope.playing = true;
      $scope.updateMsgImg = function () {
        switch ($scope.float) {
          case "left":
            $scope.imgSrc = $scope.playing ? "/app/assets/images/audioPlaying-left.gif" : "/app/assets/images/audioStop-left.png";
            break;
          case "right":
            $scope.imgSrc = $scope.playing ? "/app/assets/images/audioPlaying-right.gif" : "/app/assets/images/audioStop-right.png";
            break;
        }
      };
      $scope.play = function () {
        if ($scope.pTimer) {
          $interval.cancel(scope.pTimer);
          $scope.pTimer = null;
        }

        $scope.playing = true;
        $scope.updateMsgImg();
        $scope.playTime = 0;
        $scope.audio[0].play();

      };
      $scope.stop = function () {

        //$scope.audio[0].load();
        $scope.audio[0].pause();
        $scope.playing = false;
        $scope.updateMsgImg();
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
      $scope.convertUrl=function(url){
        try{
          var ret=url.replace(/amr$/,'mp3');
          return ret;
        }
        catch(err){
          return url;
        }
      };
      $scope.$on('audio.msg.before.play', function (e, data) {
        if ($scope.uuidAudio != data.uuidAudio) {
          $scope.stop();
        }

      });
    }]);
