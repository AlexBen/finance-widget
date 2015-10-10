angular.module('finance-widget').controller('FinanceWidgetController',
    function ($scope, $timeout, $mdSidenav, $mdUtil, $log, fwMdComponents, $http) {

        $scope.debets = [];

        $http.get('debets', {
            contentType: 'application/json'
        }).then(function(resp){
            $log.debug(resp);
            $scope.debets = resp.data;
        });

        $scope.filters = {
            currency: 'BYR'
        };

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