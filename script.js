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






//start of story\\

let myStory = `Deep in the heart of <span class="${Place}"></span>, a brave <span class="${Noun}"></span> set out on an epic side quest 
before <span class="${Place}"></span>. Armed with a <span class="${Adjective}"></span> spirit and an unshakable <span class="${Adjective}"></span>, 
the <span class="${Noun}"></span> had to <span class="${Verb}"></span> through <span class="${Adjective}"></span> landscapes, face <span class="${Adjective}"></span>
 challenges and uncover the secrets hidden within. In the Pyramids of <span class="${Place}"></span>, in the deep tombs of <span class="${Noun}></span>, 
 <span class="${Noun}"></span> finds ancient treasure that is being protected by <span class="${Noun}"></span>. Will <span class="${Noun}"></span> be able to
 get the treasure without perishing??`

console.log(myStory);


document.getElementById('myStory').innerHTML = myStory
