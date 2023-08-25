// Javascript function to check if two
// strings are isomorphic

// catching the DOM

const button = document.querySelector('.btn')
const displayResult = document.querySelector('.result')
const size = 256 // inintialize the maximum number of characters in a string

// EventListener
button.addEventListener('click', isomorphicString)

// Event handeler
function isomorphicString () {
  const s = document.querySelector('.string1').value
  const t = document.querySelector('.string2').value

  if (s.length !== t.length) return displayResult.innerHTML = 'The two strings must bee the same';

  const mapa = new Map();
  const mapb = new Map();

  for (let i = 0; i < s.length; i++) {
    if (mapa.has(s[i])) {
      if (mapa.get(s[i]) !== t[i]) {
        return displayResult.innerHTML = 'false';
      }
    } else {
      mapa.set(s[i], t[i])
    }

    if (mapb.has(t[i])) {
      if (mapb.get(t[i]) !== s[i]) {
        return displayResult.innerHTML = 'false';
      }
    } else {
      mapb.set(t[i], s[i])
    }
  }

  return displayResult.innerHTML = 'true'

}
