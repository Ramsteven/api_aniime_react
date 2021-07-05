const baseURL = "https://api.jikan.moe/v3"

//==========================
// Function to get top 10 animes
//==========================
export async function getTopAnimes() {
    const temp = await fetch(`${baseURL}/top/anime/1/bypopularity`)
    .then(res => res.json());
    return(temp.top.slice(0, 10))
}

//==========================
//  Function to fetch with input
//==========================
export async function getSearchAnimes(query) {
    const temp = await fetch(`${baseURL}/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
    .then(res => res.json());
    const result = temp.results
    return(result)
}



export default {
    getTopAnimes,
    getSearchAnimes
}