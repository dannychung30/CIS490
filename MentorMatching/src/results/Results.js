import AnotherComponent from './components/AnotherComponent';
import Header from './components/Header';
import Storage from '../Models/Storage';
import Keys from '../Models/Keys';
import MenteeCard from './components/MenteeCard';

export default function Results() {
  const mentees = JSON.parse(localStorage.getItem('Mentees'));
  console.log(mentees);

  return (
    <div>
      {mentees.map((mentee) => (
        <MenteeCard
          key={mentee.id}
          name={mentee.id}
          matches={mentee.possible_matches}
        />
      ))}
    </div>
  );
}
