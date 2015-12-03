/*
  Each module has a <moduleName>.module.js file. This file contains the 
  angular module declaration - angular.module("moduleName", []);
  The build system ensures that all the *.module.js files get included prior to
  any other .js files, which ensures that all module declarations occur before
  any module references.
*/
(function(module) {
  module.config(function ($stateProvider) {
    $stateProvider.state('stage', {
      url: '/stage',
      views: {
        "main": {
          controller: 'StageController as stage',
          templateUrl: 'stage/stage.tpl.html'
        }
      },
      data: {
        pageTitle: 'Stage of Tournament',
        pageDesc: 'Visualize the competion stage. Load, parse and render data'
      }
    });
  });

/*
  The name of the module, followed by its dependencies (at the bottom to
  facilitate enclosure)
*/
}(angular.module("oneFootball.stage", ['ui.router'])));
