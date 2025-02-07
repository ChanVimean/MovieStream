import useState from '../utils/useState.js'

const Hero = (movies) => {
  const topRated = movies.sort((a, b) => b.rating - a.rating).slice(0, 5)

  let extendedMovies = [...topRated]

  const [getCurrentIndex, setCurrentIndex, subscribe] = useState(0)

  const startAutoSlide = () => {
    requestAnimationFrame(() => {
      const track = document.querySelector(".hero-track")
      const slides = document.querySelectorAll(".hero-slide")
      const dots = document.querySelectorAll(".dot")

      if (!track || slides.length === 0 || dots.length === 0) return console.warn("Carousel elements not found. Retrying...")

      // Dynamically set track width to fit all slides
      track.style.width = `${slides.length * 100}%`
      slides.forEach((slide) => (slide.style.width = "100%"))

      // Function to update slides
      const updateSlide = (index, instant = false) => {
        if (instant) track.style.transition = "none" // Instant reset
        else track.style.transition = "transform 0.5s ease-in-out"

        track.style.transform = `translateX(-${100 * index}%)`

        dots.forEach((dot, i) => dot.classList.toggle("active", i === index % topRated.length))
      }

      subscribe(updateSlide)

      setInterval(() => {
        let nextIndex = getCurrentIndex() + 1

        // Use ternary to dynamically extend the array once we reach the end
        extendedMovies = nextIndex >= topRated.length
          ? [...topRated] // Extend the array if we've reached the end
          : extendedMovies

        // Reset index when the loop reaches the end of the extendedMovies array
        if (nextIndex >= extendedMovies.length) {
          nextIndex = 0 // Reset to 0 when we've looped through all slides
        }

        setCurrentIndex(nextIndex)
        updateSlide(nextIndex)
      }, 3000)
    })
  }

  setTimeout(startAutoSlide, 500) // Delay ensures DOM is ready

  return `
    <div class="hero">
      <div class="hero-container">
        <ul class="hero-track">
          ${extendedMovies.map((movie, index) => `
            <li class="hero-slide ${index === 0 ? "active" : ""}">
              <img src="${movie.cover}" alt="Movie Poster">
              <div class="hero-content">
                <h2>${movie.title}</h2>
                <div class="duration">
                  <i class="fa-regular fa-clock"></i>
                  <p>${movie.duration}</p>
                </div>
                <p class="description">${movie.description}</p>
                <div class="btn-container">
                  <button class="watch-btn hero-btn">
                    <i class="fa-solid fa-play"></i>
                    <span>Watch Now</span>
                  </button>
                  <button class="detail-btn hero-btn">
                    <i class="fa-solid fa-circle-info"></i>
                    <span>Detail</span>
                  </button>
                </div>
              </div>
            </li>
          `).join("")}
        </ul>

        <!-- Navigation -->
        <div class="dot-container">
          ${topRated.map(
            (_, index) => `
              <div class="dot ${index === 0 ? "active" : ""}" data-index="${index}"></div>
            `).join("")}
        </div>
      </div>
    </div>
  `
}

export default Hero
