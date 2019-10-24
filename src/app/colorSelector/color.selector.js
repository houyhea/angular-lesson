'use strict';
/**
 * 主要就是自己实现一个基于ngModel的表单性双向绑定的指令。
 * 外部使用的时候，就像是使用input这种输入型控件一样，具备双向绑定的能力。
 */
angular.module('demo').directive('colorSelector', ['$rootScope', '$interval', 'Utils', '$timeout', '$compile',
  function ($rootScope, $interval, Utils, $timeout, $compile) {
    return {
      restrict: 'A',
      require:"ngModel",//这句话是关键，要求依赖ngModel,从而在link函数里有ngModel控制器实例传入
      templateUrl:"/app/colorSelector/color.dir.html",
      link: function (scope, element, attrs,ngModel) {
        scope.colorList=["red","yellow","blue"];
        /**
         * 通过ngModel.$setViewValue  ngModel.$render 实现双向绑定闭环。
         * 然后外部就可以按照<div color-selector ng-model="color"></div>的形式使用。
         * colorSelector封装的是控件的交互，通过ng-model传递的是交互的结果值。
         */
        scope.itemClick=function(color){
          /**
           * 调用该方法，设置ngModeld $viewValue
           */
          ngModel.$setViewValue(color);
        }
        /**
         * 要自己实现ngModel.$render方法，主要就是根据$modelValue，自己决定如何渲染界面。
         */
        ngModel.$render = function () {
          setContent(ngModel.$modelValue || "");

        };
        function setContent(value){
          scope.currentColor=value;
        }
      }
    };
  }
]);