import Request from './components/Request'
import {
  BrowserRouter as Router,
  Switch, Route, Link, useParams,
  useRouteMatch
} from 'react-router-dom'
import Home from './components/Home'
import Bin from './components/Bin'
import Header from './components/Header'

/*
  Bin:
    Requests (list, sort by timestamp)
      URI
      timestamp
      Headers (list, collapseable)
      Parameters (list, collapseable)
      Body
        switch on encoding type?
*/
const json = {
  timestamp: new Date().toString(),
  method: "POST",
  query_params: {
    amount: "400",
    length: "60",
    width: "30",
  },
  headers: {
    header1: "value1",
    header2: "value2",
  },
  body: '{"Hi":"I\'m json"}'
}
const  App = () => {
  const match = useRouteMatch('/bin/:slug')
  const slug = match?.params?.slug
  return (
    //<Request data={json} />
    <div>
      <Header />
      <Switch>
        <Route path="/bin/:slug">
          <Bin slug={slug}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
