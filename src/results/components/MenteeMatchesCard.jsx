function MatchedMentorsList({ matches }) {
  return matches.map((match) => (
    <div className='name-score' key={match.mentor.id}>
      {match.mentor.name}{' '}
      <strong className='score'>{match.scores.total_score}</strong>
    </div>
  ));
}

export default function MenteeMatchesCard(props) {
  return (
    <div className='mentee-cards'>
      <div>
        <h2>{props.name}</h2>
      </div>
      <MatchedMentorsList matches={props.matches} />
    </div>
  );
}
