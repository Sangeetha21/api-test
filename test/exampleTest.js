
require("mocha-allure-reporter");

var XMLHttpRequest = require('xhr2');
const PublicReportingAPI = require('@reportportal/agent-js-mocha/lib/publicReportingAPI');

// var xhr = new XMLHttpRequest();
//  var fetch = require('node-fetch').default;

describe("Color Code Converter", function () {
  before(function (){
    PublicReportingAPI.addAttributes([{ key: 'suiteAttr1Key', value: 'suiteAttr1Value' }, { value: 'suiteAttr2' }]);
  });

  it("changes", function () {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
        PublicReportingAPI.setStatusInfo();
        PublicReportingAPI.addAttributes([{ value: 'testAttr2' }]);
      }
    });
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

    xhr.send();
    // allure.description("this responseText");


  });
});

  // "test": "mocha test/*.js --reporter spec --reporter mocha-allure-reporter; npm run report",
    // "report": "allure generate allure-results --clean -o allure-report && allure open allure-report"
    // --reporter spec --reporter mocha-allure-reporter; npm run report
