import React from 'react'

function Slider({topAnime}) {
    return (
        <div className="container">
            <h1>Top 10</h1>
            <div className="slider">
                <div className="slide-track">
                    {topAnime.map(anime => (
                        <div className="slide">
                            <a href={anime.url}
                                target="_blank"
                                rel="noreferrer"
                                key={anime.mal_id}>
                                <img src={anime.image_url}  alt="" key={anime.mal_id}/>
                            </a>
                        </div>
                        ))}
                    {topAnime.map(anime => (
                        <div className="slide">
                            <a href={anime.url}
                                target="_blank"
                                rel="noreferrer"
                                key={anime.mal_id}>
                                <img src={anime.image_url}  alt="" key={anime.mal_id}/>
                            </a>
                        </div>
                        ))}
                </div>
            </div>
        </div>
    )
}


export default Slider
