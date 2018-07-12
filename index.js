const getFirstSelector = function(selector) {
    return document.querySelector(selector)
}

const nestedTarget = function() {
    return document.querySelector("#nested .target")
}

const deepestChild = function() {
    const element = document.querySelector('#grand-node div div div div')
    return element
}

const increaseRankBy = function(n) {
    let elements = document.getElementById('app').querySelectorAll("ul.ranked-list li")
    for(let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = (parseInt(elements[i].innerHTML) + n).toString()
    }
}