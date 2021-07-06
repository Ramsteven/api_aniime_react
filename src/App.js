import {useState, useEffect} from 'react'
import Header from "./components/Header"
import Sidebar from "./components/Slider"
import MainContent from "./components/MainContent"
import {getTopAnimes, getSearchAnimes } from "./services/animes"


function App() { 
  const [animeList, setAnimeList] = useState([])
  const [topAnime, setTopAnime] = useState([])
  const [search, setSearch] = useState("")
  const [message, setmessage] = useState("")

  //==========================
  // Function to get top 10 animes
  //==========================
  const TopAnime = async () => {
    const responseJson = await getTopAnimes()
    setTopAnime(responseJson);
  }

  
  //==========================
  // Function to handle event enter
  //==========================
  const HandleSearch = e => {
    e.preventDefault();
    FetchAnime(search);
  }

  //==========================
  // Function to fetch with input
  //==========================
  const FetchAnime = async (query) => {
    const response = await getSearchAnimes(query)
    if (response) {
      Score(response)
      setAnimeList(response);
    }else {
      alert("dont found anything")
    }
  }

  //==========================
  // Function to calculate score and set message
  //==========================
  const Score = topAnime => { 
    let aux = 0, counter = 0;
    let result = "";
    if (topAnime){
      topAnime.forEach(element => { aux += element.score; counter += 1; console.log(element.score)})
      let average = aux/counter
      if (counter > 0) {
        if (average < 5){
          result = "I do notrecommend it."
        }
        else if(average >= 5 && average < 8){
          result = "You may have fun."
        }
        else if(average > 8){
          result = "Great, this is one of the best anime"
        }
        setmessage(result)
      }
    }else{
      result = "nothing there"
      setmessage(result)
    }
};

  useEffect(() => {
    TopAnime();
    console.log("Top Anime")
  }, [])


  return (
   <div className="App">
      <Header />
      <div className="content-wrap">
  
        <Sidebar 
        topAnime={topAnime} />
        <MainContent  
            HandleSearch= {HandleSearch}
            search={search}
            setSearch={setSearch}
            animeList={animeList}
            message = {message} 
        />

      </div>
    </div>
  );
}

export default App;
  