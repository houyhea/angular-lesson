'use strict';

angular.module('demo').directive('videoInMsgList', ['$rootScope', '$interval', 'Utils', 
  function ($rootScope, $interval, Utils) {
    return {
      restrict: 'A',
      replace: true,
      scope: {
        options: "=",
        msg: "=?"
      },
      controller: "videoInMsgListController",
      templateUrl: "/app/main/videoInMsgList/tpl.html",
      link: function (scope, element, attrs) {
        scope.uuidVideo = Utils.uuid();

        scope.playing = false;
        scope.mouseEnter = false;
        scope.video = element.find('video');

        $(scope.video[0]).on('ended', function () {
          $timeout(function () {
            scope.playing = false;
          }, scope);
        });
        $(scope.video[0]).on('contextmenu', function () {
          return false;
        });
        // $(scope.video[0]).on('loadeddata', function () {
        //   if (scope.msg && scope.msg.captureThumbnail) {
        //     captureImage();
        //   }
        // });
        // function captureImage() {

        //   var canvas = document.createElement("canvas");
        //   canvas.width = scope.video[0].videoWidth;
        //   canvas.height = scope.video[0].videoHeight;
        //   canvas.getContext('2d')
        //     .drawImage(scope.video[0], 0, 0, canvas.width, canvas.height);

        //   canvas.toBlob(function (blob) {
        //     if(!blob){
        //       $toaster.error("视频读取失败！");
        //       scope.msg.msgStatus = "failure";
        //     }else{
        //       blob.name = "thumbnail.png";//需要起一个名字,否则上传的图片blob是一堆二进制数据;
        //       scope.$emit("newVideoThumbnail", {thumbnailBlob: blob, msg: scope.msg});
        //     }
            
        //     //var newImg = document.createElement("img"),
        //     //  url = URL.createObjectURL(blob);
        //     //
        //     //newImg.onload = function() {
        //     //  // no longer need to read the blob so it's revoked
        //     //  URL.revokeObjectURL(url);
        //     //};
        //     //
        //     //newImg.src = url;
        //     //document.body.appendChild(newImg);
        //   });

        //   //var img = document.createElement("img");
        //   //img.src = canvas.toDataURL();
        //   //var da=canvas.getImageData();
        //   //document.body.appendChild(img);
        // };

      }
    };
  }]);
