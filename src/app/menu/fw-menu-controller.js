angular.module('finance-widget').controller('LeftCtrl',
    function ($scope, $timeout, $mdSidenav, $log, fwMdComponents) {

    $scope.close = function () {
        $mdSidenav(fwMdComponents.MENU_ID).close()
            .then(function () {
                $log.debug("close " + fwMdComponents.MENU_ID + " is done");
            });
    };
});