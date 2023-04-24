export const initialState = {
  disable_mentee_questions: false,
  disable_mentor_questions: true,
  mentee_question: { id: '', text: '' },
  mentor_question: { id: '', text: '' },
  pairs: [],
};

export function selectionReducer(state, action) {
  switch (action.type) {
    case 'mentee_question_selected':
      return {
        ...state,
        disable_mentee_questions: true,
        disable_mentor_questions: false,
        mentee_question: {
          id: action.payload.id,
          idx: action.payload.idx,
          text: action.payload.text,
          disabled: true,
        },
      };
    case 'mentor_question_selected':
      return {
        ...state,
        disable_mentee_questions: false,
        disable_mentor_questions: true,
        mentor_question: { id: action.payload.id, text: action.payload.text },
        pairs: [
          ...state.pairs,
          {
            mentee_question: state.mentee_question,
            mentor_question: {
              id: action.payload.id,
              idx: action.payload.idx,
              text: action.payload.text,
            },
          },
        ],
      };
    case 'remove_pair':
      return {
        ...state,
        pairs: state.pairs.filter(
          (pair) => pair.mentee_question.id != action.payload
        ),
      };
    case 'clear_pairs':
      return {
        ...state,
        pairs: [],
      };
    default:
      return state;
  }
}
