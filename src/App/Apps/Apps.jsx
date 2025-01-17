import React from 'react';
import AppCard from './AppCard/AppCard';
import moleIcon from './AppsIcons/moleicon.png';
import memoIcon from './AppsIcons/memogame.png';
import moonIcon from './AppsIcons/moonicon.png';
// import todoIcon from './AppsIcons/todo.png';
import pokemonIcon from './AppsIcons/pokeball.png';
import './styles.css';

const appsShowcase = [
  {
    sectionTitle: 'Gra "Kret"',
    icon: <img src={moleIcon} alt="krecik" />,
    description:
      'Klasyczna gra "uderz kreta" dla nauki obsługi stanów w aplikacji, czasu i renderowania elementów',
    link: '/exercises/js/mole',
  },
  {
    sectionTitle: 'Gra "Memo"',
    icon: <img src={memoIcon} alt="memo" />,
    description: 'Gra Memo - kolejny, bardziej idywidualny projekt gry',
    link: '/exercises/js/memo-game',
  },
  {
    sectionTitle: 'Fazy księżyca',
    icon: <img src={moonIcon} alt="księżyc" />,
    description:
      'Aplikacja pokazująca aktualną fazę księzyca, stworzona z AI, używa algorytmu astronomicznego oraz MUI',
    link: '/exercises/js/moon-phases',
  },
  //////////////////////////TODO: solve backend to make it work as done while course///////////////////////////////
  // {
  //   sectionTitle: 'ToDo',
  //   icon: <img src={todoIcon} alt="todo" />,
  //   description: 'Apka TODO korzystająca z dostarczonego serwera',
  //   link: '/exercises/react/todo-with-server',
  // },
  {
    sectionTitle: 'Pokemony',
    icon: <img src={pokemonIcon} alt="pokemon" />,
    description: '100 pokemonów z pokeapi!',
    link: '/exercises/js/Exercise-js-promises',
  },
];

export const Apps = () => {
  return (
    <div className="apps-wrapper">
      {appsShowcase.map((card, index) => {
        return <AppCard key={index} data={card} />;
      })}
    </div>
  );
};
