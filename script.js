let Place = prompt('Please enter a place')
let Noun = prompt('Please enter a noun')
let Adjective = prompt('Please enter an adjective')
let Verb = prompt('Please enter a verb')
let Time = prompt('Please enter a time')
let Number = prompt('Please enter any number of your choice')


console.log(Place)
console.log(Noun)
console.log(Adjective)
console.log(Verb)
console.log(Time)
console.log(Number)


const noun = document.getElementById("noun").value
const verb = document.getElementById("verb").value
const adjective = document.getElementById("adjective").value
const place = document.getElementById("place").value



//start of story\\

const myStory = `Deep in the heart of ${Place}, a brave ${Noun} set out on an epic side quest 
before ${Place}. Armed with a ${Adjective} spirit and an unshakable ${Adjective}, 
the ${Noun} had to ${Verb} through ${Adjective} landscapes, face ${Adjective}
 challenges and uncover the secrets hidden within ${Place}...`




document.getElementById('story').innerHTML = myStory
