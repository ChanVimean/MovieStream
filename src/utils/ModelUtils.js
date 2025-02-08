import Model from "../components/Model.js"

export const showModel = (movie) => {
  const modelContainer = document.getElementById('model-container')

  if (!modelContainer) return console.error("Model container not found!")

  // Inject Model HTML
  modelContainer.innerHTML = Model(movie) 
  modelContainer.style.display = "block"

  // Close when clicking outside
  setTimeout(() => {
    document.addEventListener("click", closeModel)
  }, 100)
}

export const closeModel = (event) => {
  const modelContainer = document.getElementById("model-container")
  const container = modelContainer.querySelector(".container")

  if (container && !container.contains(event.target)) {
    modelContainer.style.display = "none"
    modelContainer.innerHTML = ""
    document.removeEventListener("click", closeModel)
  }
}
