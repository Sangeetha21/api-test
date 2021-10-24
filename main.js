const Mocha = require("mocha");
let mochaMain = new Mocha({
  reporter: '@reportportal/agent-js-mocha',
  reporterOptions: {
    "token": "121e74a0-e273-4aac-b414-1a1c59cb9b3e",                
    "endpoint": "http://localhost:8080/api/v1",
    "project": "test-api",
    "launch": "superadmin_TEST_EXAMPLE",
    "attributes": [
      {
        "key": "YourKey",
        "value": "YourValue"
      },
      {
        "value": "YourValue"
      },
    ]
  }
});