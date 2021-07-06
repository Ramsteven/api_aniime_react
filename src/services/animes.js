const baseURL = "https://api.jikan.moe/v3"

//==========================
// Function to get top 10 animes
//==========================
export const getTopAnimes = async () => {
    const temp = await fetch(`${baseURL}/top/anime/1/bypopularity`)
    .then(res => res.json());
    return(temp.top.slice(0, 10))
}

//==========================
//  Function to fetch with input
//==========================
export const getSearchAnimes = async (query) => {
    const temp = await fetch(`${baseURL}/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
    .then(res => res.json());
    const result = temp.results
    return(result)
}

