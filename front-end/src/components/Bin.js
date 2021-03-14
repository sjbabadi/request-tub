import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import bins from '../services/bins'
import Request from './Request'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4000"

const Bin = ({ slug }) => {
  const [tub, setTub] = useState(null)

  const history = useHistory()
  const requestURL = `http://localhost:4000/${slug}`

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.emit("NewClient", slug);
    return () => socket.disconnect();
  }, []);

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
      <h4 className="mt-2 text-center text-2xl mb-1.5"><code id="requestURL" className="bg-gray-300 border-2 border-gray-400 hover:bg-gray-400 hover:border-gray-500 p-2 rounded">{requestURL}</code></h4>
      <CopyToClipboard text={requestURL}>
        <button className="block mt-4 mx-auto bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 border border-purple-700 rounded">Copy URL</button>
      </CopyToClipboard>
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