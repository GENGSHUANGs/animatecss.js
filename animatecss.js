(function(root, $, undefined) {
        'use strict';

        var removeclass = function(classname) {
                this.removeClass('animated ' + classname + ' animationend webkitAnimationEnd');
        };

        /**
        animate.css 支持
        arguments:classname[,donotremoveclass][,callback]
        如果 donotremoveclass 为 true ，则不删除 animated class ，防止闪屏
        如果该参数设置了true ，则在调用回调函数的时候，会传递一个手动删除 animated class 的函数，以便于主动删除
        usage:
        $(document.body).animatecss('zoomIn',true,function(removelcass){
		// ... 
		removeclass();
        });
	$(document.body).animatecss('zoomIn',function(){
		// ...
	});
        */
        $.fn.animatecss = function(classname) {
                var donotremoveclass = false,
                        callback = undefined;
                if (arguments.length == 2) {
                        var isfn = $.isFunction(arguments[1]);
                        if (isfn) {
                                callback = arguments[1];
                        } else {
                                donotremoveclass = arguments[1];
                        }
                } else if (arguments.length == 3) {
                        donotremoveclass = arguments[1];
                        callback = arguments[2];
                }
                return $(this).each(function() {
                        var $element = $(this);
                        // 浏览器兼容处理
                        $element.addClass('animated ' + classname).one('webkitAnimationEnd animationend', function() {
                                var removeclassfn = removeclass.bind($element, classname);
                                var args = [];
                                if (donotremoveclass !== true) {
                                        removeclassfn();
                                } else {
                                        args.push(removeclassfn);
                                }
                                (callback || function() {}).apply(undefined, args);
                        });
                });
        };
})(this, window.jQuery || window.Zepto);
