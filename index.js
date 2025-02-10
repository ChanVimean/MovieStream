import Hero from "./src/components/Hero.js"
import Carousel from "./src/components/Carousel.js"
import FetchAPI from "./src/utils/FetchAPI.js"
import FilterItems from "./src/utils/FilterItems.js"
import Render from "./src/utils/Render.js"
import NavBar from "./src/components/NavBar.js"
import Footer from "./src/components/Footer.js"
import Trending from "./src/components/Trending.js"

const InitializeApp = async () => {

  try {
    //* Fetch Data & Check list of ha Data
    const movieList = await FetchAPI()
    if (!movieList || movieList.length === 0) {
      console.error("Movie List has no Data")
      return
    }

    //* Navigation
    Render('navbar', NavBar())


    // Hero Section
    Render('hero', Hero(movieList))

    // Trending
    Render('trending', Trending(movieList, "Trending", 15))

    // New Releases
    const newRelease = FilterItems(movieList, 'release', { min: 2020, max: new Date().getFullYear() })
    Render('newReleases', Carousel(newRelease, "New Releases"))

    // Top Anime
    const topAnime = FilterItems(movieList, 'type', ['Anime'])
    Render('topAnime', Carousel(topAnime, "Top Anime"))

    console.log(movieList)
    
    // Top Donghua
    const topDonhua = FilterItems(movieList, 'type', ['Donghua'])
    Render('topDonghua', Carousel(topDonhua, "Top Donghua"))

    // Action
    const genreAction = FilterItems(movieList, 'genre', ['Action', 'Superhero'])
    Render('action', Carousel(genreAction, 'Action'))

    // MartialArts
    const genreMartialArts = FilterItems(movieList, 'genre', ['Martial Arts'])
    Render('martialArts', Carousel(genreMartialArts, 'Martial Arts'))

    // Comedy
    const genreComedy = FilterItems(movieList, 'genre', ['Comedy'])
    Render('comedy', Carousel(genreComedy, 'Comedy'))

    // Fantasy
    const genreFantasy = FilterItems(movieList, 'genre', ['Fantasy'])
    Render('fantasy', Carousel(genreFantasy, 'Fantasy'))

    // Sci-Fi & Supernatural
    const genreSciFiSuper = FilterItems(movieList, 'genre', ['Sci-Fi', 'Supernatural'])
    Render('scifiSupernatural', Carousel(genreSciFiSuper, 'Sci-Fi & Supernatural'))

    // Adventure
    const genreAdventure = FilterItems(movieList, 'genre', ['Adventure'])
    Render('adventure', Carousel(genreAdventure, 'Adventure'))

    // Drama & Romance
    const genreDramaRomance = FilterItems(movieList, 'genre', ['Drama', 'Romance'])
    Render('dramaRomance', Carousel(genreDramaRomance, 'Drama & Romance'))

    // Horror & Thriller
    const genreShounenLife = FilterItems(movieList, 'genre', ['Slice of Life', 'Shounen'])
    Render('shounenLife', Carousel(genreShounenLife, 'Slice of Life & Shounen'))

    //* Footer
    Render('footer', Footer())

  } catch (error) { console.error("Failed to initialize: ", error) }
}

InitializeApp()