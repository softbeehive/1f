angular.module('templates-app', ['stage/stage.tpl.html']);

angular.module("stage/stage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("stage/stage.tpl.html",
    "<div class=\"\">\n" +
    "    \n" +
    "    <h1>OneFootball Stage Visualizer</h1>\n" +
    "    <button class=\"btn btn-success btn-default\" ng-click=\"stage.download('/assets/data/brackets.json')\">\n" +
    "        Start\n" +
    "    </button>\n" +
    "    <div class=\"row round no-mobile\">\n" +
    "        <div class=\"col-md-12\" ng-repeat=\"(count, octave) in octaves\" ng-if=\"count < 4\">\n" +
    "            {{ octave.teamHome }} vs {{ octave.teamAway }}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row round\">\n" +
    "        <div class=\"col-md-12\" ng-repeat=\"(count, quarter) in quarters\" ng-if=\"count < 2\">\n" +
    "            {{ quarter.teamHome }} vs {{ quarter.teamAway }}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row round\">\n" +
    "        <div class=\"col-md-12\" ng-repeat=\"(count, semiFinal) in semiFinals\" ng-if=\"count < 1\">\n" +
    "            {{ semiFinal.teamHome }} vs {{ semiFinal.teamAway }}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row round\">\n" +
    "        <div class=\"col-md-4 col-md-offset-4\" ng-repeat=\"fin in final\">\n" +
    "            {{ fin.teamHome }} vs {{ fin.teamAway }}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row round\">\n" +
    "        <div class=\"col-md-12\" ng-repeat=\"(count, semiFinal) in semiFinals\" ng-if=\"count >= 1\">\n" +
    "            {{ semiFinal.teamHome }} vs {{ semiFinal.teamAway }}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row round\">\n" +
    "        <div class=\"col-md-12\" ng-repeat=\"(count, quarter) in quarters\" ng-if=\"count >= 2\">\n" +
    "            {{ quarter.teamHome }} vs {{ quarter.teamAway }}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row round\">\n" +
    "        <div class=\"col-md-12\" ng-repeat=\"(count, octave) in octaves\" ng-if=\"count >= 4\">\n" +
    "            {{ octave.teamHome }} vs {{ octave.teamAway }}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
