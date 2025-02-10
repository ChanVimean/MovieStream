const FilterItems = (apiArray, key, value) => {

  if (value === null) return apiArray

  const isArray = Array.isArray(value)
  const isRange = typeof value === "object" && value.min !== undefined && value.max !== undefined

  // Filter based on key and value
  return apiArray.filter(item => {
    // If the key doesn't exist in the item, ignore it
    if (!item.hasOwnProperty(key)) return false

    if (isRange) {
      // If it's a range (like release year)
      return item[key] >= value.min && item[key] <= value.max
    }

    if (isArray) {
      if (Array.isArray(item[key])) {
        // Correct comparison to check if any value in item[key] is in value
        return item[key].some(v => value.includes(v))
      }
      return value.some(v => v === item[key])
    } else {
      return item[key] === value
    }
  })
}

export default FilterItems