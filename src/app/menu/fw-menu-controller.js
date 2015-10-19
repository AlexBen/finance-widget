angular.module('finance-widget').controller('MenuController',
    function ($scope, $timeout, $mdSidenav, $log, fwMdComponents) {

        $log.debug($scope.$parent);

        const filterExtension = {

                'BYR': {
                    sumMin: 1000000,
                    sumMax: 100000000,
                    sumStep: 100000,
                    termMin: 30,
                    termMax: 360,
                    termStep: 30
                },
                'USD': {
                    sumMin: 100,
                    sumMax: 10000,
                    sumStep: 10,
                    termMin: 30,
                    termMax: 360,
                    termStep: 30
                },
                'EUR': {
                    sumMin: 100,
                    sumMax: 10000,
                    sumStep: 10,
                    termMin: 30,
                    termMax: 360,
                    termStep: 30
                }


        };

        $scope.getFilter = function(filterType) {
          return $scope.$parent.filters[filterType];
        };

        var getFromExtension = function(property) {
            return filterExtension[$scope.getFilter('currency')][property];
        };

        $scope.getTermMin = function() {
            return getFromExtension('termMin');
        };

        $scope.getTermMax = function() {
            return getFromExtension('termMax');
        };

        $scope.getTermStep = function() {
            return getFromExtension('termStep');
        };

        $scope.close = function () {
            $mdSidenav(fwMdComponents.MENU_ID).close()
                .then(function () {
                    $log.debug("close " + fwMdComponents.MENU_ID + " is done");
                });
        };
    });