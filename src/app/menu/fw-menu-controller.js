angular.module('finance-widget').controller('MenuController',
    function ($scope, $timeout, $mdSidenav, $log, fwMdComponents) {

        $log.debug($scope.$parent);

        $scope.filterExtension = {
            currency: {
                'BYR': {
                    sumMin: 1000000,
                    sumMax: 100000000,
                    sumStep: 100000
                },
                'USD': {
                    sumMin: 100,
                    sumMax: 9999

                }

            }
        };

        var getFromExtension = function(property) {
            return $scope.filterExtension.currency[$scope.$parent.filters.currency][property];
        };

        $scope.getSumMin = function() {
            return getFromExtension('sumMin');
        };

        $scope.getSumMax = function() {
            return getFromExtension('sumMax');
        };

        $scope.getSumStep = function() {
            return getFromExtension('sumStep');
        };

        $scope.close = function () {
            $mdSidenav(fwMdComponents.MENU_ID).close()
                .then(function () {
                    $log.debug("close " + fwMdComponents.MENU_ID + " is done");
                });
        };
    });