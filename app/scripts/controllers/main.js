'use strict';

/**
 * @ngdoc function
 * @name itunesSearchApiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the itunesSearchApiApp
 */


angular.module('itunesSearchApiApp')
  .controller('MainCtrl', ['$scope', 'Search', function ($scope, Search) {

    $scope.favourites = [];
    $scope.haveFav = false;

    $scope.doSearch = function(searchTerm) {
      Search.query(searchTerm)
        .then(function(response) {
          if (response.data.results.length < 1) {
            $scope.noResults = true;
          } else {
          $scope.searchResult = response.data;
          $scope.noResults = false;
          }
      });
    };

    $scope.addFav = function(result) {
      if($scope.favourites.length === 0) {
        $scope.favourites.push(result);
        $scope.haveFav = true;
      } else {
        var i;
        var alreadyExists = false;
        for (i = 0; i < $scope.favourites.length; i++) {
          if ($scope.favourites[i].trackId === result.trackId) {
            alreadyExists = true;
            break;
          }
        }
        if (!alreadyExists){
            $scope.favourites.push(result);
        }
      }
    };

    $scope.delFav = function(array, index){
      array.splice(index, 1);
      if ($scope.favourites.length === 0) {
        $scope.haveFav = false;
      }
    };
  }]);
