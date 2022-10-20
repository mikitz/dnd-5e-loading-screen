function setIndexListeners(){

}
// Function to load a local JSON from data/JSONs/
async function fetchLocalJson(JSON){
    const response = await fetch(`${JSON}.json`)
    return data = await response.json()
}

function randomItemFromObject(object){
    return object[Math.floor((Math.random()*object.length))];
}

async function loadingScreen(){
    const hints = await fetchLocalJson('data')
    const elementHint = document.getElementById('hint')
    const elementAuthor = document.getElementById('author')

    let hint = randomItemFromObject(hints)
    let a = document.createElement('a')
    if (hint.SOURCE) a.href = hint.SOURCE
    a.innerHTML = hint.AUTHOR
    elementAuthor.appendChild(a)

    let span = document.createElement('span')
    span.innerHTML = hint.HINT
    elementHint.appendChild(span)

    setInterval(function(){
        elementAuthor.innerHTML = ''
        elementHint.innerHTML = ''

        let hint = randomItemFromObject(hints)
        let a = document.createElement('a')
        if (hint.SOURCE) a.href = hint.SOURCE
        a.innerHTML = hint.AUTHOR
        elementAuthor.appendChild(a)

        let span = document.createElement('span')
        span.innerHTML = hint.HINT
        elementHint.appendChild(span)
    }, 30 * 1000)
}