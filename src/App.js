import { useEffect, useState } from 'react';
import './App.css';
import LoadingCircle from './components/LoadingCircle';
import Home from './components/Home';
import Lips from './components/Lips';
import Tryout from './components/Tryout';
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function returnTrue() {
  sleep(7000)
  return true;
}

function App() {
  const[post, setPost] = useState(null)


  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json()
      .then(res =>{
        sleep(7000)
        const {body} = res
        setPost(body)
      })
    )
  })


  return (
    <div className="App"> 
      <Router>
        <Switch>
          <Route exact path="/" component={post ? Home: LoadingCircle}/>
          <Route path="/lipproducts" component={Lips} />
          <Route path="/tryout" component={Tryout} />
          <Redirect to="/" />
        </Switch>
      </Router>
      {/* <Navbar/> */}
      {/* {post ? <Categories />: <LoadingCircle/>} */}
      {/*<Tryout/>*/}
      {/* <LipProducts/> */}
    </div>
  );
}

export default App;
