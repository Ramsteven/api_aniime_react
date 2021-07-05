import React from 'react'

function Slider({topAnime}) {
    return (
       
    <div>
        <h2>Top 10 Anime List</h2>
        
        <logo-slider>
            <div>
                {topAnime.map(anime => (
                            <img src={anime.image_url} height="250" width="250" alt="" key={anime.mal_id}/>
                    ))}
            </div>
            
            <div>
            {topAnime.map(anime => (
                            <img src={anime.image_url} height="250" width="250" alt="" key={anime.mal_id} />
                    ))}
            </div>
        </ logo-slider>
    </div>
    )
}


export default Slider
