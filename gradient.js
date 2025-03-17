const [red, green, blue] = [208, 148, 234]
const section1 = document.querySelector('body')

//70,24,97

window.addEventListener('scroll', () => {
  const y_r = 1 + (window.scrollY) / 175
  const y_b = 1 + (window.scrollY) / 250
  const y_g = 1 + (window.scrollY) / 150
  const [r, g, b] = [red/y_r, green/y_g, blue/y_b].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})