import React from 'react';
import { useHistory } from 'react-router-dom';
import bins from '../services/bins'

const Home = () => {
  const history = useHistory();

  const createBin = (e) => {
    e.preventDefault();
    const uri = bins.create().then(uri => { 
      history.push(`/bin/${uri}`);
    });
  }

  return (
    <div class="flex flex-col items-center border border-black">
      <p class="inline-block border border-black">Welcome!</p>
      <p class="mt-8 inline-block border border-black">Request Tub is a place where you can send your API calls or webhooks to gain valuable insight on their structure.</p>
      <p class="mt-8 inline-block border border-black">Tubs are ephemeral and disappear after 48 hours.</p>
      <p class="mt-8 inline-block border border-black">Click "Create Tub" to get started!</p>
      <button  class="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={createBin}>Create Tub</button>
    </div>
  )
};

export default Home;