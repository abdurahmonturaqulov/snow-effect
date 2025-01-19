setInterval(createSnow, 100)

function createSnow() {
  const snow = document.createElement('i')
  snow.classList.add('fa')
  snow.classList.add('fa-snowflake')

  snow.style.left = Math.random() * window.innerWidth + 'px'
  snow.style.animationDirection = Math.random() * 3 + 2 + 's'
  snow.style.opacity = Math.random()
  document.body.append(snow)
  snow.style.fontSize = Math.random * 10 + 10 + 'px'

  setTimeout(() => {
    snow.remove()
  }, 4000)
}
