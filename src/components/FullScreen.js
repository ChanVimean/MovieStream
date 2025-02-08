const FullScreen = (video) => {

  console.log("🎬 Video URL received in FullScreen:", video)

  return `
    <div class="full-screen">
      <iframe
        src="https://www.youtube.com/embed/9dTwRR0efU0?si=C_R8ONyoSWHNnj18"
        frameborder="0"
        allowfullscreen>
      </iframe>
    </div>
  `
}

export default FullScreen
