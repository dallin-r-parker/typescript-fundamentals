/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

enum Suit {
  Clubs, Diamonds, Heards, Spades
}

enum CardValue {
  Ace, Two, Three, Four, Five,
  Six, Seven, Eight, Nine, Ten,
  Jack, Queen, King
}

type Card = [Suit, CardValue]

let c: Card = [Suit.Clubs, CardValue.Five];
console.log(c);


// export class Dealer {

// }
