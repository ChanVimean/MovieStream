

const Model = (movies) => {

  const episode = episodes[0] // Get the first episode

  document.querySelector(".episode").innerHTML = `
    <a href="${episode.link}">Episode ${episode.episode} | Title here</a>
  `


  return `${movies.map(movie => `
      <div class="model">

        <div class="dark-bg"></div>

        <div class="container">

          <section class="top-row">
            <div class="content">
              <iframe src="${movies.video}"
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
              <h2>Title or Episode here</h2>
              <div class="status-container">
                <div class="status">
                  <p>
                    <i class="fa-solid fa-film"></i>
                    <span style="margin: 0 5px;">Series</span>
                    <i class="fa-regular fa-clock"></i>
                    <span style="margin: 0 5px;">110mn</span>
                  </p>
                  <p><span style="font-weight: 600;">Genres</span>: Sample, Sample, Sample</p>
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
                <p><span style="font-weight: 600;">Director:</span> Director Name</p>
                <p>Rate: 9.7</p>
                <p>Country & Language: Japan</p>
                <p style="margin-top: 5px;">Description here</p>
                <p class="release">Release: 2024</p>
              </div>
            </div>

            <div class="reviews">
              <header>Reviews</header>
              <main></main>
            </div>

          </section>

        </div>

      </div>
    `)}
  `
}

export default Model
