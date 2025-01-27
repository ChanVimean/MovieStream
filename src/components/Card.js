
const Card = ({ items, style}) => {

  return `${
      items.map(item => `
        <li class="${style}">
          ${item}
        </li>
      `).join('')
    }`
}

export default Card