function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function netstedTarget() {
  const nested = document.getElementById('nested')
  return document.querySelector(nested.target)
}
