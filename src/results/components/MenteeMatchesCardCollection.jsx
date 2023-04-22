import MenteeMatchesCard from './MenteeMatchesCard';

export default function MenteeMatchesCardCollection({ cards }) {
  return (
    <div className='results-list'>
      {cards.map((mentee) => (
        <MenteeMatchesCard
          key={mentee.id}
          name={`${mentee.firstName} ${mentee.lastName}`}
          matches={mentee.possible_matches}
        />
      ))}
    </div>
  );
}
