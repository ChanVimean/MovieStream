const Carousel = (movies, type) => {
  if (!movies.length) return `<p>No Movies Found</p>`

  const uniqueId = `carousel-${type.replace(/\s+/g, '-').toLowerCase()}`

  const enableButtonScroll = () => {
    const carousel = document.querySelector(`#${uniqueId}`)
    if (!carousel) return

    const track = carousel.querySelector(".carousel-track")
    const prevBtn = carousel.querySelector(".btn-prev")
    const nextBtn = carousel.querySelector(".btn-next")

    if (!track || !prevBtn || !nextBtn) return

    // Get single item width dynamically
    const itemWidth = track.querySelector("li")?.clientWidth || 200 // Default to 200px if not found

    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: itemWidth, behavior: "smooth" })
    })

    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -itemWidth, behavior: "smooth" })
    })
  }

  setTimeout(enableButtonScroll, 100)

  return `
    <div class="carousel" id="${uniqueId}">
        <h2>${type}</h2>
        <div class="carousel-container">
            <button class="btn-nav btn-prev">&#10094;</button>
            <ul class="carousel-track">
                ${movies
                  .sort((a, b) => b.rating - a.rating)
                  .map(movie => `<li style="background-image: url('${movie.thumbnail}');"></li>`)
                  .join('')}
            </ul>
            <button class="btn-nav btn-next">&#10095;</button>
        </div>
    </div>
  `
}

export default Carousel
