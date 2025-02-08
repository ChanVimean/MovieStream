const LocalStorage = 'moviesData'

const FetchAPI = async () => {
  try {
    let movieList = []

    // Always Fetch from API (Ignore Local Storage)
    const res = await fetch('https://json-movies-6gr9.onrender.com/movies', { cache: "no-store" })

    if (!res.ok) throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`)

    const data = await res.json()

    if (Array.isArray(data)) {
      localStorage.setItem(LocalStorage, JSON.stringify(data)) // Update Local Storage
      movieList = data
    } else {
      console.error("❌ Fetched data is not an array.")
      return []
    }

    console.log("🎬 Total Movies Fetched:", movieList.length)
    return movieList
  } catch (err) {
    console.error("❌ Failed to fetch:", err)
    return []
  } finally {
    console.log("✅ Done Fetching Latest Data...")
  }
}

export default FetchAPI
