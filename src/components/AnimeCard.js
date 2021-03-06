import React from 'react'

//==========================
// Component create a Card by anime
//==========================
function AnimeCard({anime}) {
    const messageScore = (counter) =>{
     if (counter > 0) {
        if (counter < 5){
          return "I do notrecommend it."
        }
        else if(counter >= 5 && counter < 8){
          return "You may have fun."
        }
        else if(counter > 8){
          return "Great, this is one of the best anime"
        }else {
            return "nothing to say"
        }
    }  
    }

    return (
        <article className="anime-card" key={anime.key}>
            <a href={anime.url}
                                target="_blank"
                                rel="noreferrer"
                                key={anime.mal_id}>
                <img src={anime.image_url} alt={anime.title}  key={anime.key}/>
            </a>
            <div className="anime-info" key={anime.key}>
                <h3>{anime.title}</h3>
                <span>{anime.score}</span>
            </div>
            <a href={anime.url}
                                target="_blank"
                                rel="noreferrer"
                                key={anime.mal_id} key={anime.key}>
                <div className="anime-over">
                    <h2>Overview:</h2>
                    <p className="messageScore">{ messageScore(anime.score)}</p>
                    <p>{anime.synopsis}</p>
                </div>
            </a>
        </article>


    )
}

export default AnimeCard
