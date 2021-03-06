(function () {
  'use strict';

  angular
    .module('demo')
    .controller('ChatListController', ctrl);

  /** @ngInject */
  function ctrl($rootScope,$scope,$timeout, webDevTec, toastr, $http) {
    $scope.getList=function(){
      $rootScope.chatRecords=[{
        "id": 1,
        "content": {
          "msgId": "pc20171016104559849",
          "userInfo": {
            "name": "coco",
            "userId": "1000_1578",
            "head": "http://hs-album-test.oss.aliyuncs.com/static/94/3b/5f/image/20170418/20170418161825_15009.jpg",
            "userType": "pc"
          },
          "body": {
            "message": "334",
            "type": "text"
          }
        },
        "createTime": "2017-10-16 10:47:40",
        "fromFans": false,
        "cusName": "coco",
        "pid": 1000,
        "msgType": "text",
        "cusId": 1578
      },  {
        "id": 2,
        "content": {
          "msgId": "wx1508121150738",
          "userInfo": {
            "name": "houyhea",
            "userId": "1000_2141",
            "head": "http://wx.qlogo.cn/mmopen/iccEUrG5xQZXKzs2pY5hWB6ic09pYKAJKBZ5OjK2IAl779DpnGr4Wgw8qCpBVRWxiaQYHCCqb0xJqW7bgGAg9qu7g/0",
            "userType": "wx"
          },
          "body": {
            "message": {
              "time": "2",
              "otherurl": "http://devpicserver-1252328573.cossh.myqcloud.com/kf/f2baa18880184ecb8485046ce6574aa1.mp3",
              "format": "mp3",
              "url": "http://devpicserver-1252328573.cossh.myqcloud.com/kf/abe285de1aad40e0bc9a187771d18f11.amr"
            },
            "type": "voice"
          }
        },
        "createTime": "2017-10-16 10:32:31",
        "fromFans": true,
        "cusName": "coco",
        "pid": 1000,
        "msgType": "voice",
        "cusId": 1578
      },  {
        "id": 3,
        "content": {
          "msgId": "pc20171212184406448",
          "userInfo": {
            "name": "贾洪建",
            "userId": "1000_1569504",
            "head": "http://hs-album-test.oss.aliyuncs.com/static/94/3b/5f/image/20170418/20170418161825_15009.jpg",
            "userType": "pc"
          },
          "body": {
            "message": {
              "url": "https://image-c-dev.weimobwmc.com/kf/8872cfe531024deabb6139aff0858c79.jpg"
            },
            "type": "image"
          }
        },
        "createTime": "2017-12-12 18:44:07",
        "fromFans": false,
        "cusName": "贾洪建",
        "pid": 1000,
        "msgType": "image",
        "cusId": 1569504
      }, {
        "id": 4,
        "content": {
          "msgId": "wx1513951878158",
          "userInfo": {
            "name": "houyhea",
            "userId": "100000000901_1016137458",
            "head": "http://wx.qlogo.cn/mmopen/mfqZicYJ9fUicpyiaT6jNwgCEEEz0yqHev6ZaBIibrnyvJ44KqUJzXQZ97tNdRH2pKWkvOVmHYfEpQPhNLUOiaegQ9g/0",
            "userType": "wx"
          },
          "body": {
            "message": {
              "time": 0,
              "thumbnailUrl": "https://image-c.weimobwmc.com/kf/1b04393bf6034f648c7ba4bbe1acff67.jpg",
              "format": "mp4",
              "url": "https://c.weimobwmc.com/kf/77bb2d6ed53b40d3b517369ac2bc60f7.mp4"
            },
            "type": "video"
          }
        },
        "createTime": "2017-12-22 22:11:19",
        "fromFans": true,
        "cusName": "paris",
        "pid": 100000000901,
        "msgType": "video",
        "cusId": 1006246792
      }]
    }

    $scope.getList();
  }
})();
