let range = document.querySelector('.range')
let divider = document.querySelector('body')

range.addEventListener('input', () => {
  let out = Math.abs(range.value)
  divider.style.setProperty('--divider', out)
})