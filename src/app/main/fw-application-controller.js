import mapKeys from  'lodash';

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

        $scope.filtersCollection = [];

        $scope.$watchCollection('filters', function(newValue) {
            var arr = [];
            Object.keys($scope.filters).forEach( function(key) {
                var val = $scope.filters[key];
                arr.push({key: key, value: val});
            });
            $scope.filtersCollection = arr;
        });

        $scope.removeFilter = function(key) {
            delete $scope.filters[key];
        };


        $scope.filterFunction = function(entry) {
            if ($scope.filters.currency) {
                if (entry.currency != $scope.filters.currency){
                    return false;
                }
            }
            return true;
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