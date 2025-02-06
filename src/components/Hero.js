import useState from "../utils/useState.js";

const Hero = (movies) => {
  const topRated = movies.sort((a, b) => b.rating - a.rating).slice(0, 4);
  const [getCurrentIndex, setCurrentIndex, subscribe] = useState(0);

  const startAutoSlide = () => {
    requestAnimationFrame(() => {
      const track = document.querySelector(".hero-track");
      const slides = document.querySelectorAll(".hero-slide");
      const dots = document.querySelectorAll(".dot");

      if (!track || slides.length === 0 || dots.length === 0) {
        console.warn("Carousel elements not found. Retrying...");
        return;
      }

      track.style.width = `${slides.length * 100}%`; // Ensure track fits all slides

      const updateSlide = (index) => {
        slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
        dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
        track.style.transform = `translateX(-${100 * index}%)`;
      };

      subscribe(updateSlide); // Ensure the UI updates with state changes

      setInterval(() => {
        const nextIndex = (getCurrentIndex() + 1) % slides.length;
        setCurrentIndex(nextIndex);
      }, 2000);
    });
  };

  setTimeout(startAutoSlide, 500); // Delay to ensure DOM is loaded

  console.log(document.querySelectorAll('.hero-slide'));

  return `
    <div class="hero">
      <div class="hero-container">
        <ul class="hero-track">
          ${topRated
            .map(
              (movie, index) => `
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
          `
            )
            .join("")}
        </ul>

        <!-- Navigation -->
        <div class="dot-container">
          ${topRated
            .map(
              (_, index) => `
            <div class="dot ${index === 0 ? "active" : ""}" data-index="${index}"></div>
          `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
};

export default Hero;
