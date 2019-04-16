'use strict';

angular.module('demo').directive('audioInMsgList', ['$rootScope', '$interval', 'Utils','$timeout',
  function($rootScope, $interval, Utils,$timeout) {
    return {
      restrict: 'A',
      replace: true,
      scope: {
        msg: "=",
        
      },
      controller: "audioInMsgListController",
      templateUrl: "/app/main/audioInMsgList/tpl.html",
      link: function(scope, element, attrs) {
        scope.uuidAudio = Utils.uuid();
        scope.playTime = 0;
        scope.playing = false;
        scope.audio = element.find('audio');



        $(scope.audio[0]).on('loadedmetadata', function() {
          if (!scope.msg.time) {
            scope.msg.time = Math.ceil(scope.audio[0].duration);
          }
          
        });
        $(scope.audio[0]).on('ended', function() {
          $timeout(function() {
            scope.playing = false;
            
          });
        });

      }
    };
  }
]);
