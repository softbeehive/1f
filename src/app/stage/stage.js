/*
  Each section of the site has its own module. Additional folders representing
  dependent modules should be listed as dependencies of this one.
*/
(function(module) {
  /*
    Stage - stands for tournament leg, part of the competion

    As you add controllers to a module and they grow in size, feel free to
    place them in their own files.
    
    Let each module grow organically, adding appropriate organization and
    sub-folders as needed.
  */
  module.controller('StageController', function ($scope, $http) {
    /*
      The top section of a controller should be lean and make it easy to see the
      "signature" of the controller at a glance.  All function definitions
      should be contained lower down.
    */

    init();

    // Module's public methods
    var stage = this;
    stage.download = download;
    stage.final = final;
    stage.pure = pureStage;

    function init() {
      /*
        A definitive place to put everything that needs to run when the 
        controller starts. Avoid writing any code outside of this function that
        executes immediately.
      */
    }

    // All stages data getter
    function download(url) {
      $http.get(url)
        .success(function(data, status, headers, config) {
          // called asynchronously when the response is available
          $scope.matches = data;
          $scope.final = stage.final();
          $scope.semiFinals = stage.pure($scope.final);
          $scope.quarters = stage.pure($scope.semiFinals);
          $scope.octaves = stage.pure($scope.quarters);
        })
        .error(function(data, status, headers, config) {
          // called asynchronously when the response is available
        });

      return $scope.matches;
    }

    /*
      Since I don't want to hadcode any key names to get data on final match
      I iterate over objects and save them as array elements.
    */
    function final() {
      var finalPool = [];

      if (typeof $scope.matches !== 'undefined') {
        angular.forEach($scope.matches, function(value, key) {
          finalPool.push(value);
        });
      }

      /*
        Returns [Object] where Object is set of data for certain
        game and its history within tournament
      */
      return finalPool;
    }

    /*
      Extracts all children of given array of stage objects, this way data
      could be isolated, which makes its manipulation easier.
    */
    function pureStage(parentStage) {
      var stagePool = [];

      /*
        Data driven iterations below have min amount of checks to be sure that
        its integrity were not violated.
      */
      if (typeof parentStage !== 'undefined') {
        angular.forEach(parentStage, function(value, key) {
          if (value.hasOwnProperty('children')) {
            // Loop inside loop because we need all data related to stage
            angular.forEach(value.children, function(v, k) {
              stagePool.push(v);
            });
          }
        });
      }

      /*
        Returns [Object, Object, ...] where Object is set of data for certain
        game and its history within tournament
      */
      return stagePool;
    }

  });

/*
  The name of the module, followed by its dependencies (at the bottom to
  facilitate enclosure)
*/
}(angular.module("oneFootball.stage")));
