(function(app) {
    // 
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/stage');
    });

    // Start Angular
    app.run(function () {

    });

    // Define main application controller
    app.controller('AppController', function ($scope) {

    });

}(angular.module("oneFootball", [
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
    'oneFootball.stage',
])));
