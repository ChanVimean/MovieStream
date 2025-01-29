const FilterItems = (apiArray, key, value) => {
  // Check for null value, if null return the whole array without any filter
  if (value === null) return apiArray;

  // Check if value is an array
  const isArray = Array.isArray(value);

  // Filter based on key and value
  return apiArray.filter(item => {
    // If the key doesn't exist in the item, ignore it
    if (!item.hasOwnProperty(key)) {
      return false;
    }

    // If the value is an array, check if any element in item[key] matches the value
    if (isArray) {
      if (Array.isArray(item[key])) {
        // Correct comparison to check if any value in item[key] is in value
        return item[key].some(v => value.includes(v));
      }
      return value.some(v => v === item[key]);
    } else {
      return item[key] === value;
    }
  });
};

export default FilterItems;
