const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const { Builder, By , until } = require('selenium-webdriver');

Given('I am on the Google search page and no input in search box', function () {
  this.driver = new Builder().
    usingServer("http://127.0.0.1:4444/wd/hub").
    withCapabilities({
      'browserName': 'chrome'
    }).build();
});

When('I click the search button', async function () {
  try {
    let driver = this.driver;
    await driver.get('http://www.google.com');
    let searchButton = await driver.wait(until.elementLocated(By.name('btnK')));
    await driver.wait(searchButton.click());
    this.actualAnswer = await driver.getTitle();
  } finally {
    this.driver.quit();
  }
});

Then('The page not change', function () {
  assert.equal(this.actualAnswer, "Google");
});
