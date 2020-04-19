const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const cards = [];
suits.forEach(suit => {
    values.forEach(value => cards.push(value + suit));
})
console.log(cards);

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    };

    getName() {
        return this.value + this.suit;
    }
}

class Deck {
    constructor() {
        this.deck = [];
    }
}

const deck = new Deck();
deck.create();
deck.shuffle();
deck.draw(5)