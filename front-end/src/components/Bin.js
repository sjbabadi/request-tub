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
        let requests = result.requests;
        setTub(requests)
      } else {
        // TODO: render 404 page instead
        history.push('/')
      }
    })
  }, [history, slug])
  
  return (
    // <p>
    // <p>in tub {slug}</p>
    // <p>{JSON.stringify(tub)}</p>
    // </p>
    <main>
      <h3 className="mt-8 text-center text-2xl">Tub API URL:</h3>
      <h4 className="mt-2 text-center text-2xl mb-1.5"><code className="bg-gray-300 border-2 border-gray-400 hover:bg-gray-400 hover:border-gray-500 p-2 rounded">{`http://localhost:4000/${slug}`}</code></h4>
      <div className="flex flex-col items-center">
        {tub &&
          tub.map(request => 
            <Request  key={request.timestamp} data={JSON.stringify(request)} />
          )
        }
      </div>
    </main>
  )
}

export default Bin;