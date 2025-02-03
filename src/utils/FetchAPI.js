
const LocalStorage = 'moviesData'

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
        localStorage.setItem(LocalStorage, JSON.stringify(data))
        movieList = data
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