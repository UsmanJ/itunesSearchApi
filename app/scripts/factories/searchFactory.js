'use strict';

angular.module('itunesSearchApiApp')
  .factory('Search', ['$http', function($http){
    var queryUrl = 'https://itunes.apple.com/search?';
    return {
      query: function(searchTerm){
        return $http({
          url: queryUrl,
          method: 'GET',
          params: {
               'term': searchTerm,
               'country': 'US',
               'limit': 10,
               'callback': ''
            },
        });
      }
    };
  }]);
