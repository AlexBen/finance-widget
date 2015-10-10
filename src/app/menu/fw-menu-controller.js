angular.module('finance-widget').controller('MenuController',
    function ($scope, $timeout, $mdSidenav, $log, fwMdComponents) {

        $log.debug($scope.$parent);

        $scope.close = function () {
            $mdSidenav(fwMdComponents.MENU_ID).close()
                .then(function () {
                    $log.debug("close " + fwMdComponents.MENU_ID + " is done");
                });
        };
    });