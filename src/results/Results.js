import Keys from '../Models/Keys';
import Storage from '../Models/Storage';
import MenteeMatchesCardCollection from './components/MenteeMatchesCardCollection';
import { useState } from 'react';
import { CSVLink, CSVDownload } from 'react-csv';

export default function Results() {
  const [matches, setMatches] = useState(new Storage(Keys.Mentees).getAll());
  function handleExportFunction() {
    const formatted = matches.map((mentee) => [
      mentee.name,
      ...mentee.matches.map((match) => match.mentor.name),
    ]);
    return formatted;
  }

  return (
    <div className='container'>
      <h1 className='results-header'>Here are the results!</h1>
      <CSVLink
        className='button-primary export-btn'
        filename='results'
        data={handleExportFunction()}
        target='_blank'
      >
        Export &#8685;
      </CSVLink>
      <MenteeMatchesCardCollection cards={matches} />
    </div>
  );
}

const top_scroll = document.querySelector('.scroll-top-button');
const btm_scroll = document.querySelector('.scroll-btm-button');

top_scroll.addEventListener('click', () => {
  document.body.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

btm_scroll.addEventListener('click', () => {
  document.body.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
});

document.body.addEventListener('scroll', () => {
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
