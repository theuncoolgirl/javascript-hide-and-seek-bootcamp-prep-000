function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const currentRanks = document.getElementsByClassName('ranked-list')
  const currentRanks[0] = firstList
  const children = firstList.children
  for (let i = 0; children.length > i; i++) {
    children[i] = children[i] + n
  }
}

function deepestChild() {

}
