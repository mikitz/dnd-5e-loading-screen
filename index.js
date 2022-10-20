function indexSetup(){
    tippy("#submit-ideas", {
        content: "Submit tip idea(s)"
    })
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
    updateHint(hint, elementAuthor, elementHint)
    setInterval(function(){
        let hint = randomItemFromObject(hints)
        updateHint(hint, elementAuthor, elementHint)
    }, 30 * 1000)
}
function updateHint(hint, elementAuthor, elementHint){
    elementAuthor.classList.remove('fade-in')
    elementHint.classList.remove('fade-in')
    elementAuthor.classList.add('fade-out')
    elementHint.classList.add('fade-out')

    setTimeout(function(){
        elementAuthor.innerHTML = ''
        elementHint.innerHTML = ''

        elementAuthor.classList.remove('fade-out')
        elementHint.classList.remove('fade-out')

        elementAuthor.classList.add('fade-in')
        elementHint.classList.add('fade-in')

        let a = document.createElement('a')
        if (hint.SOURCE) a.href = hint.SOURCE
        a.innerHTML = hint.AUTHOR
        a.target = "_blank"
        a.rel = "noopener noreferrer"
        elementAuthor.appendChild(a)

        let span = document.createElement('span')
        span.innerHTML = hint.HINT
        elementHint.appendChild(span)
    }, 3.1 * 1000)
}