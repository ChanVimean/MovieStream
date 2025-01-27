const Render = (component, targetId) => {
  const target = document.getElementById(targetId)
  if (target) target.innerHTML = component
  else console.error(`Target "${targetId}" not found`)
}

export default Render