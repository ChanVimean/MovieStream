

const Carousel = (movies, type) => {

  if (!movies.length) return '<p>No Movies Found</p>'

  // Sorting by rating 0-10
  const topRate = movies.sort()

  // Enable Button Scroll
  const enableButtonScroll = () => {

    const track = document.querySelector(".carousel-track")
    const prevBtn = document.querySelector("#prev")
    const nextBtn = document.querySelector("#next")

    if (!track || !prevBtn || !nextBtn) return

    const scrollAmount = track.clientWidth * 1 // Adjust how much it moves

    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: scrollAmount, behavior: "smooth" })
    })

    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    })
  }

  // Run on Mount
  setTimeout(enableButtonScroll, 0)

  return `
    <div class="carousel">
        <h2>${type}</h2>
        <div class="carousel-container">
            <button class="btn-nav" id="prev">&#10094;</button>
            <ul class="carousel-track">
                ${topRate.map(movie => `
                    <li style="background-image: url('${movie.thumbnail}');"></li>
                `).join('')}
            </ul>
            <button class="btn-nav" id="next">&#10095;</button>
        </div>
    </div>
  `
}

export default Carousel