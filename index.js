function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  var currentRanks = document.getElementsByClassName('ranked-list.children')
  for (let i = 0; currentRanks.length > i; i++) {
    currentRanks[i] = currentRanks[i] + n
  }
}

function deepestChild() {

}
