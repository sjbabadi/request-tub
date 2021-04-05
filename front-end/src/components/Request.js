
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
  data = JSON.parse(data);
  const headers = data.headers;
  const method = data.method;
  const timestamp = data.timestamp;
  const body = data.body;
  const queryParams = data.query_params;
  const isJson = !!headers['content-type'] && headers['content-type']  === 'application/json'
  const nestedClass = "ml-8 text-xs truncate"
  console.log(body)
  return (
    <div className="p-3 mt-3 w-11/12 bg-indigo-200 border-2 border-indigo-400 rounded inline-block">
    <ul>
      <li>timestamp: <code>{timestamp}<br /></code></li>
      <li>method: <code>{method}</code> <br /></li>
      <li>
        headers: <br />
        <code>
          <ul>
            {Object.keys(headers).map(key => 
              <li className={nestedClass} key={key}> {key}: {headers[key]}<br/> </li>
            )}
          </ul>
        </code>
      </li>

      <li>
        query parameters: <br />
        <code>
          <ul>
            {Object.keys(queryParams).map(key => 
              <li className={nestedClass} key={key}>{key}: {queryParams[key]}</li>
            )}
          </ul>
        </code>
      </li>
      <li>
        body: {isJson ? <code style={{whiteSpace: 'pre'}}>{JSON.stringify(body, null, 2)}</code> : String(body) }
      </li>
    </ul>
  </div>
  );
}

export default Request;