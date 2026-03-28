import game from "./assets/game.svg";
import stop from "./assets/stop.svg";
import _card from "./assets/card.svg";

import { createDeck } from "./helpers/deck";
import { Flip, ToastContainer, toast } from "react-toastify";

import "./App.css";
import { useState, type JSX } from "react";
import { Card } from "./components/Card";

function App() {
  const [score, setScore] = useState<number[]>([0, 0]); // ok
  const [deck, setDeck] = useState<string[]>([]); // ok
  const [listCards, setListCards] = useState<{
    [key: number]: JSX.Element[];
  }>({
    0: [<Card card="grey-back" key="grey-back" />],
    1: [<Card card="grey-back" key="grey-back" />],
  });

  const COMPUTER = 1;

  const [isDisableButton, setIsDisableButton] = useState(true); // ok
  const [isWinner, setIsWinner] = useState(false); // ok

  const notifySuccess = (message: string) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });
  };

  const notifyError = (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });
  };

  const askCard = (player: number = 0): number => {
    let scoreGlobal = score[player];

    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    }

    const card: string = deck.pop()!;

    scoreGlobal += cardValue(card);

    addCard(card, player);
    totalScord(card, player);

    if (!isWinner) checkWinner(scoreGlobal);
    return scoreGlobal;
  };

  const cardValue = (card: string): number => {
    return card.includes("A")
      ? 11
      : card.includes("J") || card.includes("Q") || card.includes("K")
        ? 10
        : parseInt(card.substring(0, card.length - 1));
  };

  const totalScord = (card: string, player: number = 0) => {
    setScore((prevScore) => {
      const newScore = [...prevScore];
      newScore[player] += cardValue(card);
      return newScore;
    });
  };

  const checkWinner = (score: number): void => {
    if (score > 21) {
      notifyError("Lo siento mucho, perdiste");
      setIsDisableButton(true);
      setIsWinner(true);

      computerShift();
    } else if (score === 21) {
      notifyError("21, genial!");
      setIsDisableButton(true);
      setIsWinner(true);

      computerShift();
    }
  };

  const addCard = (card: string, player: number = 0): void => {
    setListCards((prevListCards) => {
      const newListCards: JSX.Element[] = [...prevListCards[player]];

      if (
        prevListCards[player].length === 1 &&
        prevListCards[player][0].key === "grey-back"
      ) {
        newListCards.pop();
      }

      newListCards.push(<Card card={card} key={card} />);
      return { ...prevListCards, [player]: newListCards };
    });
  };

  const determineWinner = (total: number) => {
    const [player] = score;

    setTimeout(() => {
      if (total === player) {
        notifyError("Nadie gana :(");
      } else if (player > 21) {
        notifyError("Computadora gana");
      } else if (total > 21) {
        notifySuccess("Jugador Gana");
      } else {
        notifyError("Computadora gana");
      }
    }, 100);
  };

  const computerShift = () => {
    let scoreGlobal = score[COMPUTER];
    do {
      scoreGlobal += askCard(COMPUTER);
    } while (scoreGlobal < score[0] && score[0] <= 21);

    determineWinner(scoreGlobal);
  };

  const stopGame = (): void => {
    notifySuccess(`Te has detenido con ${score[0]} puntos`);
    setIsDisableButton(true);
    computerShift();
  };

  const newGame = (): void => {
    setDeck(createDeck());
    setListCards({
      0: [<Card card="grey-back" key="grey-back" />],
      1: [<Card card="grey-back" key="grey-back" />],
    });
    setScore([0, 0]);
    setIsDisableButton(false);
    setIsWinner(false);
  };

  return (
    <>
      <h1 className="title">Blackjack</h1>

      <section id="center">
        <section id="next-steps">
          <div id="social">
            <ul>
              <li>
                <button onClick={newGame}>
                  <img
                    className="button-icon"
                    role="presentation"
                    src={game}
                    alt="Hangman"
                  />
                  Nuevo Juego
                </button>
              </li>
              <li>
                <button disabled={isDisableButton} onClick={() => askCard(0)}>
                  <img
                    className="button-icon"
                    role="presentation"
                    src={_card}
                    alt="Hangman"
                  />
                  Pedir Carta
                </button>
              </li>
              <li>
                <button
                  disabled={score[0] === 0 || isDisableButton}
                  onClick={stopGame}
                >
                  <img
                    className="button-icon"
                    role="presentation"
                    src={stop}
                    alt="Hangman"
                  />
                  Detener
                </button>
              </li>
            </ul>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Flip}
          />
        </section>

        <div>
          <h2>
            Jugador - <span>{score[0]} </span>
          </h2>
        </div>

        <div className="hero">{listCards[0].map((card) => card)}</div>
        <div>
          <h2>
            Computadora - <span>{score[COMPUTER]} </span>
          </h2>
        </div>

        <div className="hero">{listCards[COMPUTER].map((card) => card)}</div>
      </section>
    </>
  );
}

export default App;
