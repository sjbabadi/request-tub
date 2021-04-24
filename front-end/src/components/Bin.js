import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import bins from "../services/bins";
import Request from "./Request";
import { CopyToClipboard } from "react-copy-to-clipboard";
import socketIOClient from "socket.io-client";
const ENDPOINT = "/";

const Bin = ({ slug }) => {
  const [tub, setTub] = useState(null);

  const history = useHistory();
  const requestURL = `www.${window.location.hostname}/${slug}`;

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.emit("NewClient", slug);
    socket.on("UpdateTub", ({ requests }) => {
      setTub(requests);
    });
    return () => socket.disconnect();
  }, [slug]);

  useEffect(() => {
    bins.get(slug).then((result) => {
      if (result) {
        let requests = result.requests;
        setTub(requests);
      } else {
        // TODO: render 404 page instead
        history.push("/");
      }
    });
  }, [history, slug]);

  return (
    <main>
      <h3 className="mt-8 text-center text-2xl">Tub API URL:</h3>
      <h4 className="mt-2 text-center text-2xl mb-1.5">
        <code
          id="requestURL"
          className="bg-gray-300 border-2 border-gray-400 hover:bg-gray-400 hover:border-gray-500 p-2 rounded"
        >
          {requestURL}
        </code>
      </h4>
      <CopyToClipboard text={requestURL}>
        <button className="block mt-4 mx-auto bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 border border-purple-700 rounded">
          Copy URL
        </button>
      </CopyToClipboard>
      <div className="flex flex-col items-center">
        {tub &&
          tub.map((request) => (
            <Request key={request.timestamp} data={JSON.stringify(request)} />
          ))}
      </div>
    </main>
  );
};

export default Bin;
