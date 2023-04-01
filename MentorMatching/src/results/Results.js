import AnotherComponent from './components/AnotherComponent';
import Header from './components/Header';
import Storage from '../Models/Storage';
import Keys from '../Models/Keys';

import MenteeCard from './components/MenteeMatchesCard';

export default function Results() {
  const mentees = JSON.parse(localStorage.getItem('Mentees'));

  return (
    <div className='results-list'>
      {mentees.map((mentee) => (
        <MenteeCard
          key={mentee.id}
          name='Mentee'
          matches={mentee.possible_matches}
        />
      ))}
    </div>
  );
}
