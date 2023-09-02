// Javascript function to check if two
// strings are isomorphic

// catching the DOM

const button = document.querySelector('.btn')
const displayResult = document.querySelector('.result')

// listening to a click button
button.addEventListener('click', isomorphicString)

// Event handeler
function isomorphicString () {
  const s = document.querySelector('.string1').value
  const t = document.querySelector('.string2').value

  if (s.length !== t.length) {
    displayResult.innerHTML = 'The two strings must bee the same'
  }
  const mapa = new Map()
  const mapb = new Map()
  for (let i = 0; i < s.length; i++) {
    if (mapa.has(s[i])) {
      if (mapa.get(s[i]) !== t[i]) {
        console.log(mapa.get(s[i]))
        displayResult.innerHTML = 'false'
        return
      }
    } else {
      mapa.set(s[i], t[i])
      console.log(mapa)
    }

    if (mapb.has(t[i])) {
      if (mapb.get(t[i]) !== s[i]) {
        displayResult.innerHTML = 'false'
        return
      }
    } else {
      mapb.set(t[i], s[i])
    }
  }
  displayResult.innerHTML = 'true'
}
