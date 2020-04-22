function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  const nestElement = document.getElementById('nested')
  return document.querySelector(nestElement.target)
}
