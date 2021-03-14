import axios from 'axios'

const get = (slug) => {
  const request = axios.get(`/data/${slug}`)
  return request.then(response => {
    return response.data
  }).catch(err => {
    console.log(err)
  })
}

const create = () => {
  const request = axios.post('/tubs')
  return request.then(response => response.data.uri)
}

const bins = {
  get,
  create
}

export default bins