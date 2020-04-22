function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const currentRanks = document.getElementsByClassName('ranked-list')
  const firstList = currentRanks[0]
  const children = firstList.children

  for (let i = 0; children.length > i; i++) {

    children[i] = parseInt(`${children[i]}`, 10) + n
  }
}

function deepestChild() {

}
