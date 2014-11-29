'use strict';

(function (angular) {
    var LOW = false;
    var HIGH = true;

    angular
        .module('ledApp', [])
        .constant('matrixConfig', {
            length: 8
        })
        .controller('MainCtrl', function ($scope) {
            $scope.test = 'test';
        })
        .directive('matrix', function () {
            return {
                restrict: 'E',
                scope: true,
                templateUrl: 'matrix.html',
                replace: true,
                controller: function ($scope, matrixConfig) {
                    function initMatrix() {
                        var matrix = new Array(matrixConfig.length);

                        for (var i = 0; i < matrix.length; i++) {
                            matrix[i] = new Array(matrixConfig.length);

                            for (var j = 0; j < matrix[i].length; j++) {
                                matrix[i][j] = LOW;
                            }
                        }

                        return matrix;
                    }

                    $scope.matrix = initMatrix();
                },
                link: function (scope, elem, attrs) {

                }
            }
        })
        .directive('led', function () {
            return {
                restrict: 'E',
                scope: {
                    value: '='
                },
                replace: true,
                templateUrl: 'led.html',
                link: function (scope, elem, attr) {
                    scope.toggle = function () {
                        scope.value = !scope.value;
                    }
                }
            }
        })
})(angular);