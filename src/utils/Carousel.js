

const Carousel = (movies) => {

  if (!movies.length) return '<p>No Movies Found</p>'

  return `
    <div class="carousel">
        <h2>New Release</h2>
        <div class="carousel-container">
            <button class="prev">&#10094;</button>
            <ul class="carousel-track">
                ${movies.map(movie => `
                    <li style="background-image: url('${movie.cover}');"></li>
                `).join("")}
            </ul>
            <button class="next">&#10095;</button>
        </div>
    </div>
  `;
}

export default Carousel