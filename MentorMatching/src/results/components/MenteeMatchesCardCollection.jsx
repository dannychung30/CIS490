import MenteeMatchesCard from './MenteeMatchesCard';

export default function MenteeMatchesCardCollection({ cards }) {
  return cards.map((mentee) => (
    <MenteeMatchesCard
      key={mentee.id}
      name={`${mentee.firstName} ${mentee.lastName}`}
      matches={mentee.possible_matches}
    />
  ));
}
