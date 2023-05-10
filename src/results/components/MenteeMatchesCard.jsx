function MatchedMentorsList({ matches }) {
  return matches.map((match) => (
    <div className='name-score' key={match.mentor.id}>
      <p className='match-name'>{match.mentor.name}</p>
      <p className='score'>{match.scores.total_score}</p>
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
