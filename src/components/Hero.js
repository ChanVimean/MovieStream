const Hero = (movies) => {
  const topRated = movies
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4); // Get top 4 movies

  // Function for auto sliding
  const startAutoSlide = () => {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const track = document.querySelector('.hero-track');
    let currentIndex = 0;

    // Function to go to the next slide
    const goToNextSlide = () => {
      // Remove 'active' class from all slides and dots
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));

      // Update to the next slide (loop back to start)
      currentIndex = (currentIndex + 1) % slides.length;

      // Add 'active' class to the next slide and dot
      slides[currentIndex].classList.add('active');
      dots[currentIndex].classList.add('active');

      // Move the track to the next slide by using transform
      track.style.transform = `translateX(-${100 * currentIndex}%)`;
    };

    // Auto slide every 3 seconds
    setInterval(goToNextSlide, 2000);
  };

  // Ensure auto slide logic runs after the component is rendered
  setTimeout(startAutoSlide, 0); // Delay it by a bit to make sure the DOM is ready

  return `
    <div class="hero">
      <div class="hero-container">
        <ul class="hero-track">
          ${topRated.map((movie, index) => `
            <li class="hero-slide ${index === 0 ? 'active' : ''}">
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
          `).join('')}
        </ul>

        <!-- Navigation -->
        <div class="dot-container">
          ${topRated
            .map((_, index) => `
              <div class="dot ${index === 0 ? 'active' : ''}"></div>
            `).join('')
          }
        </div>
      </div>
    </div>
  `;
};

export default Hero;
