angular.module('templates-app', ['stage/stage.tpl.html']);

angular.module("stage/stage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("stage/stage.tpl.html",
    "<div class=\"knockout\">\n" +
    "    <div class=\"row round\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <h1>OneFootball Stage Visualizer</h1>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row round\">\n" +
    "        <div class=\"col-md-3\" ng-repeat=\"(count, initial) in initials\" ng-if=\"count < 4\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-6\" ng-repeat=\"half in initial\">\n" +
    "                    <div class=\"game\">{{ half.teamHome.name }} - {{ half.teamAway.name }}</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row round\">\n" +
    "        <div class=\"col-md-3\" ng-repeat=\"(count, octave) in octaves\" ng-if=\"count < 4\">\n" +
    "            <div class=\"game\">{{ octave.teamHome }} - {{ octave.teamAway }}</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row round\">\n" +
    "        <div class=\"col-md-6\" ng-repeat=\"(count, quarter) in quarters\" ng-if=\"count < 2\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-6 col-md-offset-3\">\n" +
    "                    <div class=\"game\">{{ quarter.teamHome }} - {{ quarter.teamAway }}</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row round\">\n" +
    "        <div class=\"col-md-6 col-md-offset-3\" ng-repeat=\"(count, semiFinal) in semiFinals\" ng-if=\"count < 1\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-6 col-md-offset-3\">\n" +
    "                    <div class=\"game\">{{ semiFinal.teamHome }} - {{ semiFinal.teamAway }}</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row round\">\n" +
    "        <div class=\"col-md-6 col-md-offset-3\" ng-repeat=\"fin in final\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-6 col-md-offset-3\">\n" +
    "                    <div class=\"game\">{{ fin.teamHome }} - {{ fin.teamAway }}</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row round\">\n" +
    "        <div class=\"col-md-6 col-md-offset-3\" ng-repeat=\"(count, semiFinal) in semiFinals\" ng-if=\"count >= 1\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-6 col-md-offset-3\">\n" +
    "                    <div class=\"game\">{{ semiFinal.teamHome }} - {{ semiFinal.teamAway }}</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row round\">\n" +
    "        <div class=\"col-md-6\" ng-repeat=\"(count, quarter) in quarters\" ng-if=\"count >= 2\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-6 col-md-offset-3\">\n" +
    "                    <div class=\"game\">{{ quarter.teamHome }} - {{ quarter.teamAway }}</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row round\">\n" +
    "        <div class=\"col-md-3\" ng-repeat=\"(count, octave) in octaves\" ng-if=\"count >= 4\">\n" +
    "            <div class=\"game\">{{ octave.teamHome }} - {{ octave.teamAway }}</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row round\">\n" +
    "        <div class=\"col-md-3\" ng-repeat=\"(count, initial) in initials\" ng-if=\"count >= 4\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-6\" ng-repeat=\"half in initial\">\n" +
    "                    <div class=\"game\">{{ half.teamHome.name }} - {{ half.teamAway.name }}</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
