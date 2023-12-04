function LCG(seed) {
  const m = 2 ** 31 // modulus
  const a = 1103515245 // multiplier
  const c = 12345 // increment

  seed = (a * seed + c) % m

  return seed / (m - 1)
}

export function fetchAPI(date) {
  let result = []
  let random = LCG(date.getDate())

  for (let i = 18; i <= 22; i++) {
    if (random < 0.3) {
      i < 20 && result.push(i + ':00')
    } else if (random > 0.3 && random < 0.6) {
      i > 20 ? result.push(i + ':30') : result.push(i + ':00')
    } else if (random > 0.6) {
      i > 19 && result.push(i + ':30')
    }
  }
  return result
}

export function submitAPI(formData) {
  return true
}
