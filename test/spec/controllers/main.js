'use strict';

describe('The application', function () {

  beforeEach(module('itunesSearchApiApp'));

  var MainCtrl,
    scope,
    Search;

  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    Search = $injector.get('Search');
    var success = function(func) {
      return func({resultCount: 1});
    };

    spyOn(Search, 'query').and.returnValue({success: success});
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });

    }));

    beforeEach(function(){
      Search.query.and.returnValue({then: function(callback){callback( {data: favSong});
      }});
    });

    var array = [];
    var searchTerm = 'jack johnson';
    var favSong = {'resultCount': 10, 'results': [
      {'wrapperType':'track', 'kind':'song', 'artistId':909253, 'collectionId':879273552, 'trackId':879273565, 'artistName':'Jack Johnson',
      'collectionName':'In Between Dreams', 'trackName':'Better Together', 'collectionCensoredName':'In Between Dreams', 'trackCensoredName':'Better Together',
      'artistViewUrl':'https://itunes.apple.com/us/artist/jack-johnson/id909253?uo=4', 'collectionViewUrl':'https://itunes.apple.com/us/album/better-together/id879273552?i=879273565&uo=4',
      'trackViewUrl':'https://itunes.apple.com/us/album/better-together/id879273552?i=879273565&uo=4', 'previewUrl':'http://a898.phobos.apple.com/us/r1000/039/Music6/v4/13/22/67/1322678b-e40d-fb4d-8d9b-3268fe03b000/mzaf_8818596367816221008.plus.aac.p.m4a',
      'artworkUrl30':'http://is3.mzstatic.com/image/thumb/Music2/v4/a2/66/32/a2663205-663c-8301-eec7-57937c2d0878/source/30x30bb.jpg', 'artworkUrl60':'http://is3.mzstatic.com/image/thumb/Music2/v4/a2/66/32/a2663205-663c-8301-eec7-57937c2d0878/source/60x60bb.jpg',
      'artworkUrl100':'http://is3.mzstatic.com/image/thumb/Music2/v4/a2/66/32/a2663205-663c-8301-eec7-57937c2d0878/source/100x100bb.jpg', 'collectionPrice':8.99, 'trackPrice':1.29, 'releaseDate':'2014-05-27T07:00:00Z', 'collectionExplicitness':'notExplicit',
      'trackExplicitness':'notExplicit', 'discCount':1, 'discNumber':1, 'trackCount':15, 'trackNumber':1, 'trackTimeMillis':207679, 'country':'USA', 'currency':'USD', 'primaryGenreName':'Rock', 'radioStationUrl':'https://itunes.apple.com/station/idra.879273565', 'isStreamable':true}
    ]};

    it('should result in songs which have the same name', function () {
      scope.doSearch(searchTerm);
      expect(scope.searchResult.results.length).toEqual(1);
    });

    it('should call to itunes to get list of songs', function () {
      scope.doSearch(searchTerm);
      expect(Search.query).toHaveBeenCalledWith(searchTerm);
    });

    it('should add a song to favourites if addFav is called', function () {
      scope.addFav(favSong);
      expect(scope.favourites[0]).toEqual(favSong);
    });

    it('should delete from favourites if delFav is called', function () {
      scope.addFav(favSong);
      scope.delFav(array, 0);
      expect(scope.favourites.length).toEqual(1);
    });

    it( 'should test window open event', inject( function( $window ) {
        spyOn( $window, 'open' ).and.callFake( function() {
            return true;
        } );
        scope.doSearch(searchTerm);
        scope.openLink(favSong.results[0]);
        expect( $window.open ).toHaveBeenCalled();
        expect( $window.open ).toHaveBeenCalledWith( 'http://a898.phobos.apple.com/us/r1000/039/Music6/v4/13/22/67/1322678b-e40d-fb4d-8d9b-3268fe03b000/mzaf_8818596367816221008.plus.aac.p.m4a' );
    } ) );
});
