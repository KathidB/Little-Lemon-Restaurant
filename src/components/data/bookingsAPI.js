const seededRandom = function (seed) {
  var m = 2 ** 35 - 31
  var a = 185852
  var s = seed % m
  return function () {
    return (s = (s * a) % m) / m
  }
}

export function fetchAPI (date) {
  let result = []
  let dt = new Date(date)
  let seed = dt.getDate()

  let random = seededRandom(seed)
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00')
    }
    if (random() < 0.5) {
      result.push(i + ':30')
    }
  }

  return result
}
// form has 90% to succesfuly submit data.
export function submitAPI (formData) {
  return new Promise(resolve => {
    setTimeout(() => {
      const randomValue = Math.random()

      if (formData && randomValue <= 0.85) {
        resolve(true)
      } else {
        resolve(false)
      }
    }, 1000)
  })
}
