import { useEffect, useState } from 'react';
import './App.css';
import Categories from './components/Categories';
import LoadingCircle from './components/LoadingCircle';
import Navbar from './components/Navbar';


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
      <Navbar/>
      {post ? <Categories />: <LoadingCircle/>}
      
    </div>
  );
}

export default App;
