import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import bins from '../services/bins'
import Request from './Request'

const Bin = ({ slug }) => {
  const [tub, setTub] = useState(null)
//    uri: 'http://dummy.net',
//    request: [
//      {
//        timestamp: new Date().toString(),
//        method: "POST",
//        query_params: {
//          amount: "400",
//          length: "60",
//          width: "30",
//        },
//        headers: {
//          header1: "value1",
//          header2: "value2",
//        },
//        body: '{"Hi":"I\'m json"}'
//      },
//      {
//        timestamp: new Date().toString(),
//        method: "POST",
//        query_params: {
//          amount: "400",
//          length: "60",
//          width: "30",
//        },
//        headers: {
//          header1: "value1",
//          header2: "value2",
//        },
//        body: '{"Hi":"I\'m json"}'
//      },
//      {
//        timestamp: new Date().toString(),
//        method: "POST",
//        query_params: {
//          amount: "400",
//          length: "60",
//          width: "30",
//        },
//        headers: {
//          header1: "value1",
//          header2: "value2",
//        },
//        body: '{"Hi":"I\'m json"}'
//      }
//    ]

  const history = useHistory()

  useEffect(() => {
    bins.get(slug).then(result => {
      if (result) {
        console.log('tub', result);
        let requests = result.requests;
        requests.sort((a, b) => {
          let date1 = new Date(a.timestamp);
          let date2 = new Date(b.timestamp);
          return date1 < date2 ? 1 : -1;
        })
        setTub(requests)
      } else {
        // TODO: render 404 page instead
        history.push('/')
      }
    })
  }, [])
  
  return (
    // <p>
    // <p>in tub {slug}</p>
    // <p>{JSON.stringify(tub)}</p>
    // </p>
    <main>
      <h3>Bin Api URL:</h3>
      <h4><code>{`http://localhost:4000/${slug}`}</code></h4>
    <ul>
      {tub && 
        tub.map(request => 
        <li key={request.timestamp}><Request data={JSON.stringify(request)} /></li>
      )}
    </ul>
    </main>
  )
}

export default Bin;