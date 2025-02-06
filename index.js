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

    //* Render App

    //* Navigation
    Render('navbar', NavBar())


    // Hero Section
    Render('hero', Hero(movieList))

    // Trending
    Render('trending', Trending(movieList, "Trending", 15))

    // New Releases
    const newRelease = FilterItems(movieList, 'release', "2020")
    Render('newReleases', Carousel(newRelease, "New Releases"))

    // Continue
    // Up Coming

    // Top Anime
    const topAnime = FilterItems(movieList, 'type', ["Anime"])
    Render('topAnime', Carousel(topAnime, "Top Anime"))

    // Top Donghua
    const topDonhua = FilterItems(movieList, 'type', ["Donghua"])
    Render('topDonghua', Carousel(topDonhua, "Top Donhua"))

    // Animation
    const animation = FilterItems(movieList, 'type', ["Animation"])
    Render('animation', Carousel(animation, "Animation"))

    // Action
    const genreAction = FilterItems(movieList, 'genre', ['Action'])
    Render('action', Carousel(genreAction, 'Action'))

    // Comedy
    const genreComedy = FilterItems(movieList, 'genre', ['Comedy'])
    Render('comedy', Carousel(genreComedy, 'Comedy'))

    // Fantasy
    const genreFantasy = FilterItems(movieList, 'genre', ['Fantasy'])
    Render('fantasy', Carousel(genreFantasy, 'Fantasy'))

    // Sci-Fi & Supernatural
    const genreSciFiSuper = FilterItems(movieList, 'genre', ['Sci-Fi', 'Supernatural'])
    Render('scifiSupernatural', Carousel(genreSciFiSuper, 'Sci-Fi & Supernatural'))

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



    //* Footer
    Render('footer', Footer())

  } catch (error) {
    console.error("Failed to initialize: ", error)
  }
}

InitializeApp()