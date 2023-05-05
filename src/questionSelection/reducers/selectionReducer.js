export const initialState = {
  mentee_survey: JSON.parse(localStorage.getItem('MenteeSurvey')).map((q) => {
    return { ...q, selected: false };
  }),
  mentor_survey: JSON.parse(localStorage.getItem('MentorSurvey')).map((q) => {
    return { ...q, selected: false };
  }),
  disable_mentee_questions: false,
  disable_mentor_questions: true,
  mentee_question: { id: '', text: '' },
  mentor_question: { id: '', text: '' },
  pairs: [],
};

export function selectionReducer(state, action) {
  console.log(state.mentee_question.id);
  switch (action.type) {
    case 'mentee_question_selected':
      return {
        ...state,
        mentee_question: {
          id: action.payload.id,
          idx: action.payload.idx,
          text: action.payload.text,
          weight: action.payload.weight,
        },
      };
    case 'mentor_question_selected':
      return {
        ...state,
        mentee_survey: state.mentee_survey.map((q) => {
          if (q.id === state.mentee_question.id) {
            q.selected = true;
          }
          return q;
        }),
        mentor_survey: state.mentor_survey.map((q) => {
          if (q.id === action.payload.id) {
            q.selected = true;
          }
          return q;
        }),
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
        mentee_survey: state.mentee_survey.map((q) => {
          if (q.id === action.payload.mentee_question_id) {
            q.selected = false;
          }
          return q;
        }),
        mentor_survey: state.mentor_survey.map((q) => {
          if (q.id === action.payload.mentor_question_id) {
            q.selected = false;
          }
          return q;
        }),
        pairs: state.pairs.filter(
          (pair) => pair.mentee_question.id != action.payload.mentee_question_id
        ),
      };
    case 'clear_pairs':
      return {
        ...state,
        mentee_survey: JSON.parse(localStorage.getItem('MenteeSurvey')).map(
          (q) => {
            return { ...q, selected: false };
          }
        ),
        mentor_survey: JSON.parse(localStorage.getItem('MentorSurvey')).map(
          (q) => {
            return { ...q, selected: false };
          }
        ),
        pairs: [],
      };
    default:
      return state;
  }
}
