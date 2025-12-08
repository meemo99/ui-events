/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)




// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt

// #1 Scale Animation

// Stap 1 selecteer Frontend link
let scaleLink = document.querySelector('a[href="#frontend"]')
// Stap 2 Voeg EventListener toe('click')
scaleLink.addEventListener('click', function(){
  // Stap 3 toggle een class aan een element
  scaleLink.classList.toggle('huge')
})

// #3 Translate Animation

let upLink = document.querySelector ('a[href="#and"]')
  upLink.addEventListener('click', function(){
    upLink.classList.toggle('up')
  })

// #4 Shake animation
  // Stap 1 Selecteer de Development link
  let shakeItUp = document.querySelector ('a[href="#development"]')
    console.log('a[href="#development"]')
  // Stap 2 voeg eventListener toe (dblclick)
  shakeItUp.addEventListener('dblclick', function(){
  // stap 3 toggle een class aan een element
  shakeItUp.classList.toggle('shakeit')
  })