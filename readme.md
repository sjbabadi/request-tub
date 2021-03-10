Implied Schema of Request Bin

Redis K/V Store:
[URI] => {
    "Requests": [
      {
        "timestamp": "",
        "method": "",
        "query_params": [
          "": "" , (...)
        ],
        "headers": [
          "" : "", (...)
        ],
        "body": ""
      }, (...)
    ]
  }

Workflow:
  Main page has a button to create a bin, checkbox for private.
  Clicked the button: 
    given a URL.
    // generate a cookie and send it over.
  visit website.com/URI?inspect:
    grab json data from store [URI]
      Processing Job