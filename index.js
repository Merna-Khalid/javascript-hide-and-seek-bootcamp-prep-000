function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('target')
}

function increaseRankBy(n) {
  const lis = document.getElementById("app").querySelectorAll("ul.ranked-list li")
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  const d = document.getElementById(grand-node)
  var child = d
  while(child.childNodes.length) 
  {
    var max = 0
    var index = 0
    for(var i = 0; i < child.childNodes.length; i++) {
      if(child.childNodes[i].childNodes.length > nax) {
        max = child.childNodes[i].childNodes.length
        index = i
      }
    }
    child = child.childNodes[i]
  }
  return child
}