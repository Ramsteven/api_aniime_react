import React from 'react'

function AnimeCard({anime}) {
    console.log(anime)
    return (
        <article className="anime-card">
            <a href={anime.url}
                target="_blank"
                rel="noreferer">
                <figure>
                    <img 
                    src={anime.image_url}
                    alt="Anime Image"/>
                </figure>
                <h3>{anime.tittle}</h3>
            </a>
        </article>
    )
}

export default AnimeCard
