const LocalStorage = 'moviesData'

const validateMovies = async (movies) => {
  return Promise.all(movies.map(async (movie, index) => {
    const errors = []

    // Check required fields
    if (!movie.title) errors.push("Missing title")
    if (!movie.cover) errors.push("Missing cover image")
    if (!movie.thumbnail) errors.push("Missing thumbnail")
    
    // Validate URLs
    const checkImage = async (url) => {
      try {
        const response = await fetch(url, { method: "HEAD" }) 
        return response.ok // true if image exists, false if 404
      } catch {
        return false
      }
    }

    if (movie.cover && !(await checkImage(movie.cover))) {
      errors.push("Cover image is broken")
    }
    if (movie.thumbnail && !(await checkImage(movie.thumbnail))) {
      errors.push("Thumbnail image is broken")
    }

    // Log any errors for this movie
    if (errors.length > 0) {
      console.error(`Error in movie at index ${index}:`, errors, movie)
    }

    return { ...movie, errors }
  }))
}

const FetchAPI = async () => {
  try {
    let movieList = []

    // 1. Check Local Storage
    const storeData = localStorage.getItem(LocalStorage)

    // If has Data, GET it and store in Array
    if (storeData) {
      // console.log("Data loaded from Local Storage")
      movieList = JSON.parse(storeData) || []
    }
    
    // 2. If Data is empty
    // Fetch and store in Local Storage then set to Array
    if (!Array.isArray(movieList) || movieList.length === 0) {
      // console.log("Fetching data from API...")
      const res = await fetch('https://json-movies-6gr9.onrender.com/movies')
      const data = await res.json()

      // Ensure fetched data is an array
      if (Array.isArray(data)) {
        movieList = await validateMovies(data) // 🔥 Check images before saving
        localStorage.setItem(LocalStorage, JSON.stringify(movieList))
      } else {
        console.error("Fetched data is not an array.")
        return []
      }
    }

    return movieList
  } catch (err) {
    console.error("Failed to fetch: ", err)
    return 
  } finally {
    console.log("Done Checking and Fetching Data...")
  }
}

export default FetchAPI