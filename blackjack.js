// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"
// Create a variable called isAlive and assign it to true
// Flip its value to false in the appropriate code block 
// Log it out to check that you're doing it right
// Declare a variable called message and assign its value to an empty string
//Reassign the message variable to the string we're logging out
// Log it out!
// Create a startGame() function. Move the conditional
// below (line 22-35) inside the body of the function.
// Store the message-el paragraph in a variable called messageEl
// Display the message in the messageEl using messageEl.textContent
// Give the sum paragraph and id of sum-el on HTML
// Store the sum paragraph in a variable called sumEl
// Render the sum on the page using this format -> "Sum: 14"
//Give the cards paragraph and id of cards-el
//Store the cards paragraph in a variable called cardsEl
//Render the cars on the page using this format -> "Cards: 10 4"
//Create a NEW CARD button, make it run newCard() on click
//Create a function newCard() that logs out "Drawing a new card from the deck!"
//Make sure that the two buttons have some space between each other when they are rendered out vertically */
//Create a card variable, and hard code its value to a number (2-11)
//Add the new card to the sum variable
//Call startGame()
// Create a new function called startGame() that calls renderGame()
// Create a new array - cards - that contains firstCard and secondCard
// Refer to the cards array when rendering out the cards
// Push the card to the cards array
// Create a for loop that renders out all the cards instead of just two
// Push the card to the cards array
// Create a function, getRandomCard(), that always returns the number 5
// Use getRandomCard() to set the values of firstCard and secondCard
// Use the getRandomCard() to set the value of card
// Make the 1st  function return a random number between 1 and 13
// Generate two random numbes
// Re-assign the cards and sum variables so that the game can start
// Only allow the player to get a new card if she IS alive and does NOT have Blackjack
//Create a paragraph with an id of "player-el"
//Create the player object. Give it two keys, name and chips, and set their values
//Grab ahold of the player-el paragraph and store it in a variable called playerEl
//Render the player's name and chips in playerEl

let firstCard = getRandomCard()
let secondCard = getRandomCard()

let player = {
    name: "Natalia",
    chips: 145,
}

let cards = []//[firstCard , secondCard] //array- ordered list of items, they're indexed 
let sum = 0 //firstCard + secondCard
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el') //let let sumEl = document.querySelector("#sum-el")- have to specify to get an id w/ a # , query selector is more broad than elemet ID
let cardsEl=document.querySelector("#cards-el")
let playerEl= document.getElementById("player-el")

playerEl.textContent = player.name +" "+":$"    +player.chips



function getRandomCard(){
    let randomCard= Math.floor( Math.random() )
    if (randomCard > 10){
        return 10
}   else if (randomCard == 1){
    return 11
}   else {
    return randomCard

}


    let randomNumber = Math.floor( Math.random() * 13 )+1
    return randomNumber
}



function startGame(){
    isAlive = true
    let firstCard =  getRandomCard()
    let secondCard = getRandomCard()
    cards=[firstCard,secondCard]
    sum= firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "+ cards[0] + " "+ cards[1]
    for (let i=0; i < cards.length; i+=1){
        cardsEl.textContent += cards[i] + " "
    }



    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message= "Do you want to draw a new card?"
        console.log(message)
    } else if (sum === 21){
        message= "Wohoo! You've got Blackjack!"
        console.log(message)
        hasBlackJack =true //variable become true if it does have blackjack
    } else {
        message= "You're out of the game!"
        console.log(message)
        isAlive = false
    }
    
    messageEl.textContent = message
    console.log(message)
}

 //console.log(isAlive)
   
    //CASH OUT!


function newCard(){
    if (isAlive === true || hasBlackJack === false){
    let card = getRandomCard()
    // let card = 6
    sum = firstCard + secondCard + card //or sum+= card
    sumEl.textContent = "Sum: " + sum

    cards.push(card)
    renderGame()

    }
}
