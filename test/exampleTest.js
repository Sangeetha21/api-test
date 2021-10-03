
require("mocha-allure-reporter");

var XMLHttpRequest = require('xhr2');
// var xhr = new XMLHttpRequest();
//  var fetch = require('node-fetch').default;
//  new error analyisis should fail
var onlyText= a;

describe("Color Code Converter", function () {
  it("changes", function () {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) 
        console.log(this.responseText);
        // allure.description("this responseText");
      
    });
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

    xhr.send();
    allure.description("this responseText");


  });
});

  // "test": "mocha test/*.js --reporter spec --reporter mocha-allure-reporter; npm run report",
    // "report": "allure generate allure-results --clean -o allure-report && allure open allure-report"
