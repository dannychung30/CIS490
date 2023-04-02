import QuestionWeightForm from './components/QuestionWeightForm';
import Keys from '../Models/Keys';
import Storage from '../Models/Storage';
import MenteeMatchesCardCollection from './components/MenteeMatchesCardCollection';
import { useState } from 'react';

export default function Results() {
  const [matches, setMatches] = useState(new Storage(Keys.Mentees).getAll());
  const [pairs, setPairs] = useState(new Storage(Keys.Question_Pairs).getAll());

  return (
    <>
      <QuestionWeightForm
        pairs={pairs}
        setPairs={setPairs}
        setMatches={setMatches}
      />
      <div className='results-list'>
        <MenteeMatchesCardCollection cards={matches} />
      </div>
    </>
  );
}
