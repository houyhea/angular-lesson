(function() {
  "use strict";

  angular.module("demo").controller("SendBoxController", ctrl);

  /** @ngInject */
  function ctrl($rootScope,$scope, $timeout, webDevTec, toastr, $http) {
    $scope.input = {
      msg: ""
    };
    $scope.send = function() {
      if(!$scope.input.msg){
        toastr.info("请输入内容");
        return;
      }
      if (!$rootScope.chatRecords) $rootScope.chatRecords = [];
      var newMsg = {
        id: 1900,
        content: {
          msgId: "pc" + new Date().getTime(),
          userInfo: {
            name: "coco",
            userId: "1000_1578",
            head:
              "http://hs-album-test.oss.aliyuncs.com/static/94/3b/5f/image/20170418/20170418161825_15009.jpg",
            userType: "pc"
          },
          body: {
            message: $scope.input.msg,
            type: "text"
          }
        },
        createTime: moment().format("YYYY-MM-DD HH:mm:ss"),
        fromFans: false,
        cusName: "coco",

        msgType: "text",
        cusId: 1578
      };
      $rootScope.chatRecords.push(newMsg);  
    };
  }
})();
