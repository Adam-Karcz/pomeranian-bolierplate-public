import { useState } from 'react';
import './styles.css';
import mole from './krecik.png';
import { useEffect } from 'react';

const fields = [
  { id: 1, hasCliked: false },
  { id: 2, hasCliked: false },
  { id: 3, hasCliked: false },
  { id: 4, hasCliked: false },
  { id: 5, hasCliked: false },
  { id: 6, hasCliked: false },
  { id: 7, hasCliked: false },
  { id: 8, hasCliked: false },
  { id: 9, hasCliked: false },
  { id: 10, hasCliked: false },
];

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

const getRandomMoleFields = (numMoles) => {
  const moleFields = [];

  while (moleFields.length < numMoles) {
    const randomField = getRandomInt(10);
    if (!moleFields.includes(randomField)) moleFields.push(randomField);
  }
  return moleFields;
};

const game_time = 60;
const interval_time = 1000;

export const MoleGame = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [initialTime, setInitialTime] = useState(game_time);
  const [time, setTime] = useState(initialTime);
  const [numMoles, setNumMoles] = useState(1);
  const [gameFields, setGameFields] = useState(fields);
  const [moleFieldIds, setmoleFieldIds] = useState(getRandomMoleFields(1));
  const [intervalId, setIntervalId] = useState(null);
  const [score, setScore] = useState(0);

  const handleStartGame = () => {
    setTime(initialTime);
    setScore(0);
    setIsGameStarted(true);
    setIsGameEnded(false);
    const id = setInterval(() => {
      setmoleFieldIds(getRandomMoleFields(numMoles));
    }, interval_time);
    setIntervalId(id);
  };

  const handleStopGame = () => {
    setIsGameStarted(false);
    setIsGameEnded(true);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetClickedField = () => {
    setTimeout(() => {
      setGameFields(fields);
    }, 300);
  };

  const scoreUpdate = (isMolePresent) => {
    isMolePresent ? setScore(score + 1) : setScore(score - 1);
  };

  const handleClickField = (clickedField, isMolePresent) => {
    setGameFields(
      gameFields.map((field) => {
        return {
          ...field,
          hasCliked: field.id === clickedField.id,
        };
      })
    );
    resetClickedField();
    scoreUpdate(isMolePresent);
  };

  useEffect(() => {
    if (isGameStarted) {
      const intervalId = setInterval(() => {
        time > 0 ? setTime(time - 1) : handleStopGame();
      }, 1000);
      return () => clearInterval(intervalId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, isGameStarted]);

  // useEffect(() => {
  //   if (time === 0) {
  //     handleStopGame();
  //   }
  // }, [time]);

  return (
    <div>
      <h2>
        Gra polegająca na podążaniu za krecikiem i trafieniu w kwadrat na którym
        się pojawił.
      </h2>
      {isGameStarted ? (
        <div>
          Gra wystartowała
          <div className="game-buttons">
            {/* Gra nie wystartowała */}
            <div>
              <div className="title">Czas do końca</div>
              <div className="content">
                <button className="app-button" disabled={true}>
                  {time}
                </button>
              </div>
            </div>

            <div>
              <div className="title">Wynik</div>
              <div className="content">
                <button className="app-button" disabled={true}>
                  {score}
                </button>
              </div>
            </div>

            <div>
              <div className="title">Przyciski sterujące</div>
              <div className="content">
                <button className="app-button" onClick={handleStopGame}>
                  Stop
                </button>
              </div>
            </div>
          </div>
          <div className="game-board">
            {/* Widok rozgrywki... */}
            {gameFields.map((field) => {
              const isMolePresent = moleFieldIds.includes(field.id);
              const isClickedWithMole =
                isMolePresent && field.hasCliked ? 'green' : '';
              const isClickedWithoutMole =
                !isMolePresent && field.hasCliked ? 'red' : '';
              return (
                <div
                  key={field.id}
                  onClick={() => handleClickField(field, isMolePresent)}
                  className={`field ${isClickedWithMole} ${isClickedWithoutMole}`}
                >
                  {isMolePresent && <img src={mole} alt="mole" />}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="game-buttons">
          {isGameEnded && <div>Gratulacje, zdobyłeś {score} punktów!</div>}
          <div>
            <div className="title">Czas Gry</div>
            <div className="content">
              <button
                className={`app-button ${
                  initialTime === 60 ? 'activeButton' : ''
                }`}
                onClick={() => setInitialTime(60)}
              >
                1 minuta
              </button>
              <button
                className={`app-button ${
                  initialTime === 120 ? 'activeButton' : ''
                }`}
                onClick={() => setInitialTime(120)}
              >
                2 minuty
              </button>
              <button
                className={`app-button ${
                  initialTime === 180 ? 'activeButton' : ''
                }`}
                onClick={() => setInitialTime(180)}
              >
                3 minuty
              </button>
            </div>
          </div>

          <div>
            <div className="title">Liczba kretów</div>
            <div className="content">
              <button
                className={`app-button ${numMoles === 1 ? 'activeButton' : ''}`}
                onClick={() => setNumMoles(1)}
              >
                1 kret
              </button>
              <button
                className={`app-button ${numMoles === 2 ? 'activeButton' : ''}`}
                onClick={() => setNumMoles(2)}
              >
                2 krety
              </button>
              <button
                className={`app-button ${numMoles === 3 ? 'activeButton' : ''}`}
                onClick={() => setNumMoles(3)}
              >
                3 krety
              </button>
            </div>
          </div>

          <div>
            <div className="title">Przyciski sterujące</div>
            <div className="content">
              <button className="app-button" onClick={handleStartGame}>
                Start
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
