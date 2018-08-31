const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function isItFriday(today) {
  if(today === 'Friday') {
    return 'TGIF';
  }

  return 'Nope';
}

Given('today is {string}', function (day) {
  // Write code here that turns the phrase above into concrete actions
  this.today = day;
});

When('I ask whether it\'s Friday yet', function () {
  // Write code here that turns the phrase above into concrete actions
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (answer) {
  // Write code here that turns the phrase above into concrete actions
  assert.equal(this.actualAnswer, answer);
});
