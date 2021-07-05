import React from 'react'

function Sidebar({topAnime}) {
    return (
        <div>
            <aside>
                <nav>
                   <h3>TopAnime</h3>
                   {topAnime.map(anime => (
                       <a 
                            href={anime.url}
                            target="_blank"
                            key={anime.mal_id}
                            rel="noreferrer">
                            {anime.title}
                        </a>
                   ))}
                </nav>
            </aside>
            
        </div>
    )
}

<aside>
    <nav>
        <h3>Top Anime</h3>
        <a href="#" target="_blank"
        rel="norefer">
            Atack on titan
        </a>
    </nav>
</aside>
export default Sidebar
