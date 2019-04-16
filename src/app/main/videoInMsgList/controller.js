'use strict';

angular.module('demo')
  .controller('videoInMsgListController', ['$scope',  '$timeout', '$interval', '$rootScope', 
    function ($scope, $timeout, $interval, $rootScope) {


      $scope.playing = false;
      $scope.onVideoDblclick=function(e){
        // if($scope.playing){
        //   $scope.pause();
        // }
        // else{
        //   $rootScope.$broadcast("video.msg.before.play",{uuidVideo:$scope.uuidVideo});
        // }
        // $rootScope.$broadcast("im.video.preview",{videoUrl:$scope.options.url});
        // e.preventDefault();
      };
      $scope.controlBtnClick = function () {
        if(!$scope.playing){
          $rootScope.$broadcast("video.msg.before.play",{uuidVideo:$scope.uuidVideo});
          $scope.play();
        }
        else{
          $scope.pause();
        }

      };
      $scope.play = function () {

        $scope.playing = true;

        $scope.video[0].play();
      };
      $scope.pause = function () {

        $scope.video[0].pause();
        $scope.playing = false;

      };
      //下载视频
      $scope.downloadVideo = function(){
        window.location.href = $scope.options.url;
      }
      $scope.$on('video.msg.before.play', function (e, data) {
        if ($scope.uuidVideo != data.uuidVideo) {
          $scope.pause();
        }
      });
    }]);
