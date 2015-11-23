# wringer
Put your APIs through the wringer.

## Installation

**NPM**

```

```

**Browser**

```

```


## Usage

```js
// Optional initialization
wringer.init({
  verbose: true, // default is false
  baseUrl: "http://www.my-domain.com/api/v1/",
  params: { "auth_token": "123456789" }, // parameters to be used in every API request; can be overridden
  headers: { "Authorization": "123456789" } // headers to be used in every API request; can be overridden
});

// Simple
wringer.test({
  endpoint: "GET path/to/api",
  expectOk: true
});

// Advanced
wringer.test({
  ref: wringer.ref(),
  endpoint: "GET path/to/api",
  params: { "q": "search+term" },
  headers: { "Accept": "application/json" },
  expectOk: true,
  expectStatus: 200,
  expectJson: exampleModel,
  expectJsonSchema: exampleModelSchema,
  expectHeaders: [ { name: "X-Custom-Header": value: /.*/i } ],
  expect: function(config, response){
    if(response.status != 200) {
      return "Returning a string or false will trigger a fail for this test.";
    }
    
    // Returning anything else will trigger a success for this test.
    if(response.status == 201) {
      return true;
    }
    
    return response.json().then(function(json){
      // You can also return a promise, which will be resolved and the resolved value will be handled accordingly
      if(json.length < 10) {
        return false;
      }
      
      // You can also return another test to be run; this is how you nest tests.
      return {
        ref: wringer.ref(),
        endpoint: "GET another/api",
        expectOk: true
      };
      
    });
  }
});
```


## Notes

**[Tiny Validator 4](https://github.com/geraintluff/tv4)**
Wringer uses Tiny Validator 4 (v1.2.7) for JSON schema validation. If you include `tv4` on the page, wringer will attempt to use that version instead, otherwise, it will use tv4 v1.2.7, which is included internally in the library.
