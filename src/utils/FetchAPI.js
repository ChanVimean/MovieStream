const LocalStorage = 'moviesData'

const FetchAPI = async () => {
  try {
    let movieList = []

    // 1. Check Local Storage
    const storeData = localStorage.getItem(LocalStorage)

    // If Local Storage has Data, use it
    if (storeData) movieList = JSON.parse(storeData) || []

    // 2. If no Data, Fetch from API and store in Local Storage
    if (!Array.isArray(movieList) || movieList.length === 0) {

      const res = await fetch('https://json-movies-6gr9.onrender.com/movies', { cache: "no-store" })

      if (!res.ok) throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)

      const data = await res.json()

      if (Array.isArray(data)) {
        localStorage.setItem(LocalStorage, JSON.stringify(data))
        movieList = data
      } else {
        console.error("❌ Fetched data is not an array.")
        return []
      }
    }

    console.log("🎬 Total Movies Fetched:", movieList.length)
    return movieList
  } catch (err) {
    console.error("❌ Failed to fetch:", err)
    return []
  } finally {
    console.log("✅ Done Checking and Fetching Data...")
  }
}

export default FetchAPI