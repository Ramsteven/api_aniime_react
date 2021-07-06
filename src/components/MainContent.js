import React from 'react'
import AnimeCard from './AnimeCard'

function MainContent(props) {
    return (
        <main>  

            <div className="main-head">
                <form 
                    className="search-box"
                    onSubmit= {props.HandleSearch}    >
                    <input type="search"
                    placeholder="Search any anime.."
                    required 
                    value={props.search}
                    onChange= {e => props.setSearch(e.target.value)}/>
                </form>
                
            </div>
            <h3 className="messageSearch">{props.message}</h3>
            <div className="anime-container">
                {props.animeList.map(anime =>(
                    <AnimeCard
                        anime={anime}
                        key={anime.mal_id}
                        />
                ))}
            </div>
        </main>
    )
}


export default MainContent