import Carousel from "./src/utils/Carousel.js"
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

    // Hero Section
    // Trending
    // New Releases
    // Continue
    // Up Coming
    // Top Anime
    // Top Donghua
    // Animation

    // Action
    const genreAction = FilterItems(movieList, 'genre', ['Action'])
    Render('newReleases', Carousel(genreAction, 'Action'))

    // Comedy
    const genreComedy = FilterItems(movieList, 'genre', ['Comedy'])
    Render('comedy', Carousel(genreComedy, 'Comedy'))

    // Fantasy
    const genreFantasy = FilterItems(movieList, 'genre', ['Fantasy'])
    Render('fantasy', Carousel(genreFantasy, 'Fantasy'))

    // Sci-Fi & Supernatural
    const genreSciFi = FilterItems(movieList, 'genre', ['Sci-Fi', 'Supernatural'])
    Render('scifiSupernatural', Carousel(genreSciFi, 'Sci-Fi & Supernatural'))

    // Romance

    // Mystery & Spy
    const genreMysterySpy = FilterItems(movieList, 'genre', ['Mystery', 'Spy'])
    Render('mysterySpy', Carousel(genreMysterySpy, 'Mystery & Spy'))

    // Adventure
    const genreAdventure = FilterItems(movieList, 'genre', ['Adventure'])
    Render('adventure', Carousel(genreAdventure, 'Adventure'))

    // MartialArts
    const genreMartialArts = FilterItems(movieList, 'genre', ['Martial Arts'])
    Render('adventure', Carousel(genreMartialArts, 'Martial Arts'))

    // Drama & Thriller
    const genreDramaThriller = FilterItems(movieList, 'genre', ['Drama', 'Thiller'])
    Render('adventure', Carousel(genreDramaThriller, 'Drama & Thriller'))


  } catch (error) {
    console.error("Failed to initialize: ", error)
  }
}

InitializeApp()