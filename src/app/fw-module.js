var moduleName = 'finance-widget';

var angularModule = angular.module(moduleName, ['ngMaterial', require('angular-messages')]);

angularModule.constant('fwMdComponents', {
    MENU_ID: 'fw-md-menu'
});


require('./main/fw-application-controller');
require('./menu/fw-menu-controller');
require('./temp-stuff/icons-stuff')(moduleName);

module.exports = function (elementId) {
    var element = document.getElementById(elementId);
    angular.bootstrap(element, [moduleName]);
};