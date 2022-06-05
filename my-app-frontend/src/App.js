import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from "./Header"
import MoviePage from "./MoviePage"
import Search from "./Search"
import Reviews from "./Reviews"
 import SubmitForm from "./SubmitForm"

function App() {
  const [movies, setMovies] = useState([]) 
  const [searchBar, setSearchBar] = useState('')
  
  const getMovies = async (searchBar) => {
    const url = `http://www.omdbapi.com/?S=${searchBar}&apikey=a2784c5b`
   
    const response = await fetch(url)
    const responseJson = await response.json();
   
    if (responseJson.Search){
    setMovies(responseJson.Search)
    }
}

useEffect(() => {
    getMovies(searchBar)
},[searchBar])


const [array, setArray] = useState([])
const renderArray = array.map((element) => <Reviews author={element.author} body={element.body} title={element.title}/>)
useEffect(() => {
    fetch('http://localhost:9292/reviews')
    .then(res => res.json())
    .then(setArray)
}, [])


  return (
    <Router>
    <div className="App">
      <Header />
    <div className="content">
      <Search search={searchBar} setSearchBar={setSearchBar}/>
      <Switch>
        <Route exact path="/">
        <MoviePage movies={movies} setMovies={setMovies}  />
        </Route>
        <Route exact path="/Reviews">
        <Reviews array={array} renderArray={renderArray}/>
        </Route>
        <Route exact path="/Submit">
        <SubmitForm setArray={setArray} />
        </Route>
    </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
