exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['itunesSearchApiAppFeature.js'],
  capabilities: {
    browserName: 'chrome'
  }
}
