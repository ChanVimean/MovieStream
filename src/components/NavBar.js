

const NavBar = () => {
  return `
    <div class="navbar">

      <!-- Left Side (Logo & Menu) -->
      <section class="menu-side">
        <!-- Logo -->
        <div class="logo">
          <img src="assets/Hana Anime.png" alt="Logo">
        </div>
    
        <!-- Nav Menu -->
        <ul class="nav-list">
          <li class="dropdown">
            <a href="#">Categories
              <span style="width: 20xp; height: 20px; margin-left: 5px; margin-bottom: 10px;">
                <img class="flip-arrow" style="width: 100%; height: 100%;" src="assets/SVG/Arrow-Down.svg" alt="">
              </span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Drama</a></li>
              <li><a href="#">Comedy</a></li>
              <li><a href="#">Horror</a></li>
            </ul>
          </li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">Series</a></li>
          <li><a href="#">TV Shows</a></li>
        </ul>
      </section>
    
      <!-- Right Side (Icons) -->
      <section class="icon-side">
        <!-- Search Icon -->
        <div class="icon">
          <img src="assets/SVG/Search.svg" alt="Search">
        </div>
    
        <!-- Theme Icon -->
        <div class="icon">
          <img src="assets/SVG/Theme.svg" alt="Theme">
        </div>
    
        <!-- Notification Icon -->
        <div class="icon">
          <img src="assets/SVG/Notification.svg" alt="Notification">
        </div>
    
        <!-- Profile Icon -->
        <div class="icon profile">
          <img src="https://wellgroomedgentleman.com/wp-content/uploads/2023/10/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800.jpg" alt="Profile">
        </div>
      </section>

    </div>
  `
}

export default NavBar
