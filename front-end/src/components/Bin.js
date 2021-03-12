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
        setTub(result.requests)
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
    <ul>
      {tub && 
        tub.map(request => 
        <li key={request.timestamp}><Request data={JSON.stringify(request)} /></li>
      )}
    </ul>
  )
}

export default Bin;