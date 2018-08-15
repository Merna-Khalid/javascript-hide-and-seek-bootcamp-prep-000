function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('target')
}

function increaseRankBy(n) {
  document.getElementById("app").querySelectorAll("ul.ranked-list li")
}