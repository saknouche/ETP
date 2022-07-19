
let crise = document.querySelector('#crise')

let elements = document.querySelector('#elements')

let div = document.createElement('div')

let card = document.querySelector('.card')

let element1 = elements.children[0]
let element2 = elements.children[1]
let element3 = elements.children[2]
let element4 = elements.children[3]
let element5 = elements.children[4]
let element6 = elements.children[5]
let element7 = elements.children[6]
let element8 = elements.children[7]

crise.addEventListener('click', (e) => {

    e.preventDefault()
    //afficher les élements
    elements.style.display = 'block'
    card.style.display = 'none'
    
    //element1
    elements.children[0].addEventListener('click', (e) => {
        e.preventDefault()
        let element1Response = element1.parentNode.insertBefore(div, element1.nextSibling)
        element1Response.className = "btn btn-danger col mb-4 p-3"
        element1Response.style.fontSize = "25px"
        element1Response.textContent = "Je ne vais pas mieux, j'ai la diarrhée !"
    })

    //element2
    elements.children[1].addEventListener('click', (e) => {
        e.preventDefault()
        let element2Response = element2.parentNode.insertBefore(div, element2.nextSibling)
        element2Response.className = "btn btn-success col mb-4 p-3"
        element2Response.style.fontSize = "25px"
        element2Response.textContent = "La douleur se calme, je vais mieux !"
    })

    //element3
    elements.children[2].addEventListener('click', (e) => {
        e.preventDefault()
        let element3Response = element3.parentNode.insertBefore(div, element3.nextSibling)
        element3Response.className = "btn btn-danger col mb-4 p-3"
        element3Response.style.fontSize = "25px"
        element3Response.textContent = "Je ne vais pas mieux !"
    })

    //element4
    elements.children[3].addEventListener('click', (e) => {
        e.preventDefault()
        let element4Response = element4.parentNode.insertBefore(div, element4.nextSibling)
        element4Response.className = "btn btn-danger col mb-4 p-3"
        element4Response.style.fontSize = "25px"
        element4Response.textContent = "On retrouve une CRP élevée, Je ne vais pas mieux !"
    })

    //element5
    elements.children[4].addEventListener('click', (e) => {
        e.preventDefault()
        let element5Response = element5.parentNode.insertBefore(div, element5.nextSibling)
        element5Response.className = "btn btn-danger col mb-4 p-3"
        element5Response.style.fontSize = "25px"
        element5Response.textContent = "Je suis pris(e) en charge, et repars quelques heures plus tard avec des antalgiques !"
    })

    //element6
    elements.children[5].addEventListener('click', (e) => {
        e.preventDefault()
        let element6Response = element6.parentNode.insertBefore(div, element6.nextSibling)
        element6Response.className = "btn btn-success col mb-4 p-3"
        element6Response.style.fontSize = "25px"
        element6Response.textContent = "Je vais mieux !"
    })

    //element7
    elements.children[6].addEventListener('click', (e) => {
        e.preventDefault()
        let element7Response = element7.parentNode.insertBefore(div, element7.nextSibling)
        element7Response.className = "btn btn-danger col mb-4 p-3"
        element7Response.style.fontSize = "25px"
        element7Response.textContent = "Je ne vais pas mieux, je mets plus de temps à faire passer la crise !"
    })

    //element8
    elements.children[7].addEventListener('click', (e) => {
        e.preventDefault()
        let element8Response = element8.parentNode.insertBefore(div, element8.nextSibling)
        element8Response.className = "btn btn-success col mb-4 p-3"
        element8Response.style.fontSize = "25px"
        element8Response.textContent = "Je suis bien pris(e) en charge !"
    })


})
