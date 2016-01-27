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

    $scope.doSearch = function(searchTerm) {
      if ($scope.searchTerm) {
        Search.query($scope.searchTerm)
          .then(function(response) {
            if (response.data.results.length < 1) {
              var noResults = true;
            } else {
            $scope.searchResult = response.data;
            }
        });
      }
    };
  }]);
