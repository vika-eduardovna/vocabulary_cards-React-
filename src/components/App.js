import Form from "./Form";
import { useState, useEffect } from "react";
import CardsContainer from "./CardsContainer";
import { words } from "../data/words";
import Triggers from "./Triggers";

function App() {
  const [cards, setCards] = useState(words);
  const addCard = (eng, rus) => setCards([
    ...cards,
    {
      id: Date.now(),
      eng,
      rus,
      lang: 'eng'
    }
  ]);

  useEffect(() => {
    const data = localStorage.getItem('cards');
    setCards(JSON.parse(data));
  }, []); 

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards]); 

  const change_to_eng = () => {
    setCards(cards.map(el => {
      el.lang = 'eng';
      return el
    }))
  };

  const change_to_rus = () => {
    setCards(cards.map(el => {
      el.lang = 'rus';
      return el
    }))
  };

  const change_lang = (id) => {
    setCards(cards.map(el => {
      if (el.id === id) {
        el.lang = (el.lang === 'rus') ? 'eng' : 'rus'
      }
      return el
    }))
  }

  return (
    <div >
      <Form add={addCard} />
      <CardsContainer cards={cards} change={change_lang} />
      <Triggers
        change_to_eng={change_to_eng}
        change_to_rus={change_to_rus}
      />
    </div>
  );
}

export default App;
