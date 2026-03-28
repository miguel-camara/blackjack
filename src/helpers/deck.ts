import _ from 'underscore';

let deck = [];
const types: string[] = ['C', 'D', 'H', 'S'],
  specials: string[] = ['A', 'J', 'Q', 'K'];


export const createDeck = () => {

  deck = [];
  for (let i = 2; i <= 10; i++) {
    for (const tipe of types) {
      deck.push(i + tipe);
    }
  }

  for (const type of types) {
    for (const special of specials) {
      deck.push(special + type);
    }
  }
  return _.shuffle(deck);;
}
