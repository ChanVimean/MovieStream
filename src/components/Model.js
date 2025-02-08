

const Model = (movie) => {

  if (
    !movie ||
    !movie.title ||
    !movie.type ||
    !movie.description ||
    !movie.genre ||
    !movie.release ||
    !movie.rating ||
    !movie.language ||
    !movie.cover ||
    !movie.video ||
    !movie.duration ||
    !movie.thumbnail ||
    !movie.studio ||
    !movie.country ||
    !movie.episodes
  ) {
    return console.error("Error: Missing required movie properties! ", movie)
  }


  return `
    <div class="model" id="model-overlay">

      <div class="dark-bg"></div>

      <div class="container">

        <section class="top-row">
          <div class="content">
            <iframe src="${movie.video}"
              frameborder="0"
              allowfullscreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
          </div>
          <div class="season">
            <header>
              <h2 class="active">Season 1</h2>
              <h2 class="inactive">Season 2</h2>
              <h2 class="inactive">Season 3</h2>
            </header>
            <main>
              <div class="episode">
                <a href="#">Episode 1 | Title here</a>
              </div>
            </main>
          </div>
        </section>

        <section class="bottom-row">

          <div class="description">
            <h2>${movie.title}</h2>
            <div class="status-container">
              <div class="status">
                <p>
                  <i class="fa-solid fa-film"></i>
                  <span style="margin: 0 5px;">${movie.type[0]}</span>
                  <i class="fa-regular fa-clock"></i>
                  <span style="margin: 0 5px;">${movie.duration}mn</span>
                </p>
                <p><span style="font-weight: 600;">Genres</span>: 
                  ${
                    Array.isArray(movie.genre) 
                    ? movie.genre.length > 2 
                      ? movie.genre.slice(0, 2).join(", ") + "<br>" + movie.genre.slice(2).join(", ")
                      : movie.genre.join(", ")
                    : movie.genre
                  }
                </p>
              </div>
              <div class="reaction">

                <div class="reaction-container">
                  <button>
                    <i class="fa-regular fa-heart"></i>
                  </button>
                  <p>21.56K</p>
                  <p style="margin: 0 5px; font-weight: 300;">|</p>
                  <button>
                    <i class="fa-regular fa-thumbs-down"></i>
                  </button>
                </div>

                <button class="share">
                  <i class="fa-solid fa-share"></i>
                  <span style="font-size: 1.1rem;">Share</span>
                </button>

                <button class="share">
                  <i style="margin-right: 5px;" class="fa-solid fa-arrow-down"></i>
                  <span style="font-size: 1.1rem;">Download</span>
                </button>

              </div>
            </div>
            <div class="detail">
              <p>110K Views<span style="opacity: 0.5; margin-left: 15px;">4 weeks ago</span></p>
              <p><span style="font-weight: 600;">Director/Studio:</span>${movie.studio}</p>
              <p>Rate: 9.7</p>
              <p>Country & Language: ${movie.language}</p>
              <p style="margin-top: 5px;">${movie.description}</p>
              <p class="release">Release: ${movie.release}</p>
            </div>
          </div>

          <div class="reviews">
            <header>Reviews</header>
            <main></main>
          </div>

        </section>

      </div>

    </div>
  `
}

export default Model
