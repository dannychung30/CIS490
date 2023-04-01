export default function MenteeCard(props) {
    return (
        <div className="mentee-cards">
            <div>
                <h2 keys={props.name}>{props.name}</h2>
            </div>
            {
                props.matches.map((match) => {
                    return (
                        <div>
                            <p key={match.mentor}>
                                {match.mentor} matched <strong>{match.score}%</strong>
                            </p>
                        </div>
                    );
                })
            }
        </div >
    );
}