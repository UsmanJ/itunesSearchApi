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
              'callback': 'JSON_CALLBACK',
               'term': searchTerm
            },
            paramsSerializer: function(param) {
              return param;
            }
          }).success(function (data) {
                          console.log(data);
        });
      }
    };
  }]);
