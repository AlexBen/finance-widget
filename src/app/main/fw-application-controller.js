angular.module('finance-widget').controller('AppCtrl',
    function ($scope, $timeout, $mdSidenav, $mdUtil, $log, fwMdComponents) {

        $scope.toggleMenu = buildToggler(fwMdComponents.MENU_ID);

        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildToggler(navID) {
            var debounceFn = $mdUtil.debounce(function () {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }, 200);
            return debounceFn;
        }
    });