function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  const nested = document.getElementById(nested)
  return document.querySelector(nested.target)
}
