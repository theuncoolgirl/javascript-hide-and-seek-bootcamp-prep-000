function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const currentRanks = document.getElementsByClassName('ranked-list')
  const firstList = currentRanks[0]
  const secondList = currentRanks[1]
  var firstChildren = firstList.children
  var secondChildren = secondList.children

  for (let i = 0; firstChildren.length > i; i++) {

  firstChildren[i].innerHTML = parseInt(firstChildren[i].innerHTML) + n
  }
  for (let i = 0; secondChildren.length > i; i++) {

  secondChildren[i].innerHTML = parseInt(secondChildren[i].innerHTML) + n
  }
}

function deepestChild() {
  var element = document.getElementbyId('grand-node')
  while (element.children) {
    element = element.children
  }
  return element.innerHTML
}
