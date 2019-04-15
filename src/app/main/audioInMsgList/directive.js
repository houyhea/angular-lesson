'use strict';

angular.module('demo').directive('audioInMsgList', ['$rootScope', '$interval', 'Utils','$timeout',
  function($rootScope, $interval, Utils,$timeout) {
    return {
      restrict: 'A',
      replace: true,
      scope: {
        options: "=",
        msg: "=?",
        float: "@"
      },
      controller: "audioInMsgListController",
      templateUrl: "/app/main/audioInMsgList/audioInMsgList.html",
      link: function(scope, element, attrs) {
        scope.uuidAudio = Utils.uuid();
        scope.playTime = 0;
        scope.playing = false;
        scope.audio = element.find('audio');

        scope.updateMsgImg();


        $(scope.audio[0]).on('loadedmetadata', function() {
          if (!scope.options.time) {
            scope.options.time = Math.ceil(scope.audio[0].duration);
          }
          if (scope.msg && scope.msg.captureDuration) {
            //这里触发音频消息的发送.
            scope.$emit("captureAudioDuration", {
              duration: Math.ceil(scope.audio[0].duration),
              msg: scope.msg
            });
          }
        });
        $(scope.audio[0]).on('ended', function() {
          $timeout(function() {
            scope.playing = false;
            scope.updateMsgImg();
          });
        });

      }
    };
  }
]);
