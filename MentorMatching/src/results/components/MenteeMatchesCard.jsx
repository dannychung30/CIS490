function MatchedMentorsList({ matches }) {
  return matches.map((match) => (
    <div key={match.mentor.id}>
      <p>
        {match.mentor.firstName} matched{' '}
        <strong>{match.scores.total_score}%</strong>
      </p>
    </div>
  ));
}

export default function MenteeMatchesCard(props) {
  return (
    <div className='mentee-cards'>
      <div>
        <h2 keys={props.name}>{props.name}</h2>
      </div>
      <MatchedMentorsList matches={props.matches} />
    </div>
  );
}
