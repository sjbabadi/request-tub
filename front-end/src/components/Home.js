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
    <div class="pt-10 text-xl flex flex-col items-center ">
      <p class="inline-block font-bold text-2xl">Welcome!</p>
      <p class="mt-8 inline-block ">Request Tub is a place where you can send your API calls or webhooks to gain valuable insight on their structure.</p>
      <p class="mt-8 inline-block ">Tubs are ephemeral and disappear after 48 hours, and hold only the latest 20 requests.</p>
      <p class="mt-8 inline-block ">Click "Create Tub" to get started!</p>
      <button  class="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={createBin}>Create Tub</button>
    </div>
  )
};

export default Home;