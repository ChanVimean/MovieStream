const useState = (initialValue) => {
  let state = initialValue;
  const listeners = []

  const getState = () => state

  const setState = (newValue) => {
    state = newValue
    listeners.forEach((listener) => listener(state))
  }

  const subscribe = (listener) => listeners.push(listener)

  return [getState, setState, subscribe]
}

export default useState