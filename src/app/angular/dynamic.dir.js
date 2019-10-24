'use strict';
/**
 * 后面的pageList、pageDetail是两个备用的指令，会被dynamicDir指令动态启动。
 */

angular.module('demo').directive('dynamicDir', ['$rootScope', '$interval', 'Utils', '$timeout', '$compile',
  function ($rootScope, $interval, Utils, $timeout, $compile) {
    return {
      restrict: 'A',

      link: function (scope, element, attrs) {
        var templateScope;
        /**
         * 当表达式检测出变化后，利用$compile编译传进来的指令，生成live dom.
         * 编译的作用就是使传进来的指令启动，手机watcher，加到脏值检查，形成自动绑定。
         * @param {*} dir 
         */
        function onDirChange(dir) {
          if (!dir) return;
          //这里必须要先清空，否则会叠加多个dom
          element.html("");
          if (!templateScope) {

            templateScope = scope.$new();
          }
          // var dir = scope.$eval(attrs.imLoading);
          var dom = "<div " + dir + "></div>";
          var templateElement = $compile(dom)(templateScope);
          element.append(templateElement);
        }
        /**
         * 通过手动添加监听表达式，表达式的字符串就是attrs.dynamicDir，也就是外面使用的时候<div dynamic-dir="com.nam"></div>
         * 的com.name.指令的scope定义中 “=”的本质就是创建一个$watcher。两者本质上是一样的。我这里这种写法会更灵活。
         */
        scope.$watch(attrs.dynamicDir, function (nv) {
          onDirChange(nv);
        });

      }
    };
  }
]).directive('pageList', ['$rootScope', '$interval', 'Utils', '$timeout', '$compile',
  function ($rootScope, $interval, Utils, $timeout, $compile) {
    return {
      restrict: 'A',
      template:"<div class='page-list'><span>pageList</span></div>",
      link: function (scope, element, attrs) {

      }
    };
  }
]).directive('pageDetail', ['$rootScope', '$interval', 'Utils', '$timeout', '$compile',
function ($rootScope, $interval, Utils, $timeout, $compile) {
  return {
    restrict: 'A',
    template:"<div class='page-detail'><span>pageDetail</span></div>",
    link: function (scope, element, attrs) {

    }
  };
}
])