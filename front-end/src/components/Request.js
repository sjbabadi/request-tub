
/*
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
*/
const Request = ({ data }) => {
  const headers = data.headers;
  const method = data.method;
  const timestamp = data.timestamp;
  const body = data.body;
  const queryParams = data.query_params;
  console.log(data)
  const isJson = headers['Content-Type'] && headers['Content-Type']  === 'application/json'
  return (
    <ul>
      <li>timestamp: <code>{timestamp}<br /></code></li>
      <li>method: <code>{method}</code> <br /></li>
      <li>
        headers: <br />
        <code>
          <ul>
            {Object.keys(headers).map(key => 
              <li key={key}> {key}: {headers[key]}<br/> </li>
            )}
          </ul>
        </code>
      </li>

      <li>
        query parameters: <br />
        <code>
          <ul>
            {Object.keys(queryParams).map(key => 
              <li key={key}>{key}: {queryParams[key]}</li>
            )}
          </ul>
        </code>
      </li>
      <li>
        body: <code>{body}</code>
      </li>
    </ul>
  );
}

export default Request;