'use strict';

/**
 * @ngdoc function
 * @name itunesSearchApiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the itunesSearchApiApp
 */


angular.module('itunesSearchApiApp')
  .controller('MainCtrl', ['$scope', 'Search', '$window', function ($scope, Search, $window) {

    $scope.favourites = [];
    $scope.haveFav = false;

    $scope.doSearch = function(searchTerm) {
      Search.query(searchTerm)
        .then(function(response) {
          var numberOfResults = response.data.results.length;
          if (numberOfResults < 1) {
            $scope.noResults = true;
          } else {
          $scope.searchResult = response.data;
          $scope.noResults = false;
          }
      });
    };

    $scope.openLink = function(result) {
      $window.open(result.previewUrl);
    };

    $scope.addFav = function(result) {
      if($scope.favourites.length === 0) {
        $scope.favourites.push(result);
        $scope.haveFav = true;
      } else {
        var i;
        var alreadyExists = false;
        for (i = 0; i < $scope.favourites.length; i++) {
          var favouriteTrackId =  $scope.favourites[i].trackId;
          if ( favouriteTrackId === result.trackId) {
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
