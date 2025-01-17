import './styles.css';
import React, { useState, useEffect } from 'react';
import { MoleGameBoard } from './MoleGameBoard';
import { MoleGameSettings } from './MoleGameSettings';
import hitSoundFile from './sounds/hit.mp3';
import missedSoundFile from './sounds/missed.mp3';

export const HitTheMoleGame = () => {
  const moleSpeed = 1000;
  const defaultGameTime = 2 * 60;
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false, isMissed: false })
  );
  const [gameTime, setGameTime] = useState(defaultGameTime);
  const [moleCount, setMoleCount] = useState(1);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [counter, setCounter] = useState(gameTime);
  const backgroundColorDuration = 300;
  const hitSound = new Audio(hitSoundFile);
  const missedSound = new Audio(missedSoundFile);

  useEffect(() => {
    let countdownInterval;
    if (gameStarted) {
      if (!countdownInterval) {
        countdownInterval = setInterval(() => {
          setCounter((previousCounter) => previousCounter - 1);
        }, moleSpeed);
        if (counter === 0) {
          setGameStarted(false);
          clearInterval(countdownInterval);
        }
        console.log(gameStarted);
        console.log(counter);
        return () => clearInterval(countdownInterval);
      }
    }
  }, [gameStarted, counter]);
  useEffect(() => {
    setCounter(() => gameTime);
  }, [gameTime]);

  useEffect(() => {
    setMoleCount(() => moleCount);
  }, [moleCount]);

  useEffect(() => {
    if (gameStarted && counter > 0) {
      showRandomMoles();
    }
  }, [gameStarted, counter]);

  useEffect(() => {
    if (gameStarted) {
      setCounter(gameTime);
      setScore(0);
    }
  }, [gameStarted, gameTime]);

  function showRandomMoles() {
    function getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const randomArray = Array(moleCount)
      .fill(1)
      .reduce((accumulator, currentValue, index) => {
        let newNumber = getRandom(0, 9);

        while (accumulator.includes(newNumber)) {
          newNumber = getRandom(0, 9);
        }
        return [...accumulator, newNumber];
      }, []);
    console.log(moleCount);
    console.log(randomArray);

    setMoleArray((previousMoleArray) =>
      previousMoleArray.map((mole, index) => {
        const newMole = { ...mole };
        newMole.isVisible = randomArray.includes(index);

        return newMole;
      })
    );
    console.log(moleArray);
  }

  function hitTheMole(index) {
    if (moleArray[index].isVisible) {
      setScore(score + 1);
      setMoleArray((prevVal) => {
        const newArray = [...prevVal];
        newArray[index].isWhacked = true;
        hitSound.play();
        return newArray;
      });
    } else if (!moleArray[index].isVisible) {
      setMoleArray((prevVal) => {
        const newArray = [...prevVal];
        newArray[index].isMissed = true;
        missedSound.play();
        return newArray;
      });
    }
    setTimeout(() => {
      setMoleArray((prevVal) => {
        const newArray = [...prevVal];
        newArray[index].isWhacked = false;
        newArray[index].isVisible = false;
        newArray[index].isMissed = false;
        return newArray;
      });
    }, backgroundColorDuration);
  }
  return (
    <>
      {!gameStarted ? (
        <MoleGameSettings
          gameTime={gameTime}
          setGameTime={setGameTime}
          moleCount={moleCount}
          setMoleCount={setMoleCount}
          startStopGame={() => setGameStarted((prev) => !prev)}
          gameStarted={gameStarted}
        />
      ) : null}

      {!gameStarted && score !== 0 ? (
        <>
          <h1>
            GRATULACJE! Uzyskałeś {score} trafień w ciagu {gameTime} sekund.
          </h1>
        </>
      ) : null}
      {gameStarted ? (
        <MoleGameBoard
          moleArray={moleArray}
          hitTheMole={hitTheMole}
          score={score}
          setScore={setScore}
          counter={counter}
          setCounter={setCounter}
          startStopGame={() => setGameStarted((prev) => !prev)}
          gameStarted={gameStarted}
        />
      ) : null}
    </>
  );
};
