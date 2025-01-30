import FetchAPI from "./src/utils/FetchAPI.js"
import FilterItems from "./src/utils/FilterItems.js"
import Render from "./src/utils/Render.js"


const InitializeApp = async () => {

  try {
    //* Fetch Data & Check list of ha Data
    const movieList = await FetchAPI()
    if (!movieList || movieList.length === 0) {
      console.error("Movie List has no Data")
      return
    }

    //* Render App


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