const quizReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case quizActions.SET_CATEGORY:
      return { ...state, categoryID: payload };
    case quizActions.SET_CURRENT_QUESTION:
      return { ...state, currQuestion: payload };
    case quizActions.SET_ANSWERS:
      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          [payload.questionNo]: payload,
        },
      };
    case quizActions.RESET:
      return {
        currQuestion: 0,
        selectedOptions: {},
        categoryID: "",
      };
    default:
      return { ...state };
  }
};

const quizActions = {
  SET_CURRENT_QUESTION: "SET_CURRENT_QUESTION",
  SET_CATEGORY: "SET_CATEGORY",
  SET_ANSWERS: "SET_ANSWERS",
  RESET: "RESET",
};

export { quizActions, quizReducer };
