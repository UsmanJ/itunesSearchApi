describe('itunes search api application', function() {

  var searchBox = element(by.css('.input'));
  var searchBtn = element(by.css('#searchBtn'));
  var favBtn    = element(by.css('#favBtn'));
  var nill      = element(by.css('#nill'));
  var EC        = protractor.ExpectedConditions;

  beforeEach(function() {
    browser.get('http://localhost:9000/#/');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('http://localhost:9000/#/');
  });

  it('displays the results once the query is run', function() {
    searchBox.sendKeys('Adele');
    searchBtn.click();
    expect(element(by.className('results')).isDisplayed()).toBeTruthy();
  });

  it('displays the sorry message if there are no results', function() {
    searchBox.sendKeys('Ajgiug9dugoidug8dgogdoidgoug');
    searchBtn.click();
    browser.wait(EC.presenceOf(nill), 3000);
    expect(element(by.className('nill')).isDisplayed()).toBeTruthy();
  });
});
