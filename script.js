document.addEventListener('DOMContentLoaded', () =>{
 
const cardArray= [
    {
        name:'fleur',
        img:'../img/poppies.jpg'
    },
    {
        name:'fleur',
        img:'../img/poppies.jpg'
    },
    {
        name:'insecte',
        img:'../img/butterflies.jpg'
    }, 
    {
        name:'insecte',
        img:'../img/butterflies.jpg'
    },
    {
        name:'beche',
        img:'../img/equipment.jpg'
    },
    {
        name:'beche',
        img:'../img/equipment.jpg'
    },
    {
        name:'jardin',
        img:'../img/garden.jpg'
    },
    {
        name:'jardin',
        img:'../img/garden.jpg'
    }

]
cardArray.sort(() => 0.5 - Math.random())

 const grid = document.querySelector('.grid');
 const resultDisplay = document.querySelector('#result');
 let cardsChosen = [];
 let cardsChosenId =[];
 let cardsWon = []


 function checkForMatch(){
     var cards= document.querySelectorAll('img');
     const optionOneId = cardsChosenId[0];
     const optionTwoId = cardsChosenId[1];   
     if (cardsChosen[0] === cardsChosen[1]){
         alert('Bon Match!')
         cards[optionOneId].setAttribute('src', '../img/pageblanche.jpg')
         cards[optionTwoId].setAttribute('src', '../img/pageblanche.jpg')
         cardsWon.push(cardsChosen);

     }else {
         cards[optionOneId].setAttribute('src', '../img/pointdinterrogation.jpg');
         cards[optionTwoId].setAttribute('src', '../img/pointdinterrogation.jpg');
         alert('désolé, recommence')
     }
     cardsChosen = [];
     cardsChosenId = [];
     resultDisplay.textContent = cardsWon.length;
     if(cardsWon.length === cardArray.length/2){
         resultDisplay.textContent= "felicitation";
     }

 }
 // create board

 function createBoard(){
     for ( let i= 0; i <cardArray.length; i++){
         var card =  document.createElement('img');
         card.className="images_card"
         card.setAttribute('src', '../img/pointdinterrogation.jpg');
         card.setAttribute('data-id', i);
         card.addEventListener('click', flipcard)
         grid.appendChild(card);
     }
 }
 //check for matches
 function flipcard(){
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)

    }
 }
 
createBoard()

})