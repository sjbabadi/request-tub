import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import bins from '../services/bins'
import Request from './Request'

const Bin = ({ slug }) => {
  const [bin, setBin] = useState({})
  const history = useHistory()

  useEffect(() => {
    bins.get(slug).then(bin => {
      if (bin) {
        setBin(bin)
      } else {
        // TODO: render 404 page instead
        history.push('/')
      }
    })
  }, [ slug, bin, history])

  return (
    <ul>
      {bin.map(request => 
        <li key={request.timestamp}><Request data={request} /></li>
      )}
    </ul>
  )
}

export default Bin;