'use strict';

describe('Service: Search', function () {

  beforeEach(module('itunesSearchApiApp'));

  var Search, $httpBackend;

  beforeEach(inject(function ($injector) {
  	$httpBackend   = $injector.get('$httpBackend');
  	Search         = $injector.get('Search');
  }));

  afterEach(function() {
  	$httpBackend.verifyNoOutstandingExpectation();
  	$httpBackend.verifyNoOutstandingRequest();
  });

  it('should do something', function () {
    expect(!!Search).toBe(true);
  });

  it('should load the json', function() {
  	var searchData = {'resultCount': 1, 'results': [
      {'wrapperType':'track', 'kind':'song', 'artistId':909253, 'collectionId':879273552, 'trackId':879273565, 'artistName':'Jack Johnson',
      'collectionName':'In Between Dreams', 'trackName':'Better Together', 'collectionCensoredName':'In Between Dreams', 'trackCensoredName':'Better Together',
      'artistViewUrl':'https://itunes.apple.com/us/artist/jack-johnson/id909253?uo=4', 'collectionViewUrl':'https://itunes.apple.com/us/album/better-together/id879273552?i=879273565&uo=4',
      'trackViewUrl':'https://itunes.apple.com/us/album/better-together/id879273552?i=879273565&uo=4', 'previewUrl':'http://a898.phobos.apple.com/us/r1000/039/Music6/v4/13/22/67/1322678b-e40d-fb4d-8d9b-3268fe03b000/mzaf_8818596367816221008.plus.aac.p.m4a',
      'artworkUrl30':'http://is3.mzstatic.com/image/thumb/Music2/v4/a2/66/32/a2663205-663c-8301-eec7-57937c2d0878/source/30x30bb.jpg', 'artworkUrl60':'http://is3.mzstatic.com/image/thumb/Music2/v4/a2/66/32/a2663205-663c-8301-eec7-57937c2d0878/source/60x60bb.jpg',
      'artworkUrl100':'http://is3.mzstatic.com/image/thumb/Music2/v4/a2/66/32/a2663205-663c-8301-eec7-57937c2d0878/source/100x100bb.jpg', 'collectionPrice':8.99, 'trackPrice':1.29, 'releaseDate':'2014-05-27T07:00:00Z', 'collectionExplicitness':'notExplicit',
      'trackExplicitness':'notExplicit', 'discCount':1, 'discNumber':1, 'trackCount':15, 'trackNumber':1, 'trackTimeMillis':207679, 'country':'USA', 'currency':'USD', 'primaryGenreName':'Rock', 'radioStationUrl':'https://itunes.apple.com/station/idra.879273565', 'isStreamable':true}
    ]};
  	$httpBackend.whenGET('https://itunes.apple.com/search?&callback=&country=GB&term=jack+johnson').respond(function() {
  	  return [200, searchData];
  	});
    Search.query('jack johnson').success(function (data) {
      expect(data.resultCount).toBe(searchData.resultCount);
      expect(data.results.length).toBe(searchData.results.length);
    });
    $httpBackend.flush();
  });

});
