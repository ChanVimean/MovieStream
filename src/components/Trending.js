const Trending = (movies, type, top) => {
  if (!movies.length) return '<p>No Movies Found</p>'

  // Sort by rating (highest to lowest) and get top movies
  const topRate = movies
    .sort((a, b) => b.rating - a.rating)
    .slice(0, top)

  // Duplicate movies for smooth infinite scrolling
  const allMovies = [...topRate, ...topRate]

  // Function to start auto-scrolling
  const startAutoScroll = () => {
    const track = document.querySelector('.automation-track')
    const itemWidth = track.firstElementChild.offsetWidth + 10 // Include margin
    let index = 0
    const speed = 2000 // Adjust speed (2s per slide)

    const moveSlides = () => {
      index++
      track.style.transition = 'transform 0.5s ease-in-out'
      track.style.transform = `translateX(-${index * itemWidth}px)`

      // Reset when reaching duplicated slides
      if (index >= topRate.length) {
        setTimeout(() => {
          track.style.transition = 'none' // Disable transition for instant reset
          index = 0
          track.style.transform = 'translateX(0)'
        }, 500)
      }
    }

    setInterval(moveSlides, speed)
  }

  // Run auto-scroll after the component is rendered
  setTimeout(startAutoScroll, 100)

  return `
    <div class="automation">
      <h2>${type}</h2>
      <div class="automation-container">
        <ul class="automation-track">
          ${allMovies.map(movie => `
            <li>
              <img src="${movie.cover}" alt="${movie.title}">
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `
}

export default Trending
