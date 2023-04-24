import Keys from '../Models/Keys';
import Storage from '../Models/Storage';
import MenteeMatchesCardCollection from './components/MenteeMatchesCardCollection';
import { useState } from 'react';
import { CSVLink, CSVDownload } from 'react-csv';

// import gsap from "gsap";

// export function fadeCardsAnimation() {
//   let lastTime;

//   document.addEventListener('scroll', onScroll);

//   function onScroll() {
//     // throttle amount we call the fade in function to every 50ms
//     if (Date.now() - 50 > lastTime) {
//       fadeIn();
//     }
//   }

//   // fade in all cards that should be faded in
//   function fadeIn() {
//     lastTime = Date.now();

//     // get list of elements that should fade in
//     const objsToFadeIn = [];
//     // grabbing all mentee cards
//     const mentee_cards = document.querySelectorAll(".mentee-cards:not(.loaded)");
//     mentee_cards.forEach(card => {
//       if (card.offsetTop < scrollY + innerHeight) {
//         objsToFadeIn.push(card);
//       } else {
//         return;
//       }
//     });

//     if (objsToFadeIn.length) {
//       gsap.set(objsToFadeIn, {className: "mentee-cards loaded"});
//       gsap.to(objsToFadeIn, {autoAlpha: 1, stagger: 0.1});
//     }
//   }
// }

export default function Results() {
  const [matches, setMatches] = useState(new Storage(Keys.Mentees).getAll());
  function handleExportFunction() {
    const formatted = matches.map((match) => [
      `${match.firstName} ${match.lastName}`,
      ...match.matches.map((mentor) => {
        return `${mentor.mentor.firstName} ${mentor.mentor.lastName}`;
      }),
    ]);
    return formatted;
  }

  return (
    <div className='container'>
      <CSVLink
        className='button-primary'
        filename='results'
        data={handleExportFunction()}
        target='_blank'
      >
        Export
      </CSVLink>
      <MenteeMatchesCardCollection cards={matches} />
    </div>
  );
}

const top_scroll = document.querySelector('.scroll-top-button');
const btm_scroll = document.querySelector('.scroll-btm-button');

top_scroll.addEventListener('click', () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

btm_scroll.addEventListener('click', () => {
  document.documentElement.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
});

document.addEventListener('scroll', () => {
  if (
    document.documentElement.scrollTop > 1000 ||
    document.body.scrollTop > 1000
  ) {
    top_scroll.classList.remove('hidden-button');
    btm_scroll.classList.add('hidden-button');
  } else {
    top_scroll.classList.add('hidden-button');
    btm_scroll.classList.remove('hidden-button');
  }
});
