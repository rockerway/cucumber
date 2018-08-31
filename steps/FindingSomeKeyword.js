const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { Builder, By , until, Key } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome')

Given('I am on the Google search page', function () {
  let options = new Options();
  // options.headless();
  options.addArguments('--no-sandbox');
  this.driver = new Builder().
    forBrowser('chrome').
    // setChromeOptions(options).
    build();
});

When('I search for {string}', {timeout: 10 * 1000}, async function (keyword) {
  try {
    let driver = this.driver;
    await driver.get('http://www.google.com');
    let searchBox = await driver.wait(until.elementLocated(By.name('q')));
    await driver.wait(searchBox.sendKeys(keyword + Key.ENTER));
    
    this.actualAnswer = await driver.getTitle().then(function(title) {
      return title.toLowerCase();
    });
  } finally {
    this.driver.quit();
  }
});

Then('the page title should start with {string}', function (answer) {
  assert.equal(this.actualAnswer, answer + " - google 搜尋");
});
