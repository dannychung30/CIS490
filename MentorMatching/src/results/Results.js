import MenteeCard from './components/MenteeMatchesCard';

export default function Results() {
  const mentees = JSON.parse(localStorage.getItem('Mentees'));
  console.log(mentees);

  return (
    <div className='results-list'>
      {mentees.map((mentee) => (
        <MenteeCard
          key={mentee.id}
          name={`${mentee.firstName} ${mentee.lastName}`}
          matches={mentee.possible_matches}
        />
      ))}
    </div>
  );
}
