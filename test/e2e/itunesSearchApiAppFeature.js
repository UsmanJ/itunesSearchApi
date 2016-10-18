describe('itunes search api application', function() {

  var searchBox = element(by.css('.input'));
  var searchBtn = element(by.css('#searchBtn'));

  beforeEach(function() {
    browser.get('http://localhost:9000/#/');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('itunesSearchApiApp');
  });

  it('displays the results once the query is run', function() {
    searchBox.sendKeys('Adele');
    searchBtn.click();
    expect(element(by.className('results')).isDisplayed()).toBeTruthy();
  });

  it('displays an error message when no results are available', function() {
    searchBtn.click();
    browser.waitForAngular();
    expect(element(by.className('nill')).isDisplayed()).toBeTruthy();
  });

  it('has navigation bar with two buttons', function() {
    var buttonCount = element.all(by.css('.navbar-nav li')).count();
    expect(buttonCount).toBe(2);
  });
});
