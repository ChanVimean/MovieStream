import Card from "./src/components/Card.js"
import FetchAPI from "./src/utils/FetchAPI.js"
import Render from "./src/utils/Render.js"


const InitializeApp = async () => {

  try {
    // 1. Fetch Data
    const movieList = await FetchAPI()

    // 2. Check list if has Data
    if (!movieList || movieList.length === 0) {
      console.error("Movie List has no Data")
      return
    }

    // 3. Render App
    const title = movieList.map(movie => movie.title)
    const titleStyle = "text-blue-500 bg-blue-200"
    Render(Card({ items: title, style: titleStyle}), 'app1')


  } catch (error) {
    console.error("Failed to initialize: ", error)
  }
}

InitializeApp()