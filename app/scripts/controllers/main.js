'use strict';

/**
 * @ngdoc function
 * @name itunesSearchApiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the itunesSearchApiApp
 */


angular.module('itunesSearchApiApp')
  .controller('MainCtrl', ['Search', function (Search) {

    var self = this;

    self.doSearch = function() {
      if (self.searchTerm) {
        Search.query(self.searchTerm)
          .then(function(response) {
            self.searchResult = response.data;
            console.log(response.data);
            // if (response.data === null) {
            //   var noResults = true;
            // };
        });
      }
    };
  }]);
