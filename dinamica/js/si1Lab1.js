/**
 * Created by Lucas on 23/04/2015.
 */

<!-- aqui vai o controller -->
<!-- carrega o módulo -->
var si1App = angular.module('si1App', []);

si1App.controller('si1Controller', function si1Controller($scope) {

    $scope.toLearn = [];

    $scope.learned = [];

    $scope.toLearnItem = "";

    $scope.learnedItem = "";

    $scope.addToLearn = function() {
        $scope.toLearn.push({name : $scope.toLearnItem});
        $scope.toLearnItem = "";
    }

    $scope.addLearned = function() {
        $scope.learned.push({name : $scope.learnedItem});
        $scope.learnedItem = "";
    }

    $scope.removeToLearn = function (index) {
        $scope.toLearn.splice(index, 1);
    };

    $scope.removeLearned = function (index) {
        $scope.learned.splice(index, 1);
    };

    $scope.moveToLearn = function (index) {
        $item = $scope.toLearn[index].name;
        $scope.removeToLearn(index);
        $scope.learnedItem = $item;
        $scope.addLearned();
        addLearned();
    }

    $scope.moveLearned = function (index){
        $item = $scope.learned[index].name;
        $scope.removeLearned(index);
        $scope.toLearnItem = $item;
        $scope.addToLearn();
        addToLearn();
    }
});