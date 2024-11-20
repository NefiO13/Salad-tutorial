let userName = prompt('What is your name?')
let userAge = prompt('How old are you?')
console.log(userName)
console.log(userAge)

let myStory = `Hello ${userName}, How as your doing today? How does it feel to be ${userAge} years old?`
console.log(myStory)

document.getElementById('story').innerHTML = myStory
