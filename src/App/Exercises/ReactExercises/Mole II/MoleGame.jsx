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
const game_time = 60;
const interval_time = 1000;

export const MoleGame = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [initialTime, setInitialTime] = useState(game_time);
  const [time, setTime] = useState(game_time);

  const [gameFields, setGameFields] = useState(fields);
  const [moleFieldId, setMoleFieldId] = useState(getRandomInt(10));
  const [intervalId, setIntervalId] = useState(null);
  const [score, setScore] = useState(0);

  const handleStartGame = () => {
    setIsGameStarted(true);
    const intervalId = setInterval(() => {
      setMoleFieldId(getRandomInt(10));
    }, interval_time);
  };

  const handleStopGame = () => {
    setIsGameStarted(false);
    clearInterval(intervalId);
  };

  const resetClickedField = () => {
    setTimeout(() => {
      setGameFields(
        gameFields.map((field) => {
          return {
            ...field,
            hasCliked: false,
          };
        })
      );
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
        time > 0 && setTime(time - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [time, isGameStarted]);

  useEffect(() => {
    if (time === 0) {
      handleStopGame();
    }
  }, [time]);

  return (
    <div>
      <h2>
        Gra polegająca na podążaniu za krecikiem i trafieniu w kwadrat na którym
        się pojawił.
      </h2>
      {isGameStarted ? (
        <div>
          Gra wystartowała
          <div>
            {/* Gra nie wystartowała */}
            <div>
              <div className="title">Czas do końca</div>
              <div className="content">
                <button disabled={true}>1:35</button>
              </div>
            </div>

            <div>
              <div className="title">Wynik</div>
              <div className="content">
                <button disabled={true}>{score}</button>
              </div>
            </div>

            <div>
              <div className="title">Przyciski sterujące</div>
              <div className="content">
                <button onClick={handleStopGame}>Stop</button>
              </div>
            </div>
          </div>
          <div>
            {/* Widok rozgrywki... */}
            {gameFields.map((field) => {
              const isMolePresent = field.id === moleFieldId;
              const isClickedWithMole =
                isMolePresent && field.hasCliked ? 'green' : '';
              const isClickedWithoutMole =
                !isMolePresent && field.hasCliked ? 'red' : '';
              return (
                <div
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
        <div>
          {/* Gra nie wystartowała */}
          <div>
            <div className="title">Czas Gry</div>
            <div className="content">
              <button>1 minuta</button>
            </div>
          </div>

          <div>
            <div className="title">Liczba kretów</div>
            <div className="content">
              <button>1 kret</button>
            </div>
          </div>

          <div>
            <div className="title">Przyciski sterujące</div>
            <div className="content">
              <button onClick={handleStartGame}>Start</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
