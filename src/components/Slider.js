import React from 'react'

//==========================
// Component to handle slider top 10
//==========================

function Slider({topAnime}) {
    return (
        <div className="container">
            <h1>Top 10</h1>
            <div className="slider">
                <div className="slide-track">
                    {topAnime.map(anime => (
                        <div className="slide" key={anime.rank}>
                            <a href={anime.url}
                                target="_blank"
                                rel="noreferrer"
                                >
                                <img src={anime.image_url}  alt="" />
                            </a>
                        </div>
                        ))}
                    {topAnime.map(anime => (
                        <div className="slide" key={anime.rank}>
                            <a href={anime.url}
                                target="_blank"
                                rel="noreferrer"
                                >
                                <img src={anime.image_url}  alt="" />
                            </a>
                        </div>
                        ))}
                </div>
            </div>
        </div>
    )
}


export default Slider
