const CARD_VIEW_TIME = 500;
let clickCount = 0;
let scoreCount = 0;
const cardArray = [
    {
        name: '1',
        img: 'images/1.png'
    },
    {
        name: '2',
        img: 'images/2.png'
    },
    {
        name: '3',
        img: 'images/3.png'
    },
    {
        name: '4',
        img: 'images/4.png'
    },
    {
        name: '5',
        img: 'images/5.png'
    },
    {
        name: '6',
        img: 'images/6.png'
    },
    {
        name: '7',
        img: 'images/7.png'
    },
    {
        name: '8',
        img: 'images/8.png'
    },
    {
        name: '1',
        img: 'images/1.png'
    },
    {
        name: '2',
        img: 'images/2.png'
    },
    {
        name: '3',
        img: 'images/3.png'
    },
    {
        name: '4',
        img: 'images/4.png'
    },
    {
        name: '5',
        img: 'images/5.png'
    },
    {
        name: '6',
        img: 'images/6.png'
    },
    {
        name: '7',
        img: 'images/7.png'
    },
    {
        name: '8',
        img: 'images/8.png'
    }
]
//This sorts the array randomly
cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);

const gridDisplay = document.querySelector('#grid');
console.log(gridDisplay);

//Initially Setting the Score to 0
document.getElementById('result').innerHTML = scoreCount;

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/backside.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}
createBoard()
const cardsChosen = [];
const cards = document.querySelectorAll('img');

function flipCard(){
    clickCount++;
    console.log("clickCount: ", clickCount);
    const cardId = this.getAttribute('data-id');
    console.log("clicked card Id", cardId);
    console.log("clicked card name", cardArray[cardId].name);
    this.setAttribute('src', cardArray[cardId].img);
    setTimeout(() => {
        if(this.getAttribute('src') != 'images/success.png'){
            this.setAttribute('src', 'images/backside.png');
        }
    }, CARD_VIEW_TIME);

    if(cardsChosen.length === 0){
        //First Card Picked
        console.log("first card picked");
        cardsChosen.push(cardId);

    } else if(cardsChosen[0] === cardId){
        console.log("same card picked");

    } else if(cardArray[cardsChosen[0]].name === cardArray[cardId].name){

        //Correct Match is Found

        //Update Score
        scoreCount += 2;
        document.getElementById('result').innerHTML = scoreCount;
        if(scoreCount === 16){
            window.alert("Congratulations, You WIN !!!");
        }

        console.log("match");
        console.log("cards: ", cards);
        console.log("cardID: ", cardsChosen[0]);

        //Update Images and remove event listener
        cards[cardsChosen[0]].setAttribute('src', 'images/success.png');
        cards[cardsChosen[0]].removeEventListener('click', flipCard);
        cardsChosen.pop();
        this.setAttribute('src', 'images/success.png');
        this.removeEventListener('click', flipCard);

    } else {
        //Second Card is Not a Match
        console.log("not a match");
        cardsChosen.pop();
    }
}