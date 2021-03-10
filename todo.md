Backend:
  CryptoRandomString for slugs
  Routes:
    React:
      get '/' -> react
      get '/bin/:slug' -> react
      get '/data/:slug' -> JSON of bin

    Api:
      post '/bins':  create a new bin, return the url
      get post put patch delete '/:slug' -> 
        validate the slug
        api endpoint for saving request data
        Check how many there are: remove the oldest if num > Threshold


Frontend:
  Bin service
    get(slug) => json for the bin
    create() => tell backend to make anew bin, return the url to visit ('/bin/397h3hEWHE')
  Styling

Future stuff:
  Cron job to trim un-used bins (48h expiration?)
  Cookie-based history?
  Websockets
  
