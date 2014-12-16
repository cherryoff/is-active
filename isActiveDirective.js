(function(){
    "use strict";
    
    var isActiveDirective = function(){
        return {
            restrict: 'A',
            link: function (scope, element, attributes) {
                var current_path = window.location.pathname.split('/')[1];
                var href = element.find('a').attr('href');
                if ((current_path != '' && href.indexOf(current_path) > -1)||(window.location.href == href)){
                    element.addClass('active');
                }
            }
        }
    };

    angular
        .module('commonModule', [])
        .directive('isActive', [isActiveDirective]);
})();
