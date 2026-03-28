import _4S from "../assets/cards/4S.png";
import _2S from "../assets/cards/2S.png";
import _QC from "../assets/cards/QC.png";
import _10H from "../assets/cards/10H.png";
import _3H from "../assets/cards/3H.png";
import _7H from "../assets/cards/7H.png";
import _10C from "../assets/cards/10C.png";
import _5C from "../assets/cards/5C.png";
import _7C from "../assets/cards/7C.png";
import _6H from "../assets/cards/6H.png";
import _4D from "../assets/cards/4D.png";
import _JC from "../assets/cards/JC.png";
import _5D from "../assets/cards/5D.png";
import _9D from "../assets/cards/9D.png";
import _JD from "../assets/cards/JD.png";
import _6S from "../assets/cards/6S.png";
import _KS from "../assets/cards/KS.png";
import _AS from "../assets/cards/AS.png";
import _8S from "../assets/cards/8S.png";
import _KD from "../assets/cards/KD.png";
import _3S from "../assets/cards/3S.png";
import _AH from "../assets/cards/AH.png";
import _QD from "../assets/cards/QD.png";
import _8D from "../assets/cards/8D.png";
import _3D from "../assets/cards/3D.png";
import _6C from "../assets/cards/6C.png";
import _3C from "../assets/cards/3C.png";
import _6D from "../assets/cards/6D.png";
import _2D from "../assets/cards/2D.png";
import _2H from "../assets/cards/2H.png";
import _8C from "../assets/cards/8C.png";
import _AD from "../assets/cards/AD.png";
import _9S from "../assets/cards/9S.png";
import _7D from "../assets/cards/7D.png";
import _8H from "../assets/cards/8H.png";
import _AC from "../assets/cards/AC.png";
import _7S from "../assets/cards/7S.png";
import _QS from "../assets/cards/QS.png";
import _JH from "../assets/cards/JH.png";
import _QH from "../assets/cards/QH.png";
import _9H from "../assets/cards/9H.png";
import _5S from "../assets/cards/5S.png";
import _10D from "../assets/cards/10D.png";
import _KC from "../assets/cards/KC.png";
import _9C from "../assets/cards/9C.png";
import _4C from "../assets/cards/4C.png";
import _2C from "../assets/cards/2C.png";
import _4H from "../assets/cards/4H.png";
import _5H from "../assets/cards/5H.png";
import _JS from "../assets/cards/JS.png";
import _KH from "../assets/cards/KH.png";
import _10S from "../assets/cards/10S.png";
import greyBack from "../assets/cards/grey_back.png";

import type { JSX } from "react";

interface Props {
  card: string;
}

const cards: { [key: string]: string } = {
  "4S": _4S,
  "2S": _2S,
  QC: _QC,
  "10H": _10H,
  "3H": _3H,
  "7H": _7H,
  "10C": _10C,
  "5C": _5C,
  "7C": _7C,
  "6H": _6H,
  "4D": _4D,
  JC: _JC,
  "5D": _5D,
  "9D": _9D,
  JD: _JD,
  "6S": _6S,
  KS: _KS,
  AS: _AS,
  "8S": _8S,
  KD: _KD,
  "3S": _3S,
  AH: _AH,
  QD: _QD,
  "8D": _8D,
  "3D": _3D,
  "6C": _6C,
  "3C": _3C,
  "6D": _6D,
  "2D": _2D,
  "2H": _2H,
  "8C": _8C,
  AD: _AD,
  "9S": _9S,
  "7D": _7D,
  "8H": _8H,
  AC: _AC,
  "7S": _7S,
  QS: _QS,
  JH: _JH,
  QH: _QH,
  "9H": _9H,
  "5S": _5S,
  "10D": _10D,
  KC: _KC,
  "9C": _9C,
  "4C": _4C,
  "2C": _2C,
  "4H": _4H,
  "5H": _5H,
  JS: _JS,
  KH: _KH,
  "10S": _10S,
  "grey-back": greyBack,
};

export function Card({ card }: Props): JSX.Element {
  return <img src={cards[card]} className="card" alt={card} />;
}
