import Card from "./src/components/Card.js"
import FetchAPI from "./src/utils/FetchAPI.js"
import FilterItems from "./src/utils/FilterItems.js"
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
    console.log(FilterItems(movieList, 'genre', ['Spy']))

    const movieGenres = FilterItems(movieList, 'genre', ['Adventure'])

    const ApplyFor = (movies) => {
      if (!movies.length) return '<p>No Movies Found</p>'
      return `
        <ul>
          ${movies.map(movie => `
              <li>
                <h3>${movie.title}</h3>
                <p>Genres: ${movie.genre.join(', ')}</p>
              </li>
            `).join('')
            }
        </ul>
      `
    }

    const movieListHTML = ApplyFor(movieGenres)
    Render('test', movieListHTML)




  } catch (error) {
    console.error("Failed to initialize: ", error)
  }
}

InitializeApp()