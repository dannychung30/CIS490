export default function MenteeCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      {props.matches.map((match) => {
        return (
          <p key={match.mentor}>
            {match.mentor} <b>{match.score}</b>
          </p>
        );
      })}
    </div>
  );
}
