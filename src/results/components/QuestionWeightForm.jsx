import { useState } from 'react';

export default function QuestionWeightForm({ pairs, setMatches }) {
  function handleFormSubmit(e) {
    e.preventDefault();
    const inputs = Array.from(
      e.target.querySelectorAll('input[type=number]')
    ).map((input) => {
      return { id: input.id, value: input.value };
    });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Questions</h2>
      {pairs.map((pair) => (
        <Question key={pair.menteeQuestion.id} data={pair} />
      ))}
      <input type='submit' value='Regenerate' />
    </form>
  );
}

function Question({ data }) {
  const [multiplier, setMultiplier] = useState(data.weightMultiplier);

  function handleInputChange(e) {
    if (e.target.value > 0) {
      setMultiplier(e.target.value);
    }
  }

  return (
    <>
      <label htmlFor={data.menteeQuestion.id}>
        {data.menteeQuestion.question}
      </label>
      <input
        id={data.menteeQuestion.id}
        type='number'
        value={multiplier}
        onChange={handleInputChange}
      />
    </>
  );
}
